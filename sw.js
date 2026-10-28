/* No-Bullshit 21 service worker */
var VERSION = "2026-10-28a";
var SHELL = "nb21-shell-" + VERSION;
var FONTS = "nb21-fonts";
var PRECACHE = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./apple-touch-icon.png", "./favicon-32.png"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(SHELL).then(function(c){ return c.addAll(PRECACHE); }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k.indexOf("nb21-shell-")===0 && k!==SHELL; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

function staleWhileRevalidate(cacheName, req){
  return caches.open(cacheName).then(function(c){
    return c.match(req).then(function(cached){
      var fetched = fetch(req).then(function(res){
        if(res && (res.ok || res.type==="opaque")) c.put(req, res.clone());
        return res;
      }).catch(function(){ return cached; });
      return cached || fetched;
    });
  });
}

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method!=="GET") return;
  var url = new URL(req.url);
  if(url.origin===self.location.origin){
    e.respondWith(staleWhileRevalidate(SHELL, req));
  } else if(url.hostname==="fonts.googleapis.com" || url.hostname==="fonts.gstatic.com"){
    e.respondWith(staleWhileRevalidate(FONTS, req));
  }
});
