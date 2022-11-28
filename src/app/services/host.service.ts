import { Injectable, InjectionToken } from '@angular/core';

export const HOST_SERVICE = new InjectionToken<string>('');

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
