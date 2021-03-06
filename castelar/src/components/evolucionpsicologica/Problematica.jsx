import React, { useEffect} from 'react'

import EvolucionComponente from '../evolucionpsiquiatrica/componentes/EvolucionComponente'

const Problematica = ({psicologica, setPsicologica, paciente}) => {

  const initialStateValues = {
    problematica: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({...values, problematica: paciente.problematica})
    }
  },[])

  useEffect(() => {
    setPsicologica({ ...psicologica, ...values})
  },[values])

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({...values, [name]: value})
  }


  return (
    <EvolucionComponente titulo = 'Problemática de la sesión' handleChange = { handleChange } value = { values.problematica } name = 'problematica' label = 'Problemática de la sesión' error = {values.problematica === "" ? true : false}/>
  )
}

export default Problematica