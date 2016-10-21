/* leny/kach
 *
 * /src/core/mongodb.js - Connector for MongoDB
 *
 * coded by leny@flatLand!
 * started at date
 */

import { MongoClient } from "mongodb";
import Promise from "bluebird";

const MONGO_URL = "mongodb://127.0.0.1:27017/kach";

let oDB, fInit;

fInit = function() {
    return new Promise( ( fResolve, fReject ) => {
        MongoClient.connect( MONGO_URL, ( oError, oLinkedDB ) => {
            if ( oError ) {
                return fReject( oError );
            }

            fResolve( oDB = oLinkedDB );
        } );
    } );
};

export {
    fInit as init,
    oDB as db,
};