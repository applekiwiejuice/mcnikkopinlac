(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],{16:function(e,a,t){e.exports=t(25)},21:function(e,a,t){},22:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),s=(t(21),t(4)),o=t(5),i=t(7),m=t(6),u=t(13),d=t.n(u),p=(t(22),t(14)),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.linkedin,a=this.props.data.github,t=this.props.data.name,n=this.props.data.description;return r.a.createElement("header",{id:"home"},r.a.createElement(p.a,{num:8,type:"circle",bg:!0}),r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("img",{style:{height:"100px",width:"100px",borderRadius:"50px"},src:"./images/mcndev.png",alt:"icon"}),r.a.createElement("h1",{className:"responsive-headline"},t),r.a.createElement("h3",null,n,"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},r.a.createElement("a",{href:e,className:"button btn linkedin-btn",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin"}),"LinkedIn"),r.a.createElement("a",{href:a,className:"button btn github-btn",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github"}),"Github")))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"\xa9 Copyright 2021 Mcnikko Pinlac"),r.a.createElement("li",null,r.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/",target:"_blank",rel:"noopener noreferrer"},"Styleshout"))),r.a.createElement("div",null,"Icons made by"," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik",target:"_blank",rel:"noopener noreferrer"},"Freepik")," ","from"," ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon",target:"_blank",rel:"noopener noreferrer"},"www.flaticon.com"))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,l=this.props.data.address.city,c=this.props.data.address.state,s=this.props.data.address.zip,o=this.props.data.phone,i=this.props.data.email;this.props.data.resumedownload}return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:a,alt:"Mcnikko Pinlac Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,t),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e),r.a.createElement("br",null),r.a.createElement("span",null,n,r.a.createElement("br",null),l," ",c," ",s),r.a.createElement("br",null),r.a.createElement("span",null,o),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:".concat(i)},r.a.createElement("span",null,i)))),r.a.createElement("div",{className:"columns download"})))))}}]),t}(n.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",a=0;a<6;a++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)),r.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return r.a.createElement("div",{key:e.company},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"info"},e.title,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("p",null,e.description))})),n=this.props.data.techicons.map((function(e){var a="./techicons/"+e.image;return r.a.createElement("img",{key:e.image,style:{height:"80px",width:"80px",margin:"10px"},src:a,alt:"icon"})}));return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},a)))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},t)),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Soft Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,"Personnel Management, Team Leadership, Technical Support, Customer Support, Sales and Marketing, Office and Records Management")),r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Technical Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,e),r.a.createElement("div",{className:"bars"},n))))}}]),t}(n.Component),g=t(15),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.city,n=this.props.data.address.state,l=this.props.data.address.zip,c=this.props.data.phone,s=(this.props.data.email,this.props.data.contactmessage);return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Get In Touch."))),r.a.createElement("div",{className:"ten columns"},r.a.createElement("h4",null,s))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"eight columns"},r.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLScTkjkSdQWw4XQrA_zZNnimAIyZyS1uJftTAfkpxrHpKOp-xg/viewform?embedded=true",width:"380",height:"900",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026")),r.a.createElement("aside",{className:"four columns footer-widgets"},r.a.createElement("div",{className:"widget widget_contact"},r.a.createElement("h4",null,e,r.a.createElement("br",null),a," ",r.a.createElement("br",null),t," ",n," ",l,r.a.createElement("br",null),r.a.createElement("span",null,c))),r.a.createElement("div",{className:"widget widget_tweets"},r.a.createElement("h4",{className:"widget-title"},"Latest Tweets"),r.a.createElement("div",{className:"centerContent"},r.a.createElement("div",{className:"selfCenter standardWidth"},r.a.createElement(g.a,{sourceType:"profile",screenName:"McnikkoP",theme:"dark",options:{height:400}})))))))}}]),t}(n.Component),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return r.a.createElement("div",{key:e.title,className:"columns portfolio-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:e.url,title:e.title,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:e.title,src:a}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.title),r.a.createElement("p",null,e.category))))))}));return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Check Out Some of My Works."),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(n.Component),w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},n}return Object(o.a)(t,[{key:"getResumeData",value:function(){d.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{data:this.state.resumeData.main}),r.a.createElement(f,{data:this.state.resumeData.main}),r.a.createElement(v,{data:this.state.resumeData.resume}),r.a.createElement(N,{data:this.state.resumeData.portfolio}),r.a.createElement(b,{data:this.state.resumeData.main}),r.a.createElement(E,{data:this.state.resumeData.main}))}}]),t}(n.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/mcnikkopinlac",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/mcnikkopinlac","/service-worker.js");k?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.7052655e.chunk.js.map