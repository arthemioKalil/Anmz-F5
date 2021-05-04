
(function (window, document) {
    var t = setInterval(function () {
        if ('complete' === document.readyState) {
            clearInterval(t);
            // JS:

            var png = './gnt/png/'
            var jpg = './gnt/jpg/'
            var jpeg = './gnt/jpeg/'
            var gif = './gnt/gif/'

            var myElement = document.getElementById('myImg'),
                myImgs = [
                    `${png}0.png`,
                    `${png}1.png`,
                    `${png}2.png`,
                    `${png}3.png`,
                    `${jpg}0.jpg`,
                    `${jpg}1.jpg`,
                    `${jpg}2.jpg`,
                    `${jpg}3.jpg`,
                    `${jpeg}0.jpeg`,
                    `${jpeg}1.jpeg`,
                    `${jpeg}2.jpeg`,
                    `${jpeg}3.jpeg`,
                    `${jpeg}4.jpeg`,
                    `${gif}0.gif`,
                    `${gif}1.gif`,
                    `${gif}2.gif`


                ];

            function ChangeImage(myElement, myImgs) {

                var myRandomNum = Math.floor(Math.random() * myImgs.length);
                myElement.src = myImgs[myRandomNum];

                console.log(`Imagem: ${myElement.src} N:${myRandomNum}`);

            }

            ChangeImage(myElement, myImgs);



            // JS/>
        }
    }, 10);
})(window, document);
window.onload = function () {


}
