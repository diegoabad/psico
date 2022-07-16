import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'


const Ideacion = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    ideacion: '',
    observacionIdeacion: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        ideacion: paciente.ideacion,
        observacionIdeacion: paciente.observacionIdeacion 
      })
    } 
    setSemiologica({...semiologica,...values})
  },[])

  useEffect(() => {
    setSemiologica({...semiologica,...values});
  },[values])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <Contenedor 
      titulo = "Ideación" 
      name = "ideacion"
      value = { values.ideacion }
      datos = {[{ name: 'id_normales', label: 'Ideas normales'}, { name: 'id_fijas', label: 'Ideas fijas'},{ name: 'id_obsesivas', label: 'Ideas obsesivas'} ,{ name: 'id_delirantes', label: 'Ideas delirantes'}, { name: 'id_ruina', label: 'Ideas de ruina'}, { name: 'id_autoeliminación', label: 'Ideas de autoeliminación'}, {name: 'otro', label: 'Otro'}]}
      handleChange = { handleChange }
      texto = { false }
      multiline = { true }
      entrada = { { label: 'Observaciones', name: 'observacionIdeacion', value: values.observacionIdeacion, error: values.ideacion === 'otro' && values.observacionIdeacion === '' ? true : false} }
    >

    </Contenedor>
  )
}

export default Ideacion