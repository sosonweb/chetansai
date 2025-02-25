function handleZipcodeBlur() {
    const zipcodeInput = document.getElementById("zip");
    const zipcode = zipcodeInput.value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "zip.json");
    xhr.onload = function() {
      if (xhr.status === 200) {
        const zipcodes = JSON.parse(xhr.responseText);
        const match = zipcodes.find(function(zip) {
          return zip.zip === zipcode;
        });
        if (match) {
          const city = match.city;
          const state = match.state;
          const cityPlaceholder = document.getElementById("city");
          const statePlaceholder = document.getElementById("state");
          cityPlaceholder.textContent = city;
          statePlaceholder.textContent = state;
        } else {
          const invalidZipMessage = document.createElement("span");
          invalidZipMessage.textContent = "Invalid zip";
          zipcodeInput.parentNode.insertBefore(invalidZipMessage, zipcodeInput.nextSibling);
        }
      }
    };
    xhr.send();
  }
  