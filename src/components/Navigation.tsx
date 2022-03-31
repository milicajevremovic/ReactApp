import * as React from "react";

import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
  initializeIcons,
} from "@fluentui/react";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 200,
    height: "70vh",
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
    paddingTop: "10vh",
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Home page",
        url: "/",
        expandAriaLabel: "Expand Home section",
        collapseAriaLabel: "Collapse Home section",
        key: "key1",
        iconProps: {
          iconName: "Home",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: "Products list",
        url: "/products",
        key: "key3",
        isExpanded: true,
        target: "_blank",
        iconProps: {
          iconName: "AppIconDefaultList",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: "Item details",
        url: "/item",
        key: "key5",
        target: "_blank",
        iconProps: {
          iconName: "Info12",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: "About&Contact",
        url: "/",
        key: "key6",
        target: "_blank",
        iconProps: {
          iconName: "ConnectContacts",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: "Checkout",
        url: "/checkout",
        key: "key7",
        target: "_blank",
        iconProps: {
          iconName: "ShoppingCartSolid",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
    ],
  },
];

export const Navigation: React.FunctionComponent = () => {
  initializeIcons();
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key1"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === "News") {
    alert("News link clicked");
  }
}
