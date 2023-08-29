
# rel=sin abrir
La noopenerpalabra clave para el relatributo de los elementos <a>, <area>y <form>le indica al navegador que navegue hasta el recurso de destino sin otorgar al nuevo contexto de navegación acceso al documento que lo abrió, al no establecer la Window.openerpropiedad en la ventana abierta (devuelve null).

Esto es especialmente útil al abrir enlaces que no son de confianza, para garantizar que no puedan alterar el documento de origen a través de la Window.openerpropiedad (consulte Acerca de rel=noopener para obtener más detalles), y al mismo tiempo proporcionen el Refererencabezado HTTP (a menos que noreferrertambién se use).