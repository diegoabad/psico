import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

const Sueño = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    sueño: '',
    observacionSueño: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        sueño: paciente.sueño,
        observacionSueño: paciente.observacionSueño
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
      titulo = "Sueño"
      name = "sueño"
      value = { values.sueño }
      datos = {[{ name: 'insomnio_inicio', label: 'Insomnio de inicio' }, { name: 'insomnio_mantenimiento', label: 'Insomnio de mantenimiento' }, { name: 'disomnias', label: 'Disomnias' }, {name: 'otro', label: 'Otro'}]}
      handleChange = { handleChange }
      texto = { false }
      multiline = { true }
      entrada = { { label: 'Observaciones', name: 'observacionSueño', value: values.observacionSueño, error: values.sueño === 'otro' && values.observacionSueño === '' ? true : false} }
    />
  )
}

export default Sueño