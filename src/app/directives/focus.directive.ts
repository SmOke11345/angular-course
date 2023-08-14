import { Directive, ElementRef, OnInit } from '@angular/core';

// Для создания собственного функционала
@Directive({
    selector: '[appFocus]',
    standalone: true,
})
export class FocusDirective implements OnInit {
    constructor(private element: ElementRef) {}

    ngOnInit(): void {
        this.element.nativeElement.focus();
    }
}
