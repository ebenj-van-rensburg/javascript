let myJSON = [
    {
        "name" : "Eben",
        "status" : true
    },
    {
        "name" : "Link",
        "status" : true
    },
    {
        "name" : "Eddie", 
        "status" : false
    }
];

const jsonStr = JSON.stringify(myJSON);
const jsonObj = JSON.parse(jsonStr);
jsonObj.forEach((e) => {
    console.log(e);
});