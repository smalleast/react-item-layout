import './style.scss';

import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    leftBorder: PropTypes.bool,
    innerPadding:PropTypes.bool,
    borders: PropTypes.oneOf([
      'top',
      'bottom',
      'both',
      'none'
    ])
  };

  static defaultProps = {
    leftBorder: true,
    borders: 'both',
    innerPadding:true,
  };
  /*===properties end===*/


  render() {
    const {className, children, borders, leftBorder,innerPadding,...props} = this.props;
    return (
      <section {...props} data-inner-padding={innerPadding} data-borders={borders} data-left-border={leftBorder}
               className={classNames('react-items', className)}>{children}</section>
    );
  }
}
