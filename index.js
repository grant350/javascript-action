const core = require('@actions/core');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run(ms) {
  ms =  process.env.INPUT_MILLISECONDS? parseInt(process.env.INPUT_MILLISECONDS): parseInt(ms)
  try {
    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    await wait(ms);
    core.info((new Date()).toTimeString());
  } catch (error) {
    core.setFailed(error.message);
    throw error;
  }
}


module.exports = run;