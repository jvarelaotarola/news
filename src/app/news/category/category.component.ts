import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CategoryComponent,
    multi: true
  }]
})
export class CategoryComponent implements ControlValueAccessor {

  constructor() { }

  value;
  onChange;
  touched;
  categorize(category:string) {
    this.onChange(category);
    this.touched();
  }
  writeValue(value) {
    this.value=value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.touched = fn;
  }
}
