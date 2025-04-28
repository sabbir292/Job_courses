import admin from "firebase-admin";
import { SERVICE_KEY } from '$env/static/private';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(SERVICE_KEY))
  });
}

export const DB = admin.firestore();
export const AUTH = admin.auth();
