import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  Optional
} from '@angular/core';
import { MDCTextField } from '@material/textfield';
import {controlValueAccessorProvider} from '../../form/control-value-accessor.functions';
import {AbstractFormControlValueAccessor} from '../../form/abstract-form-control-value-accessor';
import {AbstractControl, ControlContainer, FormControl} from '@angular/forms';

@Component({
  selector: 'sbdl-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  providers: [
    controlValueAccessorProvider(TextFieldComponent)
  ]
})
export class TextFieldComponent extends AbstractFormControlValueAccessor implements AfterViewInit {
  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  fontAwesomeIcon: string;

  @Input()
  disabled: boolean;

  @Output()
  submit = new EventEmitter<string>();

  @ViewChild('textField', { static: false })
  textFieldRef: ElementRef;

  private readonly _formControl: FormControl = new FormControl('');

  constructor(
    @Optional() private controlContainer: ControlContainer
  ) {
    super();
  }

  get control(): AbstractControl {
    return this.controlContainer != null
      ? this.controlContainer.control
      : this._formControl;
  }

  ngAfterViewInit() {
    const textField = new MDCTextField(this.textFieldRef.nativeElement);
  }

  onSubmitButtonClick() {
    this.submit.emit(this.control.value);
  }
}
