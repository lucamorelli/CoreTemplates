"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var RequestOptionsServices = (function () {
    function RequestOptionsServices() {
    }
    Object.defineProperty(RequestOptionsServices.prototype, "json", {
        get: function () {
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            return new http_1.RequestOptions({ headers: headers });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestOptionsServices.prototype, "jwt", {
        get: function () {
            var authHeader = new http_1.Headers();
            var token = localStorage.getItem('access_token');
            authHeader.append('Authorization', 'Bearer ' + token);
            authHeader.append('Content-Type', 'application/json');
            return new http_1.RequestOptions({ headers: authHeader });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestOptionsServices.prototype, "form", {
        get: function () {
            var formHeaders = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            return new http_1.RequestOptions({ headers: formHeaders });
        },
        enumerable: true,
        configurable: true
    });
    RequestOptionsServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RequestOptionsServices);
    return RequestOptionsServices;
}());
exports.RequestOptionsServices = RequestOptionsServices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1vcHRpb25zLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IkQ6L1NvcmdlbnRpL0ludGVybm8vQ29yZVRlbXBsYXRlcy9zcmMvQW5ndWxhci5BdXRoL2FwcC8iLCJzb3VyY2VzIjpbIkFwcC9yZXF1ZXN0LW9wdGlvbnMuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFJOUQ7SUFBQTtJQW9CQSxDQUFDO0lBbEJHLHNCQUFXLHdDQUFJO2FBQWY7WUFDSSxJQUFJLE9BQU8sR0FBWSxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7WUFDM0UsTUFBTSxDQUFDLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsdUNBQUc7YUFBZDtZQUNJLElBQUksVUFBVSxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7WUFDL0IsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNqRCxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDdEQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx3Q0FBSTthQUFmO1lBQ0ksSUFBSSxXQUFXLEdBQVksSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQyxDQUFDO1lBQ2hHLE1BQU0sQ0FBQyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUV4RCxDQUFDOzs7T0FBQTtJQXBCTDtRQUFDLGlCQUFVLEVBQUU7OzhCQUFBO0lBcUJiLDZCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSw4QkFBc0IseUJBb0JsQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0T3B0aW9uc1NlcnZpY2VzIHtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGpzb24oKTogUmVxdWVzdE9wdGlvbnMge1xyXG4gICAgICAgIHZhciBoZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgand0KCk6IFJlcXVlc3RPcHRpb25zIHtcclxuICAgICAgICB2YXIgYXV0aEhlYWRlciA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xyXG4gICAgICAgIGF1dGhIZWFkZXIuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xyXG4gICAgICAgIGF1dGhIZWFkZXIuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBhdXRoSGVhZGVyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZm9ybSgpOiBSZXF1ZXN0T3B0aW9ucyB7XHJcbiAgICAgICAgdmFyIGZvcm1IZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGZvcm1IZWFkZXJzIH0pO1xyXG5cclxuICAgIH1cclxufSJdfQ==