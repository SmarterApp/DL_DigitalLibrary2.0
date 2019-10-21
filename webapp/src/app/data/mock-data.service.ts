import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { LoggingService } from '../common/logging/logging.service';
import { DataService } from './data.service';
import {
  mockAccessibilityStrategy, mockApiResource, mockApiResource2,
  mockApiResourceWithNulls,
  mockDocument52, mockDocument53, mockDocument54, mockDocument55,
  mockFormativeStrategy,
  mockPlaylistResource,
  mockProfessionalResource,
  mockUser, mockSearchFilters, mockMathClaims, mockElaClaims,

  // demo resource content
  mockIrAllSystemsGo, mockIrDocAllSystemsGoHandout,
  mockIrDocAllSystemsGoPractice, mockIrDocAllSystemsGoPresentation,

  mockIrGrainOfSandDropOfWater, mockIrDocGrainEntranceTicket,
  mockIrDocGrainEntranceTicketKey, mockIrDocGrainVocabularyList,
  mockIrDocGrainIDoSource, mockIrDocGrainWeDoSource, mockIrDocGrainYouDoSource,
  mockIrDocGrainPractice,

  mockIrAnyWayYouSliceIt, mockIrDocAnySlicePresentation,
  mockIrDocAnySlicePolygonList, mockIrDocAnySliceAtLevel,
  mockIrDocAnySliceBelowLevel, mockIrDocAnySliceAboveLevel,
  mockIrDocAnySliceCrossSections,

  mockIrSearchingForRelevantResources, mockIrDocSearchingRelevantRules,
  mockIrDocSearchingRelevantSourcesChart, mockIrDocSearchingInternetSearch,

  mockIrIntroToQuadFormula, mockIrDocQuadPresentation, mockIrDocQuadQQS,
  mockIrDocQuadActivity,

  mockPlDeepeningUnderstandingOfFAP, mockPlDocDeepeningChatStations,
  mockPlDocGalleryWalk, mockPlDocDeepeningTeamNorms, mockPlDocDeepeningGraphicOrganizer,
  mockPlDocDeepeningFAPExcerpt,

  mockPlFocusOnFeedback, mockPlDocFocusOnFeedbackPresentation,
  mockPlDocFocusOnFeedbackVideoNotes,

  mockFas3ActTasks, mockFasDoc3ActTasksSample,

  mockFas5MathProcesses, mockFasDoc5MathProcessesSample,

  mockAcsBreaks, mockAcsAmplification

} from './mock-data';

// Work around for:
// https://stackoverflow.com/questions/48953587/typescript-class-implements-class-with-private-functions
// tldr; We can't implement a class with privates, so we need a wrapper type to pull out the publics.
type PublicPart<T> = {[K in keyof T]: T[K]};

