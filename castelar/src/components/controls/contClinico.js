export const cont_clinico = (estado) => {
  if (estado.maxima === '' || estado.maxima === undefined) {
    return{
      mensaje: 'Tensión maxima es requerida',
    }
  }
  if (estado.minima === '' || estado.minima === undefined) {
    return{
      mensaje: 'Tensión minima es requerida',
    }
  }
  if (estado.temp_axilar === '' || estado.temp_axilar === undefined) {
    return{
      mensaje: 'Temperatura axilar es requerida',
    }
  }
  if (estado.frec_cardiaca === '' || estado.frec_cardiaca === undefined) {
    return{
      mensaje: 'Frecuencia cardiaca es requerida',
    }
  }
  if (estado.saturacion === '' || estado.saturacion === undefined) {
    return{
      mensaje: 'Saturación es requerida',
    }
  }
  if (estado.marcha === '' || estado.marcha === undefined) {
    return{
      mensaje: 'Marcha es requerida',
    }
  }
  if (estado.normohidratado === '' || estado.normohidratado === undefined) {
    return{
      mensaje: 'Normohidratado es requerido',
    }
  }
  if (estado.normocoloreado === '' || estado.normocoloreado === undefined) {
    return{
      mensaje: 'Normocoloreado es requerido',
    }
  }
  if (estado.hematomas === '' || estado.hematomas === undefined) {
    return{
      mensaje: 'Hematomas es requerido',
    }
  }
  if (estado.escoriaciones === '' || estado.escoriaciones === undefined) {
    return{
      mensaje: 'Escoriaciones es requerido',
    }
  }
  if (estado.ulceras === '' || estado.ulceras === undefined) {
    return{
      mensaje: 'Ulceras es requerido',
    }
  }
  if (estado.lesiones === '' || estado.lesiones === undefined) {
    return{
      mensaje: 'Lesiones es requerido',
    }
  }
  if (estado.auscultacion === '' || estado.auscultacion === undefined) {
    return{
      mensaje: 'Auscultación es requerido',
    }
  }
  if (estado.soplos === '' || estado.soplos === undefined) {
    return{
      mensaje: 'Soplos es requerido',
    }
  }
  if ((estado.soplos === 'si') && (estado.soplos_descripcion === '' || estado.soplos_descripcion === undefined)) {
    return{
      mensaje: 'Soplos descripción es requerido',
    }
  }
  if (estado.edemas === '' || estado.edemas === undefined) {
    return{
      mensaje: 'Edemas es requerido',
    }
  }
  if ((estado.edemas === 'si') && (estado.edemas_perifericos === '' || estado.edemas_perifericos === undefined)) {
    return{
      mensaje: 'Edemas perifericos es requerido',
    }
  }
  if (estado.mv === '' || estado.mv === undefined) {
    return{
      mensaje: 'MV es requerido',
    }
  }
  if (estado.ruidos_agregados === '' || estado.ruidos_agregados === undefined) {
    return{
      mensaje: 'Ruidos agregados es requerido',
    }
  }
  if (estado.tos !== 'no' && (estado.tos_descripcion === '' || estado.tos_descripcion === undefined)) {
    return{
      mensaje: 'Tos descripción es requerido',
    }
  }
  if (estado.rha === '' || estado.rha === undefined) {
    return{
      mensaje: 'RHA es requerido',
    }
  }
  if (estado.abdominal === '' || estado.abdominal === undefined) {
    return{
      mensaje: 'Blando es requerido',
    }
  }
  if (estado.incontinencia_urinaria === '' || estado.incontinencia_urinaria === undefined) {
    return{
      mensaje: 'Incontinencia urinaria es requerido',
    }
  }
  if (estado.pañales === '' || estado.pañales === undefined) {
    return{
      mensaje: 'Pañales es requerido',
    }
  }
  if (estado.alimentacion_asistencia === '' || estado.alimentacion_asistencia === undefined) {
    return{
      mensaje: 'Alimentación y asistencia es requerido',
    }
  }
  if ((estado.alimentacion_asistencia === 'si') && estado.alimentacion_descripcion === '' || estado.alimentacion_descripcion === undefined) {
    return{
      mensaje: 'Alimentación descripción es requerido',
    }
  }
  if (estado.eval_semiologica === '' || estado.eval_semiologica === undefined) {
    return{
      mensaje: 'Evaluaciones semiológicas es requerido',
    }
  }
  
  return { mensaje: 'alta admitida' }
}