import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  bookForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public serviceService: ServiceService,
    private modalService: NgbModal
  ) {}

  @ViewChild('content') addview!: ElementRef;
  ngOnInit(): void {}

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
