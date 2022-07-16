import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid } from '@material-ui/core';

import Opcion from './Opcion.jsx'
import RadioButton from './RadioButton.jsx'
import Subtitulo from './Subtitulo.jsx'
import TextoMultiline from '../../admision/componentes/TextoMultiline.jsx'

const styles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FAFAFA'
    },
  }
}))


const ContenedorPaper = (props) => {

  const {  handleChange, datos, titulo, multiline, entrada} = props;

  const classes = styles();
  return (
    <Paper className = { classes.root } style = { {backgroundColor: 'rgb(32, 135, 252)'} }>

      <Grid container spacing = { 3 } >

        <Subtitulo titulo= { titulo } />

          {datos.map((item, index) => (
            <div key = { index } style = {{width: '95%',}}>
              <Opcion titulo = { item.titulo } />

              <RadioButton value = {item.value} name = { item.name } datos = {item.datos} handleChange = { handleChange } titulo = { item.titulo }/>
            </div>
          ))}

          {multiline && <TextoMultiline label = { entrada.label } name = { entrada.name } value = { entrada.value } handleChange = { handleChange } error = { entrada.error }/>}

      </Grid>

    </Paper>
  )
}

export default ContenedorPaper