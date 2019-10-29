'use strict';

const core = require('@actions/core');

console.log('action-sim:started');

const myInput = core.getInput('inputName');
try {
  core.debug('Inside try block');

  if (!myInput) {
    core.warning('myInput was not set');
  }
}
catch (err) {
  core.error(`Error ${err}, action may still succeed though`);
}

console.log('action-sim:', myInput);

core.setOutput('outputKey', 'outputVal');
