'use strict';

const core = require('@actions/core');

console.log('action-verilator:started');

const myInput = core.getInput('version');

console.log('action-verilator:', myInput);

// try {
//   core.debug('Inside try block');
//
//   if (!myInput) {
//     core.warning('myInput was not set');
//   }
// }
// catch (err) {
//   core.error(`Error ${err}, action may still succeed though`);
// }


core.setOutput('vcdFileName', 'bar.vcd');
