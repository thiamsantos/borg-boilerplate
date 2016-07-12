# HTML Guidelines

## Summary

1. [Indentation](#indentation)
1. [Optional closing tags](#optional-closing)
1. [HTML5 doctype](#doctype)
1. [Language attribute](#language)
1. [Quote on attributes](#quote)
1. [Self closing tags](#self-closing)
1. [Whitespace](#spacing)
1. [Head](#head)
1. [Scripts and stylesheets](#import)
1. [HTML Attribute Order](#attr-order)
1. [References](#references)

<a name="indentation"></a>
## Indentation
- Use soft tabs with two spaces.
- Nested elements should be indented once (two spaces).

###### :heavy_check_mark: GOOD
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```
###### :heavy_multiplication_x: BAD
```html
<!DOCTYPE html>
<html>
<head>
<title>Page title</title>
</head>
<body>
    <img src="images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
</body>
</html>
```

<a name="optional-closing"></a>
## Optional closing tags
Don’t omit optional closing tags.

###### :heavy_check_mark: GOOD
```html
<ul>
  <li>Lorem</li>
  <li>Ipsum</li>
</ul>
```
###### :heavy_multiplication_x: BAD
```html
<ul>
  <li>Lorem
  <li>Ipsum
</ul>
```

<a name="doctype"></a>
## HTML5 doctype
Add HTML5 doctype to the beginning.

###### :heavy_check_mark: GOOD
```html
<!DOCTYPE html>
```
###### :heavy_multiplication_x: BAD
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

<a name="language"></a>
## Language attribute
Always specify the language on the root html element.

###### :heavy_check_mark: GOOD
```html
<!DOCTYPE html>
<html lang="en">
  <!-- ... -->
</html>
```
###### :heavy_multiplication_x: BAD
```html
<!DOCTYPE html>
<html>
  <meta name="language" content="en">
  <!-- ... -->
</html>
```

<a name="quote"></a>
## Quote on attributes
Always quote attributes. Use double quotes, never single quotes.

###### :heavy_check_mark: GOOD
```html
<input type="text" value="name" class="input">
```
###### :heavy_multiplication_x: BAD
```html
<input type=text value=name class=input>
```

<a name="self-closing"></a>
## Self closing tags
Always omit the `/>`.

###### :heavy_check_mark: GOOD
```html
<input type="text" class="input">
```
###### :heavy_multiplication_x: BAD
```html
<input type="text" class="input"/>
```

<a name="spacing"></a>
## Whitespace
Separate block element by a blank line and agroup the inners block elements.

###### :heavy_check_mark: GOOD
```html
<ul class="nav-tabs">
  <li>...</li>
  <li>...</li>
</ul>

<div class="tab-content">
  ...
</div>
```
###### :heavy_multiplication_x: BAD
```html
<ul class="nav-tabs">

  <li>...</li>

  <li>...</li>

</ul>
<div class="tab-content">
  ...
</div>
```

<a name="head"></a>
## Head
Always include these tags first in the head:
```html
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Page Title</title>
<meta name="description" content="">
<meta name="robots" content="index, follow">
```

<a name="import"></a>
## Scripts and stylesheets
Always include:
- stylesheets at before closing head
- scripts before closing body adding async parameter.
###### :heavy_check_mark: GOOD
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
    <link href="path/to/main.css" rel="stylesheet">
  </head>
  <body>
    <!-- ... -->
    <script src="path/to/main.js" async></script>
  </body>
</html>
```
###### :heavy_multiplication_x: BAD
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
    <link href="path/to/main.css" rel="stylesheet">
    <script src="path/to/main.js"></script>
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

<a name="attr-order"></a>
## HTML Attribute Order
HTML attributes should be in this order for facilitate the reading.
1. class
2. id, name
3. data-*
4. src, for, type, href
5. title, alt
6. aria-*, role
```html
<a class="button" id="menu-button" data-toogle="navbar" href="" title="Open navbar" role="button"></a>
```

<a name="references"></a>
### References
- [Felipe Fialho Coding Style](https://github.com/LFeh/coding-style)
- [Code Guide by @mdo](http://codeguide.co/)
- [Harry Roberts Coding Style](http://csswizardry.com/2012/04/my-html-css-coding-style/)
