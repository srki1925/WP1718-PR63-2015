import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalApisDataService {

  private gmapsKey = 'AIzaSyBrjeABCsOwW1rhi7eW6_b_fWF8OK2HeiA';
  private hereAppId = 'bAXQChNSxbtNhSYbrloM';
  private hereAppCode = '%20FT-7YO-65_E2m1OFO8NvqQ';
  constructor() { }

  getGoogleMapsApiKey() : string{
    return this.gmapsKey.slice();
  }

  getHereAppId():string{
    return this.hereAppId.slice();
  }

  getHereAppCode():string{
    return this.hereAppCode.slice();
  }
}
