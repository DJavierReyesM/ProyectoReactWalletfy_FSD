# ProyectoReactWalletfy_FSD
Aplicación "Walletfy"

Autores: 
-> Bismark Andres Castro Zambrano
-> Diego Javier Reyes Medranda

## Enlace a Repositorio Publico:

[https://github.com/DJavierReyesM/ProyectoReactWalletfy_FSD](https://github.com/DJavierReyesM/ProyectoReactWalletfy_FSD)

## 1.- Descripción de aplicación:
El Presente proyecto se denomina "Walletfy", un aplicación que simula una billetera o wallet en donde el usuario puede registrar un dínero inicial así como también registrar sus eventos de ingresos o egresos, agrupados por mes y año; lo cual permitirá visualizar todo el flujo de eventos a lo largo del tiempo.

## Aplicación:
En la vista de inicio vemos el logo de la aplicación dentro del header, y en el otro extremo de este tenemos el botón que nos permitirá alternar entre el modo oscuro y modo claro.
![W1](/public/ReadmeImages/InicioLight.PNG)
![W2](/public/ReadmeImages/InicioDark.PNG)

Asimismo se puede visualizar un campo de "Dinero inicial que nos permitirá agregar el monto inicial en nuestra billetera. Por otro lado se logra ver a los eventos agrupados por año y mes, destacando con colores si el evento fue de ingreso o egreso, con el detalle del monto mensual y global (calculado a partir del dinero inicial)

![W3](/public/ReadmeImages/Events.PNG)

Por otro lado hay un botón para "crear un evento" que nos lleva a un formulario donde podremos ingresar nueva información de los eventos que podremos crear. A la vez que hay un botón para volver a la vista de inicio.

![WCreate](/public/ReadmeImages/Crear.PNG)

Si nuestro formulario tiene información que faltante, este remarcará con mensajes de error que falta información para crear/editar el evento.

![WError](/public/ReadmeImages/FormError.PNG)

Si se asoma el ratón/mouse por encima de un evento, este se resaltará mostrando un "tooltip" con la descripción del evento, una imagen (si el evento la tuviese), y una indicación que comenta que si se le da clic se detallará más la información del evento

![W4](/public/ReadmeImages/Tooltip.PNG)

Al dar clic se abrirá una ventana modal con el detalle del evento con 2 botónes uno para cerrar y otro para editar el evento.

![W5](/public/ReadmeImages/Modal.PNG)

Si se da clic en editar, la vista del formulario cambiará a modo de edición para poder cambiar los detalles que
creamos convenientes de nuestro evento

![W6](/public/ReadmeImages/Editar2.PNG)

### Estructura de Código:
En la siguiente imagen se encuentra
![Carpetas](/public/ReadmeImages/Carpetas.PNG)

La carpeta `api` contiene una serie de modulos que manejan toda la lógica de acceso a los eventos guardados en la base de datos (que en este caso es el localStorage). En esta se implementa DataSource repository como un patrón para poder modularizar y abstraer la complejidad al interactuar con la base de datos.

`components` contiene los diversos componentes que utilizarán nuestras vistas en la aplicación, principalmente los eventos, y aquellos componentes del formulario

`constanst` contiene constantes usadas por el código, mientras que `hooks` implementaciones de Hooks de ReactJS para facilitar su uso dentro de los componentes.

`pages` contiene las diversas páginas de nuestra aplicación a ser renderizadas

`store` contiene los archivos esenciales para gestionar las sesiones de Redux mediantes slices de código, en donde se manejan principalmente los slices para: El tema oscuro y el monto inicial del wallet.

`types` contiene los tipos de datos usados por los componentes para asegurar un buen tipado de datos.

`main.tsx` contiene la lógica principal de la aplciación, donde se crea el elemento root con los providers de las librerías, así como el Router para manejar las rutas de nuestra aplicación

La aplicación fue desarrollada en Typescript con Vite, usando librerías como TailwindCSS, MomentJS, Redux, React Hook Forms, etc.
Por lo que se recomienda analizar las versiones más recientes (y estables de las liberías para poder)
## 2.- Ejecución:

Pasos a seguir para ejecutar el código de manera local
1. Clonar el repositorio remoto usando el comando git clone:
```bash
git clone https://github.com/DJavierReyesM/ProyectoReactWalletfy_FSD.git
```
2. Una vez clonado, cambiar al directorio que se ha clonado en el repositorio: `ProyectoReactWalletfy_FSD`
```bash
cd ProyectoReactWalletfy_FSD
```
3. Ejecutar `npm i` o `npm install` para instalar todas las dependencias necesarias:
```bash
npm install
```
4. Ejecutar el comando `npm run dev` para levantar el servidor local.
```bash
npm run dev
```
5. Una vez levantado, acceder a la URL que aparece en la consola: 
Ejemplo: `http://localhost:5173/`

## 3.- Despliegue
Para el despliegue se utilizará :[Cloudflare](https://www.cloudflare.com/es-es/):

1. Registrarse al sitio web de Cloudflare:
![Registro](/public/ReadmeImages/Cloud1.PNG)

2. Una vez registrados, iniciamos sesión y nos vamos a la sección 'Workers and Pages', en donde tendremos
que importar un repositorio de Github, para poder comenzar el despliegue. (Tendremos que iniciar sesión de ser necesario y dar permisos a Cloudflare para que pueda configurar nuestros repositorios)

![Github](/public/ReadmeImages/Cloud2.PNG)

3. Una vez seleccionado el repositorio que queremos desplegar, tendremos que configurar los parámetros del proyecto para el despligue (Nombre del proyecto, comando de compilación, rama, etc.)

![Config](/public/ReadmeImages/Cloud3.PNG)

4. Una vez configurados, tendremos que esperar a que se configure el worker para que el despliegue se pueda realizar y ejecute los comandos

![Config2](/public/ReadmeImages/Config2.PNG)

5. Si damos clic en "Continuar con el proyecto" nos llevará a nuestro panel donde podremos ver las implementaciones de nuestro proyecto. Si damos clic en `ver la versión` nos llevará a nuestra página.

![Page](/public/ReadmeImages/Page.PNG)
De momento no veremos nada, pero una vez terminado el proceso podremos usar nuestra aplicación accediendo por el enlace mencionado.