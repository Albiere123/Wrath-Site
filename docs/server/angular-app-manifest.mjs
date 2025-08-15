
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/inicio",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/suporte"
  },
  {
    "renderMode": 2,
    "route": "/inicio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 860, hash: '65997f78faf1f91c041c32c1309be10c8dcc21e7d83a504213287b04b072dbda', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1373, hash: '377964c998aa2b790dff5ffed516583a72204c3d28faab6cb99debbdeb4df731', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'suporte/index.html': {size: 2393, hash: '44e286d5052b07fcf1cb5051e95bf15fd48732bc61598ed9aa268016e8d37e13', text: () => import('./assets-chunks/suporte_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 8486, hash: '5ff1441f187fdec2593d63c0c0bc808aa892f007e64bcaf6ae9bf91c160a7777', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'styles.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
