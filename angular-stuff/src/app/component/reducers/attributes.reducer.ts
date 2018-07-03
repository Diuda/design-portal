import {
  Action
} from '@ngrx/store'
import {
  Attributes
} from './../models/attributes.model'
import * as AttrActions from './../actions/attributes.action'

// Section 1

const initialState: Attributes = {
  power: 40,
  runtime: 10,
  upstype: ' ',
  region: ' ',
  runit: ' ',
  result:{}

}

// Section 2
export function reducer(state: Attributes[] = [initialState], action: AttrActions.retain) {

  // Section 3
  switch (action.type) {
    case AttrActions.attributesback:
      return [...state, action.payload];
    default:
      return state;
  }
}
