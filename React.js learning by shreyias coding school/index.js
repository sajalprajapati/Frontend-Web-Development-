// console.log(React);


var h1=React.createElement('h1',null,"How u doing Sajal? Kepp Going .");


var parent=document.querySelector("#parent");
var root= ReactDOM.createRoot(parent);

root.render(h1);