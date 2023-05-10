# Sintaxis

## Comentarios

### Ejemplo de código fuente

```tm
# Soy un comentario
html
```

### Ejemplo de transpilación

```html
<html></html>
```

## Forzar inserción - Strings

### Ejemplo de código fuente

```tm
'hi'
```

### Ejemplo de transpilación

```html
hi
```

## Declarar etiquetas

### Ejemplo de código fuente

```tm
html
```

### Ejemplo de transpilación

```html
<html></html>
```

## Declarar hijos de etiqueta

### Múltiples líneas

#### Ejemplo de código fuente

```tm
html
    head
        title
```

#### Ejemplo de transpilación

```html
<html>
    <head>
        <title>hola</title>
    </head>
</html>
```

### Una línea

#### Ejemplo de código fuente

```tm
html head title 'hola'
```

#### Ejemplo de transpilación

```html
<html>
    <head>
        <title>
            hola
        </title>
    </head>
</html>
```

### Combinados

#### Ejemplo de código fuente

```tm
html body div
    h1 'hola mundo'
```

#### Ejemplo de transpilación

```html
<html>
    <body>
        <div>
            <h1>hola mundo</h1>
        </div>
    </body>
</html>
```

## Declarar attributos a etiqueta

### Múltiples líneas

#### Ejemplo de código fuente

```tm
- lang 'es'
html
```

```tm
- class 'container'
html body
```

#### Ejemplo de transpilación

```html
<html lang="es"></html>
```

```html
<html>
    <body class="container"></body>
</html>
```

### Una línea

#### Ejemplo de código fuente

```tm
- lang 'es' html
```

```tm
html - class 'container' body
```

#### Ejemplo de transpilación

```html
<html lang="es"></html>
```

```html
<html>
    <body class="container"></body>
</html>
```

## Declarar referencias

### Ejemplo de código fuente

```tm
* root html
```

### Ejemplo de transpilación

```html
<html></html>
```

## Llamar referencias

### Ejemplo de código fuente

```tm
* abc html

& abc head
    title 'mundo'
```

### Ejemplo de transpilación

```html
<html>
    <head>
        <title>mundo</title>
    </head>
</html>
```
