import { createFeatureSelector, createSelector } from "@ngrx/store";
import {CodeAlarmState} from "../../codeAlarm.module";

export const codeAlarmsState = createFeatureSelector<CodeAlarmState[]>('codeAlarms')

export namespace CodeAlarmSelector {
    export const codeAlarms = createSelector(codeAlarmsState, (state: any) => state.codeAlarms);
    export const codeAlarm = createSelector(codeAlarmsState, (state: any) => state.codeAlarms[0]);
}
