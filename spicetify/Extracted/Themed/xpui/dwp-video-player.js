"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7988],{98676:(e,t,r)=>{r.d(t,{x:()=>K});const i="playback-bar",n="playback-bar__progress-time-elapsed",a="gglUjikTBtMzCZFgSmpS",o="dN6OLjjcmnuleiECu55A",s="DSdahCi0SDG37V9ZmsGO",l="playback-progressbar-container";var c=r(30758),d=r(97500),u=r.n(d),p=r(422),m=r(14343),v=r(31417),g=r(27607),f=r(68815),b=r(78505),h=r(62021),x=r(82935);const y="main-playbackBarRemainingTime-container";var C=r(86070);const w=({position:e,duration:t,isPreview:r,semanticColor:i="textSubdued",isFullscreenMode:n=!1,className:a})=>{const[o,s]=(0,h.x)(b.fC,!1),l=(0,c.useCallback)((()=>{r||s(!o)}),[o,s,r]);return(0,C.jsx)(p.E,{as:"div","data-testid":"playback-duration","data-test-position":e,variant:n?"bodyMedium":"marginal",className:u()(y,a),onClick:l,semanticColor:i,children:o?`-${(0,x.f)(t-e)}`:(0,x.f)(t)})};var P=r(77567),j=r(58685),N=r(5805);const V="Bn7RYdPUyzN4qo1bC1Ic",k="OEe8k2xe6o6x9x0FAc4b",E=[{name:"Anakin",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"7px","--core-color":"white","--edge-glow-color":"rgb(55, 132, 214)","--blur-glow-color":"#2e77d0","--blur-radius":"16px","--spread-radius":"8px","--saber-hilt-url":`url(${(0,P.b)("images/sw_saber_anakin.png")})`,"--saber-hilt-overlap":"5px"}},{name:"Luke",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"9px","--core-color":"white","--edge-glow-color":"rgb(135, 220, 90)","--blur-glow-color":"#1ed760","--blur-radius":"16px","--spread-radius":"4px","--saber-hilt-url":`url(${(0,P.b)("images/sw_saber_luke.png")})`,"--saber-hilt-overlap":"5px"}},{name:"Vader",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"10px","--core-color":"white","--edge-glow-color":"rgb(229, 17, 21)","--blur-glow-color":"#cd1a2b","--blur-radius":"20px","--spread-radius":"14px","--saber-hilt-url":`url(${(0,P.b)("images/sw_saber_vader.png")})`,"--saber-hilt-overlap":"6px"}},{name:"Rey",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"8px","--core-color":"white","--edge-glow-color":"rgb(249, 164, 11)","--blur-glow-color":"rgb(253, 175, 33)","--blur-radius":"20px","--spread-radius":"5px","--saber-hilt-url":`url(${(0,P.b)("images/sw_saber_rey.png")})`,"--saber-hilt-overlap":"3px"}},{name:"Leia",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"9px","--core-color":"white","--edge-glow-color":"rgb(55, 132, 214)","--blur-glow-color":"#2e77d0","--blur-radius":"16px","--spread-radius":"8px","--saber-hilt-url":`url(${(0,P.b)("images/sw_saber_leia.png")})`,"--saber-hilt-overlap":"2px"}},{name:"Mace",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"9px","--core-color":"white","--edge-glow-color":"rgb(90, 22, 167)","--blur-glow-color":"rgb(172, 57, 193)","--blur-radius":"20px","--spread-radius":"8px","--saber-hilt-url":`url(${(0,P.b)("images/sw_saber_mace.png")})`,"--saber-hilt-overlap":"1px"}},{name:"Ahsoka",vars:{"--bg-color":"","--fg-color":"transparent","--is-active-fg-color":"transparent","--progress-bar-height":"6px","--core-color":"white","--edge-glow-color":"rgb(255,255,255)","--blur-glow-color":"rgb(255,255,255)","--blur-radius":"20px","--spread-radius":"5px","--saber-hilt-url":`url(${(0,P.b)("images/sw_saber_ahsoka1.png")})`,"--saber-hilt-overlap":"-9px","--saber-hilt-width":"100px","--saber-hilt-height":"36px"}}],R=["spotify:playlist:37i9dQZF1DXaUaRhCgtpCo","spotify:playlist:69BOXIItwwyxTgdz6flzvU","spotify:playlist:37i9dQZF1DWUgUvAPAFxdh"],M=["official_star_wars","kirbysayshi","hansencc"],I=/Star Wars/i,A="THX1138",L=A.length;function O({onChange:e}){const t=function(){const[e,t]=(0,c.useState)([]),[r,i]=(0,c.useState)(!1);return(0,c.useEffect)((()=>{const n=n=>{for(e.push(n.key);e.length>L;)e.shift();e.join("")===A&&i(!r),t([...e])};return window.addEventListener("keypress",n),()=>{window.removeEventListener("keypress",n)}}),[e,r]),(0,j.o)((e=>{const t=e?.context.uri??"",r=e?.context?.metadata?.context_owner??"",i=e?.item??void 0;return!!R.includes(t)||!!M.includes(r)||!!(0,N.v)(i)&&(I.test(i.name)||I.test(i.album.name))}))||r}(),{next:r,config:i}=function(e){const[t,r]=(0,c.useState)(0);return{next:()=>{r((t+1)%E.length)},config:e?E[t]:null}}(t),n=(0,c.useRef)(e);return n.current=e,(0,c.useEffect)((()=>{n.current(i?.vars??null)}),[i]),i?(0,C.jsx)("div",{className:V,children:(0,C.jsx)("button",{"data-testid":"saber-hilt-button","aria-label":v.Ru.get("playback-control.a11y.lightsaber-hilt-button",i?.name),className:k,style:i.vars,onClick:r})}):null}var _=r(9473),B=r(90813);const S=["spotify:playlist:37i9dQZF1DXc3KPAjGyPdm"];var D=r(38501),F=r(87182),z=r(86931),U=r(43398);const T=1e3,K=({isPreview:e,isFullscreenMode:t=!1,timerPlacement:r="inline",onChange:d,onDragStart:b,onDragEnd:h})=>{const y=(0,m.NC)(D.O14),[P,N]=(0,c.useState)(null),V=(0,F.z)(),k=(0,j.o)((e=>e),((e,t)=>e?.duration===t?.duration&&e?.hasContext===t?.hasContext&&e?.restrictions?.canSeek===t?.restrictions?.canSeek)),{seekOffsetMs:E}=(0,U.p)(),R=k?.duration??0,M=k?.hasContext??!1,I=k?.restrictions?.canSeek??!1,[A,L,K]=(0,z.S)(T),[W,H]=(0,c.useState)(null),Z=null!==W?W:A,X=null!==W?W:A+(y&&!K?T:0),G=e=>{H(e*R),b?.()},q=(Z>0||R>0)&&"true"!==k?.item?.metadata?.is_narration,$=(0,x.f)(q?Z:NaN),Y=(0,x.f)(q?R:NaN),Q=function(){const e=(0,B.S)()!==_.z.CLOSED,t=(0,j.o)((e=>{const t=e?.context.uri??"";return S.includes(t)}));return!e&&t}(),J=(0,f.O)(),ee="above"===r?o:a;return(0,C.jsxs)("div",{className:u()(i,ee),children:["indicatorOnly"!==r&&(0,C.jsx)(p.E,{"data-testid":"playback-position",as:"div",variant:t?"bodyMedium":"marginal",className:n,semanticColor:t?"textBase":"textSubdued",children:$}),(0,C.jsxs)("div",{className:l,children:[M?(0,C.jsx)(O,{onChange:e=>{N(e)}}):null,(0,C.jsx)(g.z2,{labelText:v.Ru.get("playback-control.a11y.seek-slider-button"),value:X,updateFrequency:T,offFrequencyUpdate:K,max:R,step:E,"aria-valuetext":v.Ru.get("download.progress-global",$,Y),isInteractive:M&&q,onDragStart:G,onDragMove:G,onDragEnd:(e,{wasDraggedBeforeReleased:t})=>{if(H(null),h?.(),!I)return;const r=e*R;L(r),V.seekTo(r);const i=t?"drag":"hit";d?.(r,i)},saberConfig:P,isPlayingStrangerThings:Q,isAttackOnTitanEasterEggActive:J,"data-testid":"playback-progressbar",enableAnimation:y,showValueAsTimeOverHandle:"indicatorOnly"===r})]}),"indicatorOnly"!==r&&(0,C.jsx)(w,{position:Z,duration:q?R:NaN,isPreview:e,semanticColor:t?"textBase":"textSubdued",isFullscreenMode:t,className:s})]})}},50473:(e,t,r)=>{r.d(t,{VideoPlayer:()=>ct});var i=r(30758),n=r(62411),a=r(97500),o=r.n(a),s=r(85387),l=r(31417);var c=r(78813),d=r(44481),u=r(46159);const p="KopIqvLbHzuI_pYTXRSw";var m=r(86070);const v=({onMinimizeButtonClick:e})=>(0,m.jsx)("div",{className:o()(p),children:(0,m.jsx)(d.$,{"aria-label":l.Ru.get("ad-formats.dismissAd"),colorSet:"overMedia",iconOnly:u.b,onClick:e,size:"small"})});var g=r(32411),f=r(30714),b=r(44971),h=r(79961),x=r(9473),y=r(90813),C=r(58685),w=r(75497);const P="Lk23rM5uSl5mgEXroOPH",j="XvNci8tJYTXGgFBNzRWg",N="Hj1B5D7WgG4aZkU8meAp",V="ctQf8WC83qR_pcv7bOEh",k="Xyaz284GhueBbBPn6gOS",E="pIMAcTC5w2dZdMGe4U_A",R="XeZ0TCAoRGXh8soWVo5S",M=({setVideoContainer:e})=>{const t=(0,n.wA)(),r=(0,C.o)((e=>e?.item??void 0),((e,t)=>e?.uri===t?.uri)),a=(0,w.N)(r)?r.url??void 0:void 0,d=((0,w.N)(r)?r.advertiser:void 0)||"Advertiser",u=(0,n.d4)((e=>e?.ads?.vto?.isMinimized)),p=(0,w.N)(r)&&"portrait"===r.videoOrientation,M=(0,i.useRef)(),I=(0,s.zy)(),A=(0,y.S)();(0,i.useEffect)((()=>{M.current?t((0,c.iB)()):M.current=!0}),[t,I.pathname]);const[L,O]=(0,i.useState)(null);(0,i.useEffect)((()=>{t((0,c.MW)())}),[t]),(0,i.useEffect)((()=>{null!==L&&e(L)}),[e,u,L]);const _=o()(P,{[j]:p});return(0,m.jsxs)(b.A,{className:N,animation:{overlay:{base:k,beforeClose:R,afterOpen:E},closeTimeoutMs:300},isOpen:!u,parentSelector:()=>document.querySelector(".VTO__modal-slot"),shouldCloseOnEsc:!1,shouldCloseOnOverlayClick:!1,contentLabel:l.Ru.get("ad-formats.advertisement"),children:[(0,m.jsxs)("div",{className:_,children:[(0,m.jsx)("a",{"aria-label":l.Ru.get("ad-formats.video-ad-overlay.cta-button",{advertiserName:d}),className:_,"data-testid":"video-takeover-link",href:a?(0,g.H)(a):void 0,onClick:()=>{t((0,c.i2)(f.ee.CLICKED,f.Wh.VIDEO_TAKEOVER,f.Lv.VIDEO_PLAYER))},ref:e=>{O(e)},target:"_blank"}),A===x.z.CLOSED&&(0,m.jsx)(v,{onMinimizeButtonClick:()=>{t((0,c.Oc)()),t((0,c.i2)(f.ee.COLLAPSED,f.Wh.MINIMIZE_BUTTON,f.Lv.VIDEO_PLAYER))}})]}),A===x.z.NOW_PLAYING_VIEW&&(0,w.N)(r)&&(0,m.jsx)(h.h,{item:r,className:V})]})},I=({setVideoContainer:e})=>(0,n.d4)((e=>e?.ads?.vto?.isHidden))?null:(0,m.jsx)(M,{setVideoContainer:e});var A=r(78464),L=r(8143),O=r(40638);function _(){const[e,t]=(0,i.useState)(!1),r=(0,i.useRef)(null),n=(0,O.YQ)((()=>{r.current&&clearTimeout(r.current),r.current=setTimeout((()=>{t(!1)}),1500),t(!0)}),100,{maxWait:100,leading:!0}),a=(0,i.useCallback)((e=>{t(e),n.cancel()}),[n]);return(0,i.useEffect)((()=>()=>{r.current&&clearTimeout(r.current)}),[]),{isControlsVisible:e,setIsControlsVisible:a,handleKeepViewVisible:n}}var B=r(51100),S=r(14732),D=r(46022),F=r(61286),z=r(14343),U=r(60238),T=r(98293),K=r(68594),W=r(62435),H=r(74934),Z=r(85771),X=r(33625),G=r(15155),q=r(58147),$=r(66204),Y=r(31193),Q=r(909),J=r(38501),ee=r(608),te=r(21549);const re="MBzbwWcyfbqSftBtnn3g",ie=({noBackground:e,iconSize:t="small"})=>{const{setVideoPlayerUIFlag:r,videoPlayerUIFlags:i,videoPlayerMode:n}=(0,Y.d)(),a=n===Q.K.cinemaLegacy,{uri:s}=(0,ee.f)(),{hideLyrics:c}=(0,$.A)({referrer:"cinema-mode-toggle"}),d=(0,z.NC)(J.Au4),{spec:u,logger:p}=(0,te.r)(U.E,{data:{uri:s??"",identifier:Q.K.cinemaLegacy}});if(!d||n===Q.K.fullscreen)return null;return(0,m.jsx)("div",{className:o()({[re]:a}),children:(0,m.jsx)(K.D,{noBackground:e,active:a,label:a?l.Ru.get("video-player.default-view"):l.Ru.get("video-player.cinema-mode"),onClick:()=>{a?p.logInteraction(u.cinemaModeButtonFactory().hitUiHide()):p.logInteraction(u.cinemaModeButtonFactory().hitUiReveal()),c(),r(Q.n.cinemaLegacy,!i.cinemaLegacy)},children:a?(0,m.jsx)(G.Q,{size:t}):(0,m.jsx)(q.C,{size:t})})})};var ne=r(72285),ae=r(60437),oe=r(92849),se=r(40339),le=r(8428),ce=r(32641);function de(){const e=(0,n.wA)(),t=(0,se.XB)();return{enterPipVideoMode:(0,i.useCallback)((()=>{e((0,ce.R)(Q.K.pip))}),[e]),leavePipVideoMode:(0,i.useCallback)((()=>{t===le.Z.NowPlayingView&&e((0,ce.R)(Q.K.npv))}),[e,t])}}var ue=r(93629),pe=r(16581);const me="fuONPgUcYO2bf15HunlX",ve=({noBackground:e,iconSize:t="small",uri:r})=>{const i=(0,n.d4)(ae.c),a=i===Q.K.pip,{enterPipVideoMode:s,leavePipVideoMode:c}=de(),{item:d}=(0,X.L)()??{},{isActive:u}=(0,oe.D)({item:d}),p=(0,C.o)(pe.A3),{spec:v,logger:g}=(0,te.r)(U.E,{data:{uri:r,identifier:i}}),f=(0,ne.u)({parentAbsoluteLocation:v.pipButtonContainerFactory().getAbsoluteLocation()});if(!p)return null;let b=l.Ru.get("video-player.default-view");return a||(b=u?l.Ru.get("miniplayer.close"):l.Ru.get("miniplayer.open-in")),(0,m.jsx)("div",{className:o()({[me]:a}),children:(0,m.jsx)(K.D,{noBackground:e,active:a,label:b,onClick:()=>{(0,ue.ge)()&&(0,ue.SP)(),a?(c(),g.logInteraction(f.pipButtonFactory({uri:r}).hitUiHide())):(s(),f.pipButtonFactory({uri:r}).hitUiReveal())},children:(0,m.jsx)(B.F,{size:t})})})};var ge=r(90020),fe=r(98320),be=r(34990),he=r(87182),xe=r(41434);const ye="aHe1QDDI5hmYWAKf4MoR",Ce="DtWKCk0YYDlZT11U1niL",we="RTSxo7zS2ozOeg4gnC2c",Pe="ZcIaDrsIojjWZ_Xf_6iN",je="viN5UfPr2XfnYOWHTS0W",Ne="pLL2Ok4QckLG8GAWriCB",Ve=[{transform:"scale(1)",opacity:0},{transform:"scale(1.3)",opacity:1},{transform:"scale(1.6)",opacity:0}],ke=[{transform:"scale(1)",opacity:1},{transform:"scale(1)",opacity:1}],Ee={duration:500,easing:"ease-out"},Re=function({visible:e,className:t,darkOverlayOnHover:r=!1,animatePlayPauseButtonOnClick:a=!0,showProgressbar:s=!1}){const{videoPlayerMode:c}=(0,Y.d)(),d=(0,n.wA)(),u=(0,H.lZ)(),p=(0,fe.$)(),v=(0,z.NC)(J.mzn),g=(0,i.useContext)(W.s),f=c===Q.K.cinemaLegacy,b=(0,be.j)(),h=(0,n.d4)((e=>e.platform.isDesktop)),{item:x}=(0,X.L)()??{},y=x?.uri??"",{isActive:w,onClick:P,showButton:j}=(0,oe.D)({item:x}),N=p.getCapabilities().hasPipSupport,V=(0,he.z)(),k=(0,C.o)((e=>e),((e,t)=>(0,xe.a)(e?.restrictions,t?.restrictions)&&e?.item?.uri===t?.item?.uri&&e?.isPaused===t?.isPaused)),{isPaused:E,canResume:R,canPause:M}=(0,H.Nh)(k),{spec:I,logger:A,UBIFragment:L}=(0,te.r)(U.E,{data:{uri:y,identifier:Q.K.npv}}),O=(0,i.useRef)(null),_=(0,i.useRef)(null),G=(0,i.useCallback)((()=>{let e=null;E&&R?(V.resume(),A.logInteraction(I.playButtonFactory().hitPlay({itemToBePlayed:y})),e=O):!E&&M&&(V.pause(),A.logInteraction(I.playButtonFactory().hitPause({itemToBePaused:y})),e=_),a&&e?.current?.animate&&e.current.animate(b?ke:Ve,Ee)}),[M,R,E,A,V,I,y,a,b]),q=(0,i.useMemo)((()=>f?null:j?(0,m.jsx)(K.D,{label:w?l.Ru.get("miniplayer.close"):l.Ru.get("miniplayer.open-in"),onClick:P,active:w,children:(0,m.jsx)(B.F,{size:"small"})}):h&&N?(0,m.jsx)(ve,{uri:y}):null),[w,f,h,N,P,j,y]);return(0,m.jsxs)(L,{spec:I,children:[!v&&(0,m.jsxs)("div",{className:o()(ye,t,{[Ne]:e}),children:[(0,m.jsx)(ge.C,{renderInline:!0}),(0,m.jsx)(ie,{}),q,u&&(0,m.jsx)(K.D,{label:l.Ru.get("npv.full-screen"),onClick:()=>{g?.current&&((0,ue.X8)(g.current),d((0,T.f)()))},children:(0,m.jsx)(S.L,{size:"small"})})]}),r&&(0,m.jsx)("div",{tabIndex:-1,"data-prevents-ambient-mode":"false",className:o()(Ce,{[Ne]:e})}),(0,m.jsxs)("div",{className:we,tabIndex:-1,"data-prevents-ambient-mode":"false",onClick:G,onKeyDown:()=>{},"aria-label":E?l.Ru.get("play"):l.Ru.get("pause"),role:"button",children:[(0,m.jsx)("div",{className:Pe,ref:O,children:(0,m.jsx)(D.x,{size:"xlarge",width:48})}),(0,m.jsx)("div",{className:Pe,ref:_,children:(0,m.jsx)(F.B,{size:"xlarge",width:48})})]}),s&&v&&(0,m.jsx)("div",{className:o()(je,{[Ne]:e}),children:(0,m.jsx)(Z.x,{isPreview:!1,timerPlacement:"indicatorOnly"})})]})};function Me(e,t){(0,i.useLayoutEffect)((()=>{t.current&&e(t.current)}),[t,e])}const Ie="kJKEEG391Pf_PLzwG2Vm",Ae=({setVideoContainer:e})=>{const t=(0,i.useRef)(null);Me(e,t);const{isControlsVisible:r,handleKeepViewVisible:n}=_(),a=document.getElementById("VideoPlayerCinema_ReactPortal");return null===a?null:(0,L.createPortal)((0,m.jsx)("div",{ref:t,hidden:!1,className:Ie,onMouseMove:n,onFocus:n,"data-testid":"video-player-cinema",children:(0,m.jsx)(Re,{visible:r})}),a)};var Le=r(10495),Oe=r(25720),_e=r(77141);const Be="dg_LeRfnn0R3ivigmbze",Se="wdZZT43qDlLzMbBxRH7T",De=({cinemaModeRef:e,setVideoContainer:t})=>{const r=(0,i.useRef)(null),{nowPlayingBarRef:n}=(0,Le.JT)(),{videoPlayerUIFlags:a,setVideoPlayerUIFlag:o}=(0,Oe.d)();Me(t,r);const{isControlsVisible:s,handleKeepViewVisible:l}=_();return(0,i.useEffect)((()=>{const e=e=>{"Escape"===e.key&&o(Q.n.cinemaLegacy,!1)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[o,a.cinemaLegacy]),e.current?n.current?(0,L.createPortal)((0,m.jsxs)("div",{ref:r,className:Be,onMouseMove:l,onFocus:l,"data-testid":"video-player-cinema",children:[(0,m.jsx)(_e.s,{containerElements:[e.current,n.current],active:!0,focusTrapOptions:{allowOutsideClick:!0}}),(0,m.jsx)(Re,{visible:s,className:Se})]}),e.current):(console.error("No ref found for nowPlayingBar!"),null):(console.error("No container found for cinema video!"),null)};var Fe=r(28145);const ze=({setVideoContainer:e})=>{const t=(0,i.useRef)(null);Me(e,t);const r=window.documentPictureInPicture?.window,n=r?.document.getElementById("document-pip-main-container"),a=(0,fe.$)();return(0,i.useEffect)((()=>(r&&a.setWindow(r),()=>{a.setWindow(window)})),[r,a]),n?(0,L.createPortal)((0,m.jsx)("div",{ref:t,"data-testid":"video-player-document-pip",className:Fe.A.videoPlayerContainer}),n):(0,m.jsx)(m.Fragment,{})},Ue=i.memo((function({setVideoContainer:e,fullscreenModeRef:t}){const r=(0,i.useRef)(null);return Me(e,r),t.current?(0,L.createPortal)((0,m.jsx)("div",{"data-testid":"video-player-fullscreen",className:o()("VideoFullscreenMode"),children:(0,m.jsx)("div",{className:"VideoFullscreenMode__video-container",ref:r})}),t.current):(console.error("No container found for fullscreen video!"),null)}));var Te=r(30147);const Ke="_2r290M0vbnbQGfhLbvq",We=({setVideoContainer:e})=>{const t=(0,i.useRef)(null),r=(0,Te.v7)();Me(e,t);const n=(0,i.useRef)(!0);(0,i.useEffect)((()=>(n.current=!0,()=>{n.current=!1})));const a=document.getElementById("VideoPlayerNpb_ReactPortal");return null===a?null:(0,L.createPortal)((0,m.jsx)("div",{ref:t,hidden:!1,className:Ke,style:{position:"relative"},onMouseDown:e=>{t.current&&r.current&&(e.stopPropagation(),e.preventDefault())},"data-testid":"video-player-npb"}),a)};var He=r(63676),Ze=r(89775);const Xe="H2mo30Z5kNiGZbZ9U2Nu",Ge="TbZ7pNOfpFK2FmnFuQcW",qe="BRt_JFU0qTnWIGCaWWJY",$e=({visible:e})=>{const t=(0,n.wA)(),r=o()(Ge,{[qe]:e});return(0,m.jsx)("div",{className:Xe,children:(0,m.jsx)("div",{className:r,children:(0,m.jsx)(d.$,{"aria-label":l.Ru.get("npv.full-screen"),colorSet:"overMedia",iconOnly:S.L,onClick:e=>{e.stopPropagation(),e.preventDefault(),t((0,c.MW)()),t((0,c.i2)(f.ee.EXPANDED))},size:"small"})})})},Ye="Qhq7SHNg9UlhtkK9I6Km",Qe="ZWx9Xu8F_WoC4M_KEbtW",Je=({element:e,handleKeepViewVisible:t,isControlsVisible:r,item:i,scrollNodeRef:a,setIsControlsVisible:s,setVideoContainer:l,videoContainerRef:c})=>{Me(l,c);const d=(0,n.wA)(),u="portrait"===i.videoOrientation,p=i.url??void 0,v=o()(Ye,{[Qe]:u});return(0,L.createPortal)((0,m.jsx)("div",{ref:c,hidden:!1,className:v,onMouseLeave:()=>{s(!1)},onMouseDown:e=>{c.current&&a.current&&(e.stopPropagation(),e.preventDefault())},onMouseMove:t,onFocus:t,"data-testid":"ads-video-player-npv",children:p?(0,m.jsx)("a",{style:{zIndex:2},href:p,onClick:()=>{d((0,Ze.q5)(He.c.VIDEO_PLAYER,He.V.AD_NPV))},"data-testid":"video-player-ad-wrapper",children:(0,m.jsx)($e,{visible:r})}):(0,m.jsx)($e,{visible:r})}),e)},et="ouiL5cH1WduxtprQ0Iig",tt="ZFMDHV2keRjBzLaxEHri",rt=({setVideoContainer:e})=>{const t=(0,i.useRef)(null),r=(0,Te.v7)(),n=(0,C.o)((e=>e?.item??void 0),((e,t)=>e?.uri===t?.uri));Me(e,t);const a=(0,i.useRef)(!0);(0,i.useEffect)((()=>(a.current=!0,()=>{a.current=!1})));const{isControlsVisible:o,setIsControlsVisible:s,handleKeepViewVisible:l}=_(),c=document.getElementById("VideoPlayerNpv_ReactPortal");return null===c?null:(0,w.N)(n)?(0,m.jsx)(Je,{element:c,handleKeepViewVisible:l,isControlsVisible:o,item:n,scrollNodeRef:r,setIsControlsVisible:s,setVideoContainer:e,videoContainerRef:t}):(0,L.createPortal)((0,m.jsx)("div",{className:et,children:(0,m.jsx)("div",{ref:t,hidden:!1,className:tt,onMouseLeave:()=>{s(!1)},onMouseDown:e=>{t.current&&r.current&&(e.stopPropagation(),e.preventDefault())},onMouseMove:l,onFocus:l,"data-testid":"video-player-npv",children:(0,m.jsx)("div",{ref:t,children:(0,m.jsx)(Re,{visible:o,darkOverlayOnHover:!0,showProgressbar:!0})})})}),c)};const it=e=>{const t=(()=>{const[e]=(0,i.useState)((()=>{const e=document.createElement("div");return e.classList.add("VideoPlayer__container"),e}));return e})();if((0,i.useLayoutEffect)((()=>{null!==e&&null!==t&&e.insertBefore(t,e.firstChild)}),[e,t]),t&&t.firstChild instanceof HTMLVideoElement){const e=t.firstChild;return`${e.videoWidth}/${e.videoHeight}`}return"16/9"};var nt=r(74096);var at=r(79237),ot=r(62642);const st=r(68436).S.PICTURE_IN_PICTURE_CHANGED;const lt=({setVideoContainer:e,videoContainerRef:t})=>(Me(e,t),(0,m.jsx)("div",{ref:t,style:{display:"none"}})),ct=({cinemaModeRef:e,fullscreenModeRef:t})=>{const{videoPlayerMode:r}=(0,Oe.d)(),a=(0,i.useRef)(null),[o,s]=(0,i.useState)(null),l=(0,n.d4)((e=>e.platform.isDesktop)),{isPlayingVideoAd:d}=(0,C.o)((e=>{const t=e?.item??void 0;return{isPlayingVideoAd:(0,pe.A3)(e)&&(0,w.N)(t)}})),u=(0,n.d4)((e=>e?.ads?.vto?.isMinimized));if(it(o),(()=>{const{isPlayingVideo:e,contextUri:t}=(0,C.o)((e=>({isPlayingVideo:(0,pe.A3)(e),contextUri:e?.context.uri}))),{setVideoPlayerUIFlag:r}=(0,Y.d)(),n=(0,at.v)((({connectionStatus:e})=>e===ot.zP.CONNECTED||e===ot.zP.CONNECTING));(0,i.useEffect)((()=>{const t=e&&!n;r(Q.n.videoAvailable,t)}),[e,n,r,t])})(),(()=>{const{setVideoPlayerUIFlag:e}=(0,Y.d)(),t=(0,z.NC)(J.mzn);(0,nt.P)((r=>{t||e(Q.n.fullscreen,r)}))})(),(()=>{const e=(0,fe.$)(),{videoPlayerMode:t}=(0,Oe.d)(),{leavePipVideoMode:r}=de(),n=t===Q.K.pip;(0,i.useEffect)((()=>e.getEvents().addListener(st,(({data:e})=>{!e&&n&&r()}))),[e,n,r]),(0,i.useEffect)((()=>{const t=document.pictureInPictureElement;n&&!t&&e.setPip?.(!0),!n&&t&&e.setPip?.(!1)}),[e,n])})(),function(){const e=(0,fe.$)(),{videoPlayerMode:t}=(0,Y.d)(),[r,n]=(0,i.useState)(!document.hidden),[a,o]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const e="visibilitychange",t=()=>{n(!document.hidden)};return document.addEventListener(e,t),()=>{document.removeEventListener(e,t)}}),[e,n]),(0,i.useEffect)((()=>{const i=!(t===Q.K.pip||t===Q.K.documentPip||t!==Q.K.none&&r),n=e.getCapabilities().hasMinimizeBitrateSupport&&i;a!==n&&(e.setMinimizeBitrate(n),o(n))}),[e,t,r,a,o])}(),(()=>{const e=(0,n.wA)(),t=(0,i.useRef)(),{isPlayingVideoAd:r,playbackId:a}=(0,C.o)((e=>{const t=e?.item??void 0;return{isPlayingVideoAd:(0,pe.A3)(e)&&(0,w.N)(t),playbackId:e?.playbackId}}));(0,i.useEffect)((()=>{r&&t.current!==a&&(e((0,c.MW)()),t.current=a)}),[a,r,e])})(),l&&d&&r!==Q.K.pip&&!u)return(0,m.jsx)(I,{setVideoContainer:s});switch(r){case Q.K.fullscreen:return(0,m.jsx)(A.s,{children:(0,m.jsx)("div",{ref:a,children:(0,m.jsx)(Ue,{fullscreenModeRef:t,setVideoContainer:s})})});case Q.K.cinema:return(0,m.jsx)(A.s,{children:(0,m.jsx)("div",{ref:a,children:(0,m.jsx)(Ae,{setVideoContainer:s})})});case Q.K.cinemaLegacy:return(0,m.jsx)(A.s,{children:(0,m.jsx)("div",{ref:a,children:(0,m.jsx)(De,{cinemaModeRef:e,setVideoContainer:s})})});case Q.K.npv:return(0,m.jsx)(A.s,{children:(0,m.jsx)("div",{ref:a,children:(0,m.jsx)(rt,{setVideoContainer:s})})});case Q.K.documentPip:return(0,m.jsx)(A.s,{children:(0,m.jsx)("div",{ref:a,children:(0,m.jsx)(ze,{setVideoContainer:s})})});case Q.K.nowPlayingBar:return(0,m.jsx)(A.s,{children:(0,m.jsx)("div",{ref:a,children:(0,m.jsx)(We,{setVideoContainer:s})})});case Q.K.none:default:return(0,m.jsx)("div",{ref:a,children:(0,m.jsx)(lt,{videoContainerRef:a,setVideoContainer:s})})}}},74934:(e,t,r)=>{r.d(t,{sY:()=>x,Nh:()=>h,bo:()=>y,r3:()=>b,EX:()=>f,lZ:()=>g});var i=r(14343),n=r(57776);r(59147);const a=new n.l("queryFullscreenMode","query","5aa77fcd9a5b65f829d8dee4000703ff1a7ff68e813c60999c0b2dce754240e2",null);var o=r(38501),s=r(58685),l=r(75497),c=r(13947),d=r(45627),u=r(5805),p=r(4861),m=r(16581),v=r(85907);const g=()=>{const e=(0,i.NC)(o.WYm,{loadingValue:!1});return(0,s.o)(m.A3)||e};function f(e){return(0,u.v)(e)?{uri:e.uri,name:e.name,creatorName:e.artists[0]?.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,d.p)(e)?{uri:e.uri,name:e.name,creatorName:e.show.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,c.d)(e)?{uri:e.uri,name:e.name,creatorName:e.book.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,l.N)(e)?{uri:e.uri,name:e.title??"",creatorName:e.advertiser??"",coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,p.v)(e)||void 0===e?void 0:(0,v.d)(e)}function b(e){const t=f(e);return(0,u.v)(e)||(0,d.p)(e)||(0,c.d)(e)||(0,l.N)(e)?{...t,duration:e.duration.milliseconds,mediaType:(r=e.mediaType,"video"===r||"mixed"===r?"video":"audio")}:(0,p.v)(e)||void 0===e?void 0:(0,v.d)(e);var r}function h(e){const t=e?.context.metadata?.context_description,r=e?.context.uri||void 0,i=e?.positionAsOfTimestamp??void 0,n=e?.timestamp,a=e?.isPaused,o=e?.restrictions.canPause,s=e?.restrictions.canResume;return{contextName:t,contextUri:r,position:i,timestamp:n,isPaused:a,canPause:o,canResume:s}}async function x(e,t){return e(a,{artistUri:t}).then((e=>{if("Artist"===e?.data?.artistUnion.__typename)return e.data.artistUnion.visuals.headerImage?.sources[0]?.url})).catch((()=>{}))}function y(e,t,r){if(e&&r&&r.hasLyrics)return{status:t?"loading":"success",content:{provider:r.provider,syncType:r.syncType,lines:r.lyrics.map((e=>({timestamp:Number(e.start),text:e.text})))}}}},66204:(e,t,r)=>{r.d(t,{A:()=>s});var i=r(85387),n=r(90841),a=r(31193),o=r(909);function s({referrer:e,onChange:t}){const r=(0,i.Zp)(),{isActive:s,routeDestination:l}=(0,n.$)(),{setVideoPlayerUIFlag:c}=(0,a.d)(),d=()=>{s||(c(o.n.cinemaLegacy,!1),r(l,{state:{referrer:e}}),t?.(l))},u=()=>{s&&(r(-1),t?.(null))};return{isActive:s,showLyrics:d,hideLyrics:u,toggleLyrics:()=>{s?u():d()}}}},85771:(e,t,r)=>{r.d(t,{x:()=>i.x});var i=r(98676)},92849:(e,t,r)=>{r.d(t,{D:()=>d});var i=r(30758),n=r(86996);var a=r(31193),o=r(909),s=r(89402),l=r(29634),c=r(21549);const d=({item:e,onClick:t})=>{const r=(0,s.W)(),{capabilities:{isEnabled:d},isOpen:u,close:p,open:m,canOpen:v}=(0,l.H)(),{videoPlayerMode:g}=(0,a.d)(),{spec:f,logger:b}=(0,c.r)(n.h9,{data:{identifier:g===o.K.cinemaLegacy?n.gw.CINEMA:n.gw.DESKTOP}}),h=(0,i.useCallback)((()=>{let i;d&&(u?(p(),e?.uri&&b.logInteraction(f.pipButtonFactory({uri:e.uri}).hitUiHide()),i="close-picture-in-picture"):(m(),e?.uri&&(({spec:e,logger:t,uri:r})=>{const i=window.documentPictureInPicture;if(!i)return;const n=a=>{setTimeout((()=>{const i=a.window?.innerWidth,n=a.window?.innerHeight;if(!i||!n)return;const o=e.pipButtonFactory({uri:r}).hitUiOpenWindow({widthPx:i,heightPx:n});t.logInteraction(o)}),100),i.removeEventListener("enter",n)};i.addEventListener("enter",n)})({spec:f,logger:b,uri:e.uri}),i="show-picture-in-picture"),t?.(!u,e?.uri),r({type:"click",intent:i,targetUri:e?.uri,itemIdSuffix:"picture-in-picture-toggle"}))}),[p,d,u,e?.uri,b,t,r,m,f]);return{showButton:v,isActive:u,onClick:h}}},28145:(e,t,r)=>{r.d(t,{A:()=>i});const i={videoPlayerContainer:"ngkFeIGFyNUaxRspbs5H"}}}]);
//# sourceMappingURL=dwp-video-player.js.map