@Injectable()
export class MockDataService implements PublicPart<DataService> {
  readonly mockGetDataEndpoints = [
    { pattern: /^\/userinfo$/, result: mockUser },
    { pattern: /\/resources\/0$/, result: mockApiResourceWithNulls },
    { pattern: /\/resources\/1$/, result: mockApiResource },
    { pattern: /\/resources\/2$/, result: mockApiResource2 },
    { pattern: /\/resources\/3$/, result: mockProfessionalResource },
    { pattern: /\/resources\/4$/, result: mockAccessibilityStrategy },
    { pattern: /\/resources\/5$/, result: mockFormativeStrategy },
    { pattern: /\/resources\/6$/, result: mockPlaylistResource },
    { pattern: /\/resources\/7$/, result: mockIrAllSystemsGo },
    { pattern: /\/resources\/8$/, result: mockIrGrainOfSandDropOfWater },
    { pattern: /\/resources\/9$/, result: mockIrAnyWayYouSliceIt },
    { pattern: /\/resources\/10$/, result: mockIrSearchingForRelevantResources },
    { pattern: /\/resources\/11$/, result: mockIrIntroToQuadFormula },
    /*
    { pattern: /\/resources\/12$/, result: mockPlDeepeningUnderstandingOfFAP },
    { pattern: /\/resources\/13$/, result: mockPlFocusOnFeedback },
    */
    { pattern: /\/resources\/14$/, result: mockFas3ActTasks },
    { pattern: /\/resources\/15$/, result: mockFas5MathProcesses },
    { pattern: /\/resources\/16$/, result: mockAcsBreaks },
    { pattern: /\/resources\/17$/, result: mockAcsAmplification },
    { pattern: /\/resources\/[0-9]/, result: mockIrAllSystemsGo },
    { pattern: /\/file_documents\/52/, result: mockDocument52 },
    { pattern: /\/file_documents\/53/, result: mockDocument53 },
    { pattern: /\/file_documents\/54/, result: mockDocument54 },
    { pattern: /\/file_documents\/55/, result: mockDocument55 },

    // All Systems Go! documents
    { pattern: /\/file_documents\/100/, result: mockIrDocAllSystemsGoHandout },
    { pattern: /\/file_documents\/101/, result: mockIrDocAllSystemsGoPractice },
    { pattern: /\/file_documents\/102/, result: mockIrDocAllSystemsGoPresentation },

    // A Grain Of And documents
    { pattern: /\/file_documents\/200/, result: mockIrDocGrainEntranceTicket },
    { pattern: /\/file_documents\/201/, result: mockIrDocGrainEntranceTicketKey },
    { pattern: /\/file_documents\/202/, result: mockIrDocGrainVocabularyList },
    { pattern: /\/file_documents\/203/, result: mockIrDocGrainIDoSource },
    { pattern: /\/file_documents\/204/, result: mockIrDocGrainYouDoSource },
    { pattern: /\/file_documents\/205/, result: mockIrDocGrainWeDoSource },
    { pattern: /\/file_documents\/206/, result: mockIrDocGrainPractice },

    // Any Way You Slice It documents
    { pattern: /\/file_documents\/300/, result: mockIrDocAnySlicePresentation },
    { pattern: /\/file_documents\/301/, result: mockIrDocAnySlicePolygonList },
    { pattern: /\/file_documents\/302/, result: mockIrDocAnySliceAtLevel },
    { pattern: /\/file_documents\/303/, result: mockIrDocAnySliceBelowLevel },
    { pattern: /\/file_documents\/304/, result: mockIrDocAnySliceAboveLevel },
    { pattern: /\/file_documents\/305/, result: mockIrDocAnySliceCrossSections },

    // Searching for Relevant Resources documents
    { pattern: /\/file_documents\/400/, result: mockIrDocSearchingRelevantRules },
    { pattern: /\/file_documents\/401/, result: mockIrDocSearchingRelevantSourcesChart },
    { pattern: /\/file_documents\/402/, result: mockIrDocSearchingInternetSearch },

    // Intro To THe Quadratic Formaul documents
    { pattern: /\/file_documents\/500/, result: mockIrDocQuadPresentation },
    { pattern: /\/file_documents\/501/, result: mockIrDocQuadQQS },
    { pattern: /\/file_documents\/502/, result: mockIrDocQuadActivity },

    // Deepening Understanding of FAP documents
    { pattern: /\/file_documents\/600/, result: mockPlDocDeepeningChatStations },
    { pattern: /\/file_documents\/601/, result: mockPlDocGalleryWalk },
    { pattern: /\/file_documents\/602/, result: mockPlDocDeepeningTeamNorms },
    { pattern: /\/file_documents\/603/, result: mockPlDocDeepeningGraphicOrganizer },
    { pattern: /\/file_documents\/604/, result: mockPlDocDeepeningFAPExcerpt  },

    // Focus on Feedback documents
    { pattern: /\/file_documents\/700/, result: mockPlDocFocusOnFeedbackPresentation },
    { pattern: /\/file_documents\/701/, result: mockPlDocFocusOnFeedbackVideoNotes },

    // 3 Act Tasks documents
    { pattern: /\/file_documents\/800/, result: mockFasDoc3ActTasksSample },

    // 5 Math Processes documents
    { pattern: /\/file_documents\/900/, result: mockFasDoc5MathProcessesSample },

    { pattern: /\/search\/filters/, result: mockSearchFilters }
  ];

