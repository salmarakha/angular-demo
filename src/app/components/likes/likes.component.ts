import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input() likesCount!: number; // receives no. of likes from parent (parent --> child)
  @Input() liked!: boolean;
  @Output() action: EventEmitter<boolean> = new EventEmitter<boolean>(); // sends the user's action to parent  (child --> parent)

  constructor() { }

  ngOnInit(): void {
  }

  toggleLike() {
    this.liked = this.liked? false : true;
    this.action.emit(this.liked);
  }

}
