import React, { Component } from "react";
import classes from "./Layout.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle.js";
import Drawer from "../../components/Navigation/Drawer/Drawer.js";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    menu: false
  };

  toggleMenuHandled = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false
    });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
        />
        <MenuToggle
          onToggle={this.toggleMenuHandled}
          isOpen={this.state.menu}
        />

        <main>{this.props.children}</main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { isAuthenticated: !!state.auth.token };
}

export default connect(mapStateToProps)(Layout);
