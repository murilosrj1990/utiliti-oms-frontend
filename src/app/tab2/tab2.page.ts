import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isOpenedSearchBar=false;
  listOfClients: any[] = [
    {
      "id": 1234,
      "img_src": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "name": "Pedro Alcantara",
      "phone": "(83) 99999-9999"
    },
    {
      "id": 1235,
      "img_src": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "name": "Rita Fonseca",
      "phone": "(83) 99999-9999"
    },
    {
      "id": 1236,
      "img_src": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "name": "Andersson Emmanuel",
      "phone": "(83) 99999-9999"
    }
  ];
  constructor() {}

}
