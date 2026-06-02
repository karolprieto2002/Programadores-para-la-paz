fetch('http://localhost:3000/reporte', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ mensaje: "Hola servidor" })
})
  .then(res => res.json())
  .then(data => console.log("Respuesta del servidor:", data))
  .catch(err => console.error(err));
  