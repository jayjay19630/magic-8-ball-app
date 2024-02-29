# AI Powered Magic 8 Ball Frontend

This app reimagines the traditional 8-ball fortune telling product into a AI-powered response generator! Users will need to enter a simple 'Yes' or 'No' question, to which the 8-ball will generate a customised response that predicts that answer to that question. The AI is implemented using OpenAI's free API and, through prompt engineering, creates specific responses just like an 8-ball would. The frontend is designed solely using React and Typescript, along with libraries such as Material UI and Framer Motion.

## Features

- **User authentication and registration:** Users can sign up for an account, authenticated by their username and password.
- **Magic 8 Ball customisation:** Users can personalise their 8 balls with their own hats, accessories, colors, and more.
- **Chat history:** Users can look back on previous queries and reminisce previous answers that they find interesting.
- **Daily premonitions:** Users can receive daily recommendations regarding one of their past queries.

## Getting Started

To get a local copy up and running, note the prerequisites and follow these steps.

### Prerequisites

- [ ] React
- [ ] NPM
- [ ] Any code editor (VSC, Brackets, etc)

### Instructions

1. Open terminal
2. Navigate to your desired location to place this repository
3. Copy and paste the following code into the terminal: `git clone git@github.com:jayjay19630/magic-8-ball-app.git`
4. Run `cd magic-8-ball-app`
5. Run `npm install`
6. Run `cp .env.example .env` and add your own OpenAI API Key to the `.env` file
7. Run `npm run dev`
8. Head over to http://localhost:5173/ to see the 8 ball in action!
