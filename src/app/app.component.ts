import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  ViewChildren,
  Optional,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from 'src/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'HotelInventoryApp';
  role = 'user';
  // @ViewChild('user', { read: ViewContainerRef }) viewref!: ViewContainerRef;
  @ViewChild('name',{static:true}) name!:ElementRef;
  constructor(@Optional() private loggerService:LoggerService){}
  ngAfterViewInit() {
    // const componentRef = this.viewref.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms=50;
    this.loggerService?.log('Appcomponent.ngOnInit()')
    this.name.nativeElement.innerText='Hilton Hotel';
  }
}
