# https-proxy
Serve http content through https using this proxy.

## Live demo
```
https://https-proxy.herokuapp.com/?url=http://example.com
```
Replace `http://example.com` with the http content that you want to serve over https.

## Why
A fully secure https website mustn't use "mixed content", that means that cannot use http resources.

Anyway, sometimes the http resources (e.g. an image) are not under our control and we cannot serve it over https.

This little web app proxies the http content you need providing you the same content over https.

## API
Use wherever you want: in your app, in your website, everywhere.

Simply change `http://my-http-content.com` into `https://https-proxy.herokuapp.com/?url=http://my-http-content.com`.