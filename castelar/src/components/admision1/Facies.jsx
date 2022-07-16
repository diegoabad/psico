import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'


const Facies = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    facies: '', 
    observacionFacies: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        facies: paciente.facies,
        observacionFacies: paciente.observacionFacies 
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
    titulo = "Facies" 
    name = "facies"
    value = { values.facies }
    datos={[{ name: 'compuesta', label: 'Compuesta'}, { name: 'descompuesta', label: 'Descompuesta'}, {name: 'otro', label: 'Otro'}]}
    handleChange = { handleChange }
    texto= { false }
    multiline = { true }
    entrada = { { label: 'Observaciones', name: 'obsevacionFacies', value: values.observacionFacies, error: values.facies === 'otro' && values.observacionFacies === '' ? true : false} }
  >

  </Contenedor>
  )
}

export default Facies