
const SENSITIVE_REOURCE_GROUPS = [
    {
        method: 'POST', 
        resource: 'threadsBrodcastText',
        group: 'CREATE_THREAD',
        rotateOnStepDown: true 
    },
    {
        method: 'POST', 
        resource: 'threadsBrodcastShare', 
        group: 'CREATE_THREAD',
        rotateOnStepDown: true 
    },
    {
        method: 'POST', 
        resource: 'threadsBrodcastPhoto', 
        group: 'CREATE_THREAD',
        rotateOnStepDown: true 
    },
    {
        method: 'POST', 
        resource: 'follow', 
        group: 'CREATE_RELATIONSHIP'
    },
    {
        method: 'POST', 
        resource: 'unfollow', 
        group: 'DESTROY_RELATIONSHIP'
    },
    {
        method: 'POST', 
        resource: 'comment', 
        group: 'CREATE_COMMENT'
    },
    {
        method: 'POST', 
        resource: 'like', 
        group: 'CREATE_LIKE'
    },
    {
        method: 'POST', 
        resource: 'mediaConfigure', 
        group: 'CREATE_MEDIA'
    },
    {
        method: 'POST', 
        resource: 'registration', 
        group: 'REGISTRATION'
    }
]

module.exports = SENSITIVE_REOURCE_GROUPS;