  readonly mockPostDataEndpoints = [
    { pattern: /^\/favorites\/resource$/, post: body => this.setFavorite(body) },
    { pattern: /^\/search/, post: body => this.postSearch(body) }
  ];

  readonly mockDownloadEndpoints = [
    { pattern: /\/file_documents\/52/, result: '/assets/mock-downloads/SBAC Running Record Analysis.pdf' },
    { pattern: /\/file_documents\/53/, result: '/assets/mock-downloads/note_taking.docx' },

    // All Systems Go! attachments
    { pattern: /\/file_documents\/100/, result: '/assets/mock-downloads/all-systems-go/student_handout.pdf' },
    { pattern: /\/file_documents\/101/, result: '/assets/mock-downloads/all-systems-go/practice.pdf' },
    { pattern: /\/file_documents\/102/, result: '/assets/mock-downloads/all-systems-go/teacher_presentation.pdf' },

    // A Grain of Sand attachments
    { pattern: /\/file_documents\/200/, result: '/assets/mock-downloads/a-grain-of-sand/entrance_ticket.pdf' },
    { pattern: /\/file_documents\/201/, result: '/assets/mock-downloads/a-grain-of-sand/entrance_ticket_key.pdf' },
    { pattern: /\/file_documents\/202/, result: '/assets/mock-downloads/a-grain-of-sand/vocabulary_list.pdf' },
    { pattern: /\/file_documents\/203/, result: '/assets/mock-downloads/a-grain-of-sand/i_do_source.pdf' },
    { pattern: /\/file_documents\/204/, result: '/assets/mock-downloads/a-grain-of-sand/you_do_source.pdf' },
    { pattern: /\/file_documents\/205/, result: '/assets/mock-downloads/a-grain-of-sand/we_do_source.pdf' },
    { pattern: /\/file_documents\/206/, result: '/assets/mock-downloads/a-grain-of-sand/practice.pdf' },

    // Any Way You Slice It attachments
    { pattern: /\/file_documents\/300/, result: '/assets/mock-downloads/any-way-you-slice-it/presentation.ppt' },
    { pattern: /\/file_documents\/301/, result: '/assets/mock-downloads/any-way-you-slice-it/polygons-and-sides.pdf' },
    { pattern: /\/file_documents\/302/, result: '/assets/mock-downloads/any-way-you-slice-it/worksheet-below-level.pdf' },
    { pattern: /\/file_documents\/303/, result: '/assets/mock-downloads/any-way-you-slice-it/worksheet-at-level.pdf' },
    { pattern: /\/file_documents\/304/, result: '/assets/mock-downloads/any-way-you-slice-it/worksheet-above-level.pdf' },
    { pattern: /\/file_documents\/305/, result: '/assets/mock-downloads/any-way-you-slice-it/worksheet-cross-sections.pdf' },

    // Searching for Relevant Resources attachments
    { pattern: /\/file_documents\/400/, result: '/assets/mock-downloads/searching-for-relevant-resources/relevant_rules.pdf' },
    { pattern: /\/file_documents\/401/, result: '/assets/mock-downloads/searching-for-relevant-resources/relevant_sources_chart.pdf' },
    { pattern: /\/file_documents\/402/, result: '/assets/mock-downloads/searching-for-relevant-resources/internet_search_activity.pdf' },

    // Intro To The Quadratic Formaul attachments
    { pattern: /\/file_documents\/500/, result: '/assets/mock-downloads/quadratic-formula/presentation.pdf' },
    { pattern: /\/file_documents\/501/, result: '/assets/mock-downloads/quadratic-formula/qqs.pdf' },
    { pattern: /\/file_documents\/502/, result: '/assets/mock-downloads/quadratic-formula/activity.pdf' },

    // Deepening Understanding of FAP attachments
    { pattern: /\/file_documents\/600/, result: '/assets/mock-downloads/deepening-understanding-of-fap/chat_stations.pptx' },
    { pattern: /\/file_documents\/601/, result: '/assets/mock-downloads/deepening-understanding-of-fap/gallery_walk.docx' },
    { pattern: /\/file_documents\/602/, result: '/assets/mock-downloads/deepening-understanding-of-fap/team_norms_winter_2019.pdf' },
    { pattern: /\/file_documents\/603/, result: '/assets/mock-downloads/deepening-understanding-of-fap/graphic_organizer_for_gallery_walk.docx' },
    { pattern: /\/file_documents\/604/, result: '/assets/mock-downloads/deepening-understanding-of-fap/fap_excerpts_for_gallery_walk.docx' },

    // Focus On Feedback attachments
    { pattern: /\/file_documents\/700/, result: '/assets/mock-downloads/focus-on-feedback/presentation.pptx' },
    { pattern: /\/file_documents\/701/, result: '/assets/mock-downloads/focus-on-feedback/video-notes.pdf' },

    // 3 Act Tasks attachments
    { pattern: /\/file_documents\/800/, result: '/assets/mock-downloads/3-act-tasks/sample1.xlsx' },

    // 5 Math Processes attachments
    { pattern: /\/file_documents\/900/, result: '/assets/mock-downloads/5-math-processes/sample.png' },

    { pattern: /\/file_documents\/[0-9]*/, result: '/assets/mock-downloads/video-game-credits.pdf' }
  ];

