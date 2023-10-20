# cloudflare workers

## proxy

用于代理请求，解决国内请求某些网站或接口被墙的问题

```js
const params = new URLSearchParams({
  proxyUrl: 'https://www.google.com',
});
fetch(`https://xxx.workers.dev/proxy?${params.toString()}`)
.then(res => res.text)
.then(data => {
  console.log(data)
})
```

> `workers.dev`也被墙了，所以最好在worker配置一个自定义域名
