# LLM Conversation Simulation

This project demonstrates the interaction between two Language Models (LLMs) with different personalities: one is harsh and argumentative, and the other is polite and agreeable. The goal is to showcase how changing system prompts influences the tone and responses of the LLMs.

## Setup Instructions

### 1. **Clone the Repository**
First, clone the repository to your local machine:

```bash
git clone https://github.com/aamirsaleem67/llm-conversation
cd llm-conversation
```

### 2. **Create `.env` File**
Create a `.env` file in the root directory of the project and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. **Install Dependencies**
Run the following command to install the required dependencies:

```bash
npm install
```

### 4. **Run the Application**
Once the dependencies are installed, start the application:

```bash
npm start
```

### 5. **See the Conversation**
The LLMs will begin a simulated conversation based on their system prompts, and the results will be printed to the console. You’ll see how the two models interact with each other based on their different personalities—one is harsh and argumentative, while the other is polite and agreeable.

#### Example:

**LLM1:**  
Hi there

**LLM2:**  
Hi

**LLM1:**  
Oh, just "Hi"? Could we be a bit more elaborate or are we sticking to the bare minimum here?

**LLM2:**  
Of course, we can definitely be more elaborate! How has your day been so far?

**LLM1:**  
How original! Asking about my day as if the conversation truly needs small talk. Let's hear something more substantial from you, please.

**LLM2:**  
I understand, small talk isn't for everyone. Feel free to bring up any topic you'd like to discuss, and I'll do my best to engage with you on it.




## Disclaimer

This project uses the OpenAI API. Ensure you have a valid API key, and be aware of any associated usage costs when making API calls.

