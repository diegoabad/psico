import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

import { useDispatch } from 'react-redux'

const Orexia = ({setSemiologica, semiologica, paciente}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    orexia: '',
    observacionOrexia: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        orexia: paciente.orexia,
        observacionOrexia: paciente.observacionOrexia 
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
      titulo = "Orexia"
      name = "orexia"
      value = { values.orexia }
      datos = { [{ name: 'orexia_normal', label: 'Orexia normal' }, { name: 'hiporexia', label: 'Hiporexia' }, { name: 'hiperorexia', label: 'Hiperorexia' }, { name: 'anorexia', label: 'Anorexia' }, {name: 'otro', label: 'Otro'}] }
      handleChange = { handleChange }
      texto = { false }
      multiline = { true }
      entrada = { { label: 'Observaciones', name: 'observacionOrexia', value: values.observacionOrexia, error: values.orexia === 'otro' && values.observacionOrexia === '' ? true : false} }
    />
  )
}

export default Orexia