import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class Notifications extends LightningElement {
  handleToast() {
    const event = new ShowToastEvent({
      title: "Success!!",
      message: "Account Created!",
      variant: "success"
    });

    this.dispatchEvent(event);
  }
}
