import{u as l,j as e,e as a,d as i,f as r,g as o}from"./index-CO_j6U02.js";import{r as c}from"./react-BkY1S2IL.js";import{b as s}from"./animation-BEf_acZ8.js";import"./ScrollTrigger-BS49OFpx.js";const h=()=>{const t=c.useRef();return l(()=>{o.to("#exploreVideo",{scrollTrigger:{trigger:"#exploreVideo",toggleActions:"play pause reverse restart",start:"-10% bottom"},onComplete:()=>{t.current.play()}}),s("#features_title",{y:0,opacity:1}),s(".g_grow",{scale:1,opacity:1,ease:"power1"},{scrub:5.5}),s(".g_text",{y:0,opacity:1,ease:"power2.inOut",duration:1})},[]),e.jsx("section",{className:"h-full common-padding bg-zinc relative overflow-hidden",children:e.jsxs("div",{className:"screen-max-wdith",children:[e.jsx("div",{className:"mb-12 w-full",children:e.jsx("h1",{id:"features_title",className:"section-heading",children:"Explore the full story."})}),e.jsxs("div",{className:"flex flex-col justify-center items-center overflow-hidden",children:[e.jsxs("div",{className:"mt-32 mb-24 pl-24",children:[e.jsx("h2",{className:"text-5xl lg:text-7xl font-semibold",children:"iPhone."}),e.jsx("h2",{className:"text-5xl lg:text-7xl font-semibold",children:"Forged in titanium."})]}),e.jsxs("div",{className:"flex-center flex-col sm:px-10",children:[e.jsx("div",{className:"relative h-[50vh] w-full flex items-center",children:e.jsx("video",{playsInline:!0,id:"exploreVideo",className:"w-full h-full object-cover object-center",preload:"none",muted:!0,autoPlay:!0,ref:t,children:e.jsx("source",{src:a,type:"video/mp4"})})}),e.jsxs("div",{className:"flex flex-col w-full relative",children:[e.jsxs("div",{className:"feature-video-container",children:[e.jsx("div",{className:"overflow-hidden flex-1 h-[50vh]",children:e.jsx("img",{src:i,alt:"titanium",className:"feature-video g_grow"})}),e.jsx("div",{className:"overflow-hidden flex-1 h-[50vh]",children:e.jsx("img",{src:r,alt:"titanium 2",className:"feature-video g_grow"})})]}),e.jsxs("div",{className:"feature-text-container",children:[e.jsx("div",{className:"flex-1 flex-center",children:e.jsxs("p",{className:"feature-text g_text",children:["iPhone 15 Pro is "," ",e.jsx("span",{className:"text-white",children:"the first iPhone to feature an aerospace-grade titanium design"}),", using the same alloy that spacecrafts use for missions to Mars."]})}),e.jsx("div",{className:"flex-1 flex-center",children:e.jsxs("p",{className:"feature-text g_text",children:["Titanium has one of the best strength-to-weight ratios of any metal, making these our "," ",e.jsx("span",{className:"text-white",children:"lightest Pro models ever."}),"You'll notice the difference the moment you pick one up."]})})]})]})]})]})]})})};export{h as default};