import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private _isSpinnerVisible: BehaviorSubject<boolean>;
  constructor() {
    this._isSpinnerVisible = new BehaviorSubject(false);
  }

  get isSpinnerVisible() {
    return this._isSpinnerVisible;
  }

  showSpinner(show: boolean) {
    this._isSpinnerVisible.next(show);
  }
}
