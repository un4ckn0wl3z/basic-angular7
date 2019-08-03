import { Component, Input, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { ICom2formData } from "src/app/interfaces/com2formdata.interface";

@Component({
    selector: 'app-com01',
    templateUrl: './com01.component.html',
    styleUrls: ['./com01.component.css']
  })
export class Com01Component  {

  @Input('com2FormDataInput') com2FormDataInput: ICom2formData;



}