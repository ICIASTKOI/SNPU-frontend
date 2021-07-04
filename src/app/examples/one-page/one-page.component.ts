import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.css']
})
export class OnePageComponent implements OnInit {

  focus: any;
  focus1: any;
  request : MailRequest;
  options: IndividualConfig;

  email:String;
  message:String;
  name:String;

  @ViewChild('mailForm', {static: false}) contactForm: NgForm;

  constructor(private httpClient: HttpClient,  private toastr: ToastrService) {

    this.options = this.toastr.toastrConfig;
    this.options.positionClass = 'toast-top-center';
    this.options.timeOut = 1500;
   }

  ngOnInit() {}

  click(){
    console.log("click")
  }

  onSubmit(contactForm: NgForm){

    console.log("Start");
    console.log(contactForm.value);
      const email = contactForm.value;
      this.request = new MailRequest(email.email, email.name, email.message);
      const headers = { 'Access-Control-Allow-Origin': "*", 'Content-Type': 'application/json'}  
      this.httpClient.post('http://localhost:8080/mail/',
      JSON.stringify(this.request),  {'headers':headers}  ).subscribe(
          response => {
            console.log("sended");
            this.contactForm.resetForm();
          }
        );
  }

  showSucces(){
    this.toastr.show('Wiadomość wysłana!', 'Twoja wiadomość została pomyślnie dostarczona do MISEVI', this.options);
  } 

}


export class MailRequest {

  constructor(
    public email: string,
    public name: string,
    public message: string
  ) {  }

}