  readonly resources = [ mockApiResource, mockApiResource2 ];

  constructor(private logger: LoggingService) {
    this.logger.warn('Mock data service loaded.');
  }

  get(url: string, params?: any): Observable<any> {
    const mockedEndpoint = this.mockGetDataEndpoints.find(x => url.match(x.pattern) && url.match(x.pattern).length !== 0);

    if (mockedEndpoint && mockedEndpoint.result) {
      this.logger.debug(`Mocking API GET for ${url}`, mockedEndpoint.result);
      return of(mockedEndpoint.result);
    }

    return of(undefined);
  }

  post(url: string, obj: any): Observable<any> {
    const mockedEndpoint = this.mockPostDataEndpoints.find(x => url.match(x.pattern) && url.match(x.pattern).length !== 0);

    if (mockedEndpoint && mockedEndpoint.post) {
      this.logger.debug(`Mocking API POST for ${url}`, obj);
      return of(mockedEndpoint.post(obj)).pipe(delay(500));
    }

    return of(undefined);
  }

  downloadBlob(url: string): Observable<Blob> {
    // Don't want to inject httpClient in a mock data service which shouldn't be using one, but downlaoding from our assets
    // folder is an exception which won't be used in unit tests, only in standalone mode.
    const httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
    const mockedEndpoint = this.mockDownloadEndpoints.find(x => url.match(x.pattern) && url.match(x.pattern).length !== 0);
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/octet-stream',
      }),
      responseType : 'arraybuffer',
    } as any;

    return httpClient
      .get(mockedEndpoint.result, options)
      .pipe(map(response => new Blob([ response ])));
  }

  private postSearch(object: any): any {
    const claims = object.subjects && object.subjects.indexOf('math') !== -1
      ? [ ...mockMathClaims ]
      : [ ];

    if (object.subjects.indexOf('ela') !== -1) { claims.push(...mockElaClaims); }

    return {
      filters: { ... mockSearchFilters, claims },
      results: this.shuffleArray([
          mockApiResource,
          mockApiResource2,
          mockProfessionalResource,
          mockPlaylistResource,
          mockFormativeStrategy,
          mockAccessibilityStrategy
        ])// Randomize the results to simulate different searches on subsequent calls
        .splice(0, Math.floor(Math.random() * 5) + 1)
    };
  }

  private setFavorite(object: any): any {

    const resource = this.resources.find(x => x.id === object.resourceId);
    if (resource) {
      resource.favorite = object.favorite;
      return {
        resourceId: resource.id,
        favorite: resource.favorite
      };
    }

    return throwError('who knows');
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
}

