function generateHTMLTable(filteredRequests) {
  let htmlTable = `
      <html>
      <head>
        <title>Live Viewer</title>
        <style>
          #dataTable {
            border-collapse: collapse;
            width: 100%;
          }
  
          #dataTable th,
          #dataTable td {
            padding: 8px;
            border: 1px solid #ccc;
          }
  
          #dataTable th {
            background-color: #f2f2f2;
            font-weight: bold;
          }
  
          #searchInput {
            margin-bottom: 8px;
          }
        </style>
      </head>
      <body>
        <input type="text" id="searchInput" placeholder="Search by Store Name or Name" />
        <table id="dataTable">
          <thead>
            <tr>
              <th>Store Name</th>
              <th>Name</th>
              <th>Source</th>
              <th>External User ID</th>
              <th>Is Kid</th>
            </tr>
          </thead>
          <tbody>`;

  // Iterate over filteredRequests and add table rows
  for (const request of filteredRequests) {
    htmlTable += `
        <tr>
          <td>${request.storeName}</td>
          <td>${request.name}</td>
          <td>${request.source}</td>
          <td>${request.externalUserId}</td>
          <td>${request.isKid}</td>
        </tr>`;
  }

  htmlTable += `
          </tbody>
        </table>
  
        <script>
          const searchInput = document.getElementById("searchInput");
          const dataTable = document.getElementById("dataTable");
          const rows = dataTable.getElementsByTagName("tr");
  
          searchInput.addEventListener("input", () => {
            const searchValue = searchInput.value.trim().toLowerCase();
  
            for (let i = 1; i < rows.length; i++) {
              const storeName = rows[i].getElementsByTagName("td")[0].textContent.toLowerCase();
              const name = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();
  
              if (storeName.includes(searchValue) || name.includes(searchValue)) {
                rows[i].style.display = "";
              } else {
                rows[i].style.display = "none";
              }
            }
          });
        </script>
      </body>
      </html>`;

  return htmlTable;
}

module.exports = generateHTMLTable;
