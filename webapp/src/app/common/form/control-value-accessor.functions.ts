import {Provider} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

/**
 * Convenience method for creating a control value accessor provider
 *
 * @param reference The class of component to reference (e.g. MyCustomFormControlComponent)
 */
export function controlValueAccessorProvider(reference: any): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: reference,
    multi: true
  };
}
