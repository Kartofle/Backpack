import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    icon: {
        verticalAlign: 'bottom',
        height: 32,
        width: 32,
        margin: '0 8px 0 0',
      },
})

const perkIcons = (props) => {
    const { classes } = props;

    const icons = [props.symbol, props.icon, props.level]

    return (
        <Fragment>
            {
                icons.map((img, index) => 
                    <Avatar 
                        key={index}
                        className={classes.icon} 
                        children={img} />
                )
            }
        </Fragment>
    );
}

export default withStyles(styles)(perkIcons);
