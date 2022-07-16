export const admision = (estado) => {
  if (estado.consulta === '' || estado.consulta === undefined) {
    return {
      mensaje: 'Consulta es requerida',
    }
  }
  if (estado.busqueda === '' || estado.busqueda === undefined) {
    return{
      mensaje: 'Objetivos es requerido',
    }
  }
  if (estado.redes_sociales === '' || estado.redes_sociales === undefined) {
    return {
      mensaje: 'Redes de contención es requerido'
    }
  }
  if(estado.tratamientos_psicologicos === '' || estado.tratamientos_psicologicos === undefined) {
    return {
      mensaje: 'debe seleccionar una opción de tratamiento psicológico'
    }
  }
  if (estado.tratamientos_psicologicos === 'si' && (estado.tratamiento_descripcion === '' || !estado.tratamiento_descripcion)) {
    return {
      mensaje: 'Tratamiento descripción es requerido',
    }
  }
  if (estado.frecuencia === '' || estado.frecuencia === undefined) {
    return {
      mensaje: 'Frecuencia es requerido',
    }
  }
  if (estado.duracion === '' || estado.duracion === undefined) {
    return {
      mensaje: 'Duración es requerido',
    }
  }
  if (estado.dispositivo === '' || estado.dispositivo === undefined) {
    return {
      mensaje: 'Dispositivo es requerido',
    }
  }
  if (estado.pruebas === '' || estado.pruebas === undefined) {
    return {
      mensaje: 'Tratamiento y Técnicas es requerido'
    }
  }
  if (estado.rotulacion === '' || estado.rotulacion === undefined) {
    return {
      mensaje: 'rotulación es requerido'
    }
  }
  return { mensaje: 'alta admitida' }
}