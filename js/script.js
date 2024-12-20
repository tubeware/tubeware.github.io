// Function to test backend connection
async function testConnection() {
    const ipInput = document.getElementById("ipAddress").value;
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");

    // Clear previous messages
    resultDiv.textContent = '';
    errorDiv.textContent = '';

    if (!ipInput) {
        errorDiv.textContent = "Please enter a valid IP address.";
        return;
    }

    const url = `http://${ipInput}:5000/api/data`;

    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            resultDiv.textContent = `Success! Received data: ${JSON.stringify(data)}`;
        } else {
            errorDiv.textContent = `Failed to connect. Status: ${response.status}`;
        }
    } catch (error) {
        errorDiv.textContent = `Error: Unable to reach ${url}. Please ensure the server is running and reachable.`;
    }
}

// Attach event listener to the button
document.getElementById("testButton").addEventListener("click", testConnection);
