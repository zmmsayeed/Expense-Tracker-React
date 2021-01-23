import * as React from 'react';
import MainScreen from './screens/MainScreen'

// importing ant desing css
import 'antd/dist/antd.css';

// importing bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <MainScreen />
    )
  }
  
}


export default App;
