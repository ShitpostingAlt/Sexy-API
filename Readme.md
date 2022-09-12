# Contact me if you need help/query :)
at : gambit.work.24@gmail.com

# Api That scrapes PornSites


### - Contents
- [Contact me if you need help/query :)](#contact-me-if-you-need-helpquery-)
- [Api That scrapes PornSites](#api-that-scrapes-pornsites)
    - [- Contents](#--contents)
  - [Installation](#installation)
  - [Available routes](#available-routes)
    - [Get-Top-Models](#get-top-models)
      - [output](#output)
    - [Get Popular Videos From Ok.xxx](#get-popular-videos-from-okxxx)
      - [output](#output-1)
    - [Get Trending Videos From Ok.xxx](#get-trending-videos-from-okxxx)
      - [output](#output-2)
    - [Get Videos By Keyword](#get-videos-by-keyword)
      - [output](#output-3)
    - [Get Hanime Weekly Top](#get-hanime-weekly-top)
      - [output](#output-4)
## Installation 
```
git clone git clone https://github.com/GambitKaAltAcc/SX-API.git
cd folder
npm start
or
npx nodemon ./server.js
```
## Available routes

### Get-Top-Models 

```js
axios.get('/gambit/getTop/?page=1')
.then(response => response.data)

```
#### output 

```json
  {
    "PornStarImage": "https://tt-lm.xhcdn.com/000/098/443/avatar2.jpg.v1643986017",
    "PornStarRank": "#1",
    "PornStarName": "Alyx Star",
    "PornStarViews": " 66.1M",
    "PornStarVideos": " 101"
  },

  {....}
```

### Get Popular Videos From Ok.xxx

```js
axios.get('/gambit/getpopularxxx/?page=1')
.then(response => response.data)

```
#### output 

```json
{
    "VidTitle": "Title response from api",
    "VidWatch": "Watch Link response from api",
    "VidThumb": "Thumbnail response from api"
  },

  {....}
```
### Get Trending Videos From Ok.xxx

```js
axios.get('/gambit/trendingxxx/?page=1')
.then(response => response.data)

```
#### output 

```json
{
    "VidTitle": "Title response from api",
    "VidWatch": "Watch Link response from api",
    "VidThumb": "Thumbnail response from api"
  },

  {....}
```
### Get Videos By Keyword

```js
axios.get('/gambit/search/?page=1&keyw={keyword}')
.then(response => response.data)

```
#### output

```json
{
    "VidTitle": "Title response from api",
    "VidWatch": "Watch Link response from api",
    "VidThumb": "Thumbnail response from api"
  },

  {....}
```

### Get Hanime Weekly Top

````js
axios.get('/gambit/hanime')
.then(response => response.data)
````

#### output

```json
  {
    "HanimeName": "Title",
    "HanimeRank": "Rank ",
    "WatchHanime": "Viewing Link"
  },

  {....}
```


  | New Endpoints coming soon |
  | ------------------------- |