import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OnePageComponent } from './one-page/one-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
    ],
    declarations: [
        OnePageComponent]
})
export class ExamplesModule { }
