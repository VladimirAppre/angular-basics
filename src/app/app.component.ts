import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Dynamic title';
  number = '529';
  arr = [1, 2, 3];
  obj = {name: 'Vasia', age: 23, friends: {name: 'Lesya'}};

  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsm-dQHFmWp9Xw1e-4BfLDr67vBq5cil6OytRJExumqHUzTHVZ';
  constructor() {
    setTimeout(() => {
      console.log('Timeout is over');
      this.img = 'https://angular.io/assets/images/logos/angular/angular.png';
    }, 5000);
  }


}
