import {createAction, props} from '@ngrx/store';
import {CodeAlarmState} from "../../codeAlarm.module";

export namespace CodeAlarmAction {
    export enum ActionTypes {
        ADD                        = 'ADD',
        ADD_VINHO_MY_PRODUCTS      = 'ADD_VINHO_MY_PRODUCTS',
        SET_VINHO_MY_PRODUCTS      = 'SET_VINHO_MY_PRODUCTS',
        REMOVE                     = 'REM',
        REMOVE_ALL                 = 'REMOVE_ALL',
        ADD_QUANTIDADE_CARRINHO    = 'ADD_QUANTIDADE_CARRINHO',
        REDUCE_QUANTIDADE_CARRINHO = 'REDUCE_QUANTIDADE_CARRINHO',
        PESQUISAR                  = 'PESQUISAR',

        SET_PRODUCTS               = 'SET_PRODUCTS',
        EDIT                       = 'EDIT',
        CLEAR_EDIT                 = 'CLEAR_EDIT',
        LOAD_VINHOS_EFFECT         = 'GET_VINHOS_EFFECT',
        ADD_EFFECT                 = 'ADD_EFFECT',
        EDIT_EFFECT                = 'EDIT_EFFECT',
        REMOVE_EFFECT              = 'REM_EFFECT',
        DESATIVAR_EFFECT           = 'DESATIVAR_EFFECT'
    }

    // Todo Actions Reduce

    export const pesquisar  = createAction(ActionTypes.PESQUISAR, props<{ payload : any }>());

    export const add  = createAction(ActionTypes.ADD, props<{ payload : any }>());

    export const remove  = createAction(ActionTypes.REMOVE, props<{ payload : any }>());

    export const removeAll  = createAction(ActionTypes.REMOVE_ALL, props<{ payload : any }>());

    export const addVinhoMyProducts  = createAction(ActionTypes.ADD_VINHO_MY_PRODUCTS, props<{ payload : any }>());

    export const setVinhoMyProducts  = createAction(ActionTypes.SET_VINHO_MY_PRODUCTS, props<{ payload : any }>());

    export const addQuantidadeCarrinhoProduct  = createAction(ActionTypes.ADD_QUANTIDADE_CARRINHO, props<{ payload : any, index: any }>());

    export const reduceQuantidadeCarrinhoProduct  = createAction(ActionTypes.REDUCE_QUANTIDADE_CARRINHO, props<{ payload : any, index: any }>());



    export const setProducts  = createAction(ActionTypes.SET_PRODUCTS, props<{ payload : any }>());

    export const edit  = createAction(ActionTypes.EDIT, props<{ payload : any, index: number, codeAlarm: CodeAlarmState }>());

    export const clearEdit  = createAction(ActionTypes.CLEAR_EDIT, props<{ payload : any }>());


    // Todo Actions Effect

    export const loadVinhosEffect  = createAction(ActionTypes.LOAD_VINHOS_EFFECT, props<{ payload : any }>());

    export const addVinhosEffect  = createAction(ActionTypes.ADD_EFFECT, props<{ payload : any }>());

    export const editVinhosEffect  = createAction(ActionTypes.EDIT_EFFECT, props<{ payload : any }>());

    export const desativarVinhoEffect  = createAction(ActionTypes.DESATIVAR_EFFECT, props<{ payload : any }>());

}
