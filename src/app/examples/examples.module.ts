import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OnePageComponent } from './one-page/one-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        HttpClientModule
    ],
    declarations: [
        OnePageComponent]
})
export class ExamplesModule { }
