import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {CodeAlarmSelector} from "../../_store/_modules/codeAlarm/codeAlarm.selector";
import {CodeAlarmState} from "../../_store/codeAlarm.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
@Injectable()
export class NavbarComponent {
  myProducts$: Observable<CodeAlarmState[]> = undefined;

  constructor(private store: Store<CodeAlarmState[]>) {
    this.myProducts$ = store.select(CodeAlarmSelector.codeAlarms);
  }

  countMyProducts(products) {
    let countMyProducts = 0;
    products.forEach(product => {
      countMyProducts += product.quantidadeCarrinho;
    });
    return countMyProducts;
  }

}
