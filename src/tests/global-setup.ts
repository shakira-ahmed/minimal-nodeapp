/* eslint-disable no-console,no-unused-vars */

/*
  Gets called to run before the entire test suite
*/

process.env.NODE_ENV = 'test';

import { dbReady } from '../models';


module.exports = async () => {

  await dbReady;

};
