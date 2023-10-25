import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  opened=false
  
  toggle(){
    if(this.opened==false){
     this.opened=true
    }
    
   else{this.opened=false} 
    console.log(this.opened+"Ayush")
  }
}
