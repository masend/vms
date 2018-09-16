import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";

export class BackendService {
    static kinveyAppKey = "kid_r1n2C9sd7";
    static kinveyAppSecret = "9ac8f508db0d48f18ca742c333ac8ccf";
    static kinveyUsername = "masend.malematsa@gmail.com";
    static kinveyPassword = "Onimusha1";

    static setup() {
        console.log('***********************SETUP')
        Kinvey.init({
            appKey: BackendService.kinveyAppKey,
            appSecret: BackendService.kinveyAppSecret
        });
    }
}
