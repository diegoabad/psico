import React, { useEffect }from 'react'

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

const Abdominal = ({ingreso, setIngreso, paciente}) => {

  const initialStateValues = {
    rha: '',
    abdominal: '',
  } 

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if (paciente) {
      setValues ({...values,
        rha: paciente.rha,
        abdominal: paciente.abdominal,
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

      <Subtitulo titulo = 'Exámen abdominal' />

        <Opcion titulo = 'RHA' />

          <RadioButton name = 'rha' handleChange = {handleChange} datos = {[{name: 'positivos', label: 'Positivos'}, {name: 'disminuidos', label: 'Disminuidos'}]} titulo = 'RHA' value = {values.rha} />

        <Opcion titulo = 'Blando, Depresible, Indoloro, Visceromegalias' />
          <TextoMultiline error = { values.abdominal === '' ? true : false} name = 'abdominal' handleChange = {handleChange} value = {values.abdominal} label = 'abdominal'/>

      </Grid>
    </Paper>
  )
}

export default Abdominal