import HomePage from '../pages/Home/Home';
import ArtistPage from '../pages/Artist/Artist';

export interface MenuList {
    link: string;
    label: string;
    activated ?: boolean;
    icon ?: string;
    component ?: any;
}

const listMenu: MenuList[] = [
    { link: '/home', label: 'Home', icon: 'home', component: HomePage },
    { link: 'buscar', label: 'Buscar', icon: 'search' },
    { link: 'biblioteca', label: 'Sua Biblioteca', icon: 'library_music' }
];

const navigationCategories: MenuList[] = [
    { link:  '/home', label: 'Em Destaque' },
    { link:  '/podcasts', label: 'Podcasts' },
    { link:  '/generos', label: 'Gêneros' },
    { link:  '/lancamentos', label: 'Lançamentos' },
    { link:  '/Descobrir', label: 'Descobrir' }
];

// Rotas da Aplicação
const RoutesAplication = [ 
    ...listMenu,
    { link: '/artist/', label: 'Artist', component: ArtistPage }
]

export { RoutesAplication, listMenu, navigationCategories }