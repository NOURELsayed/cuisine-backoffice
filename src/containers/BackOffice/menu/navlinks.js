const MasterData = {

    name: 'MasterData',
    list: [
        {
            name: 'Sales Items',
            iconName: 'building',
            path: "",
            sub: [
                { name: 'Preparation Types', path: '/preptype' },
                { name: 'Custom Menus', path: '/custommenu' },
                { name: 'Base Sales Categories', path: '/basesale' },
                { name: 'Sales Items', path: '/Home' },
                { name: 'Modifiers Groups', path: '/Home' },
                { name: 'Screen Groups', path: '/Home' },
                { name: 'Price By Location', path: '/Home' },
                { name: 'Barcodes', path: '/Home' },

            ]
        },
        {
            name: 'Stock Items',
            iconName: 'comment-alt',
            path: "/home",
            sub: ''
        },
        {
            name: 'Financials',
            iconName: 'comment-alt',
            path: "/home",
            sub: ''
        },
        {
            name: 'Parties',
            iconName: 'building',
            path: "/home",
            sub: ''
        }
    ]

}

const Dashboard = {

    name: 'Dashboard',
    list: [
        {
            name: 'Sale Items',
            iconName: 'building',
            path: "",
            sub: [
                { name: 'Home', path: '/home' },
                { name: 'Base Sale', path: '/basesale' },
                { name: 'Custom Menu', path: '/custommenu' },
                { name: 'Prep Type', path: '/preptype' }]
        },
    ]
}


// const MasterData = {

//     name: 'Master Data',
//     list: [
//         {
//             name: 'Floor Planner',
//             iconName: 'calendar-plus',
//             path: "",
//             sub: [
//                 { name: 'Floor', path: '/floor' },
//                 { name: 'Zone', path: '/zone' },
              
//             ]
//         },
//         {
//             name: 'FP Groups',
//             iconName: 'check-circle',
//             path: "",
//             sub: [
//                 { name: 'Home', path: '/home' },
//                 { name: 'Base Sale', path: '/basesale' },
//                 { name: 'Custom Menu', path: '/custommenu' },
//                 { name: 'Prep Type', path: '/preptype' }]
//         },
//     ]
// }

const Utilities = {

    name: 'Utilities',
    list: [
        {
            name: 'Dashboard utilites',
            iconName: 'building',
            path: "",
            sub: [
                { name: 'Home', path: '/home' },
                { name: 'Base Sale', path: '/basesale' },
                { name: 'Custom Menu', path: '/custommenu' },
                { name: 'Prep Type', path: '/preptype' }]
        },
    ]
}




export const menuList = {
    MasterData,
    Dashboard,
    Utilities
    
}