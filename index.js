import 'dotenv/config';
import fs from 'fs';

import * as constants from './constants.js';
import * as uniswapv3 from './modules/uniswapv3.js';
import * as uniswapv2 from './modules/uniswapv2.js';
import * as sushiswap from './modules/sushiswap.js';
import * as shibaswap from './modules/shibaswap.js';

console.log(constants.MESSAGE_START);

const rows_uniswapv3 = await uniswapv3.getHotPools();
const rows_uniswapv2 = await uniswapv2.getHotPools();
const rows_sushiswap = await sushiswap.getHotPools();
const rows_shibaswap = await shibaswap.getHotPools();

const csvContent = constants.CSV_HEADER + '\n' +
    rows_uniswapv3.join('\n') +
    rows_uniswapv2.join('\n') +
    rows_sushiswap.join('\n') +
    rows_shibaswap.join('\n')
    ;

// Format timestamp for filename
const now = new Date();
const timestamp = now.toISOString().replace(/[:.]/g, '-');
const filename = `${constants.MESSAGE_FILENAME}_${timestamp}.csv`;

// Write to file
fs.writeFileSync(filename, csvContent, 'utf8');
console.log(`${constants.MESSAGE_END} ${filename}`);