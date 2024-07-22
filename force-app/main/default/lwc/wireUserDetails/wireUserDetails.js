import { LightningElement, wire } from "lwc";
import { getFieldValue, getRecord } from "lightning/uiRecordApi";
import Id from "@salesforce/user/Id";
import USER_NAME from "@salesforce/schema/User.Name";
import USER_EMAIL from "@salesforce/schema/User.Email";
export default class WireUserDetails extends LightningElement {
  userId = Id;

  userDetail;
  @wire(getRecord, {
    recordId: "005F3000008RIhjIAG",
    fields: [USER_NAME, USER_EMAIL]
  })
  userDetailHandler({ data, error }) {
    if (data) {
      this.userDetail = data;
    }
    if (error) {
      console.error(error);
    }
  }
  get name() {
    return getFieldValue(this.userDetail, USER_NAME);
  }
  get email() {
    return getFieldValue(this.userDetail, USER_EMAIL);
  }
}
