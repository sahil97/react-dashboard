import React from 'react';
import Container from '@material-ui/core/Container';
import './Topbar.css';

const topbar = (props) => {
  return (<Container className="topbarContainer">
    <Container className="topbarWrapper">
      <Container className="topbarLeft">
        <button className="topbarBurgerButton" type="button">
          <img src="img/burger.svg" alt="burger-collapsible-navbar-icon"/></button>
      </Container>
      <Container className="topbarRight">
        <h4>Sample Heading</h4>
      </Container>
    </Container>
  </Container>)
}

export default topbar;
