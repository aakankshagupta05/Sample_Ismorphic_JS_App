import React from 'react';

export default class ClickMe extends React.Component {
  showAlert () {
      alert('How are you ?');
  }

  render() {
    return (
      <div onClick={this.showAlert}>
        Click Me !
      </div>
    );
  }
}
