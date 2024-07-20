import { api, LightningElement } from "lwc";

export default class P2cSlider extends LightningElement {
  val = 10;

  changeHandler(e) {
    this.val = e.target.value;
  }

  @api resetHandler() {
    this.val = 50;
  }
}
