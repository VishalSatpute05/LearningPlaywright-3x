let userID = "abc.gmail.com";
function getData(userID, getNextData) {
    setTimeout(() => {
        console.log("data", userID);
        if(getNextData)
            {
                getNextData();
            }
    }, 2000);
}
getData("abc.gmail.com", () => {
    getData(1234, () => {
        getData(567, () => {
        });
    });
});