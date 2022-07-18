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

## Repo structure

This is not an exhaustive list of files and directories, just some that may be of importance. This will be updated every now and then

```
.github/ - files involved in github functions
src/
    _includes/ - page templates
    css/ - styling
    feed/ - contains feed imformation
    img/ - where images are stored
    pages/ - where all the non-home pages live
    index.html - site homepage
.gitginore - tells Git what to not add to commits
Dockerfile - tells Docker how it should make the container
LICENSE - what you can and cannot do with the code
package.json - contains information about the repo, npm scripts and packages
README.md - you are reading this
SECURITY.md - what to do if you find a security issue in ths repo
tailwind.config.js - tailwind config file
TODO.md - keeping track of tasks to complete
```

## Contributing

Please see the [contributing guide](.github/CONTRIBUTING.md)

## License

This and the original repo are licensed under [MIT](/LICENSE.MD)

## Credits
Original repo is [here](https://github.com/hullcss/hullcss-site)  

Original authors are the University of Hull Computer Science Society and contributors, including [Kieran Robson](https://github.com/kieranrobson) and [Nathaniel Read](https://github.com/itisNathaniel)  
