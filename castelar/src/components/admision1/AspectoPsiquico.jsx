import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

const AspectoPsiquico = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    aspectoPsiquico: 'ap_normal', 
    observacionPsiquico: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente){
    setValues({ 
      ...values,
      aspectoPsiquico: paciente.aspectoPsiquico, 
      observacionPsiquico: paciente.observacionPsiquico
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
      titulo = "Aspecto Psíquico" 
      name = "aspectoPsiquico"
      value = { values.aspectoPsiquico }
      datos = {[{ name: 'ap_normal', label: 'Normal'}, { name: 'indiferente', label: 'Indiferente'},{ name: 'excitado', label: 'Excitado'} ,{ name: 'obnubilado', label: 'Obnubilado'}, { name: 'deprimido', label: 'Deprimido'}, { name: 'adormecido', label: 'Adormecido'}, {name: 'otro', label: 'Otro'}]}
      handleChange = { handleChange }
      texto = { false }
      multiline = {true}
      entrada = {{label: 'Observaciones', name: 'observacionPsiquico', value: values.observacionPsiquico, error: values.aspectoPsiquico === 'otro' && values.observacionPsiquico === '' ? true : false}}
    >

    </Contenedor>
  )
}

export default AspectoPsiquico