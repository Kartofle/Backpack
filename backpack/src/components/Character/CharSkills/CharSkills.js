import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        margin: '2%',
    },
});

const charSkills = (props) => {
    const { classes } = props;

    const skills = Object.values(props.skills).map((skill, index) => {
        return [...Array(props.skills[skill])].map(( _, i) => {
            return <TextField
                key={skill.label}
                label={skill.label}
                defaultValue={skill.value}
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
            {skills}
        </div>
    );
}

export default withStyles(styles)(charSkills);

