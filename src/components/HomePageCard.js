import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import CardHeader from '@material-ui/core/CardHeader'
import Img from "gatsby-image"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  let act='';
  let header='';
  if(props.date){
    header= <CardHeader
    title="When:"
    subheader={props.date}
    />
  }

  if(props.buttonText){
    act= <Button size="small" color="primary">
               {props.buttonText}
          </Button>
  }
  return (
    <Card className={classes.card}>
        {header} 
        <CardMedia>
          <Img fluid={props.fluid} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
                {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      <CardActionArea>
          {act}
      </CardActionArea>
    </Card>
  );
}
