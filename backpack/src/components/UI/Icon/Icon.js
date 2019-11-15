import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  icon: {
    margin: '0 10px 0 0',
  },
});

const icon = (props) => {
  const { classes } = props;

  return (
      <img className={classes.icon} src={props.icon} alt={''}/>
  );
}

export default withStyles(styles)(icon);