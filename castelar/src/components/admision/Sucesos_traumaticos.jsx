import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'
import Opcion from '../admision1/componente/Opcion.jsx';
import RadioButton from '../admision1/componente/RadioButton';
import TextoMultiline from './componentes/TextoMultiline.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FEFEFA'
    },

    '& .MuiTextField-root':{
      width: '1000px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      fontSize: 'medium'
    },
    '& .MuiInputLabel-outlined': {
      fontSize: '1.5rem',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
}));


const Sucesos_traumaticos = ({estado, setEstado, paciente}) => {


  const initialStateValues= {
    experiencia_directa: 'no',
    detalle_experiencia_directa: '',
    presencia_directa: 'no',
    detalle_presencia_directa: '',
    sucesos_traumaticos: 'no',
    detalle_sucesos_traumaticos: '',
    observaciones: '',
  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if (paciente) {
    setValues({...values,
      experiencia_directa: paciente.experiencia_directa,
      detalle_experiencia_directa: paciente.detalle_experiencia_directa,
      presencia_directa: paciente.presencia_directa,
      detalle_presencia_directa: paciente.detalle_presencia_directa,
      sucesos_traumaticos: paciente.sucesos_traumaticos,
      detalle_sucesos_traumaticos: paciente.detalle_sucesos_traumaticos,
      observaciones: paciente.observaciones,
    })
  }
  },[])

  useEffect(() => {
    setEstado({...estado, ...values})
  },[])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const classes = useStyles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>
        
        <Subtitulo titulo = 'Historia de sucesos traum??ticos' />

        <Opcion titulo = 'Experiencia directa del suceso(s) traum??tico(s)' />
          <RadioButton name = 'experiencia_directa' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Experiencia directa' value = {values.experiencia_directa} />

          {values.experiencia_directa === 'si' &&
          <TextoMultiline error = { ((values.experiencia_directa === 'si') && (values.detalle_experiencia_directa === ''))? true : false } label={"Detalle de experiencia directa "} name="detalle_experiencia_directa" value={values.detalle_experiencia_directa} handleChange = { handleChange } />
          }

          <Opcion titulo = 'Presencia directa del suceso(s) ocurrido a otros' />
          <RadioButton name = 'presencia_directa' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Presencia directa' value = {values.presencia_directa} />

          {values.presencia_directa === 'si' &&
          <TextoMultiline error = { ((values.presencia_directa === 'si') && (values.detalle_presencia_directa === ''))? true : false } label={"Detalle de presencia directa "} name="detalle_presencia_directa" value={values.detalle_presencia_directa} handleChange = { handleChange } />
          }

          <Opcion titulo = 'Sucesos traum??ticos' />
          <RadioButton name = 'sucesos_traumaticos' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Sucesos traum??ticos' value = {values.sucesos_traumaticos} />

          {values.sucesos_traumaticos === 'si' &&
          <TextoMultiline error = { ((values.sucesos_traumaticos === 'si') && (values.detalle_sucesos_traumaticos === ''))? true : false } label={"Detalle de sucesos traum??ticos "} name="detalle_sucesos_traumaticos" value={values.detalle_sucesos_traumaticos} handleChange = { handleChange } />
          }

          <Opcion titulo = 'Observaciones' />
          <TextoMultiline error = { false } label={"Observaciones "} name="observaciones" value={values.observaciones} handleChange = { handleChange } />
      
        </Grid>
    </Paper>
  )
}

export default Sucesos_traumaticos
