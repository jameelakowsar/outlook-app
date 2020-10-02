import * as React from "react";

export class LeftNavMailFolders extends React.Component<{}, {}> {
  public render():JSX.Element {
    return (
        <div className="section1">
          <form className="example">
            <input
              type="text"
              placeholder="Search mail and people"
              name="search"
            />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
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
}
