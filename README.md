# HullCSS Site - Eleventy Rewrite
> Eleventy rewrite of [hullcss.org](https://HullCSS.org) using the [JET](https://github.com/marcamos/jet) template  

Transferring main files e.g. posts and rewriting the css to be eleventy and tailwind compliant.  

## Development
Manual 
- clone the repo
- run `npm i` to install dependencies
- `npm run dev`
- make some changes and watch them update in the browser.

Docker
the site can also be built and ran inside a docker container
when you are in the base of the repo:  
- `sudo docker build -t hullcss .`  
- `sudo docker run -it -d -p unused-port-number:80 hullcss`  
- visit `localhost:port` or `ip:port` if you are hosting on a VPS and the site should be available to view

## Dockerfile

```dockerfile
FROM node:latest as npmpackages
WORKDIR /app
COPY package.json .
RUN npm install

FROM node:latest as builder
WORKDIR /app
COPY --from=npmpackages /app /app
COPY . .
RUN npm run build 

FROM nginx:1.17.10-alpine
RUN rm -r /usr/share/nginx/html/
COPY --from=builder /app/public/ /usr/share/nginx/html/
```

## Contributing

Please see the [contributing guide](https://github.com/hullcss/hullcss-site-jet/blob/main/CONTRIBUTING.md)

## Credits
Original repo is [here](https://github.com/hullcss/hullcss-site)  

Original authors include [Kieran Robson](https://github.com/kieranrobson) and [Nathaniel Read](https://github.com/itisNathaniel)  
