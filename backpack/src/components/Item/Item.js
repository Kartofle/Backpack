import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Heading from '../../components/UI/Heading/Heading';

const styles = theme => ({
  card: {
    maxWidth: 345,
    fontVariant: 'all-small-caps',
  },
});

const item = (props) => {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                <Avatar children={props.icon}/>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={
                <Heading text={props.name}/>
                }
            />
            <CardContent>
                Tab actions CardHeader
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(item);