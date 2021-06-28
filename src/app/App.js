import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/sign-up'>
          <SignUp/>
        </Route>
        <Route path='/articles'>
          <Articles/>
        </Route>
        <Route path='/categories'> 
          <Categories/>
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>
        {/* Add Routes here! */}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
