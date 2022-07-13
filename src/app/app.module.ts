import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { Window1Component } from './window1/window1.component';
import { Window2Component } from './window2/window2.component';
import { Window3Component } from './window3/window3.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    Window1Component,
    Window2Component,
    Window3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
