import { LightningElement } from "lwc";

export default class C2pParent extends LightningElement {
  loadModal = false;
  msg = "";
  handleClick() {
    this.loadModal = true;
  }
  closeHandler(e) {
    this.msg = e.detail;
    this.loadModal = false;
  }
}
