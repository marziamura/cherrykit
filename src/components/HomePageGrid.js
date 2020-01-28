import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '../components/HomePageCard'

import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
    
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 30,
    paddingTop: 30,
    margin: "10px",
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  card: {
      //maxWidth: 200,
      //maxHeight: 200,
     // marginBottom: theme.spacing(2),
     // marginTop: theme.spacing(2),
    },
}));

export default function HomePageGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  const colspan = 3;
  
  const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 600, quality: 80) {
              src
            }
          }
        }
      }
    }
  }
  `
  )
  console.log("pictures in dir " + data);
  let imageList = data.allFile.edges;


  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {imageList.map((image) => 

          <Grid container item xs={colspan} spacing={1}>
             <Paper className={classes.paper}>
             <Card title={"Cube"} fluid={image.node.childImageSharp.fluid} />
            </Paper>
          </Grid>
        
        )}
      </Grid>
    </div>
  );
 
  
}

