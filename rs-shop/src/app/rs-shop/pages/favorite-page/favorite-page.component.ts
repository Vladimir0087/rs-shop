import { Component } from '@angular/core';
import { CoreService } from 'src/app/core/service/core.service';
import { RsShopService } from '../../service/rs-shop.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent {
  constructor(public rsShopService:RsShopService, public coreService:CoreService) {}

  public arrayRating(count: number): undefined[] {
    return Array(count);
  }
}
