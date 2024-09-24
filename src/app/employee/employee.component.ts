import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {
  empName: string = 'Johnson';
  constructor(private roomservice: RoomsService){

  }
  ngOnInit(){
    
  }

}
