import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SmsService {

  accountSid = 'AC02114244dad72bc114cf6ccf2166a85c';
  authToken = '0454f3f569691230a2fc41e10508f005';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:variable-name
  getData(numbers: string[], message: string) {

     let cmp = 0;
     const appel = this;

     return new Promise((resolve, reject) => {

         // tslint:disable-next-line:variable-name
     numbers.forEach(function(number) {
         cmp++;

         const head = new HttpHeaders()
             .set('d', 'From=+15853784079')
             .set('d', 'Body=' + message)
             .set('d', 'To=' + number)
             .set('u', 'AC02114244dad72bc114cf6ccf2166a85c:0454f3f569691230a2fc41e10508f005')

         return appel.http.post('https://api.twilio.com/2010-04-01/Accounts/AC02114244dad72bc114cf6ccf2166a85c/Messages.json', { title: 'Angular POST Request Example' }, { headers: head })
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
