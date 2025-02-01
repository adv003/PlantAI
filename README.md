# Plant AI - Smart Plant Recognition and Care Assistant

## Overview
Plant AI is a modern web application built with Next.js that helps users identify plants and manage their garden. Using Google's Gemini AI vision model, the app can recognize plants from uploaded images or photos taken directly through the app, providing detailed information about care requirements and maintenance schedules.

## Features
- **Plant Recognition**: Upload images or take photos of plants for instant identification
- **Detailed Plant Information**:
  - Common and scientific names
  - Indoor/outdoor classification
  - Watering requirements
  - Toxicity information
  - Geographic origin
  - Care instructions
- **Virtual Garden**:
  - Track all your plants in one place
  - Monitor watering schedules
  - Get reminders for plant care
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Google Gemini AI API
- Local Storage for garden data

## Prerequisites
- Node.js 18.17 or later
- Google Cloud account with Gemini API access
- NPM or Yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/plant-ai.git
cd plant-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the project root and add your Gemini API key:
```plaintext
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure
```
plant-ai/
├── app/
│   ├── api/
│   │   └── gemini/
│   │       └── route.ts
│   ├── components/
│   │   ├── AppInfo.tsx
│   │   ├── PlantRecognition.tsx
│   │   ├── Testimonials.tsx
│   │   └── ...
│   ├── garden/
│   │   └── page.tsx
│   ├── utils/
│   │   └── garden.ts
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .env.local
├── package.json
└── README.md
```

## Configuration

### Getting a Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Get API key"
4. Copy the generated key to your `.env.local` file

## Usage

### Plant Recognition
1. Click "Upload Image" or "Take Photo" on the home page
2. Wait for the AI to analyze the image
3. View detailed information about your plant
4. Optionally add the plant to your virtual garden

### Virtual Garden
1. Navigate to the Virtual Garden page
2. View all your saved plants
3. Track watering schedules
4. Mark plants as watered when needed


## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Adding a License
This project currently does not have a license. If you'd like to add one:

1. Choose an appropriate license (e.g., MIT, Apache, GPL)
2. Create a `LICENSE` file in the root directory
3. Update this README with the license information

Common licenses for open-source projects include:
- MIT License (most permissive)
- Apache License 2.0
- GNU GPL v3
- BSD License

You can visit [choosealicense.com](https://choosealicense.com/) to help select an appropriate license for your needs.

## Support
For support, please open an issue in the GitHub repository or contact advay03@gmail.com.
