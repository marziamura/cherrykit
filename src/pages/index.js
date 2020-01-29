import React from "react"
import Layout from "../components/layout"
import CardsGrid from "../components/HomePageGrid"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStaticQuery, graphql } from "gatsby"
import Handles from "../components/handles"

const useStyles = makeStyles(theme => ({
  text: {
    position: 'right',
    align: "center",
  },

  paper: {
    paddingBottom: 30,
    paddingTop: 30,
    margin: "10px",
    textAlign: "center",
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },

  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  card: {
      maxWidth: 345,
    },
  media: {
      height: 140,
  },
}));

export default () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: { eq: "/cubes/cube3.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  console.log(data);
  const classes = useStyles();
  return (
    <Layout>
       <Grid container className={classes.root} spacing={2}  alignItems="stretch">
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.text} variant="h4" gutterBottom alignCenter>
                  Nice Cubes
              </Typography>
            </Paper>
        
          </Grid>
        <CardsGrid type={"cubes"}/>
      </Grid>
      <Grid container className={classes.root} spacing={2}  alignItems="stretch">
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.text} variant="h4" gutterBottom alignCenter>
                  Nice Handles
              </Typography>
            </Paper>
            
          </Grid>
        <Handles/>
      </Grid>
    </Layout>
  )
}


