import { STORE_INBOX_DATA } from "./actions";

export interface IInitialState {
  inboxData: ISingleMailDataSet[];
  spamItems: ISingleMailDataSet[];
  deletedItems: ISingleMailDataSet[];
}

export interface IStoreInboxDataActionType {
  type: typeof STORE_INBOX_DATA;
  payload: {
    inboxItems: ISingleMailDataSet[];
    spamItems: ISingleMailDataSet[];
    deletedItems: ISingleMailDataSet[];
  };
}

export type MailActionType = IStoreInboxDataActionType;

export interface ISingleMailDataSet {
  mId: string;
  unread: boolean;
  subject: string;
  content: string;
}
