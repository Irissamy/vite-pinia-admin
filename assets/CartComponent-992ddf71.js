import{_,o as e,c as o,a as t,F as r,h as l,i as y,n as $,j as b,k as f,f as g,l as i,q as C,t as c,b as m,m as x}from"./index-adc5c765.js";const k={props:{bannerImage:{Object}}},I=a=>(b("data-v-a817487f"),a=a(),f(),a),w={id:"carouselExampleAutoplaying",class:"carousel slide","data-bs-ride":"carousel"},S=I(()=>t("div",{class:"carousel-indicators"},[t("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),t("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),t("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})],-1)),T={class:"carousel-inner"},E=["src"],P=y('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" data-v-a817487f><span class="carousel-control-prev-icon" aria-hidden="true" data-v-a817487f></span><span class="visually-hidden" data-v-a817487f>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" data-v-a817487f><span class="carousel-control-next-icon" aria-hidden="true" data-v-a817487f></span><span class="visually-hidden" data-v-a817487f>Next</span></button>',2);function B(a,u,d,p,h,v){return e(),o("div",w,[S,t("div",T,[(e(!0),o(r,null,l(d.bannerImage,(s,n)=>(e(),o("div",{key:n,class:$(n===0?"carousel-item active":"carousel-item")},[t("img",{src:s,class:"carousel-item__img d-block w-100",alt:"..."},null,8,E)],2))),128))]),P])}const nt=_(k,[["render",B],["__scopeId","data-v-a817487f"]]);const L={props:{product:{type:Object,default(){return{}}}},methods:{...g(i,["addToCart"])}},N={class:"row row-cols-3 my-3 g-4"},A={class:"card"},j=["src"],V={class:"card-body"},q={class:"card-title"},F={class:"float-end"},O=["onClick"];function Q(a,u,d,p,h,v){return e(),o("div",N,[(e(!0),o(r,null,l(d.product,s=>(e(),o("div",{class:"col",key:s.id},[t("div",A,[t("img",{src:s.imageUrl,class:"card-img-top",alt:"..."},null,8,j),t("div",V,[t("h6",q,[C(c(s.title)+" ",1),t("span",F,"$ "+c(s.price),1)]),t("a",{href:"#",class:"btn btn-outline-primary w-100",onClick:m(n=>a.addToCart(s.id,1),["prevent"])},"加入購物車",8,O)])])]))),128))])}const ct=_(L,[["render",Q],["__scopeId","data-v-421afff1"]]);const U={computed:{...x(i,["getCartList"])},methods:{...g(i,["setCartQty","removeCart"])}},z=a=>(b("data-v-5716ae65"),a=a(),f(),a),D={class:"bg-light p-4 my-4"},M={key:0},G={key:1,class:"table align-middle"},H={width:"100"},J=["onClick"],K=z(()=>t("i",{class:"bi bi-x"},null,-1)),R=[K],W={width:"100"},X=["src"],Y={width:"200"},Z=["value","onChange"],tt=["value"],at={width:"200",class:"text-end"},st={colspan:"5",class:"text-end"};function et(a,u,d,p,h,v){return e(),o("div",D,[a.getCartList.carts.length===0?(e(),o("div",M,"購物車沒有任何品項")):(e(),o("table",G,[t("tbody",null,[(e(!0),o(r,null,l(a.getCartList.carts,s=>(e(),o("tr",{key:s.id},[t("td",H,[t("a",{href:"#",class:"text-dark",onClick:m(n=>a.removeCart(s.id),["prevent"])},R,8,J)]),t("td",W,[t("img",{src:s.product.imageUrl,class:"table-image",alt:""},null,8,X)]),t("td",null,c(s.product.title),1),t("td",Y,[t("select",{name:"",id:"",class:"form-select",value:s.qty,onChange:n=>a.setCartQty(n,s.id)},[(e(),o(r,null,l(20,n=>t("option",{value:n,key:n},c(n),9,tt)),64))],40,Z)]),t("td",at,"$ "+c(s.subTotal),1)]))),128))]),t("tfoot",null,[t("tr",null,[t("td",st,"總金額 NT$"+c(a.getCartList.total),1)])])]))])}const dt=_(U,[["render",et],["__scopeId","data-v-5716ae65"]]);export{dt as C,nt as P,ct as T};
