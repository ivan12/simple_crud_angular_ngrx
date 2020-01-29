import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ToastController } from '@ionic/angular';
import {CodeAlarmSelector} from "../../_store/_modules/codeAlarm/codeAlarm.selector";
import {CodeAlarmAction} from "../../_store/_modules/codeAlarm/codeAlarm.action";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  total$: Observable<any>;
  products$: Observable<any>;

  constructor(
      private store: Store<{ cart: [] }>,
      private toastCtrl: ToastController)
  {
    this.products$ = store.select(CodeAlarmSelector.codeAlarms);
  }

  showTotalProdutosLoja(products) {
    if (products) {
      if (products.length < 10) {
        return '0' + products.length;
      } else {
        return products.length;
      }
    } else {
      return 0;
    }
  }

  createProductAction() {
    let vinhoDefault = {
      nome: 'Vinho Default',
      descricao: 'descricao Default',
      fotos: undefined,
      id: undefined,
      pais: 'Brasil',
      preco: 50,
      quantidade: '1',
      quantidadeCarrinho: 1,
      safra: '1989'
    }
    this.store.dispatch(CodeAlarmAction.addVinhosEffect({payload: vinhoDefault}));
    this.toast('Produto criado com sucesso!');
  }

  comprar() {
    this.store.dispatch(CodeAlarmAction.removeAll({payload: null}));
    this.toast('Compra realizada com sucesso!');
  }

  async toast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      cssClass: "toast-green",
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }
}
