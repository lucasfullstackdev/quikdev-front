export const customRoutes = [
    {
        path: "/app",
        name: 'app',
        component: () => import('./../views/App.vue'),
        inNav: false,
        children: [
            {
                path: '/app/movies',
                name: 'movies',
                component: () => import('./../views/Movies/Movies.vue'),
                label: "Filmes",
                inNav: true
            },
            {
                path: '/app/movies/:id',
                name: 'movie',
                component: () => import('./../views/Movies/Movie.vue')
            },
            {
                path: "/app/categories",
                name: "categories",
                component: () => import('./../views/Categories/Categories.vue'),
                label: "Categorias",
                inNav: true,
            },
        ]
    },


    { path: '', redirect: '/app' }
];
