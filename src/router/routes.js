
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'menu', component: () => import('pages/IndexPage.vue') },
      { path: 'servicos', component: () => import('pages/PageServicos.vue') },
      { path: 'agenda', component: () => import('pages/PageAgenda.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
