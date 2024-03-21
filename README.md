<div align='center'>
    <h1 align='center'>Portfolio website</h1>
    <h3>This is a personal website</h3>
</div>

<div align='center'>
    <a href="https://yashwanth-portfolio.vercel.app/">My Portfolio</a>
</div>

<div align='center'>
    <a href="https://twitter.com/Yashcsp22"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/Yashcsp22"></a>
</div>

<br/>

This is my personal portfolio website. I want to make this as an open source so that anyone can use this as their template.

## Demo

![Portfolio Welcome GIF](.github/images/portfolio.gif)

## Tech Stack

- [React](https://react.dev/) - Library for Frontend
- [Typescript](https://www.typescriptlang.org/) – Language
- [Tailwind](https://tailwindcss.com/) – CSS
- [shadcn/ui](https://ui.shadcn.com) - UI Components
- [Nextjs](https://nextjs.org/) - Frontend Framework
- [Upstash](https://upstash.com/) - DB for Profile views
- [Vercel](https://vercel.com/) - Hosting

## Getting Started

### Prerequisites

Here's what you need to be able to run NoteMaker:

- Node.js (version >= 18)

### 1. Clone the repository

```shell
git clone https://github.com/YashwanthKothakota9/portfolio.git
cd portfolio
```

### 2. Install npm dependencies

```shell
npm install
```

### 3. Copy the environment variables to `.env` and change the values

```shell
cp .env.example .env
```

copy your own `upstash redis` database `credentials`

Get your credentials [here](https://upstash.com/). I have used `Upstash Redis` to store the views count of profile.

### 4. Run the dev server

```shell
npm run dev
```

### 5. Open the app in your browser

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

This is an open-source portfolio website template to showcase your work to the potential employers and contributions are very much welcome from the community.

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.
