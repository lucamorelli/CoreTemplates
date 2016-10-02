define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        endpoint: 'connect',
        configureEndpoints: ['connect', 'protected-api'],
        loginUrl: '/token',
        signupUrl: 'users',
        profileUrl: '/userinfo',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aENvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9hdXRoQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUE7c0JBQWU7UUFDWCxRQUFRLEVBQUUsU0FBUztRQUNuQixrQkFBa0IsRUFBRSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7UUFDaEQsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsVUFBVSxFQUFFLFdBQVc7UUFDdkIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsZUFBZSxFQUFFLENBQUM7UUFDbEIsU0FBUyxFQUFFO1lBQ1AsTUFBTSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxRQUFRO2dCQUNiLFFBQVEsRUFBRSwyRUFBMkU7YUFDeEY7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLFVBQVU7Z0JBQ2YsUUFBUSxFQUFFLHFCQUFxQjthQUNsQztTQUNKO0tBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGVuZHBvaW50OiAnY29ubmVjdCcsIC8vJ2F1dGgnLFxyXG4gICAgY29uZmlndXJlRW5kcG9pbnRzOiBbJ2Nvbm5lY3QnLCAncHJvdGVjdGVkLWFwaSddLFxyXG4gICAgbG9naW5Vcmw6ICcvdG9rZW4nLCAvLydsb2dpbicsXHJcbiAgICBzaWdudXBVcmw6ICd1c2VycycsXHJcbiAgICBwcm9maWxlVXJsOiAnL3VzZXJpbmZvJywgLy8nbWUnLFxyXG4gICAgdW5saW5rVXJsOiAnbWUvdW5saW5rJyxcclxuICAgIGxvZ2luT25TaWdudXA6IGZhbHNlLFxyXG4gICAgZXhwaXJlZFJlZGlyZWN0OiAxLCAvLyByZWRpcmVjdCB0byBsb2dvdXRSZWRpcmVjdCBhZnRlciB0b2tlbiBleHBpcmF0aW9uXHJcbiAgICBwcm92aWRlcnM6IHtcclxuICAgICAgICBnb29nbGU6IHtcclxuICAgICAgICAgICAgdXJsOiAnZ29vZ2xlJyxcclxuICAgICAgICAgICAgY2xpZW50SWQ6ICcyMzk1MzE1MzYwMjMtaWJrMTBtYjlwN3VsbHN3NGo1NWE2MW9nNWx2bmpyZmY2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFjZWJvb2s6IHtcclxuICAgICAgICAgICAgdXJsOiAnZmFjZWJvb2snLFxyXG4gICAgICAgICAgICBjbGllbnRJZDogJzE0NjUyNzgyMTc1NDE3MDg0OTgnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyJdfQ==