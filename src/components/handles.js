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
    maxWidth: 345,
    maxHeight: 400,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },

  media: {
    height: 800,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function HomePageGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  const imageList = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        relativeDirectory: { eq: "handles" }
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
          name
        }
      }
    }
  }
  `
  );

  function getGridItems(props) {
  let data = imageList.allFile.edges;
 
   return (
   <React.Fragment>
    {data.map((image) => 
      < Grid item xs={3} >
         <Paper>
           <Card className={classes.card}>
             <CardHeader title={image.node.name} />
              <CardMedia>
                <Img fluid={image.node.childImageSharp.fluid} />
              </CardMedia>
       
            <CardActions>
            <EditIcon size="small">Edit</EditIcon>
            </CardActions>
            </Card>
        </Paper>
       </Grid>
      )}


   </React.Fragment>
    )

  }
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={spacing}>
         {getGridItems()}
      </Grid>
    </div>
  );
 
  
}

