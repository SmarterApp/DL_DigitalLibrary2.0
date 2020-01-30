import {AbstractControl, ControlValueAccessor} from '@angular/forms';

/**
 * Extend this class to easily integrate your custom form control with angular's reactive forms
 */
export abstract class AbstractFormControlValueAccessor implements ControlValueAccessor {

  /**
   * Provide the FormControl or FormGroup associated with your custom form control component
   */
  abstract get control(): AbstractControl;

  public onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(callback: any): void {
    this.control.valueChanges.subscribe(callback);
  }

  registerOnTouched(callback: any): void {
    this.onTouched = callback;
  }

  setDisabledState(value: boolean): void {
    value ? this.control.disable() : this.control.enable();
  }

}
