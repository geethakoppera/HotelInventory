import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output,OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit,OnChanges,OnDestroy {
  @Input() rooms: RoomList[]= [];
  @Input() title: string =''; 
  @Output() roomSelected = new EventEmitter<RoomList>();
  constructor(){}
  ngOnChanges(changes:SimpleChanges): void{
    console.log(changes);
    if(changes['title']){
      this.title=changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnInit(): void {}
  selectRooom(room:RoomList){
    this.roomSelected.emit(room);
  }
  ngOnDestroy(){
    console.log("onDestroy called");
  }

}
