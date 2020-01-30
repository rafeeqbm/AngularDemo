import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  DxHtmlEditorModule,
  DxButtonModule,
  DxListModule
} from 'devextreme-angular';
import { CommentService } from './service/comment.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxHtmlEditorModule,
    DxButtonModule,
    DxListModule,
    HttpClientModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
