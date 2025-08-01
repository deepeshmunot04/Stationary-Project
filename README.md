# 🖋️ Stationary Store App

This is a **React-based Stationary Store application** where users can **register**, **login**, browse **items**, add them to **cart**, proceed to **payment**, and view a printable **receipt**.

---

## 📂 Project Structure

| File/Folder    | Description                                                           |
| -------------- | --------------------------------------------------------------------- |
| `App.js`       | Main file that defines routes and manages login/cart state.           |
| `Login.js`    | Login page for existing users.                                        |
| `Register.js` | Registration form for new users.                                      |
| `ItemList.js` | Displays available stationary items with “Add to Cart” functionality. |
| `Cart.js`     | Shows selected items with quantity, price, and total.                 |
| `Payment.js`  | Displays total amount and allows user to make payment.                |
| `Receipt.js`  | Shows a receipt with order ID, item details, total, and print option. |
| `App.css`      | Centralized styling for all components with responsive design.        |

---

## 🔐 Features

* **Login/Register**:

  * Register with username and password (stored in `localStorage`).
  * Login with registered credentials.

* **Item Selection**:

  * Browse items (e.g., Pen, Pencil, Notebook).
  * Add multiple items to cart.

* **Cart View**:

  * Quantity and unit price tracking.
  * Shows total cost dynamically.

* **Payment**:

  * Confirm purchase with “Pay Now” button.
  * Total is calculated based on cart items.

* **Receipt**:

  * Shows detailed order summary.
  * Unique order ID.
  * “Print Receipt” and “Logout” options.
---

## 💾 Storage & State Management

* **localStorage**:

  * Stores registered username and password.
* **useState (React)**:

  * Manages login status and cart items dynamically.

---

## 🧪 Technologies Used

* **Frontend**:

  * ReactJS (Hooks: `useState`, `useNavigate`)
  * JSX for UI Components
  * CSS3 for styling and responsiveness

* **Routing**:

  * `react-router-dom` for page navigation

* **Browser Storage**:

  * `localStorage` for simple user data storage

---

## 👤 Author

* **Name:** Deepesh Munot
* **Email:** [deepeshmunot71@gmail.com](mailto:deepeshmunot71@gmail.com)
* **GitHub:** [deepeshmunot04](https://github.com/deepeshmunot04)
* **LinkedIn:** [Deepesh Munot](https://www.linkedin.com/in/deepesh-munot)
