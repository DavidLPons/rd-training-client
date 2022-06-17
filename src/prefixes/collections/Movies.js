const { query } = require("@simpleview/sv-graphql-client");

class Movies {

    constructor({ graphUrl, graphServer }) {
        this.name = "training";
        this._graphUrl = graphUrl;
        this._graphServer = graphServer;
    }

    async find({ fields, headers, context, filter }) {
        var aux = await query({
            query: `query ($filter: training_movies_find_filter){
                training {
                    movies_find(filter: $filter) {
                        ${fields}
                    }
                }
            }`,
            variables: {
                filter
            },
            url: this._graphUrl,
            headers,
            key: "data.data.training",
            clean: true
        });
        console.log("aux-> ", aux);
        return aux;
    }

    async insert({ fields, headers, context, filter }) {
        return await query({
            query: `mutation ($filter: [training_movies_insert_filter!]!){
                training {
                    movies_insert(filter: $filter) {
                       ${fields}
                    }
                }
            }`,
            variables: {
                filter
            },
            url: this._graphUrl,
            headers,
            key: "data.data.training",
            clean: true
        });
    }

    async remove({ fields, headers, context, filter }) {
        return await query({
            query: `mutation ($filter: training_movies_remove_filter){
                training {
                    movies_remove(filter: $filter) {
                        ${fields}
                    }
                }
            }`,
            variables: {
                filter
            },
            url: this._graphUrl,
            headers,
            key: "data.data.training",
            clean: true
        });
    }
}
module.exports = { Movies };