# Rural Healthcare Platform - Bridging the Gap in Care 

A comprehensive, offline-first telemedicine platform designed to revolutionize healthcare delivery in rural India. The Rural Healthcare Platform provides a seamless, intuitive, and accessible experience for patients and doctors, featuring real-time health monitoring, appointment management, and community health initiatives. Built with a modern tech stack including React, Vite, TypeScript and shadcn/ui for a fast, responsive and multi language experience.

Website link - [www.rural-healthcare.com](https://rural-healthcare.netlify.app/)

## 🚀 Core Features

* **Multilingual Support**: Fully accessible in English and Hindi, ensuring that language barriers do not prevent users from seeking medical care.
* **Online Consultation**: Connect with healthcare professionals through video calls, voice calls, or secure chat, making expert advice available anywhere.
* **Health Campaigns**: A dedicated module for tracking and joining community initiatives like blood donation drives, free checkup camps and vaccination programs.
* **Comprehensive Directory**: A verified list of hospitals and doctors to help rural residents find the nearest qualified providers.
* **Emergency Helpline**: Quick access to emergency services (108) and 24/7 medical assistance.
* **Accessibility Focused**: Features an accessibility bar for font adjustments and language switching, built specifically for diverse users.
* **User Dashboard**: Tailored views for Patients and Doctors to track consultations, joined campaigns and health stats.
* **Donation & Transparency**: A secure system for supporting rural healthcare with clear reporting on how funds are utilized.

## 🏥 Our Services

| Service | Description | Features |
| :--- | :--- | :--- |
| **Online Consultation** | Bridge the gap between villages and specialists. | Video, Audio, & Chat options. |
| **Health Campaigns** | Community health initiatives. | Registration, reminders, & location tracking. |
| **Doctor Directory** | Find verified healthcare providers. | Area-based search, verified profiles. |
| **Support & Emergency** | 24/7 healthcare assistance. | 108 Helpline, Ambulance services. |
| **Donation Portal** | Support underserved communities. | Custom amounts, impact reports. |
| **Admin Panel** | Platform management for admins. | User analytics, campaign management. |

## 🛠️ Tech Stack

* **Frontend Framework**: React 18 with Vite
* **Language**: TypeScript
* **UI Components**: shadcn/ui (Radix UI primitives)
* **Styling**: Tailwind CSS
* **Icons**: Lucide React
* **Forms**: React Hook Form & Sonner (for notifications)

## 📂 Project Structure

```text
Rural-Healthcare/
├── src/
│   ├── components/
│   │   ├── ui/                # shadcn/ui reusable components
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ... (UI components)
│   │   ├── pages/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── AccessibilityBar.tsx
│   │   ├── Authentication.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Directory.tsx
│   │   ├── LandingPage.tsx
│   │   └── ...
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx                # Main routing and page logic
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json               # Project dependencies and scripts
├── vite.config.ts
└── tsconfig.json
```

## ⚙️ Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Rudragupta23/Rural-Healthcare.git
    cd Rural-Healthcare
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```

## ▶️ Usage

The application uses a state-driven navigation system within `App.tsx`.
* **Home**: Browse core services and hero features.
* **Consultation**: Book appointments and access the emergency helpline.
* **Campaigns**: View and register for upcoming local health events.
* **Dashboard**: Log in as a patient or doctor to view personalized health statistics and notifications.
