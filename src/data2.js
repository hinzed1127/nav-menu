const menus = {
    '0': {
        parentId: null,
        header: 'Main Menu',
        items: [
            {
                name: 'Products',
                listId: '1',
                href: null
            },
            {
                name: 'Brands',
                listId: null,
                href: 'https://google.com' // or some other link
            },
            {
                name: 'Something else',
                listId: '2',
                href: null
            }
        ]
    },
    '1': {
        parentId: '0',
        header: 'Products',
        items: [
            {
                name: 'TVs',
                listId: null, // TODO change this to another list after MVP,
                href: null
            },
            {
                name: 'Appliances',
                listId: null,
                href: null
            }
        ]
    },
    '2': {
        parentId: '0',
        header: 'Something else',
        items: [
            {
                name: 'Some item',
                listId: null,
                href: null
            }
        ]
    }
}

module.exports = menus;