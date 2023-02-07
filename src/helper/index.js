export const dinero = dineros => {
     return dineros.toLocaleString('es-ES', {
          style: 'currency',
          currency: 'EUR'
     })
}

export const fechas =  fecha => {
const fechaData = new Date(fecha);
const fechasData = {
month:'long',
year:'numeric', 
day:'2-digit'
}
return fechaData.toLocaleDateString('es-ES', fechasData)
}