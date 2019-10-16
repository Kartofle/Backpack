import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = theme => ({
    card: {
      maxWidth: 375,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });
  

const perk = (props) => {

    const { classes } = props;

    return (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                {props.icon}
              </Avatar>
            } 
            action={
              <CardActions>
                <FormControlLabel
                  control={<Checkbox icon={<AddIcon />} 
                  checkedIcon={<FavoriteIcon />} 
                  value={props.onCharacterSheet} />}
                />
              </CardActions>
            }
            title={props.title}
            subheader={props.subheader}      
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
            <CardMedia
              className={classes.media}
              image={props.image}
              title="Paella dish"
            />
            <Typography variant="body2" color="textSecondary" component="p">
              {props.lore}
            </Typography>
          
        </Card>
    );
}

export default withStyles(styles)(perk);