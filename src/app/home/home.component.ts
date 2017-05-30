import { Component, OnInit } from '@angular/core';
import { PartyInfo } from "app/shared/objects/party.Info";

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  partyInfos: PartyInfo[] = [
    new PartyInfo(
          new Date(), 
          new Date(), 
          "Forró de Domingo Sonnstagsparty", 
          "La La La die größte Forroparty Deutschlands",
          "Forró de Domingo", 
          "7grad, Theodor Heuss Str 150, Stuttgart, Germany", 
          5,
          "€","../assets/0e3d21c85e3b8e9e1da7d4fd2dcb8bc1.jpg"),
    new PartyInfo(
          new Date(), 
          new Date(), 
          "Munique Danca Forró", 
          "The coasiest Forróparty in Germany",
          "Munique Danca Forró", 
          "birdie,irgendwo in München, München, Germany", 
          5,
          "€","../assets/13FORRO_SPAN-articleLarge.jpg"),
      new PartyInfo(
          new Date(), 
          new Date(), 
          "Forro Daki", 
          "Forro Daki party in Mannheim",
          "Forro Daki", 
          "irgendwor in Mannheim, Germany", 
          4,
          "€","../assets/13FORRO_SPAN-articleLarge.jpg")];
  constructor() { }

  ngOnInit() {
  }

}
