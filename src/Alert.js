import React from 'react';
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
    return (
      <div className={styles.alert}>
        <span className={styles.closebtn} onClick={this.closeAlert}>&times;</span>
        <strong>Danger!</strong> {this.props.text}
      </div>
    );
  }
}

Alert.propTypes = {
  text: React.PropTypes.string,
  onCloseAlert: React.PropTypes.func
};

export default Alert;
