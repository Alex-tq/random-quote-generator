(this["webpackJsonprandom-quote-generator"]=this["webpackJsonprandom-quote-generator"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),u=n(4),i=n(5),s=n(7),h=n(6),l=n(1),f=n(8),d=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(s.a)(this,Object(h.a)(e).call(this,t))).state={text:"",author:""},n.handleClick=n.handleClick.bind(Object(l.a)(n)),n}return Object(f.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;console.log("hi"),fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(e){var n=Math.floor(Math.random()*e.quotes.length);t.setState({text:e.quotes[n].quote,author:e.quotes[n].author})}))}},{key:"handleClick",value:function(){var t=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(e){var n=Math.floor(Math.random()*e.quotes.length);t.setState({text:e.quotes[n].quote,author:e.quotes[n].author})}))}},{key:"render",value:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.state.text," \n-").concat(this.state.author);return o.a.createElement("div",{id:"quote-box"},o.a.createElement("p",{id:"text"},this.state.text),o.a.createElement("p",{id:"author"},"-By ",this.state.author),o.a.createElement("div",{id:"buttons"},o.a.createElement("a",{href:t,id:"tweet-quote",target:"blank"},o.a.createElement("i",{class:"fa fa-twitter"}," ")),o.a.createElement("button",{id:"new-quote",onClick:this.handleClick},"Next")))}}]),e}(o.a.Component);n(14);r.a.render(o.a.createElement(d,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d8b7e678.chunk.js.map