import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameLabel: string = ""
  @Input()
  gameCover:string = ""
  @Input()
  gamePrice: string = ""
  @Input()
  gameConsole: string = "R$"
  
  constructor() { }

  ngOnInit(): void {
  }

}
