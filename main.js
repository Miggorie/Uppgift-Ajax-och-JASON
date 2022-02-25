let input = $("#input");
let fetchBtn = $("#fetchBtn");
let tableBody = $("#table tbody");

fetchBtn.on("click", function () {
  let url =
    "http://codexplained.se/lorem_text_random.php?numberOfWords=" + input.value;
  console.log(url);

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      tableBody.html(`      <tr> 						
      <td> ${input.value}</td>				
      <td> ${data} </td>
  </tr>
`);
    })
    .catch((error) => {
      console.log(error);
    });
  input.value = "";
});
