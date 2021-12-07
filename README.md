# Linkr

Linkr is a URL shortening service that generates a unique short link for a given resource and subsequently redirects HTTP requests directed at that link to the original URL.

## Installation

1. Clone Repo to local machine
2. Create `config/default.json` file with properties `mongoURI` and `baseUrl`
3. The `mongoURI` property will be a connection string to your MongoDB instance. If you do not have one available you can [create a hosted instance](https://www.mongodb.com/) or spin up a [Docker container](https://hub.docker.com/_/mongo). When running Linkr locally the `baseUrl` will be localhost.
```
{
  "mongoURI": "{connection string goes here}",
  "baseUrl": "http://localhost"
}
```
4. Once `default.json` is configured with `mongoURI` and `baseUrl`, the application can be started in development mode with `npm run dev`. The application will be listening on port 80 by default, but this can be changed by editing the `PORT` variable in `index.js`.

## API

| Route | Method | Params | Description |
|-|-|-|-|
|/api/url/shorten | POST | `longUrl` (body) | takes original URL, returns short link
| /{urlCode} | GET | `none` | forwards HTTP request to original URL

## Example Usage
```
// create new short link for the google homepage

curl --request POST 'http://localhost/api/url/shorten' --header 'Content-Type: application/json' --data-raw '{"longUrl": "https://google.com"}'


// example server response containing new short link for Google homepage

{
    "_id": "61af8a8b9d9c2b0e9c4e3924",
    "longUrl": "https://google.com",
    "shortUrl": "http://localhost/JI7EBrPYW",
    "urlCode": "JI7EBrPYW",
    "date": "Tue Dec 07 2021 11:23:39 GMT-0500 (Eastern Standard Time)",
    "__v": 0
}
```
