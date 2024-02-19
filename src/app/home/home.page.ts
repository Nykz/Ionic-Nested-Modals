import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonAvatar,
  IonLabel,
  IonImg,
  IonButton,
  IonModal,
  IonButtons,
  IonList,
} from '@ionic/angular/standalone';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonButtons,
    IonModal,
    IonButton,
    IonImg,
    IonLabel,
    IonAvatar,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    Comp1Component,
    Comp2Component
  ],
})
export class HomePage {

  isSecondModalOpen = false;
  presentingElement: any = null;

  constructor() {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
}
