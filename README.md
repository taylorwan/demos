# Out of Time
### A dating app for the terminally ill

Created with Node, Express, and MongoDB

Demo [out-of-time.herokuapp.com](out-of-time.herokuapp.com)

*Not all parts of this project is functional. This project served as a working demo for [Comedy Hack Day DC 2016](http://comedyhackdaydc.com/).*

## To Run
This guide assumes you have git, npm, and mongo installed. See versions section below.

#### Clone this repository
```
git clone https://github.com/taylorwan/out-of-time.git
```
For SSH connections, use `git@github.com:taylorwan/out-of-time.git`

#### Install packages
(make sure you have the correct version of Node installed)
```
npm install
```
#### Run app
```
npm start
```
This will launch a local version of the site at localhost:3000. If you don't have any documents in your Mongo database, the [browse page](localhost:3000/browse) will not have any entries.

## Versions
* Node v6.9.1
* MongoDB v3.2.10
