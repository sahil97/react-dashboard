import React, {
  Component
} from 'react';


import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Aux from '../../HOC/Aux/Aux';

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
      </Aux>
    )

  }
}

export default Homepage;