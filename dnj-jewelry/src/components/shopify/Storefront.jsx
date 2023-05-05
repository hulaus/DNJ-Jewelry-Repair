import {createStorefrontClient} from '@shopify/hydrogen-react';

export const client = createStorefrontClient({
    storeDomain:'https://{DnJ-Jewelry}.myshopify.com',
    storefrontApiVersion: '2023-01',
    privateStorefrontToken: `process.env.PRIVATE_STORE_TOKEN`
})