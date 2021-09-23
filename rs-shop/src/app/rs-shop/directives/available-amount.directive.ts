import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

@Directive({
  selector: '[appAvailableAmount]',
})
export class AvailableAmountDirective implements OnInit {
  @Input() availableAmount: number = 0;

  private yellowColor = '#d8d509';

  private greenColor = '#27AE60';

  private redColor = '#eb1919';

  constructor(private el: ElementRef) {}

  public getColor(availableAmount: number): string {
    if (availableAmount >= 20) return this.greenColor;
    if (availableAmount < 5) return this.redColor;
    return this.yellowColor;
  }

  ngOnInit() {
    this.el.nativeElement.style.border = `2px solid ${this.getColor(this.availableAmount)}`;
  }
}
