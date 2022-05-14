// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
    api.loadSource(({addCollection}) => {
        // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    })
    api.afterBuild(({redirects}) => {
        for (const rule of redirects) {
            rule.from = '/character-sheets/:id';
            rule.to = '/character-sheets/_id_d_plus.html';
            rule.status = 200;
        }
    })
    api.createPages(({createPage}) => {
        createPage({
            path: '/character-sheet/:id(\\d+)',
            component: './src/templates/CharacterSheet.vue'
        })
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })
}
