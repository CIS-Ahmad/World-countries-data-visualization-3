import { countries } from "./assets/Data/data.js";
let Asce = true;
let FILTER_COUNTRIES = [...countries];

function getElementUsingID(ID) {
  return document.getElementById(ID);
}

function createElement(
  name,
  className,
  id = null,
  textContent = "",
  father = null,
) {
  const element = document.createElement(name);
  if (className) element.classList.add(className);

  if (textContent !== "") {
    element.textContent = textContent;
  }

  if (id) {
    element.id = id;
  }

  if (father) {
    const parent = getElementUsingID(father);
    parent.appendChild(element);
  } else {
    document.body.appendChild(element);
  }

  return element;
}

function applyFiltersOnData(pre) {
  if (!pre) {
    FILTER_COUNTRIES = [...countries];
    return;
  }

  pre = pre.toLowerCase();
  let tempCountries = [...countries];

  FILTER_COUNTRIES = tempCountries.filter((c) =>
    c.name.toLowerCase().startsWith(pre),
  );
  tempCountries = tempCountries.filter(
    (c) => !c.name.toLowerCase().startsWith(pre),
  );
  FILTER_COUNTRIES.push(
    ...tempCountries.filter((c) => c.capital?.toLowerCase().startsWith(pre)),
  );
  tempCountries = tempCountries.filter(
    (c) => !c.capital?.toLowerCase().startsWith(pre),
  );
  FILTER_COUNTRIES.push(
    ...tempCountries.filter((c) =>
      c.languages.some((lang) => lang.toLowerCase().startsWith(pre)),
    ),
  );
}

function getTotalPepole() {
  return countries.reduce((sum, c) => sum + c.population, 0);
}

function SortCountrys(btnName) {
  if (btnName === "Name") {
    FILTER_COUNTRIES = Asce
      ? FILTER_COUNTRIES.sort((a, b) => a.name.localeCompare(b.name))
      : FILTER_COUNTRIES.sort((a, b) => b.name.localeCompare(a.name));
  } else if (btnName === "Capital") {
    FILTER_COUNTRIES = Asce
      ? FILTER_COUNTRIES.sort((a, b) =>
          (a.capital ?? "").localeCompare(b.capital ?? ""),
        )
      : FILTER_COUNTRIES.sort((a, b) =>
          (b.capital ?? "").localeCompare(a.capital ?? ""),
        );
  } else {
    FILTER_COUNTRIES = Asce
      ? FILTER_COUNTRIES.sort((a, b) => a.population - b.population)
      : FILTER_COUNTRIES.sort((a, b) => b.population - a.population);
  }
}

function createFlagElement(id) {
  createElement("div", "GridElement", `ELement${id + 1}`, "", "outputFlag");
  const img = createElement("img", "", "", "", `ELement${id + 1}`);
  img.src = FILTER_COUNTRIES[id].flag;
  createElement(
    "h4",
    "CountryName",
    "",
    FILTER_COUNTRIES[id].name,
    `ELement${id + 1}`,
  );

  createElement(
    "div",
    "countrieDescription",
    `countrieDescription-${id}`,
    "",
    `ELement${id + 1}`,
  );
  createElement(
    "p",
    "",
    "",
    `Capital : ${FILTER_COUNTRIES[id].capital ?? "N/A"}`,
    `countrieDescription-${id}`,
  );
  createElement(
    "p",
    "",
    "",
    `Language: ${FILTER_COUNTRIES[id].languages ?? "N/A"}`,
    `countrieDescription-${id}`,
  );
  createElement(
    "p",
    "",
    "",
    `population: ${FILTER_COUNTRIES[id].population ?? 0}`,
    `countrieDescription-${id}`,
  );
}

function createFlagElements() {
  for (let index = 0; index < FILTER_COUNTRIES.length; index++) {
    createFlagElement(index);
  }
}

