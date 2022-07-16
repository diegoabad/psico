import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

const Sexualidad = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    sexualidad: '',
    observacionSexualidad: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        sexualidad: paciente.sexualidad,
        observacionSexualidad: paciente.observacionSexualidad
      })
    }
    setSemiologica({...semiologica,...values})
  },[]);

  useEffect(() => {
    setSemiologica({...semiologica,...values});
  },[values])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <Contenedor 
      titulo = "Sexualidad"
      name = "sexualidad"
      value = { values.sexualidad } 
      datos = { [{ name: 'sex_normal', label: 'Sexualidad normal'}, { name: 'abulica', label: 'Abulica'}, { name: 'anhedonia', label: 'Anhedonia'}, {name: 'otro', label: 'Otro'}] }
      handleChange = { handleChange }
      texto = { false }
      multiline = { true }
      entrada = { { label: 'Observaciones', name: 'observacionSexualidad', value: values.observacionSexualidad, error: values.sexualidad === 'otro' && values.observacionSexualidad === '' ? true : false} }
    >

    </Contenedor>
  )
}

export default Sexualidad