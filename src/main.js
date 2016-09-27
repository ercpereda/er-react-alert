import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dangerAlertOpen: true,
      successAlertOpen: true,
      infoAlertOpen: true,
      warningAlertOpen: true
    };

    this.closeDanger = () => this.setState({ dangerAlertOpen: false });
    this.closeSuccess = () => this.setState({ successAlertOpen: false });
    this.closeInfo = () => this.setState({ infoAlertOpen: false });
    this.closeWarning = () => this.setState({ warningAlertOpen: false });
  }

  render() {
    return (
      <div>
        <Alert
          isOpen={this.state.dangerAlertOpen}
          type={'danger'}
          text={'Indicates a dangerous or potentially negative action.'}
          onClose={this.closeDanger}
        />
        <Alert
          isOpen={this.state.successAlertOpen}
          type={'success'}
          text={'Indicates a successful or positive action.'}
          onClose={this.closeSuccess}
        />
        <Alert
          isOpen={this.state.infoAlertOpen}
          type={'info'}
          text={'Indicates a neutral informative change or action.'}
          onClose={this.closeInfo}
        />
        <Alert
          isOpen={this.state.warningAlertOpen}
          type={'warning'}
          text={'Indicates a warning that might need attention.'}
          onClose={this.closeWarning}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
