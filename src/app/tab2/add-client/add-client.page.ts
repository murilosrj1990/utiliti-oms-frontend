import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.page.html',
  styleUrls: ['./add-client.page.scss'],
})
export class AddClientPage implements OnInit {

  newClient={}
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  cancelButton(){
    this.router.navigateByUrl("tabs/tab2");
  }

  saveClient(){
    console.log(this.newClient);
    this.router.navigateByUrl("/tabs/tab2");
  }

}
