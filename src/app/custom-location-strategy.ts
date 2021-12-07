import {Injectable} from '@angular/core';
import {HashLocationStrategy} from '@angular/common';

@Injectable()
export class CustomLocationStrategy extends HashLocationStrategy {
  prepareExternalUrl(internal: string): string {
    //alert(internal);
    return this.getBaseHref() + '#' + internal;
  }
}
