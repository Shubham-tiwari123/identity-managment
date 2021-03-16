const UserRegistration = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'RegisterUser',
    type: 'object',
    properties: {
        _id: {type:'string'},
        did: {type:'string'},
        name: {type: 'string'},
        email: {type: 'string'},
        description: {type: 'string'},
        phoneNumber: {type: 'number'},
        location: {type: 'string'},
        website: {type: 'string'},
        birthdate: {type: 'string'},
        github: {type: 'string'},
        githubVerifiedStatus: {type: 'boolean'},
        twitter: {type: 'string'},
        twitterVerifiedStatus: {type: 'boolean'},
        employer: {type: 'string'},
        jobTitle: {type: 'string'}
    },
}

module.exports = UserRegistration
