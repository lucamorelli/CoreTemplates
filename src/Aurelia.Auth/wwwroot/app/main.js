define(["require", "exports", './authConfig', 'bootstrap'], function (require, exports, authConfig_1) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-api', function (configure) {
            configure.registerEndpoint('connect', 'connect', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .registerEndpoint('protected-api', 'api');
        })
            .plugin('aurelia-authentication', function (baseConfig) {
            baseConfig.configure(authConfig_1.default);
        });
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBSUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ04scUJBQXFCLEVBQUU7YUFDdkIsa0JBQWtCLEVBQUU7YUFFcEIsTUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFBLFNBQVM7WUFDNUIsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUUsRUFBRSxDQUFDO2lCQUVqSCxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDO2FBRUQsTUFBTSxDQUFDLHdCQUF3QixFQUFFLFVBQUEsVUFBVTtZQUN4QyxVQUFVLENBQUMsU0FBUyxDQUFDLG9CQUFVLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQVFQLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUF0QmUsaUJBQVMsWUFzQnhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEF1cmVsaWEgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCBhdXRoQ29uZmlnIGZyb20gJy4vYXV0aENvbmZpZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcclxuICBhdXJlbGlhLnVzZVxyXG4gICAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgICAgLmRldmVsb3BtZW50TG9nZ2luZygpXHJcbiAgICAgIC8qIHNldHVwIHRoZSBhcGkgZW5kcG9pbnRzIGZpcnN0IChpZiBkZXNpcmVkKSAqL1xyXG4gICAgICAucGx1Z2luKCdhdXJlbGlhLWFwaScsIGNvbmZpZ3VyZSA9PiB7XHJcbiAgICAgICAgICBjb25maWd1cmUucmVnaXN0ZXJFbmRwb2ludCgnY29ubmVjdCcsICdjb25uZWN0JywgeyBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9IH0pXHJcbiAgICAgICAgICAgICAgLy8gICAgLnJlZ2lzdGVyRW5kcG9pbnQoJ2F1dGgnLCAnaHR0cHM6Ly9teWFwaS5vcmcvYXV0aCcpXHJcbiAgICAgICAgICAgICAgLnJlZ2lzdGVyRW5kcG9pbnQoJ3Byb3RlY3RlZC1hcGknLCAnYXBpJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC8qIGNvbmZpZ3VyZSBhdXJlbGlhLWF1dGhlbnRpY2F0aW9uICovXHJcbiAgICAgIC5wbHVnaW4oJ2F1cmVsaWEtYXV0aGVudGljYXRpb24nLCBiYXNlQ29uZmlnID0+IHtcclxuICAgICAgICAgIGJhc2VDb25maWcuY29uZmlndXJlKGF1dGhDb25maWcpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgLy8gVW5jb21tZW50IHRoZSBsaW5lIGJlbG93IHRvIGVuYWJsZSBhbmltYXRpb24uXHJcbiAgLy8gYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLWFuaW1hdG9yLWNzcycpO1xyXG5cclxuICAvLyBBbnlvbmUgd2FudGluZyB0byB1c2UgSFRNTEltcG9ydHMgdG8gbG9hZCB2aWV3cywgd2lsbCBuZWVkIHRvIGluc3RhbGwgdGhlIGZvbGxvd2luZyBwbHVnaW4uXHJcbiAgLy8gYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLWh0bWwtaW1wb3J0LXRlbXBsYXRlLWxvYWRlcicpXHJcblxyXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcclxufVxyXG4iXX0=