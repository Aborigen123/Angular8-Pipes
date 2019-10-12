import { Component } from '@angular/core';
import {Observable,of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template:
//   `<div class="col-xs-8 col-xs-offset-2">
//   <h1>Info: https://angular.io/api/common/DatePipe</h1>
//   <h2>{{name}}</h2><h2>Робота з  лінійкою</h2>
//   <h2>{{name | lowercase}}</h2>
//   <h2>{{name | uppercase}}</h2>
//   <h2>{{name | slice:0:3}}</h2>
//   <h2>{{name | slice:0:3 | uppercase}}</h2>
//   <hr>
//   <h2>{{pi}}</h2>
//   <h2>{{pi | number}}</h2><h2>Робота з числами</h2>
//   <h2>{{pi | number:'1.3-4'}}</h2>
//   <h2>{{pi | number:'2.2-2'}}</h2>
//   <hr>
//   <h2>{{money}}</h2><h2>Робота з грошима</h2>
//   <h2>{{money | currency: 'USD'}}</h2>
//   <h2>{{money | currency: 'EUR': true}}</h2>
//   <hr>
// <h2>{{date}}</h2><h2>Робота з датами</h2>
// <h2>{{date | date}}</h2>
// <h2>{{date | date: 'fullDate'}}</h2>
// <h2>{{date | date: 'shortDate'}}</h2>
// <h2>{{date | date: 'shortTime'}}</h2>
// <hr>
// <h2>{{ amount }}</h2><h2>Числа в проценти</h2>
// <h2>{{ amount | percent}}</h2>
// <hr>
// <h2>{{ object }}</h2><h2>Виводиться [object Object] тому що до object застосовується .toString </h2>
// <h2>{{ object | json }}</h2><h2> Вирішення проблеми</h2>
// <h2><pre>{{ object | json }}</pre></h2>
//  </div>`
 /////////////////////////////////////////////////////////////////////////////////
  //Створення пайпів
  // `<div class="col-xs-8 col-xs-offset-2">
  // <h1>Додати клас PowPipe в модулі(app.module.ts)</h1>
  // <h2>{{ num }}</h2>
  // <h2>{{ num | appPow }}</h2><h3>підняття до степеня за допомогою пайпа</h3>
  // <h2>{{ num | appPow:3 }}</h2><h3>підняття до степеня за допомогою пайпа</h3>
  // <h2>{{ 6 | appPow:3 }}</h2>
  // <h2>{{ 6 | appPow:3:'=' }}</h2>
  // </div>`

  /////////////////////////////////////////////////////////////////////////////////
  //Пайпи для фільтрації даних
  `<div class="col-xs-8 col-xs-offset-2">
  <ul class="list-group">
  <h1>{{ asyncTitle }}</h1>
  <input type="text" class="form-control" [(ngModel)] = "searchCar">
  <hr>
<!-- <li *ngFor="let car of cars  | carFilter: searchCar; let i = index " class="list group-item">
{{i+1}} {{car.name}} | {{car.descr}}</li> -->
<li *ngFor="let car of cars  | carFilter: searchCar; let i = index " class="list group-item">
{{i+1}} {{car.name}} | {{car.descr}}</li>
  </ul>
  </div>`
})
export class AppComponent {
  // title = 'ng2-course-theoryBeginBlock5';
  // name = 'WebForMyself';
  // pi = Math.PI;
  // money = 350;
  // date = new Date();
  // amount = 0.45;
  // object={
  //   foo: 'bar',
  //   baz: 'qux',
  //   nested: {
  //     xyz: 3,
  //     numbers: [1,2,3]
  //   }

  // };
  /////////////////////////////////////////////////////////////////////////////////
  //Створення пайпів
  //num = 2;

  /////////////////////////////////////////////////////////////////////////////////
  //Пайпи для фільтрації даних
  searchCar = ''
  cars= [
    {name: 'Ford', descr: 'WFM'},
    {name: 'BMW', descr: 'WFM'},
    {name: 'Mazda', descr: 'qwe'},
    {name: 'Audi', descr: 'sdcx'},
    {name: 'Ford', descr: 'bxcm'},
    {name: 'Mercedes', descr: 'mda'},
  ]
//AsyncTitle
  //asyncTitle = Observable.of('Async title 3seconds').delay(3000);
}
