import {Injectable} from '@angular/core'
import {Action} from '@ngrx/store'
import {Attributes} from './../models/attributes.model'

export const attributesback='attr'
export class retain implements Action{
    readonly type=attributesback
    constructor(public payload:Attributes){}
}
// export type Actions=retain