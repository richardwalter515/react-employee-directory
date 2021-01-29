import logo from './logo.svg';
import './App.css';
import Search from "./components/Search"

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
