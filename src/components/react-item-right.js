import './style.scss';

import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import arrowImg from './arrow.png';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string
  };
  /*===properties end===*/

  render() {
    const {className, children, ...props} = this.props;
    return (
      <div {...props} className={classNames('react-cell-right', className)}>{children ||
      <img width="12" src={arrowImg}/>}</div>
    );
  }
}
