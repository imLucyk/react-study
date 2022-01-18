import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Members from './components/contents/Members.js';
import Search from './components/contents/Search.js';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <hr />
      <div className="container">
        <Nav></Nav>
        <hr />
        <section className="contents">
          <Switch>
            <Route exact={true} path="/members" component={Members} />
            <Route exact={true} path="/search" component={props => <Search {...props} testProps={true} />} />
            {/* <Route exact={true} path="/search" component={function(props) { <Search {...props} testProps={true} /> } } /> */}
            <Redirect to={{pathname: "/members"}} />
          </Switch>
        </section>
        <hr />
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
