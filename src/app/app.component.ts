import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent} from "../app/rooms/rooms.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RoomsComponent],
  templateUrl: './app.component.html',

 // template: 'Hello world from inline template!',

 /* template: `<h1>Hello world from inline template! </h1>
  <p> Sup Nig </p>`, */

  styleUrl: './app.component.scss'
// styleUrl: [`h1 {color: red;}`]  
})
export class AppComponent {
  title = 'HotelInventoryApp';
}
