
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { CodeMirrorComponent } from './editor/code-mirror.component';
import { FootnoteComponent } from './editor/footnote.component';
import { PopupComponent } from './editor/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    CodeMirrorComponent,
    FootnoteComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxEditorModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
