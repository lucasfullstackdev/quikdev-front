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
                path: "/app/genres",
                name: "genres",
                component: () => import('./../views/Genres/Genres.vue'),
                label: "Gêneros",
                inNav: true,
                children: [
                    {
                        path: "/app/genres/:id",
                        name: "genre",
                        component: () => import('./../views/Genres/Genre.vue'),
                        inNav: false
                    }
                ]
            },
        ]
    },


    { path: '', redirect: '/app' }
];
