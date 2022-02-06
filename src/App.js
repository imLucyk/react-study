import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
          {/* <Switch>
            <Route exact={true} path="/members" component={Members} />
            <Route exact={true} path="/search" component={props => <Search {...props} testProps={true} />} />
            <Route exact={true} path="/search" component={function(props) { <Search {...props} testProps={true} /> } } />
            <Redirect to={{pathname: "/members"}} />
          </Switch> */}
          <Routes>
            <Route path="/members" element={<Members />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Navigate replace to="/members" />} />
          </Routes>
        </section>
        <hr />
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
