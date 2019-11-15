import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import CharOverview from './CharOverview/CharOverview';
import CharStats from './CharStats/CharStats';
import CharSkills from './CharSkills/CharSkills';


const styles = theme => ({
    root: {
        width: '100%',
        display: 'inline',
    },
    head: {
        width: '100%',
        margin: '.5%',
    },
    body: {
        width: '100%',
        display: 'flex',
    },
    column: {
        flex: 1,
        margin: '.5%',
        height: 250,
    },
    stats: {
        flex: 1,
        display: 'inherit',
        margin: '.5%',
    },
});

const character = (props) => {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Paper className={classes.head}>
                <CharOverview 
                    name={props.name}
                    race={props.race}
                    age={props.age}
                    sign={props.sign}
                    points={props.points}
                    size={props.size}
                    actions={props.actions}
                    initiative={props.initiative}
                    move={props.move}
                />
            </Paper>
            <div className={classes.body}>
                <Paper className={classes.stats}>
                    <CharStats stats={props.stats}/>
                    <CharSkills skills={props.skills}/>
                </Paper>
                <Paper className={classes.column}>
                    <p>Consequences</p>
                    <p>Perks</p>
                </Paper>
                <Paper className={classes.column}>
                    
                    <p>inventory</p>
                    <p>wealth</p>
                </Paper>
            </div>
        </Paper>
    )
};

export default withStyles(styles)(character);