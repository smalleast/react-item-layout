import './style.scss';

import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    clickable: PropTypes.bool,
    autoHeight:PropTypes.bool,
  };

  static defaultProps = {
    clickable: true,
    autoHeight:false
  };
  /*===properties end===*/

  render() {
    const {className, children, clickable,autoHeight,...props} = this.props;
    return (
      <div {...props} data-clickable={clickable} data-auto-height={autoHeight}
           className={classNames('react-cell', className)}>{children}</div>
    );
  }
}
