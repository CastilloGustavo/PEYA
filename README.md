# Introducción

El proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app) que nos ayuda con la configuracion de inicio para un rapido setup de la aplicacion.

Tambien no facilita las nuevas mediciones de performance dadas por google(https://support.google.com/webmasters/answer/9205520?hl=es).

## Start Proyecto.

Para iniciar el proyecto, Baje todas las dependencias con NPM -i o Yarn lo que le sea mas comodo.

Una vez descargardas vamos a pasar a compilar [npm run build] y luego levantar la aplicacion [npm run server].

Esto nos levantara la aplicacion en un server con los archivos estaticos en http://localhost:3001/


## Server
Se genero un server interno en la aplicacion para facilitar en trabajo con las llamadas REST ya que en el browser al relizar llamadas rest a un dominio distinto genera problemas de  Access-Control-Allow-Origin 


# Diseño
Se utilizo una arquitectura basica de proyecto usando Redux para la gestion de estado facilitando la centralizacion del estado de toda la aplicacion de un unico lugar. Siempre se pense en componentes independientes con bajo acoplamiento, para que estos puedan ser reutilizados desde cualquier otra parte de la aplicacion.
Se genero un modulo de servicios donde se centralizaran todas la llamas AJAX actualmente o en un futuro un Graphql. Para las llamadas ajax se utlizon la libreri Axios. Para resolver el tema de la autorizacion se extendio axios y se paso el valor por defecto, esto a fines de prueba porque lo que deberia ser en un futuro es tener ese codigo en un cookie que expire o trabajar con JWT para las autorizacion de Resquest.

# Test
Se relizaron test unitarios con la herramienta ya provista en la nueva version de react. (https://testing-library.com/) en el fondo es un wrapper de jest con mejoras de utilidad para test en react.
Se podrian agregar test de integracion con selenium pero al ser un proyecto tan pequeño no me parecio necesario.

