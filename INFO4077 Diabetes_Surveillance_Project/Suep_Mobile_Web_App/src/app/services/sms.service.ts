import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:variable-name typedef
  getData(numbers: string[], message: string, username: string, password: string) {

    let cmp = 0;
    const appel = this;

    return new Promise((resolve, reject) => {

      // tslint:disable-next-line:variable-name only-arrow-functions typedef
      numbers.forEach(function(number) {
        cmp++;

        return appel.http.get('https://www.easysendsms.com/sms/bulksms-api/bulksms-api?username=' + username + '&password=' + password + '&from=Suep&to=' + number + '&text=' + message + '&type=1')
          .subscribe(
            (result) => {
              cmp++;
              if (cmp === numbers.length) { resolve(); }
            },
            (error) => {
              reject(error);
            }
          );
      });
    });
  }

}
