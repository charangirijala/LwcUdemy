import { LightningElement } from "lwc";

export default class CtopModal extends LightningElement {
  closeHandler() {
    const myEvent = new CustomEvent("close");
    this.dispatchEvent(myEvent);
  }
}
