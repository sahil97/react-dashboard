import React from 'react';
import './sidebar.css';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';


const Sidebar = (props) => {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  }

  let visible = props.showSidebar ? "have-width" : "no-width";

  return (
    <List

      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader
      component = "div"
      id = "nested-list-subheader" > Sub Heading For List
    </ListSubheader>
  }  className={"sidebarRoot " + visible}>
      <ListItem button>
        <ListItemIcon>
          <SendIcon/>
        </ListItemIcon>
        <ListItemText primary="Heading 1"/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SendIcon/>
        </ListItemIcon>
        <ListItemText primary="Heading 2"/>
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary="Heading 3"/> {
          open
            ? <ExpandLess/>
            : <ExpandMore/>
        }
      </ListItem>
      <Collapse in={open} timeout="auto" >
        <List component="div">
          <ListItem button className="sidebarNestedItem">
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="SubHeading 4"/>
          </ListItem>
        </List>
      </Collapse>
    </List>)
}

export default Sidebar;