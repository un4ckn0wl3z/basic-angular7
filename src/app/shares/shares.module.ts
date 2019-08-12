import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PanelComponent } from './panel/panel.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValidateDirective } from "../directives/validate.directive";

@NgModule({
    declarations: [PanelComponent, ValidateDirective],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [PanelComponent, FormsModule, ReactiveFormsModule, ValidateDirective]
})
export class SharesModule {

}