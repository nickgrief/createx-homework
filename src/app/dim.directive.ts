import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[colorful]',
})
export class DimDirective {
  effect = 'grayscale(1) blur(4px)';

  constructor(private el: ElementRef<HTMLButtonElement>) {
    this.el.nativeElement.style.filter = this.effect;
    this.el.nativeElement.style.transition = 'filter 300ms';
  }

  @HostListener('mouseleave') onMouseEnter() {
    this.dim(this.effect);
  }

  @HostListener('mouseenter') onMouseLeave() {
    this.dim('');
  }

  private dim(filter: string) {
    this.el.nativeElement.style.filter = filter;
  }
}
