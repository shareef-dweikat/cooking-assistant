import configs from '../../tsconfig.json'

export const PRODUCTS_ENDPOINT =  `${configs.compilerOptions.baseUrl}/api/v1/products/`
export const TEXT_COMPLETION_ENDPOINT =  `https://api.openai.com/v1/chat/completions`