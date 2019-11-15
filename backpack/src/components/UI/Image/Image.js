import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    subHeading: {
      fontSize: theme.typography.pxToRem(14),
    },
    text: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    column: {
      flex: 1,
      textAlign: 'left',
    },
  });

const image = (props) => {
    const { classes } = props;

    return (
        <div className={classes.column}>
            <Typography className={classes.subHeading} children={props.title}/>
            <img src={props.image} alt={''}/>
        </div>
    );
}

export default withStyles(styles)(image);