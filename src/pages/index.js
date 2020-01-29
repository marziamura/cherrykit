import React from "react"
import Layout from "../components/layout"
import CardsGrid from "../components/cubes"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Handles from "../components/handles"
import ImageGrid from "../components/imageGrid"

const useStyles = makeStyles(theme => ({
  text: {
    position: 'right',
    align: "center",
  },

  paper: {
    paddingBottom: 10,
    paddingTop: 10,
    margin: "5px",
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
    height: 100,
    },
  media: {
      height: 140,
  },
  grid: {
  justify:"left",
  alignItems:"flex-end",
  alignContent: "flex-start",
  display:"flex",
  }
}));

export default () => {

  const classes = useStyles();
  return (
    <Layout>
      
       <Grid  container spacing={2}  className={classes.grid} >
          <Grid  item md={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.text} variant="h5" gutterBottom alignCenter>
                  Nice Cubes
              </Typography>
            </Paper>
          </Grid>
          <CardsGrid />
        </Grid>
        <Grid container spacing={2}  className={classes.grid} >
          <Grid item md={12} >
            <Paper className={classes.paper}>
              <Typography className={classes.text} variant="h5" alignCenter>
                  Nice Handles
              </Typography>
            </Paper>
          </Grid  >
              
        
              <Handles/>
              
        </Grid>

    </Layout>
  )
}


