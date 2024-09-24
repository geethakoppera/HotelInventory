import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from 'src/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [RoomsService]
})
export class ContainerComponent  implements OnInit,AfterContentInit{
  @ContentChild(EmployeeComponent) employ! :EmployeeComponent;
  constructor(private roomsService: RoomsService){}
  ngOnInit(){
    // console.log("container",this.roomsService);
    
  }

  ngAfterContentInit(){
    this.employ.empName='Rick';

  
  }

}
