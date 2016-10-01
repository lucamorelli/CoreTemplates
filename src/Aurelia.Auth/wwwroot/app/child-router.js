define(["require", "exports"], function (require, exports) {
    "use strict";
    var ChildRouter = (function () {
        function ChildRouter() {
            this.heading = 'Child Router';
        }
        ChildRouter.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
                { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
            ]);
            this.router = router;
        };
        return ChildRouter;
    }());
    exports.ChildRouter = ChildRouter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGQtcm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2NoaWxkLXJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBQUE7WUFDUyxZQUFPLEdBQUcsY0FBYyxDQUFDO1FBWWxDLENBQUM7UUFUUSxxQ0FBZSxHQUF0QixVQUF1QixNQUEyQixFQUFFLE1BQWM7WUFDaEUsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFRLFFBQVEsRUFBRSxTQUFTLEVBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUN6RyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBVSxRQUFRLEVBQUUsT0FBTyxFQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtnQkFDOUcsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLElBQUksRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGNBQWMsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7YUFDL0csQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUNILGtCQUFDO0lBQUQsQ0FBQyxBQWJELElBYUM7SUFiWSxtQkFBVyxjQWF2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuZXhwb3J0IGNsYXNzIENoaWxkUm91dGVyIHtcbiAgcHVibGljIGhlYWRpbmcgPSAnQ2hpbGQgUm91dGVyJztcbiAgcHVibGljIHJvdXRlcjogUm91dGVyO1xuXG4gIHB1YmxpYyBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCAnd2VsY29tZSddLCBuYW1lOiAnd2VsY29tZScsICAgICAgIG1vZHVsZUlkOiAnd2VsY29tZScsICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdXZWxjb21lJyB9LFxuICAgICAgeyByb3V0ZTogJ3VzZXJzJywgICAgICAgICBuYW1lOiAndXNlcnMnLCAgICAgICAgIG1vZHVsZUlkOiAndXNlcnMnLCAgICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdHaXRodWIgVXNlcnMnIH0sXG4gICAgICB7IHJvdXRlOiAnY2hpbGQtcm91dGVyJywgIG5hbWU6ICdjaGlsZC1yb3V0ZXInLCAgbW9kdWxlSWQ6ICdjaGlsZC1yb3V0ZXInLCAgbmF2OiB0cnVlLCB0aXRsZTogJ0NoaWxkIFJvdXRlcicgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdfQ==