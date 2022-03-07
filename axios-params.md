# Axios params

Axios params are very helpful when needing to add queries to an endpoint.

```js
axios.get("/myPetServer/dogs", {
  params: {
    breed: "poodle",
    sort_by: "age",
  },
});
```

In the example above, a request will be made to `/myPetServer/dogs?breed=poodle&sort_by=age`, with the axios handling the `?` and `&` syntax of the query for you. Note that the key-value pairs in the params object must align with the API's expected query parameters as they will be formatted in the query as `?KEY=VALUE`.

Axios params are particularly useful if you will only _sometimes_ need to add a query to your endpoint. For example, let's say that we get the `breed` from a variable that might sometimes be `undefined`.

```js
const fetchDogs = (breed) => {
  axios.get("/myPetServer/dogs", {
    params: {
      breed: breed,
      sort_by: "age",
    },
  });
};
```

In the case that `breed` is undefined, then axios params will not append the breed query to the request endpoint. This is because it will only append key-value pairs to the query if the value is not `undefined`. For the example above, a request would therefore be made to `/myPetServer/dogs?sort_by=age`.