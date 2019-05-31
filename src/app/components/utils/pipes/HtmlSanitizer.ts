/**
 * Created by martinbraun on 27.03.17.
 */

import {Pipe, PipeTransform, Sanitizer} from "@angular/core";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({name: 'htmlSanitizer'})
export class HtmlSanitizer implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(v: string) : SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(v);
  }
}
