# HullCSS Site - Eleventy Rewrite
> Eleventy rewrite of [hullcss.org](https://HullCSS.org) using the [JET](https://github.com/marcamos/jet) template  

Transferring main files e.g. posts and rewriting the css to be eleventy and tailwind compliant.  

[![CI](https://github.com/hullcss/hullcss-site-jet/actions/workflows/11tyCI.yml/badge.svg)](https://github.com/hullcss/hullcss-site-jet/actions/workflows/11tyCI.yml)
[![Publish Docker image](https://github.com/hullcss/hullcss-site-jet/actions/workflows/docker-image.yml/badge.svg)](https://github.com/hullcss/hullcss-site-jet/actions/workflows/docker-image.yml)
[![Git Version](https://github.com/hullcss/hullcss-site-jet/actions/workflows/gv.yml/badge.svg)](https://github.com/hullcss/hullcss-site-jet/actions/workflows/gv.yml)
![license](https://img.shields.io/github/license/hullcss/hullcss-site-jet)
![Version](https://img.shields.io/github/package-json/v/hullcss/hullcss-site-jet)
![Repo-Size-MB](https://img.shields.io/github/repo-size/hullcss/hullcss-site-jet)
![Monthly-Activity](https://img.shields.io/github/commit-activity/m/hullcss/hullcss-site-jet)
![Last-Commit-Date](https://img.shields.io/github/last-commit/hullcss/hullcss-site-jet/main)

- [HullCSS Site - Eleventy Rewrite](#hullcss-site---eleventy-rewrite)
  - [Development](#development)
  - [Dockerfile](#dockerfile)
    - [Ouroboros](#ouroboros)
  - [Repo structure](#repo-structure)
  - [Changelog](#changelog)
  - [Contributing](#contributing)
  - [License](#license)
  - [Credits](#credits)

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
### Ouroboros

Using a tool like [Ouroboros](https://github.com/pyouroboros/ouroboros), you can automatically update containers without the need for restarts.  This site is setup with that so you can (instead of building it yourself like above) with `sudo docker run -d -p unused-port-number:80 crimsontome427:hullcss`


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
changelog - updates the changelog file with git log formatted
CHANGELOG.md - commit logs in a nicer format
```

## Changelog

Run `./changelog` to generate the changelog after your commit, then `git add . && git commit --amend --no-edit ` to generate the changelog  
The changelog is available [here](CHANGELOG.md)

## Contributing

Please see the [contributing guide](.github/CONTRIBUTING.md)

## License

hullcss-site-jet is released under the MIT License. The full license text is included in the [LICENSE](/LICENSE.MD) file in this repository. Tldr legal have a [great summary](https://tldrlegal.com/license/mit-license) of the license if you're interested.

## Credits
Original repo is [here](https://github.com/hullcss/hullcss-site)  

Original authors are the University of Hull Computer Science Society and contributors, including [Kieran Robson](https://github.com/kieranrobson) and [Nathaniel Read](https://github.com/itisNathaniel)  
