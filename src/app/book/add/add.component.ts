import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../Service/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  bookForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public serviceService: ServiceService,
    private modalService: NgbModal
  ) {}

  @ViewChild('content') addview!: ElementRef;
  ngOnInit(): void {
    this.bookForm = this.fb.group({
      namebook: ['', Validators.required],
      descriptionbook: ['', Validators.required],
      authorbook: ['', Validators.required],
      datepublishbook: ['', Validators.required],
      numberbook: ['', Validators.required],
      pricebook: ['', Validators.required],
    });
  }

  guardar(): void {
    this.serviceService.saveBook(this.bookForm.value).subscribe(
      (resp) => {
        location.reload();
        alert('Registro guardado con éxito');
        //this.getsoftBooks();
      },
      (error) => console.log(error)
    );
  }

  open() {
    const modalRef = this.modalService
      .open(this.addview, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then(
        (result) => {},
        (reason) => {}
      );
  }
}
