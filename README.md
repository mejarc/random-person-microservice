# random-person

A microservice that delivers a JSON object with the name and details of a random (fictional) person from [RandomUser.me](http://RandomUser.me) via HTTP.

## How to request data from this microservice
You will request data from `https://random-person.herokuapp.com/random-person` with JavaScript `fetch` or `XMLHttpRequest`.

### JavaScript fetch example, for localhost

```js
const cors_api_url = 'https://guarded-scrubland-83014.herokuapp.com/';
let API = cors_api_url + 'https://random-person.herokuapp.com/random-person';

return fetch(API)
      .then((resp) => resp.json())
      .then((json) => {
        if (json.error) {
          console.log(json.error);
        } else if (json.results) {
          useData(json);
        }
    })
     .catch((err) => console.error(err));

```
## How to receive data from this microservice
<!-- /* TODO update with specific data fields */ -->
Once your request for the JSON object succeeds, you can structure its data with JavaScript/HTML.
```js
/* Create a node and display the string that represents the person.*/

const useData = (data)=> {
  const person = data.results[0];
  const div = document.createElement("div");
  div.textContent = `${person.name.first} ${person.name.last}`;
  document.body.appendChild(div);
}

```

## UML sequence diagram
<!-- TODO -->

<!-- ### Contributors
@mejarc -->