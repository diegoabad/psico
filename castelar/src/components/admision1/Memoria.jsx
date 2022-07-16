import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'


const Memoria = ({setSemiologica, semiologica, paciente}) => {


  const initialStateValues = {
    memoria: '',
    observacionMemoria: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        memoria: paciente.memoria,
        observacionMemoria: paciente.observacionMemoria
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
      titulo = "Memoria" 
      name = "memoria"
      value = { values.memoria }
      datos={[{ name: 'eumnesia', label: 'Eumnésia'}, { name: 'amnesia', label: 'Amnesia'}, { name: 'amnesia_lacunar', label: 'Amnesia lacunar'}, { name: 'falla_global', label: 'Falla global'}, { name: 'falla_anterograda', label: 'Falla anterógrada'}, { name: 'falla_retrograda', label: 'Falla retrógrada'}, { name: 'paramnesia', label: 'Paramnesia'}, {name: 'otro', label: 'Otro'} ]}
      handleChange = { handleChange }
      texto = { false }
      multiline = { true }
      entrada = { { label: 'Observaciones', name: 'observacionMemoria', value: values.observacionMemoria, error: values.memoria === 'otro' && values.observacionMemoria === '' ? true : false} }
    >
     
    </Contenedor>

  )
}

export default Memoria