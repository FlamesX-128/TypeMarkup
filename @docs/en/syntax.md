# Sintaxis

## Comments

### Source code example

```tm
# I'm a comment
html
```

### Transpilation example

```html
<html></html>
```

## Force insertion - Strings

### Source code example

```tm
'hi'
```

### Transpilation example

```html
hi
```

## Declare tags

### Source code example

```tm
html
```

### Transpilation example

```html
<html></html>
```

## Declare tag children

### Multiple lines

#### Source code example

```tm
html
    head
        title
```

#### Transpilation example

```html
<html>
    <head>
        <title>hello</title>
    </head>
</html>
```

### Single line

#### Source code example

```tm
html head title 'hello'
```

#### Transpilation example

```html
<html>
    <head>
        <title>
            hello
        </title>
    </head>
</html>
```

### Combined

#### Source code example

```tm
html body div
    h1 'hello world'
```

#### Transpilation example

```html
<html>
    <body>
        <div>
            <h1>hello woorld</h1>
        </div>
    </body>
</html>
```

## Declare tag attributes

### Multiple lines

#### Source code example

```tm
- lang 'es'
html
```

```tm
- class 'container'
html body
```

#### Transpilation example

```html
<html lang="es"></html>
```

```html
<html>
    <body class="container"></body>
</html>
```

### Single line

#### Source code example

```tm
- lang 'es' html
```

```tm
html - class 'container' body
```

#### Transpilation example

```html
<html lang="es"></html>
```

```html
<html>
    <body class="container"></body>
</html>
```

## Declare references

### Source code example

```tm
* root html
```

### Transpilation example

```html
<html></html>
```

## Call references

### Source code example

```tm
* abc html

& abc head
    title 'world'
```

### Transpilation example

```html
<html>
    <head>
        <title>world</title>
    </head>
</html>
```
