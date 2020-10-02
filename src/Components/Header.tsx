import * as React from "react";

export class Header extends React.Component<{}, {}> {
    public render(): JSX.Element {
      return (
        <div className="header1">
          <i className="fa fa-th header1-icon" aria-hidden="true"></i>
          <div className="header1-text">Outlook Mail</div>
        </div>
      );
    }
  }