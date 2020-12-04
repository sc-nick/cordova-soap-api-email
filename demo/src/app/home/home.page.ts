import { Component, NgZone} from '@angular/core';
import { Platform } from '@ionic/angular';

declare var FileTransferManager: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  manager: any;

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      let self = this;

      self.manager = SendEmailManager.init({
        multipleRecipient: true
      }, event => {
        console.log(event);
      });
    });
  }

  private sendEmail() {
    this.manager.sendEmail("test", res => {
      console.log(res);
    }, err => console.log(err));
  }
}
