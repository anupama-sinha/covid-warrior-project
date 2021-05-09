import './App.css';
import ShareContact from './components/ShareContact';
import Navigation from './Navigation';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactUs from './components/ContactUs';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/shareContact" component={ShareContact} />
          <Route path="/contactUs" component={ContactUs} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
