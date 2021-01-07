import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.page.html',
  styleUrls: ['./client-detail.page.scss'],
})
export class ClientDetailPage implements OnInit {
  osList=[
    {
      create_at: "07-10-2020",
      value: 200.50,
      products: [
        {
          reference_number: 345156,
          name: "Armação Vizzani Zilo"          
        },
        {
          reference_number: 2676,
          name: "Lente Acuris com Antireflexo"          
        }
      ]
    }
  ];
  recipeList=[
    {
      ophthalmologist: "Claudio Carteggiani",
      created_at: "07-10-2020",
      re_pd: 0.5,
      re_axis: 0.6,
      re_espherical: 0.6,
      re_cilidrical: 2.1,
      le_pd: 0.5,
      le_axis: 0.6,
      le_espherical: 0.6,
      le_cilidrical: 2.1,
      additional: 2.2
    },
    {
      ophthalmologist: "Claudio Carteggiani",
      created_at: "22-05-2020",
      re_pd: 0.6,
      re_axis: 1.3,
      re_espherical: 0.6,
      re_cilidrical: 2.1,
      le_pd: 0.5,
      le_axis: 0.6,
      le_espherical: 0.2,
      le_cilidrical: 0.1,
      additional: 1.2
    }
  ];
  paymentsList=[];
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
