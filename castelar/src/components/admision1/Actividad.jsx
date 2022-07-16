import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

const Actividad = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    actividad: '',
    actividad_otro: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente){
    setValues({ 
      ...values,
      actividad: paciente.actividad,
      actividad_otro: paciente.actividad_otro 
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
      titulo = "Actividad" 
      name = "actividad"
      value = { values.actividad }
      datos = { [{name: 'abulia', label: 'Abulia'}, { name: 'hipobulia', label: 'Hipobulia'},{ name: 'eubulia', label: 'Eubulia'} ,{ name: 'hiperbulia', label: 'Hiperbulia'}, { name: 'oposicionista', label: 'Oposicionista'}, { name: 'compulsiones', label: 'Compulsiones'}, { name: 'impulsiones', label: 'Impulsiones'}, { name: 'mov_involuntarios', label: 'Movimientos involuntarios'}, {name: 'otro', label: 'Otro'}] }
      handleChange = { handleChange }
      texto= {false}
      multiline = {true}
      entrada={ { label: 'Observaciones', name: 'actividad_otro', value: values.actividad_otro, error:  values.actividad === 'otro' && values.actividad_otro === '' ? true : false} }
    >
     
    </Contenedor>

  )
}

export default Actividad