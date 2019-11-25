import React from 'react';
import Pokeball from './bt.png'
import MyFBI from './MFB.png'
import SCB from './SCB.png'
import TBP from './TBP.png'
import FirstBlogPost from './FirstBlogPost'
import SecondBlogPost from './SecondBlogPost'
import ThirdBlogPost from './ThirdBlogPost'
import Header from "./Header"
import Nav from './nav'
import './App.css';
import {BrowserRouter as Router, Switch, Route,NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom';

function App() {
  return (

    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/firstblogpost" component={FirstBlogPost}/>
        <Route path="/secondblogpost" component={SecondBlogPost} />
        <Route path="/thirdblogpost" component={ThirdBlogPost} />
      </Switch>
      </div>
    </Router>

  )

}

const Home =() => (

  <div>
  <Header />
  <Nav />
  <h1>Home page</h1>
  <div className="firstblogpost">
    <img src={MyFBI} alt="My first blog post Img"/>
    <NavLink to ='/firstblogpost' target = "_blank"><h1>FirstBlogPost</h1></NavLink>
    <date>22/11/2019</date>
    <p>This is a blog with emoji's and Lorem's Poem.</p>
    <hr/>
  </div>
  <div className="blogP">
    <img src={SCB} alt="SecondBlogPost"/>
    <Link to='/secondblogpost' target = "_blank"><h2>MySecondReactPost</h2></Link>
    <date>23/11/2019</date>
    <p> This is a page containing funny cat memes. Please don't judge just laugh.</p>
    <hr/>
  </div>
  <div className="blogP">
    <img src={TBP} alt="A pokeball"/>
    <Link to='/thirdblogpost' target = "_blank"><h2>MyThirdReactPost</h2></Link>
    <date>23/11/2019</date>

  </div>
</div>
);

export default App
