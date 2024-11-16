function searchSuperhero() {
    const query = document.getElementById("search").value.trim();
    const resultDiv = document.getElementById("result");

    // Clear previous results
    resultDiv.innerHTML = "";

    // Perform the AJAX request
    fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
        .then(response => response.text())
        .then(data => {
            resultDiv.innerHTML = data;
        })
        .catch(error => {
            console.error("Error:", error);
            resultDiv.innerHTML = "<p class='error'>An error occurred while processing the request.</p>";
        });
}
