import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Map} from 'immutable';
import {Resource} from 'src/app/data/resource/model/resource.model';
import {OutlineComponent} from '../outline.component';
import {DocumentOutline, DocumentSection, DocumentSectionType} from '../document-outline.model';

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

  allSelected: boolean;

  static calculateAllSelected(outline: DocumentOutline): boolean {
    if (!outline) { return true; }

    const result = Array.from(outline.values()).filter(s => s.canPrint).every((section) => {
      return section.selectedForPrint &&
        (section.subsections ?
          section.subsections.every(ss => ss.selectedForPrint) :
          true);
    });

    return result;
  }

  ngOnInit() {
    super.ngOnInit();
    this.allSelected = EnhancedPrintingComponent.calculateAllSelected(this.outline);
  }

  cancel() {
    this.printingModeChanged.emit(false);
  }

  print() { this.window.print(); }

  sectionChanged(section: DocumentSection) {

    // Set all subsections to this value (assuming there are any)
    if (section.subsections) {
      section.subsections = section.subsections.map(s => ({
        ...s,
        selectedForPrint: section.selectedForPrint
      }));
    }

    this.outline = this.outline.set(section.type, section);
    this.allSelected = EnhancedPrintingComponent.calculateAllSelected(this.outline);
    this.documentOutlineChanged.emit(this.outline);
  }

  subsectionChanged(parentSection: DocumentSection, subsection: DocumentSection) {
    const updatedSection = {
      ...parentSection,
      selectedForPrint: parentSection.subsections.some(s => s.selectedForPrint)
    };

    this.outline = this.outline.set(updatedSection.type, updatedSection);
    this.allSelected = EnhancedPrintingComponent.calculateAllSelected(this.outline);
    this.documentOutlineChanged.emit(this.outline);
  }

  toggleFullSelection() {
    const shouldBeSelected = !this.allSelected;
    this.outline = this.outline.map((section, sectionType) => {
      if (!section.canPrint) { return section; }
      return {
        ...section,
        selectedForPrint: shouldBeSelected,
        subsections: !section.subsections ? [] :
        section.subsections.map(ss => ({ ...ss, selectedForPrint: shouldBeSelected }))
      };
    });

    this.allSelected = EnhancedPrintingComponent.calculateAllSelected(this.outline);
    this.documentOutlineChanged.emit(this.outline);
  }
}
