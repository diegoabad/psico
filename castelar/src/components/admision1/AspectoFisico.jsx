import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'


const AspectoFisico = ({setSemiologica, semiologica, paciente}) => {


  const initialStateValues = {
    aspectoFisico: '',
    observacionFisico: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente){
    setValues({ 
      ...values,
      aspectoFisico: paciente.aspectoFisico,
      observacionFisico: paciente.observacionFisico 
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
      titulo = "Aspecto Físico" 
      name = "aspectoFisico"
      value = { values.aspectoFisico }
      datos = {[{ name: 'aseado', label: 'Aseado'}, { name: 'alineado', label: 'Alineado'},{ name: 'vestimenta_adecuada', label: 'Vestimenta adecuada'} ,{ name: 'no_higienizado', label: 'No higienizado'}, { name: 'vestimenta_extravagante', label: 'Vestimenta Extravagante'}, {name: 'otro', label: 'Otro'}]}
      handleChange={handleChange}
      texto= {false}
      multiline = {true}
      entrada = {{label: 'Observaciones', name: 'observacionFisico', value: values.observacionFisico, error: values.aspectoFisico === "otro" && values.observacionFisico === "" ? true : false}}
    >

    </Contenedor>
  )
}

export default AspectoFisico