(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"goku","image":"/images/DBZ/goku.jpeg"},{"id":2,"name":"gohan","image":"/images/DBZ/gohan.jpeg"},{"id":3,"name":"vageta","image":"/images/DBZ/vageta.jpeg"},{"id":4,"name":"trunks","image":"/images/DBZ/trunks.jpeg"},{"id":5,"name":"piccolo","image":"/images/DBZ/piccolo.jpeg"},{"id":6,"name":"krillin","image":"/images/DBZ/krillin.jpeg"},{"id":7,"name":"freeza","image":"/images/DBZ/freeza.jpeg"},{"id":8,"name":"cell","image":"/images/DBZ/cell.jpeg"},{"id":9,"name":"nappa","image":"/images/DBZ/nappa.jpeg"}]')},,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(3),l=t.n(c),r=(t(14),t(4)),o=t(5),m=t(7),s=t(6),g=t(8),d=(t(15),t(16),function(e){return i.a.createElement("div",{id:"header",className:"bg-dark text-warning"},i.a.createElement("h1",null,"Dragonball Z"),i.a.createElement("h4",null,"Clicky Game - Click an image, but don't click the same image twice!"),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row align-items-center"},i.a.createElement("div",{className:"col-md-3"}),i.a.createElement("label",{className:"col-md-3"},"Score: ",e.clicks),i.a.createElement("label",{className:"col-md-3"},"High Score: ",e.highScore),i.a.createElement("div",{className:"col-md-3"}))))}),u=(t(17),function(e){return i.a.createElement("div",{key:e.id,role:"img",className:"click-item",onClick:function(){return e.handleDivClick(e.id)}},i.a.createElement("img",{alt:e.name,src:e.img}))}),h=(t(18),function(e){return i.a.createElement("div",{id:"footer",className:"bg-dark text-warning"},i.a.createElement("h5",null,"DBZ Clicky Game!"),i.a.createElement("h6",null,"Created by: Nick Oetinger"))}),k=t(1),v=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=e[t];e[t]=e[a],e[a]=n}return e},p=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={dbz:k,clicks:[],clickCount:0,highScore:0},t.handleDivClick=function(e){var a=t.state.clicks,n=t.state,i=n.highScore,c=n.clickCount;console.log(a),a.indexOf(e)>-1?t.setState({clicks:[],clickCount:0}):(c++,a.push(e),t.setState({clicks:a,clickCount:c}),c>i&&t.setState({highScore:c}),c%k.length===0&&t.setState({clicks:[]})),t.setState({dbz:v(k)})},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(d,{clicks:this.state.clickCount,highScore:this.state.highScore}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row align-items-center"},this.state.dbz.map(function(a){return i.a.createElement("div",{className:"col-sm-4 align-self-center"},i.a.createElement(u,{key:a.id,name:a.name,img:"/Clicky-Game"+a.image,handleDivClick:e.handleDivClick,id:a.id}))}))),i.a.createElement(h,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.c5b0aa14.chunk.js.map