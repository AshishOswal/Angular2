import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { ReturnsJsonArrayService } from './returns-json-array.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ReturnsJsonArrayService]
})
export class AppModule { }
