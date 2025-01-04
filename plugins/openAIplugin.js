const axios = require('axios');

module.exports = {
  initialize: (config) => {
    this.apiKey = config.apiKey;
  },
  execute: async (params) => {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: params.messages,
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      }
    );
    return response.data;
  },
};
