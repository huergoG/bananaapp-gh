import { Action } from '@ngrx/store';

export const GET_NEW_BANANA = 'Get new banana';
export const PEEL_BANANA = 'Peel the banana';
export const EAT_BANANA = 'Eat the banana';
export const INITIATE_TIME_HOP = 'Initiate Time Hop';
export const TIME_HOP_COMPLETE = 'Time Hop Complete'

export class GetNewBanana implements Action {
  readonly type: String = GET_NEW_BANANA;

  constructor(public payload: any) {
    console.log("ACTION "+ GET_NEW_BANANA);
  }
}

export class PeelBanana implements Action {
  readonly type: String = PEEL_BANANA;

  constructor(public payload: any) {
    console.log("ACTION "+ [PEEL_BANANA]);
  }
}

export class EatBanana implements Action {
  readonly type: String = EAT_BANANA;

  constructor(public payload: number) {
    console.log("ACTION "+ [EAT_BANANA]);
  }
}

export class InitiateTimeHop implements Action {
  readonly type: String = INITIATE_TIME_HOP;

  constructor(public payload: number) {
    console.log("ACTION "+ [INITIATE_TIME_HOP]);
  }
}

export class TimeHopComplete implements Action {
  readonly type: String = TIME_HOP_COMPLETE;

  constructor(public payload: number) {
    console.log("ACTION "+ [TIME_HOP_COMPLETE]);
  }
}

export type BananaAction = GetNewBanana | PeelBanana | EatBanana | InitiateTimeHop | TimeHopComplete;