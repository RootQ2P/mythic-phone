"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[9911,346,7965],{39911:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(55429),n=a(15647),l=a(44557),o=a(20346),s=a(44686),i=a(85220),c=a(32764),m=a(68209),u=a(45942),d=a(59530),A=a(23470),f=(0,u.A)((function(e){return{item:{borderBottom:"1px solid ".concat(e.palette.border.divider),"&:first-child":{borderTop:"1px solid ".concat(e.palette.border.divider)}},avatar:{backgroundColor:e.palette.primary.main},myself:{fontSize:14,color:e.palette.info.main,marginRight:5},owner:{fontSize:14,color:"gold",marginRight:5}}}));const v=function(e){var t=e.jobData,a=e.playerJob,u=e.employee,v=e.onClick,p=f(),I=(0,A.Bm)(),E=((0,A.T1)(),(0,n.d4)((function(e){return e.data.data.player}))),g=E.SID==(null==t?void 0:t.Owner),S=I("JOB_MANAGEMENT",t.Id)||g,w=I("JOB_MANAGE_EMPLOYEES",t.Id)||g,b=(I("JOB_HIRE",t.Id),I("JOB_FIRE",t.Id)||g);return r.createElement(l.Ay,{className:p.item,button:((null==t?void 0:t.Owner)!=u.SID||g)&&(a.Grade.Level>u.JobData.Grade.Level||g)&&(S||w||b),onClick:((null==t?void 0:t.Owner)!=u.SID||g)&&(a.Grade.Level>u.JobData.Grade.Level||g)&&(S||w||b)?function(){return v(u)}:null},r.createElement(o.A,null,r.createElement(s.A,{className:p.avatar},r.createElement(d.g,{icon:["fas","user"]}))),r.createElement(i.A,{primary:r.createElement("span",null,E.SID==u.SID?r.createElement(c.A,{title:"You"},r.createElement("span",null,r.createElement(d.g,{className:p.myself,icon:["fas","user"]}))):(null==t?void 0:t.Owner)==u.SID?r.createElement(c.A,{title:"Business Owner"},r.createElement("span",null,r.createElement(d.g,{className:p.owner,icon:["fas","crown"]}))):null,"".concat(u.First," ").concat(u.Last)),secondary:"".concat(u.JobData.Grade.Name," - ").concat(u.Phone)}),t.Owner!=u._id&&(a.Grade.Level>u.JobData.Grade.Level||g)&&(S||w||b)&&r.createElement(m.A,null,r.createElement(d.g,{icon:["fas","pen-to-square"]})))}},20346:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(86887),n=a(64180),l=a(55429),o=a(1551),s=a(50035),i=a(33505),c=a(94526),m=a(88594),u=a(35457);function d(e){return(0,u.A)("MuiListItemAvatar",e)}(0,a(40725).A)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var A=a(64922);const f=["className"],v=(0,c.Ay)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart]}})((({ownerState:e})=>(0,n.A)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8}))),p=l.forwardRef((function(e,t){const a=(0,m.A)({props:e,name:"MuiListItemAvatar"}),{className:c}=a,u=(0,r.A)(a,f),p=l.useContext(i.A),I=(0,n.A)({},a,{alignItems:p.alignItems}),E=(e=>{const{alignItems:t,classes:a}=e,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,s.A)(r,d,a)})(I);return(0,A.jsx)(v,(0,n.A)({className:(0,o.A)(E.root,c),ownerState:I,ref:t},u))}))}}]);