import { GET_FILTER_DATA, STORE_INBOX_DATA, UPDATE_MAILS_LIST } from "../actions";
import {
  // FilterActionType,
  ISingleMailDataSet,
  MailActionType,
} from "../OutlookTypes";

const initialState = {
  inboxItems: [],
  spamItems: [],
  deletedItems: [],
  inboxUnreadCount: 0,
  spamUnreadCount: 0,
  deletedUnreadCount: 0,
};
export const MailsReducer = (state = initialState, action: MailActionType) => {
  switch (action.type) {
    case STORE_INBOX_DATA:
      const inboxUnreadItems = action.payload.inboxItems!.filter(
        (singleItem: ISingleMailDataSet) => singleItem.unread
      );
      const inboxUnreadCount = Object.keys(inboxUnreadItems)!.length;

      const spamUnreadItems = action.payload.spamItems!.filter(
        (singleItem: ISingleMailDataSet) => singleItem.unread
      );
      const spamUnreadCount = Object.keys(spamUnreadItems)!.length;

      const deletedUnreadItems = action.payload.deletedItems!.filter(
        (singleItem: ISingleMailDataSet) => singleItem.unread
      );
      const deletedUnreadCount = Object.keys(deletedUnreadItems)!.length;
      console.log(
        "unread",
        inboxUnreadCount,
        spamUnreadCount,
        deletedUnreadCount
      );
      return {
        ...state,
        inboxItems: action.payload.inboxItems,
        spamItems: action.payload.spamItems,
        deletedItems: action.payload.deletedItems,
        inboxUnreadCount: inboxUnreadCount,
        spamUnreadCount: spamUnreadCount,
        deletedUnreadCount: deletedUnreadCount,
      };

    case GET_FILTER_DATA:
      let data;
      if (action.payload === "allMail") { // need to check which type selected. based on that fiter data
        // console.log("all Mail here", state);
        data = state;
      } else if (action.payload === "unread") {
        // console.log("unread mails", state);
        return state;
      }
     
    case UPDATE_MAILS_LIST:
      console.log(action, 'action in update mails')
      return state;

    default:
      return state;
  }
};

// export const filterData = (state = initialState, action: FilterActionType) => {
//   console.log(action, state, "hhhhhhhhhhhhhhhhhhhhh");
//   switch (action.type) {
//     case GET_FILTER_DATA:
//       let data;
//       if (action.payload === "allMail") {
//         console.log("all Mail here", state);
//         data = state;
//       } else if (action.payload === "unread") {
//         console.log("unread mails", state);
//       }
//       return state;
//     default:
//       return state;
//   }
// };

// export default MailsReducer;
