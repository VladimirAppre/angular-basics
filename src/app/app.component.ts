import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
 title = 'asd';

  onInput (event: any) {
    this.title = event.target.value;
  }
}
