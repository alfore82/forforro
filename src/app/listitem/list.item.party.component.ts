import { Component, OnInit, Input } from '@angular/core';
import { PartyInfo } from "app/shared/objects/party.Info";

@Component({
  selector: 'app-list-item-party',
  templateUrl: './list.item.party.component.html',
  styleUrls: ['./list.item.party.component.css']
})
export class ListItemPartyComponent implements OnInit {
  @Input() partyInfo: PartyInfo;
  constructor() {

    
   }

  ngOnInit() {
  }

}
