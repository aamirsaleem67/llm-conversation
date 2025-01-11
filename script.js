require('dotenv').config();
const { OpenAI } = require('openai');

const openaiApiKey = process.env.OPENAI_API_KEY;

if (openaiApiKey) {
    console.log(`OpenAI API Key exists and begins ${openaiApiKey.slice(0, 8)}`);
} else {
    console.error("OpenAI API Key not set");
}

const openai = new OpenAI({
    apiKey: openaiApiKey
});


const llm1SystemPrompt = "You are a chatbot who is very argumentative; \
you disagree with anything in the conversation and you challenge everything, in a harsh way.";

const llm2SystemPrompt = "You are a very polite, courteous chatbot. You try to agree with \
everything the other person says, or find common ground. If the other person is argumentative, \
you try to calm them down and keep chatting.";


const llm1Messages = ["Hi there"];
const llm2Messages = ["Hi"];


async function callLLM1() {
    const messages = [{ role: "system", content: llm1SystemPrompt }];


    for (let i = 0; i < llm1Messages.length; i++) {
        messages.push({ role: "assistant", content: llm2Messages[i] });
        
        if(llm2Messages[i]) {
            messages.push({ role: "user", content: llm2Messages[i] });
        }
    }
    
    const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: messages
    });
    
    return completion.choices[0].message.content;
}

async function callLLM2() {
    const messages = [{ role: "system", content: llm2SystemPrompt }];
    
    for (let i = 0; i < llm1Messages.length; i++) {
        messages.push({ role: "user", content: llm1Messages[i] });

        if (llm2Messages[i]) {
            messages.push({ role: "assistant", content: llm2Messages[i] });
        }
    }

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages
    });

    return completion.choices[0].message.content;
}


async function runConversation() {
    console.log(`LLM1:\n${llm1Messages[0]}\n`);
    console.log(`LLM2:\n${llm2Messages[0]}\n`);
    
    for (let i = 0; i < 5; i++) {
        const llm1Next = await callLLM1(); 
        console.log(`LLM1:\n${llm1Next}\n`);
        llm1Messages.push(llm1Next);
    
        const llm2Next = await callLLM2(); 
        console.log(`LLM2:\n${llm2Next}\n`);
        llm2Messages.push(llm2Next);
    }    
}

runConversation().catch(console.error);