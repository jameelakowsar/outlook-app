import { STORE_INBOX_DATA } from './ActionTypes'
import { ISingleMailDataSet } from '../OutlookTypes'

export const storeInboxData = (inboxItems:ISingleMailDataSet[], spamItems:ISingleMailDataSet[], deletedItems:ISingleMailDataSet[]) => {
    return {
        type: STORE_INBOX_DATA,
        payload: {
            inboxItems,
            spamItems,
            deletedItems
        }
    }
    
}