(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={form:"Checkout_form__2g0iO",control:"Checkout_control__oQWCA",str:"Checkout_str__2SUHE",actions:"Checkout_actions__2tsdL",submit:"Checkout_submit__3zial",invalid:"Checkout_invalid__ngCJe"}},function(e,t,a){e.exports={"cart-items":"Cart_cart-items__2SytV",total:"Cart_total__2JzJs",actions:"Cart_actions__y3ciF","button--alt":"Cart_button--alt__F8Hb7",button:"Cart_button__37Kri",roller:"Cart_roller__2m3zf"}},,,function(e,t,a){e.exports={backdrop:"Modal_backdrop__1HZHn",modal:"Modal_modal__iWjuy","slide-down":"Modal_slide-down__RXoxz",modal2:"Modal_modal2__3x0Lp"}},function(e,t,a){e.exports={"cart-item":"CartItem_cart-item__1mMQh",summary:"CartItem_summary__1gAQr",price:"CartItem_price__3ByET",amount:"CartItem_amount__1ru_u",actions:"CartItem_actions__3wKBP"}},,,function(e,t,a){e.exports={button:"HeaderCardButton_button__fG3VI",icon:"HeaderCardButton_icon__6ZNtT",badge:"HeaderCardButton_badge__3Y3Ww",bump:"HeaderCardButton_bump__2f_5H"}},,,function(e,t,a){e.exports={"main-image":"Header_main-image__2AvYN",head:"Header_head__37oNq",nav:"Header_nav__3U4mf"}},function(e,t,a){e.exports={meals:"AvailableMeals_meals__9HIV_","meals-appear":"AvailableMeals_meals-appear__2wZPh",roller:"AvailableMeals_roller__PYXtV",error:"AvailableMeals_error__3ONXn"}},function(e,t,a){e.exports={meal:"MealItem_meal__2BQ9K",description:"MealItem_description__2CWJC",price:"MealItem_price__3c5cB"}},,function(e,t,a){e.exports={card:"MealsSummary_card__2st3f",title:"MealsSummary_title__1gTH5"}},,function(e,t,a){e.exports={card:"Card_card__Bp4zl"}},function(e,t,a){e.exports={my:"Input_my__2vDJp",group:"Input_group__2YcNe"}},function(e,t,a){e.exports={form:"MealItemForm_form__3wstG"}},function(e,t,a){e.exports={roller:"spinner_roller__3zEOB"}},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(9),s=a.n(r),i=(a(28),a(2)),l=(a(29),a(6)),o=a.n(l),d=a(13),u=a(7),j=a.n(u),m=a(0),b=function(e){return Object(m.jsx)("div",{onClick:e.hideCart,className:j.a.backdrop})},h=function(e){return e.isSub?Object(m.jsx)("div",{className:j.a.modal2,children:Object(m.jsx)("div",{className:j.a.content,children:e.children})}):Object(m.jsx)("div",{className:j.a.modal,children:Object(m.jsx)("div",{className:j.a.content,children:e.children})})},x=document.querySelector("#overlays");var O=function(e){return Object(m.jsxs)(m.Fragment,{children:[s.a.createPortal(Object(m.jsx)(b,{hideCart:e.hideCart}),x),s.a.createPortal(Object(m.jsx)(h,{isSub:e.isSub,children:e.children}),x)]})},v=a(4),f=a.n(v),p=c.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),_=a(8),C=a.n(_),N=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:C.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("h2",{children:[" ",e.name," "]})," ",Object(m.jsxs)("div",{className:C.a.summary,children:[Object(m.jsxs)("span",{className:C.a.price,children:[" ",t," "]})," ",Object(m.jsxs)("span",{className:C.a.amount,children:[" x ",e.amount," "]})," "]})," "]})," ",Object(m.jsxs)("div",{className:C.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:" \u22121 "})," ",Object(m.jsx)("button",{onClick:e.onAdd,children:" +1 "})," "]})," "]})},g=a(3),y=a.n(g),H={value:"",isTouched:!1},w=function(e,t){return"INPUT"===t.type?{value:t.value,isTouched:e.isTouched}:"BLUR"===t.type?{value:e.value,isTouched:!0}:"RESET"===t.type?{value:"",isTouched:!1}:H},S=function(e){var t=Object(n.useReducer)(w,H),a=Object(i.a)(t,2),c=a[0],r=a[1],s=e(c.value),l=!s&&c.isTouched;return{enteredValue:c.value,hasError:l,isValueValid:s,valueChangeHandler:function(e){r({type:"INPUT",value:e.target.value})},blurHandler:function(){r({type:"BLUR"})},reset:function(){r({type:"RESET"})}}},V=function(e){return!(""===e.trim())},A=function(e){if(6!==e.trim().length)return!1;for(var t=0;t<6;t++)if(e.charCodeAt(t)<48||e.charCodeAt(t)>57)return!1;return!0};var k=function(e){var t=S(V),a=t.reset,n=t.enteredValue,c=t.valueChangeHandler,r=t.isValueValid,s=t.hasError,i=t.blurHandler,l=S(V),o=l.reset,d=l.enteredValue,u=l.valueChangeHandler,j=l.isValueValid,b=(l.hasError,l.blurHandler),h=S(V),x=h.reset,O=h.enteredValue,v=h.valueChangeHandler,f=h.isValueValid,p=h.hasError,_=h.blurHandler,C=S(V),N=C.reset,g=C.enteredValue,H=C.valueChangeHandler,w=C.isValueValid,k=C.hasError,F=C.blurHandler,I=S(V),M=I.reset,B=I.enteredValue,T=I.valueChangeHandler,E=I.isValueValid,R=I.hasError,P=I.blurHandler,q=S(V),D=q.reset,z=q.enteredValue,J=q.valueChangeHandler,L=q.isValueValid,Y=q.hasError,U=q.blurHandler,G=S(A),W=G.reset,Q=G.enteredValue,K=G.valueChangeHandler,X=G.isValueValid,Z=G.hasError,$=G.blurHandler,ee=E&&r&&f&&j&&X&&L&&w;return Object(m.jsxs)("form",{className:y.a.form,onSubmit:function(t){t.preventDefault(),ee&&(e.onConfirm({first_name:n,last_name:d,house_num:O,street:g,city:B,state:z,postal_code:Q}),M(),a(),x(),o(),D(),N(),W())},children:[Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row justify-content-end",children:[Object(m.jsxs)("div",{className:"col-6",children:[Object(m.jsxs)("div",{className:"".concat(y.a.control),children:[Object(m.jsx)("label",{htmlFor:"fname",children:" First Name "})," ",Object(m.jsx)("input",{value:n,onBlur:i,onChange:c,id:"fname",type:"text"})," ",s&&Object(m.jsx)("p",{className:y.a.invalid,children:" This is a required field "})," "]})," "]})," ",Object(m.jsxs)("div",{className:"col-6",children:[Object(m.jsxs)("div",{className:y.a.control,children:[Object(m.jsx)("label",{htmlFor:"lname",children:" Last Name "})," ",Object(m.jsx)("input",{value:d,onBlur:b,onChange:u,id:"lname",type:"text"})," "," "]})," "]})," "]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-6",children:[Object(m.jsxs)("div",{className:y.a.control,children:[Object(m.jsx)("label",{htmlFor:"house",children:" House No. "})," ",Object(m.jsx)("input",{value:O,onBlur:_,onChange:v,id:"house",type:"text",placeholder:"House No / Building No."})," ",p&&Object(m.jsx)("p",{className:y.a.invalid,children:" House no.is required "})," "]})," "]})," ",Object(m.jsxs)("div",{className:"col-6",children:[" "," "," ",Object(m.jsxs)("div",{className:y.a.control,children:[Object(m.jsx)("label",{htmlFor:"city",children:" City "})," ",Object(m.jsx)("input",{value:B,onBlur:P,onChange:T,id:"city",type:"text"})," ",R&&Object(m.jsx)("p",{className:y.a.invalid,children:" City is required "})," "]})," "]})," "]})," "," ",Object(m.jsxs)("div",{className:y.a.control,children:[Object(m.jsx)("label",{htmlFor:"street",children:" Street Name "})," ",Object(m.jsx)("input",{className:y.a.str,value:g,onBlur:F,onChange:H,id:"street",type:"text"})," ",k&&Object(m.jsx)("p",{className:y.a.invalid,children:" Street is required "})," "]})," ",Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-6",children:[Object(m.jsxs)("div",{className:y.a.control,children:[Object(m.jsx)("label",{htmlFor:"state",children:" State "})," ",Object(m.jsx)("input",{value:z,onChange:J,onBlur:U,id:"state",type:"text"})," ",Y&&Object(m.jsx)("p",{className:y.a.invalid,children:" State name is required "})," "]})," "]})," ",Object(m.jsxs)("div",{className:"col-6",children:[Object(m.jsxs)("div",{className:y.a.control,children:[Object(m.jsx)("label",{htmlFor:"code",children:" Postal Code "})," ",Object(m.jsx)("input",{value:Q,onBlur:$,onChange:K,id:"code",type:"text"})," ",Z&&Object(m.jsx)("p",{className:y.a.invalid,children:"Please enter a valid Postal Code "})," "]})," "]})," "]}),Object(m.jsxs)("div",{className:"row row justify-content-evenly",children:[Object(m.jsx)("div",{className:"col-4",children:" "})," ",Object(m.jsxs)("div",{className:"col-6 mb-5 mt-5",children:[Object(m.jsxs)("div",{className:y.a.actions,children:[Object(m.jsx)("button",{onClick:e.cancelOrder,type:"button",children:"Cancel Order "})," ",Object(m.jsx)("button",{disabled:!ee,className:y.a.submit,children:"Confirm "})," "]})," "]})," "]})," "]})," "]})};var F=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),l=Object(i.a)(s,2),u=l[0],j=l[1],b=Object(n.useState)(!1),h=Object(i.a)(b,2),x=h[0],v=h[1],_=Object(n.useContext)(p),C="$".concat(_.totalAmount.toFixed(2)),g=_.items.length>0,y=function(e){_.removeItem(e),g||r(!1)},H=function(e){_.addItem(e,1)},w=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("https://react-meals-b5a40-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,items:_.items})});case 3:setTimeout((function(){j(!1),v(!0),_.clearCart()}),900);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=Object(m.jsxs)("ul",{className:f.a["cart-items"],children:[" ",_.items.map((function(e){return Object(m.jsx)(N,{name:e.name,price:e.price,amount:e.amount,onAdd:H.bind(null,e),onRemove:y.bind(null,e.id)},e.id)}))," "]}),V=Object(m.jsxs)("div",{className:f.a.actions,children:[Object(m.jsx)("button",{onClick:e.hideCart,className:f.a["button--alt"],children:"close "})," ",g&&Object(m.jsx)("button",{onClick:function(){r(!0)},className:f.a.button,children:"Order "})," "]}),A=Object(m.jsxs)(m.Fragment,{children:[" ",S," ",Object(m.jsxs)("div",{className:f.a.total,children:[Object(m.jsx)("span",{children:" Total amount "})," ",Object(m.jsxs)("span",{children:[" ",C," "]})," "]})," ",c&&g&&Object(m.jsx)(k,{onConfirm:w,cancelOrder:e.hideCart})," ",!c&&V," "]}),F=Object(m.jsxs)("div",{className:f.a.roller,children:[Object(m.jsx)("div",{children:" "})," ",Object(m.jsx)("div",{children:" "})," ",Object(m.jsx)("div",{children:" "})," ",Object(m.jsx)("div",{children:" "})," ",Object(m.jsx)("div",{children:" "})," ",Object(m.jsx)("div",{children:" "})," ",Object(m.jsx)("div",{children:" "})," ",Object(m.jsx)("div",{children:" "})," "]}),I=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:" Congratulations!Your order has been placed! "})," ",Object(m.jsxs)("div",{className:f.a.actions,children:[Object(m.jsx)("button",{onClick:e.hideCart,className:f.a["button--alt"],children:"close "})," "]})," "]});return Object(m.jsxs)(O,{isSub:u,hideCart:e.hideCart,children:[" ",!u&&!x&&A," ",u&&F," ",!u&&x&&I," "]})},I=a(14),M=a.n(I),B=a(11),T=a.n(B),E=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})};var R=function(e){var t=Object(n.useContext)(p),a=Object(n.useState)(!1),c=Object(i.a)(a,2),r=c[0],s=c[1],l=t.items,o="".concat(T.a.button," ").concat(r?T.a.bump:"");Object(n.useEffect)((function(){if(0!==l.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[l]);var d=l.reduce((function(e,t){return e+t.amount}),0);return Object(m.jsxs)("button",{onClick:e.onClick,className:o,children:[Object(m.jsx)("span",{className:T.a.icon,children:Object(m.jsx)(E,{})}),Object(m.jsx)("span",{children:e.children}),Object(m.jsx)("span",{className:T.a.badge,children:d})]})};var P=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("nav",{className:"".concat(M.a.nav," navbar sticky-top"),children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h3",{className:"".concat(M.a.head," navbar-brand mx-auto"),children:"ReactJS Meals"}),Object(m.jsx)(R,{onClick:e.showCart,children:"Your Cart"})]})}),Object(m.jsx)("div",{className:M.a["main-image"],children:Object(m.jsx)("img",{alt:"Food",src:"https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1302&q=80"})})]})},q=a(20),D=a.n(q);var z=function(e){return Object(m.jsx)("div",{className:D.a.card,children:e.children})},J=a(15),L=a.n(J),Y=a(16),U=a.n(Y),G=a(5),W=a(21),Q=a.n(W),K=c.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:"".concat(Q.a.group," input-group input-group-sm mb-2"),children:[Object(m.jsx)("label",{className:"input-group-text",htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(G.a)({ref:t,className:"form-control"},e.input))]})})),X=a(22),Z=a.n(X);var $=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useRef)();return Object(m.jsxs)(m.Fragment,{children:[!c&&Object(m.jsx)("p",{children:"Please enter a valid amount"}),Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=s.current.value,n=+a;0===a.length||n<1||n>5?r(!1):e.onAddToCart(n)},className:Z.a.form,children:[Object(m.jsx)(K,{label:"Amount",ref:s,input:{id:"amount_"+e.id,type:"Number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"Add"})]})]})};var ee=function(e){var t=Object(n.useContext)(p),a="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:U.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:e.name}),Object(m.jsx)("div",{className:U.a.description,children:e.descp}),Object(m.jsx)("div",{className:U.a.price,children:a})]}),Object(m.jsx)("div",{children:Object(m.jsx)($,{onAddToCart:function(a){t.addItem({id:e.id,name:e.name,amount:a,price:e.price})},id:e.id})})]})},te=a(23),ae=a.n(te);var ne=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),l=s[0],u=s[1],j=Object(n.useState)(!0),b=Object(i.a)(j,2),h=b[0],x=b[1];Object(n.useEffect)((function(){x(!0);var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t,a,n,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(null),e.next=3,fetch("https://react-meals-b5a40-default-rtdb.firebaseio.com/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong");case 6:return e.next=8,t.json();case 8:for(r in a=e.sent,n=[],a)s={id:r,name:a[r].name,price:a[r].price,description:a[r].description},n.push(s);setTimeout((function(){c(n),x(!1)}),1e3);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){setTimeout((function(){u(e.message),x(!1)}),1e3)}))}),[]);var O,v=a.map((function(e){return Object(m.jsx)(ee,{id:e.id,name:e.name,descp:e.description,price:e.price},e.id)}));return h&&(O=Object(m.jsx)("div",{className:"".concat(L.a.roller),children:Object(m.jsxs)("div",{className:ae.a.roller,children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})})),l&&(O=Object(m.jsx)("p",{className:L.a.error,children:l})),!h&&v.length>0&&(O=v),Object(m.jsx)("div",{className:L.a.meals,children:Object(m.jsx)(z,{children:O})})},ce=a(18),re=a.n(ce);var se=function(){return Object(m.jsxs)("div",{className:"".concat(re.a.card," card"),children:[Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h2",{className:"".concat(re.a.title," card-title"),children:"Delecious Food, Delivered to you "})," ",Object(m.jsx)("p",{className:"card-text",children:"Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home. "})," ",Object(m.jsx)("p",{className:"card-text",children:"Good food is all it takes to make things right.Order delicious food from React Meals now. "})," "]})," "]})};var ie=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(se,{}),Object(m.jsx)(ne,{})]})},le=a(19),oe={items:[],totalAmount:0},de=function(e,t){if("ADD"===t.type){t.qty||(t.qty=t.item.amount);var a,n=e.totalAmount+t.item.price*t.qty,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(G.a)(Object(G.a)({},r),{},{amount:r.amount+t.qty});(a=Object(le.a)(e.items))[c]=s}else a=e.items.concat(t.item);return{items:a,totalAmount:n}}if("REMOVE"===t.type){var i,l=e.items.findIndex((function(e){return e.id===t.id})),o=e.items[l],d=e.totalAmount-o.price;if(o.amount>1){var u=Object(G.a)(Object(G.a)({},o),{},{amount:o.amount-1});(i=Object(le.a)(e.items))[l]=u}else i=e.items.filter((function(e){return e.id!==t.id}));return{items:i,totalAmount:d}}return t.type,oe};var ue=function(e){var t=Object(n.useReducer)(de,oe),a=Object(i.a)(t,2),c=a[0],r=a[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e,t){r({type:"ADD",item:e,qty:t})},removeItem:function(e){r({type:"REMOVE",id:e})},clearCart:function(){r({type:"CLEAR"})}};return Object(m.jsx)(p.Provider,{value:s,children:e.children})};var je=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(m.jsxs)(ue,{children:[a&&Object(m.jsx)(F,{hideCart:function(){c(!1)}}),Object(m.jsx)(P,{showCart:function(){c(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(ie,{})})]})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(je,{})}),document.getElementById("root")),me()}],[[32,1,2]]]);
//# sourceMappingURL=main.6e9ef2f7.chunk.js.map