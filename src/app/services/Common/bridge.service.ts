import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  private internalUserId: string;
  private intSearchRes: string;
  constructor() {
  }

  get userId(): string {
    return this.internalUserId;
  }

  set userId(userId: string) {
    this.internalUserId = userId;
  }

  get searchRes(): string {
    return this.searchRes;
  }

  set searchRes(searchRes: string) {
    this.intSearchRes = searchRes;
  }
}
