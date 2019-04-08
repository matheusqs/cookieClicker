const vue = new Vue({
    el: '#root',
    data: {
        numeroCookies: 0,
        numeroCursor: 0,
        nivelCursor: 1,
        precoCursor: 10,
        cookiesPorSegundo: 0
    },
    methods: {
        novoCookie: function () {
            this.numeroCookies++;
        },
        novoCursor: function () {
            if(this.numeroCookies >= this.precoCursor){
                this.numeroCursor++;
                this.numeroCookies-=this.precoCursor;
                this.precoCursor+=10;
            }
        }
    },
    computed: {
        messageNumeroCookies: function () {
            return this.numeroCookies + ' cookies';
        },
        messageNumeroCursor: function () {
            return this.numeroCursor + ' cursor';
        },
        messageComprarCursor: function () {
            return 'Novo Cursor (' + this.precoCursor + ')';
        },
        messageCookiesPorSegundo: function () {
            return this.cookiesPorSegundo + ' cookies/s';
        }
    }
});