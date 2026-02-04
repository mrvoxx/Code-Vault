# 📦 npm (Node Package Manager)

✨ **npm (Node Package Manager)** is used to install and manage packages in **Node.js** projects.  
🚀 npm comes **bundled with Node.js**, so no separate installation is required.

📄 **Create `package.json`**
```bash
npm install
🧠 Quick command reference
npm i pkg        → install locally
npm un pkg       → uninstall locally
npm i -g pkg     → install globally
npm un -g pkg    → uninstall globally
npm i pkg -D     → install as dev dependency

npm init
npm init -y

📦 Install package locally (only for current project)
npm install package-name
npm i package-name
npm i express

🌍 Install package globally (available system-wide)
npm install -g package-name
npm i -g package-name
npm i -g nodemon

🧪 Install dev dependency (used during development only)
npm install package-name --save-dev
npm i package-name -D
npm i nodemon -D

❌ Uninstall package locally
npm uninstall package-name
npm un package-name
npm un express

🗑️ Uninstall package globally
npm uninstall -g package-name
npm un -g package-name
npm un -g nodemon


📁 node_modules folder contains all installed packages.
🚫 It should not be pushed to GitHub.
♻️ It can be recreated anytime using:
