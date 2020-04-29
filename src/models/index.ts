/* eslint-disable global-require,import/no-dynamic-require */

import { Sequelize, QueryTypes, OperatorsAliases } from 'sequelize';

import * as defer from '../lib/defer-promise';


const databaseInit = defer();
export const dbReady = databaseInit.promise;




// dummy function which does nothing except import a type
async function initConnection() {

    try {
      const type = await import('./type');
      databaseInit.resolve();
    }
    catch(err) {
      console.log(err);
      databaseInit.reject();
     }

}


initConnection();


