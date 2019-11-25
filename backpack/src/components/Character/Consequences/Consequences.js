import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        margin: '1%',
        width: '96%',
    },
    label: {
        margin: '1% 3%',
        float: 'left',
    },
});

const consequences = (props) => {
    const { classes } = props
    const consequences = Object.values(props.consequences).map((consequence, index) => {
        return [...Array(props.consequences[consequence])].map(( _, i) => {
            return <TextField
                key={consequence.label}
                label={consequence.label}
                defaultValue={consequence.penalty}
                className={classes.textField}
                margin="dense"

        />
            });            
        }).reduce((arr, el) => {
            return arr.concat(el)
    }, []);

    return (
        <div>
            <h6 className={classes.label}>Consequences</h6>
            {consequences}
        </div>
    );
}

export default withStyles(styles)(consequences);