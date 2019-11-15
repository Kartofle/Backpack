import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    column: {
        padding: '0 2%',
        flexBasis: '100%',
        textAlign: 'left',
    },
    chip: {
        margin: '0 .25%'
    },
  });

const tags = (props) => {
    const { classes } = props;
    const tags = props.tags
    const tag = tags.map((tag, index) => 
            <Chip className={classes.chip}
                key={index} 
                label={tag} /> 
    )

    return (
        <div className={classes.column}>
            {tag}
        </div>
    );
}

export default withStyles(styles)(tags);