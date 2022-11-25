import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  private _baseHref = window.location.host;

  public get baseHref() {
    return this._baseHref;
  }
  
  constructor() { }
}
