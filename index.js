import Hello from './src/plugins/hello'
var index = {};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('hello', Hello)
}
index.install = function(Vue){
    // Vue.component('hello', Hello)
    // Vue.component('index', testPanel)
}
export default index