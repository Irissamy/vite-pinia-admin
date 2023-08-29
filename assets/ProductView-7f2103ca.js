import{m as U,c as I}from"./modalMixins-f05d6abd.js";import{e as M,f as g,m as k,_ as w,o as r,c as u,a as t,b as h,w as n,v as p,F as x,g as $,h as V,i as D,j as F,p as N,k as S,l as v,t as b,n as j,r as y,q as L}from"./index-fe533987.js";const P=M("productStore",{state:()=>({products:[],isLoading:!1}),actions:{async getProductList(){const e="https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/products/all";this.isLoading=!0,await g.get(e).then(s=>{this.products=s.data.products,this.isLoading=!1})},async removeProduct(e){const s=`https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/product/${e}`;this.isLoading=!0,await g.delete(s).then(()=>{this.getProductList(),this.isLoading=!1})},async addProduct(e){let s="https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/product",l="post";e.isNew===!1&&(s=`https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/product/${e.id}`,l="put"),this.isLoading=!0,await g[l](s,{data:e}).then(a=>{a.data.success?this.getProductList():console.log(a.data.message)}),this.isLoading=!1}}});const O={props:{product:{type:Object,default(){return{}}}},data(){return{modal:{},addProductList:{imagesUrl:[]},mainImgChecked:""}},watch:{product(){this.addProductList={...this.product,imagesUrl:this.product.imagesUrl||[]}}},mixins:[U],methods:{...k(P,["addProduct"]),updateImgFile(){const e=this.$refs.fileInput.files[0],s=new FormData;s.append("file-to-upload",e);const l="https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/upload";this.$refs.imageInput.value?this.addProductList.imageUrl?this.addProductList.imagesUrl.push(this.$refs.imageInput.value):this.addProductList.imageUrl=this.$refs.imageInput.value:this.addProductList.imageUrl?g.post(l,s).then(a=>{a.data.success&&this.addProductList.imagesUrl.push(a.data.imageUrl)}):g.post(l,s).then(a=>{a.data.success&&(this.addProductList.imageUrl=a.data.imageUrl)}),this.$refs.imageInput.value="",this.$refs.fileInput.value=""},delImages(e){e===-1?this.addProductList.imageUrl="":this.addProductList.imagesUrl.splice(e,1)},selectToMain(e){this.addProductList.imagesUrl[e]=this.addProductList.imageUrl,this.addProductList.imageUrl=this.mainImgChecked,this.mainImgChecked=""}}},d=e=>(N("data-v-da2dfd43"),e=e(),S(),e),R={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},T={class:"modal-dialog modal-xl",role:"document"},B={class:"modal-content border-0"},q=d(()=>t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"新增產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),A={class:"modal-body"},E={class:"row"},z={class:"col-sm-4"},G={class:"mb-3"},H=d(()=>t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1)),J={type:"text",class:"form-control",id:"image",ref:"imageInput",placeholder:"請輸入圖片連結"},K={class:"mb-3"},Q=d(()=>t("label",{for:"customFile",class:"form-label"},[v("或 上傳圖片 "),t("i",{class:"fas fa-spinner fa-spin"})],-1)),W={type:"file",id:"customFile",class:"form-control",ref:"fileInput"},X={class:"mt-3"},Y={class:"mb-3"},Z={class:"d-flex"},tt=d(()=>t("p",{class:"fw-bolder mb-2"},"主要圖片",-1)),st=d(()=>t("i",{class:"bi bi-trash"},null,-1)),et=[st],ot=["src"],it={key:0,class:"row"},dt=d(()=>t("p",{class:"fw-bolder mb-2"},"次要圖片",-1)),lt={class:"form-check d-flex ps-0"},at={class:"form-check form-check-inline"},ct=["id","value","onChange"],nt=d(()=>t("label",{class:"form-check-label",for:"inlineRadio1"},"選為主要",-1)),rt=["onClick"],ut=d(()=>t("i",{class:"bi bi-trash"},null,-1)),mt=[ut],pt=["src"],ht={class:"col-sm-8"},_t={class:"mb-3"},bt=d(()=>t("label",{for:"title",class:"form-label"},"標題",-1)),ft={class:"row gx-2"},gt={class:"mb-3 col-md-6"},vt=d(()=>t("label",{for:"category",class:"form-label"},"分類",-1)),Pt={class:"mb-3 col-md-6"},yt=d(()=>t("label",{for:"price",class:"form-label"},"單位",-1)),Lt={class:"row gx-2"},xt={class:"mb-3 col-md-6"},kt=d(()=>t("label",{for:"origin_price",class:"form-label"},"原價",-1)),wt={class:"mb-3 col-md-6"},Ut=d(()=>t("label",{for:"price",class:"form-label"},"售價",-1)),$t=d(()=>t("hr",null,null,-1)),Ct={class:"mb-3"},It=d(()=>t("label",{for:"description",class:"form-label"},"產品描述",-1)),Mt={class:"mb-3"},Vt=d(()=>t("label",{for:"content",class:"form-label"},"說明內容",-1)),Dt={class:"mb-3"},Ft={class:"form-check"},Nt=d(()=>t("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1)),St={class:"modal-footer"},jt=d(()=>t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1));function Ot(e,s,l,a,o,c){return r(),u("div",R,[t("div",T,[t("div",B,[q,t("div",A,[t("div",E,[t("div",z,[t("div",G,[H,t("input",J,null,512)]),t("div",K,[Q,t("input",W,null,512),t("div",X,[t("button",{class:"btn btn-outline-primary btn-md d-block w-100",onClick:s[0]||(s[0]=h((...i)=>c.updateImgFile&&c.updateImgFile(...i),["prevent"]))}," 新增圖片 ")])]),t("div",Y,[t("div",Z,[tt,t("a",{href:"javascript:void(0)",class:"d-block ms-auto",onClick:s[1]||(s[1]=h(i=>c.delImages(-1),["prevent"]))},et)]),n(t("input",{type:"text",id:"image-url",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=i=>o.addProductList.imageUrl=i)},null,512),[[p,o.addProductList.imageUrl]]),t("img",{class:"img-fluid mt-3 main-img",alt:"",src:o.addProductList.imageUrl},null,8,ot)]),o.addProductList.imagesUrl?(r(),u("div",it,[dt,(r(!0),u(x,null,$(o.addProductList.imagesUrl,(i,_)=>(r(),u("div",{class:"col-md-6 mb-2",key:_},[t("div",lt,[t("div",at,[n(t("input",{class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:`inlineRadio${_}`,value:i,"onUpdate:modelValue":s[3]||(s[3]=f=>o.mainImgChecked=f),onChange:f=>c.selectToMain(_)},null,40,ct),[[V,o.mainImgChecked]]),nt]),t("a",{href:"javascript:void(0)",class:"d-block ms-auto",onClick:h(f=>c.delImages(_),["prevent"])},mt,8,rt)]),t("img",{src:i,alt:"圖片1",class:"img-fluid card-img"},null,8,pt)]))),128))])):D("",!0)]),t("div",ht,[t("div",_t,[bt,n(t("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":s[4]||(s[4]=i=>o.addProductList.title=i)},null,512),[[p,o.addProductList.title]])]),t("div",ft,[t("div",gt,[vt,n(t("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":s[5]||(s[5]=i=>o.addProductList.category=i)},null,512),[[p,o.addProductList.category]])]),t("div",Pt,[yt,n(t("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":s[6]||(s[6]=i=>o.addProductList.unit=i)},null,512),[[p,o.addProductList.unit]])])]),t("div",Lt,[t("div",xt,[kt,n(t("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":s[7]||(s[7]=i=>o.addProductList.origin_price=i)},null,512),[[p,o.addProductList.origin_price]])]),t("div",wt,[Ut,n(t("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":s[8]||(s[8]=i=>o.addProductList.price=i)},null,512),[[p,o.addProductList.price]])])]),$t,t("div",Ct,[It,n(t("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":s[9]||(s[9]=i=>o.addProductList.description=i)},null,512),[[p,o.addProductList.description]])]),t("div",Mt,[Vt,n(t("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":s[10]||(s[10]=i=>o.addProductList.content=i)},null,512),[[p,o.addProductList.content]])]),t("div",Dt,[t("div",Ft,[n(t("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":s[11]||(s[11]=i=>o.addProductList.is_enabled=i)},null,512),[[F,o.addProductList.is_enabled]]),Nt])])])])]),t("div",St,[jt,t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:s[12]||(s[12]=h(i=>e.addProduct(o.addProductList),["prevent"]))},"確認")])])])],512)}const Rt=w(O,[["render",Ot],["__scopeId","data-v-da2dfd43"]]),Tt={props:{product:{type:Object}},mixins:[U],methods:{...k(P,["removeProduct"]),delProduct(e){this.removeProduct(e)}}},Bt={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},qt={class:"modal-dialog",role:"document"},At={class:"modal-content border-0"},Et={class:"modal-header bg-danger text-white"},zt={class:"modal-title"},Gt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Ht={class:"modal-body"},Jt={class:"text-danger"},Kt={class:"modal-footer"},Qt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function Wt(e,s,l,a,o,c){return r(),u("div",Bt,[t("div",qt,[t("div",At,[t("div",Et,[t("h5",zt,[t("span",null,"刪除"+b(l.product.title),1)]),Gt]),t("div",Ht,[v(" 是否刪除 "),t("strong",Jt,b(l.product.title),1),v(" (刪除後將無法恢復)。 ")]),t("div",Kt,[Qt,t("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal",onClick:s[0]||(s[0]=i=>c.delProduct(l.product.id))},"確認刪除")])])])],512)}const Xt=w(Tt,[["render",Wt]]),Yt={components:{ProductDetail:Rt,DeleteProduct:Xt},data(){return{currency:I,isNew:!1,currentProduct:{imagesUrl:[]}}},computed:{...j(P,["products","isLoading"])},methods:{...k(P,["getProductList"]),openModal(e,s){e?this.currentProduct={is_enabled:0,imagesUrl:[],isNew:!0}:(this.currentProduct={...s},this.currentProduct.isNew=!1),this.isNew=e,this.$refs.productDatail.showModal()},delModal(e){this.currentProduct={...e},this.$refs.deleteProduct.showModal()}},created(){this.getProductList()}},Zt=t("h4",{class:"fw-bold py-3 mb-4"},[t("span",{class:"text-muted fw-light fs-4"},"Pages /"),v(" Product 產品")],-1),ts={class:"card"},ss={class:"card-header d-flex align-items-center"},es=t("h5",{class:"mb-0"},"Product 產品",-1),os={class:"ms-auto"},is={class:"table-responsive text-nowrap"},ds={class:"table"},ls=t("thead",{class:"table-light"},[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"200"},"編輯")])],-1),as={class:"table-border-bottom-0"},cs={class:"text-right"},ns={class:"text-right"},rs={key:0,class:"text-success"},us={key:1,class:"text-muted"},ms={class:"btn-group"},ps=["onClick"],hs=["onClick"];function _s(e,s,l,a,o,c){const i=y("LoadingOverlay"),_=y("ProductDetail"),f=y("DeleteProduct");return r(),u(x,null,[L(i,{active:e.isLoading},null,8,["active"]),Zt,t("div",ts,[t("div",ss,[es,t("div",os,[t("button",{class:"btn btn-primary",type:"button",onClick:s[0]||(s[0]=h(m=>c.openModal(!0),["prevent"]))},"新增項目")])]),t("div",is,[t("table",ds,[ls,t("tbody",as,[(r(!0),u(x,null,$(e.products,m=>(r(),u("tr",{key:m.id},[t("td",null,b(m.category),1),t("td",null,b(m.title),1),t("td",cs,b(o.currency(m.origin_price)),1),t("td",ns,b(o.currency(m.price)),1),t("td",null,[m.is_enabled===1?(r(),u("span",rs,"啟用")):(r(),u("span",us,"未啟用"))]),t("td",null,[t("div",ms,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:h(C=>c.openModal(!1,m),["prevent"])},"編輯",8,ps),t("button",{class:"btn btn-outline-danger btn-sm",onClick:h(C=>c.delModal(m),["prevent"])},"刪除",8,hs)])])]))),128))])])])]),L(_,{ref:"productDatail",product:o.currentProduct},null,8,["product"]),L(f,{ref:"deleteProduct",product:o.currentProduct},null,8,["product"])],64)}const gs=w(Yt,[["render",_s]]);export{gs as default};