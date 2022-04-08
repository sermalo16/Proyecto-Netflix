## Inicializacion del proyecto

`npx create-react-app clonenetflix2022 --template redux

### proceso de llimpieza

### importar las Librerias

material-ui/core, axios, firbase, react-router-dom, react-uuid, styled-components

### app.js - layout inicial
-- creamos rutas
-- Renderizamod Login o el resto del app condicionado a la existencia de un usuario

### Estilos
-- Utilizamos useStyles para crear una infraestructura que nos permita asignar estilos a cada uno de los componentes

### Crear carpetas de componentes :  pages
-- Creamos la infraestructura basica de los componentes que representan una pagina: home, login, paypal y signup y

#### Estilos en los componentes de pages
-- patron para añadir la infraestructura de estilos a todos los componentes de pagina: Banner, Header, Plans, Rows

### Crear la carpeta de componets, con componentes mas secundarios

-- Creamos la infraestructura basica del resto de componentes

### Comenzamos a trabajar con el Header

-- importamos el logo 
-- colocamos una clase transparent condicional. esta clase se activa si la variable show=true
-- la variable show se convierte en true, cuando hacemos un scroll vertical de mas de 100 px
-- para escuchar cuando el usuario hace un scroll vertical, colocamos un eventListener al objeto window
-- el eventListener esta activo un sola vez cada vez que refrescamos la pagina (useEffect con []).
-- una vez montado el componente, hay que limpiarlo para que no nos quede colgado el eventlistener
-- colocamos las rutas tanto a logo como al avatar