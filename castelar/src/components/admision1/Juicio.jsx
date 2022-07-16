import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor'

const Juicio = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    juicio: '',
    observacionJuicio: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        juicio: paciente.juicio,
        observacionJuicio: paciente.observacionJuicio
      })
    } 
    setSemiologica({...semiologica,...values})
  },[]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    setSemiologica({...semiologica,...values});
  },[values])

  return (
    <Contenedor 
      titulo = "Juicio"
      name = "juicio"
      value = { values.juicio }
      datos = { [{ name: 'conservado', label: 'Conservado'}, { name: 'juicio_insuficiente', label: 'Juicio insuficiente'}, { name: 'juicio_debilitado', label: 'Juicio debilitado'}, { name: 'juicio_suspendido', label: 'Juicio suspendido'}, {name: 'juicio_desviado', label: 'Juicio desviado'}, {name: 'otro', label: 'Otro'}] }
      handleChange = { handleChange }
      texto = { false }
      multiline = { true }
      entrada = { { label: 'Observaciones', name: 'observacionJuicio', value: values.observacionJuicio, error: values.juicio === 'otro' && values.observacionJuicio === '' ? true : false} }
    />
  )
}

export default Juicio