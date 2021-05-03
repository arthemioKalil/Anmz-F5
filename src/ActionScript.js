(function (window, document) {
    var t = setInterval(function () {
        if ('complete' === document.readyState) {
            clearInterval(t);
            // JS:

            document.getElementById('l-name').addEventListener('click', () =>
                document.querySelector('html').classList.toggle("onclick")
            );

            var botao = document.getElementById('l-name');
            botao.addEventListener('click', function () {
                console.log('click')
            });


            $('a[href^="#"]').on('click', function (e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').animate({
                    'scrollTop': $target.offset().top
                }, 1000, 'swing');

            });
            // JS/>
        }
    }, 10);
})(window, document);

//OBS: vai dar problema com o getelement quando é usado com classe, sempre  pega com o id.

