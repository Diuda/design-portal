import {
  Injectable
} from '@angular/core'
import {
  Action
} from '@ngrx/store'
import {
  Attributes
} from './../models/attributes.model'

export const attributesback = 'attr'
export const reset = 'resetbutton'
export class retain implements Action {
  readonly type = attributesback
  constructor(public payload: Attributes) {}
}
export class resetvalue implements Action {
  readonly type = reset

}
// export type Actions=retain
