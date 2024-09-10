# Introducción a CSS.

## ¿Qué es CSS?

CSS es el lenguaje de estilos para la web; CSS es un acrónimo de la palabra 'Cascade Style Sheet', que traducido al español es 'Hoja de estilos en cascada'.

## Sintaxis básica de CSS:

Para poder manipular los estilos en CSS declaramos el selector, el cual es el nombre de la etiqueta en HTML, que deseemos definir los estilos como colores, tipo de fuentes, el ancho de texto, su margen y etc. Esto se conoce como 'regla predeterminada' o regla asecas.

```css
/* Declaramos el selector 'body' y dentro los corchetes definimos la propiedad 'font-family'. */
body {
    font-family: Arial, Helvetica, sans-serif;
}

/* Podemos declarar 2 selectores y definir propiedades que alterarán el diseño en ambos. En este caso modificamos el peso y el tamaño del texto y el color. */
li, a {
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
}
```

También podemos modificar los estilos llamando a los selectores de id y de clase, estos deben estar definidos en las etiquetas HTML para realizarlo.

```css
.clase {
    font-weight: 500;
}

#id {
    font-size: 16px;
}
```

## Flexbox y Grid

### ¿Qué son?

CSS Flebox Layout y CSS Grid Layout, normalmente conocidos como Flexbox y Grid son módulos de CSS los cuales permite trabajar la alineación y posicionamiento de elementos verticales y horizontales en la web.

Con Flexbox sólo se puede trabajar con diseños unidimensionales, o sea en una sola columna o en una sola fila. En cambio Grid trabaja con diseños bidimensionales que son varias columnas y filas, esto se puede dar a entender como trabajar con una cuadrilla o tabla.

1. Ejemplo con flexbox:

- Para comenzar a usar flexbox tenemos que declarar la propiedad 'display' y el valor 'flex' y luego de eso se puede llamar a las demás propiedades como 'flex-direction' para manipular el diseño.


```css
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

2. Ejemplo con grid:

- Para comenzar a usar grid tenemos que declarar la propiedad 'display' y el valor 'grid' y luego de eso se puede llamar a las demás propiedades como 'grid-template-columns' para manipular el diseño.

```css
body {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
```

