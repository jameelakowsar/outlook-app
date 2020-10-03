import * as React from "react";
import { ISingleMailDataSet } from "../OutlookTypes";

interface IShortMailProps {
  mailInfo: ISingleMailDataSet;
}
export class ShortMail extends React.Component<IShortMailProps, {}> {
  public render(): JSX.Element {
    const mailInfo = this.props.mailInfo;
    return (
      <React.Fragment>
      <div className="list-items" onClick={this.onShortMailClick}>
        <div className="list-items-wrapper"> {/** border left */}
          <div className="span1 span-items">{mailInfo.mId}</div> {/** short divs and cls name changes */}
          <div className="span2 span-items">{mailInfo.subject}</div>
          <div className="span3 span-items">{mailInfo.content}</div>
        </div>
        <div className="icons-section-wrapper">
          <i className="fa fa-flag-o" aria-hidden="true" onClick={this.onClickFlag} />
          <i className="fa fa-trash-o" aria-hidden="true" onClick={this.onDeleteMail} />
        </div>
      </div>
      <div className="list-border"></div> {/** left side blue line */}
      </React.Fragment>
    );
  }

  private onShortMailClick = (event:any) => {
    event.preventDefault();
    console.log("on click");
    // route changes if any
    // need to open complete mail
    // redux call to reduce unread count
    // styles update
  };

  private onClickFlag = () => {
    console.log('flaggggggggggggggggggggg')
  }

  private onDeleteMail = () => {
    console.log('on delete mail')
  }
}
