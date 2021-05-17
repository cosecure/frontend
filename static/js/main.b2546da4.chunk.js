(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{49:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(38),l=a.n(n),r=(a(48),a(49),a(10)),o=a(7),i=a(79),d=a(80),h=a(39),j=a(81),u=a(85),b=a.p+"static/media/full-logo.0bd7aff8.svg",p=a(0);var m=function(){return Object(p.jsxs)("div",{id:"header",className:"d-flex flex-column",children:[Object(p.jsx)(i.a,{fluid:!0,children:Object(p.jsxs)(d.a,{className:"justify-content-md-center align-items-md-center bg-light text-dark",children:[Object(p.jsx)(h.a,{sm:6,children:Object(p.jsx)("img",{src:b,height:"80",alt:"logo"})}),Object(p.jsx)(h.a,{sm:{offset:3},children:Object(p.jsxs)(d.a,{className:"align-items-center justify-content-center",children:[Object(p.jsx)(h.a,{className:"text-center",children:Object(p.jsx)(r.b,{to:"/admin",style:{textDecoration:"none"},children:"Admin"})}),Object(p.jsx)(h.a,{className:"text-center",children:Object(p.jsx)(r.b,{to:"/#test",style:{textDecoration:"none"},children:"Test"})}),Object(p.jsx)(h.a,{className:"text-center",children:Object(p.jsx)(r.b,{to:"/#about",style:{textDecoration:"none"},children:"Explore"})})]})})]})}),Object(p.jsx)("div",{className:"d-flex flex-column justify-content-center fluid flex-grow-1 container",children:Object(p.jsxs)(j.a,{children:[Object(p.jsxs)("h1",{className:"font-weight-bolder text-primary shadow-effect",children:[Object(p.jsx)("span",{className:"text-blue",children:"Co"}),"Secure"]}),Object(p.jsxs)("p",{className:"font-weight-bolder",children:["A Machine Learning based Application trained over millions of dataset to predict the covid-19 virus attack",Object(p.jsx)("br",{}),Object(p.jsx)("strong",{children:"Test your results now with acurate predictor!"})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)(u.a,{variant:"primary",className:"m-2",children:"Download"}),Object(p.jsx)(u.a,{variant:"primary",className:"m-2",children:"Learn more"}),Object(p.jsx)(u.a,{variant:"outline-primary",className:"m-2",children:"Test Now"})]})]})})]})},x=a(17),O=a(18),v=a(20),g=a(19),f=a(83),y=a(11),_=a.n(y),C="https://cosecure.herokuapp.com",N=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(x.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={temperature:null,bpm:null,age:null,gender:null,taste_sensitive:null,shortness_of_breath:null,sneeze:null,headache:null,throat_soar:null,cough:null,spO2:null,contact_with_positive_person:null,result:null,accurary:null},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state);var a={temperature:null,bpm:null,age:null,gender:null,taste_sensitive:null,shortness_of_breath:null,sneeze:null,headache:null,throat_soar:null,cough:null,spO2:null,contact_with_positive_person:null,result:null};a.temperature=parseFloat(e.state.temperature),a.bpm=parseInt(e.state.bpm),a.age=parseInt(e.state.age),a.gender=parseInt(e.state.gender),a.taste_sensitive=parseInt(e.state.taste_sensitive),a.shortness_of_breath=parseFloat(e.state.shortness_of_breath),a.sneeze=parseInt(e.state.sneeze),a.headache=parseFloat(e.state.headache),a.throat_soar=parseFloat(e.state.throat_soar),a.cough=parseInt(e.state.cough),a.spO2=parseInt(e.state.spO2),a.contact_with_positive_person=parseFloat(e.state.contact_with_positive_person),a.result=parseInt(e.state.result),console.log(a),_.a.post(C+"/ml_model/predict/",a).then((function(t){e.setState({result:t.data.prediction})})).catch((function(e){console.log("error sending data")})),_.a.get(C+"/ml_model/dataset/accuracy/").then((function(t){e.setState({accurary:t.data.accurary})})).catch((function(e){console.log("error sending data")}))},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"body m-4",children:[Object(p.jsxs)(i.a,{className:"alert alert-primary p-4 text-justify",id:"about",children:[Object(p.jsx)("h2",{className:"mb-4 mt-4",children:"About CoSecure"}),Object(p.jsx)("p",{className:"lead",children:"Since COVID pandemic is again getting peak and uncontrollable, people are not confirm with their symptoms against covid-19 virus, so we across an idea of predicting the user\u2019s covid-19 virus attack based on their body temperature, beats per minute, spO2 level, taste sensitive, sneeze, headache, throat soar, cough and if they contacted with covid-19 positive patient. We will inform the user the changes that he/she is effected based on the previous data of covid-19 patients."}),Object(p.jsx)("p",{className:"lead",children:"CoSecure has two type of users, one is users who want to test their symptoms and another type of user are doctors who can be consulted based on the symptoms."}),Object(p.jsx)("p",{className:"lead",children:"CoSecure is Android Application where user can login and check their chances of covid-19 virus attack based on the body situation. We will take the user data of body temperature, beats per minute, spO2 level, taste sensitive, sneeze, headache, throat soar, cough and if they contacted with covid-19 positive patient. And then we inform the user the chances of virus affected. The prediction is purely based on Machine Learning model that is trained based on the covid-19 test reports of thousands users. If the chances of the user is really high then user can consult the doctor via chat in our application."})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(i.a,{className:"alert alert-info p-4 text-justify mb-4",id:"about",children:[Object(p.jsx)("h2",{className:"mb-4 mt-4",children:"help Us!"}),Object(p.jsx)("p",{className:"lead",children:"Since our Application is based on Users Covid test report, help us by adding your test report to enhance our machine learning model prediction"}),Object(p.jsx)(r.b,{to:"/add-dataset",style:{textDecoration:"none"},children:"Add Your Test Report"})]}),Object(p.jsx)(i.a,{className:"alert alert-success p-4 text-justify",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(h.a,{md:6,sm:12,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h2",{className:"text-success",children:"Sample Prediction Test"}),Object(p.jsx)("p",{className:"lead",children:"This is just a basic prediction trained over 100 dataset, Download the Official application for actual prediction of the covid-19 virus"}),Object(p.jsx)(u.a,{variant:"outline-success",className:"m-2",children:"Download the Android App"})]})}),Object(p.jsx)(h.a,{md:6,sm:12,className:"alert alert-success text-justify",children:Object(p.jsxs)(f.a,{children:[Object(p.jsx)("h2",{className:"text-primary text-left text-center",children:"Enter the Report Data"}),Object(p.jsxs)(f.a.Group,{className:"m-4",children:[Object(p.jsx)(f.a.Label,{children:"Temperature"}),Object(p.jsx)(f.a.Control,{type:"number",placeholder:"Enter the body Temperature",onChange:function(t){return e.setState({temperature:t.target.value})}})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Headache"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.headache,onChange:function(t){e.setState({headache:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"No Headache"}),Object(p.jsx)("option",{value:"0.5",children:"Mild Headache"}),Object(p.jsx)("option",{value:"1",children:"Heavy Headache"})]})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Soar Throad"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.throat_soar,onChange:function(t){e.setState({throat_soar:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"No Soar Throad"}),Object(p.jsx)("option",{value:"0.5",children:"Mild Soar Throad"}),Object(p.jsx)("option",{value:"1",children:"Heavy Soar Throad"})]})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Breathlessness"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.shortness_of_breath,onChange:function(t){e.setState({shortness_of_breath:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"Normal"}),Object(p.jsx)("option",{value:"0.5",children:"Mild"}),Object(p.jsx)("option",{value:"1",children:"Critical"})]})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Contact Status"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.contact_with_positive_person,onChange:function(t){e.setState({contact_with_positive_person:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"No Contact with Covid person"}),Object(p.jsx)("option",{value:"0.5",children:"Came from Abroad"}),Object(p.jsx)("option",{value:"1",children:"Contacted covid person"})]})]}),Object(p.jsxs)(f.a.Group,{className:"m-4",children:[Object(p.jsx)(f.a.Label,{children:"Beats per minute"}),Object(p.jsx)(f.a.Control,{type:"number",placeholder:"Enter the bpm",onChange:function(t){return e.setState({bpm:t.target.value})}})]}),Object(p.jsxs)(f.a.Group,{className:"m-4",children:[Object(p.jsx)(f.a.Label,{children:"spO2 Level"}),Object(p.jsx)(f.a.Control,{type:"number",placeholder:"Enter the O2 saturation Level",onChange:function(t){return e.setState({spO2:t.target.value})}})]}),Object(p.jsx)(u.a,{variant:"primary",type:"submit",onClick:this.handleSubmit,className:"m-4",style:{width:"90%"},children:"Check Report"}),this.state.result?Object(p.jsxs)("p",{children:["Prediction is ",this.state.result,"% - accurary is ",this.state.accurary]}):null]})})]})})]})}}]),a}(s.Component);var w=function(){return Object(p.jsx)("div",{className:"footer",children:Object(p.jsx)("p",{className:"text-grey text-center",children:"\xa9 copyrights cosecure 2021"})})};var S=function(){return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)(m,{}),Object(p.jsx)(N,{}),Object(p.jsx)(w,{})]})},k=a(84),A=a.p+"static/media/full-logo-shadow.b518f813.svg",T=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(x.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",credits:!1},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),_.a.post(C+"/rest-auth/login/",{username:"admin",password:e.state.password}).then((function(t){localStorage.setItem("token",t.data.key),console.log(t.data.key),e.setState({credits:!0})})).catch((function(e){console.log("error login")}))},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this;return this.state.credits?Object(p.jsx)(o.a,{to:"/admin-page"}):Object(p.jsx)("div",{className:"admin",children:Object(p.jsx)("div",{className:"container pt-4",children:Object(p.jsx)(k.a,{border:"primary",style:{width:"100%"},children:Object(p.jsxs)(k.a.Body,{children:[Object(p.jsx)(k.a.Title,{children:"Admin Access Only"}),Object(p.jsx)(k.a.Text,{children:Object(p.jsx)(i.a,{children:Object(p.jsxs)(d.a,{className:"justify-content-md-center",children:[Object(p.jsx)(h.a,{sm:12,md:6,className:"text-center",children:Object(p.jsxs)("span",{children:[Object(p.jsx)("img",{src:A,alt:"logo",style:{width:"80%"}}),Object(p.jsx)("p",{className:"lead",children:"Autoscale and manage the Machine model in admin page exclusive. Change or Update dataset manage dataset train model and much more..."}),Object(p.jsxs)("p",{children:["Not a right page ? ",Object(p.jsx)(r.b,{to:"/",children:"Navigate to Home page"})]})]})}),Object(p.jsx)(h.a,{sm:12,md:6,className:"text-center",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(f.a,{children:[Object(p.jsx)("h2",{className:"text-primary text-left",children:"Admin Login"}),Object(p.jsx)(f.a.Group,{className:"m-4",children:Object(p.jsx)(f.a.Control,{type:"username",placeholder:"Enter admin username",onChange:function(t){return e.setState({email:t.target.value})}})}),Object(p.jsx)(f.a.Group,{className:"m-4",children:Object(p.jsx)(f.a.Control,{type:"password",placeholder:"Enter Password",onChange:function(t){return e.setState({password:t.target.value})}})}),Object(p.jsx)(u.a,{variant:"primary",type:"submit",onClick:this.handleSubmit,className:"m-4",style:{width:"90%"},children:"Login"})]})})})]})})})]})})})})}}]),a}(s.Component),I=Object(o.g)(T);var D=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(I,{})})},z=a(42),F=a(23),L=a(82),P=a(41),M=a.n(P),E=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(x.a)(this,a),(s=t.call(this,e)).handleCSVDownload=function(){_.a.get(C+"/ml_model/dataset/download/",{responseType:"blob",headers:{Authorization:"Token ".concat(localStorage.getItem("token")),"Content-Type":"application/csv"}}).then((function(e){M()(e.data,"dataset.csv"),console.log(e.data)})).catch((function(e){console.log("error fetching dataset")}))},s.handleChangedataset=function(){_.a.post(C+"/ml_model/dataset/change/",{dataset:s.state.datasetSelect},{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){alert("Changed Successfully!"),console.log(e)})).catch((function(e){console.log("error fetching dataset")}))},s.handleChangeFieldFactor=function(){_.a.post(C+"/ml_model/dataset/change-factor/",{field:s.state.field,value:parseFloat(s.state.value)},{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){alert("Changed Successfully!"),console.log(e)})).catch((function(e){console.log("error fetching dataset")}))},s.state={token:localStorage.getItem("token"),dataset:[],datasetSelect:null,field:null,value:0,attrFactor:null},s.state.token?s:Object(F.a)(s,Object(p.jsx)(o.a,{to:"/login"}))}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;_.a.get(C+"/ml_model/dataset/get-factor/",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){console.log(t.data),e.setState({attrFactor:t.data})})).catch((function(e){console.log("error fetching dataset")})),_.a.get(C+"/ml_model/dataset/list/",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){console.log(t.data),e.setState({dataset:t.data}),console.log(e.state)})).catch((function(e){console.log("error fetching dataset")}))}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Welcome Admin, Lucky YOU"}),Object(p.jsxs)(i.a,{children:[Object(p.jsx)(u.a,{variant:"info",type:"submit",onClick:this.handleCSVDownload,className:"m-4",style:{width:"90%"},children:"Download CSV"}),Object(p.jsxs)("div",{className:"alert alert-info p-4 text-justify mb-4",children:[Object(p.jsx)("h2",{children:"Alter Dataset"}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Change Dataset"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.datasetSelect,onChange:function(t){e.setState({datasetSelect:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"cleanedDataSet",children:"Clearned Data Set"}),Object(p.jsx)("option",{value:"fullDataset",children:"Full Dataset"}),Object(p.jsx)("option",{value:"dataset50",children:"dataset50"}),Object(p.jsx)("option",{value:"dataset100",children:"dataset100"}),Object(p.jsx)("option",{value:"dataset500",children:"dataset500"}),Object(p.jsx)("option",{value:"dataset5000",children:"dataset5000"}),Object(p.jsx)("option",{value:"dataset10000",children:"dataset10000"}),Object(p.jsx)("option",{value:"dataset25000",children:"dataset25000"}),Object(p.jsx)("option",{value:"dataset50000",children:"dataset50000"}),Object(p.jsx)("option",{value:"dataset100000",children:"dataset100000"})]})]}),Object(p.jsx)(u.a,{variant:"info",type:"submit",onClick:this.handleChangedataset,className:"m-4",style:{width:"90%"},children:"Change Dataset"}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Change Attribute Factor"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.field,onChange:function(t){e.setState({field:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"throat_soar",children:"throat soar"}),Object(p.jsx)("option",{value:"shortness_of_breath",children:"shortness of breath"}),Object(p.jsx)("option",{value:"head_ache",children:"head_ache"}),Object(p.jsx)("option",{value:"contacted_positive_person",children:"contacted_positive_person"})]})]}),Object(p.jsxs)(f.a.Group,{className:"m-4",children:[Object(p.jsx)(f.a.Label,{children:"Value"}),Object(p.jsx)(f.a.Control,{type:"number",placeholder:"Enter the change factor",onChange:function(t){return e.setState({value:t.target.value})}})]}),Object(p.jsx)(u.a,{variant:"info",type:"submit",onClick:this.handleChangeFieldFactor,className:"m-4",style:{width:"90%"},children:"Change Dataset"})]}),Object(p.jsxs)("div",{className:"alert alert-info p-4 text-justify mb-4",children:[Object(p.jsx)("h2",{children:"Attribute Factors"}),this.state.attrFactor?Object.entries(this.state.attrFactor).map((function(e){var t=Object(z.a)(e,2),a=t[0],s=t[1];return Object(p.jsxs)("p",{children:[a," - ",s]})})):null]}),Object(p.jsx)(L.a,{children:Object(p.jsx)(d.a,{children:this.state.dataset.map((function(e){return Object(p.jsx)(h.a,{md:6,lg:3,sm:12,children:Object(p.jsxs)(L.a.Item,{id:e.key,children:[Object(p.jsxs)("p",{className:"mb-0",children:["id: ",e.pk]}),Object(p.jsxs)("p",{className:"mb-0",children:["temperature: ",e.fields.temperature]}),Object(p.jsxs)("p",{className:"mb-0",children:["gender: ",e.fields.gender]}),Object(p.jsxs)("p",{className:"mb-0",children:["headache: ",e.fields.headache]}),Object(p.jsxs)("p",{className:"mb-0",children:["contact_with_positive_person: ",e.fields.contact_with_positive_person]}),Object(p.jsxs)("p",{className:"mb-0",children:["cough: ",e.fields.cough]}),Object(p.jsxs)("p",{className:"mb-0",children:["shortness_of_breath: ",e.fields.shortness_of_breath]}),Object(p.jsxs)("p",{className:"mb-0",children:["spO2: ",e.fields.spO2]}),Object(p.jsxs)("p",{className:"mb-0",children:["taste_sensitive: ",e.fields.taste_sensitive]}),Object(p.jsxs)("p",{className:"mb-0",children:["bpm: ",e.fields.bpm]}),Object(p.jsxs)("p",{className:"mb-0",children:["throat_soar: ",e.fields.throat_soar]}),Object(p.jsxs)("p",{className:"mb-0",children:["result: ",e.fields.result]})]},e.pk)},e.pk)}))})})]})]})}}]),a}(s.Component);var H=function(){return Object(p.jsx)("div",{className:"",children:Object(p.jsx)(E,{})})},G=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(x.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={temperature:null,bpm:null,age:null,gender:null,taste_sensitive:null,shortness_of_breath:null,sneeze:null,headache:null,throat_soar:null,cough:null,spO2:null,contact_with_positive_person:null,result:null},e.handleSubmit=function(t){t.preventDefault();var a={temperature:null,bpm:null,age:null,gender:null,taste_sensitive:null,shortness_of_breath:null,sneeze:null,headache:null,throat_soar:null,cough:null,spO2:null,contact_with_positive_person:null,result:null};a.temperature=parseFloat(e.state.temperature),a.bpm=parseInt(e.state.bpm),a.age=parseInt(e.state.age),a.gender=parseInt(e.state.gender),a.taste_sensitive=parseInt(e.state.taste_sensitive),a.shortness_of_breath=parseInt(e.state.shortness_of_breath),a.sneeze=parseInt(e.state.sneeze),a.headache=parseInt(e.state.headache),a.throat_soar=parseInt(e.state.throat_soar),a.cough=parseInt(e.state.cough),a.spO2=parseInt(e.state.spO2),a.contact_with_positive_person=parseInt(e.state.contact_with_positive_person),a.result=parseInt(e.state.result),console.log(a),_.a.post(C+"/ml_model/dataset/add/",a).then((function(e){console.log(e.data)})).catch((function(e){console.log("error sending data")}))},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{className:"admin",children:Object(p.jsx)("div",{className:"container pt-4",children:Object(p.jsx)(k.a,{border:"primary",style:{width:"100%"},children:Object(p.jsxs)(k.a.Body,{children:[Object(p.jsx)(k.a.Title,{children:"Add Test Report"}),Object(p.jsx)(k.a.Text,{children:Object(p.jsx)(i.a,{children:Object(p.jsxs)(d.a,{className:"justify-content-md-center",children:[Object(p.jsx)(h.a,{sm:12,md:6,className:"text-center",children:Object(p.jsxs)("span",{children:[Object(p.jsx)("img",{src:A,alt:"logo",style:{width:"80%"}}),Object(p.jsx)("p",{className:"lead",children:"Autoscale and manage the Machine model in admin page exclusive. Change or Update dataset manage dataset train model and much more..."}),Object(p.jsxs)("p",{children:["Not a right page ? ",Object(p.jsx)(r.b,{to:"/",children:"Navigate to Home page"})]})]})}),Object(p.jsx)(h.a,{sm:12,md:6,children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(f.a,{children:[Object(p.jsx)("h2",{className:"text-primary text-left text-center",children:"Enter the Report Data"}),Object(p.jsxs)(f.a.Group,{className:"m-4",children:[Object(p.jsx)(f.a.Label,{children:"Temperature"}),Object(p.jsx)(f.a.Control,{type:"number",placeholder:"Enter the body Temperature",onChange:function(t){return e.setState({temperature:t.target.value})}})]}),Object(p.jsxs)(f.a.Group,{className:"m-4",children:[Object(p.jsx)(f.a.Label,{children:"Age"}),Object(p.jsx)(f.a.Control,{type:"number",placeholder:"Enter the Age",onChange:function(t){return e.setState({age:t.target.value})}})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Gender"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.gender,onChange:function(t){e.setState({gender:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"1",children:"Male"}),Object(p.jsx)("option",{value:"2",children:"Female"}),Object(p.jsx)("option",{value:"1",children:"Don't want to mention"})]})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Headache"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.headache,onChange:function(t){e.setState({headache:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"No Headache"}),Object(p.jsx)("option",{value:"1",children:"Mild Headache"}),Object(p.jsx)("option",{value:"2",children:"Heavy Headache"})]})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Soar Throad"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.throat_soar,onChange:function(t){e.setState({throat_soar:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"No Soar Throad"}),Object(p.jsx)("option",{value:"1",children:"Mild Soar Throad"}),Object(p.jsx)("option",{value:"2",children:"Heavy Soar Throad"})]})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Taste Sensitivity"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.taste_sensitive,onChange:function(t){e.setState({taste_sensitive:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"Normal"}),Object(p.jsx)("option",{value:"1",children:"Mild taste Sensitivity"}),Object(p.jsx)("option",{value:"2",children:"No Taste Sensitivity"})]})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Breathlessness"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.shortness_of_breath,onChange:function(t){e.setState({shortness_of_breath:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"Normal"}),Object(p.jsx)("option",{value:"1",children:"Mild"}),Object(p.jsx)("option",{value:"2",children:"Critical"})]})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Sneeze"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.sneeze,onChange:function(t){e.setState({sneeze:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"No Sneeze"}),Object(p.jsx)("option",{value:"1",children:"Mild"}),Object(p.jsx)("option",{value:"2",children:"Critical"})]})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Cough"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.cough,onChange:function(t){e.setState({cough:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"No Cough"}),Object(p.jsx)("option",{value:"1",children:"Mild Cough"}),Object(p.jsx)("option",{value:"2",children:"Critical Cough"})]})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Contact Status"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.contact_with_positive_person,onChange:function(t){e.setState({contact_with_positive_person:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"No Contact with Covid person"}),Object(p.jsx)("option",{value:"1",children:"Came from Abroad"}),Object(p.jsx)("option",{value:"2",children:"Contacted covid person"})]})]}),Object(p.jsxs)(f.a.Group,{className:"m-4",children:[Object(p.jsx)(f.a.Label,{children:"Beats per minute"}),Object(p.jsx)(f.a.Control,{type:"number",placeholder:"Enter the bpm",onChange:function(t){return e.setState({bpm:t.target.value})}})]}),Object(p.jsxs)(f.a.Group,{className:"m-4",children:[Object(p.jsx)(f.a.Label,{children:"spO2 Level"}),Object(p.jsx)(f.a.Control,{type:"number",placeholder:"Enter the O2 saturation Level",onChange:function(t){return e.setState({spO2:t.target.value})}})]}),Object(p.jsxs)("div",{class:"m-4 form-group",children:[Object(p.jsx)("label",{class:"form-label",children:"Report Status"}),Object(p.jsxs)(f.a.Control,{as:"select",custom:!0,style:{width:"100%",height:"36px"},value:this.state.result,onChange:function(t){e.setState({result:t.target.value})},children:[Object(p.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),Object(p.jsx)("option",{value:"0",children:"No Covid"}),Object(p.jsx)("option",{value:"1",children:"Tested covid positive"})]})]}),Object(p.jsx)(u.a,{variant:"primary",type:"submit",onClick:this.handleSubmit,className:"m-4",style:{width:"90%"},children:"Add Report"})]})})})]})})})]})})})})}}]),a}(s.Component);var B=function(){return Object(p.jsx)("div",{className:"",children:Object(p.jsx)(G,{})})};var R=function(){return Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(r.a,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{path:"/add-dataset",children:Object(p.jsx)(B,{})}),Object(p.jsx)(o.b,{path:"/admin-page",children:Object(p.jsx)(H,{})}),Object(p.jsx)(o.b,{path:"/admin",children:Object(p.jsx)(D,{})}),Object(p.jsx)(o.b,{path:"/",children:Object(p.jsx)(S,{})})]})})})})};l.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.b2546da4.chunk.js.map