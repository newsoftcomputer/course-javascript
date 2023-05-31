

## AJAX / ASYNCHRONOUS


### QUE ES AJAX 

    - AJAX, acrónimo de Asynchronous JavaScript And XML (JavaScript asíncrono y XML), es una técnica de desarrollo web para crear aplicaciones web asíncronas. Estas aplicaciones se ejecutan en el cliente, es decir, en el navegador de los usuarios mientras se mantiene la comunicación asíncrona con el servidor en segundo plano. De esta forma es posible interactuar con el servidor sin necesidad de recargar la página web, mejorando la interactividad, velocidad y usabilidad en las aplicaciones.

    Ajax es una tecnología asíncrona, en el sentido de que los datos adicionales se solicitan al servidor y se cargan en segundo plano sin interferir con la visualización ni el comportamiento de la página, aunque existe la posibilidad de configurar las peticiones como síncronas de tal forma que la interactividad de la página se detiene hasta la espera de la respuesta por parte del servidor.

    JavaScript es un lenguaje de programación (scripting language) en el que normalmente se efectúan las funciones de llamada de Ajax mientras que el acceso a los datos se realiza mediante XMLHttpRequest, objeto disponible en los navegadores actuales. En cualquier caso, no es necesario que el contenido asíncrono esté formateado en XML.

    Ajax es una técnica válida para múltiples plataformas y utilizable en muchos sistemas operativos y navegadores dado que está basado en estándares abiertos como JavaScript y Document Object Model (DOM).

    - Tecnologías incluidas en Ajax
    Ajax es una combinación de cuatro tecnologías ya existentes:

    XHTML (o HTML) y hojas de estilos en cascada (CSS) para el diseño que acompaña a la información.
    Document Object Model (DOM) accedido con un lenguaje de scripting por parte del usuario, especialmente implementaciones ECMAScript como JavaScript y JScript, para mostrar e interactuar dinámicamente con la información presentada.
    El objeto XMLHttpRequest para intercambiar datos de forma asíncrona con el servidor web. En algunos frameworks y en algunas situaciones concretas, se usa un objeto iframe en lugar del XMLHttpRequest para realizar dichos intercambios. PHP es un lenguaje de programación de uso general de script del lado del servidor originalmente diseñado para el desarrollo web de contenido dinámico también utilizado en el método Ajax.
    XML es el formato usado generalmente para la transferencia de datos solicitados al servidor, aunque cualquier formato puede funcionar, incluyendo HTML preformateado, texto plano, JSON y hasta EBML.
    Como el DHTML, LAMP o SPA, Ajax no constituye una tecnología en sí, sino que es un término que engloba a un grupo de éstas que trabajan conjuntamente.



### PARA QUE SIRVE

    - The asynchronous is used for make task that have await, What:

    1. Call to API's
    2. Find to DB
    3. Save to DB
    4. Delete to DB
    5. Consult files in disc

    - And we used 

        Callbacks ( Old - NoUsed - Generating a Callback Hell)
        Promises
        Async - Await



### GRUPO DE TECNOLOGIAS QUE USA AJAX

    - AJAX no es una tecnologia. AJAX es un grupo de tecnologias que se usan para hacer asincronia
    
    - HTML & CSS:  Para crear una presentacion basada en estandares
    - DOM: Para la interaccion y manipulacion dinamica de presentacion.
    - HML, XML, JSON: Para el intercambio y manipulacion de informacion
    - Javascript: Como lengiaje de programacion.
    - Estado de las peticiones
        READY_STATE_UNINITIALIZED = 0   
        READY_STATE_LOADING = 1
        READY_STATE_LOADED = 2
        READY_STATE_INTERACTIVE = 3
        READY_STATE_COMPLETE = 4


