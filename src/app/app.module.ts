import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './book/listar/listar.component';
import { AddComponent } from './book/add/add.component';
import { EditComponent } from './book/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipe, FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [AppComponent, ListarComponent, AddComponent, EditComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, //import here
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgGridModule,
    MatIconModule,
    NgbModule,
    NgxPaginationModule,
    OrderModule,
    FilterPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
