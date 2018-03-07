import { Component, OnInit } from '@angular/core';
import { NieuwsBericht } from '../nieuws-bericht/nieuws-bericht.model';

@Component({
  selector: 'app-nieuws-overzicht',
  templateUrl: './nieuws-overzicht.component.html',
  styleUrls: ['./nieuws-overzicht.component.css']
})
export class NieuwsOverzichtComponent implements OnInit {

  ngOnInit(): void {
  }
  private _nieuwsberichten = new Array<NieuwsBericht>();

  constructor() { 
    const nieuwsbericht1 = new NieuwsBericht("Eerste bericht", "Dit is de inhoud", "Nick");
    this._nieuwsberichten.push(nieuwsbericht1);
  }

  ///GETTERS
  get nieuwsberichten(){
    return this._nieuwsberichten;
  }

  ///METHODS
  nieuwNieuwsBerichtToevoegen(nieuwsbericht){
    this._nieuwsberichten.push(nieuwsbericht);
  }


}
