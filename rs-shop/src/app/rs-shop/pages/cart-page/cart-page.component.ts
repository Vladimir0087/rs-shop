import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoreService } from 'src/app/core/service/core.service';
import { RsShopService } from '../../service/rs-shop.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  public totalCost = 0;

  public userName = '';

  public deliveryAdress = '';

  public phoneNumber = '';

  public deliveryTime = '';

  public comment = '';

  public isShowConfirmation = false;

  public userDataForm:FormGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    deliveryAdress: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
    phoneNumber: ['', [Validators.required, Validators.pattern('^[\+][0-9]+')]],
    deliveryTime: ['', Validators.required],
    comment: ['', Validators.maxLength(250)],
  });

  constructor(public rsShopService:RsShopService, public coreService:CoreService, private route: ActivatedRoute, private store: Store,
    private router: Router, private fb: FormBuilder) {}

  public countTotalCost(): void {
    this.totalCost = this.rsShopService.cartData.filter((el) => el.amount >= 0).reduce((sum, el) => sum + el.amount * el.price, 0);
  }

  public incrementAmount(goodsName: string) {
    const goodsData = this.rsShopService.cartData.find((el) => el.name === goodsName);
    if (goodsData?.amount !== undefined) goodsData.amount++;
    this.countTotalCost();
  }

  public decrementAmount(goodsName: string) {
    const goodsData = this.rsShopService.cartData.find((el) => el.name === goodsName);
    if (goodsData?.amount) goodsData.amount--;
    this.countTotalCost();
  }

  public goToDetailedPage(goodsId: string): void {
    this.rsShopService.getGoodsById(goodsId).subscribe((res) => {
      this.router.navigate([res.category, res.subCategory, goodsId]);
    });
  }

  public checkAndCountTotalCost(amount: number): void {
    if (amount >= 0) this.countTotalCost();
  }

  public submit() {
    const controlers = this.userDataForm.controls;
    if (this.userDataForm.invalid) {
      Object.keys(controlers).forEach((controlName) => controlers[controlName].markAsTouched());
      return;
    }
    this.userName = controlers.userName.value;
    this.deliveryAdress = controlers.deliveryAdress.value;
    this.phoneNumber = controlers.phoneNumber.value;
    this.deliveryTime = controlers.deliveryTime.value;
    this.comment = controlers.comment.value;
    this.isShowConfirmation = true;
    setTimeout(() => this.coreService.goToMainPage(), 5000);
    this.rsShopService.clearCartData();
  }

  ngOnInit(): void {
    this.countTotalCost();
  }
}
