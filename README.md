<div align="center">

  ![PewPewPatrol-logo](https://github.com/user-attachments/assets/93c70c77-3c35-466b-bebb-b24e73306c10)

</div>

---

## 🤔 About the Project

**PewPewPatrol** is a 2D space shooter game developed during my first year of study at Kuben High School.  
The project is written mainly in JavaScript, with a focus on game logic, collision detection, and real-time rendering.

The project has since been refactored and polished to be more presentable for GitHub and portfolio use.

---

## 🎮 Gameplay Features

- Dynamic difficulty levels
- Multiple enemy types:
  - Asteroids of varying sizes
  - Enemy (red) spaceships with attack waves
- Player-controlled spaceship with health and invincibility frames
- Score system with leaderboard persistence
- Sound effects and background music
- Customizable controls

---

## 🕹️ Controls

Controls can be fully customized in the **Settings menu**.  
By default:

- **Move Left:** `←` / `A`
- **Move Right:** `→` / `D`
- **Shoot:** `Space` / `Mouse Click`
- **Pause:** `P` or `Esc`

The on-screen control tips update automatically when main controls are changed.

---

## ▶️ How to Run the Game

This project does **not** require any build tools or dependencies.

### Option 1: Using VS Code (Recommended)

1. Open the project folder in **Visual Studio Code**
2. Install the [**Live Server**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
3. Right-click on [`index.html`](/index.html)
4. Select **"Open with Live Server"**

Example:

![Example of runing the game in VSCode](https://github.com/user-attachments/assets/f7f2735c-dd8f-44a2-ad11-52e05030e5ee)

---

### Option 2: Using any local web server

You can also run the game using:

- Python (`python -m http.server`)
- Node.js (`http-server`)
- Any other local static server

        ⚠️ Opening the file directly (`file://`) may cause audio or asset loading issues. A local server is recommended.
