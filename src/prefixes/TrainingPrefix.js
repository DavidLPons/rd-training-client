const { Movies } = require("./collections/Movies")
const { People } = require("./collections/People")
const { query } = require("@simpleview/sv-graphql-client");


class TrainingPrefix {
	constructor({ graphUrl, graphServer }) {
		this.name = "training";
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;

		this.movies = new Movies({ graphUrl, graphServer });
		this.people = new People({ graphUrl, graphServer });
	}

	async test_clear() {
		return await query({
			query: `
				mutation {
					training {
						tests_clear {
							success,
							message
						}
					}
				}
			`,
			url: this._graphUrl
		});
	}

	async test_setup() {
		return await query({
			query: `
				mutation{
					training {
						tests_setup {
							success,
							message
						}
					}
				}
			`,
			url: this._graphUrl
		});
	}
}

module.exports = { TrainingPrefix };