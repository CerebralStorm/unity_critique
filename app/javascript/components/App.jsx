import React from 'react'
import GlobalNav from './GlobalNav'

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalNav />
        {this.props.children}
      </div>
    );
  }
}

export default App;