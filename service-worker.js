/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c16ef16a61326340407f9891eec78be2"
  },
  {
    "url": "assets/css/0.styles.f215ba3e.css",
    "revision": "d368469d0bc41a3326dbe7a103ce27ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.25a67af1.js",
    "revision": "3d2d5e3daf4186cadacc4bba382a4e1e"
  },
  {
    "url": "assets/js/10.fb919f93.js",
    "revision": "51597a7f287109a4c829abff17278bbf"
  },
  {
    "url": "assets/js/11.52cf10e0.js",
    "revision": "f4538393d1d614ce205976df666b6f27"
  },
  {
    "url": "assets/js/12.ae115e72.js",
    "revision": "286d14664b37b6c045b001e4a9c38a88"
  },
  {
    "url": "assets/js/13.a9f17132.js",
    "revision": "4eb3ff7fe3b03d750a7f24ec371d0f4d"
  },
  {
    "url": "assets/js/14.0467a0cb.js",
    "revision": "4f7992e3ce4556af3442b358f4a3b43d"
  },
  {
    "url": "assets/js/15.1ffe0529.js",
    "revision": "bad78b69dfad519e08e4d475741fe7b6"
  },
  {
    "url": "assets/js/16.fb40166e.js",
    "revision": "55a30ba4f461675c372034b6f00a79a9"
  },
  {
    "url": "assets/js/17.24c17daa.js",
    "revision": "87cb663af29f796b79b01413c25136c4"
  },
  {
    "url": "assets/js/18.e778f005.js",
    "revision": "a5dabee723dcffba517f37fad466eebb"
  },
  {
    "url": "assets/js/19.caf246d2.js",
    "revision": "99874c36ae0ac4a0b25b64fca385fa40"
  },
  {
    "url": "assets/js/2.d6f3f833.js",
    "revision": "8876a614819320c0f4900a29a521b8c3"
  },
  {
    "url": "assets/js/20.0156e043.js",
    "revision": "acfc0da18fe6cde498ea7cb7a44031cd"
  },
  {
    "url": "assets/js/21.99ce1862.js",
    "revision": "5a7d4136602b21ec268f78f578881e94"
  },
  {
    "url": "assets/js/22.0b868ac0.js",
    "revision": "af28750ba184966ab9c2ff6164f196f8"
  },
  {
    "url": "assets/js/23.7f9906a4.js",
    "revision": "43ff29f77edc893679f7b3642ad0e7f5"
  },
  {
    "url": "assets/js/24.466cb42f.js",
    "revision": "86298f8b08917ca7abe392f7da633e05"
  },
  {
    "url": "assets/js/25.023d77c9.js",
    "revision": "77607c268c05636baa71e5cd9542357c"
  },
  {
    "url": "assets/js/26.c3c2d762.js",
    "revision": "0213803c42ee035577343a499939858d"
  },
  {
    "url": "assets/js/27.e0a4dad0.js",
    "revision": "eb47cd9fe3407b00a18699602d571b78"
  },
  {
    "url": "assets/js/28.b515ff38.js",
    "revision": "9d0e0a18e22a7da13f896991f9c853b1"
  },
  {
    "url": "assets/js/29.45c58dee.js",
    "revision": "399ef4d3044c3b81091d5e386376354a"
  },
  {
    "url": "assets/js/3.e590bb49.js",
    "revision": "45524cf88c3df7507edac7e0e9cc51f5"
  },
  {
    "url": "assets/js/30.6424378a.js",
    "revision": "07b3c01f70bc12eb65b0551df10855cb"
  },
  {
    "url": "assets/js/31.47cec15d.js",
    "revision": "734f796bcaace84bf969c9ba4a4f4aff"
  },
  {
    "url": "assets/js/32.3c5395a2.js",
    "revision": "731ee7d2a2e1f15f5d7315ff3122c49d"
  },
  {
    "url": "assets/js/33.38af4ce2.js",
    "revision": "b3c32f57cb0a2cdf3d627bb022f6cd8b"
  },
  {
    "url": "assets/js/34.8b79e8b7.js",
    "revision": "aa8544c999c29659f07d4ea6b424fb20"
  },
  {
    "url": "assets/js/35.3be83656.js",
    "revision": "ae665880edf9992dab7673956c10579f"
  },
  {
    "url": "assets/js/36.f106f69d.js",
    "revision": "352b9d4dc9e322429965c9d3cf3dc3e3"
  },
  {
    "url": "assets/js/37.9b7e3297.js",
    "revision": "00f28def52f9dfbc47090189d963fd81"
  },
  {
    "url": "assets/js/38.0559500d.js",
    "revision": "6ad203536cfb717a45a3e7a706e973f5"
  },
  {
    "url": "assets/js/39.e51b23e3.js",
    "revision": "60767e5cb3c43337b278649ff4ebf0ff"
  },
  {
    "url": "assets/js/4.3f9d2a85.js",
    "revision": "0e8ebdb4235c69b1926fbe379c615217"
  },
  {
    "url": "assets/js/40.c031d0db.js",
    "revision": "dbf6b4c6d35b765112e6cda698d4740c"
  },
  {
    "url": "assets/js/41.221f2e7b.js",
    "revision": "5da02e51842e2378314ef1b1f47e82cb"
  },
  {
    "url": "assets/js/42.453ddf8f.js",
    "revision": "ebe8dd4c010958bf42c627f09dc721b9"
  },
  {
    "url": "assets/js/43.d8cff1db.js",
    "revision": "39a69ebf9518dfc214dd90cb12869662"
  },
  {
    "url": "assets/js/44.59454faa.js",
    "revision": "7844ee615e7c705cee4c1ede25e07dca"
  },
  {
    "url": "assets/js/45.da017711.js",
    "revision": "1845d87d01108e4a7be49ddc05560f7a"
  },
  {
    "url": "assets/js/46.6e391b4d.js",
    "revision": "28c7750547e05f703b439f422b252c38"
  },
  {
    "url": "assets/js/47.7d1144af.js",
    "revision": "3cf4576b12a83743b2da9500adb10787"
  },
  {
    "url": "assets/js/48.da626771.js",
    "revision": "df2700c1c6b4314f3a25196756fd2701"
  },
  {
    "url": "assets/js/49.fc2684cb.js",
    "revision": "93d2fc8de7ec40bcf2325bdc91b87716"
  },
  {
    "url": "assets/js/5.c7cb9d27.js",
    "revision": "6946fde7b533853614c9ec664b168044"
  },
  {
    "url": "assets/js/50.13ac3a08.js",
    "revision": "70dfe0ffd802156b90fb0dad65180091"
  },
  {
    "url": "assets/js/51.675cc117.js",
    "revision": "079ea0625f529b36bdbd9b60d3896c6c"
  },
  {
    "url": "assets/js/52.fd04e7e6.js",
    "revision": "7ae2f5b05794c2dbd479bef99f9a169c"
  },
  {
    "url": "assets/js/53.abc4fe68.js",
    "revision": "d222c3f4c290b98a3a4f2c9a43f4da23"
  },
  {
    "url": "assets/js/54.5629a31d.js",
    "revision": "bdc1daa533a4a62fa5b32495b60304c2"
  },
  {
    "url": "assets/js/55.57a2777c.js",
    "revision": "cde16b28e225f8a38b96991281a1a86e"
  },
  {
    "url": "assets/js/56.6253d710.js",
    "revision": "1e0a48df00cc6b6f433f7c0afa1f9f76"
  },
  {
    "url": "assets/js/57.c49f6d47.js",
    "revision": "41ef1f69a7cb7ed81cac24d425b0d0b3"
  },
  {
    "url": "assets/js/58.980687dd.js",
    "revision": "14c780f4425920bf8f5afac98b09155b"
  },
  {
    "url": "assets/js/59.df5d027b.js",
    "revision": "b5b7a0ac43c0fff4de69559a7a5918c0"
  },
  {
    "url": "assets/js/6.0be4e157.js",
    "revision": "40e71cdc62c687fddbd23b61a8b52437"
  },
  {
    "url": "assets/js/60.0a9b722b.js",
    "revision": "490f3f8391e8251fd2904cb4348507c6"
  },
  {
    "url": "assets/js/61.bcf61a4e.js",
    "revision": "4b24fc472daee7e5519d14aa5b833404"
  },
  {
    "url": "assets/js/62.eeb015e0.js",
    "revision": "94582e4c19e4223ebdffebcf9d7709d1"
  },
  {
    "url": "assets/js/63.1db848ba.js",
    "revision": "690c030e70202375bf3b7108ef2d239b"
  },
  {
    "url": "assets/js/64.4c2277f1.js",
    "revision": "007b97ebff081c7203d96d4af451fa7c"
  },
  {
    "url": "assets/js/65.8aa0fd8f.js",
    "revision": "645f69ed33f8378dfb718c46a40edb4b"
  },
  {
    "url": "assets/js/66.caca2551.js",
    "revision": "047ba2553dac6790fe5ddf13da7c62e1"
  },
  {
    "url": "assets/js/67.0e6820d5.js",
    "revision": "46df62a63a6cf44b3a498888aa10548e"
  },
  {
    "url": "assets/js/68.0b60d082.js",
    "revision": "9a207e694ae5aed9897a8f62adaa4ce2"
  },
  {
    "url": "assets/js/7.94bf6868.js",
    "revision": "9050b93df1abc13e95170de10d31a3f3"
  },
  {
    "url": "assets/js/app.38feeafb.js",
    "revision": "7ef820600aabfc724a320de387e22e07"
  },
  {
    "url": "assets/js/vendors~docsearch.d3844009.js",
    "revision": "35736f6febdf8d4b98599806c297b51c"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "e212fafc5463b897ef7f4539c448da9e"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "4db854a7b87c24ad0b3e7a39e27f642c"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "108ae9e114882817f5424a5a500e3237"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "a33573823eaf4552406f0456837154ab"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "6d5357ba4474e67bde836ba42f0eedc4"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "88b5cc6a08df0e66e76db4cba9e11f95"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "e6b7a1002a6bf931e7d133f665dd406a"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "0c633414c499811c9ada70131f64b572"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "a34da53e5de5c3d745997d4ea40248b2"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "2f7ed9842ab985f569481d5860ac3029"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "69bc9193577c79c7a2212ccb245447c3"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "cd6975938b7007b1fe8a7f549e2afa68"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "be3ef9cb11b78bc88b84285216d02c2c"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "893279eec03d9938bd8dace411bc797b"
  },
  {
    "url": "base/practice/1.index.html",
    "revision": "11ea1d5c76fd9434d3c8dd676b6f212d"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "3f7872e15579e50e6a5d5c31ba317e93"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "7b10b7e91d62137b5060c8f137619f13"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "b46da20dbc6da318e68283314faef883"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "42d32efb0168d92d3ffb03b5721428a3"
  },
  {
    "url": "base/practice/test.html",
    "revision": "76800198f3521a7027c3d541e14f3a4a"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "11d8f4497f50b18bd262b130a47378bc"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "fd1390997aa6e9c123bc20f75fd7cfd2"
  },
  {
    "url": "senior/typeScript/1.index.html",
    "revision": "56c734c05e117723d6586533e2b50113"
  },
  {
    "url": "senior/typeScript/1.recursionAndDynamics.html",
    "revision": "267244c8512c41ab5b389fe882628525"
  },
  {
    "url": "senior/typeScript/10.table.html",
    "revision": "5dba21dcb1d1575ad80a85552e9ee16b"
  },
  {
    "url": "senior/typeScript/11.tree.html",
    "revision": "2704f6da5d7ff0021c7d7e00ee65b340"
  },
  {
    "url": "senior/typeScript/2.extend.html",
    "revision": "ac600fcae0a5bd102ccf0fe6f040eb54"
  },
  {
    "url": "senior/typeScript/3.componentCommunication.html",
    "revision": "518ffd41fa6e9e8853dc7fcd774186f7"
  },
  {
    "url": "senior/typeScript/4.render.html",
    "revision": "8ed4a3ea48b1aacb0ba9b7bfa7e8500a"
  },
  {
    "url": "senior/typeScript/5.api.html",
    "revision": "d465cf94e31a5817cf105cb2266221b8"
  },
  {
    "url": "senior/typeScript/6.form.html",
    "revision": "c88288c8a361f7ae97666f58596f2709"
  },
  {
    "url": "senior/typeScript/7.checkBox.html",
    "revision": "0d6fa6219732b83daa1be3796f702b20"
  },
  {
    "url": "senior/typeScript/8.active.html",
    "revision": "ba21b4796e3a20f18e4cb035cf64a48c"
  },
  {
    "url": "senior/typeScript/9.alert.html",
    "revision": "9d76ca7f86165d61fe3c09871bda0e28"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "c6830839c2ebb8fadc222235e8cb7c32"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "b724a8f47b6b371dd9a8f06a652ca7bf"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "f44c1a9d67186637a7bf92692dd65edd"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "9c06108511584aadb12eec594bab14d9"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "e7565e386293497f6d5621059b0ec866"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "20a5261b9edbe2e6e84783408e601986"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "9464dc3f8353931f2464fa31387bea4a"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "3edb2c607abcb320347cf398ffd4d29c"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "00ddf2aabddc3ba6bfb42b6161da924b"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "45d521b3d41f460c7c50b3b46c98082f"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "9c0ccb6d8a215f4121a2f43092af2a2e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
