# How to Run the Full Gumroad Project (Frontend + Backend )

Follow these simple steps to set up and run the Gumroad project on your local machine.

---

## ✅ Step 1: Download the Project

Clone the repository from GitHub:

```bash
git clone https://github.com/rahul-misala/gumroad
```

If you're unable to clone it, download the ZIP file directly from GitHub, extract it, and open the extracted folder using **VS Code**.

---

## ✅ Step 2: Open the Project in VS Code

Make sure to **open the root `gumroad` folder** in VS Code — not just the `frontend` or `backend` folders.

Your folder structure should look like this:

```
gumroad
├── backend
├── frontend
```

---

## ✅ Step 3: Set the `My_dirName` Path in `Fileupload.js`

1. Open `backend/routes/Fileupload.js`
2. Locate the `My_dirName` variable.
3. Replace its value with the **full path** to your `frontend` folder.
4. Use **double backslashes (`\\`)** for Windows paths.

Example:

```jsx
const My_dirName = "C:\\Users\\rahul\\OneDrive\\Desktop\\gumroad\\frontend"7
```

---

## ✅ Step 4: Set the `My_dirName` Path in `Imageupload.js`

1. Open `backend/routes/Imageupload.js`
2. Locate the `My_dirName` variable.
3. Again, set it to the **full path** of the `frontend` folder using **double backslashes**.

Example:

```jsx
const My_dirName = "C:\\Users\\rahul\\OneDrive\\Desktop\\gumroad\\frontend"
```

---

## ✅ Step 5: Run the Frontend

1. Open a new terminal in VS Code:
    - Click the three-dot menu on the top bar → `Terminal` → `New Terminal`.
2. Run the following commands:

```bash
cd frontend
npm install
npm run dev
```

Your React app will start running at `http://localhost:5173` (or whichever port Vite chooses).

---

## ✅ Step 6: Run the Backend

1. Open another new terminal in VS Code.
2. Run the following commands:

```bash
cd backend
npm install
node index.js
```

The backend server will start on port `3000` (or as configured).

---

You're all set! 🎉

The Gumroad project should now be running successfully on your local machine.