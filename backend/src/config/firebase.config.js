import { config } from "dotenv";
import admin from "firebase-admin";
import { catchError } from "../lib/errorHandler.lib.js";

config();

/**
 * Initialize Firebase Admin in Go-like style
 * @returns {Promise<[Error | null, any | null]>} - A tuple with error and admin instance
 */
async function initializeFirebaseAdmin() {
  try {
    const creds = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(creds),
      });
    }

    return [null, admin];
  } catch (error) {
    return [error instanceof Error ? error : new Error(String(error)), null];
  }
}

const [err, firebaseAdmin] = await catchError(initializeFirebaseAdmin());
if (err) {
  console.error("Error initializing Firebase Admin:", err.message);
  process.exit(1);
}

export { firebaseAdmin as admin };
