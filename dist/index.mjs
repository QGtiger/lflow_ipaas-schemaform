import { Form, Input, Tooltip, Drawer, Space, Button, InputNumber, Switch, Select, Modal } from 'antd';
import { forwardRef, useImperativeHandle, createContext, useContext, useMemo, useState, useEffect, useRef } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useUpdate, useBoolean, useDebounceFn, useReactive } from 'ahooks';
import { FormContext } from 'antd/es/form/context';
import Me from 'react-markdown';
import 'github-markdown-css';
import V from 'classnames';
import { DownOutlined, FullscreenOutlined } from '@ant-design/icons';
import se from '@monaco-editor/react';

var ue=Object.defineProperty,pe=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var G=(e,t,o)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))X.call(t,o)&&G(e,o,t[o]);if(E)for(var o of E(t))Y.call(t,o)&&G(e,o,t[o]);return e},v=(e,t)=>pe(e,fe(t));var h=(e,t)=>{var o={};for(var r in e)X.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&E)for(var r of E(e))t.indexOf(r)<0&&Y.call(e,r)&&(o[r]=e[r]);return o};function $(e){let t=createContext(void 0);function o({children:n,value:i}){let a=e(i!=null?i:{});return jsx(t.Provider,{value:a,children:n})}function r(){let n=useContext(t);if(n===void 0)throw new Error("useModel must be used within a Provider");return n}return {Provider:o,useModel:r}}function J(e){return !(e==null||e==="")}function A(e){useEffect(()=>{if(J(e.value))return;let t=e.defaultValue;J(t)&&e.onChange(t);},[]);}function W(e){return "Upload"}function P(e,t){let{editorMap:o}=u.useModel();return o[e]||t||o.Input}function R(e){let K=e,{depItems:t=[],name:o,isDynamic:r,dynamicScript:n,schemaInfo:i,defaultValue:a,options:l}=K,s=h(K,["depItems","name","isDynamic","dynamicScript","schemaInfo","defaultValue","options"]),{form:c}=useContext(FormContext),{dynamicScriptExcuteWithOptions:d}=u.useModel(),[S,g]=useState(l||[]),[F,k]=useBoolean(!1),x=P("InnerSelect",Select),{run:b,cancel:f}=useDebounceFn((C={[o]:""})=>{if(r){if(!d)return console.error("dynamicScriptExcuteWithOptions is not defined");k.setTrue(),d({script:n,extParams:C}).then(I=>{if(!Array.isArray(I))return console.error("dynamicScriptExcuteWithOptions return value is not an array");I.some(z=>z.value===e.value)||c.getFieldValue(e.name)&&e.onChange(void 0),g(I);}).finally(()=>{k.setFalse();});}},{wait:100});return useEffect(()=>{b();},[]),jsx(Form.Item,{shouldUpdate:(C,I)=>{if(!r||!t)return !1;let z=t.some(q=>C[q]!==I[q]);return z&&(f(),b()),z},noStyle:!0,children:()=>jsx(x,v(m({options:S,loading:F,filterOption:!1,allowClear:!0,onClear:()=>{b();},onSearch:C=>{b({[o]:C});},name:o},s),{showSearch:!0}))})}function Z(e,t){return new Function("value",`
    try {
      ${e}
      main(value)
      return [true]
    } catch (e) {
      return [false, e.message]
    }
  `)(t)}function ee(e){e=e.replace(/'/g,'"');let t=/<a\s+(?:[^>]*?\s+)?href="([^"]*)"(\s+title="([^"]*)")?([^>]*)?>(.*?)<\/a>/gi;return e.replace(t,(o,r,n,i,a,l)=>`[${i||l.trim()}](${r})`)}var ze=({href:e,children:t})=>jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:t}),Ee={placeholder:"\u8BF7\u8F93\u5165"};function Ne(e,t){return jsxs(Fragment,{children:[t,e]})}function De(e){let c=e,{formItemState:t}=c,o=h(c,["formItemState"]),{type:r,payload:n}=t,i=P(r),a=Object.assign({},Ee,n.editor.config),{editorLayoutWithDesc:l}=u.useModel();return jsx("div",{className:"relative",children:(l||Ne)(jsx("div",{className:"",children:jsx(i,m(m({name:n.code,schemaInfo:n},o),a))}),n.description&&jsx("div",{className:"desc text-[#888f9d] mb-2 text-xs",children:jsx(Me,{components:{a:ze},className:"markdown-body ",children:ee(n.description)})}))})}function N({formItemState:e}){let{payload:t,next:o}=e,r=useMemo(()=>{let n=e;if(!o||!n)return null;let i=[];for(i.unshift(n);n=n.parent;)i.unshift(n);let a=o(e,i);return a?jsx(N,{formItemState:a}):null},[e]);return jsxs(Fragment,{children:[jsx(Form.Item,{label:t.name,name:t.code,required:t.required,rules:[{validator(n,i){return new Promise((a,l)=>{let s="";if(t.required&&(i==null||i==="")&&(s="\u8BF7\u8F93\u5165"),t.validateRules){let[c,d="\u6821\u9A8C\u9519\u8BEF"]=Z(t.validateRules,i);c||(s=d);}s?l(new Error(s)):a();})}}],children:jsx(De,{formItemState:e})},t.code.toString()),r]})}function re(e){let{type:t,payload:o,next:r,parent:n}=e;return {type:t,payload:o,next:(a,l)=>{let s=r(a,l);return s?(s.parent=a,s):null},parent:n}}function Te(e,t){return new Function("context",`
    try {
      with(context) {
        return !!(${e});
      }
    } catch (e) {
      return false
    }
  `)(t)}function D(e,t,o){if(!e||o>=e.length)return null;let r=e[o];return r.visibleRules&&!Te(r.visibleRules,t)?D(e,t,o+1):re({type:r.editor.kind,payload:r,next:()=>D(e,t,o+1),parent:null})}function Be({subSchema:e,groupName:t}){let{form:o}=useContext(FormContext),r=o==null?void 0:o.getFieldsValue(),[n,i]=useBoolean(!0),a=D(e,r,0);return jsxs("div",{className:"flex flex-col",children:[t&&jsxs("div",{onClick:i.toggle,className:V("text-[14px] font-semibold flex justify-between cursor-pointer",n&&"mb-3"),children:[t,jsx(DownOutlined,{className:V(" transition-all duration-300",{"transform rotate-180":n})})]}),jsx("div",{className:V("overflow-hidden ",{"max-h-0":!n}),children:a&&jsx(N,{formItemState:a})})]})}function M({schema:e}){return useMemo(()=>{let o=new Map,r=[];return e.forEach(n=>{var a;let i=n.group||"";if(!o.has(i)){let l=[];o.set(i,l),r.push({groupName:i,subSchema:l});}(a=o.get(i))==null||a.push(n);}),r},[e]).map(o=>{let{groupName:r,subSchema:n}=o;return jsx(Be,{subSchema:n,groupName:r},r)})}function Le(e,t){let o=e;for(let r=0;r<t.length;r++){let n=t[r];if(!o[n]){o=void 0;break}o=o[n];}return o}function B(e,t){let o=t.split(".");return Le(e,o)}function j(e){let{depItems:t,dynamicScript:o,name:r,isDynamic:n,staticSubFields:i}=e,{dynamicScriptExcuteWithFormSchema:a}=u.useModel(),[l,s]=useBoolean(!1),[c,d]=useState(i||[]),{form:S}=useContext(FormContext),g=S.getFieldsValue(),F=useRef();useEffect(()=>{i&&d(i);},[i]);let{run:k}=useDebounceFn(()=>{if(n){if(!a)return console.error("dynamicScriptExcuteWithFormSchema is not defined");s.setTrue(),a({script:o||""}).then(x=>{if(!Array.isArray(x))return console.error("dynamicScriptExcuteWithFormSchema return value is not an array");let b=x.map(f=>(f.editor||(f.editor={kind:"Input",config:{}}),m({},f)));d(b);}).finally(()=>{s.setFalse();});}},{wait:100,trailing:!0});return useEffect(()=>{if(!F.current)k();else {if(!t)return;let x=F.current;t.some(f=>B(x,f)!==B(g,f))&&k();}F.current=g;}),jsx("div",{className:"p-3 bg-white",children:c.length?jsx(M,{schema:c}):jsx("div",{children:"\u6682\u65E0\u914D\u7F6E"})})}function _(e){return jsx(R,m({mode:"multiple",maxTagPlaceholder:t=>jsx(Tooltip,{overlayStyle:{pointerEvents:"none"},title:t.map(({label:o})=>o).join(", "),children:jsxs("span",{children:["+",t.length,"..."]})}),maxTagCount:"responsive"},e))}function H(e){let{value:t,onChange:o,language:r="javascript",width:n=700}=e,i=useReactive({open:!1,draftCode:""}),a=(c,d)=>{console.log(c,d);},l=()=>{i.open=!0,i.draftCode=t;},s=c=>{c||i.draftCode===t?(o(i.draftCode),i.open=!1):Modal.confirm({title:"\u63D0\u793A",content:"\u662F\u5426\u653E\u5F03\u4FEE\u6539\uFF1F",onOk(){i.open=!1;}});};return jsxs("div",{className:" relative group",style:{width:n||"100%"},children:[jsx(se,{value:t,onChange:c=>{o(c||"");},height:400,language:r,theme:"vs-dark",className:"pt-4 bg-[#1e1e1e]",options:{fontSize:12,scrollBeyondLastLine:!1,minimap:{enabled:!1},tabSize:2,lineNumbersMinChars:3},onMount:a}),jsx("div",{onClick:l,className:" transition-all opacity-0 group-hover:opacity-100 absolute cursor-pointer bottom-1 right-1 flex items-center justify-center w-[25px] h-[25px] bg-white rounded-sm",children:jsx(FullscreenOutlined,{})}),jsx(Drawer,{title:"\u4EE3\u7801\u7F16\u8F91\u5668",open:i.open,width:"calc(100% - 400px)",maskClosable:!1,closable:!1,zIndex:3e3,extra:jsxs(Space,{children:[jsx(Button,{onClick:()=>{s(!1);},children:"\u53D6\u6D88"}),jsx(Button,{onClick:()=>{s(!0);},type:"primary",children:"\u786E\u8BA4"})]}),children:jsx(se,{value:i.draftCode,onChange:c=>{i.draftCode=c||"";},height:"100%",language:r,theme:"vs-dark",className:"pt-4 bg-[#1e1e1e]",options:{fontSize:12,scrollBeyondLastLine:!1,tabSize:2,lineNumbersMinChars:3},onMount:a})})]})}function O(e){return function(t){let n=t,r=h(n,["schemaInfo"]);return A(t),jsx(e,m({},r))}}var u=$(e=>useMemo(()=>{let t=m({Input:O(Input),InputNumber:O(InputNumber),Textarea:O(Input.TextArea),Upload:W,PlainText:()=>jsx("div",{children:"PlainText"}),InputWithCopy:()=>jsx("div",{children:"InputWithCopy"}),Select:R,Switch:O(Switch),DateTimePicker:()=>jsx("div",{children:"DateTimePicker"}),DatePicker:()=>jsx("div",{children:"DatePicker"}),TimePicker:()=>jsx("div",{children:"TimePicker"}),MultiSelect:_,MultiList:()=>jsx("div",{children:"MultiList"}),DynamicForm:j,CodeEditor:H},e.editorMap);return v(m({},e),{editorMap:t})},[e.editorMap]));function st({schema:e}){return jsx(M,{schema:e})}var Xo=forwardRef((e,t)=>{let[o]=Form.useForm(),c=e,{schema:r,editorMap:n,dynamicScriptExcuteWithOptions:i,dynamicScriptExcuteWithFormSchema:a}=c,l=h(c,["schema","editorMap","dynamicScriptExcuteWithOptions","dynamicScriptExcuteWithFormSchema"]),s=useUpdate();return useImperativeHandle(t,()=>o,[o]),jsx(u.Provider,{value:e,children:jsx(Form,v(m({form:o,layout:"vertical",autoComplete:"off"},l),{onValuesChange:(d,S)=>{var g;(g=e.onValuesChange)==null||g.call(e,d,S),s();},children:jsx(st,{schema:r})}))})});

export { Xo as IPaasSchemaForm };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map