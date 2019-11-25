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
            <h6 className={classes.label}>Skills</h6>
            {skills}
        </div>
    );
}

export default withStyles(styles)(charSkills);

