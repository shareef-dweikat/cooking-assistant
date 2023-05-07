import AIAnswer from '../models/AIAnswer'
import { TEXT_COMPLETION_ENDPOINT } from '../endpoints'
import axios from 'axios';

export const sendMessage = async (userMessage: string) => {
    const API_KEY = ""
    const config = {
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json"
        }
    };

    const data = {
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": userMessage}]
    }

    let response = await axios.post(TEXT_COMPLETION_ENDPOINT, data, config)
    return new AIAnswer(response.data.created, response.data.choices)
}