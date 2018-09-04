import { globalConfig as config } from '../src/config/config';
import { connect } from '../src/mongo/connection';
import { remove } from '../src/source/remove';
import { debugUtil } from '../src/util/debug';
import { start, stop } from '../src/util/pid';
const debug = debugUtil('bin:source');

start();

const sources = Object.keys(config.source);

if (sources.length === 0) {
  console.log('no source found in config');
}

(async () => {
  await connect();
  for (const collection of sources) {
    const startTime = new Date().getTime();
    debug.debug(`Begin remove source of ${collection}`);
    const options = config.source[collection];
    try {
      await remove(options);
    } catch (e) {
      console.error(e);
    }
    const end = new Date().getTime();
    const time = end - startTime;
    debug.debug(`End remove source of ${collection} in ${time}ms`);
  }
})()
  .then(
    () => {
      console.log('finished');
      return 0;
    },
    (e) => {
      console.error(e);
      return 1;
    }
  )
  .then(stop);