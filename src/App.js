import About from './About';
import './App.css';
import ShareContact from './ShareContact';
import Navigation from './Navigation';
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactUs from './ContactUs';

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
