import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';

import Heading from '../../components/UI/Heading/Heading';
import Icon from '../../components/UI/Icon/Icon';
import Image from '../../components/UI/Image/Image';
import Details from '../../components/UI/Details/Details';
import Tags from '../../components/UI/Tags/Tag';

const styles = theme => ({
  root: {
    width: '100%',
    fontVariant: 'all-small-caps',
  },  
});

const perk = (props) => {
    const { classes } = props;

    return (
      <div className={classes.root}>
        <ExpansionPanel square={false}>

          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content">
            <Icon icon={props.icon}/>
            <Heading text={props.title}/>
            <Heading text={props.benefit}/>
            <Heading text={props.cost}/>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <div>
              <Image 
                title={"Image"}
                image={props.image}/>
              <Details 
                heading={"Description"} 
                info={props.description}/>
              <Details 
                heading={"Lore"} 
                info={props.lore}/>
            </div>
          </ExpansionPanelDetails>

          <ExpansionPanelActions>
            <Tags tags={props.tags}/>
            <Button size="small" color="primary">
              Add
            </Button>
          </ExpansionPanelActions>   

        </ExpansionPanel>
      </div>
    );
}

export default withStyles(styles)(perk);