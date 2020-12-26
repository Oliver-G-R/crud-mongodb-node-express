# CRUD con NodeJS, Express y mongodb

## Iniciar proyecto

1. **npm install**
2. **npm run dev**

## ¿Para qué srive?

Este proyecto guadar contactos a una base de datos (MONGODB)  
y hacer las operaciones básicas de un **CRUD**.

## Herramientas usadas en el proyecto

**NODEJS**

1. **ejs** _Para el renderizado de las vistas._
2. **express** _Ayuda a crear el servidor de una manera más faci._
3. **mongoose** _Conecta el servidor con mongodb._
4. **morgan** _Muestra información importante de las peticiones que hace el cliente a nuestro servidor._

**MÁS HERRAMIENTAS**

1. **Bootstrap**

### Dependencias

1. **nodemon** _Nos evita que el servidor por cada cambio que haga se tenga que ejecutar npm._

## Cosas a tomar en cuenta

El motro de renderizado para las vistas es ejs, se creo una carpeta llamada /views, la cual tiene componentes funcionales y  
presentacionales, en estos hay una lógica que permite pasar parámetros a estos componentes, para después usarlos en los atributos  
de los elementos que los conformen.

La documentación de ejs está en el siguiente enlace: [EJS](https://ejs.co/)

## Agradecimientos

Este proyecto fue hecho gracias a [Fazt](https://twitter.com/fazttech?lang=es) un gran mentor a la hora de aprender nuevas cosas.  
En uno de sus videos [Nodejs y Mongodb CRUD | Aplicación web desde cero con Express, Nodejs, Mongodb, mongoose, bootstrap4](https://www.youtube.com/watch?v=3J925fRl_UE),  
enseña como se puede crear un CRUD con estas tecnologías de una manera muy sencilla, si se tiene encuenta ya los conocimientos  
de Javascript, Nodejs, express, y sobre todo algo de html, de css no es tan necesario aunque recomendable, ya que se ocupa bootstrap como  
framework de css.  
El repositorio de su proyecto se encuentra [aquí](https://github.com/FaztWeb/express-mongodb-crud).

**Aclaro que no es una colaboración solo digo que me base de su video para aprender como construir este proyecto**

## Cosas agregadas a este mismo proyecto

1. Se reutilizaron al máximo los componentes, incluyendo algunos cambios al formulario.

```html
<div class="card">
  <div class="card-body">
    <form action="<%= route  %>" method="POST">
      <div class="form-group mb-3">
        <input
          class="form-control"
          type="text"
          value="<%= name %>"
          name="name"
          placeholder="Nombre"
        />
      </div>
      <div class="form-group mb-3">
        <input
          class="form-control"
          type="tel"
          value="<%= tel %>"
          name="tel"
          placeholder="+542564789563"
        />
      </div>
      <div class="form-group mb-3">
        <input
          class="form-control"
          type="email"
          name="email"
          value="<%= email %>"
          placeholder="example@mail.com"
        />
      </div>

      <button type="submit" class="btn <%= typeButton  %>   text-light w-100">
        <%= textButton %>
      </button>
    </form>
  </div>
</div>
```

Estos cambios se hicieron para reutilizar el formulario, el cual tiene dos usos, guadar y editar la información que venga desde la basde de datos.

### Uso

**Para editar**

```javascript
<%- include('./partials/_form.ejs', {
            _id : _id,
            name: name,
            tel: tel,
            email: email,
            textButton: 'Editando',
            route: `/update${_id}`,
            typeButton: 'btn-warning'
})  %>
```

Las primeras 4 propiedades van para los valores de los elementos inputs, la pripiedad textButton es para el contenido del bóton del formulario, es decir,  
si este esta editando se le asignara su nombre, al igual si esta guardando; route tiene el valor de la ruta a la cual se redigira al hacer submit en el formulario  
y al final typeButton es la clase de bootstrap que cambia el estilo de botón segun sea su función.

## UI

![Desktop](/ui/Desktop.png)
![Desktop](/ui/Mobile.png)
