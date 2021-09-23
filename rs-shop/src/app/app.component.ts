import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGoods } from './redux/models/state.models';
import { selectMainCategories } from './redux/selectors/selectors';
import { ICtegoriesAndSubCategoriesData } from './rs-shop/models/rs-shop.models';
import { RsShopService } from './rs-shop/service/rs-shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rs-shop';

  constructor(private store: Store, private http: HttpClient, private rsShopService: RsShopService) {}

  private getRandomIntInclusive(max: number) {
    return Math.floor(Math.random() * (max + 1));
  }

  ngOnInit() {
    this.store.select(selectMainCategories).subscribe((res: ICtegoriesAndSubCategoriesData[]) => {
      res.forEach((category) => this.http.get(`http://localhost:3004/goods/category/${category.categoryId}`).subscribe((results) => {
        this.rsShopService.popularGoods.push(...(results as IGoods[]).filter((el) => el.rating === 5));
        this.rsShopService.arrOfRandomIndexes = Array(10).fill(1).map(() => this.getRandomIntInclusive(this.rsShopService.popularGoods.length - 1));
        const numberOfPopularSlides: number = Math.ceil(this.rsShopService.popularGoods.length / 6);
        this.rsShopService.numberOfPopularSlides = Array(numberOfPopularSlides).fill(1).map((_, index) => index);
      }));
    });
  }
}
