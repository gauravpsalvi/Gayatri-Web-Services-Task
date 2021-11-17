

function fetchData(URL) {
    fetch(URL).then(response => response.json()).then(customerData => {
        var tableData = [];
        for (var i = 0; i < customerData.length; i++) {
            for (var key in customerData[i]) {
                if (tableData.indexOf(key) === -1) {
                    tableData.push(key);
                }
            }
        }
    }).catch((err) => console.log("Looks like there was a problem", err))
}