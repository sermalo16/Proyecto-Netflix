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

### Comenzamos a trabajar en el banner

-- hemos importado un pedazo de imagen como backgrounimagem 
-- En react, tenemos que acomppañar los backgroundimages con estilos como object-fit y background-position
-- como la descripcion viene de la API, tenemos que truncarla para asegurarnos de que nos cabe. para ello hemos declarado la funcion truncate.
--hemos añadido un div vacio, que oscurece la imagen hasta fusionarla con el resto del UI, que es oscuro


### Comenzamos a trabajar en el Login

--hemos creado un boton con styled componets y le hemos llamado netflixbutton. este boton esta totalmente customizado y podremos variar su longitud, color y otros estilos, pasandoles props
--styled componets para variar los estilos del input o del boton, pero para su posicionamiento, le damos una clase normal

--Hemos creado un inpur personalizado en syled componets. le hemos llamad netflix input. como inputbase era ya un componentede material ui, pues lo hemmos llamado styled(inputbase). si hubiera sido un input base sty;es.input``

### Componente profile

-- hemos trabajado en ;a distribucion
-- <plans>Texto</plans>
-- const plans = () =>{return ()}
-- pasar props a los styled-components.
-- en el caso que el componente no sea binario, p.ej qeu el tamaño sea pequeño, mediano, o grande lo solucionanmos con un switch y una funcion

### SignUp
--Renderizado condicional. hemos creado una variable signin.
-- si la variable es false, desplegamos el formulario.