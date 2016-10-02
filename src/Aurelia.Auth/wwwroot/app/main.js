define(["require", "exports", './authConfig', 'bootstrap'], function (require, exports, authConfig_1) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-api', function (configure) {
            configure
                .registerEndpoint('auth', 'https://myapi.org/auth')
                .registerEndpoint('protected-api', 'https://myapi.org/protected-api')
                .registerEndpoint('public-api', 'http://myapi.org/public-api')
                .setDefaultEndpoint('auth');
        })
            .plugin('aurelia-authentication', function (baseConfig) {
            baseConfig.configure(authConfig_1.default);
            alert('eccolo');
        });
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBSUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ04scUJBQXFCLEVBQUU7YUFDdkIsa0JBQWtCLEVBQUU7YUFFcEIsTUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFBLFNBQVM7WUFDNUIsU0FBUztpQkFDSixnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsd0JBQXdCLENBQUM7aUJBQ2xELGdCQUFnQixDQUFDLGVBQWUsRUFBRSxpQ0FBaUMsQ0FBQztpQkFDcEUsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLDZCQUE2QixDQUFDO2lCQUM3RCxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7YUFFRCxNQUFNLENBQUMsd0JBQXdCLEVBQUUsVUFBQSxVQUFVO1lBQ3hDLFVBQVUsQ0FBQyxTQUFTLENBQUMsb0JBQVUsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQVFQLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUF6QmUsaUJBQVMsWUF5QnhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgeyBBdXJlbGlhIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IGF1dGhDb25maWcgZnJvbSAnLi9hdXRoQ29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAgIC5kZXZlbG9wbWVudExvZ2dpbmcoKVxuICAgICAgLyogc2V0dXAgdGhlIGFwaSBlbmRwb2ludHMgZmlyc3QgKGlmIGRlc2lyZWQpICovXHJcbiAgICAgIC5wbHVnaW4oJ2F1cmVsaWEtYXBpJywgY29uZmlndXJlID0+IHtcclxuICAgICAgICAgIGNvbmZpZ3VyZVxyXG4gICAgICAgICAgICAgIC5yZWdpc3RlckVuZHBvaW50KCdhdXRoJywgJ2h0dHBzOi8vbXlhcGkub3JnL2F1dGgnKVxyXG4gICAgICAgICAgICAgIC5yZWdpc3RlckVuZHBvaW50KCdwcm90ZWN0ZWQtYXBpJywgJ2h0dHBzOi8vbXlhcGkub3JnL3Byb3RlY3RlZC1hcGknKVxyXG4gICAgICAgICAgICAgIC5yZWdpc3RlckVuZHBvaW50KCdwdWJsaWMtYXBpJywgJ2h0dHA6Ly9teWFwaS5vcmcvcHVibGljLWFwaScpXHJcbiAgICAgICAgICAgICAgLnNldERlZmF1bHRFbmRwb2ludCgnYXV0aCcpO1xyXG4gICAgICB9KVxyXG4gICAgICAvKiBjb25maWd1cmUgYXVyZWxpYS1hdXRoZW50aWNhdGlvbiAqL1xyXG4gICAgICAucGx1Z2luKCdhdXJlbGlhLWF1dGhlbnRpY2F0aW9uJywgYmFzZUNvbmZpZyA9PiB7XHJcbiAgICAgICAgICBiYXNlQ29uZmlnLmNvbmZpZ3VyZShhdXRoQ29uZmlnKTtcclxuICAgICAgICAgIGFsZXJ0KCdlY2NvbG8nKTtcclxuICAgICAgfSk7XG5cbiAgLy8gVW5jb21tZW50IHRoZSBsaW5lIGJlbG93IHRvIGVuYWJsZSBhbmltYXRpb24uXG4gIC8vIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS1hbmltYXRvci1jc3MnKTtcblxuICAvLyBBbnlvbmUgd2FudGluZyB0byB1c2UgSFRNTEltcG9ydHMgdG8gbG9hZCB2aWV3cywgd2lsbCBuZWVkIHRvIGluc3RhbGwgdGhlIGZvbGxvd2luZyBwbHVnaW4uXG4gIC8vIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS1odG1sLWltcG9ydC10ZW1wbGF0ZS1sb2FkZXInKVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdfQ==