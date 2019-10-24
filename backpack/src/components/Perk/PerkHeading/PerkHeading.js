import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(20), 
    },
    column: {
        flexBasis: '33%',
    },
})

const perkHeading = (props) => {
    const { classes } = props;

    const headings = [props.title, props.benefit, props.cost]

    return (
        <Fragment >
        {
            headings.map((heading, index) => (
                <div className={classes.column} key={index}>
                    <Typography 
                        className={classes.heading} 
                        children={heading}/>
                </div>))
        }  
        </Fragment>
    );
}

export default withStyles(styles)(perkHeading);
