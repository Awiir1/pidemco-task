# Pidemco Task Manager

Pidemco is a task management application built with **Next.js**, **TypeScript**, **Ant Design**, **Tailwind CSS**, **React Query**, and **Jotai** for state management. This project allows users to create, track, and manage their tasks efficiently.

## Features

- 📅 **Task Creation**: Users can create tasks with a title, description, and due date.
- 🗂 **Task Management**: View and manage tasks dynamically.
- 📊 **Dashboard Overview**: Summary of tasks including progress statistics.
- 🔄 **API Integration**: Uses **React Query** for efficient data fetching.
- 🎨 **Modern UI**: Styled with **Ant Design** and **Tailwind CSS**.
- ⚡ **State Management with Jotai**: Switched from **Recoil** to **Jotai** for better performance and simplicity.

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (v18 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Awiir1/pidemco-task.git
   ```
2. Navigate to the project directory:
   ```sh
   cd pidemco-task
   ```
3. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Project
To start the development server, run:
```sh
npm run dev
# or
yarn dev
```
Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
📂 pidemco-task
├── 📂 app               # Next.js App Router structure
│   ├── 📂 dashboard    # Dashboard page
│   ├── 📂 components   # Reusable UI components
│   ├── 📂 lib          # API calls and state management
│   ├── 📜 layout.tsx   # Root layout
│   ├── 📜 page.tsx     # Main entry page
├── 📂 public           # Static assets
├── 📂 styles           # Global styles
├── 📜 next.config.js   # Next.js configuration
├── 📜 package.json     # Dependencies and scripts
└── 📜 README.md        # Project documentation
```

## Migration from Recoil to Jotai
The project initially used **Recoil** for state management but has been migrated to **Jotai** due to:
- Simpler API and smaller bundle size
- Better React Server Components (RSC) support
- More flexible state handling

### Key Changes
- Removed **RecoilRoot** from `Providers.tsx`
- Replaced `atom` from Recoil with Jotai's `atom`
- Used `useAtom` instead of `useRecoilState`

Example:
```tsx
// Old (Recoil)
import { atom, useRecoilState } from "recoil";
const tasksState = atom({ key: "tasksState", default: [] });
const [tasks, setTasks] = useRecoilState(tasksState);

// New (Jotai)
import { atom, useAtom } from "jotai";
const tasksState = atom([]);
const [tasks, setTasks] = useAtom(tasksState);
```

## Contributing
Contributions are welcome! Feel free to submit an issue or open a pull request.

## License
This project is licensed under the MIT License.

