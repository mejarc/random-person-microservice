# random-person

A microservice that delivers a JSON object with the name and details of a random (fictional) person from [RandomUser.me](http://RandomUser.me) via HTTP.

## How to request data from this microservice
You will request data from 'http://..TODO......../random-person' with JavaScript `fetch` or `XMLHttpRequest`

### JavaScript fetch example

```js

let API = 'http://..TODO......../random-person';

return fetch(API)
      .then((resp) => resp.json())
      .then((json) => {
        if (json.error) {
          console.log(json.error);
        } else if (json.results) {
          return json.results;
        }
    })
     .catch((err) => console.error(err));

```
## How to receive data from this microservice
Once your request for the JSON object succeeds, you can structure its data with JavaScript/HTML.
```js
```

## UML sequence diagram showing how requesting and receiving data work.

Make it detailed enough that your partner (and your grader) will understand

<!-- ### Contributors
@mejarc -->