export const customRoutes = [
    {
        path: '/movies',
        name: 'movies',
        component: () => import('./../views/Movies.vue')
    },
    {
        path: '/movies/:id',
        name: 'movie',
        component: () => import('./../views/Movie.vue')
    },
    { path: '', redirect: '/movies' }
];
