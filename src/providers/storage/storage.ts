import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  fetch_user_details(){
    // return Observable.fromPromise();

  }
  store_user_details(){
  }

}
