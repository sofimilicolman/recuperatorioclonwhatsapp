import { useNavigate } from "react-router-dom";

const HelpPage = () => {

  const navigate = useNavigate();

  return (
    <div className="help-page">
      <div className="help-container">
        <h1>📘 Ayuda y Documentación</h1>

        <section>
          <h2>🔹 Funcionamiento general del chat</h2>
          <p>
            Este chat fue desarrollado como un <b>Clon de WhatsApp</b> para practicar el uso de
            <b> React y la creación de interfaces interactivas</b>. Permite visualizar una lista
            de contactos, abrir conversaciones, enviar mensajes simulados,
            y cambiar entre tema claro y oscuro.
          </p>
          <p>
            Cada usuario puede acceder mediante el <b>Login</b> y mantener sus datos guardados
            en el navegador, sin necesidad de conexión a un servidor real.
          </p>
        </section>

        <section className="help-wrapper">
          <div className="help-list">
            <h2>🧰 Tecnologías utilizadas</h2>
            <ul>
              <li><strong>✅ React JS:</strong>
                <p>Para la estructura y funcionamiento de los componentes.</p>
              </li>
              <li><strong>✅ React Router:</strong>
                <p>Para manejar las rutas entre las diferentes pantallas (Login, Chat, Help).</p>
              </li>
              <li><strong>✅ CSS:</strong>
                <p>Para los estilos y el diseño visual del proyecto.</p>
              </li>
              <li><strong>✅ LocalStorage:</strong>
                <p>para guardar los datos y mensajes de manera local en el navegador.</p>
              </li>
            </ul>
          </div>

          <div className="help-list">
            <h2>🚀 Posibles mejoras futuras</h2>
            <ul>
              <li>📌 Agregar autenticación real de usuarios.</li>
              <li>📌 Permitir el envío de imágenes, audios y emojis.</li>
              <li>📌Sincronizar mensajes entre distintos dispositivos.</li>
              <li>📌 Incorporar notificaciones en tiempo real.</li>
            </ul>
          </div>
        </section>

        <button onClick={() => navigate("/")} >
          ◀ Volver al chat
        </button>

      </div>
    </div>
  );
};

export default HelpPage;