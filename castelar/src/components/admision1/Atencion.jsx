import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'


const Atencion = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    atencion: '',
    observacionAtencion: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        atencion: paciente.atencion, 
        observacionAtencion: paciente.observacionAtencion
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
      titulo="Atención" 
      name = "atencion"
      value = { values.atencion }
      datos={[{ name: 'euprosexica', label: 'Euproséxica'}, { name: 'hiperprosexia', label: 'Hiperproséxia'}, { name: 'hipoprosexia', label: 'Hipoproséxia'}, { name: 'paraprosexia', label: 'Paraproséxia'}, {name: 'otro', label: 'Otro'}]}
      handleChange={handleChange}
      texto= {false}
      multiline = {true}
      entrada = {{label: 'Observaciones', name: 'observacionAtencion', value: values.observacionAtencion, error: values.atencion === 'otro' && values.observacionAtencion === '' ? true : false}}
    >
     
    </Contenedor>

  )
}

export default Atencion