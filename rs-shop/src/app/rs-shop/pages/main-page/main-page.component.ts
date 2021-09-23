import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { RsShopService } from '../../service/rs-shop.service';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit {
  public indexesOfGoodsInSlide = Array(6).fill(1).map((_, index) => index);

  constructor(public rsShopService: RsShopService, private router:Router) {}

  public arrayRating(count: number): undefined[] {
    return Array(count);
  }

  public goToDetailedPage(goodsId: string): void {
    this.rsShopService.getGoodsById(goodsId).subscribe((res) => {
      this.router.navigate([res.category, res.subCategory, goodsId]);
    });
  }

  ngOnInit() {
    setTimeout(() => {}, 1000);
  }
}
