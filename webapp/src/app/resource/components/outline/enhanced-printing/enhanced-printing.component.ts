import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Map } from 'immutable';
import { Resource } from 'src/app/data/resource/model/resource.model';
import { OutlineComponent } from '../outline.component';
import { DocumentOutline, DocumentSection, DocumentSectionType } from '../document-outline.model';
import { getCssVar } from 'src/app/common/utils';
import { ResourceType } from 'src/app/data/resource/model/resource-type.enum';

@Component({
  selector: 'sbdl-enhanced-printing',
  templateUrl: './enhanced-printing.component.html',
  styleUrls: ['../outline.component.scss', './enhanced-printing.component.scss']
})
export class EnhancedPrintingComponent extends OutlineComponent implements OnInit {
  @Input()
  resource: Resource;

  @Input()
  outline: DocumentOutline = Map<DocumentSectionType, DocumentSection>();

  @Output()
  printingModeChanged = new EventEmitter<boolean>();

  @Output()
  documentOutlineChanged = new EventEmitter<DocumentOutline>();

  cancel() {
    this.printingModeChanged.emit(false);
  }

  print() { window.print(); }

  sectionChanged(section: DocumentSection) {

    // Set all subsections to this value (assuming there are any)
    if (section.subsections) {
      section.subsections = section.subsections.map(s => ({
        ...s,
        selectedForPrint: section.selectedForPrint
      }));
    }

    this.outline = this.outline.set(section.type, section);
    this.documentOutlineChanged.emit(this.outline);
  }

  subsectionChanged(parentSection: DocumentSection, subsection: DocumentSection) {
    const updatedSection = {
      ...parentSection,
      selectedForPrint: parentSection.subsections.some(s => s.selectedForPrint)
    };

    this.outline = this.outline.set(updatedSection.type, updatedSection);
    this.documentOutlineChanged.emit(this.outline);
  }
}
