import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listOfNotifications: any[] = [
    {
      "id": 1234,
      "img_src": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "sender": "Pedro Alcantara",
      "message": "Pagamento Realizado"
    },
    {
      "id": 1235,
      "img_src": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "sender": "Rita Fonseca",
      "message": "Pagamento Realizado"
    },
    {
      "id": 1236,
      "img_src": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "sender": "Andersson Emmanuel",
      "message": "Pagamento Realizado"
    }
  ];
  constructor() { }

  deleteItem(itemId: number) {
    this.listOfNotifications.splice(this.findIndexByItemId(itemId),1);
  }

  findIndexByItemId(itemId: number):number {
    let indexItem=-1;
    this.listOfNotifications.forEach(item => {
     if(itemId===item.id) indexItem = this.listOfNotifications.indexOf(item);
    });
    return indexItem;
  }

}
