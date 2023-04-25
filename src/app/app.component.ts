import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

declare var cordova: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    });
  }

  onDeviceReady() {
    console.log('Cordova is ready!');
    // You can now use Cordova APIs here

    cordova.plugins.GleapPlugin.initialize("ogWhNhuiZcGWrva5nlDS8l7a78OfaLlV");
  }
}
