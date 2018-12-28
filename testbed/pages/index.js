export default [
  {path: '/', component: () => import('./entry.dev.vue')},
  {path: '/entry', component: () => import('./entry.vue')},
  {path: '/less', component: () => import('./less.vue')},
  {path: '/js', component: () => import('./js.vue')},
  {
    path: '/docs',
    component: () => import('./docs/entry.vue'),
    children: [
      {path: 'install', component: () => import('./docs/install.vue')},
      {path: 'tween', component: () => import('./docs/tween.vue')},
      {path: 'chain', component: () => import('./docs/chain.vue')},
      {path: 'composite', component: () => import('./docs/composite.vue')},
      {path: 'curve/bezier', component: () => import('./docs/curve/bezier.vue')},
      {path: 'curve/cubic-bezier', component: () => import('./docs/curve/bezier.cubic.vue')},
      {path: 'curve/catmull-rom', component: () => import('./docs/curve/catmull-rom.vue')},
      {path: 'less/breathe', component: () => import('./docs/less/breathe.vue')},
      {path: 'less/fade-in', component: () => import('./docs/less/fade-in.vue')},
      {path: 'less/fade-out', component: () => import('./docs/less/fade-out.vue')},
      {path: 'less/jump', component: () => import('./docs/less/jump.vue')},
      {path: 'less/tada', component: () => import('./docs/less/tada.vue')}
    ]
  },
  {
    path: '/examples',
    component: () => import('./examples/entry.vue'),
    children: [
      {path: 'tween', component: () => import('./examples/tween.vue')},
      {path: 'bezier', component: () => import('./examples/bezier.vue')},
      {path: 'cubic-bezier', component: () => import('./examples/bezier.cubic.vue')},
      {path: 'catmull-rom', component: () => import('./examples/catmull-rom.vue')},
      {path: 'chain', component: () => import('./examples/chain.vue')},
      {path: 'composite', component: () => import('./examples/composite.vue')}
    ]
  }
]