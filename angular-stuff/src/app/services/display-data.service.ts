import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DisplayDataService {
   default={"ab":12,"bc":15};
  private messageSource = new BehaviorSubject(this.default);
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message:any) {
    this.messageSource.next(message)
  }

}