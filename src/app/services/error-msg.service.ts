import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ErrorMsgService {

  constructor( private _snackBar: MatSnackBar) { }
  error(message: string) {
    return this._snackBar.open(message, 'Close', {panelClass: ['snackbar-error'],duration: 3000});
  }

  success(message: string) {
    return this._snackBar.open(message, 'Close', {panelClass: ['snackbar-success'],duration: 3000});
  }

  info(message: string) {
    return this._snackBar.open(message, 'Close', {panelClass: ['snackbar-info'],duration: 3000});
  }
}
