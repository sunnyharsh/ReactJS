import React, {Component} from  'react';
import {Header} from './component/header';
import {Route,Switch} from 'react-router-dom';
import {AboutUs} from './component/aboutus';
import {ContactUs} from './component/contactus';
import {Home} from './component/home';
import {Gallery} from './component/gallery';
class App extends Component{
  render(){
    return(
      <div>
      <Header/>
      <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/aboutus" exact component={AboutUs}/>
      <Route path="/contactus/:name" exact component={ContactUs}/>
      <Route path="/gallery" exact component={Gallery}/>
      </Switch>
      </div>
    )
  }
}
export default App;