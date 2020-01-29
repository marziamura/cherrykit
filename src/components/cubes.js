import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from "gatsby"
import ImageGrid from '../components/imageGrid'

const useStyles = makeStyles(theme => ({
    
  root: {
    padding: theme.spacing(2, 2, 0),
  },
 
}));

export default function HomePageGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  const imageList = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        relativeDirectory: { eq: "cubes" }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
            resize(width: 600, quality: 80) {
              src
            }
          }
          name
        }
      }
    }
  }
  `
  );
  
  let data = imageList.allFile.edges;

  return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={spacing}>
        <ImageGrid data = {data}/>
        </Grid>
      </div>
    );
  
}

