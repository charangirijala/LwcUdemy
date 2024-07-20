import { LightningElement } from "lwc";

export default class C2pParent extends LightningElement {
  loadModal = false;
  handleClick() {
    this.loadModal = true;
  }
  closeHandler() {
    this.loadModal = false;
  }
}
