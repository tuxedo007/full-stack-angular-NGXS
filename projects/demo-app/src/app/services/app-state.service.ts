import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

import { AppState } from '../models/AppState';
import { SetErrorMessage, ClearErrorMessage } from '@tuxedo-utils/shared-lib';

@State<AppState>({
  name: 'app',
  defaults: {
    errorMessage: '',
  }
})
@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  @Action(SetErrorMessage)
  // tslint:disable-next-line: typedef
  setErrorMessage(ctx: StateContext<AppState>, action: SetErrorMessage) {

    const state = ctx.getState();

    ctx.setState({
      ...state,
      errorMessage: action.errorMessage,
    });
  }

  @Action(ClearErrorMessage)
  // tslint:disable-next-line: typedef
  clearErrorMessage(ctx: StateContext<AppState>) {
    ctx.patchState({
      errorMessage: ''
    });
  }
}
