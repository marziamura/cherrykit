import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from "gatsby"
import { CardActions } from '@material-ui/core';
import Img from 'gatsby-image'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 30,
    paddingTop: 30,
    margin: "10px",
  },
  card: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },

  media: {
    height: 800,
    paddingTop: '56.25%', // 16:9
  },
  grid: {
    // direction:"column",
    // justify:"right",
    // alignItems:"right",
  }
}));

export default function HomePageGrid(props) {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  let data = props.data;
  function getGridItems() {
   return (
   <React.Fragment>
    {data.map((image) => 
      < Grid item md={3} className={classes.grid}>
   
           <Card className={classes.card}>
             <CardHeader title={image.node.name} />
              <CardMedia>
                <Img fixed={image.node.childImageSharp.fixed} />
              </CardMedia>
       
            <CardActions>
            <IconButton color="primary" aria-label="Edit">
             <EditIcon size="small"/>
            </IconButton>
           
            </CardActions>
            </Card>

       </Grid>
      )}


   </React.Fragment>
    )

  }

  return (
    <div className={classes.root}>
      <Grid container justify="left" spacing={spacing}>
         {getGridItems()}
      </Grid>
    </div>
  );
 
  
}

