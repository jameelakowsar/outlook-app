import * as React from "react";

interface ISearchBarProps {
    onSearch: any
}
interface ISearchBarState {
  searchValue: string;
}
export class SearchBar extends React.Component<
  ISearchBarProps,
  ISearchBarState
> {

  private timer:any
    
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }
  render(): JSX.Element {
    return (
      <form className="example">
        <input // add a search Icon
          type="text"
          placeholder="Search mail and people"
          name="search"
          onChange={this.onChange}
          value={this.state.searchValue}
        />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    );
  }

  private onChange = (event: any) => {
    let searchValue = event.target.value;
    this.setState({ searchValue });
    searchValue = searchValue.trim();
    if (searchValue.length === 1) {
      return;
    }
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.props.onSearch(searchValue.trim());
    }, 1000);
  };
}
