import { Injectable } from '@angular/core'; import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { coalesce } from 'src/app/common/utils';
import { DataService } from '../data.service';
import { ResourceType } from './model/resource-type.enum';
import { Resource } from './model/resource.model';
import { ResourceProperties } from './model/properties.model';
import { ResourceAttachment, getFileTypeForMimeType } from './model/attachment.model';
import { InstructionalResource } from './model/instructional.model';
import { ProfessionalLearningResource } from './model/professional-learning.model';
import { EmbedStrategyLinksService } from './embed-strategy-links.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  // TODO: Define how assessment types are defined.  How will this be represented?
  // TODO: Define all assessment type icons.
  readonly assessmentTypeToIconMap: Map<number, string> = new Map([
    [ 1, 'asmt-math-6-7-the-number-system' ],
    [ 2, 'asmt-ela-summative' ],
    [ 3, 'asmt-ela-research' ],
    [ 4, 'asmt-ela-read-informational-texts' ],
  ]);

  constructor(private dataService: DataService,
              private embedStrategyLinkService: EmbedStrategyLinksService) { }

  get = (id: number): Observable<Resource> => {
    return this.dataService
      .get(`/resource/${id}`)
      .pipe(
        map(this.resourceFromJson),
        map(this.embedStrategyLinks));
  }

  private resourceFromJson = (resourceJson: any): Resource => {
    const resourceType = resourceJson.type as ResourceType;
    if (!Object.values(ResourceType).includes(resourceType)) {
      throw Error('Unrecognized resource type: ' + resourceJson.type);
    }

    // Our model objects should match the data models being returned from the
    // API, so all we really need to do is map types that are not representable
    // in JSON alone (Dates, enums, etc).
    return {
      ...resourceJson,
      attachments: this.attachmentsFromJson(resourceJson.attachments),
      properties: this.resourcePropertiesFromJson(resourceJson.properties),
      type: resourceType
    } as Resource;  // TODO: would be good to have some actual validation of this

  }

  private attachmentsFromJson(attachmentsJson): ResourceAttachment[] {
    return attachmentsJson.map(a => ({
      ...a,
      fileType: getFileTypeForMimeType(a.fileType)
    }));
  }

  private resourcePropertiesFromJson(propertiesJson: any): ResourceProperties {
    return {
      ...propertiesJson,
      lastUpdatedDate: new Date(propertiesJson.lastUpdatedDate)
    };
  }

  private embedStrategyLinks = (res: Resource) => {

    // We're going to call this a lot, so let's shorthand it
    const embed = this.embedStrategyLinkService.embedStrategyLinks;

    // Fields common to both

    if (res.type === ResourceType.Instructional) {

      const ir = res as InstructionalResource;
      ir.thingsToConsider = embed(ir.thingsToConsider, ir);
      ir.stepByStep.forEach(step => step.content = embed(step.content, ir));
      ir.getStarted.overview = embed(ir.getStarted.overview, ir);
      ir.getStarted.learningGoal = embed(ir.getStarted.learningGoal, ir);
      ir.getStarted.successCriteria = embed(ir.getStarted.learningGoal, ir);

      ir.differentiation = embed(ir.differentiation, ir);

      ir.formativeAssessHowTo.clarify = embed(ir.formativeAssessHowTo.clarify, ir);
      ir.formativeAssessHowTo.elicit = embed(ir.formativeAssessHowTo.elicit, ir);
      ir.formativeAssessHowTo.interpret = embed(ir.formativeAssessHowTo.interpret, ir);
      ir.formativeAssessHowTo.act = embed(ir.formativeAssessHowTo.act, ir);

    } else if (res.type === ResourceType.ProfessionalLearning) {

      const pl = res as ProfessionalLearningResource;
      pl.thingsToConsider = embed(pl.thingsToConsider, pl);
      pl.stepByStep.forEach(step => step.content = embed(step.content, pl));
      pl.overview.overview = embed(pl.overview.overview, pl);
      pl.overview.learningGoal = embed(pl.overview.learningGoal, pl);
      pl.overview.successCriteria = embed(pl.overview.successCriteria, pl);

    }

    return res;
  }
}
