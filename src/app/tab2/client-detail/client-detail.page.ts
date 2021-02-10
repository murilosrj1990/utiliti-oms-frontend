
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController, IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.page.html',
  styleUrls: ['./client-detail.page.scss'],
})
export class ClientDetailPage implements OnInit {

  isProgress=false;
  osList = [
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
  recipeList = [
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
      created_at: "05-22-2020",
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
  paymentsList = [
    {
      id: 1234,
      created_at: '09-20-2020',
      service_order: 208345,
      value: 350,
      payments: [
        {
          id: 2267,
          value: 100.0,
          status: 'paid',
          due_date: '10-20-2020'
        },
        {
          id: 2268,
          value: 100.0,
          status: 'pending',
          due_date: '11-20-2020'
        },
        {
          id: 2269,
          value: 100.0,
          status: 'pending',
          due_date: '12-20-2020'
        },
        {
          id: 2270,
          value: 50.0,
          status: 'overdue',
          due_date: '01-09-2021'
        }
      ]
    }
  ];
  selectedTab = 'info';
  clientInfo = {
    id: 8789,
    name: "Carlos Torres Alcantara",
    phone1: "(83) 99999-9999",
    phone2: "(83) 99999-9999",
    phone3: "(83) 99999-9999",
    email: "teste@teste.com.br",
    document_id1: "012.345.678-91",
    document_id2: "34712334",
    birthdate: "12/08/1990",
    street: "Rua do Palmares",
    number: "345",
    number_complement: "B",
    reference: "Próximo a Òtica",
    neighborhood: "Centro",
    city: "Queimadas",
    state: "Paraíba",
    affiliation: "Filho de Zé Vaqueiro"
  }
  constructor(
    private alertController: AlertController,
    private DatePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private refresher: IonRefresher) { }

  async openPaymentDialog(payment) {

    const alert = await this.alertController.create({
      header: `Confirmação de pagamento`,
      message: `Você deseja realmente marcar a parcela <strong>ID ${payment.id}</strong>, com o vencimento <strong>${ this.DatePipe.transform(payment.due_date,'dd/MM/yy')}</strong> no valor de <strong>${this.currencyPipe.transform(payment.value,'BRL')}</strong>?`,
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel action');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.paymentConfirmById(payment.id);
          }
        }
      ]
    });

    await alert.present();

  }

  
  doRefresh(event){
    event.target.complete();
    this.isProgress=true;
    setTimeout(() => {
      this.isProgress=false;
    }, 3000);
  }

  paymentConfirmById(paymentId){
    console.log(`Payment confirmed: ${paymentId}`);
  }


  ngOnInit() {
  }

}
