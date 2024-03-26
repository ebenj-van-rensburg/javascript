let life = [{
    "lifeList": ["canines", "felines", "ursines", "bovines", "mustalids", "lagomorphs"],
    "status": true
},
{
    "lifeList": ["deciduous", "evergreen", "angiosperms", "gymnosperms"],
    "status": true
},
{
    "lifeList": ["acrasia", "protostelia", "fonticula", "dictyostelium"],
    "status": true
}];

JSONLoop();

function JSONLoop() {
    life.forEach((e) => {
        console.log(`${e.lifeList} = ${e.status}`);
    })
}