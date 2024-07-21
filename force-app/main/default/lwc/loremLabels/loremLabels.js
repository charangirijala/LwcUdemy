import { LightningElement, api } from "lwc";
import LOREMONE from "@salesforce/label/c.loremOne";
import FORM_FACTOR from "@salesforce/client/formFactor";
import USER_ID from "@salesforce/user/Id";
import IS_GUEST from "@salesforce/user/isGuest";

export default class LoremLabels extends LightningElement {
  @api recordId;
  @api objectApiName;
  loremLabel = LOREMONE;
  formFactor = FORM_FACTOR;
  userId = USER_ID;
  get isGuest() {
    return IS_GUEST;
  }
}
