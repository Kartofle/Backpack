import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(20), 
    },
})

const perkHeading = (props) => {
    const { classes } = props;

    return (
        <div>
            <Typography 
                className={classes.heading} 
                children={props.heading}/>
        </div>
    )
}

export default withStyles(styles)(perkHeading);