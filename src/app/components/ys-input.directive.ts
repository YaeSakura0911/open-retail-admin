import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
    selector: '[ysInput]',
    standalone: true,
})
export class YsInputDirective implements OnInit {
    @Input() formControl: AbstractControl | null = null;

    constructor(private element: ElementRef, private renderer2: Renderer2) {}

    ngOnInit() {
        this.formControl?.valueChanges.subscribe(value => {
            console.log(value)
        })
        this.formControl?.statusChanges.subscribe(status => {
            console.log(status)
            if (status == 'VALID') {
                this.renderer2.removeClass(this.element.nativeElement, 'border-red-500')
            }
            if (status == 'INVALID') {
                this.renderer2.addClass(this.element.nativeElement, 'border-red-500')
                this.renderer2.addClass(this.element.nativeElement, 'ring-red-200')
            }
            console.log(this.element.nativeElement)
        })
    }
}
