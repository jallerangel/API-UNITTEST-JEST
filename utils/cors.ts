import { CorsOptions } from 'cors';
import { config } from 'dotenv'
config()

const whiteList = [process.env.ORIGIN, process.env.ORIGIN2]

const options: CorsOptions = {
  origin: (origin, cb) => {
    if (whiteList.includes(origin) || !origin) {
      cb(null, true);
    } else {
      cb(new Error('Access Denied'), false);
    }
  },
};

export default options
