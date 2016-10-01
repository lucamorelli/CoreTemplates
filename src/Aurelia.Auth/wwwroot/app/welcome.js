define(["require", "exports"], function (require, exports) {
    "use strict";
    var Welcome = (function () {
        function Welcome() {
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.previousValue = this.fullName;
        }
        Object.defineProperty(Welcome.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Welcome.prototype.submit = function () {
            this.previousValue = this.fullName;
            alert("Welcome, " + this.fullName + "!");
        };
        Welcome.prototype.canDeactivate = function () {
            if (this.fullName !== this.previousValue) {
                return confirm('Are you sure you want to leave?');
            }
        };
        return Welcome;
    }());
    exports.Welcome = Welcome;
    var UpperValueConverter = (function () {
        function UpperValueConverter() {
        }
        UpperValueConverter.prototype.toView = function (value) {
            return value && value.toUpperCase();
        };
        return UpperValueConverter;
    }());
    exports.UpperValueConverter = UpperValueConverter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC93ZWxjb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBRUE7UUFBQTtZQUNTLFlBQU8sR0FBRyx3Q0FBd0MsQ0FBQztZQUNuRCxjQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7WUFDaEIsa0JBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBcUJ4QyxDQUFDO1FBZEMsc0JBQUksNkJBQVE7aUJBQVo7Z0JBQ0UsTUFBTSxDQUFJLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVUsQ0FBQztZQUM5QyxDQUFDOzs7V0FBQTtRQUVNLHdCQUFNLEdBQWI7WUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxDQUFDLGNBQVksSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVNLCtCQUFhLEdBQXBCO1lBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ3BELENBQUM7UUFDSCxDQUFDO1FBQ0gsY0FBQztJQUFELENBQUMsQUF6QkQsSUF5QkM7SUF6QlksZUFBTyxVQXlCbkIsQ0FBQTtJQUVEO1FBQUE7UUFJQSxDQUFDO1FBSFEsb0NBQU0sR0FBYixVQUFjLEtBQUs7WUFDakIsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUNILDBCQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFKWSwyQkFBbUIsc0JBSS9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge2NvbXB1dGVkRnJvbX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XG4gIHB1YmxpYyBoZWFkaW5nID0gJ1dlbGNvbWUgdG8gdGhlIEF1cmVsaWEgTmF2aWdhdGlvbiBBcHAhJztcbiAgcHVibGljIGZpcnN0TmFtZSA9ICdKb2huJztcbiAgcHVibGljIGxhc3ROYW1lID0gJ0RvZSc7XG4gIHByaXZhdGUgcHJldmlvdXNWYWx1ZSA9IHRoaXMuZnVsbE5hbWU7XG5cbiAgLy8gR2V0dGVycyBjYW4ndCBiZSBkaXJlY3RseSBvYnNlcnZlZCwgc28gdGhleSBtdXN0IGJlIGRpcnR5IGNoZWNrZWQuXG4gIC8vIEhvd2V2ZXIsIGlmIHlvdSB0ZWxsIEF1cmVsaWEgdGhlIGRlcGVuZGVuY2llcywgaXQgbm8gbG9uZ2VyIG5lZWRzIHRvIGRpcnR5IGNoZWNrIHRoZSBwcm9wZXJ0eS5cbiAgLy8gVG8gb3B0aW1pemUgYnkgZGVjbGFyaW5nIHRoZSBwcm9wZXJ0aWVzIHRoYXQgdGhpcyBnZXR0ZXIgaXMgY29tcHV0ZWQgZnJvbSwgdW5jb21tZW50IHRoZSBsaW5lIGJlbG93XG4gIC8vIGFzIHdlbGwgYXMgdGhlIGNvcnJlc3BvbmRpbmcgaW1wb3J0IGFib3ZlLlxuICAvLyBAY29tcHV0ZWRGcm9tKCdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnKVxuICBnZXQgZnVsbE5hbWUoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YDtcbiAgfVxuXG4gIHB1YmxpYyBzdWJtaXQoKSB7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcbiAgICBhbGVydChgV2VsY29tZSwgJHt0aGlzLmZ1bGxOYW1lfSFgKTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5EZWFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLmZ1bGxOYW1lICE9PSB0aGlzLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/Jyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcHBlclZhbHVlQ29udmVydGVyIHtcbiAgcHVibGljIHRvVmlldyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICB9XG59XG4iXX0=