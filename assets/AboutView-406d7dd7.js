import{_ as r,o as i,c as l,a as e,t}from"./index-1348187d.js";const u={name:"AboutView",data(){return{user:{dob:{},location:{},picture:{},name:{}}}},methods:{getUser(){console.log("這是產品的環境");const n="https://randomuser.me/api/";this.$http.get(n).then(o=>{o.data.results&&(this.user=o.data.results[0],console.log(o.data))})}},created(){this.getUser()}},c={class:"about"},a={class:"user"},_=e("h3",null,"隨機使用者",-1),p=["src"],m={class:"user-info"},d={class:"user-info__name"};function h(n,o,f,g,s,b){return i(),l("div",c,[e("div",a,[_,e("img",{src:s.user.picture.medium,class:"user__img"},null,8,p),e("div",m,[e("h3",d,t(s.user.name.title)+" "+t(s.user.name.first)+" "+t(s.user.name.last),1),e("p",null,"Gender："+t(s.user.gender),1),e("p",null,"Age："+t(s.user.dob.age),1),e("p",null,"Birth："+t(n.$dayjs(s.user.dob.date).format("YYYY-MM-DD")),1),e("p",null,"Location City："+t(s.user.location.city),1),e("p",null,"Phone："+t(s.user.phone),1),e("p",null,"Email："+t(s.user.email),1)])])])}const B=r(u,[["render",h]]);export{B as default};