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
// Programmet söker efter filmer
// Programmet uppdaterar automatiskt på sidan för varje bokstav.
// Programmet visar titel, bild och text

let input = $("#input");
let fetchBtn = $("#fetchBtn");
let clearBtn = $("#clearBtn");
let ul = $("#ul");

fetchBtn.on("click", function (event) {
  let url = "http://www.omdbapi.com/?apikey=51741695&s=";
  console.log(url);

  fetch(url + input.val())
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.Search);
      const list = data.Search;

      let movieHTML = "";
      for (let i = 0; i < list.length; i++) {
        movieHTML += `<li>
 <img src="${data.Search[i].Poster}" />
<h2>${data.Search[i].Title}</h2>
<p>${data.Search[i].Year}</p>
 </li>`;
      }

      $("#ul").append(movieHTML);
    })
    .catch((error) => {
      console.log(error);
    });
  $("#input").val("");
});

clearBtn.on("click", function (event) {
  $("ul").empty();
});
