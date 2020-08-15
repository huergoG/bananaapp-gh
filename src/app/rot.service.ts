import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class RotService {
   rotBanana(): Observable<any> {
     console.log('ROT BANANA');
     const miliseconds = 10000;
     return Observable.create( observer => {
       setTimeout(() => {
         console.log('done waiting');
         observer.next('brown');
         observer.complete();
       }, miliseconds);
     })
   }
}