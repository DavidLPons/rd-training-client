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
        return Movies.movies_find({ fields, headers, context, filter });
    }
    async movies_insert({ fields, headers, context, filter }) {
        return Movies.movies_insert({ fields, headers, context, filter });
    }
    async movies_remove({ fields, headers, context, filter }) {
        return Movies.movies_remove({ fields, headers, context, filter });
    }

    async people_find({ fields, headers, context, filter }) {
        return Movies.people_find({ fields, headers, context, filter });
    }
    async people_insert({ fields, headers, context, filter }) {
        return Movies.people_insert({ fields, headers, context, filter });
    }
    async people_remove({ fields, headers, context, filter }) {
        return Movies.people_remove({ fields, headers, context, filter });
    }
}

module.exports = { TrainingPrefix };
