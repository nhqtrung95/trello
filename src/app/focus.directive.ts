import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective {
    @Input()
    focus:boolean;
    constructor(inject: ElementRef, private element: ElementRef) {}
    protected ngOnChanges() {
        this.element.nativeElement.focus();
    }
}
