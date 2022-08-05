import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxprimetimeService {

  constructor() { }
  isPrime = (num: number) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
}
