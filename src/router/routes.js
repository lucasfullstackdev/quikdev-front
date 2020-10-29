export const customRoutes = [
    {
        path: "/app",
        name: 'app',
        component: () => import('./../views/App.vue'),
        children: [
            {
                path: '/app/movies',
                name: 'movies',
                component: () => import('./../views/Movies/Movies.vue')
            },
            {
                path: '/app/movies/:id',
                name: 'movie',
                component: () => import('./../views/Movies/Movie.vue')
            },
        ]
    },
    

    { path: '', redirect: '/app' }
];
