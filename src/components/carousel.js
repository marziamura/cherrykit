import React, {useEffect} from 'react';

import { useStaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box';
import Img from 'gatsby-image'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Carousel() {
  
  let [animationStarted, setAnimationStarted] = React.useState(false);
  const imageList = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        relativeDirectory: { eq: "random" }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
            fixed(width: 400, height: 300) {
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
  let carouselText = ["Select a shape", "Resize it to your needs", "Order it"];

  let [visibleImage, setImage] = React.useState(data[0].node.childImageSharp.fixed);
  let [text, setText] = React.useState(carouselText[0]);

  let changeImage = (thisCounter) => {
    console.log("counter" + thisCounter);
    let image =  data[thisCounter];
    setImage(image.node.childImageSharp.fixed);
  };
  
  let changeText =  (thisCounter) => {
    console.log("counter" + thisCounter);
    let currentText =  carouselText[thisCounter];
    setText(currentText);
  };
  var start = null;

  useEffect(()=>{
    var counter = 0;
      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
    
        if (progress > 5000) {
          start = timestamp;
          console.log(progress);
          counter = (counter+1) % 3;
          console.log("newCounter " + counter);
          changeImage(counter);
          changeText(counter);
        }
        requestAnimationFrame(step);
      }
      if(!animationStarted){
        setAnimationStarted(true);
        window.requestAnimationFrame(step);
      }
    }
  )

  
    return (
        <Box display="flex" p={1} bgcolor="background.paper" justifyContent="center">
         
            <Paper elevation={4} >
                 <Img fixed={visibleImage} tag="Click to Edit"/>
                 
                 <Typography variant="h4" align='center'>
                     {text}
                </Typography>
            </Paper>

        </Box>
      );
  
}

