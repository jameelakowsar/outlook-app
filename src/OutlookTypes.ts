import { GET_FILTER_DATA, STORE_INBOX_DATA, UPDATE_MAILS_LIST } from "./actions";

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

export interface IFilterDataActionTyle {
  type: typeof GET_FILTER_DATA,
  payload: string, // this one also type or interface
}

export interface IGetUpdtedMailsListActionType {
  type: typeof UPDATE_MAILS_LIST,
  payload: {
    mailsList: ISingleMailDataSet[],
    mailtype: string; // change this too also type or interface
  }
}

export type MailActionType = IStoreInboxDataActionType | IFilterDataActionTyle | IGetUpdtedMailsListActionType

// export type FilterActionType = IFilterDataActionTyle


export interface IUnreadCountListType {
  inboxUnreadCount: number;
  spamUnreadCount: number;
  deletedUnreadCount: number;
}
export interface ISingleMailDataSet {
  mId: string;
  unread: boolean;
  subject: string;
  content: string;
}
