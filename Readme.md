# Api That scrapes PornSites


### - Contents
- [Api That scrapes PornSites](#api-that-scrapes-pornsites)
    - [- Contents](#--contents)
  - [Available routes](#available-routes)
    - [Get-Top-Models](#get-top-models)
      - [output](#output)
    - [Get Popular Videos From Ok.xxx](#get-popular-videos-from-okxxx)
      - [output](#output-1)
    - [Get Trending Videos From Ok.xxx](#get-trending-videos-from-okxxx)
      - [output](#output-2)

## Available routes

### Get-Top-Models 

```js
axios.get('/gambit/getTop')
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
axios.get('/gambit/getpopularxxx')
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
axios.get('/gambit/trendingxxx')
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




  | New Endpoints coming soon |
  | ------------------------- |