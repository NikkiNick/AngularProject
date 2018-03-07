import { Component, Output, EventEmitter } from '@angular/core';
import { NieuwsBericht } from '../nieuws-bericht/nieuws-bericht.model';

@Component({
  selector: 'app-add-nieuws-bericht',
  templateUrl: './add-nieuws-bericht.component.html',
  styleUrls: ['./add-nieuws-bericht.component.css']
})
export class AddNieuwsBerichtComponent{

  @Output() public nieuwNieuwsBericht = new EventEmitter<NieuwsBericht>();

  addNieuwsBericht(titel: string, bericht: string) : boolean {
    const nieuws = new NieuwsBericht(titel, bericht, 'Nick');
    this.nieuwNieuwsBericht.emit(nieuws);
    return false;
  }
}
