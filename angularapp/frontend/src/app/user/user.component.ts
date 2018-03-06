import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /// voorlopiige hardcoded inlog
  onSubmit(name: HTMLInputElement, pass: HTMLInputElement): boolean {
    if(name.value==="Rudy" && pass.value === "De Leeuw"){
      console.log("ingelogd");
    }
    else{
      console.log("Niet ingelogd");
    }
    return false;
  }

}
