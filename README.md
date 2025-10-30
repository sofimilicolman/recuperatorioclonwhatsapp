
⚠ Descripción del Proyecto:
Este proyecto es la implementación de una interfaz de chat estilo WhatsApp, desarrollada completamente con React. El objetivo principal fue crear una UI/UX adaptable (Responsive), que ofrezca una experiencia visual cómoda mediante un Tema Oscuro y simule la funcionalidad básica de una app de mensajería.La aplicación utiliza almacenamiento local (LocalStorage) para simular la persistencia de la sesión y los datos del usuario sin depender de un servidor en tiempo real.

✨ Características Clave:
📌Diseño Completamente Adaptable (Responsive): La interfaz se ajusta perfectamente a Escritorio y Móvil. En vistas pequeñas, el sidebar ocupa el $100% del ancho para priorizar la selección de contactos.
📌Gestión de Rutas (React Router): Se implementó el enrutamiento para manejar las diferentes vistas (Login, Chat, Help/Ayuda) de forma fluida.
📌Manejo de Contexto (Context API): Utilización de ThemeContext para la gestión global del tema oscuro y ChatContext para el estado de la aplicación.
📌Tema Oscuro Profesional (.app-oscuro): Implementación global del tema oscuro con tonos sutiles y consistentes en el Chat, Sidebar y la Página de Ayuda.
📌Persistencia Local: Uso de LocalStorage para simular la sesión y el almacenamiento de datos.
🛠️ Tecnologías Utilizadas:
✅React JS: Para la construcción modular y dinámica de los componentes.
✅React Router	Para gestionar las rutas entre las diferentes pantallas (Login, Chat, Help).
✅CSS3: Estilizado completo, incluyendo Flexbox y Media Queries para el diseño responsivo.
✅Context API: Manejo de estados globales (ej. Tema y Chat) a través de ThemeContext.
✅jsx.LocalStorage: Para guardar los datos y mensajes de manera local en el navegador.
🚀 Instalación y Ejecución Local:
Para ejecutar esta aplicación en tu máquina local, sigue estos pasos estándar de un proyecto React:

1️⃣Clonar el Repositorio:

    git clone https://www.youtube.com/watch?v=dnxdIzF8p3k

2️⃣Instalar las Dependencias: Entra al directorio del proyecto e instala los módulos de React:

    cd [nombre-del-proyecto]
    npm install

3️⃣Iniciar la Aplicación: Ejecuta el servidor de desarrollo:

    npm run dev

4️⃣ Abre tu navegador y visita `http://localhost:5173`.    
💡 Próximos Pasos (Visión a Futuro):
⏩Integrar un sistema de autenticación real de usuarios con un backend.

⏩Permitir el envío de imágenes, audios y emojis.

⏩Sincronizar mensajes entre distintos dispositivos.

⏩Incorporar notificaciones en tiempo real