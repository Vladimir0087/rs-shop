import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGoods } from 'src/app/redux/models/state.models';
import { selectMainCategories } from 'src/app/redux/selectors/selectors';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { ICtegoriesAndSubCategoriesData } from '../../models/rs-shop.models';
import { RsShopService } from '../../service/rs-shop.service';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit {
  public popularGoods: IGoods[] | any = [];

  public arrOfRandomIndexes: number[] = [];

  public numberOfPopularSlides: number[] = [];

  public indexesOfGoodsInSlide = Array(6).fill(1).map((_, index) => index);

  constructor(private store: Store, private http: HttpClient, private rsShopService: RsShopService, private router:Router) {}

  private getRandomIntInclusive(max: number) {
    return Math.floor(Math.random() * (max + 1));
  }

  public arrayRating(count: number): undefined[] {
    return Array(count);
  }

  public goToDetailedPage(goodsId: string): void {
    console.log(goodsId);
    this.rsShopService.getGoodsById(goodsId).subscribe((res) => {
      this.router.navigate([res.category, res.subCategory, goodsId]);
    });
  }

  ngOnInit() {
    this.store.select(selectMainCategories).subscribe((res: ICtegoriesAndSubCategoriesData[]) => {
      res.forEach((category) => this.http.get(`http://localhost:3004/goods/category/${category.categoryId}`).subscribe((results) => {
        this.popularGoods = this.popularGoods.slice().concat((results as IGoods[]).filter((el) => el.rating === 5));
        this.arrOfRandomIndexes = Array(10).fill(1).map(() => this.getRandomIntInclusive(this.popularGoods.length - 1));
        const numberOfPopularSlides: number = Math.ceil(this.popularGoods.length / 6);
        this.numberOfPopularSlides = Array(numberOfPopularSlides).fill(1).map((_, index) => index);
      }));
    });
  }
}
