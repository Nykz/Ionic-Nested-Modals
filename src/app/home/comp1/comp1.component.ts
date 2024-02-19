import { Component, EventEmitter, Output } from '@angular/core';
import {
  IonHeader,
  IonLabel,
  IonItem,
  IonImg,
  IonAvatar,
  IonToolbar,
  IonContent,
  IonButton,
  IonButtons,
  IonTitle,
  IonList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonToolbar,
    IonAvatar,
    IonImg,
    IonItem,
    IonLabel,
    IonHeader,
  ],
})
export class Comp1Component {
  @Output() enter: EventEmitter<any> = new EventEmitter();
  @Output() exit: EventEmitter<any> = new EventEmitter();

  constructor() {}

  close() {
    this.exit.emit(true);
  }

  enterModal2() {
    this.enter.emit(true);
  }
}
