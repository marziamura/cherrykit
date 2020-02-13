import React from "react"
import Layout from "../components/layout"
import CardsGrid from "../components/cubes"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Handles from "../components/handles"
import Carousel from '../components/carousel'
import Box from '@material-ui/core/Box'


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
  },

  frameshow:{
    position: "fixed",
    right: "+400px",
    bottom: "400px", 
  },

}));

export default () => {

  const classes = useStyles();
  
  const [iframestate, setState] = React.useState(false);
  function OnClick(){
    setState(!iframestate);
  }
  return (
    <Layout>
      <div  onClick={OnClick} >
     <Box justifyContent="center">
        <Typography variant="h3" align='center'>
          Build the perfect item to fix the problem
        </Typography>
        <Typography variant="h4" align='center'>
          In three easy steps:
        </Typography>
     </Box>   
     <Carousel/>
       <Grid  container spacing={0}  className={classes.grid}  direction="row"  alignItems="center"  justify="space-evenly">
  
          <CardsGrid />
          <Handles/>
      
        </Grid>
        <iframe id="editFrame" className={classes.frameshow} style={{display: iframestate ? 'block' : 'none' }}title="CherryKit"src="https://test.couchmade.com/" width="800" height="600"></iframe>
        </div>
    </Layout>
  )
}


