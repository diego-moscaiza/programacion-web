# Introducción a HTML

HTML (HyperText Markup Language) es el lenguaje principal de la web, utilizado para estructurar la interfaz web de manera descriptiva.

En 1989, [Tim Berners-Lee](https://es.wikipedia.org/wiki/Tim_Berners-Lee), un físico británico, inventó el World Wide Web (WWW) mientras trabajaba en el CERN. Berners-Lee necesitaba un lenguaje para crear documentos en línea que pudieran ser compartidos y enlazados entre sí. Así, creó HTML, que se basaba en el lenguaje de marcado SGML (Standard Generalized Markup Language).

## Estructura básica de HTML

La estructura básica de un documento HTML es la siguiente:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Contenido -->
</body>
</html>
```

### Explicación de la estructura básica de HTML
A continuación, se explica cada parte de la estructura básica de HTML:

`<!DOCTYPE html>`
- Declaración de tipo de documento, indica la versión de HTML utilizada.

`<html lang="es">`
- Representa la raíz de un documento HTML. El resto de elementos descienden de este elemento. También se puede usar el atributo `lang` para definir el idioma de la página.

`<head>`
- Provee información general (metadatos) acerca del documento, incluyendo su título y enlaces a scripts y hojas de estilos.

`<meta>`
- Aporta información sobre el documento.

`<meta charset="UTF-8">`
- Indica el tipo de codificación de la página.

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Especifica que el ancho de la página se alinea al ancho del dispositivo y que el zoom predeterminado esté al 100% o 1.

`<title>Document</title>`
- Título de la página que se muestra en la pestaña del navegador.

`<body>`
- Cuerpo donde se encuentra la estructura que se muestra en la página web.

`<!-- Comentario -->`
- Comentarios en HTML.

> Todos los datos deben estar dentro de una etiqueta.

## Recomendaciones:
Para mantenernos actualizados podemos entrar a las siguientes páginas:
- W3C: https://www.w3.org/standards/
- What WG: https://html.spec.whatwg.org/multipage/
- Can I Use: https://caniuse.com/
- MDN Web Docs: https://developer.mozilla.org/es/
