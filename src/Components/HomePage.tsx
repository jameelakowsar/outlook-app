import * as React from "react";
import { Header } from './Header'
import { LeftNavMailFolders } from './LeftNavMailFolders';
import { MailsList } from './MailsList'

export class HomePage extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
        <React.Fragment>
            <Header />
            <div className="sections">
                <LeftNavMailFolders />  
                <MailsList />
            </div>
      </React.Fragment>
    );
  }
}
