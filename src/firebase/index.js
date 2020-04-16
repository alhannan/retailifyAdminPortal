import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import config from "./config";
import { GeoFirestore } from "geofirestore";

firebase.initializeApp(config);

const auth = firebase.auth();

const firestore = firebase.firestore();

const geoFirestore = new GeoFirestore(firestore);

export { firebase, auth, firestore, geoFirestore };
