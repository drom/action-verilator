'use strict';

const core = require('@actions/core');

console.log('action-sim:started');

const myInput = core.getInput('inputName', { required: true });

console.log('action-sim:', myInput);

core.setOutput('outputKey', 'outputVal');
