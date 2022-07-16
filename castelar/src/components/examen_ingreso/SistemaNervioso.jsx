import React, { useEffect }from 'react'

import { Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import TextoMultiline from '../admision/componentes/TextoMultiline.jsx'

import { makeStyles } from '@material-ui/core/styles';

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

const SistemaNervioso = ({ingreso, setIngreso, paciente}) => {

  const initialStateValues = {
    eval_semiologica: ''
  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if (paciente) {
      setValues ({...values,
        eval_semiologica: paciente.eval_semiologica,
      })
    }
  },[])

  useEffect(() => {
    setIngreso({...ingreso,...values})
  },[values])

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }


  const classes = styles(); 
  return (
  <Paper className={classes.root} style = { {backgroundColor: 'rgb(32, 135, 252)'} }>
    <Grid container spacing={3}> 

      < Subtitulo titulo = 'Neurologia: Evaluación Semiológica”' />
    
      <Opcion titulo = 'Evaluación Semiológica' />
        <TextoMultiline error = {values.eval_semiologica === '' ? true : false} name = 'eval_semiologica' value = {values.eval_semiologica} handleChange = {handleChange} minRows = {4} maxRows = { 4 } label = 'Evaluación Semiológica'/>
    </Grid>
  </Paper>
  )
}

export default SistemaNervioso