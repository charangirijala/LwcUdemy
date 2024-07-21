import { LightningElement, wire } from "lwc";
import SAMPLELMS from "@salesforce/messageChannel/SampleMessageChannel__c";
import { MessageContext, publish } from "lightning/messageService";
export default class LmsCompA extends LightningElement {
  inputMessage;
  @wire(MessageContext)
  context;

  handleKeyup(e) {
    this.inputMessage = e.target.value;
  }
  publishMessage() {
    const message = {
      lmsData: {
        value: this.inputMessage
      }
    };
    publish(this.context, SAMPLELMS, message);
  }
}
