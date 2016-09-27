import React from 'react';
import classnames from 'classnames';
import styles from './Alert.css';

class Alert extends React.Component {
  constructor() {
    super();

    this.closeAlert = this.closeAlert.bind(this);
  }

  closeAlert() {
    this.props.onCloseAlert();
  }

  render() {
    const alertClasses = classnames(styles.alert, styles[this.props.type]);
    const title = this.props.type[0].toUpperCase() + this.props.type.slice(1);

    return (
      <div className={alertClasses}>
        <span className={styles.closebtn} onClick={this.closeAlert}>&times;</span>
        <strong>{title}!</strong> {this.props.text}
      </div>
    );
  }
}

Alert.propTypes = {
  text: React.PropTypes.string,
  type: React.PropTypes.oneOf(['danger', 'success', 'info', 'warning']),
  onCloseAlert: React.PropTypes.func
};

export default Alert;
