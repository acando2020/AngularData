import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Bookedit } from 'src/app/interfaces/book.register';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  @Input() public book!: any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  datasaved = false;
  bookForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formbuilder: FormBuilder,
    public serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.bookForm = this.formbuilder.group({
      id: [' ', [Validators.required]],
      namebook: [' ', [Validators.required]],
      descriptionbook: [' ', [Validators.required]],
      authorbook: [' ', [Validators.required]],
      datepublishbook: [' ', [Validators.required]],
      numberbook: [' ', [Validators.required]],
      pricebook: [' ', [Validators.required]],
    });
  }
  passBack() {
    this.passEntry.emit(this.book);
    this.activeModal.close(this.book);
  }
  onFormSubmit() {
    this.datasaved = false;
    let book = this.bookForm.value;
    this.editbooks(book);
  }
  editbooks(book: Bookedit) {
    this.serviceService.editbook(book).subscribe((book) => {
      this.datasaved = true;
      location.reload();
      alert('Registro Actualizado con éxito');
    });
  }
}
