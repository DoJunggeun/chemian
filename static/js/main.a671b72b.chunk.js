(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(43)},27:function(e,t,a){},31:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),r=a.n(l),i=(a(27),a(2)),c=a.n(i),u=a(5),s=a(4),m=(a(31),a(8)),h=a(16),p=a(17),v=a(18),d=a(19),E=a(21),f=a(6),g=a(7);a(36),a(38);g.initializeApp({apiKey:"AIzaSyBj5wBh_lPmUtKKaKDxc4KO0u1-2D450pA",authDomain:"chemian-63230.firebaseapp.com",databaseURL:"https://chemian-63230.firebaseio.com",projectId:"chemian-63230",storageBucket:"chemian-63230.appspot.com",messagingSenderId:"828302993437",appId:"1:828302993437:web:cd28315326f84b7f47fef4"});var b=g,w=g.auth(),y=g.firestore(),C=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(v.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y.collection(w.currentUser.uid).add({info:a.state,createdTime:Date.now(),createdName:w.currentUser.displayName});case 3:a.setState({sectionNumber:"1",sectionName:"\uc6b0\ub9ac \uc0dd\ud65c \uc18d\uc758 \ud654\ud559",examType:"\ud3c9\uac00\uc6d0",examYear:"2020",problemPage:"1",problemScore:"2",reason:"\uc624\uac1c\ub150",description:"",solvedMonth:"",solvedWeek:"1\uc8fc\ucc28"});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={sectionNumber:"1",sectionName:"\uc6b0\ub9ac \uc0dd\ud65c \uc18d\uc758 \ud654\ud559",examType:"\ud3c9\uac00\uc6d0",examYear:"2020",problemPage:"1",problemScore:"2",reason:"\uc624\uac1c\ub150",description:"",solvedMonth:"",solvedWeek:"1\uc8fc\ucc28"},a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a.onSubmit=a.onSubmit.bind(Object(f.a)(Object(f.a)(a))),a}var a;return Object(E.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){if(""==this.state.solvedMonth){var e=(new Date).getMonth()+1;this.setState({solvedMonth:e+"\uc6d4"})}}},{key:"componentDidUpdate",value:function(){if(""==this.state.solvedMonth){var e=(new Date).getMonth()+1;this.setState({solvedMonth:e+"\uc6d4"})}}},{key:"resetData",value:(a=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.alert("\uc900\ube44 \uc911");case 1:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"chapter",value:function(e){return"1"===e?o.a.createElement("select",{name:"sectionName",value:this.state.value,onChange:this.handleChange},o.a.createElement("option",{value:"\uc6b0\ub9ac \uc0dd\ud65c \uc18d\uc758 \ud654\ud559"},"\uc6b0\ub9ac \uc0dd\ud65c \uc18d\uc758 \ud654\ud559"),o.a.createElement("option",{value:"\ud654\ud559\uc2dd\ub7c9\uacfc \ubab0"},"\ud654\ud559\uc2dd\ub7c9\uacfc \ubab0"),o.a.createElement("option",{value:"\ud654\ud559\ubc18\uc751\uc2dd"},"\ud654\ud559\ubc18\uc751\uc2dd"),o.a.createElement("option",{value:"\ub18d\ub3c4"},"\ub18d\ub3c4")):"2"===e?o.a.createElement("select",{name:"sectionName",value:this.state.value,onChange:this.handleChange},o.a.createElement("option",{value:"\uc6d0\uc790\uc758 \uad6c\uc870"},"\uc6d0\uc790\uc758 \uad6c\uc870"),o.a.createElement("option",{value:"\uc6d0\uc790\ubaa8\ud615"},"\uc6d0\uc790\ubaa8\ud615"),o.a.createElement("option",{value:"\uc804\uc790\ubc30\uce58\uc640 \uc591\uc790\uc218"},"\uc804\uc790\ubc30\uce58\uc640 \uc591\uc790\uc218"),o.a.createElement("option",{value:"\uc8fc\uae30\uc801\uc131\uc9c8"},"\uc8fc\uae30\uc801\uc131\uc9c8")):"3"===e?o.a.createElement("select",{name:"sectionName",value:this.state.value,onChange:this.handleChange},o.a.createElement("option",{value:"\uc774\uc628\uacb0\ud569"},"\uc774\uc628\uacb0\ud569"),o.a.createElement("option",{value:"\uacf5\uc720\uacb0\ud569\uacfc \uadf9\uc131"},"\uacf5\uc720\uacb0\ud569\uacfc \uadf9\uc131"),o.a.createElement("option",{value:"\ubd84\uc790\uad6c\uc870\uc640 \uc131\uc9c8"},"\ubd84\uc790\uad6c\uc870\uc640 \uc131\uc9c8")):"4"===e?o.a.createElement("select",{name:"sectionName",value:this.state.value,onChange:this.handleChange},o.a.createElement("option",{value:"\ub3d9\uc801\ud3c9\ud615"},"\ub3d9\uc801\ud3c9\ud615"),o.a.createElement("option",{value:"\uc911\ud654\ubc18\uc751"},"\uc911\ud654\ubc18\uc751"),o.a.createElement("option",{value:"\uc0b0\ud654\ud658\uc6d0"},"\uc0b0\ud654\ud658\uc6d0"),o.a.createElement("option",{value:"\ubc18\uc751\uc5f4"},"\ubc18\uc751\uc5f4")):void 0}},{key:"render",value:function(){var e=this;return console.log(this.state),o.a.createElement("div",{className:"inputs"},o.a.createElement("h1",{style:{alignSelf:"center"}},"\uc624\ub2f5 \uc785\ub825"),o.a.createElement("button",{onClick:function(){e.resetData()},style:{alignSelf:"flex-end"}},"\ucd08\uae30\ud654"),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("label",null,"\ud47c \uc2dc\uae30:",o.a.createElement("select",{name:"solvedMonth",value:this.state.solvedMonth,onChange:this.handleChange},o.a.createElement("option",{value:"1\uc6d4"},"1\uc6d4"),o.a.createElement("option",{value:"2\uc6d4"},"2\uc6d4"),o.a.createElement("option",{value:"3\uc6d4"},"3\uc6d4"),o.a.createElement("option",{value:"4\uc6d4"},"4\uc6d4"),o.a.createElement("option",{value:"5\uc6d4"},"5\uc6d4"),o.a.createElement("option",{value:"6\uc6d4"},"6\uc6d4"),o.a.createElement("option",{value:"7\uc6d4"},"7\uc6d4"),o.a.createElement("option",{value:"8\uc6d4"},"8\uc6d4"),o.a.createElement("option",{value:"9\uc6d4"},"9\uc6d4"),o.a.createElement("option",{value:"10\uc6d4"},"10\uc6d4"),o.a.createElement("option",{value:"11\uc6d4"},"11\uc6d4"),o.a.createElement("option",{value:"12\uc6d4"},"12\uc6d4")),o.a.createElement("select",{name:"solvedWeek",value:this.state.solvedWeek,onChange:this.handleChange},o.a.createElement("option",{value:"1\uc8fc\ucc28"},"1\uc8fc\ucc28"),o.a.createElement("option",{value:"2\uc8fc\ucc28"},"2\uc8fc\ucc28"),o.a.createElement("option",{value:"3\uc8fc\ucc28"},"3\uc8fc\ucc28"),o.a.createElement("option",{value:"4\uc8fc\ucc28"},"4\uc8fc\ucc28"),o.a.createElement("option",{value:"5\uc8fc\ucc28"},"5\uc8fc\ucc28"))),o.a.createElement("label",null,"\ub2e8\uc6d0:",o.a.createElement("select",{name:"sectionNumber",value:this.state.sectionNumber,onChange:this.handleChange},o.a.createElement("option",{value:"1"},"1\ub2e8\uc6d0"),o.a.createElement("option",{value:"2"},"2\ub2e8\uc6d0"),o.a.createElement("option",{value:"3"},"3\ub2e8\uc6d0"),o.a.createElement("option",{value:"4"},"4\ub2e8\uc6d0")),this.chapter(this.state.sectionNumber)),o.a.createElement("label",null,"\ubaa8\uc758\uace0\uc0ac \ubd84\ub958:",o.a.createElement("select",{name:"examType",value:this.state.examType,onChange:this.handleChange},o.a.createElement("option",{value:"\ud3c9\uac00\uc6d0"},"\ud3c9\uac00\uc6d0"),o.a.createElement("option",{value:"\uad50\uc721\uccad"},"\uad50\uc721\uccad"),o.a.createElement("option",{value:"\uc0ac\uc124"},"\uc0ac\uc124"),o.a.createElement("option",{value:"\uc218\ub2a5\ud2b9\uac15"},"\uc218\ub2a5\ud2b9\uac15"))),o.a.createElement("label",null,"\ucd9c\uc81c\ub144\ub3c4:",o.a.createElement("select",{name:"examYear",value:this.state.examYear,onChange:this.handleChange},o.a.createElement("option",{value:"2020"},"2020"),o.a.createElement("option",{value:"2019"},"2019"),o.a.createElement("option",{value:"2018"},"2018"),o.a.createElement("option",{value:"2017"},"2017"),o.a.createElement("option",{value:"2016"},"2016 \uc774\uc804"))),o.a.createElement("label",null,"\ud398\uc774\uc9c0:",o.a.createElement("select",{name:"problemPage",value:this.state.problemPage,onChange:this.handleChange},o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"))),o.a.createElement("label",null,"\ubc30\uc810:",o.a.createElement("select",{name:"problemScore",value:this.state.problemScore,onChange:this.handleChange},o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"))),o.a.createElement("label",null,"\ud2c0\ub9b0 \uc774\uc720:",o.a.createElement("select",{name:"reason",value:this.state.reason,onChange:this.handleChange},o.a.createElement("option",{value:"\uc624\uac1c\ub150"},"\uc624\uac1c\ub150"),o.a.createElement("option",{value:"\uc2dc\uac04\ubd80\uc871"},"\uc2dc\uac04\ubd80\uc871"),o.a.createElement("option",{value:"\ud310\ub2e8\uc624\ub958"},"\ud310\ub2e8\uc624\ub958"),o.a.createElement("option",{value:"\uacc4\uc0b0\uc2e4\uc218"},"\uacc4\uc0b0\uc2e4\uc218"),o.a.createElement("option",{value:"\uae30\ud0c0"},"\uae30\ud0c0"))),o.a.createElement("label",null,"\uc138\ubd80 \ub0b4\uc6a9:",o.a.createElement("textarea",{name:"description",value:this.state.description,onChange:this.handleChange,placeholder:"\uc138\ubd80 \ub0b4\uc6a9",style:{width:260,height:60}})),o.a.createElement("input",{type:"submit",value:"\ub4f1\ub85d",style:{width:"100%",height:30}})))}}]),t}(n.Component),k=a(20);var j=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=(t[0],t[1],Object(n.useState)([])),l=Object(s.a)(a,2),r=l[0],i=l[1],m=Object(n.useState)(!1),h=Object(s.a)(m,2),p=h[0],v=h[1];Object(n.useEffect)(function(){y.collection(w.currentUser.uid).onSnapshot(function(e){var t=e.docs.map(function(e){return Object(k.a)({id:e.id},e.data())});i(t)})},[]);var d=(E=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c??")){e.next=4;break}return e.next=4,y.doc("".concat(w.currentUser.uid,"/").concat(t.id)).delete();case 4:case"end":return e.stop()}},e,this)})),function(e){return E.apply(this,arguments)});var E;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"button",value:"\ud544\ud130",onClick:function(){v(!p),window.alert("\uc900\ube44 \uc911")},style:{backgroundColor:p?"lightgray":"white"}}),o.a.createElement("div",null,r.map(function(e){return o.a.createElement("div",{key:e.id,style:{position:"relative",border:"1px solid gray",marginLeft:"auto",marginRight:"auto",marginTop:10,padding:3,overflowWrap:"break-word",textAlign:"left"}},e.info.sectionNumber+"\ub2e8\uc6d0 "+e.info.sectionName,"("+e.info.examYear+"\ub144 "+e.info.examType+" \uae30\ucd9c)",o.a.createElement("button",{onClick:function(){return d(e)},style:{right:0,top:0,position:"absolute"}},"\uc0ad\uc81c"),o.a.createElement("br",null),e.info.problemPage+"\ud398\uc774\uc9c0 ("+e.info.problemScore+"\uc810)",o.a.createElement("br",null),"\ud47c \uc2dc\uae30: "+e.info.solvedMonth+e.info.solvedWeek+"\uc8fc\ucc28",o.a.createElement("br",null),"\uc624\ub2f5 \uc0ac\uc720 : "+e.info.reason,o.a.createElement("br",null),"\uc138\ubd80 \ub0b4\uc6a9 : "+e.info.description)})))};var O=function(){return o.a.createElement("div",null,"Coming Soon \u3160\u3160")};var S=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),m=i[0],h=i[1],p=Object(n.useState)(!0),v=Object(s.a)(p,2),d=v[0],E=v[1],f=Object(n.useState)(null),g=Object(s.a)(f,2),y=(g[0],g[1]);Object(n.useEffect)(function(){w.onAuthStateChanged(function(e){e?(h(!0),y(e)):h(!1),l(!0)})},[]);var k=(N=Object(u.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.target.name,a=new b.auth.GoogleAuthProvider,e.next=4,w.signInWithRedirect(a);case 4:e.sent;case 5:case"end":return e.stop()}},e,this)})),function(e){return N.apply(this,arguments)}),S=(x=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.signOut();case 2:case"end":return e.stop()}},e,this)})),function(){return x.apply(this,arguments)});var x;var N;return o.a.createElement(o.a.Fragment,null,a?o.a.createElement(o.a.Fragment,null,m||o.a.createElement("button",{onClick:k,style:{margin:"auto"}},"Google Login"),!m||o.a.createElement("button",{onClick:S,style:{margin:"auto"}},"Log out"),m&&o.a.createElement("div",{className:"App"},o.a.createElement(C,null),o.a.createElement("input",{type:"button",value:"\uc624\ub2f5\ubcf4\uae30",style:{margin:5,width:100,height:40,fontSize:"1rem"},onClick:function(){return E(!0)}}),o.a.createElement("input",{type:"button",value:"\ud1b5\uacc4\ubcf4\uae30",style:{margin:5,width:100,height:40,fontSize:"1rem"},onClick:function(){return E(!1)}}),o.a.createElement("br",null),d&&o.a.createElement(j,null),d||o.a.createElement(O,null))):o.a.createElement("div",null,"Loading..."))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/chemian",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/chemian","/service-worker.js");x?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):N(t,e)})}}()}},[[22,2,1]]]);
//# sourceMappingURL=main.a671b72b.chunk.js.map