import React, { useEffect } from 'react'

import { Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx'
import RadioButton from '../admision1/componente/RadioButton.jsx'
import TextoMultiline from '../admision/componentes/TextoMultiline.jsx'

import { makeStyles } from '@material-ui/core/styles'

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

const PielyMucosas = ({ingreso, setIngreso, paciente}) => {

  const initialStateValues = {
    normohidratado: '',
    normocoloreado: '',
    hematomas: '', 
    escoriaciones: '',
    ulceras: '',
    lesiones: '',
  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if (paciente) {
      setValues ({...values,
        normohidratado: paciente.normohidratado,
        normocoloreado: paciente.normocoloreado,
        hematomas: paciente.hematomas, 
        escoriaciones: paciente.escoriaciones,
        ulceras: paciente.ulceras,
        lesiones: paciente.lesiones,
      })
    }
  },[])


  useEffect(() => {
    setIngreso({...ingreso,...values})
  },[values])

  const handleChange = (event) => {
  
      setValues( {...values, [event.target.name]: event.target.value });
  }



  const classes = styles();
  return (
    <Paper className={classes.root} style = { {backgroundColor: 'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>

        <Subtitulo titulo = 'Exámen piel y mucosas' />

        <Opcion titulo = 'Normohidratado' />

          <RadioButton name = 'normohidratado' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Normohidratado' value = {values.normohidratado} />

        <Opcion titulo = 'Normocoloreado' />

          <RadioButton name = 'normocoloreado' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Normocoloreado' value = {values.normocoloreado} />

        <Opcion titulo = 'Hematomas' />

          <RadioButton name = 'hematomas' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Hematomas' value = {values.hematomas} />

        <Opcion titulo = 'Escoriaciones' />

          <RadioButton name = 'escoriaciones' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Escoriaciones' value = {values.escoriaciones} />

        <Opcion titulo = 'Úlceras' />

          <RadioButton name = 'ulceras' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} label = 'Úlceras' value = {values.ulceras} />

        <Opcion titulo = 'Lesiones' />
          <TextoMultiline error = { values.lesiones === '' ? true : false } name = 'lesiones' handleChange = {handleChange} label = 'Lesiones' value = {values.lesiones} minRows = {4} maxRows = { 4 } />


      </Grid>
    </Paper>
  )
}

export default PielyMucosas