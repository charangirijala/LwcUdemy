import { api, LightningElement } from "lwc";

export default class SetterChild extends LightningElement {
  userDetails;
  @api get details() {
    return this.userDetails;
  }
  set details(data) {
    const newAge = data.age * 2;
    this.userDetails = { ...data, age: newAge };
  }
}
