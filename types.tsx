export interface Product {
    name: string,
    description: string,
    price: number,
    getName: Function,
    getPrice: Function,
    getDescription: Function
}

export interface AssistantMessage {
    content: string,
    role: string,
}

export interface Choice {
    message: AssistantMessage,
    finish_reason?: string,
}