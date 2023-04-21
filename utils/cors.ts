import { CorsOptions } from 'cors';
import config from '../config';
const { origin1, origin2 } = config

const whiteList = [origin1, origin2]

const options: CorsOptions = {
  origin: (origin, cb: (err: Error | null, result: boolean) => void) => {
    if (whiteList.includes(origin!) || !origin) {
      cb(null, true);
    } else {
      cb(new Error('Access Denied'), false);
    }
  },
};

export default options
