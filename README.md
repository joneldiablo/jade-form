# pug-form-general

Install `npm install --save-dev https://github.com/joneldiablo/pug-form.git`

.jade

Example:

.jade

```jade
include node_modules/pug-form/src/pug-form

form(action=baseUrl)
  -
    let fields = [
      {
        name: "firstname",
        label: "Nombre",
        type: "text",
        inputAttrs: {
          required: true
        },
        validation: "text"
      },
      {
        name: "lastname",
        label: "Apellidos",
        type: "text",
        validation: "text"
      },
      {
        type: "select",
        name: "city",
        label: "Ciudad",
        options: {
          mx: { text: "México" },
          md: {
            text: "Medellín",
            attrs: {
              selected: true,
            }
          },
          lm: {
            text: "Lima",
            attrs: {
              disabled: true
            }
          }
        }
      },
      {
        name: "cp",
        label: "Código postal",
        type: "number",
        validation: "cp",
        inputAttrs: {
          min: 0,
          max: 9999,
          lenght: 4
        }
      },
      {
        name: "adress",
        label: "Dirección",
        type: "text"
      }]
  each field in fields
    +pug-form(field)
  input.btn.btn-primary(type="submit", value="Enviar")
```

js

```js
'use strict';

import $ from 'jquery';
import 'bootstrap';

import JadeForm from 'pug-form';

$(() => {
  new JadeForm();
});

```

scss

```scss
```