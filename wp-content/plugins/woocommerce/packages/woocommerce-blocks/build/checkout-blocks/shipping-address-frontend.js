(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[51],{478:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(5),o=i.n(n),l=i(132),c=i(328),d=i(314),r=i(4),a=i(3),p=i(1),h=i(429),u=i(66),b=i(34),g=i(9),m=i(378),w=i(379),O=e=>{let{showCompanyField:t=!1,showApartmentField:i=!1,showPhoneField:n=!1,requireCompanyField:o=!1,requirePhoneField:l=!1}=e;const{defaultAddressFields:c,setShippingAddress:r,setBillingAddress:a,shippingAddress:O,setShippingPhone:j,useShippingAsBilling:F,setUseShippingAsBilling:f}=Object(d.a)(),{dispatchCheckoutEvent:k}=Object(u.a)(),{isEditor:C}=Object(b.a)(),[E,y]=Object(s.useState)(!1);Object(s.useEffect)(()=>{n||j("")},[n,j]),Object(s.useEffect)(()=>{E||(F&&a(O),y(!0))},[a,O,F]);const _=Object(s.useMemo)(()=>({company:{hidden:!t,required:o},address_2:{hidden:!i}}),[t,o,i]),S=C?m.a:s.Fragment;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(S,null,Object(s.createElement)(h.a,{id:"shipping",type:"shipping",onChange:e=>{r(e),F&&a(e),k("set-shipping-address")},values:O,fields:Object.keys(c),fieldConfig:_}),n&&Object(s.createElement)(w.a,{id:"shipping-phone",isRequired:l,value:O.phone,onChange:e=>{j(e),k("set-phone-number",{step:"shipping"})}})),Object(s.createElement)(g.CheckboxControl,{className:"wc-block-checkout__use-address-for-billing",label:Object(p.__)("Use same address for billing","woocommerce"),checked:F,onChange:e=>{f(e),e&&a(O)}}))},j=i(302),F={...Object(j.a)({defaultTitle:Object(p.__)("Shipping address","woocommerce"),defaultDescription:Object(p.__)("Enter the address where you want your order delivered.","woocommerce")}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}},f=i(151);t.default=Object(l.withFilteredAttributes)(F)(e=>{let{title:t,description:i,showStepNumber:n,children:l,className:p}=e;const h=Object(r.useSelect)(e=>e(a.CHECKOUT_STORE_KEY).isProcessing()),{showShippingFields:u}=Object(d.a)(),{requireCompanyField:b,requirePhoneField:g,showApartmentField:m,showCompanyField:w,showPhoneField:j}=Object(f.b)();return u?Object(s.createElement)(c.a,{id:"shipping-fields",disabled:h,className:o()("wc-block-checkout__shipping-fields",p),title:t,description:i,showStepNumber:n},Object(s.createElement)(O,{requireCompanyField:b,requirePhoneField:g,showApartmentField:m,showCompanyField:w,showPhoneField:j}),l):null})}}]);