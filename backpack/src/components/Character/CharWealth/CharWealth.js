import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        flex: 1,
    },
    longTextField: {
        flex: 2,
        margin: '0 2% 2% 0',
    },
    rowBlock: {
        justifyContent: 'center',
        display: 'flex',
        padding: '0 1%',
    },
});

const charWealth = (props) => {
    const { classes } = props;

    return (
        <div className={classes.rowBlock}>
            <TextField
                id="base"
                label="Base"
                defaultValue=" "
                className={classes.longTextField}
                margin="dense"
            />
            <TextField
                id="bank"
                label="Bank"
                defaultValue=" "
                className={classes.longTextField}
                margin="dense"
            />
            <TextField
                id="pp"
                label="PP"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="gp"
                label="GP"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="sp"
                label="SP"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="cp"
                label="CP"
                defaultValue=" "
                className={classes.textField}
                margin="dense"
                variant="outlined"
            />
        </div>
    );
}

export default withStyles(styles)(charWealth);