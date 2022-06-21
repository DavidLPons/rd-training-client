const { Movies } = require('./collections/Movies')
const { People } = require('./collections/People')

class TrainingPrefix {
	constructor({ graphUrl, graphServer }) {
		this.name = "training";
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;

		this.movies = new Movies({ graphUrl, graphServer });
		this.people = new People({ graphUrl, graphServer });
	}
	async movies_find({ fields, headers, context, filter }) {
		return await this.movies.find({ fields, headers, context, filter });
	}
	async movies_insert({ fields, headers, context, filter }) {
		return await this.movies.insert({ fields, headers, context, filter });
	}
	async movies_remove({ fields, headers, context, filter }) {
		return await this.movies.remove({ fields, headers, context, filter });
	}

	async people_find({ fields, headers, context, filter }) {
		return await this.people.find({ fields, headers, context, filter });
	}
	async people_insert({ fields, headers, context, filter }) {
		return await this.people.insert({ fields, headers, context, filter });
	}
	async people_remove({ fields, headers, context, filter }) {
		return await this.people.remove({ fields, headers, context, filter });
	}

	async test_clear() {
		return await query({
			query: `mutation {
				training {
                    tests_clear {
                        
                    }
                }
            }`,
			url: this._graphUrl
		});
	}
	async test_setup({ filter }) {
		return await query({
			query: `mutation ($filter: [training_people_insert_filter!]!){
                training {
                    tests_insert(filter: $filter) {
                        
                    }
                }
            }`,
			variables: {
				filter
			},
			url: this._graphUrl
		});

	}
}

module.exports = { TrainingPrefix };
