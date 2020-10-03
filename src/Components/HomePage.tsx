import * as React from "react";
import { connect } from "react-redux";

import { Header } from "./Header";
import { LeftNavMailFolders } from "./LeftNavMailFolders";
import { MailsList } from "./MailsList";
import { InboxData, SpamData, DeletedItems } from "../dataJSON";
import { ISingleMailDataSet, IUnreadCountListType } from "../OutlookTypes";
import { storeInboxData } from "../actions";

interface IHomePageProps {
  inboxData: ISingleMailDataSet[];
  unreadCountList: IUnreadCountListType
  storeInboxData: (InboxData: any, SpamData: any, DeletedItems: any) => void;
}
interface IHomePageState {}

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props);
  }

  public componentDidMount(): void {
    this.props.storeInboxData(InboxData, SpamData, DeletedItems);
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Header />
        <div className="sections">
          <LeftNavMailFolders unreadCountList={this.props.unreadCountList} />
          <MailsList mailsData={InboxData} />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state: any) => {
  console.log(state, "state values");
  const mailInfo = state.MailsReducer;
  const inboxData = mailInfo.inbox;
  return {
    inboxData,
    unreadCountList: {
      inboxUnreadCount: mailInfo.inboxUnreadCount,
      spamUnreadCount: mailInfo.spamUnreadCount,
      deletedUnreadCount: mailInfo.deletedUnreadCount,
    },
  };
};
export default connect(mapStateToProps, {
  storeInboxData,
})(HomePage);
