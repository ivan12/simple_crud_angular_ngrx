import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CodeAlarmState} from "../../codeAlarm.module";

@Injectable({
  providedIn: 'root'
})
export class CodeAlarmService {
  public url = 'http://ivanamorim-com-br.umbler.net/api/codeAlarm';

  constructor(
      private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<CodeAlarmState[]>(`${this.url}/listaTodos`);
  }

  create(codeAlarm: any) {
    return this.http.post(this.url + '/cadastro', codeAlarm);
  };

  edit(codeAlarm: any) {
    return this.http.post(this.url + '/cadastro', codeAlarm);
  };

  remove(codeAlarm: any) {
    return this.http.post(this.url + '/remover', codeAlarm);
  };

}
