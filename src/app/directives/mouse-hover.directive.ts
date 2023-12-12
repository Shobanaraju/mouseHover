import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[msMouseHover]'
})
export class MouseHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter') onMouseEnter() {
    // 
    const parentElement = this.renderer.parentNode(this.el.nativeElement);
    this.renderer.addClass(parentElement, 'highlight-row');
    // this.renderer.setStyle(this.el.nativeElement,'background-VideoColorSpace','yellow');
  
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'color');
    const parentElement = this.renderer.parentNode(this.el.nativeElement);
    this.renderer.removeClass(parentElement, 'highlight-row');
    // this.renderer.removeStyle(this.el.nativeElement,'background-color');
  
  }
 

}
