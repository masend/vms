"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.setup = function () {
        console.log('***********************SETUP');
        kinvey_nativescript_sdk_1.Kinvey.init({
            appKey: BackendService.kinveyAppKey,
            appSecret: BackendService.kinveyAppSecret
        });
    };
    BackendService.kinveyAppKey = "kid_r1n2C9sd7";
    BackendService.kinveyAppSecret = "9ac8f508db0d48f18ca742c333ac8ccf";
    BackendService.kinveyUsername = "masend.malematsa@gmail.com";
    BackendService.kinveyPassword = "Onimusha1";
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbUVBQWlEO0FBRWpEO0lBQUE7SUFhQSxDQUFDO0lBUFUsb0JBQUssR0FBWjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtRQUMzQyxnQ0FBTSxDQUFDLElBQUksQ0FBQztZQUNSLE1BQU0sRUFBRSxjQUFjLENBQUMsWUFBWTtZQUNuQyxTQUFTLEVBQUUsY0FBYyxDQUFDLGVBQWU7U0FDNUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVhNLDJCQUFZLEdBQUcsZUFBZSxDQUFDO0lBQy9CLDhCQUFlLEdBQUcsa0NBQWtDLENBQUM7SUFDckQsNkJBQWMsR0FBRyw0QkFBNEIsQ0FBQztJQUM5Qyw2QkFBYyxHQUFHLFdBQVcsQ0FBQztJQVN4QyxxQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcblxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcbiAgICBzdGF0aWMga2ludmV5QXBwS2V5ID0gXCJraWRfcjFuMkM5c2Q3XCI7XG4gICAgc3RhdGljIGtpbnZleUFwcFNlY3JldCA9IFwiOWFjOGY1MDhkYjBkNDhmMThjYTc0MmMzMzNhYzhjY2ZcIjtcbiAgICBzdGF0aWMga2ludmV5VXNlcm5hbWUgPSBcIm1hc2VuZC5tYWxlbWF0c2FAZ21haWwuY29tXCI7XG4gICAgc3RhdGljIGtpbnZleVBhc3N3b3JkID0gXCJPbmltdXNoYTFcIjtcblxuICAgIHN0YXRpYyBzZXR1cCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqU0VUVVAnKVxuICAgICAgICBLaW52ZXkuaW5pdCh7XG4gICAgICAgICAgICBhcHBLZXk6IEJhY2tlbmRTZXJ2aWNlLmtpbnZleUFwcEtleSxcbiAgICAgICAgICAgIGFwcFNlY3JldDogQmFja2VuZFNlcnZpY2Uua2ludmV5QXBwU2VjcmV0XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==