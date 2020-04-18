import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import config from "./config";
import { GeoFirestore } from "geofirestore";

firebase.initializeApp(config);

const auth = firebase.auth();

const functions = firebase.functions();

const firestore = firebase.firestore();

const geoFirestore = new GeoFirestore(firestore);

export { firebase, auth, functions, firestore, geoFirestore };
