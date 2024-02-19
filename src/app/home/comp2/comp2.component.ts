import { Component, EventEmitter, Output } from '@angular/core';
import { IonImg, IonItem, IonLabel, IonAvatar, IonHeader, IonList, IonContent, IonToolbar, IonTitle, IonButtons, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonTitle, IonToolbar, IonContent, IonList, IonHeader, IonAvatar, IonLabel, IonItem, IonImg, ]
})
export class Comp2Component {
  
  @Output() exit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  close() {
    this.exit.emit(true);
  }

}
