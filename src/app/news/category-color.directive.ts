import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appCategoryColor]'
})
export class CategoryColorDirective {

  constructor(public el: ElementRef, public renderer: Renderer) { }

  @Input() appCategoryColor: string;
  
  ngOnInit() {
    if(this.appCategoryColor === 'nationals') {
      this.renderer.setElementClass(this.el.nativeElement, 'btn-danger', true);
    } else if(this.appCategoryColor === 'sports') {
      this.renderer.setElementClass(this.el.nativeElement, 'btn-primary', true);
    } else if(this.appCategoryColor === 'economics') {
      this.renderer.setElementClass(this.el.nativeElement, 'btn-success', true);
    } else if(this.appCategoryColor === 'opinion') {
      this.renderer.setElementClass(this.el.nativeElement, 'btn-warning', true);
    } else if(this.appCategoryColor === 'world') {
      this.renderer.setElementClass(this.el.nativeElement, 'btn-dark', true);
    }
  }
}
