import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from 'src/services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck,AfterViewInit,AfterViewChecked{


  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!:RoomList;
  addedRoom!:RoomList;
  title='RooomList'


  rooms : Room={
    availableRooms: 10,
    bookedRooms  : 5,
    totalRooms : 20
  } 

  @ViewChild(HeaderComponent) header!:HeaderComponent;
  @ViewChildren(HeaderComponent) headerChild!: QueryList<HeaderComponent>
  

  roomList : RoomList[] =[]
  
constructor( private roomService: RoomsService){}
ngOnInit(): void {
  // console.log(this.header);
this.roomList= this.roomService.getRooms();
 
  
}
ngDoCheck() {
  console.log('onChanges is called');
  
}
ngAfterViewInit(){
  this.header.title = "Rooms View";
  this.headerChild.first.title="Welcome";
  
}
ngAfterViewChecked(){
  
  
}
 toggle(){
   this.hideRooms = !this.hideRooms
   this.title='Rooms List';
  }

  selectRoom(room:RoomList){
  this.selectedRoom=room;
  }
  addRoom(){
    const room:RoomList={
      roomNumber:4,
      rating:5,
      roomType:'Deluxe Room',
      amenities:'Air conditioner,Freewifi',
      price:500,
      photos: 'https://unsplash.com/photos/a-large-red-flower-on-a-red-background-koldMzng1JU',
      checkinTime:new Date('11-Nov-2023'),
      checkoutTime:new Date('11-Nov-2023')
    }
    //  this.roomList.push(room);
  this.roomList=[...this.roomList,room];
  }
}
