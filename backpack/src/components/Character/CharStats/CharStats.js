import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        margin: '2%',
    },
    label: {
        margin: '2% 3%',
        float: 'left',
    },
});

const charStats = (props) => {
    const { classes } = props;

    const stats = Object.values(props.stats).map((stat, index) => {
        return [...Array(props.stats[stat])].map(( _, i) => {
            return <TextField
                key={stat.label}
                label={stat.label}
                defaultValue={stat.value}
                className={classes.textField}
                margin="dense"
                variant="outlined"
        />
            });            
        }).reduce((arr, el) => {
            return arr.concat(el)
    }, []);

    return (
        <div>
            <h6 className={classes.label}>Stats</h6>
            {stats}
        </div>
    );
}

export default withStyles(styles)(charStats);

