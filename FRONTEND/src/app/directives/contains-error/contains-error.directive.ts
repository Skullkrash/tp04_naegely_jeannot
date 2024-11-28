import { Directive, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ContainsError]',
  standalone: true
})
export class ContainsErrorDirective implements OnInit {
  @Input() ContainsError!: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.changeColor(this.ContainsError);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.changeColor(changes['ContainsError'].currentValue);
  }

  private changeColor(newValue: boolean) {
    if (newValue == true) {
      this.el.nativeElement.style.color = 'red';
    }
    else {
      this.el.nativeElement.style.color = 'green';
    }
  }
}
