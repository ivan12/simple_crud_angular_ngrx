import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import {CodeAlarmSelector} from "../../_store/_modules/codeAlarm/codeAlarm.selector";
import {CodeAlarmAction} from "../../_store/_modules/codeAlarm/codeAlarm.action";
import {CodeAlarmState} from "../../_store/codeAlarm.module";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
@Injectable()
export class ProductFormComponent implements OnInit {
  todoForm: FormGroup;
  productEdit$: Observable<CodeAlarmState> = undefined;

  constructor(
    private store: Store<CodeAlarmState>,
    private formBuilder: FormBuilder,
  ) {
    this.inicializarForm();
  }

  async ngOnInit() {
    this.productEdit$ = this.store.select(CodeAlarmSelector.codeAlarm);

    this.productEdit$.pipe(
        map(productEdit => {
          try {
            this.todoForm.setValue(productEdit)
          } catch (error) {
            console.log(error)
          }
        })
    )
    .subscribe();
  }

  inicializarForm() {
    this.todoForm = this.formBuilder.group({
      id: [null, Validators.required],
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      fotos: [null, Validators.required],
      pais: [null, Validators.required],
      preco: [null, Validators.required],
      quantidade: [null, Validators.required],
      safra: [null, Validators.required],
      quantidadeCarrinho: [null, Validators.required]
    });
  }

  async edit(productEdit) {
    this.store.dispatch(CodeAlarmAction.editVinhosEffect({payload: productEdit}));
    this.clearEdit();
  }

  clearEdit() {
    this.store.dispatch(CodeAlarmAction.clearEdit({ payload: null }));
  }
}
