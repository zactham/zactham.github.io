(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,a,t){e.exports=t(30)},16:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){},21:function(e,a,t){},27:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),o=(t(15),t(16),t(17),t(18),t(19),t(20),t(21),t(22),t(23),t(1)),s=t.n(o);s.a.easing.jswing=s.a.easing.swing,s.a.extend(s.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,r){return s.a.easing[s.a.easing.def](e,a,t,n,r)},easeInQuad:function(e,a,t,n,r){return n*(a/=r)*a+t},easeOutQuad:function(e,a,t,n,r){return-n*(a/=r)*(a-2)+t},easeInOutQuad:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,r){return n*(a/=r)*a*a+t},easeOutCubic:function(e,a,t,n,r){return n*((a=a/r-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,r){return n*(a/=r)*a*a*a+t},easeOutQuart:function(e,a,t,n,r){return-n*((a=a/r-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,r){return n*(a/=r)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,r){return n*((a=a/r-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,r){return-n*Math.cos(a/r*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,r){return n*Math.sin(a/r*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,r){return-n/2*(Math.cos(Math.PI*a/r)-1)+t},easeInExpo:function(e,a,t,n,r){return 0==a?t:n*Math.pow(2,10*(a/r-1))+t},easeOutExpo:function(e,a,t,n,r){return a==r?t+n:n*(1-Math.pow(2,-10*a/r))+t},easeInOutExpo:function(e,a,t,n,r){return 0==a?t:a==r?t+n:(a/=r/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,r){return-n*(Math.sqrt(1-(a/=r)*a)-1)+t},easeOutCirc:function(e,a,t,n,r){return n*Math.sqrt(1-(a=a/r-1)*a)+t},easeInOutCirc:function(e,a,t,n,r){return(a/=r/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,r){var l=1.70158,c=0,o=n;if(0==a)return t;if(1==(a/=r))return t+n;if(c||(c=.3*r),o<Math.abs(n)){o=n;l=c/4}else l=c/(2*Math.PI)*Math.asin(n/o);return-o*Math.pow(2,10*(a-=1))*Math.sin((a*r-l)*(2*Math.PI)/c)+t},easeOutElastic:function(e,a,t,n,r){var l=1.70158,c=0,o=n;if(0==a)return t;if(1==(a/=r))return t+n;if(c||(c=.3*r),o<Math.abs(n)){o=n;l=c/4}else l=c/(2*Math.PI)*Math.asin(n/o);return o*Math.pow(2,-10*a)*Math.sin((a*r-l)*(2*Math.PI)/c)+n+t},easeInOutElastic:function(e,a,t,n,r){var l=1.70158,c=0,o=n;if(0==a)return t;if(2==(a/=r/2))return t+n;if(c||(c=r*(.3*1.5)),o<Math.abs(n)){o=n;l=c/4}else l=c/(2*Math.PI)*Math.asin(n/o);return a<1?o*Math.pow(2,10*(a-=1))*Math.sin((a*r-l)*(2*Math.PI)/c)*-.5+t:o*Math.pow(2,-10*(a-=1))*Math.sin((a*r-l)*(2*Math.PI)/c)*.5+n+t},easeInBack:function(e,a,t,n,r,l){return void 0==l&&(l=1.70158),n*(a/=r)*a*((l+1)*a-l)+t},easeOutBack:function(e,a,t,n,r,l){return void 0==l&&(l=1.70158),n*((a=a/r-1)*a*((l+1)*a+l)+1)+t},easeInOutBack:function(e,a,t,n,r,l){return void 0==l&&(l=1.70158),(a/=r/2)<1?n/2*(a*a*((1+(l*=1.525))*a-l))+t:n/2*((a-=2)*a*((1+(l*=1.525))*a+l)+2)+t},easeInBounce:function(e,a,t,n,r){return n-s.a.easing.easeOutBounce(e,r-a,0,n,r)+t},easeOutBounce:function(e,a,t,n,r){return(a/=r)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,r){return a<r/2?.5*s.a.easing.easeInBounce(e,2*a,0,n,r)+t:.5*s.a.easing.easeOutBounce(e,2*a-r,0,n,r)+.5*n+t}});t(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(2),m=t(3),u=t(5),d=t(4),p=t.p+"static/media/male1.7b9bb87b.png",h=t.p+"static/media/programmer.a1772f78.png",f=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={logo:p},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=s()("nav").outerHeight();s()(".navbar-toggler").on("click",(function(){s()("#mainNav").hasClass("navbar-reduce")||s()("#mainNav").addClass("navbar-reduce")})),s()("body").scrollspy({target:"#mainNav",offset:a}),s()(".js-scroll").on("click",(function(){s()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:h})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:p}))})),s()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=s()(this.hash);if((e=e.length?e:s()("[name="+this.hash.slice(1)+"]")).length)return s()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}})),s()(".js-scroll").on("click",(function(){s()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand js-scroll",href:"#page-top"},r.a.createElement("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"100px"}})),r.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll",href:"#work"},"Work")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},"Contact"))))))}}]),t}(r.a.Component),v=(t(27),t(8)),g=t.n(v),E=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"intro route bg-image background"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{id:"stars2"}),r.a.createElement("div",{id:"stars3"}),r.a.createElement("div",{className:"intro-content display-table"},r.a.createElement("div",{className:"table-cell"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am Zac Thamer"),r.a.createElement("p",{className:"intro-subtitle"},r.a.createElement("span",{className:"text-slider-items"}),r.a.createElement("strong",{className:"text-slider"},r.a.createElement(g.a,{strings:["Full Stack Developer","Web Developer","Games Programmer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),r.a.createElement("p",{className:"pt-3"},r.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button"},"View My Work"))))))}}]),t}(r.a.Component),b=t.p+"static/media/Resume.aa36e083.png",N=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={resume:b,about_me:[{id:"first-p-about",content:"Hi!  I am a full stack web developer with a background in the the video game and web development industries. I graduated from the University of Maryland in May 2022 with a Bachelor's Degree in Computer Science."},{id:"second-p-about",content:"I prefer to work with React, Node, and Express, but I am always open to learning new technologies. I enjoy working on projects that are challenging and allow me to learn new skills with a strong team.  I am super flexible and outgoing, and I love to work with others.  I am always looking for new opportunities to learn and grow."},{id:"third-p-about",content:"In my freetime I enjoy playing video games, coding, hiking, playing tennis, building businesses, and spending time with my family and friends.  If you would like to get in touch with me, please feel free to reach out to me on LinkedIn or send me an email."},{}]},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"box-shadow-full"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"about-me pt-4 pt-md-0"},r.a.createElement("div",{className:"title-box-2"},r.a.createElement("h5",{className:"title-left"},"About Me")),this.state.about_me.map((function(e){return r.a.createElement("p",{className:"lead",key:e.id},e.content)})))))))))}}]),t}(r.a.Component),w=t(9),y=(t(28),function(e){var a=e.slides,t=r.a.useState(0),n=Object(w.a)(t,2),l=n[0],c=n[1],o={width:"100%",height:"100%",borderRadius:"10px",backgroundPosition:"center",backgroundSize:"cover",backgroundImage:"url(".concat(a[l].url,")")},s={margin:"0 3px",cursor:"pointer",fontSize:"20px",color:"#0078ff"};return r.a.createElement("div",{style:{height:"100%",position:"relative"}},r.a.createElement("div",{style:{position:"absolute",top:"50%",transform:"translate(0, -50%)",left:"32px",fontSize:"45px",color:"#fff",zIndex:"1",cursor:"pointer"},onClick:function(){var e=0===l?a.length-1:l-1;c(e)}},"\u2190"),r.a.createElement("div",{style:{position:"absolute",top:"50%",transform:"translate(0, -50%)",right:"32px",fontSize:"45px",color:"#fff",zIndex:"1",cursor:"pointer"},onClick:function(){var e=l===a.length-1;c(e?0:l+1)}},"\u2192"),r.a.createElement("div",{style:o}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.map((function(e,a){return r.a.createElement("div",{key:a,style:s,onClick:function(){return function(e){c(e)}(a)}},"\u25cf")}))))}),k=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"work",className:"portfolio-mf sect-pt4 route"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"box-shadow-full"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"about-me pt-4 pt-md-0"},r.a.createElement("div",{className:"title-box-2"},r.a.createElement("a",{href:"https://github.com/zactham/AuroraProxyDashboardNoKeys",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("h5",{className:"title-left"},"Aurora Proxies"))),r.a.createElement("div",{style:{width:"100%",height:"480px",margin:"0 auto"}},r.a.createElement(y,{slides:[{url:"https://i.imgur.com/jDw7fx0.png",title:"Image 1"},{url:"https://i.imgur.com/UF6Jg3Q.png",title:"Image 2"},{url:"https://i.imgur.com/f4K4f7F.png",title:"Image 3"},{url:"https://i.imgur.com/YBjQka7.png",title:"Image 4"},{url:"https://i.imgur.com/QkhE1BK.png",title:"Image 5"},{url:"https://i.imgur.com/8WYDU2o.jpg",title:"Image 6"}]})),r.a.createElement("div",{className:"work-content"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"w-title"},"Founded a business specializing in the distribution of private residential and data center proxies.  Worked in a fullstack MERN role developing a dashboard & checkout site with API calls to Stripe, Discord, MongoDB, and Oxylabs"),r.a.createElement("div",{className:"w-more"},r.a.createElement("span",{className:"w-ctegory"},"ReactJS HTML Node Express")," ")))))),r.a.createElement("div",{className:"box-shadow-full"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"about-me pt-4 pt-md-0"},r.a.createElement("div",{className:"title-box-2"},r.a.createElement("a",{href:"https://twitter.com/search?q=@osmosis_app&src=typed_query",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("h5",{className:"title-left"},"Osmosis"))),r.a.createElement("div",{style:{width:"30%",height:"580px",margin:"0 auto"}},r.a.createElement(y,{slides:[{url:"https://i.imgur.com/qQHLVRi.png",title:"Image 1"},{url:"https://i.imgur.com/14eUgQV.jpg",title:"Image 2"},{url:"https://i.imgur.com/T2AWZr9.jpg",title:"Image 3"},{url:"https://i.imgur.com/tkIDYWL.png",title:"Image 4"},{url:"https://i.imgur.com/LOuPEVi.png",title:"Image 5"}]})),r.a.createElement("div",{className:"work-content"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"w-title"},"Helped create an iOS paid application ($49.99) developed to purchase in-demand clothing from a limited release fashion store at high speeds.  Worked in a front end role developing customizable profiles, item keywords, live clock, google login for captcha bypass, and multiple checkout methods"),r.a.createElement("div",{className:"w-more"},r.a.createElement("span",{className:"w-ctegory"},"XCode Swift JavaScript")," ")))))),r.a.createElement("div",{className:"box-shadow-full"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"about-me pt-4 pt-md-0"},r.a.createElement("div",{className:"title-box-2"},r.a.createElement("a",{href:"https://appadvice.com/app/resell-calculator/1415194685",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("h5",{className:"title-left"},"Resell Calculator"))),r.a.createElement("div",{style:{width:"40%",height:"680px",margin:"0 auto"}},r.a.createElement(y,{slides:[{url:"https://i.imgur.com/T1voMVJ.jpg",title:"Image 1"}]})),r.a.createElement("div",{className:"work-content"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"w-title"},"Free IOS Application for investors that buy and sell products on various marketplaces"),r.a.createElement("div",{className:"w-more"},r.a.createElement("span",{className:"w-ctegory"},"XCode Swift ported to React Native JS")," ")))))),r.a.createElement("div",{className:"box-shadow-full"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"about-me pt-4 pt-md-0"},r.a.createElement("div",{className:"title-box-2"},r.a.createElement("a",{href:"https://appadvice.com/app/banana-market/1412538188",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("h5",{className:"title-left"},"Banana Market"))),r.a.createElement("div",{style:{width:"30%",height:"580px",margin:"0 auto"}},r.a.createElement(y,{slides:[{url:"https://i.imgur.com/IGqxOyz.jpg",title:"Image 1"},{url:"https://i.imgur.com/OigBYTF.png",title:"Image 2"},{url:"https://i.imgur.com/si9Ke8G.jpg",title:"Image 3"},{url:"https://i.imgur.com/MI08T0A.png",title:"Image 4"},{url:"https://i.imgur.com/MmnFSab.jpg",title:"Image 5"}]})),r.a.createElement("div",{className:"work-content"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"w-title"},"Free IOS Application created to teach the basic concepts of investing thru a fun Stock market gaming simulator.  The ability to share scores directly to Twitter or Messages is a unique feature that allows users to compete with friends.  Contains ads through the usage of Google Firebase with the ability to pay for removal."),r.a.createElement("div",{className:"w-more"},r.a.createElement("span",{className:"w-ctegory"},"XCode Swift Google Firebase Ads Twitter API Integration In App Purchases")," "))))))))))}}]),t}(r.a.Component),I=t.p+"static/media/earth.a08c82a6.jpg",O=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+I+")"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"contact-mf"},r.a.createElement("div",{id:"contact",className:"box-shadow-full"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"title-box-2"},r.a.createElement("h5",{className:"title-left"},"Send A Message")),r.a.createElement("div",null,r.a.createElement("form",{action:"https://formspree.io/xdoeonlo",method:"POST",className:"contactForm"},r.a.createElement("div",{id:"sendmessage"},"Your message has been sent. Thank you!"),r.a.createElement("div",{id:"errormessage"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("button",{type:"submit",className:"button button-a button-big button-rouded"},"Send Message")))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},r.a.createElement("h5",{className:"title-left"},"Get in Touch")),r.a.createElement("div",{className:"more-info"},r.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",r.a.createElement("br",null),"Simply fill out the from and shoot me an email.")),r.a.createElement("div",{className:"socials"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/zactham",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"ico-circle"},r.a.createElement("i",{className:"ion-social-github"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/zac-thamer/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"ico-circle"},r.a.createElement("i",{className:"ion-social-linkedin"}))))))))))))),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"copyright-box"}))))))}}]),t}(r.a.Component),x=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){s()(".back-to-top").click((function(){return s()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return r.a.createElement("a",{href:"#",className:"back-to-top animated"},r.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),t}(r.a.Component),j=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){s()(window).on("load",(function(){s()("#preloader").length&&s()("#preloader").delay(100).fadeOut("slow",(function(){s()(this).remove()}))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"preloader"})}}]),t}(r.a.Component);c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(E,null),r.a.createElement(N,null),r.a.createElement(k,null),r.a.createElement(O,null),r.a.createElement(x,null),r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.351e6075.chunk.js.map