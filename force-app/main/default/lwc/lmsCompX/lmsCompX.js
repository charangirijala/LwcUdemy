import { LightningElement, wire } from "lwc";
import SAMPLELMS from "@salesforce/messageChannel/SampleMessageChannel__c";
import {
  subscribe,
  MessageContext,
  APPLICATION_SCOPE
} from "lightning/messageService";
export default class LmsCompX extends LightningElement {
  recievedMessage;
  @wire(MessageContext)
  context;
  connectedCallback() {
    this.subscribeMessage();
  }
  subscribeMessage() {
    subscribe(
      this.context,
      SAMPLELMS,
      (message) => {
        this.handleMessage(message);
      },
      {
        scope: APPLICATION_SCOPE
      }
    );
  }

  handleMessage(message) {
    this.recievedMessage = message.lmsData.value
      ? message.lmsData.value
      : "No Message";
  }
}
