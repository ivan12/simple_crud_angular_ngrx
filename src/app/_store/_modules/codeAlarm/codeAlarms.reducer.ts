import { createReducer, on, Action } from '@ngrx/store'
import { CodeAlarmAction } from "./codeAlarm.action";
import { CodeAlarmState } from "../../codeAlarm.module";

export namespace CodeAlarmsReducer {
    let codeAlarms: CodeAlarmState[] = [];

    const _pesquisar = (state: any, action: Action) => ({ ...state, codeAlarms: state.codeAlarms.filter( codeAlarm => codeAlarm.codigo == action['payload']) });

    const _addCodeAlarm = (state: any, action: Action) => ({ ...state, codeAlarms: state.codeAlarms.concat(action['payload']) });

    const _setCodeAlarm = (state: any, action: Action) => ({ ...state, codeAlarm: action['payload']});

    const _removeCodeAlarm = (state: any, action: Action) => ({ ...state, codeAlarms: state.codeAlarms.filter(myProduct => myProduct != action['payload'])});

    const _setCodeAlarms = (state: any, action: Action) => ({ ...state, codeAlarms: action['payload']});

    function editElemListCodeAlarms(listCodeAlarms, index, codeAlarm) {
        listCodeAlarms[index] = codeAlarm;
        return listCodeAlarms;
    }

    const _vinhoReduces = createReducer(codeAlarms,
        on(CodeAlarmAction.pesquisar, _pesquisar),
        on(CodeAlarmAction.add, _addCodeAlarm),
        on(CodeAlarmAction.edit, _setCodeAlarm),
        on(CodeAlarmAction.remove, _removeCodeAlarm),
        on(CodeAlarmAction.setProducts, _setCodeAlarms)
    )
    export function reducer(state: any, action: Action) {
        return _vinhoReduces(state, action);
    }
}
