import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import CharOverview from './CharOverview/CharOverview';
import CharStats from './CharStats/CharStats';
import CharSkills from './CharSkills/CharSkills';
import Consequences from './Consequences/Consequences';
import Perks from '../../containers/Perks/Perks';
import CharWealth from './CharWealth/CharWealth';


const styles = theme => ({
    root: {
        width: '100%',
        display: 'inline',
    },
    head: {
        width: '480px',
        margin: '.5%',
    },
    body: {
        width: '480px',
        margin: '.5%',
    },
    column: {
        flex: 1,
        margin: '.5%',
        height: 250,
    },
    statBlock: {
        flex: 1,
        display: 'flex',
        margin: '.5%',
        paddingTop: '6px',
        
    },
    block: {
        flex: 1,
        margin: '.5%',
        paddingTop: '6px',
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
                <Paper className={classes.statBlock}>
                    <CharStats stats={props.stats}/>
                    <CharSkills skills={props.skills}/>
                </Paper>
                <Paper className={classes.block}>
                    <Consequences consequences={props.consequences}/>
                </Paper>
                <Paper>
                    <Perks />
                </Paper>
                <Paper className={classes.column}>
                    <p>inventory</p>
                </Paper>
                <Paper>
                    <CharWealth />
                </Paper>
            </div>
        </Paper>
    )
};

export default withStyles(styles)(character);