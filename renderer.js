const Vue = require('vue/dist/vue.js');
const {clipboard}  = require('electron');

const App = new Vue({
    el:'#app',
    data:{
        title: 'Clipboard Manger',
        history : [],
    },
    mounted(){
        setInterval(this.checkClipboard , 500);
    },
    methods:{
        checkClipboard(){
            const text = clipboard.readText();
            if(this.history[0] != text && text != ''){
                this.history.push(text);
                this.history.reverse();
            }
        }
    }


})