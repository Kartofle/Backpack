import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        margin: '1%',
    },
    textField: {
        
        flex: 1,
    },
    rowBlock: {
        display: 'flex',
        flex: 1,
    },
    columnBlock: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
});

const charOverview = (props) => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <div className={classes.rowBlock}>
                <TextField
                    id="character-name"
                    label="Name"
                    defaultValue={props.name}
                    className={classes.textField}
                    margin="dense"
                /> 
                <TextField
                    id="race"
                    label="Race"
                    defaultValue={props.race}
                    className={classes.textField}
                    margin="dense"
                /> 
                <TextField
                    id="points"
                    label="Points"
                    defaultValue={props.points}
                    className={classes.textField}
                    margin="dense"
                />
            </div>
            <div className={classes.columnBlock}>
                <div className={classes.rowBlock}>
                    <TextField
                        id="sign"
                        label="Sign"
                        defaultValue={props.sign}
                        className={classes.textField}
                        margin="dense"
                    /> 
                    <TextField
                        id="size"
                        label="Size"
                        defaultValue={props.size}
                        className={classes.textField}
                        margin="dense"
                    />
                    <TextField
                        id="age"
                        label="Age"
                        defaultValue={props.age}
                        className={classes.textField}
                        margin="dense"
                    />
                </div>
                <div className={classes.rowBlock}>
                    <TextField
                        id="initiative"
                        label="Initiative"
                        defaultValue={props.initiative}
                        className={classes.textField}
                        margin="dense"
                    />
                    <TextField
                        id="move"
                        label="Move"
                        defaultValue={props.move}
                        className={classes.textField}
                        margin="dense"
                    /> 
                    <TextField
                        id="actions"
                        label="Actions"
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