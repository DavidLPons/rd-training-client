const { query } = require("@simpleview/sv-graphql-client");

class Movies {
	constructor({ graphUrl, graphServer }) {
		this.name = "training";
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}

	async find({ fields, headers, context, filter }) {
		return await query({
			query: `
				query ($filter: training_movies_find_filter){
					training {
						movies_find(filter: $filter) {
							${fields}
						}
					}
				}
			`,
			variables: { filter },
			url: this._graphUrl,
			headers,
			key: "training.movies_find",
			clean: true
		});
	}

	async insert({ fields, headers, context, input }) {
		return await query({
			query: `
				mutation ($input: [training_movies_insert_filter!]!){
					training {
						movies_insert(input: $input) {
							${fields}
						}
					}
				}
			`,
			variables: { input },
			url: this._graphUrl,
			headers,
			key: "training.movies_insert",
			clean: true
		});
	}

	async remove({ fields, headers, context, input }) {
		return await query({
			query: `
				mutation ($input: training_movies_remove_filter){
					training {
						movies_remove(input: $input) {
							${fields}
						}
					}
				}
			`,
			variables: { input },
			url: this._graphUrl,
			headers,
			key: "training.movies_remove",
			clean: true
		});
	}
}

module.exports = { Movies };