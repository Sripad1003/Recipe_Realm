# Recipe Relam

Recipe Relam is a web application that allows users to generate recipes based on selected ingredients. With an intuitive interface and a smart chatbot for queries, you can easily discover new dishes using what you have at hand!

## Features

- **Ingredient-based Recipe Generation:** Enter ingredients to get recipe suggestions.
- **Auto-suggest Search:** Fast ingredient selection with auto-suggestions.
- **Interactive Chatbot:** Get assistance and answers to your cooking-related questions.
- **User-friendly Interface:** Simple and clean UI for easy navigation.

## How to Use

<div className='container' id="container-2">
  <h1>How-to-Use</h1>
  <p>1. Enter each ingredient in the search bar and press enter if you find it in the auto-suggest list. Check if all the ingredients appear below in the yellow boxes. After ensuring that all the items have been added, click the 'Generate Recipe' button. Your recipe will be generated based on the selected ingredients.</p>
  <img src="Frontend/src/components/pic1.png" alt="Search Bar" />
  <p>2. Select any dish.</p>
  <img src="Frontend/src/components/pic2.png" alt="Yellow Boxes" />
  <p>3. Use the chatbot for any queries</p>
  <img src="Frontend/src/components/pic3.png" alt="Generate Button" />
</div>

## Setup

Follow these steps to set up and run both the frontend and backend of Recipe Relam:

### 1. Clone the Repository

```bash
git clone https://github.com/Sripad1003/Recipe_Relam.git
cd Recipe_Relam
```

### 2. Backend Setup

- Ensure you have Python and Jupyter Notebook installed.
- Open and run the `recipe_realm.ipynb` notebook.  
  This notebook will start the backend server and generate an **ngrok tunnel link** (public URL) to your backend.
- Copy the generated ngrok link.

#### Update the Frontend for Chatbot Connection

- Open the file:  
  `Frontend/src/components/chatbot/Chatbot/ActionProvider.js`
- Replace the existing backend URL with your new ngrok link to ensure the chatbot connects properly.

#### Start the Backend Server

- Move to the backend directory (if applicable) and install dependencies:
  ```bash
  npm install
  ```
- Start the backend server:
  ```bash
  npm run server
  ```

### 3. Frontend Setup

- Move to the frontend directory:
  ```bash
  cd Frontend
  ```
- Install frontend dependencies:
  ```bash
  npm install
  ```
- Start the frontend development server:
  ```bash
  npm start
  ```
  By default, the app will be available at `http://localhost:3000`.

## Technologies Used

- **Jupyter Notebook** (Python) — Backend & recipe generation logic
- **JavaScript (React.js)** — Frontend
- **Node.js/Express** — Backend API and routing
- **CSS** — Styling
- **HTML** — Markup

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
