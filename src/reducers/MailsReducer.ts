import { STORE_INBOX_DATA } from "../actions";
import { MailActionType } from "../OutlookTypes";

const initialState = {
  inboxItems: [],
  spamItems: [],
  deletedItems: [],
};
const MailsReducer = (state = initialState, action: MailActionType) => {
  switch (action.type) {
    case STORE_INBOX_DATA:
      return {
        ...state,
        inboxItems: action.payload.inboxItems,
        spamItems: action.payload.spamItems,
        deletedItems: action.payload.deletedItems
      };
    default:
      return state;
  }
};

export default MailsReducer;
