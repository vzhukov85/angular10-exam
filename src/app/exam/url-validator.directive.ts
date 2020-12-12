import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[url-Validator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UrlValidatorDirective,
      multi: true,
    },
  ],
})
export class UrlValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } {
    const website: string = control.value;
    if (!website) {
      return null;
    }
    if (!website.startsWith('http://') && !website.startsWith('https://')) {
      return { websiteDesc: 'Url должен начинаться с http:// или https://' };
    }
    if (website.indexOf('.') < 0) {
      return { websiteDesc: 'Url должен содержать "."' };
    }
    return null;
  }
}
