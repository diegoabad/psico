import React from 'react'
import Subtitulo from './Subtitulo.jsx'
import CheckBox from './RadioButton.jsx'
import Entrada from './Entrada.jsx'
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import TextoMultiline from '../../admision/componentes/TextoMultiline.jsx'

const styles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FAFAFA'
    }
  }
}))

const Contenedor = (props) => {

  const {  value, name, handleChange, datos, titulo, texto, entrada, multiline} = props;

  const classes = styles();
  
  return (
    <Paper className={classes.root} style = { {backgroundColor: 'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>

        < Subtitulo titulo = { titulo } />

        < CheckBox value = { value } name = { name } datos = { datos } handleChange={ handleChange } titulo = { titulo }/>

        {texto === true && <Entrada label = { entrada.label } name ={ entrada.name } value = { entrada.value } handleChange = { handleChange } />}

        {multiline === true && <TextoMultiline label = { entrada.label } name ={ entrada.name } value = { entrada.value } handleChange = { handleChange } error = {entrada.error}/>}

      </Grid>
  </Paper>
  )
}

export default Contenedor