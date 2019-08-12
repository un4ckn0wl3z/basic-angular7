import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PanelComponent } from './panel/panel.component';

@NgModule({
    declarations: [PanelComponent],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot()
    ],
    exports:[PanelComponent]
})
export class SharesModule {

}