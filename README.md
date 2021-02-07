# react-suspense-data-fetching

## This Documentation

I have created 2 versions: english and spanish.

Feel free to pull, fork, review or open any PR or Issues.

## English documentation

## Overview

Example of `React.Suspense` with data fetching implementation with ReactJS.

## Technologies

- create-react-app
- react

## Scripts

```bash
npm run start
```

It will start a local development server on http://localhost:3000.

## Purpose

The purpose of this repository is to show how to fetch data and handle asynchronous activity with the use of the `React.Suspense` component.

- In React, in the past and currently, we are fetching the data through `useEffect` or in the `componentDidMount`.
- Then we set a `loading` state prop in order to display a `Spinner` loading the data.
- When we receive the data from the provider, we set the data in the state and set the `loading` state property to false, in order to hide the `Spinner`.

Current status example:

```js
export default () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData()
            .then((response) => {
                setData(response);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <MyDataTemplate data={data} />
    )
};
```

- In my opinion, there is nothing wrong with this approach and it just works.
- You can see there are several callbacks, and the need to handle responses and useEffect. Also you need to control the loading state manually.
- `React.Suspense` is solving this problem by allowing you to write a much more easy to understand and synchronous code.

Next status example:

```js
// App.jsx
export default () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <MyDataContainer />
    </React.Suspense>
  );
}

// MyDataContainer (check how we are fetching the data here)
export default (props) => {
  const data  = DataService.data.read(props.id); // read will throw a promise that will be handled by React.Suspense
  return (
    <MyDataTemplate data={data} />
  );
}
```

- I have skipped most of the technical implementation details to keep it easy.
- As you can see, the asynchronous components are wrapped on `React.Suspense`
- `React.Suspense` will handle any thrown `Promise`

```js
const get = (id) => {
  return fetch(id); // returns Promise
}

const read = (key) => {
  if (cache[key]) {
    return cache[key];
  }

  throw get(key); // throws Promise which React.Suspense handles
};
```

As you can appreciate, the way we are writing the asynchronous requests is much easy to read, understand and synchronous, than through the use of callbacks, useEffects, componentDidMounts and other lifecycle events.

Eventually, when it comes to API requests, we will create a resources based model of programming, where we associate a resource to a set of endpoints and through `React.Suspense` we will handle the asynchronous activity in a more "React way", that's declarative and component based.

New libraries will adapt to this way of doing things, and in the future it will feel just natural.

In fact, we could handle any asynchronous activity that's not API requests: we could handle GPU calls, WebAPI calls to the Audio or Video API as well.

## Documentación es Español

## Descripción

Ejemplo de  `React.Suspense` para gestionar llamadas asíncronas.

## Tecnologías

- create-react-app
- react

## Scripts

```bash
npm run start
```

Se inciará un servidor de desarrollo en http://localhost:3000.

## Intención

La inteción de este repositorio es mostrar cómo funciona la nueva manera de obtener datos y gestionar el estado con el componente `React.Suspense`

- En ReactJS, en el pasado y en la actualidad, obtenemos datos a través de `useEffect` o con `componentDidMount` por ejemplo.
- Entonces habilitamos una propiedad del estado del componente `loading` para mostrar un `Spinner` indicando la carga de los datos.
- Cuando recibimos los datos del provider, establecemos los datos en el estado y seteamos la propiedad `loading` a `false`, para ocultar el `Spinner`

Estado actual:

```js
export default () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData()
            .then((response) => {
                setData(response);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <MyDataTemplate data={data} />
    )
};
```

- En mi opinión, no hay nada malo al tomar esta aproximación; básicamente funciona.
- Pero se puede apreciar a simple vista cómo hay varios callbacks, la necesidad de gestionar las respuestas y el hook `useEffect`. Además necesitamos controlar el estado `loading` manualmente.
- `React.Suspense` resuelve este problema, permitiendo al desarrollador escribir un código más fácil de entender, con una lógica prácticamente síncrona.

Estado de Próxima generación:

```js
// App.jsx
export default () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <MyDataContainer />
    </React.Suspense>
  );
}

// MyDataContainer (check how we are fetching the data here)
export default (props) => {
  const data  = DataService.data.read(props.id); // read will throw a promise that will be handled by React.Suspense
  return (
    <MyDataTemplate data={data} />
  );
}
```

- Me ha saltado una parte de la implementación técnica para mantener el concepto fácil de entender (se puede ver la implementación al completo en el código del repo)
- Como puedes ver, los components asíncronos se envuelven en un componente `React.Suspense`
- `React.Suspense` gestionará cualquier `Promise` que haya sido lanzada como excepción (`throw`)

```js
const get = (id) => {
  return fetch(id); // returns Promise
}

const read = (key) => {
  if (cache[key]) {
    return cache[key];
  }

  throw get(key); // throws Promise which React.Suspense handles
};
```

Como se puede apreciar, la forma en que escribo las peticiones asíncronas es mucho más fácil de leer y entender, siendo la lógica síncrona, que si lo comparamos con el uso de callbacks, useEffects, componentDidMount y otros eventos.

Progresaremos a un model de programación basada en recursos, donde asociamos un recurso a un set de endpoints y a través de `React.Suspense` gestionaremos mla actividad asíncrona en la "React way", esto significa que será más declarativo y basada en componente.

Nuevas bibliotecas se adaptarán a esta manera de hacer las cosas, y en el futuro se sentirá natural.

De hecho, podríamos gestionar cualquier actividad asíncrona y no solamente API requests: podríamos gestionar llamadas a funcionalidad de la GPU, WebAPI calls como a la API de Video o Audio.
