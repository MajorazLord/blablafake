import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";

@Injectable()
export class StorageProvider {

  constructor(private storage : Storage) {
  }

  setValue(key: any, value: any){
    return this.storage.set(key, value);
  }

  getValue(key: any){
    return this.storage.get(key);
  }

}
