import {
  Directive, ElementRef, Input, OnChanges,
} from '@angular/core';
import { IGoods, IGoodsDetailed } from 'src/app/redux/models/state.models';

@Directive({
  selector: '[appIsFavorite]',
})
export class IsFavoriteDirective implements OnChanges {
  @Input() goods: IGoodsDetailed | IGoods | undefined;

  @Input() favoriteData: Array<IGoodsDetailed | IGoods> = [];

  private redColor = '#eb1919';

  private whiteColor = '#ffffff';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.favoriteData) {
      const cart: Array<IGoodsDetailed | IGoods> = this.favoriteData;
      if (cart.find((el) => el.name === this.goods?.name)) {
        this.el.nativeElement.style.backgroundColor = '#ffffff';
        this.el.nativeElement.style.border = `2px solid ${this.redColor}`;
        this.el.nativeElement.style.color = this.redColor;
        this.el.nativeElement.textContent = 'В избранном';
      } else {
        this.el.nativeElement.style.backgroundColor = this.redColor;
        this.el.nativeElement.style.border = 'none';
        this.el.nativeElement.style.color = this.whiteColor;
        this.el.nativeElement.textContent = 'В избранное';
      }
    }
  }
}
