import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from './Service/service.service';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { BookInterface } from './interfaces/book.interfaces';
import { Bookedit, Bookmeta, Bookregister } from './interfaces/book.register';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './book/edit/edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  bookForm: FormGroup;
  bookwrite: Bookedit[] = [];

  data: Array<any>;
  totalRecords = 0;
  page = 0;
  currentPage = 2;
  itemsperPage = 2;

  orderHeader: String = '';
  isDescOrde: boolean = true;
  sortItem = '';

  constructor(
    public fb: FormBuilder,
    public serviceService: ServiceService,
    private modalService: NgbModal
  ) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.iniData();
  }

  iniData() {
    this.serviceService.getAllbook(0, 'id', 5, 'asc').subscribe((data) => {
      this.data = data.content;
      this.totalRecords = data.totalElements;
      this.itemsperPage = data.size;
    });
  }

  sort(headerName: string) {
    console.log(headerName);

    this.isDescOrde = !this.isDescOrde;
    if (this.isDescOrde) {
      this.sortItem = 'asc';
    } else {
      this.sortItem = 'desc';
    }

    //this.orderHeader = headerName;
    this.serviceService
      .getAllbook(0, headerName, this.itemsperPage, this.sortItem)
      .subscribe((data) => {
        this.data = data.content;
        this.totalRecords = data.totalElements;
        this.itemsperPage = data.size;
        this.page = data.pageable.pageNumber;
      });
  }
  selectOption(id: number) {
    this.itemsperPage = id;
    this.serviceService.getAllbook(0, 'id', id, 'asc').subscribe((data) => {
      this.data = data.content;
      this.totalRecords = data.totalElements;
      this.itemsperPage = data.size;
    });
  }
  dataS(event: any) {
    console.log(event);
    this.page = event;
    this.serviceService
      .getAllbook(event - 1, 'id', this.itemsperPage, 'asc')
      .subscribe((data) => {
        this.data = data.content;
        this.totalRecords = data.totalElements;
        this.itemsperPage = data.size;
      });
  }

  clickAddTodo(book: Bookedit) {
    const modalRef = this.modalService.open(EditComponent, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    modalRef.componentInstance.book = book;
    modalRef.result.then((result) => {});
  }

  eliminar(book: any) {
    console.log(book);
    this.serviceService.BookDelete(book).subscribe((resp) => {
      console.log(resp);

      this.iniData();
    });
  }
}
