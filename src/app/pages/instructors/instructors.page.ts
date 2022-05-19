import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInstructorsComponent } from 'src/app/components/modal-instructors/modal-instructors.component';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.page.html',
  styleUrls: ['./instructors.page.scss'],
})
export class InstructorsPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
  ) { }

  isModalOpen: boolean = false;
  modalDataResponse: any;

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInstructorsComponent,
      componentProps: {
        'title': 'Crear Instructor',
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

}

