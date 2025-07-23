/**
 * Definición de rutas de la aplicación
 */
export const routes = [
  {
    path: '/',
    name: 'home',
    component: 'HomeView'
  },
  {
    path: '/project/:id',
    name: 'project-detail',
    component: 'ProjectDetailView'
  },
  {
    path: '*',
    name: 'not-found',
    component: 'NotFoundView'
  }
];
