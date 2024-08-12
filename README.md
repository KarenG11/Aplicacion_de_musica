Aplicación de Música
Descripción
Este proyecto es una aplicación web de música desarrollada como Trabajo Integrador Final (TIF) para la asignatura Programación 3. La aplicación permite a los usuarios explorar una amplia biblioteca de canciones, crear listas de reproducción y descubrir nueva música. También incluye funcionalidades para la autenticación de usuarios y la gestión de perfiles.

Funcionalidades
Exploración de Música: Navega por la biblioteca de canciones y artistas disponibles en la aplicación.
Reproducción de Canciones: Permite a los usuarios reproducir canciones directamente desde la aplicación.
Listas de Reproducción: Crea y gestiona listas de reproducción personalizadas.
Perfil de Artista: Muestra el perfil del artista, incluyendo biografía y discografía.
Recomendaciones: Ofrece recomendaciones personalizadas basadas en las preferencias del usuario.
Autenticación y Gestión de Sesiones: Permite a los usuarios iniciar sesión, cerrar sesión y gestionar su perfil.
Carga Dinámica de Datos: Implementa paginación infinita para cargar más música conforme el usuario navega.
Tecnologías utilizadas
Interfaz: React, Bulma
Backend: API RESTful (especificar si es personalizado o un servicio de terceros)
Autenticación: Tokens de autenticación
Gestión de Estado: Hooks de React
Instalación
Clonar el repositorio:

bash
Copiar código
git clone <https://github.com/tu-usuario/Aplicacion_de_musica>
Navega al directorio del proyecto:

bash
Copiar código
cd Aplicacion_de_musica
Instalar las dependencias:

bash
Copiar código
npm install
Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

env
Copiar código
VITE_API_BASE_URL=<URL de tu API>
Iniciar la aplicación:

bash
Copiar código
npm run dev
Abre tu navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.

Uso
Página de Inicio: Muestra una lista de canciones y álbumes disponibles.
Página de Canción: Permite reproducir una canción y ver detalles sobre la misma.
Página de Listas de Reproducción: Muestra y gestiona listas de reproducción del usuario.
Página de Artista: Muestra detalles sobre el artista y sus álbumes.
Contribuciones

¡Gracias por tu interés en nuestro proyecto!

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENCIA para más detalles.