import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'


const Lenguaje = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    lenguaje: '',
    observacionLenguaje: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() => {
    if (paciente) {
      setValues({ 
        ...values,
        lenguaje: paciente.lenguaje,
        observacionLenguaje: paciente.observacionLenguaje
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
      titulo = "Lenguaje" 
      name = "lenguaje"
      value = { values.lenguaje }
      datos = {[{ name: 'leng_normal', label: 'Normal'}, { name: 'afasia', label: 'Afasia'},{ name: 'alogia', label: 'Alógia'} ,{ name: 'agramatismo', label: 'Agramatismo'}, { name: 'anatria', label: 'Anatría'}, { name: 'aprosodia', label: 'Aprosodía'}, { name: 'asonancia', label: 'Asonancia'}, { name: 'mudez', label: 'Mudez'}, {name: 'otro', label: 'Otro'}]}
      handleChange = { handleChange }
      texto = { false }
      multiline = { true }
      entrada = { { label: 'Observaciones', name: 'observacionLenguaje', value: values.observacionLenguaje, error: values.lenguaje === 'otro' && values.observacionLenguaje === '' ? true : false} }
    >

    </Contenedor>
  )
}

export default Lenguaje