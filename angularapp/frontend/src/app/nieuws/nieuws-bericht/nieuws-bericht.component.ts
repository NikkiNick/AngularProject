import { Component, OnInit, Input } from '@angular/core';
import { NieuwsBericht } from './nieuws-bericht.model';

@Component({
  selector: 'app-nieuws-bericht',
  templateUrl: './nieuws-bericht.component.html',
  styleUrls: ['./nieuws-bericht.component.css']
})
export class NieuwsBerichtComponent implements OnInit {

  @Input() public nieuwsbericht: NieuwsBericht;
  constructor() { }

  ngOnInit() {
  }

}
