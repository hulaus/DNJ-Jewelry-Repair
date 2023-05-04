import {createStorefrontClient} from '@shopify/hydrogen-react';

const storefront = createStorefrontClient({
    publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
})