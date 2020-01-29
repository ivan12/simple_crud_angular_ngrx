import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ToastController } from '@ionic/angular';
import { CodeAlarmSelector } from "../../_store/_modules/codeAlarm/codeAlarm.selector";
import { CodeAlarmAction } from "../../_store/_modules/codeAlarm/codeAlarm.action";
import { CodeAlarmState } from "../../_store/codeAlarm.module";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
@Injectable()
export class ProductListComponent implements OnInit {
  public products$: Observable<CodeAlarmState[]> = null;
  public list = undefined;
  pesquisaForm: FormGroup;

  constructor(
    private store: Store<CodeAlarmState>,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.inicializarForm();
    this.loadVinhos()
  }

  inicializarForm() {
    this.pesquisaForm = this.formBuilder.group({
      nome: [null, Validators.required]
    });
  }

  loadVinhos() {
    this.products$ = this.store.select(CodeAlarmSelector.codeAlarms);
  }

  add(product, list) {
    if (list && (list.length > 0 && list.filter(elem => elem.id == product.id).length > 0)) {
      this.store.dispatch(CodeAlarmAction.addQuantidadeCarrinhoProduct({ payload: list, index: list.indexOf(list.find(elem => elem.id == product.id)) }));
    } else {
      this.store.dispatch(CodeAlarmAction.addVinhoMyProducts({payload: product}));
    }
  }

  loadEdit(product: any) {
    this.store.dispatch(CodeAlarmAction.edit({payload: product}));
  }

  pesquisar(value) {
    console.log('value = ', value);
    this.store.dispatch(CodeAlarmAction.pesquisar({payload: Number(value.nome)}));
  }

  setIndisponivel(product) {
    this.store.dispatch(CodeAlarmAction.desativarVinhoEffect({payload: product}));
    this.toast('Código excluído com sucesso!');
  }

  recarregarListaCodeAlarm() {
    this.inicializarForm();
    this.store.dispatch(CodeAlarmAction.loadVinhosEffect({payload: null}));
  }

  async toast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      cssClass: "toast-red",
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }
}
