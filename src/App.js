import { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Body1 from './components/Body1';
import Body2 from './components/Body2/Body2';
import Body3 from './components/Body3/Body3'
import Body4 from './components/Body4/Body4';
import Body5 from './components/Body5/Body5';
import Body1footer from './components/Body1footer';
import Partner from './components/Partner/Partner';
import ApplicationUsers from './components/Application/ApplicationUsers';
function App() {
  return (
    <Fragment className="App">
      <Header />
      <Body1 />
      <Body1footer />
      <Body2 />
      <ApplicationUsers />
      <Body3 />
      <Body4 />
      <Body5 />
      <Partner />
    </Fragment>
  );
}

export default App;
