import React from 'react'

import Subtitulo from '../../admision1/componente/Subtitulo.jsx'
import TextoMultiline from '../../admision/componentes/TextoMultiline';

import { Paper, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {

    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FAFAFA'
    }
  }
}));

const EvolucionComponente = (props) => {

const {titulo, value, name, label, handleChange, minRows, maxRows, error} = props;

  const classes = useStyles();
  return (
  <Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
    <Grid container spacing={3}>
      
      <Subtitulo titulo = {titulo} />

      <TextoMultiline error = { error ? true : false } label={label} name={name} value={value} handleChange = { handleChange } minRows = {minRows ? minRows : 4} maxRows = {maxRows ? maxRows : 4}/>

    </Grid>
  </Paper>
  )
}

export default EvolucionComponente