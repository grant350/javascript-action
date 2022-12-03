const wait = require('./wait');
const process = require('process');
const cp = require('child_process');
const path = require('path');
const run = require('./index');
const {performance} = require('perf_hooks');

describe('waiting test',function(){

  test('throws invalid number', async () => {
    await expect(wait('foo')).rejects.toThrow('milliseconds not a number');
  });

  test('wait 500 ms', async () => {
    const start = new Date();
    await wait(500);
    const end = new Date();
    var delta = Math.abs(end - start);
    expect(delta).toBeGreaterThanOrEqual(500);
  });

  // shows how the runner will run a javascript action with env / stdout protocol
  test('test run function', async () => {
    var t1 = performance.now();
    var datetime = new Date();
    var t2 = performance.now();
    // date creation took t1 - t2 //more accurate than date, because date function takes time itself to run so dont take that time into account
    process.env['INPUT_MILLISECONDS'] = 100;
    await expect(run).not.toThrow('milliseconds not a number');
  })
})
