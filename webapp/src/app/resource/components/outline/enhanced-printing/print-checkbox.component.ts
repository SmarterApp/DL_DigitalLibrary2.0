import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';
import { IdGeneratorService } from 'src/app/common/id-generator.service';
import { DocumentSection } from 'src/app/resource/components/outline/document-outline.model';

@Component({
  selector: 'sbdl-print-checkbox',
  templateUrl: './print-checkbox.component.html',
  styleUrls: ['./print-checkbox.component.scss']
})
export class PrintCheckboxComponent implements AfterViewInit, OnChanges, OnDestroy {

  @Input()
  documentSection: DocumentSection;

  // You would think that this could be passed in as an Input, but for some
  // reason if this is not defined during object construction, the link between
  // the MDCFormField and MDCCheckbox is broken and clicking the label will not
  // toggle the checkbox.
  id = this.idService.nextId('sbdl-print-checkbox');

  private checkbox: MDCCheckbox;
  private formField: MDCFormField;

  @Output()
  changed = new EventEmitter<DocumentSection>();

  @ViewChild('formField', { static: false })
  formFieldRef: ElementRef;

  @ViewChild('checkbox', { static: false })
  checkboxRef: ElementRef;

  constructor(private idService: IdGeneratorService) { }

  ngAfterViewInit() {
    this.checkbox = new MDCCheckbox(this.checkboxRef.nativeElement);
    this.formField = new MDCFormField(this.formFieldRef.nativeElement);
    this.formField.input = this.checkbox;
    this.checkbox.checked = this.documentSection.selectedForPrint;
  }

  ngOnDestroy() {
    this.formField.destroy();
    this.checkbox.destroy();
  }

  ngOnChanges() {
    if (this.checkbox) {
      this.checkbox.checked = this.documentSection.selectedForPrint;
    }
  }

  change(checked: boolean) {
    this.documentSection.selectedForPrint = checked;
    this.changed.emit(this.documentSection);
  }

}
