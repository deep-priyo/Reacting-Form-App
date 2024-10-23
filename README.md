# 🎉 React User Management App 🎉

Welcome to the **React User Management App**! This app allows you to seamlessly add and remove users via a form and display them as cards. It's simple, sleek, and interactive! 🚀

## 📝 Features

- ➕ **Add new users** with a form.
- 🖼️ **Display users** as stylish cards.
- ❌ **Remove users** with the click of a button.

## 🖼️ Screenshot

![App Screenshot](./Screenshot.png)



## ⚙️ How It Works

1. ✍️ Fill out the form with user details.
2. 🖱️ Hit the **Submit** button to add a user.
3. 🗑️ Click **Remove** on any card to delete that user.
   
## 🧩 Components

### 🔹 App Component
- Manages the state of the list of users. 📋
- Passes necessary data and actions to child components. 

### 🔹 Cards Component
- Displays the user data in neat cards. 🖼️
- Accepts `users` and `handleRemove` as props for user management.

### 🔹 Form Component
- Provides the form to add users. ✏️
- Calls the `handleFormSubmitData` function (passed via props) to add a new user.

## 💻 Tech Stack

- **React**: For creating interactive UIs. ⚛️
- **Tailwind CSS**: For beautiful, responsive design. 🎨

## 🤝 Contributing

Want to help make this app even better? Feel free to fork the repository and submit pull requests for any improvements or bug fixes. Contributions are always welcome! 🙌

## 📜 License

This project is licensed under the **MIT License**. Feel free to use it as you wish! 📝

---

## 🚀 Installation

Getting this app up and running on your local machine is super easy! Just follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-user-management-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd react-user-management-app
    ```

3. Install dependencies using npm:
    ```bash
    npm install
    ```

4. Start the development server and enjoy! 🎉
    ```bash
    npm start
    ```

Now you're all set! 🎊 Start adding and removing users with ease. 😊
