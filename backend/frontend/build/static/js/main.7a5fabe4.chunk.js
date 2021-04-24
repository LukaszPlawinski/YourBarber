(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(27),s=n.n(c),i=(n(133),n(134),n(252)),o=(n(135),n(8)),l=n(258),j=n(263),u=n(256),d=n(30),b=n(12),p=n.n(b),h=n(20),O=n(23),m=n.n(O),x="USER_LOGIN_REQUEST",f="USER_LOGIN_SUCCESS",g="USER_LOGIN_FAIL",v="USER_LOGOUT",y="USER_REGISTER_REQUEST",S="USER_REGISTER_SUCCESS",E="USER_REGISTER_FAIL",_="USER_DETAILS_REQUEST",w="USER_DETAILS_SUCCESS",C="USER_DETAILS_FAIL",L="USER_DETAILS_RESET",k="USER_UPDATE_PROFILE_REQUEST",I="USER_UPDATE_PROFILE_SUCCESS",T="USER_UPDATE_PROFILE_FAIL",N="USER_UPDATE_PROFILE_RESET",R="USER_LIST_REQUEST",P="USER_LIST_SUCCESS",A="USER_LIST_FAIL",U="APPOINTMENTS_SET_REQUEST",F="APPOINTMENTS_SET_SUCCESS",B="APPOINTMENTS_SET_FAIL",D="APPOINTMENT_USER_SET",M="APPOINTMENT_IS_PAID",G="APPOINTMENT_USER_RESET",z="APPOINTMENTS_MY_LIST_REQUEST",W="APPOINTMENTS_MY_LIST_SUCCESS",Q="APPOINTMENTS_MY_LIST_FAIL",Y="APPOINTMENTS_MY_LIST_RESET",q=function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:D,user_date:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},J=function(e){return function(t){t({type:M,is_paid:e})}},K=function(){return function(){var e=Object(h.a)(p.a.mark((function e(t,n){var r,a,c,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:z}),r=n(),a=r.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.next=6,m.a.get("/api/appointments/myappointments",c);case 6:s=e.sent,i=s.data,t({type:W,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:Q,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},V="BARBER_LIST_REQUEST",H="BARBER_LIST_SUCCESS",X="BARBER_LIST_FAIL",Z="BARBER_USER_SET",$="BARBER_USER_RESET",ee=function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:V}),e.next=4,m.a.get("/api/barbers");case 4:n=e.sent,r=n.data,t({type:H,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:X,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},te=function(e){return function(t){t({type:Z,user_barber:e})}},ne="SERVICE_LIST_REQUEST",re="SERVICE_LIST_SUCCESS",ae="SERVICE_LIST_FAIL",ce="SERVICE_USER_SET",se="SERVICE_USER_RESET",ie=function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:ne}),e.next=4,m.a.get("/api/services");case 4:n=e.sent,r=n.data,t({type:re,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:ae,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},oe=function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:ce,user_service:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},le=n(17),je=n(1);var ue=function(){var e=Object(o.c)((function(e){return e.userLogin})).userInfo,t=Object(le.k)(),n=Object(o.b)();return Object(je.jsx)("header",{children:Object(je.jsxs)(l.a,{expand:"md",bg:"dark",variant:"dark",className:"justify-content-end",children:[Object(je.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(je.jsx)(l.a.Collapse,{className:"justify-content-center",id:"responsive-navbar-nav",children:Object(je.jsxs)(j.a,{className:"justify-content-center",children:[Object(je.jsx)(d.LinkContainer,{to:"/home",children:Object(je.jsx)(j.a.Link,{className:"mt-2",children:"About"})}),Object(je.jsx)(d.LinkContainer,{to:"/services",children:Object(je.jsx)(j.a.Link,{className:"mt-2",children:"Services"})}),Object(je.jsx)(d.LinkContainer,{to:"/barbers",children:Object(je.jsx)(j.a.Link,{className:"mt-2",children:"Barbers"})}),Object(je.jsx)(d.LinkContainer,{to:"/home",children:Object(je.jsx)(l.a.Brand,{className:"mr-0",children:Object(je.jsx)("img",{src:"https://yourbarber-bucket.s3-eu-west-1.amazonaws.com/Logo.jpg",width:"50",height:"50",className:"d-inline-block align-top",alt:"React Bootstrap logo"})})}),Object(je.jsx)(d.LinkContainer,{to:"/booking",children:Object(je.jsx)(j.a.Link,{className:"mt-2 ",children:"Booking"})}),e?Object(je.jsxs)(u.a,{className:"mt-2 ",title:e.name,id:"username",style:{wordWrap:"break-word"},children:[Object(je.jsx)(d.LinkContainer,{to:"/profile",children:Object(je.jsx)(u.a.Item,{children:"Profile"})}),e.isBarber?Object(je.jsx)(d.LinkContainer,{to:"/barberappointments",children:Object(je.jsx)(u.a.Item,{children:"Barber Appointments"})}):Object(je.jsx)(d.LinkContainer,{to:"/myappointments",children:Object(je.jsx)(u.a.Item,{children:"My Appointments"})}),Object(je.jsx)(u.a.Item,{onClick:function(){n((function(e){localStorage.removeItem("userInfo"),e({type:v}),e({type:L}),e({type:Y})})),n(function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:G});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n((function(e){e({type:$})})),n(function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:se});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.push("/home")},children:"Logout"})]}):Object(je.jsx)(d.LinkContainer,{to:"/login",children:Object(je.jsx)(j.a.Link,{className:"mt-2 ",children:"Login"})}),Object(je.jsx)(d.LinkContainer,{to:"/contact",children:Object(je.jsx)(j.a.Link,{className:"mt-2",children:"Contact"})})]})})]})})},de=n(253),be=n(121);var pe=function(){return Object(je.jsx)("footer",{children:Object(je.jsx)(i.a,{className:"text-center",children:Object(je.jsx)(de.a,{children:Object(je.jsx)(be.a,{children:Object(je.jsx)("p",{class:"copyright text-muted",children:"Copyright \xa9 Lukasz Plawinski 2021"})})})})})},he=n(262),Oe=n(120),me=n(259);var xe=function(e){var t=e.barber,n=Object(o.b)(),r=function(){n(te(t))};return Object(o.c)((function(e){return e.barberList})).user_barber._id===t._id?Object(je.jsxs)(he.a,{style:{border:"2px solid orange"},className:"px-4 pt-4 my-3 mx-3",children:[Object(je.jsx)(he.a.Img,{onClick:r,src:t.image}),Object(je.jsxs)(he.a.Body,{children:[Object(je.jsx)(he.a.Title,{children:t.nickname}),Object(je.jsx)(Oe.a,{onClick:r,variant:"outline-warning",children:"Select"}),Object(je.jsxs)(me.a,{className:"mt-2",children:[Object(je.jsx)(me.a.Toggle,{as:Oe.a,variant:"outline-warning",eventKey:"0",children:"More Info"}),Object(je.jsx)(me.a.Collapse,{eventKey:"0",children:Object(je.jsx)(he.a.Body,{children:t.description})})]})]})]}):Object(je.jsxs)(he.a,{className:"px-4 pt-4 my-3 mx-3",children:[Object(je.jsx)(he.a.Img,{onClick:r,src:t.image}),Object(je.jsxs)(he.a.Body,{children:[Object(je.jsx)(he.a.Title,{children:t.nickname}),Object(je.jsx)(Oe.a,{onClick:r,variant:"outline-warning",children:"Select"}),Object(je.jsxs)(me.a,{className:"mt-2",children:[Object(je.jsx)(me.a.Toggle,{as:Oe.a,variant:"outline-warning",eventKey:"0",children:"More Info"}),Object(je.jsx)(me.a.Collapse,{eventKey:"0",children:Object(je.jsx)(he.a.Body,{children:t.description})})]})]})]})},fe=n(254);var ge=function(){return Object(je.jsx)(fe.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",margin:"auto",display:"block"},children:Object(je.jsx)("span",{className:"sr-only",children:" Loading"})})},ve=n(260);var ye=function(e){var t=e.variant,n=e.children;return Object(je.jsx)(ve.a,{variant:t,children:n})};var Se=function(e){var t=e.location,n=Object(o.b)(),a=Object(o.c)((function(e){return e.barberList})),c=a.error,s=a.loading,i=a.barbers,l=Object(le.k)();return Object(r.useEffect)((function(){n(ee())}),[n]),Object(je.jsxs)("div",{children:[Object(je.jsx)("h4",{className:"py-3",children:"Select Barber"}),s?Object(je.jsx)(ge,{}):c?Object(je.jsx)(ye,{variant:"danger",children:c}):Object(je.jsx)(de.a,{className:"justify-content-sm-center",children:i.map((function(e){return Object(je.jsx)(be.a,{sm:12,md:6,lg:4,children:Object(je.jsx)(xe,{barber:e})},e._id)}))}),0!==Object.keys(a.user_barber).length&&"/barbers"===t.pathname?Object(je.jsx)(Oe.a,{variant:"outline-warning",onClick:function(){l.push("/booking")},style:{marginTop:"30px"},children:"Next"}):null]})},Ee=n(261);var _e=function(e){var t=e.service,n=Object(o.b)(),r=function(){n(oe(t))};return Object(o.c)((function(e){return e.serviceList})).user_service._id===t._id?Object(je.jsxs)(Ee.a.Item,{style:{cursor:"pointer",border:"2px solid orange"},onClick:r,children:[t.serviceName," - ",t.price," \u20ac"]}):Object(je.jsxs)(Ee.a.Item,{style:{cursor:"pointer"},onClick:r,children:[t.serviceName," - ",t.price," \u20ac"]})};var we=function(e){var t=e.location,n=Object(o.b)(),a=Object(o.c)((function(e){return e.serviceList})),c=a.error,s=a.loading,i=a.services,l=Object(le.k)();return Object(r.useEffect)((function(){n(ie())}),[n]),Object(je.jsxs)("div",{children:[Object(je.jsx)("h4",{className:"py-3",children:"Select Service"}),s?Object(je.jsx)(ge,{}):c?Object(je.jsx)(ye,{variant:"danger",children:c}):Object(je.jsx)(de.a,{className:"justify-content-center",children:Object(je.jsx)(Ee.a,{variant:"flush",children:i.map((function(e){return Object(je.jsx)(be.a,{sm:12,children:Object(je.jsx)(_e,{service:e})},e._id)}))})}),0!==Object.keys(a.user_service).length&&"/services"===t.pathname?Object(je.jsx)(Oe.a,{variant:"outline-warning",onClick:function(){l.push("/booking")},style:{marginTop:"30px"},children:"Next"}):null]})},Ce=n(9),Le=n(21),ke=n(122),Ie=n.n(ke),Te=(n(164),n(46)),Ne=n.n(Te),Re=n(63),Pe=n.n(Re),Ae=n(78),Ue=n.n(Ae);var Fe=function(e){var t=e.barber,n=Object(o.b)(),a=Object(o.c)((function(e){return e.appointmentsList})),c=a.appointments,s=a.user_appointment;return Object(r.useEffect)((function(){n(function(){var e=Object(h.a)(p.a.mark((function e(t,n){var r,a,c,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:U}),r=n(),a=r.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.next=6,m.a.get("/api/appointments",c);case 6:s=e.sent,i=s.data,t({type:F,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:B,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}())}),[n]),Object(je.jsxs)("div",{children:[Object(je.jsx)("h4",{className:"py-3",children:"Select Date"}),Object(je.jsx)(Ie.a,{showTimeSelect:!0,placeholderText:"Select date and time",filterDate:function(e){var t=e.getDay();return 0!==t&&6!==t},selected:s,onChange:function(e){return function(e){console.log(e),n(q(e))}(e)},minTime:Ne()(Pe()(new Date,0),8),maxTime:Ne()(Pe()(new Date,0),17),filterTime:function(e){var n=c.map((function(e){return t._id===e.barber?Ue()(e.date).getTime():null})),r=new Date,a=new Date(e);return r.getTime()<a.getTime()&&!n.includes(a.getTime())},dateFormat:"MMMM d, yyyy h:mm aa"})]})},Be=n(40),De=n(125);var Me=function(e){var t=e.amount,n=e.barber,r=e.service,a=e.appointment,c=e.user,s=Object(o.b)(),i=Object(Be.useStripe)(),l=Object(le.k)(),j=Object(Be.useElements)(),u=function(){var e=Object(h.a)(p.a.mark((function e(o){var u,d,b,h,O,x,f,g;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.preventDefault(),i&&j){e.next=3;break}return e.abrupt("return");case 3:return u=j.getElement(Be.CardElement),e.next=6,i.createPaymentMethod({type:"card",card:u});case 6:if(d=e.sent,b=d.error,h=d.paymentMethod,!b){e.next=13;break}console.log("[error]",b),e.next=41;break;case 13:return console.log("[PaymentMethod]",h.id),(O=new FormData).append("amount",parseFloat(t)),O.append("currency","eur"),O.append("customer",c.email),e.next=20,m()({method:"post",url:"/api/appointments/createPaymentIntent",data:O,headers:{"Content-Type":"multipart/form-data"}});case 20:return x=e.sent,f=x.data,e.prev=22,e.next=25,i.confirmCardPayment(f,{payment_method:h.id});case 25:return e.sent,(g=new FormData).append("barber",n._id),g.append("service",r._id),g.append("date",a.toISOString()),g.append("isPayed","True"),g.append("user",c._id),e.next=34,m()({method:"post",url:"/api/appointments/create",data:g,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(c.token)}});case 34:s(J(!0)),l.push("/home"),e.next=41;break;case 38:e.prev=38,e.t0=e.catch(22),console.log(e.t0);case 41:case"end":return e.stop()}}),e,null,[[22,38]])})));return function(t){return e.apply(this,arguments)}}();return Object(je.jsxs)("form",{onSubmit:u,children:[Object(je.jsx)("fieldset",{className:"FormGroup",children:Object(je.jsx)(Be.CardElement,{options:{style:{base:{color:"#BFBB50",border:"1px solid white",fontWeight:500,fontFamily:"Source Code Pro, Consolas, Menlo, monospace",fontSize:"16px",fontSmoothing:"antialiased","::placeholder":{color:"#CFD7DF"},":-webkit-autofill":{color:"#e39f48"}},invalid:{color:"#fff",":focus":{color:"#FA755A"},"::placeholder":{color:"#FFCCA5"}}}}})}),Object(je.jsx)(Oe.a,{style:{marginTop:"20px"},variant:"outline-warning",type:"submit",disabled:!i,onClick:function(){console.log(c)},children:"Pay"})]})},Ge=n(255),ze=Object(De.a)("pk_test_tmFmll6axS8X1TWpYaEJXRWi00AYDcE7HL");var We=function(e){var t,n=e.barber,r=e.service,a=e.appointment,c=e.history,s=e.user;return Object(je.jsxs)("div",{children:[Object(je.jsx)("h4",{className:"mb-4",children:"Appointment Details"}),Object(je.jsx)(Ge.a,{striped:!0,responsive:!0,className:"table-sm",children:Object(je.jsxs)("tbody",{children:[Object(je.jsx)("tr",{children:Object(je.jsxs)("td",{children:["Service: \xa0\xa0 ",r.serviceName]})}),Object(je.jsx)("tr",{children:Object(je.jsxs)("td",{children:["Barber: \xa0\xa0",n.nickname]})}),Object(je.jsx)("tr",{children:Object(je.jsxs)("td",{children:["Date: \xa0\xa0",a.toISOString().slice(0,10)]})}),Object(je.jsx)("tr",{children:Object(je.jsxs)("td",{children:["Time: \xa0\xa0",(t=a,t.toLocaleString().slice(11,-6)+t.toLocaleString().slice(18))]})}),Object(je.jsx)("tr",{children:Object(je.jsxs)("td",{children:["Cost: \xa0\xa0",r.price," \u20ac"]})})]})}),Object(je.jsx)(Be.Elements,{stripe:ze,children:Object(je.jsx)(Me,{amount:r.price,barber:n,service:r,appointment:a,history:c,user:s})})]})};var Qe=function(){var e=Object(r.useState)({logged:!1,isConfirmed:!1}),t=Object(Le.a)(e,2),n=t[0],c=t[1],s=Object(o.c)((function(e){return e})),i=s.barberList,l=s.appointmentsList,j=s.serviceList,u=s.userLogin.userInfo;Object(r.useEffect)((function(){b()}),[]);var d=Object(le.k)(),b=function(){localStorage.getItem("userInfo")&&c(Object(Ce.a)(Object(Ce.a)({},n),{},{logged:!0}))};return n.logged&&n.isConfirmed?Object(je.jsx)("div",{children:Object(je.jsx)(We,{barber:i.user_barber,service:j.user_service,appointment:l.user_appointment,user:u})}):n.logged?Object(je.jsxs)("div",{children:[Object(je.jsx)(we,{location:!0}),0!==Object.keys(j.user_service).length?Object(je.jsx)(Se,{location:!0}):null,0!==Object.keys(i.user_barber).length&&0!==Object.keys(j.user_service).length?Object(je.jsx)(Fe,{barber:i.user_barber}):null,0!==Object.keys(i.user_barber).length&&0!==Object.keys(j.user_service).length&&""!==l.user_appointment?Object(je.jsx)(Oe.a,{variant:"outline-warning",onClick:function(){c(Object(Ce.a)(Object(Ce.a)({},n),{},{isConfirmed:!0}))},style:{marginTop:"30px",background:"#282828"},children:"Next"}):null]}):Object(je.jsxs)(a.a.Fragment,{children:[Object(je.jsx)(ye,{variant:"light",children:"You are not logged in."}),Object(je.jsx)(Oe.a,{onClick:function(){d.push("/login")},type:"submit",variant:"outline-warning",children:"Login"})]})},Ye=n(126),qe=n.n(Ye),Je=n(257);function Ke(){var e=Object(r.useState)(!1),t=Object(Le.a)(e,2),n=t[0],a=t[1];return n?Object(je.jsx)(ye,{variant:"light",children:"Thank you for your message. We will respond as soon as possible."}):Object(je.jsxs)(Je.a,{className:"contact-form",onSubmit:function(e){e.preventDefault(),qe.a.sendForm("service_1x8v83k","template_ia48tcq",e.target,"user_tK28llHY5LPvuWRuk7EIP").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(je.jsxs)(Je.a.Row,{children:[Object(je.jsxs)(Je.a.Group,{as:be.a,controlId:"formGridName",children:[Object(je.jsx)(Je.a.Label,{children:"Name"}),Object(je.jsx)(Je.a.Control,{placeholder:"Name",name:"name"})]}),Object(je.jsxs)(Je.a.Group,{className:"pl-4",as:be.a,controlId:"formGridEmail",children:[Object(je.jsx)(Je.a.Label,{children:"Email"}),Object(je.jsx)(Je.a.Control,{type:"email",placeholder:"Enter email",name:"email"})]})]}),Object(je.jsxs)(Je.a.Group,{controlId:"formGridMessage",children:[Object(je.jsx)(Je.a.Label,{children:"Message"}),Object(je.jsx)(Je.a.Control,{as:"textarea",rows:"4",placeholder:"Message",name:"message"})]}),Object(je.jsx)(Oe.a,{className:"my-5",variant:"outline-warning",type:"submit",value:"Send",onClick:function(){return a(!0)},children:"Submit"})]})}var Ve=function(){return Object(je.jsx)("div",{children:Object(je.jsxs)(de.a,{className:"justify-content-sm-center",children:[Object(je.jsx)(be.a,{xs:12,md:4,children:Object(je.jsx)(he.a,{className:"text-center my-4",style:{border:"none"},children:Object(je.jsxs)(he.a.Body,{children:[Object(je.jsx)(he.a.Title,{className:"mb-4",children:"Address"}),Object(je.jsxs)(he.a.Text,{children:[Object(je.jsx)("p",{children:"7 Mullingar Rd."}),Object(je.jsx)("p",{children:"Dublin"})]})]})})}),Object(je.jsx)(be.a,{xs:12,md:4,children:Object(je.jsx)(he.a,{className:"text-center my-4",style:{border:"none"},children:Object(je.jsxs)(he.a.Body,{children:[Object(je.jsx)(he.a.Title,{className:"mb-4",children:"Get in Touch"}),Object(je.jsxs)(he.a.Text,{children:[Object(je.jsx)("p",{children:"Contact@yourbarber.ie"}),Object(je.jsx)("p",{children:"0891234567"})]})]})})}),Object(je.jsx)(be.a,{xs:12,md:4,children:Object(je.jsx)(he.a,{className:"text-center my-4",style:{border:"none"},children:Object(je.jsxs)(he.a.Body,{children:[Object(je.jsx)(he.a.Title,{className:"mb-4",children:"Opening hours"}),Object(je.jsxs)(he.a.Text,{children:[Object(je.jsx)("p",{children:"Mon-Fri: 8am-5pm"}),Object(je.jsx)("p",{children:"Sat-Sun: Closed"})]})]})})})]})})};var He=function(e){var t=e.children,n=e.size;return Object(je.jsx)(i.a,{children:Object(je.jsx)(de.a,{className:"justify-content-md-center",children:Object(je.jsx)(be.a,{xs:12,md:n,children:t})})})};var Xe=function(){return Object(je.jsxs)("div",{children:[Object(je.jsx)(He,{size:8,children:Object(je.jsx)(Ke,{})}),Object(je.jsx)(He,{size:10,children:Object(je.jsx)(Ve,{})})]})};var Ze=function(){var e=Object(le.k)();return Object(je.jsx)("div",{children:Object(je.jsx)(He,{children:Object(je.jsxs)(de.a,{children:[Object(je.jsxs)(be.a,{md:6,children:[Object(je.jsx)("h4",{className:"mb-5",children:"About us"}),Object(je.jsx)("p",{children:"Your Barber Shop was created for real guys who demand more than a 10-minute haircut. Our salon is not just a barbershop - it's a place where men can feel special."}),Object(je.jsx)("p",{children:"Thanks to qualified employees working in our salon, professional beard and moustache styling is possible. We are committed to ensuring that our services are at the highest level, and customers using them are satisfied. We make sure that hair cutting is a pleasure for men, therefore you will not have to wait in line with us. We will make an appointment with you for a specific day and time, so you won't lose precious time, and we will have enough of it to take care of your hair."}),Object(je.jsxs)(Oe.a,{variant:"outline-warning",onClick:function(){e.push("/booking")},style:{margin:"30px 0px"},children:[" ","Book Now"]})]}),Object(je.jsx)(be.a,{md:6,children:Object(je.jsx)("img",{src:"https://yourbarber-bucket.s3-eu-west-1.amazonaws.com/about.jpg",alt:""})})]})})})};var $e=function(){var e=Object(o.b)();return!0===Object(o.c)((function(e){return e.appointmentsList})).is_paid?Object(je.jsxs)("div",{children:[Object(je.jsx)(ye,{variant:"light",children:"Appointment Is Successfully Created !"}),Object(je.jsx)(Oe.a,{variant:"outline-warning",onClick:function(){e(q("")),e(oe({})),e(te({})),e(J(!1))},children:"Okay"})]}):Object(je.jsx)("div",{children:Object(je.jsx)(Ze,{})})},et=n(24);var tt=function(e){var t=e.location,n=e.history,a=Object(r.useState)(""),c=Object(Le.a)(a,2),s=c[0],i=c[1],l=Object(r.useState)(""),j=Object(Le.a)(l,2),u=j[0],d=j[1],b=Object(o.b)(),O=t.search?t.search.split("=")[1]:"/",v=Object(o.c)((function(e){return e.userLogin})),y=v.error,S=v.loading,E=v.userInfo;return Object(r.useEffect)((function(){E&&n.push(O)}),[n,E,O]),Object(je.jsxs)(He,{children:[Object(je.jsx)("h3",{className:"mb-4",children:"Login"}),y&&Object(je.jsx)(ye,{variant:"danger",children:y}),S&&Object(je.jsx)(ge,{}),Object(je.jsxs)(Je.a,{onSubmit:function(e){e.preventDefault(),b(function(e,t){return function(){var n=Object(h.a)(p.a.mark((function n(r){var a,c,s;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:x}),a={headers:{"Content-type":"application/json"}},n.next=5,m.a.post("/api/users/login",{username:e,password:t},a);case 5:c=n.sent,s=c.data,r({type:f,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),r({type:g,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(s,u))},children:[Object(je.jsxs)(Je.a.Group,{controlId:"email",children:[Object(je.jsx)(Je.a.Label,{children:"Email"}),Object(je.jsx)(Je.a.Control,{type:"email",placeholder:"Enter Email",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(je.jsxs)(Je.a.Group,{controlId:"password",children:[Object(je.jsx)(Je.a.Label,{children:"Password"}),Object(je.jsx)(Je.a.Control,{type:"password",placeholder:"Enter Password",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(je.jsx)(Oe.a,{type:"submit",variant:"outline-warning",children:"Login"})]}),Object(je.jsx)(de.a,{className:"py-3",children:Object(je.jsxs)(be.a,{children:["New Customer ?"," ",Object(je.jsx)(et.Link,{style:{color:"#FF8802"},to:O?"/register?redirect=".concat(O):"/register",children:"Register"})]})})]})};var nt=function(e){var t=e.location,n=e.history,a=Object(r.useState)(""),c=Object(Le.a)(a,2),s=c[0],i=c[1],l=Object(r.useState)(""),j=Object(Le.a)(l,2),u=j[0],d=j[1],b=Object(r.useState)(""),O=Object(Le.a)(b,2),x=O[0],g=O[1],v=Object(r.useState)(""),_=Object(Le.a)(v,2),w=_[0],C=_[1],L=Object(r.useState)(""),k=Object(Le.a)(L,2),I=k[0],T=k[1],N=Object(o.b)(),R=t.search?t.search.split("=")[1]:"/",P=Object(o.c)((function(e){return e.userLogin})),A=P.error,U=P.loading,F=P.userInfo;return Object(r.useEffect)((function(){F&&n.push(R)}),[n,F,R]),Object(je.jsxs)(He,{children:[Object(je.jsx)("h3",{className:"mb-4",children:"Register"}),I&&Object(je.jsx)(ye,{variant:"danger",children:I}),A&&Object(je.jsx)(ye,{variant:"danger",children:A}),U&&Object(je.jsx)(ge,{}),Object(je.jsxs)(Je.a,{onSubmit:function(e){e.preventDefault(),x!==w?T("Password doesnt match"):N(function(e,t,n){return function(){var r=Object(h.a)(p.a.mark((function r(a){var c,s,i;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:y}),c={headers:{"Content-type":"application/json"}},r.next=5,m.a.post("/api/users/register",{name:e,email:t,password:n},c);case 5:s=r.sent,i=s.data,a({type:S,payload:i}),a({type:f,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),a({type:E,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(s,u,x))},children:[Object(je.jsxs)(Je.a.Group,{controlId:"name",children:[Object(je.jsx)(Je.a.Label,{children:"Name"}),Object(je.jsx)(Je.a.Control,{required:!0,type:"name",placeholder:"Enter Name",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(je.jsxs)(Je.a.Group,{controlId:"email",children:[Object(je.jsx)(Je.a.Label,{children:"Email"}),Object(je.jsx)(Je.a.Control,{required:!0,type:"email",placeholder:"Enter Email",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(je.jsxs)(Je.a.Group,{controlId:"password",children:[Object(je.jsx)(Je.a.Label,{children:"Password"}),Object(je.jsx)(Je.a.Control,{required:!0,type:"password",placeholder:"Enter Password",value:x,onChange:function(e){return g(e.target.value)}})]}),Object(je.jsxs)(Je.a.Group,{controlId:"passwordConfirm",children:[Object(je.jsx)(Je.a.Label,{children:"Confirm Password"}),Object(je.jsx)(Je.a.Control,{required:!0,type:"password",placeholder:"Confirm Password",value:w,onChange:function(e){return C(e.target.value)}})]}),Object(je.jsx)(Oe.a,{type:"submit",variant:"outline-warning",children:"Register"})]}),Object(je.jsx)(de.a,{className:"py-3",children:Object(je.jsxs)(be.a,{children:["Have an account ?"," ",Object(je.jsx)(et.Link,{style:{color:"#FF8802"},to:R?"/login?redirect=".concat(R):"/login",children:"Login"})]})})]})};var rt=function(e){var t=e.history,n=Object(r.useState)(""),a=Object(Le.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(""),l=Object(Le.a)(i,2),j=l[0],u=l[1],d=Object(r.useState)(""),b=Object(Le.a)(d,2),O=b[0],x=b[1],g=Object(r.useState)(""),v=Object(Le.a)(g,2),y=v[0],S=v[1],E=Object(r.useState)(""),L=Object(Le.a)(E,2),R=L[0],P=L[1],A=Object(o.b)(),U=Object(o.c)((function(e){return e.userDetails})),F=U.error,B=U.loading,D=U.user,M=Object(o.c)((function(e){return e.userLogin})).userInfo,G=Object(o.c)((function(e){return e.userUpdateProfile})).success;return Object(r.useEffect)((function(){var e;M?D&&D.name&&!G?(s(D.name),u(D.email)):(A({type:N}),A((e="profile",function(){var t=Object(h.a)(p.a.mark((function t(n,r){var a,c,s,i,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:_}),a=r(),c=a.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,m.a.get("/api/users/".concat(e),s);case 6:i=t.sent,o=i.data,n({type:w,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:C,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()))):t.push("/login")}),[A,t,M,D,G]),Object(je.jsx)(de.a,{className:"justify-content-sm-center",children:Object(je.jsxs)(be.a,{xs:12,md:6,children:[Object(je.jsx)("h2",{children:"User Profile"}),R&&Object(je.jsx)(ye,{variant:"danger",children:R}),F&&Object(je.jsx)(ye,{variant:"danger",children:F}),B&&Object(je.jsx)(ge,{}),Object(je.jsxs)(Je.a,{onSubmit:function(e){e.preventDefault(),O!==y?P("Password doesnt match"):(A(function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n,r){var a,c,s,i,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:k}),a=r(),c=a.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,m.a.put("/api/users/profile/update",e,s);case 6:i=t.sent,o=i.data,n({type:I,payload:o}),n({type:f,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),n({type:T,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,n){return t.apply(this,arguments)}}()}({id:D._id,name:c,email:j,password:O})),P(""))},children:[Object(je.jsxs)(Je.a.Group,{controlId:"name",children:[Object(je.jsx)(Je.a.Label,{children:"Name"}),Object(je.jsx)(Je.a.Control,{required:!0,type:"name",placeholder:"Enter Name",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(je.jsxs)(Je.a.Group,{controlId:"email",children:[Object(je.jsx)(Je.a.Label,{children:"Email"}),Object(je.jsx)(Je.a.Control,{required:!0,type:"email",placeholder:"Enter Email",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(je.jsxs)(Je.a.Group,{controlId:"password",children:[Object(je.jsx)(Je.a.Label,{children:"Password"}),Object(je.jsx)(Je.a.Control,{type:"password",placeholder:"Enter Password",value:O,onChange:function(e){return x(e.target.value)}})]}),Object(je.jsxs)(Je.a.Group,{controlId:"passwordConfirm",children:[Object(je.jsx)(Je.a.Label,{children:"Confirm Password"}),Object(je.jsx)(Je.a.Control,{type:"password",placeholder:"Confirm Password",value:y,onChange:function(e){return S(e.target.value)}})]}),Object(je.jsx)(Oe.a,{type:"submit",variant:"primary",children:"Update"})]})]})})};var at=function(e){var t=e.history,n=Object(o.b)(),c=Object(o.c)((function(e){return e.userLogin})).userInfo,s=Object(o.c)((function(e){return e.barberList})).barbers,i=Object(o.c)((function(e){return e.serviceList})).services,l=Object(o.c)((function(e){return e.myList})),j=l.loading,u=l.error,d=l.appointments;return Object(r.useEffect)((function(){c?(n(ee()),n(ie()),n(K())):t.push("/login")}),[n,t,c]),Object(je.jsx)(de.a,{className:"justify-content-sm-center",children:Object(je.jsxs)(be.a,{md:9,children:[Object(je.jsx)("h4",{children:"My Appointments"}),j?Object(je.jsx)(ge,{}):u?Object(je.jsx)(ye,{variant:"danger",children:u}):Object(je.jsxs)(Ge.a,{striped:!0,responsive:!0,className:"table-sm",children:[Object(je.jsx)("thead",{children:Object(je.jsxs)("tr",{children:[Object(je.jsx)("th",{children:"Date"}),Object(je.jsx)("th",{children:"Time"}),Object(je.jsx)("th",{children:"Barber"}),Object(je.jsx)("th",{children:"Service"}),Object(je.jsx)("th",{children:"Cost"})]})}),Object(je.jsx)("tbody",{children:d.map((function(e){return Object(je.jsxs)("tr",{children:[Object(je.jsxs)(a.a.Fragment,{children:[Object(je.jsx)("td",{children:e.date.slice(0,10)}),Object(je.jsx)("td",{children:e.date.slice(11,-9)})]}),s.map((function(t){return t._id===e.barber?Object(je.jsx)("td",{children:t.nickname}):null})),i.map((function(t){return t._id===e.service?Object(je.jsxs)(a.a.Fragment,{children:[Object(je.jsx)("td",{children:t.serviceName}),Object(je.jsxs)("td",{children:[t.price," \u20ac"]})]}):null}))]})}))})]})]})})};var ct=function(e){var t=e.history,n=Object(o.b)(),c=Object(o.c)((function(e){return e.userLogin})).userInfo,s=Object(o.c)((function(e){return e.serviceList})).services,i=Object(o.c)((function(e){return e.userList})).users,l=Object(o.c)((function(e){return e.myList})),j=l.loading,u=l.error,d=l.appointments;return Object(r.useEffect)((function(){c?(n(function(){var e=Object(h.a)(p.a.mark((function e(t,n){var r,a,c,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:R}),r=n(),a=r.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.next=6,m.a.get("/api/users",c);case 6:s=e.sent,i=s.data,t({type:P,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:A,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),n(ie()),n(K())):t.push("/login")}),[n,t,c]),Object(je.jsx)(de.a,{className:"justify-content-sm-center",children:Object(je.jsxs)(be.a,{md:9,children:[Object(je.jsx)("h4",{children:"Barber Appointments"}),j?Object(je.jsx)(ge,{}):u?Object(je.jsx)(ye,{variant:"danger",children:u}):Object(je.jsxs)(Ge.a,{striped:!0,responsive:!0,className:"table-sm",children:[Object(je.jsx)("thead",{children:Object(je.jsxs)("tr",{children:[Object(je.jsx)("th",{children:"Date"}),Object(je.jsx)("th",{children:"Time"}),Object(je.jsx)("th",{children:"Client"}),Object(je.jsx)("th",{children:"Service"}),Object(je.jsx)("th",{children:"Cost"})]})}),Object(je.jsx)("tbody",{children:d.map((function(e){return Object(je.jsxs)("tr",{children:[Object(je.jsxs)(a.a.Fragment,{children:[Object(je.jsx)("td",{children:e.date.slice(0,10)}),Object(je.jsx)("td",{children:e.date.slice(11,-9)})]}),i.map((function(t){return t._id===e.user?Object(je.jsx)("td",{children:t.name}):null})),s.map((function(t){return t._id===e.service?Object(je.jsxs)(a.a.Fragment,{children:[Object(je.jsx)("td",{children:t.serviceName}),Object(je.jsx)("td",{children:t.price})]}):null}))]})}))})]})]})})};var st=function(){return Object(je.jsxs)(et.HashRouter,{children:[Object(je.jsx)(ue,{}),Object(je.jsx)("main",{children:Object(je.jsxs)(i.a,{className:"text-center py-4",children:[Object(je.jsx)(le.d,{path:["/home","/"],component:$e,exact:!0}),Object(je.jsx)(le.d,{path:"/login",component:tt}),Object(je.jsx)(le.d,{path:"/register",component:nt}),Object(je.jsx)(le.d,{path:"/profile",component:rt}),Object(je.jsx)(le.d,{path:"/services",component:we,exact:!0}),Object(je.jsx)(le.d,{path:"/barbers",component:Se,exact:!0}),Object(je.jsx)(le.d,{path:"/booking",component:Qe}),Object(je.jsx)(le.d,{path:"/myappointments",component:at}),Object(je.jsx)(le.d,{path:"/barberappointments",component:ct}),Object(je.jsx)(le.d,{path:"/contact",component:Xe})]})}),Object(je.jsx)(pe,{})]})},it=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,264)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},ot=n(38),lt=n(127),jt=n(128),ut=Object(ot.combineReducers)({appointmentsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{appointments:[],user_appointment:"",is_paid:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!0,appointments:[]});case F:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,appointments:t.payload});case B:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,error:t.payload});case D:return Object(Ce.a)(Object(Ce.a)({},e),{},{user_appointment:t.user_date});case G:return{user_appointment:""};case M:return Object(Ce.a)(Object(Ce.a)({},e),{},{is_paid:t.is_paid});default:return e}},serviceList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{services:[],user_service:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!0,services:[]});case re:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,services:t.payload});case ae:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,error:t.payload});case ce:return Object(Ce.a)(Object(Ce.a)({},e),{},{user_service:t.user_service});case se:return Object(Ce.a)(Object(Ce.a)({},e),{},{user_service:{}});default:return e}},barberList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{barbers:[],user_barber:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!0,barbers:[]});case H:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,barbers:t.payload});case X:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,error:t.payload});case Z:return Object(Ce.a)(Object(Ce.a)({},e),{},{user_barber:t.user_barber});case $:return Object(Ce.a)(Object(Ce.a)({},e),{},{user_barber:{}});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0};case f:return{loading:!1,userInfo:t.payload};case g:return{loading:!1,error:t.payload};case v:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case S:return{loading:!1,userInfo:t.payload};case E:return{loading:!1,error:t.payload};case v:return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!0});case w:return{loading:!1,user:t.payload};case C:return{loading:!1,error:t.payload};case L:return{user:{}};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{loading:!0};case I:return{loading:!1,success:!0,userInfo:t.payload};case T:return{loading:!1,error:t.payload};case N:return{};default:return e}},myList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{appointments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return{loading:!0};case W:return{loading:!1,success:!0,appointments:t.payload};case Q:return{loading:!1,error:t.payload};case Y:return{appointments:[]};default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!0,users:[]});case P:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,users:t.payload});case A:return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,error:t.payload});default:return e}}}),dt={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},bt=[lt.a],pt=Object(ot.createStore)(ut,dt,Object(jt.composeWithDevTools)(ot.applyMiddleware.apply(void 0,bt)));s.a.render(Object(je.jsx)(o.a,{store:pt,children:Object(je.jsx)(st,{})}),document.getElementById("root")),it()}},[[246,1,2]]]);
//# sourceMappingURL=main.7a5fabe4.chunk.js.map