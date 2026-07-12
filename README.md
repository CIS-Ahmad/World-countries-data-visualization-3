# 🌍 World Countries Data Visualization 3

A complete country data exploration and visualization application built with **HTML, CSS, and Vanilla JavaScript**.  
The application allows users to search countries by name, capital, or language, sort results, view country information cards, and analyze population and language statistics through dynamic visualizations.

---

## 🌐 Live Demo

👉 Website: https://cis-ahmad.github.io/World-countries-data-visualization-3/

---

# 📖 About

**World Countries Data Visualization 3** is an advanced version of the World Countries Data projects.

This application combines:

- 🔎 Advanced searching.
- 🔤 Sorting functionality.
- 🌍 Country information display.
- 📊 Population statistics.
- 🗣️ Language statistics.

Users can search through country data using multiple criteria:

- Country name.
- Capital city.
- Languages.

The application dynamically updates the interface based on user input and generates statistics using processed country data.

This project was developed to practice:

- Complex data filtering.
- Data visualization.
- Dynamic UI generation.
- JavaScript modules.
- Advanced array operations.
- State management.

---

# ✨ Features

## 🔎 Advanced Search System

- Search countries by:
  - Country name.
  - Capital city.
  - Language.

- Real-time filtering while typing.
- Displays the number of matching countries.
- Prioritizes results based on:
  - Name matches.
  - Capital matches.
  - Language matches.

---

## 🌍 Country Information Cards

Each country is displayed with:

- Country flag.
- Country name.
- Capital city.
- Languages.
- Population.

Country cards are generated dynamically using JavaScript.

---

## 🔤 Sorting System

Users can sort countries by:

- Name.
- Capital.
- Population.

Sorting supports:

- Ascending order.
- Descending order.

The application dynamically updates the displayed results after sorting.

---

## 📊 Population Statistics

The statistics section provides:

- Total world population.
- Population comparison between countries.
- Visual progress bars based on population percentage.

---

## 🗣️ Language Statistics

The application can analyze:

- Languages used by countries.
- Number of countries using each language.
- Language ranking.

Results are displayed using dynamic progress bars.

---

## ⚡ General Features

- Dynamic DOM creation.
- Responsive grid layout.
- JavaScript ES6 modules.
- No external libraries.
- Real-time data processing.
- Clean separation between data and application logic.

---

# 🛠️ Built With

- HTML5
- CSS3
- JavaScript (ES6)
- JavaScript Modules

---

# 📚 JavaScript Concepts Used

## DOM Manipulation

- Creating elements dynamically.
- Updating page content.
- Managing generated components.

## Array Methods

- `filter()`
- `sort()`
- `reduce()`
- `map()`
- `forEach()`

## Data Processing

- Searching and filtering datasets.
- Grouping language information.
- Calculating statistics.
- Sorting complex objects.

## Other Concepts

- ES6 Modules.
- Event Listeners.
- State Management.
- Optional Chaining.
- Template-based rendering.
- User input handling.

---

# 📂 Project Structure

```
World-countries-data-visualization-3/
│
├── index.html
├── style.css
├── script.js
│
├── const/
│   └── Data/
│       └── data.js
│
└── assets/
    │
    ├── Image/
    │   └── map_image.jpg
    │
    └── SVG/
        └── statistics.svg
```

---

# ⚙️ How It Works

## 1. Loading Country Data

The application imports country information from a JavaScript module:

```javascript
import { countries } from "./const/Data/data.js";
```

The dataset contains information such as:

- Country name.
- Capital.
- Flag.
- Population.
- Languages.

---

# 🔎 Searching Process

When the user enters text:

1. The application checks the input.
2. Searches through:
   - Country names.
   - Capital cities.
   - Languages.
3. Creates a filtered country list.
4. Updates the number of matching countries.
5. Refreshes the displayed cards.

---

# 🌍 Country Display Process

For every matched country:

The application dynamically creates:

```
Country Card
│
├── Flag
├── Country Name
├── Capital
├── Languages
└── Population
```

---

# 📊 Statistics Process

## Population Statistics

The application:

1. Calculates world population.
2. Sorts countries.
3. Calculates percentage values.
4. Creates progress bars.

---

## Language Statistics

The application:

1. Counts language usage.
2. Sorts languages by frequency.
3. Creates visual comparisons.

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/CIS-Ahmad/World-countries-data-visualization-3.git
```

## Run The Project

Open:

```
index.html
```

in your preferred browser.

No installation or external packages are required.

---

# 🔮 Future Improvements

Possible improvements for future versions:

- Add detailed country pages.
- Add continent filtering.
- Add interactive world map.
- Add charts using visualization libraries.
- Add pagination for large datasets.
- Add dark/light theme.
- Add animations for country cards.
- Add API integration for live country information.
- Improve mobile responsiveness.

---

# 👨‍💻 Author

**ICE**

GitHub:  
https://github.com/CIS-Ahmad

Portfolio:  
https://cis-ahmad.github.io/portfolio/
