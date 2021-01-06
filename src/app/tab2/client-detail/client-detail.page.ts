import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.page.html',
  styleUrls: ['./client-detail.page.scss'],
})
export class ClientDetailPage implements OnInit {

  selectedTab='info';
  clientInfo={
    id: 8789,
    name: "Carlos Torres Alcantara",
    phone1: "(83) 99999-9999",
    phone2: "(83) 99999-9999",
    phone3: "(83) 99999-9999",
    email: "teste@teste.com.br",
    document_id1: "012.345.678-91",
    document_id2: "34712334",
    birthdate:"12/08/1990",
    street: "Rua do Palmares",
    number: "345",
    number_complement: "B",
    reference:"Próximo a Òtica",
    neighborhood: "Centro",
    city: "Queimadas",
    state: "Paraíba",
    affiliation: "Filho de Zé Vaqueiro"
  }
  constructor() { }

  ngOnInit() {
  }

}
