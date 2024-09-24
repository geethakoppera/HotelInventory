import { Injectable } from '@angular/core';
import { RoomList } from 'src/app/rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { 
    console.log('room service initialized');
  }
  roomList: RoomList[]=[
      {
        roomNumber:1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner,Free wifi,Tv,Bathroom,kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/a-large-red-flower-on-a-red-background-koldMzng1JU',
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating:4.5
    
    },
  
    {
      roomNumber : 2,
      roomType: 'Deluxe Room',
      amenities: 'Ai Conditioner,Free wifi,Tv,Bathroom,kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/a-large-red-flower-on-a-red-background-koldMzng1JU',
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating:3.4
    
    },
    {
      roomNumber:3,
    roomType: 'Private suite',
      amenities: 'Air Conditioner,Free wifi,Tv,Bathroom,kitchen',
      price: 15000,
      photos: 'https://unsplash.com/photos/a-large-red-flower-on-a-red-background-koldMzng1JU',
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating:2.6
  
    }
    ]
  getRooms(){
    return this.roomList;
  }
}
