# 🏠 **Sistema Domótico - Medición de Temperatura y Humedad con ESP8266**  

---

## 🌟 **Descripción del Proyecto**  
Este proyecto es un sistema domótico diseñado para medir la temperatura y la humedad en tiempo real en tu hogar, utilizando un sensor **DHT11** conectado a un **ESP8266**.  

Los datos recopilados se envían a una **API RESTful** creada con **Node.js** y se almacenan en una base de datos. Este sistema está pensado para ser escalable, permitiendo la integración de más sensores y actuadores para un control y monitoreo más completo de la casa.  

---

## 🔑 **Características Principales**  

1️⃣ **Medición de temperatura y humedad:**  
- Los datos son obtenidos por el sensor **DHT11** y enviados a la API en tiempo real.  

2️⃣ **API RESTful:**  
- Creada en **Node.js**, recibe y almacena los datos provenientes del ESP8266.  

3️⃣ **Almacenamiento en base de datos:**  
- **Próximo:** Actualmente en desarrollo para implementar almacenamiento persistente en bases de datos como **MongoDB** o **MySQL**.  

4️⃣ **Escalabilidad:**  
- Diseñado para integrar sensores adicionales y actuadores como:  
  - 📹 Cámaras de seguridad.  
  - 💡 Control de luces.  
  - 🕵️‍♂️ Detectores de movimiento.  
  - 🌡️ Sensores de calidad del aire.  

5️⃣ **Visualización de datos:**  
- **Próximo:** Interfaz web para consultar y analizar gráficamente las mediciones.  

---

## 🛠️ **Tecnologías Utilizadas**  

- **Hardware:**  
  - **ESP8266**: Proporciona conectividad Wi-Fi y se comunica con el sensor.  
  - **DHT11**: Sensor utilizado para medir temperatura y humedad.  

- **Software:**  
  - **Node.js**: Desarrollo de la API RESTful.  
  - **HTTP/HTTPS**: Para la transmisión de datos desde el ESP8266 a la API.  
  - **Base de datos (Próximo):** Almacenamiento de las mediciones en **MongoDB** o **MySQL**.  

---

## 📈 **Próximos Pasos**  

1️⃣ **Almacenamiento en Base de Datos:**  
- Implementar una base de datos para guardar los datos recopilados, con soporte para consultas históricas.  

2️⃣ **Visualización de Datos:**  
- Crear una interfaz gráfica para consultar en tiempo real las mediciones de temperatura y humedad.  

3️⃣ **Ampliación del Sistema:**  
- Integrar más sensores y actuadores para convertir el sistema en una solución domótica más completa.  

4️⃣ **Automatización y Alertas:**  
- Configurar reglas de automatización, como encender ventiladores al superar una temperatura específica o enviar alertas ante condiciones críticas.  

---

## 🤝 **Contribuye al Proyecto**  

### 🌟 **¿Tienes ideas o mejoras?**  
Este proyecto está abierto a la colaboración. ¡Tu experiencia y creatividad pueden ayudar a expandirlo y mejorarlo!  

### 🎯 **Cómo colaborar:**  
1. Haz un fork del repositorio.  
2. Implementa mejoras o añade nuevas funcionalidades.  
3. Envía un pull request con tus cambios.  

### 💡 **Ideas para contribuir:**  
- Implementar visualización de datos en tiempo real.  
- Diseñar una aplicación móvil para acceder al sistema desde cualquier lugar.  
- Añadir soporte para nuevos sensores y protocolos de comunicación (MQTT, WebSocket, etc.).  

---

## 🎉 **Únete a la Innovación Domótica**  
Con este sistema, damos un paso hacia el hogar inteligente. ¡Tu contribución puede hacer que esta idea sea aún más grande y funcional! 🌐  
