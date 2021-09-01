# Introducción

El proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app) que nos ayuda con la configuracion de inicio para un rapido setup de la aplicacion.

Tambien no facilita las nuevas mediciones de performance dadas por google(https://support.google.com/webmasters/answer/9205520?hl=es).

## Start Proyecto.

Para iniciar el proyecto, Baje todas las dependencias con NPM -i o Yarn lo que le sea mas comodo.

Una vez descargardas vamos a pasar a compilar [npm run build] y luego levantar la aplicacion [npm run server].

Esto nos levantara la aplicacion en un server con los archivos estaticos en http://localhost:3001/


## Server
Se genero un server interno en la aplicacion para facilitar en trabajo con las llamadas REST ya que en el browser al relizar llamadas rest a un dominio distinto genera problemas de  Access-Control-Allow-Origin 