function createStatisticsElement(id, name, total, max = 0) {
  createElement("div", "displayRow", `displayRow${id}`, "", "statisticsgroup");
  createElement(
    "div",
    "MaxContant",
    `MaxContant1-${id}`,
    "",
    `displayRow${id}`,
  );
  createElement("p", "reslttext", "", name, `MaxContant1-${id}`);
  createElement(
    "div",
    "prograssbar",
    `prograssbar2-${id}`,
    "",
    `displayRow${id}`,
  );

  const prograssbar = createElement("p", "bar", "", "", `prograssbar2-${id}`);

  if (max) prograssbar.style.width = (total / max) * 100 + "%";
  else {
    prograssbar.style.width = Math.ceil((total / getTotalPepole()) * 100) + "%";
  }
  createElement(
    "div",
    "MaxContant",
    `MaxContant2-${id}`,
    "",
    `displayRow${id}`,
  );
  createElement("p", "reslttext", "", total, `MaxContant2-${id}`);
}

function createStatisticsPopulationElements() {
  getElementUsingID("statisticsgroup").innerHTML = "";
  SortCountrys("");

  createStatisticsElement(-1, "world", getTotalPepole());
  for (let index = 0; index < FILTER_COUNTRIES.length; index++) {
    createStatisticsElement(
      index,
      FILTER_COUNTRIES[index].name,
      FILTER_COUNTRIES[index].population,
    );
  }
}

function getTotalLanguage() {
  return FILTER_COUNTRIES.reduce((acc, country) => {
    if (country.languages) {
      country.languages?.forEach((langItem) => {
        acc[langItem] = (acc[langItem] || 0) + 1;
      });
    }

    return acc;
  }, {});
}

function sortLang() {
  return Object.entries(getTotalLanguage())
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total);
}

function createStatisticslanguageElements() {
  getElementUsingID("statisticsgroup").innerHTML = "";
  const Lang = sortLang();
  for (let index = 0; index < Lang.length; index++) {
    createStatisticsElement(
      index,
      Lang[index].name,
      Lang[index].total,
      Lang[0].total,
    );
  }
}

function Display() {
  const output = getElementUsingID(`outputFlag`);
  output.innerHTML = "";
  createFlagElements();
  createStatisticsPopulationElements();
}

function logicDisplayFunction() {
  if (Asce) {
    Asce = false;
  } else {
    Asce = true;
  }
  Display();
}

function createMainBtnWithEvent(btnName) {
  const btn = createElement("button", "", "", btnName, "butGroup");

  btn.addEventListener("click", () => {
    SortCountrys(btnName);
    logicDisplayFunction();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getElementUsingID("NumOfCo").textContent = countries.length;
  getElementUsingID("totalAfterSearch").style.display = "none";

  createMainBtnWithEvent("Name");
  createMainBtnWithEvent("Capital");
  createMainBtnWithEvent("populations");

  const imgLink = createElement("a", "", "imgLink", "", "butGroup");
  imgLink.href = "#outputstatistics";
  const img = createElement("img", "", "", "", "imgLink");
  img.src = "assets/SVG/statistics.svg";
  const btnLanguage = createElement("button", "", "", "Language", "ButstGroup");
  const btnPopulationst = createElement(
    "button",
    "",
    "",
    "Population",
    "ButstGroup",
  );

  btnLanguage.addEventListener("click", () => {
    createStatisticslanguageElements();
  });
  btnPopulationst.addEventListener("click", () => {
    createStatisticsPopulationElements();
  });

  const serachTool = getElementUsingID("SerchBox");
  serachTool.addEventListener("input", () => {
    applyFiltersOnData(serachTool.value);

    SortCountrys("Name");
    getElementUsingID("totalAfterSearch").style.display = "flex";

    getElementUsingID("NumberofCuninserach").textContent =
      FILTER_COUNTRIES.length;
    logicDisplayFunction();
  });
});

logicDisplayFunction();

/*
program flow
1. we create the layout 

2.get serach tool text

3. get the match like the follwing
    1. return all country name they have match 
    2. then add all capital city (if not exist in the array)
    3. then add all country they have language start with same text (if not exist in the array)

4. save all of them in array 

5. the 3 main btn if we have match then user click on them 
sort the array they have the contatnt asce or desc then redisply it 

*/
