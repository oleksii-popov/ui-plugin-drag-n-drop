import React from 'react';
import PropTypes from 'prop-types';
import taiPasswordStrength from 'tai-password-strength';


class PluginPasswordStrength extends React.Component {
  static propTypes = {
    dataSource: PropTypes.string
  }

  render() {
    const password = this.props.dataSource;
    if (!password) {
      return false;
    }

    const strengthTester = new taiPasswordStrength.PasswordStrength();
    strengthTester.addCommonPasswords(taiPasswordStrength.commonPasswords);
    strengthTester.addTrigraphMap(taiPasswordStrength.trigraphs);
    const result = strengthTester.check(password);
    let output = 'Your password is too weak"';


    switch (true) {
      case result.strengthCode.indexOf('WEAK') >= 0:
        output = 'Your password is too weak';
        break;
      case result.strengthCode.indexOf('STRONG') >= 0:
        output = 'Your password is strong';
        break;
      default:
        output = 'Your password is reasonable';
        break;
    }

    return (
      <div>Result: {output}</div>
    );
  }
}

export default PluginPasswordStrength;
