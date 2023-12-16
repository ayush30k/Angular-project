import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ContactPopupComponent } from '../component/contact-popup/contact-popup.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private matdialog:MatDialog) { }

  ngOnInit(): void {
  }
   dialogConfig = new MatDialogConfig();
  openpopup(){
  
    this.matdialog.open(ContactPopupComponent,{
      width:'auto',
      data:{
        name:"Ayush Kumar",
        email:"ayush30kr@gmail.com",
        link:"https://www.linkedin.com/in/ayush-kumar-b61017168/",
        contact:"+91 7277313565"
      }
      
    })
  }

}
