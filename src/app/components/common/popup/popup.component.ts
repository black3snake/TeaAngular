import {Component, HostBinding} from '@angular/core';
import {PopupService} from "../../../services/popup.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  constructor(private popupService: PopupService, private router: Router) {}

  @HostBinding('class.visible') get visible() {
    return this.showPopup;
  }

  get showPopup(): boolean {
    return this.popupService.showPopup;
  }

  hide(): void {
    this.popupService.hidePopup();
  }

  goProducts() {
    this.hide();
    this.router.navigate(['products']);
  }
}
