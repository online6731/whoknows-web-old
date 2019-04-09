 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guessit-web-v1-m';

  ngOnInit() {
    localStorage.setItem("server", "http:/0.0.0.0:3000");
    
  }
}
