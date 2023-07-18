<p align="center">
  <a href="https://www.angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="200" alt="Angular Logo"/></a>
</p>

# Países App

Aplicación que te permite buscar Países por Capital, por País o por Región.

La página principal está dividida en dos secciones, la sección de la izquierda te permite seleccionar el tipo de búsqueda, ya sea por **Capital**, **País** o **Región**.

En la parte superior de la sección derecha se encuentra el buscador, donde podrás escribir tu consulta. y en la parte inferior de dicha sección aparecerá el listado de coincidencias de tu búsqueda.

Cada una de las coincidencias tiene un enlace, el cual te permitirá abrir información extra sobre el país que estás seleccionando.

La información de las búsquedas y los resultados de las mismas, son persistentes, ya que se guardan en el LocalStorage, por lo que si cambias de pagina o reinicias el navegador, la información de tus últimas búsquedas estarán disponibles.

La App se conecta a la API [REST Countries](https://restcountries.com/) mediante peticiones HTTP.

Algunos conceptos utilizados para la generación de ésta App, son:

* SPA (Single Page Application).
* Rutas.
* RouterLink y RouterLinkActive.
* Componentes especializados.
* DebounceTime.
* Inputs.
* SwitchMaps.
* Consumo de APIs.
* Tipado de datos.
* Menú de aplicación.
* Pipes.
* Operadores RXjs.
* ngClass y diferentes formas de manipular clases.
* CSS condicionales.
* Optimizaciones a peticiones HTT.
* Debounce manual mediante RxJs.
* LocalStorage.
* Ideas de Store.
* Re-utilización de componentes.
* Varios operadores de RxJS aplicados.

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.1.1.

## Servidor de Desarrollo

Ejecuta `ng serve` para generar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.
