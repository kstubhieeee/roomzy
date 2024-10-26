# Roomzy - A Roommate Finding Platform

## Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/insanelyai">
        <img src="https://github.com/insanelyai.png" alt="Hasan" style="width:100px; height:100px; border-radius:50%;"/><br>
        <sub><b>Hasan</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hemant-i7">
        <img src="https://github.com/hemant-i7.png" alt="Hemant" style="width:100px; height:100px; border-radius:50%;"/><br>
        <sub><b>Hemant</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/kstubhieeee">
        <img src="https://github.com/kstubhieeee.png" alt="Kaustubh" style="width:100px; height:100px; border-radius:50%;"/><br>
        <sub><b>Kaustubh</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Shubham7204">
        <img src="https://github.com/Shubham7204.png" alt="Shubham" style="width:100px; height:100px; border-radius:50%;"/><br>
        <sub><b>Shubham</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Morviee">
        <img src="https://github.com/Morviee.png" alt="Morvi" style="width:100px; height:100px; border-radius:50%;"/><br>
        <sub><b>Morvi</b></sub>
      </a>
    </td>
  </tr>
</table>



## Overview

**Roomzy** is a platform designed to simplify the process of finding compatible roommates, specifically for students and working professionals in Mumbai. By leveraging the power of **Next.js**, **MongoDB**, and **ShadCN UI**, Roomzy connects users with potential roommates and shared living spaces, fostering community-driven solutions that promote affordability, trust, and sustainability.

## Why Roomzy?

The challenge of finding affordable accommodations and trustworthy roommates is common, particularly in a city like Mumbai. Roomzy aims to address this by:

- Simplifying the roommate search process
- Reducing costs for users
- Building trust through a feedback mechanism
- Offering a centralized, low-maintenance platform
- Encouraging sustainable urban development through shared living spaces

## Features

- **Affordable Solutions:** Find shared accommodations that suit your budget.
- **Trustworthy Matches:** A feedback system ensures you can trust your potential roommates.
- **Community Driven:** Promotes a sense of shared responsibility among roommates.
- **Environmentally Friendly:** Encourages sustainable living through shared resources.

## Tech Stack

<p align="center">
  <a align="center" href="https://skillicons.dev">
    <img align="center" src="https://skillicons.dev/icons?i=ts,npm,css,express,git,html,js,mongodb,nextjs,nodejs,postman,tailwind" />
  </a>
</p>

## Impact

Roomzy not only provides a practical solution to finding roommates but also has broader social, economic, and environmental benefits:

- **Economic:** Alleviates the financial burden of high living costs in Mumbai.
- **Social:** Builds a sense of community and shared responsibility among users.
- **Environmental:** Supports sustainable living practices through shared spaces.

---

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/insanelyai/roomzy.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd roomzy
   ```

3. **Install the dependencies:**

   If you are using npm:

   ```bash
   npm install
   ```

   Or if you are using yarn:

   ```bash
   yarn install
   ```

4. **Set up environment variables:**

   Create a `.env.local` file in the root of your project and add the following variables:

   ```
   JWT_SECRET=<your_jwt_secret>
   FALLBACK_MONGODB_URL="your_mongodb_connection_string"
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<your_stripe_public_key>
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   ```

5. **Run the application:**

   For development mode:

   ```bash
   npm run dev
   ```

   Or if using yarn:

   ```bash
   yarn dev
   ```
