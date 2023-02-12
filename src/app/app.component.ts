import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fifth_login';

  submitted() {
    window.alert('submitted Successfully')
  }

// number = [
//   { "num": "1" },
//   { "num": "2" },
//   { "num": "3" },
//   { "num": "4" },
//   { "num": "5" },
//   { "num": "6" }
// ];


}

