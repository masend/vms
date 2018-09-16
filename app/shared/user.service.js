"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var backend_service_1 = require("./backend.service");
var UserService = /** @class */ (function () {
    function UserService(backendService) {
        this.backendService = backendService;
        console.log('initialize user service');
        backend_service_1.BackendService.setup();
    }
    UserService.prototype.register = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            kinvey_nativescript_sdk_1.Kinvey.User.logout()
                .then(function () {
                kinvey_nativescript_sdk_1.Kinvey.User.signup({ username: user.email, password: user.password })
                    .then(resolve)
                    .catch(function (error) { _this.handleErrors(error); reject(); });
            })
                .catch(function (error) { _this.handleErrors(error); reject(); });
        });
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            kinvey_nativescript_sdk_1.Kinvey.User.logout()
                .then(function () {
                kinvey_nativescript_sdk_1.Kinvey.User.login(user.email, user.password)
                    .then(resolve)
                    .catch(function (error) { _this.handleErrors(error); reject(); });
            })
                .catch(function (error) { _this.handleErrors(error); reject(); });
        });
    };
    UserService.prototype.resetPassword = function (email) {
        return kinvey_nativescript_sdk_1.Kinvey.User.resetPassword(email)
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.error(error.message);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [backend_service_1.BackendService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLG1FQUFpRDtBQUVqRCxxREFBbUQ7QUFHbkQ7SUFDSSxxQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtRQUN0QyxnQ0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUFuQixpQkFVQztRQVRHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLGdDQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtpQkFDZixJQUFJLENBQUM7Z0JBQ0YsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDYixLQUFLLENBQUMsVUFBQyxLQUFLLElBQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEUsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUFoQixpQkFVQztRQVRHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLGdDQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtpQkFDZixJQUFJLENBQUM7Z0JBQ0YsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztxQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDYixLQUFLLENBQUMsVUFBQyxLQUFLLElBQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEUsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNmLE1BQU0sQ0FBQyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUF1QjtRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBckNRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FFMkIsZ0NBQWM7T0FEekMsV0FBVyxDQXNDdkI7SUFBRCxrQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXplIHVzZXIgc2VydmljZScpXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLnNldHVwKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgS2ludmV5LlVzZXIubG9nb3V0KClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEtpbnZleS5Vc2VyLnNpZ251cCh7IHVzZXJuYW1lOiB1c2VyLmVtYWlsLCBwYXNzd29yZDogdXNlci5wYXNzd29yZCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgdGhpcy5oYW5kbGVFcnJvcnMoZXJyb3IpOyByZWplY3QoKTsgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsgdGhpcy5oYW5kbGVFcnJvcnMoZXJyb3IpOyByZWplY3QoKTsgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9naW4odXNlcjogVXNlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgS2ludmV5LlVzZXIubG9nb3V0KClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEtpbnZleS5Vc2VyLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldFBhc3N3b3JkKGVtYWlsKSB7XG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5yZXNldFBhc3N3b3JkKGVtYWlsKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG59XG4iXX0=