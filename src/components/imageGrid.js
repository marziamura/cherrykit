import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image'


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
       <Grid item >
        <Img fixed={image.node.childImageSharp.fixed} tag="Click to Edit"/>
       </Grid> 
      )}


   </React.Fragment>
    )

  }

  return (
   
    <React.Fragment>
         {getGridItems()}
     
    </React.Fragment>
  );
 
  
}

