# Portfolio Craft

## Introduction

Welcome to the GitHub repository of Portfolio Craft, a dynamic and responsive personal portfolio website designed to showcase skills, projects, and experiences in a professional and engaging manner. This portfolio website is perfect for developers, designers, and professionals looking to establish a strong online presence.

## Deployed Website

Experience the live version of Portfolio Craft at [https://gauravgovinda.vercel.app/](https://gauravgovinda.vercel.app/).

## Features

Portfolio Craft comes packed with a variety of features designed to make your online portfolio stand out:

1. **Dynamic Content Management**: Thanks to HygraphCMS, updating your portfolio is seamless and straightforward. Change your project showcase, skills, and experiences without touching a line of code.
2. **Discord Webhook Integration**: Get instantly notified when someone contacts you through your portfolio. This feature ensures you never miss out on potential opportunities or collaborations.
3. **Responsive Design**: Built with mobile-first principles in mind, ensuring that your portfolio looks great on devices of all sizes—from smartphones to desktops.
4. **Smooth Animations**: Utilizing Framer-Motion, the website offers smooth and engaging animations that enhance the user experience without compromising on performance.
5. **SEO Optimized**: Carefully crafted to be SEO-friendly, helping your portfolio rank higher in search results and making it easier for potential employers or clients to find you.

## Technologies Used

Portfolio Craft is built using a range of modern technologies to ensure high performance, responsiveness, and an engaging user experience:

- Next.js
- TypeScript
- Bootstrap
- TailwindCSS
- Framer-Motion
- Hygraph

## Installation

To set up your instance of Portfolio Craft, follow these steps:

### Prerequisites

- Node.js (preferably the latest stable version)
- Yarn package manager (you can use npm, but this guide assumes you're using Yarn)

### Steps

1. **Clone the repository**
```
git clone https://github.com/Gaurav241/portfolio-craft.git
cd portfolio-craft
```
2. **Install dependencies**
```
yarn install
```
3. **Set up environment variables**

Rename `.env.example` to `.env` and fill in the variables:

- `HYGRAPH_URL`: The endpoint URL of your Hygraph project.
- `HYGRAPH_TOKEN`: The access token for your Hygraph project.
- `WEBHOOK_URL`: The Discord webhook URL for contact notifications.

Your `.env` file should look something like this:
```
Hygraph
HYGRAPH_URL="https://your-hygraph-project-url"
HYGRAPH_TOKEN="your-hygraph-access-token"

Discord
WEBHOOK_URL="your-discord-webhook-url"
```
4. **Hygraph Project and Discord Webhook Setup**

- For your portfolio to properly fetch content, you need to clone the schema and content model from the provided Hygraph project clone. Follow the instructions on Hygraph to import the schema into your project. This ensures your portfolio can communicate with Hygraph to retrieve your dynamic content.

- To set up the Discord webhook for contact notifications, go to your Discord server settings, select 'Integrations', click on 'New Webhook', and choose the channel you want the notifications to go to. Once created, copy the webhook URL and paste it into your `.env` file under `WEBHOOK_URL`.

5. **Run the development server**
```
yarn dev
```
This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload if you make edits.

6. **Build and run for production**

When you're ready to deploy your portfolio:
```
yarn build
yarn start
```
## Contributions

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See [LICENSE](LICENSE.txt) for more information.
