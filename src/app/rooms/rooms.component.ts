import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  HotelName = "Hilton Hotel";

  hideRoom = false;

  numberOfRooms = 20;

  rooms : Room ={
    totalRooms: 2,
    availableRooms: 0,
    bookedRooms: 5,
  }

  roomList : RoomList[] = [{
    roomType : "Single",
    amenities : "TV, AC",
    price: 500,
    photos: "https://images.unsplash.com/photo-1558980664-8b7e8b851e6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    checkinTime: new Date'(12:00'),
    checkoutTime: new Date'(12:00'),

  }];

  toggle(){
    this.hideRoom = !this.hideRoom
  }

}
