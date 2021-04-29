
// var q = 6;
// var x = Math.floor((Math.random() * q) + 1);
// console.log(`Quantidade: ${q} X: ${x}`);
// document.querySelector('img-animal-wrapper').innerHTML += `

//     `;
// <img src="../public/gnt/animal${x}.jpg" alt="Imagem de um animalzinho">
window.onload = function () {

    var myElement = document.getElementById('myImg'),
        myImgs = [
            'https://pbs.twimg.com/media/EzqgqRxXsAI2lYW?format=jpg&name=360x360',       //:0
            'https://pbs.twimg.com/media/EzlORKTX0AAHbXN?format=jpg&name=360x360',
            'https://pbs.twimg.com/media/Ey3eHieXMAU-auZ?format=jpg&name=medium',
            'https://pbs.twimg.com/media/E0EBPKcWQAMoGje?format=jpg&name=small',
            './gnt/animal2.jpg'
        ];

    function ChangeImage(myElement, myImgs) {

        var myRandomNum = Math.floor(Math.random() * myImgs.length);
        myElement.src = myImgs[myRandomNum];
        console.log(`Imagem: ${myImgs[myRandomNum]} N:${myRandomNum}`);
    }

    ChangeImage(myElement, myImgs);

}
