define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        endpoint: 'auth',
        configureEndpoints: ['auth', 'protected-api'],
        loginUrl: 'login',
        signupUrl: 'users',
        profileUrl: 'me',
        unlinkUrl: 'me/unlink',
        loginOnSignup: false,
        expiredRedirect: 1,
        providers: {
            google: {
                url: 'google',
                clientId: '239531536023-ibk10mb9p7ullsw4j55a61og5lvnjrff6.apps.googleusercontent.com'
            },
            facebook: {
                url: 'facebook',
                clientId: '1465278217541708498'
            }
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aENvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9hdXRoQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUE7c0JBQWU7UUFDWCxRQUFRLEVBQUUsTUFBTTtRQUNoQixrQkFBa0IsRUFBRSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUM7UUFDN0MsUUFBUSxFQUFFLE9BQU87UUFDakIsU0FBUyxFQUFFLE9BQU87UUFDbEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsZUFBZSxFQUFFLENBQUM7UUFDbEIsU0FBUyxFQUFFO1lBQ1AsTUFBTSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxRQUFRO2dCQUNiLFFBQVEsRUFBRSwyRUFBMkU7YUFDeEY7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLFVBQVU7Z0JBQ2YsUUFBUSxFQUFFLHFCQUFxQjthQUNsQztTQUNKO0tBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGVuZHBvaW50OiAnYXV0aCcsXHJcbiAgICBjb25maWd1cmVFbmRwb2ludHM6IFsnYXV0aCcsICdwcm90ZWN0ZWQtYXBpJ10sXHJcbiAgICBsb2dpblVybDogJ2xvZ2luJyxcclxuICAgIHNpZ251cFVybDogJ3VzZXJzJyxcclxuICAgIHByb2ZpbGVVcmw6ICdtZScsXHJcbiAgICB1bmxpbmtVcmw6ICdtZS91bmxpbmsnLFxyXG4gICAgbG9naW5PblNpZ251cDogZmFsc2UsXHJcbiAgICBleHBpcmVkUmVkaXJlY3Q6IDEsIC8vIHJlZGlyZWN0IHRvIGxvZ291dFJlZGlyZWN0IGFmdGVyIHRva2VuIGV4cGlyYXRpb25cclxuICAgIHByb3ZpZGVyczoge1xyXG4gICAgICAgIGdvb2dsZToge1xyXG4gICAgICAgICAgICB1cmw6ICdnb29nbGUnLFxyXG4gICAgICAgICAgICBjbGllbnRJZDogJzIzOTUzMTUzNjAyMy1pYmsxMG1iOXA3dWxsc3c0ajU1YTYxb2c1bHZuanJmZjYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWNlYm9vazoge1xyXG4gICAgICAgICAgICB1cmw6ICdmYWNlYm9vaycsXHJcbiAgICAgICAgICAgIGNsaWVudElkOiAnMTQ2NTI3ODIxNzU0MTcwODQ5OCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07Il19