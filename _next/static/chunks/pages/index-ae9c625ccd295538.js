(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7435)}])},9749:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,s;var i,{src:r,sizes:p,unoptimized:x=!1,priority:w=!1,loading:b,className:j,quality:y,width:E,height:k,fill:_,style:N,onLoad:S,onLoadingComplete:C,placeholder:z="empty",blurDataURL:P,layout:O,objectFit:I,objectPosition:R,lazyBoundary:M,lazyRoot:A}=e,L=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=o.useContext(f.ImageConfigContext),B=o.useMemo(()=>{let e=h||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),s=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:s})},[T]),D=L,W=D.loader||u.default;if(delete D.loader,"__next_img_default"in W){if("custom"===B.loader)throw Error('Image with src "'.concat(r,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=W;W=e=>{let{config:t}=e,s=a(e,["config"]);return F(s)}}if(O){"fill"===O&&(_=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];q&&(N=n({},N,q));let G={responsive:"100vw",fill:"100vw"}[O];G&&!p&&(p=G)}let H="",U=g(E),Z=g(k);if("object"==typeof(i=r)&&(m(i)||void 0!==i.src)){let J=m(r)?r.default:r;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(t=J.blurWidth,s=J.blurHeight,P=P||J.blurDataURL,H=J.src,!_){if(U||Z){if(U&&!Z){let V=U/J.width;Z=Math.round(J.height*V)}else if(!U&&Z){let X=Z/J.height;U=Math.round(J.width*X)}}else U=J.width,Z=J.height}}let K=!w&&("lazy"===b||void 0===b);((r="string"==typeof r?r:H).startsWith("data:")||r.startsWith("blob:"))&&(x=!0,K=!1),B.unoptimized&&(x=!0);let[Q,$]=o.useState(!1),[Y,ee]=o.useState(!1),et=g(y),es=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:R}:{},Y?{}:{color:"transparent"},N),en="blur"===z&&P&&!Q?{backgroundSize:es.objectFit||"cover",backgroundPosition:es.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:Z,blurWidth:t,blurHeight:s,blurDataURL:P}),'")')}:{},ei=function(e){let{config:t,src:s,unoptimized:n,width:i,quality:r,sizes:a,loader:o}=e;if(n)return{src:s,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,s){let{deviceSizes:n,allSizes:i}=e;if(s){let r=/(^|\s)(1?\d?\d)vw/g,a=[];for(let o;o=r.exec(s);o)a.push(parseInt(o[2]));if(a.length){let l=.01*Math.min(...a);return{widths:i.filter(e=>e>=n[0]*l),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,n)=>"".concat(o({config:t,src:s,quality:r,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:o({config:t,src:s,quality:r,width:l[d]})}}({config:B,src:r,unoptimized:x,width:U,quality:et,sizes:p,loader:W}),er=r,ea={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:D.crossOrigin},eo=o.useRef(S);o.useEffect(()=>{eo.current=S},[S]);let el=o.useRef(C);o.useEffect(()=>{el.current=C},[C]);let ec=n({isLazy:K,imgAttributes:ei,heightInt:Z,widthInt:U,qualityInt:et,className:j,imgStyle:es,blurStyle:en,loading:b,config:B,fill:_,unoptimized:x,placeholder:z,loader:W,srcString:er,onLoadRef:eo,onLoadingCompleteRef:el,setBlurComplete:$,setShowAltText:ee},D);return o.default.createElement(o.default.Fragment,null,o.default.createElement(v,Object.assign({},ec)),w?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},ea))):null)};var n=s(6495).Z,i=s(2648).Z,r=s(1598).Z,a=s(7273).Z,o=r(s(7294)),l=i(s(3121)),c=s(2675),d=s(139),f=s(8730);s(7238);var u=i(s(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,s,i,r,a,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===s&&a(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){l=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:s,widthInt:i,qualityInt:r,className:l,imgStyle:c,blurStyle:d,isLazy:f,fill:u,placeholder:h,loading:m,srcString:g,config:v,unoptimized:x,loader:w,onLoadRef:b,onLoadingCompleteRef:j,setBlurComplete:y,setShowAltText:E,onLoad:k,onError:_}=e,N=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},N,t,{width:i,height:s,decoding:"async","data-nimg":u?"fill":"1",className:l,loading:m,style:n({},c,d),ref:o.useCallback(e=>{e&&(_&&(e.src=e.src),e.complete&&p(e,g,h,b,j,y,x))},[g,h,b,j,y,_,x]),onLoad(e){let t=e.currentTarget;p(t,g,h,b,j,y,x)},onError(e){E(!0),"blur"===h&&y(!0),_&&_(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:s,blurWidth:n,blurHeight:i,blurDataURL:r}=e,a=n||t,o=i||s,l=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(r,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function s(e){let{config:t,src:s,width:n,quality:i}=e;return s.endsWith(".svg")&&!t.dangerouslyAllowSVG?s:"".concat(t.path,"?url=").concat(encodeURIComponent(s),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,s.__next_img_default=!0,t.default=s},7435:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var n=s(5893),i=s(9008),r=s.n(i);s(7294);var a=s(5675),o=s.n(a);let l=()=>(0,n.jsxs)("div",{className:"justify-center pt-[1vh] h-s[creen] w-screen md:pt-[1vh] h-[screen] md:h-[screen] overflow-hidden",children:[(0,n.jsx)("div",{className:"h-6/12 px-50 font-bold justify-center text-center",children:(0,n.jsx)("h1",{className:"font-serif font-bold text-[7em] text-[#15171a] leading-none",children:"kach0w"})}),(0,n.jsx)("div",{className:"flex my-[vh] justify-center text-center",children:(0,n.jsx)(o(),{className:"w-[30vw]",src:"../assets/rusteze.png",alt:"img"})}),(0,n.jsx)("div",{className:"flex text-center justify-center",children:(0,n.jsx)("div",{className:"text-[1.8rem] font-bold text-[#000000]",children:"Trying to Learn New Things."})}),(0,n.jsxs)("div",{className:"flex my-[5vh] justify-center text-center",children:[(0,n.jsx)("a",{href:"https://github.com/kach0w",children:(0,n.jsx)("div",{className:"bg-[#3b82f6] hover:bg-[#0a5adb] w-[9vw] py-5 mr-2 text-[1.5rem] text-[#ffffff] rounded-[8px]",children:(0,n.jsxs)("div",{className:"font-serif font-bold",children:[(0,n.jsx)("i",{class:"fab fa-github"})," GitHub"]})})}),(0,n.jsx)("a",{href:"mailto:kachow@duck.com",children:(0,n.jsx)("div",{className:"bg-[#3b82f6] hover:bg-[#0a5adb] w-[9vw] py-5 ml-2 text-[1.5rem] text-[#ffffff] rounded-[8px]",children:(0,n.jsxs)("div",{className:"font-serif font-bold",children:[(0,n.jsx)("i",{class:"fa-solid fa-envelope"})," Email"]})})})]})]}),c=()=>(0,n.jsx)("div",{className:"justify-center content-center text-center m-x-auto",children:(0,n.jsxs)("div",{className:"flex text-[1.5rem] pt-5 space-x-20 h-15 bg-grey text-center justify-center content-center align-middle z-3",children:[(0,n.jsx)("a",{href:"https://kach0w.com",children:"Home"}),(0,n.jsx)("a",{href:"https://kach0w.com/about",children:"About"}),(0,n.jsxs)("div",{className:"",children:["Projects ",(0,n.jsx)("i",{class:"fa fa-caret-down"})]}),(0,n.jsx)("a",{href:"https://kach0w.com/blog",children:"Blog"})]})});function d(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"kach0w"}),(0,n.jsx)("meta",{name:"description",content:"kach0w's website"}),(0,n.jsx)("link",{rel:"icon",href:"../assets/rusteze.png",type:"image/png"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,n.jsx)("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Proxima+Nova:wght@400;600;700;900');"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.1/css/all.css",integrity:"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",crossorigin:"anonymous"}),(0,n.jsx)("script",{src:"https://kit.fontawesome.com/a191de05ec.js",crossorigin:"anonymous"})]}),(0,n.jsx)(c,{}),(0,n.jsx)(l,{})]})}},9008:function(e,t,s){e.exports=s(3121)},5675:function(e,t,s){e.exports=s(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);