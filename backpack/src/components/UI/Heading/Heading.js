import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(18), 
        textAlign: 'left',
        padding: '0 0 0 6px',
        flex: 1,
    },
   
})

const heading = (props) => {
    const { classes } = props;

    return (
        <Fragment>
            <Typography 
                className={classes.heading} 
                children={props.text}/>
        </Fragment>
    )
}

export default withStyles(styles)(heading);