import React, {Component} from 'react';
import MainHeader from './MainHeader';

export default class BodyWrapper extends Component {
  render() {
    return (
      <body className="hold-transition skin-blue sidebar-mini">
      <div className="wrapper">
        <MainHeader />
        {this.props.children}
        <div class="control-sidebar-bg"></div>
      </div>
      </body>
    )
  }
}