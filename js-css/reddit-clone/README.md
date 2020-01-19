# thingy

Initial code based on [Asperitas](https://github.com/d11z/asperitas).

```
npm run install-all
npm start
```

## Testing

```
docker run -d -p 27017:27107 mongo
cd server && npm test
cd client && npm test
```

## TODO

* Switch to SSR (Next.js?)
* Switch to Koa
* Switch to Postgres?

[License (MIT)](./LICENSE.md)
