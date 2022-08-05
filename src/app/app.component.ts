import { Component } from '@angular/core';
import { NgxprimetimeService } from 'ngxprimetime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cooldemoproject';
  public inputValue = 0;
  public isPrimaryVar = false;
  constructor(
    private ngxprimetimeService: NgxprimetimeService
  ) {}

  checkForPrimary() {
    this.isPrimaryVar = this.ngxprimetimeService.isPrime(this.inputValue)
  }
}
