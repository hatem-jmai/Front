import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {
  data:any;
  file:any;
  constructor(private Myservice:DashboardService) { }

  ngOnInit() {
  }
  upload(event) {
    this.file = event.target.files[0];
    /*  this.body = {
      fileName: this.file
    }
    console.log(this.body.fileName); */
    this.data = new FormData();
    this.data.append('file', this.file);
    console.log(this.data);
  }
  onSubmit(){
    this.Myservice.uploadFiles(this.data).subscribe(data => {
      console.log(data);
    });
  }

}
