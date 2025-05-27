import 'dotenv/config';
import fetch from 'node-fetch';
import fs from 'fs';
import * as constants from './constants.js';

/**
 * dumpHotPools_UniswapV2
 * @returns 
 */
async function dumpHotPools_UniswapV2() {
    const query = constants.GRAPHQL_QUERY_DUMP_POOLS_UNISWAPV2;

    const response = await fetch(constants.GRAPHQL_BASE_ENDPOINT + process.env.UNISWAP_V2_GRAPHQL_API_KEY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });

    const json = await response.json();

    if (json.errors) {
        console.error("GraphQL Error:", json.errors);
        return;
    }

    const pools = json.data.pairs;

    // CSV Header
    const header = 'pool_id,pair,token0_id,token0_decimals,token0_symbol,token0_name,token1_id,token1_decimals,token1_symbol,token1_name\n';

    // Format rows
    const rows = pools
    .filter(pool =>
        pool.id &&
        pool.token0 && pool.token0.id && pool.token0.decimals !== undefined && pool.token0.symbol && pool.token0.name &&
        pool.token1 && pool.token1.id && pool.token1.decimals !== undefined && pool.token1.symbol && pool.token1.name
    )
    .map(pool => {
        return `${pool.id},${pool.token0.symbol}/${pool.token1.symbol},${pool.token0.id},${pool.token0.decimals},${pool.token0.symbol},${pool.token0.name},${pool.token1.id},${pool.token1.decimals},${pool.token1.symbol},${pool.token1.name}`;
    });

    const csvContent = header + rows.join('\n');

    // Format timestamp for filename
    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.]/g, '-');
    const filename = `./out/univ2_pools_${timestamp}.csv`;

    // Write to file
    fs.writeFileSync(filename, csvContent, 'utf8');

    console.log(`✅ CSV file written: ${filename}`);
}

/**
 * dumpHotPools_Sushiswap
 * @returns 
 */
async function dumpHotPools_Sushiswap() {
    const query = constants.GRAPHQL_QUERY_DUMP_POOLS_SUSHISWAP;
    const response = await fetch(constants.GRAPHQL_BASE_ENDPOINT + process.env.SUSHISWAP_GRAPHQL_API_KEY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });

    const json = await response.json();

    if (json.errors) {
        console.error("GraphQL Error:", json.errors);
        return;
    }

    const pools = json.data.pairs;

    // CSV Header
    const header = 'pool_id,pair,token0_id,token0_decimals,token0_symbol,token0_name,token1_id,token1_decimals,token1_symbol,token1_name\n';

    // Format rows
    const rows = pools
    .filter(pool =>
        pool.id &&
        pool.token0 && pool.token0.id && pool.token0.decimals !== undefined && pool.token0.symbol && pool.token0.name &&
        pool.token1 && pool.token1.id && pool.token1.decimals !== undefined && pool.token1.symbol && pool.token1.name
    )
    .map(pool => {
        return `${pool.id},${pool.token0.symbol}/${pool.token1.symbol},${pool.token0.id},${pool.token0.decimals},${pool.token0.symbol},${pool.token0.name},${pool.token1.id},${pool.token1.decimals},${pool.token1.symbol},${pool.token1.name}`;
    });


    const csvContent = header + rows.join('\n');

    // Format timestamp for filename
    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.]/g, '-');
    const filename = `./out/sushi_pools_${timestamp}.csv`;

    // Write to file
    fs.writeFileSync(filename, csvContent, 'utf8');

    console.log(`✅ CSV file written: ${filename}`);
}

await dumpHotPools_UniswapV2();
await dumpHotPools_Sushiswap();