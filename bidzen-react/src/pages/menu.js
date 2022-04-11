const menus = [
    {
        id: 1,
        name: 'Home',
        namesub: [
            {
                id: 1,
                sub: 'Home',
                links: '/'
            },
            {
                id: 2,
                sub: 'Login',
                links: '/login'
            },
            {
                id: 3,
                sub: 'Register',
                links: '/register'
            },
        ]
    },
    {
        id: 2,
        name: 'Shop',
        namesub: [
            {
                id: 1,
                sub: 'Cards',
                links: '/explore-01'
            },
            {
                id: 2,
                sub: 'Gems',
                links: '/explore-02'
            },
            /* {
                id: 3,
                sub: 'Creator',
                links: '/creator'
            },
            {
                id: 4,
                sub: 'Item',
                links: '/item'
            },
            {
                id: 5,
                sub: 'Item Details',
                links: '/item-details'
            }, */
            
        ],
    },
    {
        id: 3,
        name: 'Cards',
        namesub: [
            {
                id: 1,
                sub: 'My Cards',
                links: '/blog'
            },
            {
                id: 2,
                sub: 'Cards Store',
                links: '/blog-details'
            },
        ],
    },
    {
        id: 4,
        name: 'Gems',
        namesub: [
            {
                id: 1,
                sub: 'My Gems',
                links: '/authors'
            },
            {
                id: 2,
                sub: 'Gems packages ',
                links: '/connect-wallet'
            },
            /* {
                id: 3,
                sub: 'Create Item',
                links: '/create-item'
            },
            {
                id: 4,
                sub: 'Login',
                links: '/login'
            },
            {
                id: 5,
                sub: 'Register',
                links: '/register'
            }, */
        ],
    },
    
    
]

export default menus;