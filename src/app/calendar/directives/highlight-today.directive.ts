import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[highlighttoday]'
})
export class HighlightTodayDirective {

  private el: HTMLElement;
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.style.fontSize="15px";
  }

  _isToday: boolean;
  @Input() set inputDay(isToday: boolean) {
    this._isToday = isToday;
    if(this._isToday == true) {
      this.el.style.backgroundColor='blue';
    }
  }
}
