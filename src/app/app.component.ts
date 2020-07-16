import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  arr = [1, 1, 2, 3, 5, 8, 13];
  objects = [
    {title: 'Post1', author: 'vladimir', text: 'Hello',
      comments: [
        {name: 'Max', text: 'lorem_1'},
        {name: 'Anya', text: 'lorem_2'},
        {name: 'Petya', text: 'lorem_3'},
      ]
    },
    {title: 'Post2', author: 'Max 2', text: 'Hello',
      comments: [
        {name: 'Max 2', text: 'lorem_1'},
        {name: 'Anya 2', text: 'lorem_2'},
        {name: 'Petya 2', text: 'lorem_3'},
      ]
    }
  ]
}
