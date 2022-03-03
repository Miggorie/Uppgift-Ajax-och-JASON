/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */

/**
 * According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
 * 1 Required parameter: apikey
 * 2 Required parameter: One of the following i=, t= or s=
 *
 *
 * Example with parameter s=star trek
 * http://www.omdbapi.com/?apikey=51741695&s=star trek
 *
 * Example with parameter s=star trek AND y=2020
 * http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
 *
 * Example with parameter s=star trek AND type=series
 * http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
 *
 */

// Send all data to: http://www.omdbapi.com/?apikey=51741695

// Användaren skriver in en titel
// Programmet söker efter filmen

let userInput = $("#input");
let fetchBtn = $("#fetchBtn");
let ul = $("#ul");

fetchBtn.on("click", function () {
  let url = "http://www.omdbapi.com/?apikey=51741695&s=";
  console.log(url);

  fetch(url + userInput)
    .then((response) => response.json())

    .then((data) => {
      const list = data;

      list.map((item) => {
        const name = item.l;
      });
    });
  userInput.value = "";
});

// .catch((error => {console.error(error);});

// const movie = <li><img src="${poster}"><h2>${name}</h2></li>
//  document.querySelector('.movies').innerHTML+= movie;
