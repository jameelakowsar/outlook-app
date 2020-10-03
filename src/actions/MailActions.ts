import { GET_FILTER_DATA, STORE_INBOX_DATA, UPDATE_MAILS_LIST } from './ActionTypes'
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

export const filterData = (selectedFilter:string) => ({
    type: GET_FILTER_DATA,
    payload: selectedFilter
})

export const getUpdatedMailsList = (mailsList: ISingleMailDataSet[], mailType: string) => ({
    type: UPDATE_MAILS_LIST,
    payload: {
        mailsList,
        mailType
    }
})