import * as React from "react";
import { connect } from "react-redux";
import { filterData } from "../actions";

interface IFilterDropdownProps {
    filterData?:(selectedVal:string) => {}
}
interface IFilterDropdownState {
  seletedValue: string;
}

class FilterDropdown extends React.Component<
  IFilterDropdownProps,
  IFilterDropdownState
> {
  constructor(props: IFilterDropdownProps) {
    super(props);
    this.state = {
      seletedValue: "allMail",
    };
  }
  public render(): JSX.Element {
    return (
      <select
        name="filterDropdown"
        id="filterDropdown"
        onChange={this.onChange}
      >
        <option value="allMail">All Mail</option>
        <option value="unread">Unread</option>
        <option value="flagged">Flagged</option>
      </select>
    );
  }

  private onChange = (event: any) => {
    console.log(event.target.value, "target valeus");
    this.setState({ seletedValue: event.target.value });
    this.props.filterData!(event.target.value)
  };
}

const mapStateToProps = (state: any) => {
  console.log(state, "state values");
  return state
};
export default connect(mapStateToProps, {
  filterData,
})(FilterDropdown);
