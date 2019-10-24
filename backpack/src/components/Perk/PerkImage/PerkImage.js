import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    column: {
        flexBasis: '33.33%',
        textAlign: 'left',
        verticalAlign: 'center',
      },
      subHeading: {
        fontSize: theme.typography.pxToRem(14),
      },
})

const perkImage = (props) => {
    const { classes } = props;

    return (
        <div className={classes.column}>
              <Typography className={classes.subHeading}>Image</Typography>
              <img src={props.image} alt={"Test.png"}/>
        </div>
    )
};

export default withStyles(styles)(perkImage);