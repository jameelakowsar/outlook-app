import * as React from "react";
import { ISingleMailDataSet } from '../OutlookTypes'

interface IShortMailProps {
    mailInfo: ISingleMailDataSet
}
export class ShortMail extends React.Component<IShortMailProps, {}> {
  public render(): JSX.Element {
      const mailInfo = this.props.mailInfo
    return (
      <div className="list-items" onClick={this.onShortMailClick}>
        <span className="span1 span-items">{mailInfo.mId}</span>
        <span className="span2 span-items">{mailInfo.subject}</span>
        <span className="span3 span-items">{mailInfo.content}</span>
      </div>
    );
  }

  private onShortMailClick = () => {
    // route changes if any
    // need to open complete mail
    // redux call to reduce unread count
    // styles update
  }
}
