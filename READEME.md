# TEMPLATE

# Put Your Title Here

> A desktop app built on Electron for minimizing images. Live demo [here](http://demoexamplecomingsoon.com 'Not a real link') (coming soon).

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

Example: <br/>
This is an app to optimize images for websites. It was my first attempt at Electron and I had some fun with it!

## Tech Stack

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

## Features

Main window:

![Home Page](assets/screenshots/homepage.png 'Home Page')

- Shows where you can brows your files and slider allows you to adjust the size. Output Path box shows you where the resizedimage will be saved:

Browsing for images:

![Browse](assets/screenshots/browsebuttonaction.png 'Home Page')

- When you click the browse button a folder opens to select your image.

Image Folder:

![ImageShrink folder](assets/screenshots/imageshrinkfile.png 'Home Page')

- New folder that images are saved in:

Custom Menu:

![Menu](assets/screenshots/custommenu.png 'Home Page')

- Menu items created specific for ImageShrink:

Menu Buttons:

![Menue about](assets/screenshots/customabout.png 'Home Page')
![Menue file](assets/screenshots/customfilemenu.png 'Home Page')

- Custom menu lists created specicifally for ImageShrink:

About Window:

![About Window](assets/screenshots/aboutwindow.png 'Home Page')

- When you click the about menu button details about the program are in new window.

Log File:

![log file](assets/screenshots/logfile.png 'Home Page')

- Every images that is saved to the ImageShrink folder and every error that occurs, is logged in a file, that is stored in a Log folder in the computer's Library folder.

## Setup

### Install Dependencies

```
npm install
```

### Run

```
npm start
npm run dev (with Nodemon)
```

### Package

```
npm run package-mac
npm run package-win
npm run package-linux
```

## Logs

- macOS: ~/Library/Logs/imageshrink/main.log
- Windows: %USERPROFILE%\AppData\Roaming\imageshrink\logs\main.log
- Linux: ~/.config/imageshrink/logs/main.log

## Project Status

Status: Complete - Todo list pending

## Room for Improvement

Improvement Thoughts:

- Slider button is not working properly, number measured by the slideris suppose to appear as you move it. I need to fix this.

- the file name that you selext is supposed to reaplce the "Upload File" place holder. I need to fix this.
  To do:

- [ ] fix slider
- [ ] display image name

## Acknowledgements

Example:

Many thanks to [Brad Traversy](https://www.traversymedia.com/), this project was based on [this tutorial](https://www.udemy.com/course/electron-from-scratch/).

## Contact

Created by [@azulverdosa](ellemocambo@gmail.com) - feel free to contact me!

- [LinkedIn](https://www.linkedin.com/in/avatorre/ 'linked')

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

## License

MIT License Copyright (c) [2023] [AvaElise]
