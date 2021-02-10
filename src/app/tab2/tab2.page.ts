import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isOpenedSearchBar=false;
  listOfClients: any[]=[
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
  
  constructor(
    private router:Router
  ) {}

  openClientDetail(client){
    console.log("Open client detail page: "+client);
    this.router.navigateByUrl(`/tabs/tab2/client-detail/${client}`);
  }

  openAddClientPage(){
    console.log("open add client page");
    this.router.navigateByUrl("/tabs/tab2/add-client");
  }
  ngOnInit(){
    
  }

}
