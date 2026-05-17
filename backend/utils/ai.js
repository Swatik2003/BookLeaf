const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.classifyTicket = async (text) => {

  const prompt = `
  Categorize this support ticket into one category:
  Royalty, ISBN, Printing, Distribution, Production, General

  Ticket:
  ${text}
  `;

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",

    messages: [
      {
        role: "user",
        content: prompt
      }
    ]
  });

  return response.choices[0].message.content;
};