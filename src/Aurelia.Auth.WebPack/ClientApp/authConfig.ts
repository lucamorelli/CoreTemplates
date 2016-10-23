export default {
    endpoint: 'connect', //'auth',
    configureEndpoints: ['connect', 'protected-api'],
    loginUrl: '/token', //'login',
    signupUrl: 'users',
    profileUrl: '/userinfo', //'me',
    unlinkUrl: 'me/unlink',
    loginOnSignup: false,
    expiredRedirect: 1 // redirect to logoutRedirect after token expiration
};