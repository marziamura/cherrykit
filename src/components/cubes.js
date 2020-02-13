import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from "gatsby"
import ImageGrid from './imageGrid'

export default function HomePageGrid() {
 
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
    
        <ImageGrid data = {data}/>
       
   
    );
  
}

