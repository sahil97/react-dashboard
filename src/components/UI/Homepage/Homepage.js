import React, {
  Component
} from 'react';


import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Aux from '../../HOC/Aux/Aux';
import {
  Route,
  Switch
} from "react-router-dom";
import page1 from '../../pages/page1/page1';

class Homepage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false
    }
  }

  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    }, () => {
      console.log('this.state.showSidebar', this.state.showSidebar);
    });
  }


  render() {
    return (
      <Aux>
        <Topbar toggleSidebar={this.toggleSidebar}/>
         <Sidebar showSidebar={this.state.showSidebar}/ >
           <Switch>
             <Route path="/" component={page1} />
           </Switch>
      </Aux>
    )

  }
}

export default Homepage;