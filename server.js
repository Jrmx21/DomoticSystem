const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Almacenamiento en memoria de los datos actuales
let currentData = { temperature: 0, humidity: 0 , lastValue: Date.now()};

// Configuración de middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Para archivos estáticos (CSS/JS)
app.set('view engine', 'ejs'); // Motor de plantillas

// Ruta para recibir datos del ESP8266
app.post('/data', (req, res) => {
  const { temperature, humidity } = req.body;

  // Actualizar los datos actuales
  currentData.temperature = temperature;
  currentData.humidity = humidity;
  currentData.lastValue = Date.now();  // Actualizamos la hora del último POST

  console.log(`Datos actualizados: Temperatura: ${temperature} °C, Humedad: ${humidity} %`);

  res.status(200).json({ message: 'Datos recibidos correctamente' });
});

// Ruta para mostrar los datos en la vista
app.get('/', (req, res) => {
  const lastPostDate = new Date(currentData.lastValue).toLocaleString();
  res.render('index', { currentData, lastPostDate });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
