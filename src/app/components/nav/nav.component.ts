import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {

  public appPagesInstructor = [
    { title: 'Mis fichas', url: '/fichas', icon: 'school' },
    { title: 'Horario', url: '/horario', icon: 'clipboard' },
    { title: 'Aprendices', url: '/aprendices', icon: 'people' }
  ];
  public appPagesAdmin = [
    { title: 'Fichas', url: '/fichas', icon: 'school' },
    { title: 'Instructores', url: '/instructores', icon: 'people' },
    { title: 'Aprendices', url: '/aprendices', icon: 'person' }
  ];
  constructor() {}
}
  