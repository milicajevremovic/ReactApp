import * as React from "react";
import { SearchBox, ISearchBoxStyles } from "@fluentui/react/lib/SearchBox";

const searchBoxStyles: Partial<ISearchBoxStyles> = {
  root: {
    width: 200,
    display: "flex",
    margin: "5vh 0",
    justifyContent: "center",
  },
};

/* eslint-disable react/jsx-no-bind */
const SearchBar = () => (
  <SearchBox
    styles={searchBoxStyles}
    placeholder="Search"
    onEscape={(ev) => {
      console.log("Custom onEscape Called");
    }}
    onClear={(ev) => {
      console.log("Custom onClear Called");
    }}
    onChange={(_, newValue) =>
      console.log("SearchBox onChange fired: " + newValue)
    }
    onSearch={(newValue) =>
      console.log("SearchBox onSearch fired: " + newValue)
    }
  />
);

export default SearchBar;