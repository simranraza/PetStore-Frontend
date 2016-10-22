import React            from 'react';
import { Link }         from 'react-router';

class NavigationBar extends React.Component {

  renderHumburger() {
    return (
      <button
        className="navbar-toggle collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    );
  }

  renderLoginButton() {
    if (this.props.navModel.loginLinks) {
      const loginButton = this.props.navModel.loginLinks.map((aLinkBtn, index) => {
        return (
          <li key={index}>
            <Link to={aLinkBtn.link} >
              {aLinkBtn.label}
            </Link>
          </li>
        );
      });
      return  loginButton;
    }
    return null;
  }

  renderLeftNavButton() {
    if (this.props.navModel.leftLinks) {
      const leftNavButton = this.props.navModel.leftLinks.map((aLinkBtn, index) => {
        return (
          <li key={index}>
            <Link to={aLinkBtn.link} >
              {aLinkBtn.label}
            </Link>
          </li>
        );
      });
      return  leftNavButton;
    }
    return null;
  }

  renderRightNavButton() {
    if (this.props.navModel.rightLinks) {
      const rightNavButton = this.props.navModel.rightLinks.map((aLinkBtn, index) => {
        return (
          <li key={index}>
            <Link to={aLinkBtn.link} >
                {aLinkBtn.label}
            </Link>
          </li>
        );
      });
      return  rightNavButton;
    }
    return null;
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="containersCustom">
          <div className="navbar-header">
              {this.renderHumburger()}
              <a className="navbar-brand">
                {this.props.brand}
              </a>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {this.renderLoginButton()}
            </ul>
            <ul className="nav navbar-nav">
              {this.renderLeftNavButton()}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.renderRightNavButton()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  brand    : React.PropTypes.string,
  navModel : React.PropTypes.shape({

    loginLinks : React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label : React.PropTypes.string.isRequired,
        link  : React.PropTypes.string.isRequired
      })
    ).isRequired,

    leftLinks : React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label : React.PropTypes.string.isRequired,
        link  : React.PropTypes.string.isRequired
      })
    ).isRequired,

    rightLinks : React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label : React.PropTypes.string.isRequired,
        link  : React.PropTypes.string.isRequired
      })
    ).isRequired
  })
};

NavigationBar.defaultProps  = {
  brand  : 'brand'
};

export default NavigationBar;
