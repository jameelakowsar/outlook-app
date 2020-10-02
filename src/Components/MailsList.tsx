import * as React from "react";

export class MailsList extends React.Component<{}, {}> {
  public render(): JSX.Element {
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
              <div className="list-items">
                <span className="span1 span-items">Training Program</span>
                <span className="span2 span-items">Congratulations ! Credit card is being shipped to you today!</span>
                <span className="span3 span-items">Pre Approved Loan</span>
              </div>
              <div className="list-items">
                <span className="span1 span-items">Empower your future</span>
                <span className="span2 span-items">You have just won the New York official lottery. Please send us your address so that we may start the transfer.</span>
                <span className="span3 span-items">You won a lottery!</span>
              </div>
            </div>
          </div>
          <div className="section-2-section-2">
            <div className="container">
              <i className="fa fa-arrow-circle-o-up container-icon" aria-hidden="true" />
              <div>Select an item to read</div>
              <div>Click here to always select the first item in the list</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
