export const cont_semiologica = (estado) => {

  if (estado.actitudPsiquica === '' || !estado.actitudPsiquica){
    return {
      mensaje: 'No se ha seleccionado ninguna opción de actitud psíquica'
    };
  }
  if (estado.actitudPsiquica === 'otro' && estado.observacionPsiquica === '') {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de actitud psíquica'
    };
  }
  if ((estado.actividad === '' || !estado.actividad)) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de actividad'
    };
  }
  if (estado.actividad === 'otro' && estado.actividad_otro === '') {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de actividad'
    };
  }
  if (estado.afectividad === '' || !estado.afectividad) {
    return { 
      mensaje: 'No se ha seleccionado ninguna opción de afectividad'
    };
  }
  if (estado.afectividad === 'otro' && estado.observacionAfectividad === '') {
    return {
      mensaje: 'debe cargar observación de Afectividad'
    };
  }
  if (estado.aspectoFisico === '' || !estado.aspectoFisico) {
    return{
      mensaje: 'No se ha seleccionado ninguna opción de aspecto físico'
    }
  }
  if (estado.aspectoFisico === "otro" && estado.observacionFisico === "") {
    return {
      mensaje: 'debe completar Observaciones de aspecto físico'
    }
  }
  if (estado.aspectoPsiquico === '' || !estado.aspectoPsiquico) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de aspecto psíquico'
    }
  }
  if (estado.aspectoPsiquico === "otro" && estado.observacionPsiquico === "") {
    return {
      mensaje: 'debe completar Observaciones de aspecto psíquico'
    }
  }
  if (estado.atencion === '' || !estado.atencion){
    return {
      mensaje: 'No se ha seleccionado ninguna opción de atención'
    }
  }
  if (estado.atencion === 'otro' && estado.observacionAtencion === '') {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de atención'
    }
  }
  if ((estado.conciencia === '' || !estado.conciencia)) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de conciencia'
    };
  }
  if (estado.conciencia === 'otro' && estado.conc_otros === '') {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de conciencia'
    };
  }
  if (estado.facies === '' || !estado.facies) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de facie'
    };
  }
  if (estado.facies === 'otro' && estado.observacionFacies === '') {
    return {
      mensaje: 'debe completar Observaciones de facie'
    }
  }
  if (estado.ideacion === '' || !estado.ideacion) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de ideación'
    }
  }
  if (estado.ideacion === 'otro' && estado.observacionIdeacion === '') {
    return {
      mensaje: 'debe completar Observaciones de ideación'
    }
  }
  if (estado.inteligencia === '' || !estado.inteligencia) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de inteligencia'
    }
  }
  if (estado.inteligencia === 'otro' && estado.observacionInteligencia === '') {
    return {
      mensaje: 'debe completar Observaciones de inteligencia'
    }
  }
  if (estado.juicio === '' || !estado.juicio) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de juicio'
    }
  }
  if (estado.juicio === 'otro' && estado.observacionJuicio === '') {
    return {
      mensaje: 'debe completar Observaciones de juicio'
    }
  }
  if (estado.lenguaje === '' || !estado.lenguaje) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de lenguaje'
    }
  }
  if (estado.lenguaje === 'otro' && estado.observacionLenguaje === '') {
    return {
      mensaje: 'debe completar Observaciones de lenguaje'
    }
  }
  if (estado.marcha === '' || !estado.marcha) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de marcha'
    }
  }
  if (estado.marcha === 'otro' && estado.observacionMarcha === '') {
    return {
      mensaje: 'debe completar Observaciones de marcha'
    }
  }
  if (estado.memoria === '' || !estado.memoria) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de memoria'
    }
  }
  if (estado.memoria === 'otro' && estado.observacionMemoria === '') {
    return {
      mensaje: 'debe completar Observaciones de memoria'
    }
  }
  if (estado.orexia === '' || !estado.orexia) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de orexia'
    }
  }
  if (estado.orexia === 'otro' && estado.observacionOrexia === '') {
    return {
      mensaje: 'debe completar Observaciones de orexia'
    }
  }
  if (estado.orientacion === '' || !estado.orientacion) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de orientación'
    }
  }
  if (estado.orientacion === 'otro' && estado.observacionOrientacion === '') {
    return {
      mensaje: 'debe completar Observaciones de orientación'
    }
  }
  if (estado.pensamientoCurso === '' || estado.pensamientoContenido === '' || !estado.pensamientoCurso) {
    return {
      mensaje: 'Debe seleccionar al menos una opción de pensamiento en Curso y Contenido'
    }
  }
  if (estado.pensamientoCurso === 'otro' && estado.observacionPensamiento === '') {
    return {
      mensaje: 'debe completar Observaciones de pensamiento'
    }
  }
  if ((estado.sensopercepcion === '' || !estado.sensopercepcion)) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de sensopercepción'
    }
  }
  if (estado.sensopercepcion === 'otro' && estado.senso_otras === '') {
    return {
      mensaje: 'debe completar Observaciones de sensopercepción'
    }
  }
  if (estado.sexualidad === '' || !estado.sexualidad) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de sexualidad'
    }
  }
  if (estado.sexualidad === 'otro' && estado.observacionSexualidad === '') {
    return {
      mensaje: 'debe completar Observaciones de sexualidad'
    }
  }
  if (estado.sueño === '' || !estado.sueño) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de sueño'
    }
  }
  if (estado.sueño === 'otro' && estado.observacionSueño === '') {
    return {
      mensaje: 'debe completar Observaciones de sueño'
    }
  }
  return { mensaje: 'alta admitida' };
}