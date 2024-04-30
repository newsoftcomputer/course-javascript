
# CUSTOM ELEMENTS

    - Los custom elements (elementos personalizados) son una de las características principales que forman los WebComponents. Con ellos, se nos permite crear nuestras propias etiquetas HTML, pudiendo dotarlas de su propia funcionalidad, marcado HTML o estilo CSS.

    <!-- Card con etiquetas HTML normales -->
        <div class="card">
        <img src="manzdev.png" alt="ManzDev">
        <h1>ManzDev</h1>
        <p>ManzDev es un streamer de código.</p>
        </div>


    <!-- Card utilizando un custom element -->
        <user-card name="ManzDev"></user-card>


    - Al crear un WebComponent le indicamos al navegador que al leer esa etiqueta, debe interpretar en su lugar el código anterior. De esta forma, cada vez que escribamos <user-card> sería como escribir todo el código anterior, mostrándolo visualmente.


## Nombres de las etiquetas HTML

    - El estándar de HTML5 define que las etiquetas HTML oficiales deben estar formadas por una sola palabra, mientras que los custom elements (nuestras propias etiquetas HTML) deben estar formadas de al menos 2 palabras, separadas por un guión.

    De esta forma, protegemos nuestras páginas o aplicaciones web para que, si en el futuro se añade una nueva etiqueta HTML estándar, no coincida con el mismo nombre que alguna nuestra.


    Nombre de etiqueta	¿OK?	Razón
    <element>	❌	Una etiqueta sin - no puede ser un custom element.
    <details>	❌	Idem. Además, <details> ya es un elemento HTML existente.
    <app-component>	✔️	Correcto, cumple las condiciones para tener un buen nombre.
    <AppComponent>	❌	No incluye -. Es la convención en ciertos frameworks JS, pero no en WebComponents.
    <App-Component>	❌	Casi. Es correcto, pero las etiquetas HTML deberían ser siempre minúsculas.
    <app-name-component>	✔️	Correcto, tiene al menos un -. Puedes añadir más si lo deseas.

    Así pues, un custom element básico y sencillo, podría definirse de la siguiente forma:

    <!-- Sencillo ejemplo de una etiqueta HTML propia (custom element) -->
        <app-element></app-element>

        <!-- Ejemplo incorrecto de custom element (no tiene guión) -->
        <element></element>



    class AppElement extends HTMLElement {
    constructor() {
        super();
        console.log("Inicializado...");
    }
    }

    customElements.define("app-element", AppElement);