import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
    },
    textField: {
        margin: '1%',
        // width: 100,
    },
    longTextField: {
        margin: '2%',
        // width: 300,
    },
    nameBlock: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    actionBlock: {
        display: 'flex',
        flex: 2,
        flexDirection: 'column',
    },
    rowBlock: {
        display: 'flex',
    },
});

const charOverview = (props) => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <div className={classes.nameBlock}>
                <TextField
                    id="character-name"
                    placeholder="Name"
                    defaultValue={props.name}
                    className={classes.longTextField}
                    margin="dense"
                /> 
                <TextField
                    id="race"
                    placeholder="Race"
                    defaultValue={props.race}
                    className={classes.longTextField}
                    margin="dense"
                /> 
            </div>
            <div className={classes.actionBlock}>
                <div className={classes.rowBlock}>
                    <TextField
                        id="sign"
                        placeholder="Sign"
                        defaultValue={props.sign}
                        className={classes.textField}
                        margin="dense"
                    /> 
                    <TextField
                        id="age"
                        placeholder="Age"
                        defaultValue={props.age}
                        className={classes.textField}
                        margin="dense"
                    />
                    <TextField
                        id="points"
                        placeholder="CR"
                        defaultValue={props.points}
                        className={classes.textField}
                        margin="dense"
                    />
                </div>
                <div className={classes.rowBlock}>
                    <TextField
                        id="size"
                        placeholder="Size"
                        defaultValue={props.size}
                        className={classes.textField}
                        margin="dense"
                    />
                    <TextField
                        id="initiative"
                        placeholder="Initiative"
                        defaultValue={props.initiative}
                        className={classes.textField}
                        margin="dense"
                    />
                    <TextField
                        id="move"
                        placeholder="Move"
                        defaultValue={props.move}
                        className={classes.textField}
                        margin="dense"
                    /> 
                    <TextField
                        id="actions"
                        placeholder="Actions"
                        defaultValue={props.actions}
                        className={classes.textField}
                        margin="dense"
                    /> 
                </div>
            </div>
        </div> 
    );
}

export default withStyles(styles)(charOverview);