import { LightningElement } from "lwc";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME from "@salesforce/schema/Account.Name";
import ANNUAL_REVENUE from "@salesforce/schema/Account.AnnualRevenue";
import TYPE from "@salesforce/schema/Account.Type";
import INDUSTRY from "@salesforce/schema/Account.Industry";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class RecordForms extends LightningElement {
  objectName = ACCOUNT_OBJECT;
  fieldList = [NAME, ANNUAL_REVENUE, TYPE, INDUSTRY];

  successHandler(event) {
    console.log(event.detail.id);
    const toast = new ShowToastEvent({
      title: "Account Created!!",
      message: "Record Id: " + event.detail.id,
      variant: "success"
    });
    this.dispatchEvent(toast);
  }
}
