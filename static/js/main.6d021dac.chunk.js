/*! For license information please see main.6d021dac.chunk.js.LICENSE.txt */
(this["webpackJsonpstar-db"]=this["webpackJsonpstar-db"]||[]).push([[0],{28:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(22),s=n.n(c),i=n(6),o=n(8),u=n(10),l=n(9),j=n(11),d=(n(28),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"header d-flex",children:[Object(d.jsx)("h3",{children:Object(d.jsx)(j.b,{to:"/",children:"Star DB"})}),Object(d.jsxs)("ul",{className:"d-flex",children:[Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/people/",children:"People"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/planets/",children:"Planets"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/starships/",children:"Starships"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/login",children:"Login"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"/secret",children:"Seret"})})]})]})}}]),n}(a.a.Component),b=n(2),p=n.n(b),A=n(7),N=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://swapi.dev/api",this._imageBase="https://starwars-visualguide.com/assets/img",this.getResource=function(){var e=Object(A.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n)+", received ".concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(A.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPerson));case 4:case"end":return e.stop()}}),e)}))),this.getPerson=function(){var e=Object(A.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPerson(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(A.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/");case 2:return n=e.sent,e.next=5,n.results.map(t._transformPlanet);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),this.getPlanet=function(){var e=Object(A.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPlanet(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(A.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformStarship));case 4:case"end":return e.stop()}}),e)}))),this.getStarship=function(){var e=Object(A.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformStarship(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this.getImage=function(){var e=Object(A.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t).then((function(e){if(!e.ok)throw new Error;return e.url})).catch((function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEUAAACUMUKVNESUNUaTNEWTNEWTNUWUNEWUNEWUNEWTNEWUNEWUNEWVNEWVNESUNUeWMkOUNUWVNEWUNEWTM0aVNUSSN0mVNUaUNEWUNEWUNEWVNESSNESWLUuUNESUNEWUNEafQECUNEaUNUWXNEaUMkaUNEWVNUaVM0SUNEWUM0WdO06UM0SVM0WSNkeVNUCUNEWUNEWVNEaUNESTMUWVMkSXOEiUNEWUNUSVNUSVK0CUNEWVNEWQN0OUNEaVNESUNEWAQED/AACUNEWZM02UNEaTNUaVM0SVNUaUNEaTNESSN0mUNEWUNUaZMzOUNEWVM0WUNEWTNkWUNEWVNEaXLkaUNEWUNEWXOUKUNEWVM0WUNkWSMkeUNEWUNUWUNEWUNEWVNUSUM0aTNUaTMkSUNEaUNESUNEWUNESPMECUNEWUNkOUNEWTNESUNUaTNEWZM0CUNEWVNEaUNUWVNUWSNUSUNEWUNEWTNESUNEUAAAAeSPByAAAAeXRSTlMAH155k63H4fjr07qiiWwrLn7O45pSDh2N3vuvMRGK97AIde4sTOJqeP2pDaTaLxjIwYRPGikg7FZlDNK2F8aoegQB2wpYhzxbko4c9j4Fnn3zNNS7FsuyG/FzUT3+jF3lwm5XR2Lya3AQ+ibqU6WmFNZx6TBESqdASVNu+gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRwPAQ3scZC+AAACoUlEQVRYw6WX+WPSMBTH6z11OhXva4hnFR0MdBsymGzshLmjKEMZG7svd3jmv7fJo23SJDQl35+S9/I+TV7SHIYh16nTZ86eO3+h6+Kly91XrvYY4XTt+g3EKnLz1m3V6Dt37yGR7j94qBL+6HEvkioaiHgSe4raKvqsbfzzFyhIXS/bxL8yA+NtvX4j635cJdzW23fC+L6E1yTZn0qnU/1JCaH3vSD+Q8T1Dww6xsEBMWGIj898dL3ZYc88nOWjc/mRT1x8Ier6R8dox9goByiKEjDuus0J1jNhqgAmPfcUWFLT0ykoTSkAZkqeu4wNs2To2VlcLisAPnteM4MNc1CZI+k1AwE9dpP5Bfu7MYQWiWURmnoVq0KKC/Me50vGBXzFc4MLVbvbxLIEbZZIBQ+n1mqao3ryzYn/jmv15WKxYSG0Qkyr0GSVVFbsUqS5hrVcFw2FXbBpbFqH8joupyXr2QXM1BkzTN7GJkKbGzChQYAt1pwswNIulyFJhWQQwPLZt9kp2pbFO0nc2fXZS3t0/F5JFu9M4yTn2T/w4g/2hcH0J34I/IdH4Ds6lHydBiREDczj+MlJ/NhECoDgfbg9oLCrCah0Ev+TAvyy5yMfUt2/KcAfhBqGjrQBYYfQ9APCJjHvB4SdRg4QdiHxAFjKrS0L1LDkgL8cAH6mGmOrhukB/M6tbRuEt3d1wI5KFmP4jKqwI3PPBUsBUCUta6zRORe2FABWw85tM8Ia11oA37auLsnB0gHAPdps+bupBPAOVz5RagDneOenShFAXzA6yQF7xVHXP249KyoHW0utQC/o8RAA4T2Rumh2BqCvusFDEFx1mct2sIZEfehLKMcLr/v6Dw5D+8lj6D+69J99hvbDE0vz6Uuk9/gGKT3//wOKqXrHYMfrIgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0yOFQxNTowMToxMyswMjowMIL/AEkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMjhUMTU6MDE6MTMrMDI6MDDzorj1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPersonImage=function(){var e=Object(A.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,e.next=3,t.getImage("".concat(t._imageBase,"/characters/").concat(r,".jpg"));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getStarshipImage=function(){var e=Object(A.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,e.next=3,t.getImage("".concat(t._imageBase,"/starships/").concat(r,".jpg"));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPlanetImage=function(){var e=Object(A.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,e.next=3,t.getImage("".concat(t._imageBase,"/planets/").concat(r,".jpg"));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargo_capacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}}},m=(n(36),function(){return Object(d.jsxs)("div",{className:"error-indicator",children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEUAAACUMUKVNESUNUaTNEWTNEWTNUWUNEWUNEWUNEWTNEWUNEWUNEWVNEWVNESUNUeWMkOUNUWVNEWUNEWTM0aVNUSSN0mVNUaUNEWUNEWUNEWVNESSNESWLUuUNESUNEWUNEafQECUNEaUNUWXNEaUMkaUNEWVNUaVM0SUNEWUM0WdO06UM0SVM0WSNkeVNUCUNEWUNEWVNEaUNESTMUWVMkSXOEiUNEWUNUSVNUSVK0CUNEWVNEWQN0OUNEaVNESUNEWAQED/AACUNEWZM02UNEaTNUaVM0SVNUaUNEaTNESSN0mUNEWUNUaZMzOUNEWVM0WUNEWTNkWUNEWVNEaXLkaUNEWUNEWXOUKUNEWVM0WUNkWSMkeUNEWUNUWUNEWUNEWVNUSUM0aTNUaTMkSUNEaUNESUNEWUNESPMECUNEWUNkOUNEWTNESUNUaTNEWZM0CUNEWVNEaUNUWVNUWSNUSUNEWUNEWTNESUNEUAAAAeSPByAAAAeXRSTlMAH155k63H4fjr07qiiWwrLn7O45pSDh2N3vuvMRGK97AIde4sTOJqeP2pDaTaLxjIwYRPGikg7FZlDNK2F8aoegQB2wpYhzxbko4c9j4Fnn3zNNS7FsuyG/FzUT3+jF3lwm5XR2Lya3AQ+ibqU6WmFNZx6TBESqdASVNu+gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRwPAQ3scZC+AAACoUlEQVRYw6WX+WPSMBTH6z11OhXva4hnFR0MdBsymGzshLmjKEMZG7svd3jmv7fJo23SJDQl35+S9/I+TV7SHIYh16nTZ86eO3+h6+Kly91XrvYY4XTt+g3EKnLz1m3V6Dt37yGR7j94qBL+6HEvkioaiHgSe4raKvqsbfzzFyhIXS/bxL8yA+NtvX4j635cJdzW23fC+L6E1yTZn0qnU/1JCaH3vSD+Q8T1Dww6xsEBMWGIj898dL3ZYc88nOWjc/mRT1x8Ier6R8dox9goByiKEjDuus0J1jNhqgAmPfcUWFLT0ykoTSkAZkqeu4wNs2To2VlcLisAPnteM4MNc1CZI+k1AwE9dpP5Bfu7MYQWiWURmnoVq0KKC/Me50vGBXzFc4MLVbvbxLIEbZZIBQ+n1mqao3ryzYn/jmv15WKxYSG0Qkyr0GSVVFbsUqS5hrVcFw2FXbBpbFqH8joupyXr2QXM1BkzTN7GJkKbGzChQYAt1pwswNIulyFJhWQQwPLZt9kp2pbFO0nc2fXZS3t0/F5JFu9M4yTn2T/w4g/2hcH0J34I/IdH4Ds6lHydBiREDczj+MlJ/NhECoDgfbg9oLCrCah0Ev+TAvyy5yMfUt2/KcAfhBqGjrQBYYfQ9APCJjHvB4SdRg4QdiHxAFjKrS0L1LDkgL8cAH6mGmOrhukB/M6tbRuEt3d1wI5KFmP4jKqwI3PPBUsBUCUta6zRORe2FABWw85tM8Ia11oA37auLsnB0gHAPdps+bupBPAOVz5RagDneOenShFAXzA6yQF7xVHXP249KyoHW0utQC/o8RAA4T2Rumh2BqCvusFDEFx1mct2sIZEfehLKMcLr/v6Dw5D+8lj6D+69J99hvbDE0vz6Uuk9/gGKT3//wOKqXrHYMfrIgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0yOFQxNTowMToxMyswMjowMIL/AEkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMjhUMTU6MDE6MTMrMDI6MDDzorj1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"error icon"}),Object(d.jsx)("span",{className:"boom",children:"BOOM!"}),Object(d.jsx)("span",{children:"Something has gone terribly wrong"}),Object(d.jsx)("span",{children:"(but we have already sent droids to fix it)"})]})}),f=(n(37),function(){return Object(d.jsx)("div",{className:"loadingio-spinner-double-ring-fzgt4onbghu",children:Object(d.jsxs)("div",{className:"ldio-7gu3czt5s2v",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})})]})})}),g=(n(38),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).swapiService=new N,e.state={planet:{},image:null,loading:!0,error:!1},e.updatePlanet=function(){var t=Math.floor(25*Math.random()+2);e.swapiService.getPlanet(t).then(function(){var t=Object(A.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=n,t.next=4,e.swapiService.getPlanetImage(n);case 4:t.t2=t.sent,t.t3={planet:t.t1,image:t.t2},t.t0.setState.call(t.t0,t.t3);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then(e.onPlanetLoaded).catch(e.onError)},e.onPlanetLoaded=function(){e.setState({loading:!1})},e.onError=function(){e.setState({error:!0,loading:!1})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.updateInterval;this.updatePlanet(),this.interval=setInterval(this.updatePlanet,e)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.planet,n=e.image,r=e.loading,a=e.error,c=!(r||a),s=a?Object(d.jsx)(m,{}):null,i=r?Object(d.jsx)(f,{}):null,o=c?Object(d.jsx)(O,{planet:t,image:n}):null;return Object(d.jsxs)("div",{className:"random-planet jumbotron rounded",children:[s,i,o]})}}]),n}(a.a.Component));g.defaultProps={updateInterval:1e4};var O=function(e){var t=e.planet,n=e.image,r=t.name,c=t.population,s=t.rotationPeriod,i=t.diameter;return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("div",{className:"planet-image",children:Object(d.jsx)("img",{src:n,alt:"random planet"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:r}),Object(d.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:"Population: "}),Object(d.jsx)("span",{children:c})]}),Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:"Rotation Period: "}),Object(d.jsx)("span",{children:s})]}),Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:"Diameter: "}),Object(d.jsx)("span",{children:i})]})]})]})]})},U=g,E=(n(39),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)(m,{}):this.props.children}}]),n}(a.a.Component)),x=(n(40),function(e){var t=e.left,n=e.right;return Object(d.jsxs)("div",{className:"row mb2 page-block",children:[Object(d.jsx)("div",{className:"col-md-6",children:t}),Object(d.jsx)("div",{className:"col-md-6",children:n})]})}),v=n(3),W=n(5),S=(n(41),function(e){var t=e.item,n=e.field,r=e.label;return t[n]?Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:r}),Object(d.jsx)("span",{children:t[n]})]}):null}),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).swapiService=new N,e.state={item:null,image:null,loading:!1,error:!1},e.onItemLoaded=function(){e.setState({loading:!1})},e.onError=function(){e.setState({error:!0,loading:!1})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&this.updateItem()}},{key:"updateItem",value:function(){var e=this;this.setState({loading:!0});var t=this.props,n=t.itemId,r=t.getData,a=t.getImageUrl;n&&r(n).then(function(){var t=Object(A.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=n,t.next=4,a(n);case 4:t.t2=t.sent,t.t3={item:t.t1,image:t.t2},t.t0.setState.call(t.t0,t.t3);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then(this.onItemLoaded).catch(this.onError)}},{key:"render",value:function(){var e=this.state,t=e.item,n=e.loading,r=e.image,a=e.error;if(!t)return Object(d.jsx)("span",{children:" Select an item from a list"});var c=!(n||a),s=a?Object(d.jsx)(m,{}):null,i=n?Object(d.jsx)(f,{}):null,o=c?Object(d.jsx)(w,{item:t,image:r,children:this.props.children}):null;return Object(d.jsxs)("div",{className:"item-details card",children:[s,i,o]})}}]),n}(a.a.Component),w=function(e){var t=e.item,n=e.image,r=e.children,c=t.name;return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("img",{className:"item-image",src:n,alt:"item"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{children:c}),Object(d.jsx)("ul",{className:"list-group list-group-flush",children:a.a.Children.map(r,(function(e){return a.a.cloneElement(e,{item:t})}))})]})]})},y=M,I=function(e){return function(t){Object(u.a)(r,t);var n=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={data:null,hasError:!1,loading:!0},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.setState({loading:!0,error:!1}),this.props.getData().then((function(t){e.setState({data:t,loading:!1})})).catch((function(){e.setState({hasError:!0,loading:!1})}))}},{key:"render",value:function(){var t=this.state,n=t.data,r=t.hasError;return t.loading?Object(d.jsx)("div",{className:"card item-list-loading",children:Object(d.jsx)(f,{})}):r?Object(d.jsx)(m,{}):Object(d.jsx)(e,Object(W.a)(Object(W.a)({},this.props),{},{data:n}))}}]),r}(a.a.Component)},k=a.a.createContext(),T=k.Provider,V=k.Consumer,C=function(e){return function(t){return function(n){return Object(d.jsx)(V,{children:function(r){var a=e(r);return Object(d.jsx)(t,Object(W.a)(Object(W.a)({},n),a))}})}}},B=function(e){return function(t){return function(n){return Object(d.jsx)(t,Object(W.a)(Object(W.a)({},n),{},{children:e}))}}},P=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},F=C((function(e){return{getData:e.getPerson,getImageUrl:e.getPersonImage}}))((function(e){return Object(d.jsxs)(y,Object(W.a)(Object(W.a)({},e),{},{children:[Object(d.jsx)(S,{field:"gender",label:"Gender:"}),Object(d.jsx)(S,{field:"birthYear",label:"Birth Year:"}),Object(d.jsx)(S,{field:"eyeColor",label:"Eye Color:"})]}))})),D=C((function(e){return{getData:e.getPlanet,getImageUrl:e.getPlanetImage}}))((function(e){return Object(d.jsxs)(y,Object(W.a)(Object(W.a)({},e),{},{children:[Object(d.jsx)(S,{field:"population",label:"Population:"}),Object(d.jsx)(S,{field:"rotationPeriod",label:"Rotation Period:"}),Object(d.jsx)(S,{field:"diameter",label:"Diameter:"})]}))})),L=C((function(e){return{getData:e.getStarship,getImageUrl:e.getStarshipImage}}))((function(e){return Object(d.jsxs)(y,Object(W.a)(Object(W.a)({},e),{},{children:[Object(d.jsx)(S,{field:"model",label:"Model: "}),Object(d.jsx)(S,{field:"manufacturer",label:"Manufacturer: "}),Object(d.jsx)(S,{field:"costInCredits",label:"Cost: "}),Object(d.jsx)(S,{field:"length",label:"Length: "}),Object(d.jsx)(S,{field:"crew",label:"Crew: "}),Object(d.jsx)(S,{field:"passengers",label:"Passengers: "}),Object(d.jsx)(S,{field:"cargoCapacity",label:"Cargo Capacity: "})]}))})),R=(n(42),function(e){var t=e.data,n=e.onItemSelected,r=e.children,a=t.map((function(e){var t=e.id,a=r(e);return Object(d.jsx)("li",{className:"list-group-item",onClick:function(){return n(t)},children:a},t)}));return Object(d.jsx)("ul",{className:"item-list list-group",children:a})});R.defaultProps={onItemSelected:function(){}};var Q=R,G=P(C((function(e){return{getData:e.getAllPeople}})),I,B((function(e){var t=e.name,n=e.birthYear;return Object(d.jsxs)("span",{children:[t," (",n,")"]})})))(Q),K=P(C((function(e){return{getData:e.getAllPlanets}})),I,B((function(e){var t=e.name;return Object(d.jsx)("span",{children:t})})))(Q),Z=P(C((function(e){return{getData:e.getAllStarships}})),I,B((function(e){var t=e.name,n=e.model;return Object(d.jsxs)("span",{children:[t," (",n,")"]})})))(Q),H=Object(v.g)((function(e){var t=e.match,n=e.history;return Object(d.jsx)(x,{left:Object(d.jsx)(G,{onItemSelected:function(e){return n.push(e)}}),right:Object(d.jsx)(F,{itemId:t.params.id})})})),X=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selectedItem:null},e.onItemSelected=function(t){e.setState({selectedItem:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.selectedItem;return Object(d.jsx)(x,{left:Object(d.jsx)(K,{onItemSelected:this.onItemSelected}),right:Object(d.jsx)(D,{itemId:e})})}}]),n}(a.a.Component),z=Object(v.g)((function(e){var t=e.history;return Object(d.jsx)(Z,{onItemSelected:function(e){t.push(e)}})})),J=function(e){return e.isLoggedIn?Object(d.jsx)("div",{className:"jumbotron text-center",children:Object(d.jsx)("h2",{children:" This page is full of secrets"})}):Object(d.jsx)(v.a,{to:"/login"})},q=function(e){var t=e.isLoggedIn,n=e.onLogin;return t?Object(d.jsx)(v.a,{to:"/secret"}):Object(d.jsxs)("div",{className:"jumbotron",children:[Object(d.jsx)("p",{children:"Login to see all secrets !"}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:n,children:"Login"})]})},Y=(n(43),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoggedIn:!1},e.onLogin=function(){e.setState({isLoggedIn:!0})},e.swapiService=new N,e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isLoggedIn;return Object(d.jsx)(E,{children:Object(d.jsx)(T,{value:this.swapiService,children:Object(d.jsx)(j.a,{basename:"/Star-db",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{}),Object(d.jsx)(U,{updateInterval:1e4}),Object(d.jsxs)(v.d,{children:[Object(d.jsx)(v.b,{path:"/",render:function(){return Object(d.jsx)("h2",{children:"Welcome to Star Database"})},exact:!0}),Object(d.jsx)(v.b,{path:"/people/:id?",component:H}),Object(d.jsx)(v.b,{path:"/planets",component:X}),Object(d.jsx)(v.b,{path:"/starships",component:z,exact:!0}),Object(d.jsx)(v.b,{path:"/starships/:id",render:function(e){var t=e.match.params.id;return Object(d.jsx)(L,{itemId:t})}}),Object(d.jsx)(v.b,{path:"/login",render:function(){return Object(d.jsx)(q,{isLoggedIn:t,onLogin:e.onLogin})}}),Object(d.jsx)(v.b,{path:"/secret",render:function(){return Object(d.jsx)(J,{isLoggedIn:t})}}),Object(d.jsx)(v.b,{render:function(){return Object(d.jsx)("h2",{children:"Page not Found"})}})]})]})})})})}}]),n}(a.a.Component));s.a.render(Object(d.jsx)(Y,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6d021dac.chunk.js.map