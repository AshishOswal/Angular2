import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ReturnsJsonArrayService } from './returns-json-array.service';

 
@Component({
  selector: 'ao-main',
  templateUrl: 'src/app/app.component.html',
  styleUrls: ['src/app/app.component.css'],
})


export class AppComponent{
  title = 'app';
  show1=false;
  show2=false;
  show3=false;
  show4=false;
  passwd='';
  value1 = '';
  value2 = '';
  data:Observable<Array<any>>;
  number1:number;
  number2:number;
  sum:number;
  constructor(private service:ReturnsJsonArrayService){
    this.data = service.getData();
    console.log("AppComponent.data" + this.data);

  }

  appDisplay(val1: string, val2: string) {
    //  window.alert("Hleo ");
    this.value1 = val1;
    this.value2 = val2;
  }

  calcSum(num1:number, num2:number){
    this.number1=num1;
    this.number2=num2;
    this.sum= +this.number1 + +this.number2;
  }

  calcSub(num1:number, num2:number){
    this.number1=num1;
    this.number2=num2;
    this.sum= +this.number1 - +this.number2;
  }

  calcMul(num1:number, num2:number){
    this.number1=num1;
    this.number2=num2;
    this.sum= +this.number1 * +this.number2;
  }


  calcDiv(num1:number, num2:number){
    this.number1=num1;
    this.number2=num2;
    if (num2==0) {
      window.alert("Dividing by zero gives Infinity");
    }
    else{
    this.sum= +this.number1 / +this.number2;
    }
  }

 }
