import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
@Component({
  selector: 'app-fiche-renseignement',
  templateUrl: './fiche-renseignement.component.html',
  styleUrls: ['./fiche-renseignement.component.scss']
})
export class FicheRenseignementComponent implements OnInit {
doc:jspdf;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  suivant(){
    this.router.navigateByUrl('/dashboard/rappel-rapport');
  }

  captureScreen()  
{  console.log("ahla")
  var data = document.getElementById('contentToConvert');  
  html2canvas(data).then(canvas => {  
    // Few necessary setting options  
    var imgWidth = 208;   
    var pageHeight = 295;    
    var imgHeight = canvas.height * imgWidth / canvas.width;  
    var heightLeft = imgHeight;  

    const contentDataURL = canvas.toDataURL('image/png')  
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
    var position = 0;  
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
    pdf.save('MYPdf.pdf'); // Generated PDF   
    this.doc = new jspdf('p', 'mm', 'a4');

this.doc.setFont('trado');

var arabic = 'مرحبا';
var arabic_with_diacritics = 'مَرْحَبًا';

this.doc.setFontSize(40);

this.doc.text(arabic, 200, 40, {align: 'right'});
this.doc.text(arabic_with_diacritics, 200, 80, {align: 'right'});

this.doc.save('a4.pdf'); 

  });  
  
} 

}
 
