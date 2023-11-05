import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }
  originalSize=0
  fitToScreen: boolean = true;
  pdfSrc:string='assets/AyushResume.pdf'
  ngOnInit(): void {
this.originalSize=window.innerWidth

}
}