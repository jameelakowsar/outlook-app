import * as React from "react";

export class Mail extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div className="section-2-section-2">
        <div className="container">
          <i
            className="fa fa-arrow-circle-o-up container-icon"
            aria-hidden="true"
          />
          <div>Select an item to read</div>
          <div>Click here to always select the first item in the list</div>
        </div>
      </div>
    );
  }
}
