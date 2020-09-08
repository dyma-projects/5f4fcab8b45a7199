import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({  selector: '[appColor]' })
// tslint:disable-next-line: class-name
export class colorDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('window:keydown', ['$event']) windowKeydown($event) {
      if ($event.key === 'ArrowUp') {
        this.colorP('red');
      } else if ($event.key === 'ArrowRight') {
        this.colorP('green');
      } else if ($event.key === 'ArrowDown') {
        this.colorP('orange');
      } else if ($event.key === 'ArrowLeft') {
        this.colorP('grey');
      } else {
        this.colorP('purple');
      }
    }


   private colorP(color: string){
       this.renderer.setStyle(this.el.nativeElement, 'color', color)
   }
}
