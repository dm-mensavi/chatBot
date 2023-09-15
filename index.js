import OpenAI from 'openai';
import dotenv from "dotenv";
import readline from'readline';
//const dotenv = require("dotenv")

dotenv.config();
//OpenAi.apiKey = 


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('User: ', (prompt) => {
  
  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
  
    console.log("AI Assistant: " + completion.choices[0].message.content);
  }
  
  main();

  rl.close();
});


