import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[RegisterIdDirective]'
})



export class RegisterIdDirective {
  // regexStr = '([^А-Я|Ө|Ү]{2})(\\d{8})';
  regexStr = '([a-zA-Z]{2})';
  constructor(private el: ElementRef) { }

  @Input() RegisterIdDirective: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.RegisterIdDirective) {

      let ch = String.fromCharCode(e.keyCode);
      let regEx =  new RegExp(this.regexStr);    
      if(regEx.test(ch))
        return;
      else
         e.preventDefault();
      }
  }
}
