<p align="center">
  <a href="https://penpal-next-ts.vercel.app">
    <img alt="typing test screenshot" src="https://github.com/mariangle/nextjs-ecommerce-store/assets/124585244/c03a7567-f558-4c1c-b667-5702dc4a6fc8">
    <h1 align="center">Ecommerce Store</h1>
  </a>
</p>

<p align="center">
  An ecommerce store built with Next.js and TypeScript.
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>
<p align="center">
  <a href="https://www.linkedin.com/in/maria-nguyen-le">
    <img src="https://img.shields.io/badge/-MariaLe-blue?style=plastic-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/maria-nguyen-le/" alt="License" />
  </a>
</p>
<br/>

<!-- ABOUT THE PROJECT -->

## Introduction

This project is an improved version of my initial ecommerce app while also serving as a continuation of my [ecommerce CMS project](https://github.com/mariangle/nextjs-ecommerce-cms). All the content within this ecommerce platform is sourced through various API calls from the ecommerce CMS project. Any modifications made in the admin CMS will be reflected and displayed on this store. For testing of payment processing, use Stripe's [Test Card](https://stripe.com/docs/testing).

Here are the main improvements from old first ecommerce:

- **Enhanced Filtering**: Unlike my previous project that fetched all products and performed filtering in the Redux store, this project implements query-based filtering directly from the API, resulting in improved performance.
- **Dynamic Navigation**: The project dynamically generates navigation options based on categories added in the CMS. This ensures that new categories automatically appear in the navigation menu without requiring manual adjustments.
- **Improved Code Structure**: The codebase of this project follows better architectural practices, resulting in cleaner and more maintainable code.
- **Stability**: This project is more reliable and stable in deployment, addressing the breakability concerns associated with the previous ecommerce project. It also features a responsive design that adapts seamlessly to various devices.
- **TypeScript Integration**: This project utilizes TypeScript, offering type safety and improved code quality compared to plain JavaScript.

## Tech stack

- [Next.js](https://nextjs.org/) - framework
- [TypeScript](https://www.typescriptlang.org/) - language
- [Tailwind](https://tailwindcss.comm) - CSS
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - state management
- [Vercel](https://vercel.com/) - hosting

<!-- GETTING STARTED )-->

## License

<details>
  <summary><b>MIT License</b></summary>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</details>
