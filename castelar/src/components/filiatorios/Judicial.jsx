import React, {useEffect} from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Paper } from '@material-ui/core';

import Subtitulo from '../admision1/componente/Subtitulo.jsx'

import { useDispatch, useSelector } from 'react-redux';
import { getFormulario } from '../../redux/actions/index'

const useStyles = makeStyles((theme) => ({
  root: {

    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FAFAFA'
    },

    '& .MuiTextField-root':{
      width: '300px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    '& .MuiInputBase-input': {
      fontSize: '1.5rem',
    },
    '& .MuiFilledInput-root': {
      backgroundColor: 'rgba(32, 135, 252, 0.1)',
    },
    '& .MuiFormLabel-root': {
      fontSize: 'medium',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    '& .MuiTypography-body1': {
      fontSize: '1.5rem',
    },
    '& .MuiInputLabel-outlined': {
      fontSize: '1.5rem',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
}));

const Judicial = (props) => {

	const dispatch = useDispatch();
	const paciente = useSelector((state) => state.pacienteActual.filiatorios);
	const editarFiliatorio = useSelector((state) => state.editarFiliatorio);

const initialStateValues= {
  judicial: 'NO',
  juzgado_nro: '',
  juez: '',
  calle_juz: '',
  numero_juz: '',
  localidad_juz: '',
  cod_post_juz: '',
  provincia_juz: '',
  tel_juz: '',
  email_juz: '',
}


const [values, setValues] = React.useState(initialStateValues);


useEffect(() => {
  if (editarFiliatorio) {
    setValues({
      judicial: paciente.judicial,
      juzgado_nro: paciente.juzgado_nro,
      juez: paciente.juez,
      calle_juz: paciente.calle_juz,
      numero_juz: paciente.numero_juz,
      localidad_juz: paciente.localidad_juz,
      cod_post_juz: paciente.cod_post_juz,
      provincia_juz: paciente.provincia_juz,
      tel_juz: paciente.tel_juz,
      email_juz: paciente.email_juz,
    });
  }
}, []);

useEffect(async () => {dispatch(getFormulario(values ))} , [])

const handleChange = (event) => {

  const { name, value } = event.target;
 
    setValues({ ...values, [name]: value });
}


const classes = useStyles();

return (
  <Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
    <Grid container spacing={3}>
  
      <Subtitulo titulo = 'Orden judicial' />
        <Grid item xs = {12} style = {{margin: "10px"}}>
              <FormControl variant="filled" label="Orden Judicial">
                <FormLabel>Orden Judicial</FormLabel>
                  <RadioGroup
                    name="judicial"
                    value={values.judicial}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="SI" control={<Radio />} label="SI" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" /> 
                  </RadioGroup>
              </FormControl>
        </Grid>
        {(values.judicial === 'SI') &&
        <>
        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled"  label={"Curadur??a/defensor??a/juzgado"} required = { true } name="juzgado_nro" value={values.juzgado_nro} type="number" onChange={handleChange} error = {values.juzgado_nro === "" ? true : false}/>
        </Grid>
        <Grid item xs = {12} sm = {8} md = {2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled" error = {values.juez === "" ? true : false } required = { true } label={values.juez === "" ? "curador/defensor/juez" : "curador/defensor/juez" } name="juez" value={values.juez} onChange={handleChange}/>
        </Grid>
        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled" error = {values.calle_juz === "" ? true : false } required = { true } label={values.calle_juz === "" ? "calle" : "calle" } name="calle_juz" value={values.calle_juz} onChange={handleChange}/>
        </Grid>
        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth variant="filled"  label={"n??mero"} name="numero_juz" value={values.numero_juz} type="number" onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
            <TextField className={classes.textField} fullWidth required = {true} variant="filled" error = {values.localidad_juz === "" ? true : false } label={values.localidad_juz === "" ? "localidad" : "localidad" } name="localidad_juz" value={values.localidad_juz} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
          
          <TextField className={classes.textField} fullWidth required = {true} error = {values.cod_post_juz === "" ? true : false } variant="filled" label= {values.cod_post_juz === "" ? "C.P" :"C.P." } name="cod_post_juz" value={values.cod_post_juz} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
          <TextField className={classes.textField} fullWidth error = { values.provincia_juz === "" ? true : false } variant="filled" label= { values.provincia_juz === "" ? "provincia" : "provincia"} name="provincia_juz" value={values.provincia_juz} required = {true} onChange={handleChange}/>
          </Grid>
          <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
          <TextField className={classes.textField} fullWidth variant="filled" label="telefono" name="tel_juz" value={values.tel_juz} onChange={handleChange}/>
        </Grid>

        <Grid item xs = {12} sm = {8} md={2} style = {{margin: "10px"}}>
          <TextField className={classes.textField} fullWidth variant="filled" label="email" name="email_juz" value={values.email_juz} onChange={handleChange}/>
        </Grid>
        </>
        }
      </Grid>

    </Paper>
  )
}

export default Judicial