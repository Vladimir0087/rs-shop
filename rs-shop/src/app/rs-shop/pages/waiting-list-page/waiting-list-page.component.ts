import { Component, OnInit } from '@angular/core';
import { RsShopService } from '../../service/rs-shop.service';

@Component({
  selector: 'app-waiting-list-page',
  templateUrl: './waiting-list-page.component.html',
  styleUrls: ['./waiting-list-page.component.scss'],
})
export class WaitingListPageComponent implements OnInit {
  public orders: any;

  public totalCost = 0;

  constructor(public rsShopService:RsShopService) {}

  ngOnInit(): void {
    this.orders = JSON.parse(localStorage.getItem('waitList') as string) || this.rsShopService.waitListData;
  }
}
