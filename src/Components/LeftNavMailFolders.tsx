import * as React from "react";
import { SearchBar } from "./SearchBar";
import { IUnreadCountListType } from '../OutlookTypes'
interface ILeftNavFoldersProps {
  unreadCountList: IUnreadCountListType
}
interface ILeftNavFoldersState {
  searchKey:string
}
export class LeftNavMailFolders extends React.Component<ILeftNavFoldersProps, ILeftNavFoldersState> {
  constructor(props: ILeftNavFoldersProps){
    super(props);
    this.state = {
      searchKey:'',
    };
  }
  public render():JSX.Element {
    return (
        <div className="section1">
          <SearchBar onSearch={this.onSearch} />
          <div className="menu-section">
            <div className="sectio-header1">
              <i className="fa fa-chevron-up" aria-hidden="true" />
              <span className="span-header">Folders</span>
            </div>
            <div className="menu-items-list">
              <span className="menu-main-item menu-items">Inbox 2</span>
              <span className="menu-items">Junk Email</span>
              <span className="menu-items">Drafts</span>
              <span className="menu-items">Sent Items</span>
              <span className="menu-items">Deleted Items</span>
              <span className="menu-items">Archive</span>
            </div>
          </div>
        </div>
    );
  }

  private onSearch = (searchValue:string) => {
    this.setState({ searchKey:searchValue })
    // redux call
    // update router
    // update mails list
  }
}
