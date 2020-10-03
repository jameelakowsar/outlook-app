import * as React from "react";
import { ShortMail } from './ShortMail'
import { Mail } from './Mail'
import { ISingleMailDataSet } from "../OutlookTypes";

interface IMailsListProps {
  mailsData: ISingleMailDataSet[];
}
interface IMailsListState {}
export class MailsList extends React.Component<
  IMailsListProps,
  IMailsListProps
> {
  constructor(props: IMailsListProps) {
    super(props);
  }
  public render(): JSX.Element {
    const mailsData = this.props.mailsData;
    return (
      <div className="section2">
        <div className="header1">
          <div className="section-header-items">
            <div className="items-headers">
              <div className="header-new">
                <i className="fa fa-arrow-circle-o-up" aria-hidden="true" />
                <span className="header-2-span">New |</span>
                <i className="fa fa-chevron-down" aria-hidden="true" />
              </div>
            </div>
            <div className="mark-mail">
              <i className="fa fa-print" aria-hidden="true" />
              <span className="header-2-span">Mark all as read</span>
            </div>
          </div>
          <div className="section-header-items-left">
            <div className="items-headers">
              <div className="header-new">
                <i className="fa fa-arrow-circle-o-up" aria-hidden="true" />
                <span className="header-2-span">Undo</span>
              </div>
            </div>
            <div className="mark-mail">
              <i className="fa fa-toggle-off " aria-hidden="true" />
              <span className="header-2-span">Try the beta</span>
            </div>
          </div>
        </div>
        <div className="section-2-separate">
          <div className="section-2-section-1">
            <div className="list-items-cotainer">
              {mailsData.length &&
                mailsData.map(
                  (mail: ISingleMailDataSet): JSX.Element => {
                    return <ShortMail mailInfo={mail} />;
                  }
                )}
            </div>
          </div>
          <Mail />
        </div>
      </div>
    );
  }
}
