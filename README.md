# Drum Kit 🥁

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
</p>


A fun, interactive drum kit web application built using HTML, CSS, and JavaScript. This project was created as part of a Web Development Bootcamp on Udemy to practice DOM manipulation and event handling.

## 🔗 Live Demo

**[👉 Play the Drums Here](https://ash-the-k.github.io/Drum-Kit/)**

## 🌟 Overview

The Drum Kit allows users to play different drum sounds by either clicking on the buttons or pressing the corresponding keys on their keyboard. It features visual feedback (animations) and distinct sounds for every key interaction.

## 🛠️ Technologies Used

* **HTML5:** Structure of the webpage.
* **CSS3:** Styling, animations, and responsive layout (using Google Fonts & Font Awesome).
* **JavaScript (ES6):** Game logic, event listeners, and audio playback.

## 🎮 How to Play

1.  **Click:** Click on any of the drum buttons (`w`, `a`, `s`, `d`, `j`, `k`, `l`) to play a sound.
2.  **Type:** Press the corresponding keys on your keyboard to trigger the drums.

## 📂 Project Structure

* `index.html`: The main structure containing the buttons and footer.
* `styles.css`: Custom styling for the dark theme (`#283149`), button images, and press animations (`.pressed`).
* `index.js`: Contains the logic for:
    * Detecting button clicks via Event Listeners.
    * Detecting keyboard presses via `keydown` events.
    * Switch statements to handle sound mapping.
    * Animation timing using `setTimeout`.

## 🧠 Key Learnings & Concepts

This project helped revise the following concepts:
* **DOM Manipulation:** Selecting elements (`document.querySelectorAll`) and modifying classes (`classList.add/remove`).
* **Event Listeners:** Handling both mouse clicks and keyboard events.
* **JavaScript Objects:** Using the `Audio` object to handle sound playback.
* **Asynchronous JS:** Using `setTimeout` to handle the removal of animation classes after a delay.

## 🔗 Author

**Ash-the-k**
* [GitHub Profile](http://github.com/Ash-the-k/)
* [Project Repository](https://github.com/Ash-the-k/Drum-Kit)

---
*Created as part of a Web Development course.*