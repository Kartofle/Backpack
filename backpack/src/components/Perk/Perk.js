import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';

import PerkIcons from './PerkIcons/PerkIcons';
import PerkHeading from './PerkHeading/PerkHeading';
import PerkImage from './PerkImage/PerkImage';
import PerkDetails from './PerkDetails/PerkDetails';
import PerkTags from './PerkTags/PerkTag';

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
        <ExpansionPanel>

          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content">
            <PerkIcons 
              symbol={props.symbol}
              icon={props.icon}
              level={props.level}/>
            <PerkHeading heading={props.title}/>
            <PerkHeading heading={props.benefit}/>
            <PerkHeading heading={props.cost}/>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <PerkImage image={props.image} />
            <PerkDetails 
              heading={"Description"} 
              info={props.description}/>
            <PerkDetails 
              heading={"Lore"} 
              info={props.lore}/>
          </ExpansionPanelDetails>

          <ExpansionPanelActions>
            <PerkTags tags={props.tags}/>
            <Button size="small" color="primary">
              Add
            </Button>
          </ExpansionPanelActions>   

        </ExpansionPanel>
      </div>
    );
}

export default withStyles(styles)(perk);