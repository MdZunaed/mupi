'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7861fdf36a9227f825bd486a335855f6",
".git/config": "5aeed21e4a4519dbba5468876defe9b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "82791ac9f5e7995ad128c2c8373a6d10",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2e8e2e58f59b74d5c693682c37777be5",
".git/logs/refs/heads/main": "02937ce5b5bf2279e1a2bb1dc98a723d",
".git/logs/refs/remotes/origin/main": "484cc0aff8bca0ae4b184dbf6a75c00c",
".git/objects/01/c7bbc8b12ab0c1d880d33f119913127f587a63": "0b15853c0dea32ea670cee326b131747",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/40f56b723149bbca604307f24ebadaee80228a": "487d11b9354a461395428b1c9d7e9f42",
".git/objects/1d/afaf78a3e3a9b7a8dfb947e648f09cec12b7d9": "6182c7b323f6bafd0f0a57255c9244f3",
".git/objects/1e/3b78c659a8d79ae0dafdd51ca2153e341c7d2d": "66fb5c1ae1169a41504de92ca8b93ee0",
".git/objects/2d/9db010bbe01b317e5b0ee1b0ef973e925b3c3e": "f033acc56effec7d9f357923da7f636e",
".git/objects/32/dba445c60a176e292b1bdf979e0a2e17ef9306": "b6abce795fcadc5b61a8e47e446c8139",
".git/objects/36/54fdab2c5d108537293889f34ca243fbc8df2f": "b4c7bcbeae82826d959e1a830491c223",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/f8375db8cadd7d4c4a103180da27c4ceb805c9": "13c2d3d1580cccd4cfeae07fba15835a",
".git/objects/5f/70af9dae8629d3f9400c9c09393c9080a46dd6": "1694a7098dbc27769352ff68fffb4bfa",
".git/objects/63/cf31f3fb3558b1c9b3426ad3226387080234fd": "66802a4da78148ce2c481912ae9ed289",
".git/objects/64/efcaae10a8ed6e86215c5cdc035648a348f643": "e814a855245d46b1a5562b63a1976a74",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/049ad8b1b2ec30e3bc0bf2e7eff4108d3bd8ab": "7370b87ea45e66505fba75bc31df9855",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/fdc64a3da7e3040578352a7b8213ea0a715a03": "d08514bb11f40bd1004974c429f5f8e1",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/96/87de10be485c1585e74383ed864ea216e366f7": "7d8220b42f469ec6f7c68e478c528db3",
".git/objects/9c/63941dbe25225256b45b2974a6f285736751e5": "9589bbf225bd38a050b6f05396101ed6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/d83c9be8a9349f835a757c2c7169d8c427c194": "6974d83ee2c70445eb9eb759c50cb975",
".git/objects/a7/920ff83297101ce8a564c6b33f76d2ba473a4b": "7f584572d93da9bbd24d61259d3590ea",
".git/objects/aa/d07f26c08763ee4aa0bb594b4a8c561abef403": "bf90829405400fa49aee2c7540a5f4b6",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/ab0112956a0f2ebb345391ea9e7ede9bd85022": "c58ab7c27b7aeb2ca9d6f7d457b2553e",
".git/objects/b7/8b8f4dfe1777a823444902ad4eeecff71e0a97": "d33dee2845e67e83c260bbf71b9c7701",
".git/objects/b7/aebcfe83ddd755cffb7cf296e3a9c65c2385c6": "7596d60ef21459d85eaa9e2a4e549a98",
".git/objects/b7/ef33bf9dd6842f9f690a1859a3118add0dc877": "b980dd9b00eae7345093c302edad027d",
".git/objects/bb/fde2116629c711b1f144f4a0a7b9343df1b0c8": "09ec3062dc015418281995f8572aee9b",
".git/objects/c2/b8be0f7aa319602c89e6792a237f8c8423ef45": "92a67d0e10e837ac30f75ea924545be9",
".git/objects/c3/d72108546b9acc120310db3630f64c6d6de0cc": "5315977f2395a42574ca100cd9399fa1",
".git/objects/e1/5de53b71a3afcd0fc342ecf6639998b66f4231": "47c45c6de2b587c1ab8bbae07e899783",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/48bd8604aa9303715ca2dfc7776b27f42c3a58": "917def33dc30dc85bcca0535c6db876b",
".git/objects/eb/4f1317c739a3ff0817be42467b950db405be7a": "d786b500da2b19558bb606f0c45f8227",
".git/objects/f0/5cf72f8ab54d5a4edd17dc4e334e9a744b13a9": "b18dacc1bc95e120c14b3d5ed9cf83e2",
".git/objects/fd/0cd0efe2f7584cf4cea54817e6a62a861f6f26": "db51623b147e2b1d83dac753e5ad8b08",
".git/refs/heads/main": "79acff634bcbad8fb9606e302270a3ae",
".git/refs/remotes/origin/main": "79acff634bcbad8fb9606e302270a3ae",
"assets/AssetManifest.json": "cccd061bcf279c0f0a9dd6f231c64f5d",
"assets/assets/images/college.png": "8b0cc2199e08fec3b29f6ecf5377f4f6",
"assets/assets/images/icons/hostel.png": "8da60f5d5bb77a0b149731ad4c0d42fa",
"assets/assets/images/icons/job.png": "80b1ba29277295150dd5b1d28d0984c0",
"assets/assets/images/icons/library.png": "24d57af31d7bdee6fe118f7947c214c5",
"assets/assets/images/icons/notice.png": "e2c3bd6b07fd1e5105dee7a38bb989cc",
"assets/assets/images/icons/results.png": "8fd75d2892ebab8bfdc1154452dcaa2c",
"assets/assets/images/icons/routine.png": "0de0c94e20d7e395d9a8c4eb013bc179",
"assets/assets/images/icons/students.png": "a13da7c698d054a1e7e4f93352d62d74",
"assets/assets/images/icons/teacher.png": "f2aa182c331140cdc4b8402fe16b636b",
"assets/assets/images/logo.png": "2a559380b59d64d71efae29fd7ffa22d",
"assets/assets/images/mupi.png": "e9a2e38d23cec4830de87f44aca6b702",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "fff055c18ecf9d33ccdbb4147de8b398",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "2177580f1ee205e1613ffe8f8d3194b5",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/android-chrome-512x512.png": "19b55b2fca3c9b04bb4b3e1a1d3a86de",
"icons/apple-touch-icon.png": "b466cfb11a19261d164b26a37e3631ce",
"icons/Icon-192.png": "71c16144271101e76e1db58226197931",
"icons/Icon-512.png": "19b55b2fca3c9b04bb4b3e1a1d3a86de",
"icons/Icon-maskable-192.png": "71c16144271101e76e1db58226197931",
"icons/Icon-maskable-512.png": "19b55b2fca3c9b04bb4b3e1a1d3a86de",
"index.html": "f38c0c62b2207d88f843214e6da3f78f",
"/": "f38c0c62b2207d88f843214e6da3f78f",
"logo.png": "2177580f1ee205e1613ffe8f8d3194b5",
"main.dart.js": "b48d410b6f9d73a0c0066412eb4ad2e7",
"manifest.json": "248e196b6e31b571435ebe2e20289e49",
"version.json": "e609938dd3cdc5b19e6987a78e5e6451"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
