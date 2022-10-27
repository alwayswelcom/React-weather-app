import React from "react";

import "./index.css";

import { menuListInterface } from "../../interface";

class HrMenu extends React.Component<menuListInterface, { page: number }> {
  constructor(props: menuListInterface) {
    super(props);
    this.state = {
      page: 0,
    };
  }
  render() {
    return (
      <ul>
        {this.props.menuList.map((menu, index) => (
          <li
            key={index}
            className={
              this.props.currentPage === index ? "selected" : "normal"
            }
            onClick={() => this.props.onClick(index)}
          >
            {menu.value}
          </li>
        ))}
      </ul>
    );
  }
}

export default HrMenu;
