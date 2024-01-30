
Sin duda, uno de los conceptos más interesantes de WebComponents (y también de los más complejos) es el Shadow DOM (DOM en la sombra). Para comprenderlo bien, primero debemos tener claro que el DOM es la estructura de elementos que tiene una página, estructurada en forma de árbol, donde se puede ver facilmente los descendientes (hijos) o contenedores (padres) de un elemento.

El navegador, al cargar una página, genera esta estructura en forma de árbol, a la que generalmente llamamos DOM. Cada vez que ocurre un cambio en los elementos de una página, el navegador actualiza esta estructura para reflejarlos.

► Aprender más sobre el DOM

¿Qué es el Shadow DOM?
El concepto de Shadow DOM nace de la necesidad de tener una forma de encapsular elementos y mantenerlos aislados del resto de la página, creando algo así como un concepto local, en contraposición al concepto global con el que se solía trabajar en los navegadores.

Quizás, la forma más fácil de entender el concepto de Shadow DOM, es haciendo una analogía precisamente a lo que su propio nombre indica: una sombra de un elemento.

Shadow DOM

Imaginemos que tenemos un árbol DOM del documento de la página en la que nos encontramos. Uno de esos nodos del árbol (destacado en azul) tiene un Shadow DOM (una sombra) en la cuál puede residir otro árbol DOM, que realmente no forma parte del DOM principal de la página.

Como veremos más adelante, entre otras cosas, esta característica nos permitiría algo muy interesante con CSS: aislar los estilos de modo que no afecten a los elementos que están fuera del Shadow DOM, ni tampoco el CSS de fuera afecte a los elementos del Shadow DOM.

Nota: Aunque se suele asociar a WebComponents, realmente el Shadow DOM es una característica independiente que se puede aplicar a un elemento HTML normal, sin necesidad de que sea un componente.

¿Qué es el Virtual DOM?
Aunque tiene cierta relación, el concepto de virtual DOM (o VDOM) no es una alternativa directa de Shadow DOM, pero muchas veces se suelen asociar, ya que debido a sus nombres se suele intuir que son cosas similares o alternativas.

Durante la aparición de los diferentes frameworks del ecosistema Javascript, estos idearon un concepto denominado Virtual DOM: una copia en memoria del DOM de la página, donde se gestionarían directamente los cambios del mismo, para traducirlos posteriormente al DOM real del documento, con el objetivo de acelerar y optimizar los cambios del DOM en la página.

Por ejemplo, la popular librería React introducía el concepto de Virtual DOM para detectar los cambios (diferencias entre árboles), actualizar los nodos afectados (cambios y descendientes a quienes pueden afectar) y posteriormente, actualizarlos en el DOM real, consiguiendo dos cosas principales: velocidad y abstraer de estos cambios para hacerlos de forma automática y menos tediosa:

Virtual DOM

El surgimiento del concepto de Virtual DOM y su definición, ayudó a promover el falso concepto «el DOM es lento», cuando en realidad, lo que puede hacerlo lento es la gestión que hagas (y cómo la hagas) del mismo.

Hay que tener en cuenta también que Shadow DOM es una tecnología existente en los navegadores, mientras que Virtual DOM es un proceso que se implementa y ocurre «fuera» del navegador, en las librerías de Javascript.