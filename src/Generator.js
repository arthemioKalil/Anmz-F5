
(function (window, document) {
    var t = setInterval(function () {
        if ('complete' === document.readyState) {
            clearInterval(t);
            // JS:

            var myElement = document.getElementById('myImg'),
                myImgs = [
                    'https://pbs.twimg.com/media/EzqgqRxXsAI2lYW?format=jpg&name=360x360',       //:0
                    'https://pbs.twimg.com/media/EzlORKTX0AAHbXN?format=jpg&name=360x360',
                    'https://pbs.twimg.com/media/Ey3eHieXMAU-auZ?format=jpg&name=medium',
                    'https://pbs.twimg.com/media/E0EBPKcWQAMoGje?format=jpg&name=small',
                    './gnt/animal1.jpg',
                    './gnt/animal3.jpg',
                    './gnt/animal4.jpg',
                    './gnt/animal2.jpg'

                ];

            function ChangeImage(myElement, myImgs) {

                var myRandomNum = Math.floor(Math.random() * myImgs.length);
                myElement.src = myImgs[myRandomNum];
                console.log(`Imagem: ${myImgs[myRandomNum]} N:${myRandomNum}`);
            }

            ChangeImage(myElement, myImgs);

            // JS/>
        }
    }, 10);
})(window, document);
window.onload = function () {


}
