 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guessit-web';
  ngOnInit() {
    localStorage.setItem("server", "https://guessit-server.liara.run");
  console.log(localStorage.getItem("server"));}
}
