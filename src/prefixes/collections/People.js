const { query } = require("@simpleview/sv-graphql-client");

class People {

    constructor({ graphUrl, graphServer }) {
        this.name = "training";
        this._graphUrl = graphUrl;
        this._graphServer = graphServer;
    }

    async find({ fields, headers, context, filter }) {

        const result = await query({
            query: `query ($filter: training_people_find_filter){
                training {
                    people_find(filter: $filter) {
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
        return result;
    }

    async insert(fields, headers, context, filter) {
        const result = await query({
            query: `mutation ($filter: [training_people_insert_filter!]!){
                training {
                    people_insert(filter: $filter) {
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
        return result;

    }

    async remove(fields, headers, context, filter) {
        const result = await query({
            query: `mutation ($filter: training_people_remove_filter){
                training {
                    people_remove(filter: $filter) {
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
        return result;

    }
}