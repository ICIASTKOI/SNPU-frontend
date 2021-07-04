import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.css']
})
export class OnePageComponent implements OnInit {

  focus: any;
  focus1: any;
  request : MailRequest;

  email:String;
  message:String;
  name:String;

  @ViewChild('mailForm', {static: false}) contactForm: NgForm;

  constructor(private httpClient: HttpClient) {
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
      this.httpClient.post('http://34.116.208.58:8080/mail',
      JSON.stringify(this.request),  {'headers':headers}  ).subscribe(
          response => {
            console.log("sended");
            this.contactForm.resetForm();
          }
        );
  }

}


export class MailRequest {

  constructor(
    public email: string,
    public name: string,
    public message: string
  ) {  }

}