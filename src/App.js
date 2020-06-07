import React from 'react';
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import NavBar from '../src/components/layout/NavBar';
import TimeLine from './components/dashboard/TimeLine';
import CreatePost from './components/posts/CreatePost';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import PostDetails from '../src/components/posts/PostDetails' 


function App() {
  return (
    <BrowserRouter basename="/react-demo">
    <div className="App">
     <NavBar/>
     <Switch>
          <Route exact path="/" component={TimeLine} />
          <Route exact path="/create_post" component={CreatePost} />
          <Route exact path="/sign_in" component={SignInForm} />
          <Route exact path="/sign_up" component={SignUpForm} />
          <Route path='/post/:id' component={PostDetails} />
          
        </Switch>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
