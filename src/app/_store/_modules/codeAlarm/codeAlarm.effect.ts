import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { CodeAlarmService } from "./codeAlarm.service";
import { CodeAlarmAction } from "./codeAlarm.action";

@Injectable()
export class CodeAlarmEffect {
    constructor(
        private actions$: Actions,
        private codeAlarmService: CodeAlarmService,
    ) { }

    getProductsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CodeAlarmAction.loadVinhosEffect),
            map(action => action['payload']),
            // catchError(error => error),
            exhaustMap(res => this.codeAlarmService.getProducts()),
            map(products => {
                return CodeAlarmAction.setProducts({ payload: products});
            })
        ),
    );

    edit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CodeAlarmAction.editVinhosEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.codeAlarmService.edit(product)
                .pipe(
                    map(product => {
                        CodeAlarmAction.edit({ payload: product});
                        return CodeAlarmAction.loadVinhosEffect({ payload: null});
                    })
                )
            )
        )
    );

    add$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CodeAlarmAction.addVinhosEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.codeAlarmService.create(product)
                .pipe(
                    map(product => {
                        CodeAlarmAction.add({ payload: product});
                        return CodeAlarmAction.loadVinhosEffect({ payload: null});
                    })
                )
            )
        )
    );

    desativar$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CodeAlarmAction.desativarVinhoEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.codeAlarmService.remove(product)
                .pipe(
                    map(product => CodeAlarmAction.loadVinhosEffect({ payload: null}))
                )
            )
        )
    );
}
