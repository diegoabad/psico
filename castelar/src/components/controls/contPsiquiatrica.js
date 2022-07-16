export const cont_psiquiatrica = (estado) => {
  if (estado.evolucion === '' || estado.evolucion === undefined) {
    return{
      mensaje: 'evolucion es requerida',
    }
  }
  return { mensaje: 'alta admitida' }
}