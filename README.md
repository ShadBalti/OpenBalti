<div align="center">

# 🌐 **OpenBalti**
### _Digital Dictionary Platform for the Balti Language_

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![NextAuth](https://img.shields.io/badge/Auth-NextAuth.js-green?style=for-the-badge&logo=auth0)
![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9C%A8-brightgreen?style=for-the-badge)

</div>

> 🌍 **OpenBalti** is a full-featured, community-powered digital dictionary built to preserve and promote the **Balti language**.  
> It combines modern web technology, community collaboration, and cultural preservation in one open-source platform.

---

## 🏗️ **Architecture & Technology Stack**

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| **Database** | MongoDB + Mongoose ODM |
| **Authentication** | NextAuth.js (Google, GitHub, Credentials) |
| **UI Library** | shadcn/ui (Dark + Light mode) |
| **SEO** | Structured Data, Google Analytics, Accessibility Optimizations |

---

## ⚙️ **Core Features**

### 📖 Dictionary
- Bilingual **Balti ↔ English** translations with phonetic transcriptions  
- Advanced search (full-text indexing across both languages)  
- Word categorization, dialect classification, and difficulty levels  
- Related word linking and usage notes  

### 👥 Community Collaboration
- Role-based access control (**User → Contributor → Admin → Owner**)  
- Word-specific comment threads & discussions  
- Feedback system (useful ✅, trusted 🏅, needs review ⚠️)  
- Complete revision history for every entry  
- Contribution statistics & recognition system  

### 🙍 User Management
- Multi-provider login & custom profiles  
- Public/private profiles (bio, location, website)  
- Verified user & founder badges  
- User activity and stats tracking  

---

## 🧭 **Admin & Moderation Tools**

- Word review & approval workflow  
- Role promotion and management  
- Community metrics dashboard  
- Full activity monitoring and moderation controls  

---

## ⚡ **Technical Highlights**

- 💡 Responsive, mobile-first UI  
- 🖥️ Server-side rendering with loading placeholders  
- ⚙️ Error boundaries for improved reliability  
- 🔍 SEO & structured data markup  
- ♿ Accessibility-first (ARIA labels, skip links)

---

## 📚 **Documentation**

The codebase is thoroughly documented using **JSDoc** comments. This provides detailed explanations for all functions, classes, and components, making it easier for new developers to understand the code and contribute effectively.

---

## 🗃️ **Database Models**

| Model | Description |
|--------|-------------|
| **User** | Authentication, roles, profiles, contribution stats |
| **Word** | Core dictionary entries with metadata & feedback |
| **ActivityLog** | Tracks all user actions |
| **Favorite** | User bookmarks system |
| **WordComment** | Comment threads for word entries |
| **WordFeedback** | Rating system for community input |
| **WordHistory** | Complete revision history |

---

## 🚀 **Getting Started**

### 🧩 Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Environment variables for NextAuth & DB connection. Create a `.env.local` file in the root of the project and add the necessary environment variables.

#### 📚 Dictionary Dataset

This project includes a comprehensive Balti-English dictionary dataset located at `data/balti_dictionary_dataset.json`. This dataset contains 909 entries, each with Balti and English translations, phonetic transcriptions, categories, and other linguistic details.

#### 🚀 Seeding the Database

To populate your MongoDB instance with the dictionary data, use the provided seed script:

```bash
npm run seed
```

This script reads the `balti_dictionary_dataset.json` file and bulk-inserts the entries into the `Word` collection, skipping any duplicates based on the `balti` field. Progress will be logged to the console, showing how many entries were inserted and how many were skipped.

Before running the seed script, ensure your `MONGODB_URI` environment variable is correctly set in a `.env.local` file at the project root.



\`\`\`bash
# Clone repository
git clone https://github.com/ShadBalti/openbalti.git

# Navigate to project directory
cd openbalti

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`
Visit 👉 http://localhost:3000

### 🐳 Deployment

The application is optimized for deployment on **Vercel**. Simply fork the repository, connect it to your Vercel account, and Vercel will handle the rest.

---

🧑‍💻 Contributing

Contributions are welcome and appreciated 💙
If you’d like to help improve OpenBalti:

1. Fork the repository


2. Create your feature branch → git checkout -b feature/your-feature-name


3. Commit changes → git commit -m "Add your message"


4. Push → git push origin feature/your-feature-name


5. Open a pull request 🚀




---

💫 Vision

> OpenBalti’s mission is to preserve the Balti language through modern open-source technology —
empowering communities, learners, and researchers to connect with their linguistic heritage in the digital era.




---

📬 Connect

🧑‍💻 Author: Dilshad Hussain

🌐 Website: openbalti.com

🐦 Twitter/X: @OpenBalti



---

<div align="center">⭐ If you love this project, give it a star — it helps more people discover Balti language tools! 🌟

Made with ❤️ by Dilshad Hussain

</div>
---
