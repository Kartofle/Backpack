import React from 'react';
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

const perk = (props) => {

    return (
      <ExpansionPanel square={false}>

        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content">
          <Icon icon={props.icon}/>
          <Heading text={props.title}/>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <div>
            <Image 
              title={"Image"}
              image={props.image}/>
            <Details 
              heading={"Cost"}
              info={props.cost}/>
            <Details 
              heading={"Benefit"}
              info={props.benefit}/>
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
    );
}

export default perk;