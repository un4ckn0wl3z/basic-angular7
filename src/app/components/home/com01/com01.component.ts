import { Service2Service } from './../../../services/service2.service';
import { Component, Input, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { ICom2formData } from "src/app/interfaces/com2formdata.interface";

@Component({
    selector: 'app-com01',
    templateUrl: './com01.component.html',
    styleUrls: ['./com01.component.css']
  })
export class Com01Component implements OnInit  {


  com2FormDataInput: ICom2formData;
  
  constructor(private service2:Service2Service){
    //this.com2FormDataInput = this.service2.formData;
    // this.service2.getObservFormData()
    // .subscribe(data => {
    //   this.com2FormDataInput = data;
    // }, error => {
    //   //console.error(error);
    //   alert(error.message);
    // });

  }

  async ngOnInit() {
    

    try {
      const data = await this.service2.getPromiseFormData();
      this.com2FormDataInput = data;
  
    } catch (error) {
      alert(error.message)
    }


    // console.log(data);
    //console.log();
  }

}