import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CodeAlarmEffect } from './_modules/codeAlarm/codeAlarm.effect';
import { CodeAlarmsReducer } from "./_modules/codeAlarm/codeAlarms.reducer";

export interface CodeAlarmState {
    id          : string
    codigo      : number
    nome        : string
    descricao   : string
    fotos       : []
}

export interface TryState {
    codeAlarms: CodeAlarmState[]
}

export const reducers: ActionReducerMap<TryState> = {
    codeAlarms: CodeAlarmsReducer.reducer
};

export const metaReducers: MetaReducer<TryState>[] = !environment.production ? [] : [];

const CONFIG_STORE_MODULE = {
    metaReducers: [],
    runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
    }
}

const CONFIG_STORE_DEV_MODULE = { maxAge: 100, logOnly: environment.production }
const CONFIG_EFFECTS_MODULE = [CodeAlarmEffect]

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, CONFIG_STORE_MODULE),
        StoreDevtoolsModule.instrument(CONFIG_STORE_DEV_MODULE),
        EffectsModule.forRoot(CONFIG_EFFECTS_MODULE)
    ],
    exports: [StoreModule, StoreDevtoolsModule, EffectsModule]
})
export class CodeAlarmModule { }
