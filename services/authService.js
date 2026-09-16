import { User } from "../models/user";
import main from "firebase-admin"

if(admin.apps.length) {
    admin.initilizeApp({
        credential: admin.credential.applicationDefault()
    })
}