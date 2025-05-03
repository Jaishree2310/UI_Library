```markdown
#  UI Component Library with Storybook – Angular

A scalable, maintainable, and visually documented UI library built using **Angular**, styled with **SCSS**, and powered by **Storybook** for isolated component development, preview, and testing.

##  Project Goals

- Initialize Storybook in Angular project
- Create stories for at least 5 reusable components (Button, Card, Modal, Header, Input)
- Organize stories by folder (e.g., `Components/Button`)
- Match Storybook theming with the main app
- Set up Chromatic for visual regression testing (optional)
- Add comprehensive documentation and contributor guidelines

---

## 📁 Folder Structure
src/
├── app/
│   └── components/
│       ├── button/
│       │   ├── button.component.ts
│       │   ├── button.component.html
│       │   ├── button.component.scss
│       │   └── button.stories.ts
│       ├── header/
│       ├── input/
│       ├── card/
│       └── modal/
├── stories/
│   ├── assets/
│   ├── Configure.mdx
│   └── page.stories.ts
.storybook/
│   ├── main.ts
│   └── preview\.ts

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ui-library.git
cd ui-library
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Storybook

```bash
npm run storybook
```

Open your browser and visit [http://localhost:6006](http://localhost:6006)

---

## Adding New Components

1. **Create a new folder under `src/app/components/`**
2. **Define your component logic (HTML, SCSS, TS)**
3. **Create a corresponding `.stories.ts` file in the same folder**

---

## Optional: Chromatic Integration

To enable visual regression testing and cloud previews:

1. Install Chromatic:

```bash
npx chromatic --project-token=<your-token>
```

2. Configure in CI/CD if needed.

---

## Tech Stack

* **Framework**: Angular
* **Language**: TypeScript / JavaScript
* **Styling**: SCSS (modular)
* **Docs & Dev Tools**: Storybook, Chromatic (optional)

---

### To Add a New Story:

1. Place your component under `src/app/components/`
2. Add a `.stories.ts` file in the same folder
3. Follow naming conventions and folder structure
4. Run `npm run storybook` to preview your story

---

## ✅ Project Milestones

* [x] Storybook initialized
* [x] 5+ components documented
* [x] Theming aligned
* [x] README added
* [x] Optional: Chromatic support
