const originalData = {
  header: {
    globalNavigation: [
      {
        displayName: "Products",
        styleId: "productsMenu",
        childNodes: [
          {
            displayName: "Amazon Fire TV Cube",
            childNodes: [],
            link: {
              url: "something",
              lid: "something else"
            },
          },
          {
            displayName: "Appliances",
            childNodes: []
          }
        ],
      },
      {
        displayName: "Brands",
        childNodes: [],
      }
    ]
  }
};

const data = {
    topMenu: {

    }
}

// menuId: [itemId1, itemId2, 3, .... ]
const menus = {
    "1": [3, 4, 5],
    "2": [6, 7, 8],
};

module.exports = originalData;