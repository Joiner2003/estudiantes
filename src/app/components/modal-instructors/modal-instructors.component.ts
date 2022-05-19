import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-instructors',
  templateUrl: './modal-instructors.component.html',
  styleUrls: ['./modal-instructors.component.scss'],
})
export class ModalInstructorsComponent {

  @Input() title: string;

  constructor(
    private modalCtr: ModalController,
  ) { }

  isSubmitted = true;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    typeDoc: new FormControl('', [Validators.required]),
    doc: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rol: new FormControl(''),
  })

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

  submit(){
    this.isSubmitted = true;
    if (!this.form.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log("yucaaa", this.form.value)
    }
  }

  get errorControl() {
    return this.form.controls;
  }

}
