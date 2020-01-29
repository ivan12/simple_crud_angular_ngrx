import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CodeAlarmState } from "./_store/codeAlarm.module";
import { CodeAlarmAction } from "./_store/_modules/codeAlarm/codeAlarm.action";
import { CodeAlarmSelector } from "./_store/_modules/codeAlarm/codeAlarm.selector";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
@Injectable()
export class AppComponent implements OnInit {
  listVinhos$: Observable<CodeAlarmState[]>;

  constructor(private store: Store<CodeAlarmState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(CodeAlarmAction.loadVinhosEffect({payload: null}));
    this.listVinhos$ = this.store.select(CodeAlarmSelector.codeAlarms);
  }

  countMyProducts(products) {
    let countMyProducts = 0;
    products.forEach(product => {
      countMyProducts += Number(product.quantidadeCarrinho);
    });
    return countMyProducts;
  }
}
