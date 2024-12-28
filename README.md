# Sistema Domótico - Medición de Temperatura y Humedad con ESP8266

Este proyecto consiste en un **sistema domótico** que utiliza un **ESP8266** conectado a un sensor **DHT11** para medir la temperatura y la humedad en tiempo real en mi casa. Los datos de estos sensores se envían a una **API RESTful** creada con **Node.js** y se almacenan en una base de datos. A futuro, el sistema se ampliará con más sensores y actuadores para mejorar el control y monitoreo de la casa.

## Descripción

Este sistema tiene como objetivo proporcionar un control remoto y monitoreo de las condiciones ambientales de tu hogar. En su estado actual, mide la **temperatura** y la **humedad** de la casa utilizando el sensor **DHT11**, pero el proyecto está diseñado para poder integrar otros sensores y actuadores como luces, detectores de movimiento, cámaras de seguridad, entre otros.

Los datos obtenidos son enviados en tiempo real a la API, donde son almacenados y pueden ser consultados o procesados. El sistema también está pensado para ser fácilmente escalable, permitiendo la adición de más dispositivos IoT.

### Características principales:
- **Medición de temperatura y humedad**: Los datos se envían a la API.
- **API RESTful** en Node.js para recibir y almacenar datos.
- **Base de datos** para guardar las mediciones (por ejemplo, MongoDB, MySQL, etc.). **PRÓXIMO**
- **Escalabilidad**: Se pueden añadir más sensores y actuadores al sistema.
- **Visualización de datos**: Una interfaz web para visualizar los datos de forma gráfica.

## Tecnologías

- **ESP8266** para la conexión Wi-Fi y comunicación con los sensores.
- **DHT11** para medir temperatura y humedad.
- **Node.js** para crear la API que recibe los datos del ESP8266.
- **Base de datos** (MongoDB, MySQL, etc.) para almacenar los datos. **PRÓXIMO**
- **Protocolo HTTP/HTTPS** para enviar datos de los sensores a la API.
- **Más Sensores y Actuadores** para aumentar el número de datos y poder programar actuadores. **PRÓXIMO**
