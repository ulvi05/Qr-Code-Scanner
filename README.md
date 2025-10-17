# 📷 ScanItUp - QR Code Scanner

A modern **QR Code Scanner** built with React that uses your device's camera to detect and decode QR codes in real time.  
It features a sleek UI, live webcam preview, automatic link detection, and toast notifications.

---

## 🚀 Features

- 🎥 **Live Camera Preview** (uses the back camera if available)
- 🔍 **QR Code Detection** powered by `jsQR`
- 📋 **Copy to Clipboard** functionality
- 🌐 **Auto-open links** when QR content is a URL
- 🔔 **Toast Notifications** using `react-toastify`
- 🎨 **Modern UI** built with Tailwind CSS

---

## 🛠️ Technologies Used

| Technology                                                              | Purpose              |
| ----------------------------------------------------------------------- | -------------------- |
| [React](https://react.dev/)                                             | Frontend framework   |
| [jsQR](https://github.com/cozmo/jsQR)                                   | QR decoding logic    |
| [react-webcam](https://www.npmjs.com/package/react-webcam)              | Access device camera |
| [react-toastify](https://fkhadra.github.io/react-toastify/introduction) | Toast notifications  |
| [Tailwind CSS](https://tailwindcss.com/)                                | Styling and layout   |

---

## 📦 Installation

### 1️⃣ Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

## ▶️ Run the app

```bash
npm run dev
```

---

## 🧩 Key Components

`QrScanner.jsx`

Handles camera feed and QR detection

Uses `jsQR` to decode images

Displays decoded data

Includes **Copy**, **Go to Link**, and **Rescan** buttons

`WebcamCapture.jsx`

Manages the webcam view using `react-webcam`

Captures images every 700ms while scanning is active

---

## 📱 Screenshot (example)

The UI shows a live camera feed with an animated green scanning frame, decoded QR text, and control buttons.

---

## ⚠️ Notes

- Camera permissions must be granted by the user.
- Works only over **HTTPS** or **localhost** (browser security policy).

* Automatically selects the rear camera on mobile devices.

---

## 📄 License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
You’re free to use, modify, and distribute it.

---

<p align="center"> <b>Developed by:</b> <a href="#">Ulvi Aghazade</a> 💻 </p>
