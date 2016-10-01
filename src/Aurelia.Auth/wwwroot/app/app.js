define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
                { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBQUE7UUFhQSxDQUFDO1FBVlEsNkJBQWUsR0FBdEIsVUFBdUIsTUFBMkIsRUFBRSxNQUFjO1lBQ2hFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBTyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtnQkFDdkcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFVLElBQUksRUFBRSxPQUFPLEVBQVMsUUFBUSxFQUFFLE9BQU8sRUFBUyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7Z0JBQzVHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRyxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFO2FBQzdHLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFDSCxVQUFDO0lBQUQsQ0FBQyxBQWJELElBYUM7SUFiWSxXQUFHLE1BYWYsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG5cbiAgcHVibGljIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCAnd2VsY29tZSddLCBuYW1lOiAnd2VsY29tZScsICAgICAgbW9kdWxlSWQ6ICd3ZWxjb21lJywgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnV2VsY29tZScgfSxcbiAgICAgIHsgcm91dGU6ICd1c2VycycsICAgICAgICAgbmFtZTogJ3VzZXJzJywgICAgICAgIG1vZHVsZUlkOiAndXNlcnMnLCAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ0dpdGh1YiBVc2VycycgfSxcbiAgICAgIHsgcm91dGU6ICdjaGlsZC1yb3V0ZXInLCAgbmFtZTogJ2NoaWxkLXJvdXRlcicsIG1vZHVsZUlkOiAnY2hpbGQtcm91dGVyJywgbmF2OiB0cnVlLCB0aXRsZTogJ0NoaWxkIFJvdXRlcicgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdfQ==