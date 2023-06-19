import{b as m4,R as Dt,c as Ws,r as Gn}from"./react-b7acef7a.js";import{g as qs,c as Ge,P as U}from"./google-6ac6e1d4.js";function p4(t){function e(_,C,I,V,p){for(var G=0,w=0,Q=0,j=0,Y,T,Z=0,ve=0,R,le=R=Y=0,q=0,ue=0,B=0,J=0,_e=I.length,ze=_e-1,X,x="",se="",We="",me="",He;q<_e;){if(T=I.charCodeAt(q),q===ze&&w+j+Q+G!==0&&(w!==0&&(T=w===47?10:47),j=Q=G=0,_e++,ze++),w+j+Q+G===0){if(q===ze&&(0<ue&&(x=x.replace(b,"")),0<x.trim().length)){switch(T){case 32:case 9:case 59:case 13:case 10:break;default:x+=I.charAt(q)}T=59}switch(T){case 123:for(x=x.trim(),Y=x.charCodeAt(0),R=1,J=++q;q<_e;){switch(T=I.charCodeAt(q)){case 123:R++;break;case 125:R--;break;case 47:switch(T=I.charCodeAt(q+1)){case 42:case 47:e:{for(le=q+1;le<ze;++le)switch(I.charCodeAt(le)){case 47:if(T===42&&I.charCodeAt(le-1)===42&&q+2!==le){q=le+1;break e}break;case 10:if(T===47){q=le+1;break e}}q=le}}break;case 91:T++;case 40:T++;case 34:case 39:for(;q++<ze&&I.charCodeAt(q)!==T;);}if(R===0)break;q++}switch(R=I.substring(J,q),Y===0&&(Y=(x=x.replace(v,"").trim()).charCodeAt(0)),Y){case 64:switch(0<ue&&(x=x.replace(b,"")),T=x.charCodeAt(1),T){case 100:case 109:case 115:case 45:ue=C;break;default:ue=Ve}if(R=e(C,ue,R,T,p+1),J=R.length,0<ie&&(ue=n(Ve,x,B),He=f(3,R,ue,C,ke,be,J,T,p,V),x=ue.join(""),He!==void 0&&(J=(R=He.trim()).length)===0&&(T=0,R="")),0<J)switch(T){case 115:x=x.replace(re,c);case 100:case 109:case 45:R=x+"{"+R+"}";break;case 107:x=x.replace(z,"$1 $2"),R=x+"{"+R+"}",R=he===1||he===2&&o("@"+R,3)?"@-webkit-"+R+"@"+R:"@"+R;break;default:R=x+R,V===112&&(R=(se+=R,""))}else R="";break;default:R=e(C,n(C,x,B),R,V,p+1)}We+=R,R=B=ue=le=Y=0,x="",T=I.charCodeAt(++q);break;case 125:case 59:if(x=(0<ue?x.replace(b,""):x).trim(),1<(J=x.length))switch(le===0&&(Y=x.charCodeAt(0),Y===45||96<Y&&123>Y)&&(J=(x=x.replace(" ",":")).length),0<ie&&(He=f(1,x,C,_,ke,be,se.length,V,p,V))!==void 0&&(J=(x=He.trim()).length)===0&&(x="\0\0"),Y=x.charCodeAt(0),T=x.charCodeAt(1),Y){case 0:break;case 64:if(T===105||T===99){me+=x+I.charAt(q);break}default:x.charCodeAt(J-1)!==58&&(se+=a(x,Y,T,x.charCodeAt(2)))}B=ue=le=Y=0,x="",T=I.charCodeAt(++q)}}switch(T){case 13:case 10:w===47?w=0:1+Y===0&&V!==107&&0<x.length&&(ue=1,x+="\0"),0<ie*Ce&&f(0,x,C,_,ke,be,se.length,V,p,V),be=1,ke++;break;case 59:case 125:if(w+j+Q+G===0){be++;break}default:switch(be++,X=I.charAt(q),T){case 9:case 32:if(j+G+w===0)switch(Z){case 44:case 58:case 9:case 32:X="";break;default:T!==32&&(X=" ")}break;case 0:X="\\0";break;case 12:X="\\f";break;case 11:X="\\v";break;case 38:j+w+G===0&&(ue=B=1,X="\f"+X);break;case 108:if(j+w+G+ye===0&&0<le)switch(q-le){case 2:Z===112&&I.charCodeAt(q-3)===58&&(ye=Z);case 8:ve===111&&(ye=ve)}break;case 58:j+w+G===0&&(le=q);break;case 44:w+Q+j+G===0&&(ue=1,X+="\r");break;case 34:case 39:w===0&&(j=j===T?0:j===0?T:j);break;case 91:j+w+Q===0&&G++;break;case 93:j+w+Q===0&&G--;break;case 41:j+w+G===0&&Q--;break;case 40:if(j+w+G===0){if(Y===0)switch(2*Z+3*ve){case 533:break;default:Y=1}Q++}break;case 64:w+Q+j+G+le+R===0&&(R=1);break;case 42:case 47:if(!(0<j+G+Q))switch(w){case 0:switch(2*T+3*I.charCodeAt(q+1)){case 235:w=47;break;case 220:J=q,w=42}break;case 42:T===47&&Z===42&&J+2!==q&&(I.charCodeAt(J+2)===33&&(se+=I.substring(J,q+1)),X="",w=0)}}w===0&&(x+=X)}ve=Z,Z=T,q++}if(J=se.length,0<J){if(ue=C,0<ie&&(He=f(2,se,ue,_,ke,be,J,V,p,V),He!==void 0&&(se=He).length===0))return me+se+We;if(se=ue.join(",")+"{"+se+"}",he*ye!==0){switch(he!==2||o(se,2)||(ye=0),ye){case 111:se=se.replace(D,":-moz-$1")+se;break;case 112:se=se.replace(P,"::-webkit-input-$1")+se.replace(P,"::-moz-$1")+se.replace(P,":-ms-input-$1")+se}ye=0}}return me+se+We}function n(_,C,I){var V=C.trim().split(k);C=V;var p=V.length,G=_.length;switch(G){case 0:case 1:var w=0;for(_=G===0?"":_[0]+" ";w<p;++w)C[w]=r(_,C[w],I).trim();break;default:var Q=w=0;for(C=[];w<p;++w)for(var j=0;j<G;++j)C[Q++]=r(_[j]+" ",V[w],I).trim()}return C}function r(_,C,I){var V=C.charCodeAt(0);switch(33>V&&(V=(C=C.trim()).charCodeAt(0)),V){case 38:return C.replace(N,"$1"+_.trim());case 58:return _.trim()+C.replace(N,"$1"+_.trim());default:if(0<1*I&&0<C.indexOf("\f"))return C.replace(N,(_.charCodeAt(0)===58?"":"$1")+_.trim())}return _+C}function a(_,C,I,V){var p=_+";",G=2*C+3*I+4*V;if(G===944){_=p.indexOf(":",9)+1;var w=p.substring(_,p.length-1).trim();return w=p.substring(0,_).trim()+w+";",he===1||he===2&&o(w,1)?"-webkit-"+w+w:w}if(he===0||he===2&&!o(p,1))return p;switch(G){case 1015:return p.charCodeAt(10)===97?"-webkit-"+p+p:p;case 951:return p.charCodeAt(3)===116?"-webkit-"+p+p:p;case 963:return p.charCodeAt(5)===110?"-webkit-"+p+p:p;case 1009:if(p.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+p+p;case 978:return"-webkit-"+p+"-moz-"+p+p;case 1019:case 983:return"-webkit-"+p+"-moz-"+p+"-ms-"+p+p;case 883:if(p.charCodeAt(8)===45)return"-webkit-"+p+p;if(0<p.indexOf("image-set(",11))return p.replace(xe,"$1-webkit-$2")+p;break;case 932:if(p.charCodeAt(4)===45)switch(p.charCodeAt(5)){case 103:return"-webkit-box-"+p.replace("-grow","")+"-webkit-"+p+"-ms-"+p.replace("grow","positive")+p;case 115:return"-webkit-"+p+"-ms-"+p.replace("shrink","negative")+p;case 98:return"-webkit-"+p+"-ms-"+p.replace("basis","preferred-size")+p}return"-webkit-"+p+"-ms-"+p+p;case 964:return"-webkit-"+p+"-ms-flex-"+p+p;case 1023:if(p.charCodeAt(8)!==99)break;return w=p.substring(p.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+w+"-webkit-"+p+"-ms-flex-pack"+w+p;case 1005:return y.test(p)?p.replace(S,":-webkit-")+p.replace(S,":-moz-")+p:p;case 1e3:switch(w=p.substring(13).trim(),C=w.indexOf("-")+1,w.charCodeAt(0)+w.charCodeAt(C)){case 226:w=p.replace(L,"tb");break;case 232:w=p.replace(L,"tb-rl");break;case 220:w=p.replace(L,"lr");break;default:return p}return"-webkit-"+p+"-ms-"+w+p;case 1017:if(p.indexOf("sticky",9)===-1)break;case 975:switch(C=(p=_).length-10,w=(p.charCodeAt(C)===33?p.substring(0,C):p).substring(_.indexOf(":",7)+1).trim(),G=w.charCodeAt(0)+(w.charCodeAt(7)|0)){case 203:if(111>w.charCodeAt(8))break;case 115:p=p.replace(w,"-webkit-"+w)+";"+p;break;case 207:case 102:p=p.replace(w,"-webkit-"+(102<G?"inline-":"")+"box")+";"+p.replace(w,"-webkit-"+w)+";"+p.replace(w,"-ms-"+w+"box")+";"+p}return p+";";case 938:if(p.charCodeAt(5)===45)switch(p.charCodeAt(6)){case 105:return w=p.replace("-items",""),"-webkit-"+p+"-webkit-box-"+w+"-ms-flex-"+w+p;case 115:return"-webkit-"+p+"-ms-flex-item-"+p.replace(ae,"")+p;default:return"-webkit-"+p+"-ms-flex-line-pack"+p.replace("align-content","").replace(ae,"")+p}break;case 973:case 989:if(p.charCodeAt(3)!==45||p.charCodeAt(4)===122)break;case 931:case 953:if(F.test(_)===!0)return(w=_.substring(_.indexOf(":")+1)).charCodeAt(0)===115?a(_.replace("stretch","fill-available"),C,I,V).replace(":fill-available",":stretch"):p.replace(w,"-webkit-"+w)+p.replace(w,"-moz-"+w.replace("fill-",""))+p;break;case 962:if(p="-webkit-"+p+(p.charCodeAt(5)===102?"-ms-"+p:"")+p,I+V===211&&p.charCodeAt(13)===105&&0<p.indexOf("transform",10))return p.substring(0,p.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+p}return p}function o(_,C){var I=_.indexOf(C===1?":":"{"),V=_.substring(0,C!==3?I:10);return I=_.substring(I+1,_.length-1),Se(C!==2?V:V.replace($,"$1"),I,C)}function c(_,C){var I=a(C,C.charCodeAt(0),C.charCodeAt(1),C.charCodeAt(2));return I!==C+";"?I.replace(W," or ($1)").substring(4):"("+C+")"}function f(_,C,I,V,p,G,w,Q,j,Y){for(var T=0,Z=C,ve;T<ie;++T)switch(ve=ge[T].call(m,_,Z,I,V,p,G,w,Q,j,Y)){case void 0:case!1:case!0:case null:break;default:Z=ve}if(Z!==C)return Z}function h(_){switch(_){case void 0:case null:ie=ge.length=0;break;default:if(typeof _=="function")ge[ie++]=_;else if(typeof _=="object")for(var C=0,I=_.length;C<I;++C)h(_[C]);else Ce=!!_|0}return h}function u(_){return _=_.prefix,_!==void 0&&(Se=null,_?typeof _!="function"?he=1:(he=2,Se=_):he=0),u}function m(_,C){var I=_;if(33>I.charCodeAt(0)&&(I=I.trim()),lt=I,I=[lt],0<ie){var V=f(-1,C,I,I,ke,be,0,0,0,0);V!==void 0&&typeof V=="string"&&(C=V)}var p=e(Ve,I,C,0,0);return 0<ie&&(V=f(-2,p,I,I,ke,be,p.length,0,0,0),V!==void 0&&(p=V)),lt="",ye=0,be=ke=1,p}var v=/^\0+/g,b=/[\0\r\f]/g,S=/: */g,y=/zoo|gra/,E=/([,: ])(transform)/g,k=/,\r+?/g,N=/([\t\r\n ])*\f?&/g,z=/@(k\w+)\s*(\S*)\s*/,P=/::(place)/g,D=/:(read-only)/g,L=/[svh]\w+-[tblr]{2}/,re=/\(\s*(.*)\s*\)/g,W=/([\s\S]*?);/g,ae=/-self|flex-/g,$=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,xe=/([^-])(image-set\()/,be=1,ke=1,ye=0,he=1,Ve=[],ge=[],ie=0,Se=null,Ce=0,lt="";return m.use=h,m.set=u,t!==void 0&&u(t),m}var g4={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function v4(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var w4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Vi=v4(function(t){return w4.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),ha=m4,b4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},y4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C4={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gs={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ma={};ma[ha.ForwardRef]=C4;ma[ha.Memo]=Gs;function Ni(t){return ha.isMemo(t)?Gs:ma[t.$$typeof]||b4}var k4=Object.defineProperty,A4=Object.getOwnPropertyNames,Ri=Object.getOwnPropertySymbols,S4=Object.getOwnPropertyDescriptor,_4=Object.getPrototypeOf,Di=Object.prototype;function Ys(t,e,n){if(typeof e!="string"){if(Di){var r=_4(e);r&&r!==Di&&Ys(t,r,n)}var a=A4(e);Ri&&(a=a.concat(Ri(e)));for(var o=Ni(t),c=Ni(e),f=0;f<a.length;++f){var h=a[f];if(!y4[h]&&!(n&&n[h])&&!(c&&c[h])&&!(o&&o[h])){var u=S4(e,h);try{k4(t,h,u)}catch{}}}}return t}var I4=Ys;const x4=qs(I4);function Ne(){return(Ne=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Fi=function(t,e){for(var n=[t[0]],r=0,a=e.length;r<a;r+=1)n.push(e[r],t[r+1]);return n},Br=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Ws.typeOf(t)},Yn=Object.freeze([]),tt=Object.freeze({});function en(t){return typeof t=="function"}function Bi(t){return t.displayName||t.name||"Component"}function pa(t){return t&&typeof t.styledComponentId=="string"}var Ot=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ga=typeof window<"u"&&"HTMLElement"in window,z4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY);function dn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var M4=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,a=0;a<n;a++)r+=this.groupSizes[a];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,c=o;n>=c;)(c<<=1)<0&&dn(16,""+n);this.groupSizes=new Uint32Array(c),this.groupSizes.set(a),this.length=c;for(var f=o;f<c;f++)this.groupSizes[f]=0}for(var h=this.indexOfGroup(n+1),u=0,m=r.length;u<m;u++)this.tag.insertRule(h,r[u])&&(this.groupSizes[n]++,h++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],a=this.indexOfGroup(n),o=a+r;this.groupSizes[n]=0;for(var c=a;c<o;c++)this.tag.deleteRule(a)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var a=this.groupSizes[n],o=this.indexOfGroup(n),c=o+a,f=o;f<c;f++)r+=this.tag.getRule(f)+`/*!sc*/
`;return r},t}(),Fn=new Map,Kn=new Map,Xt=1,zn=function(t){if(Fn.has(t))return Fn.get(t);for(;Kn.has(Xt);)Xt++;var e=Xt++;return Fn.set(t,e),Kn.set(e,t),e},E4=function(t){return Kn.get(t)},T4=function(t,e){e>=Xt&&(Xt=e+1),Fn.set(t,e),Kn.set(e,t)},H4="style["+Ot+'][data-styled-version="5.3.6"]',L4=new RegExp("^"+Ot+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),P4=function(t,e,n){for(var r,a=n.split(","),o=0,c=a.length;o<c;o++)(r=a[o])&&t.registerName(e,r)},O4=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],a=0,o=n.length;a<o;a++){var c=n[a].trim();if(c){var f=c.match(L4);if(f){var h=0|parseInt(f[1],10),u=f[2];h!==0&&(T4(u,h),P4(t,u,f[3]),t.getTag().insertRules(h,r)),r.length=0}else r.push(c)}}},V4=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Ks=function(t){var e=document.head,n=t||e,r=document.createElement("style"),a=function(f){for(var h=f.childNodes,u=h.length;u>=0;u--){var m=h[u];if(m&&m.nodeType===1&&m.hasAttribute(Ot))return m}}(n),o=a!==void 0?a.nextSibling:null;r.setAttribute(Ot,"active"),r.setAttribute("data-styled-version","5.3.6");var c=V4();return c&&r.setAttribute("nonce",c),n.insertBefore(r,o),r},N4=function(){function t(n){var r=this.element=Ks(n);r.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var o=document.styleSheets,c=0,f=o.length;c<f;c++){var h=o[c];if(h.ownerNode===a)return h}dn(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),R4=function(){function t(n){var r=this.element=Ks(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var a=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(a,o||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),D4=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),$i=ga,F4={isServer:!ga,useCSSOMInjection:!z4},Xs=function(){function t(n,r,a){n===void 0&&(n=tt),r===void 0&&(r={}),this.options=Ne({},F4,{},n),this.gs=r,this.names=new Map(a),this.server=!!n.isServer,!this.server&&ga&&$i&&($i=!1,function(o){for(var c=document.querySelectorAll(H4),f=0,h=c.length;f<h;f++){var u=c[f];u&&u.getAttribute(Ot)!=="active"&&(O4(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return zn(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Ne({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(a=(r=this.options).isServer,o=r.useCSSOMInjection,c=r.target,n=a?new D4(c):o?new N4(c):new R4(c),new M4(n)));var n,r,a,o,c},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(zn(n),this.names.has(n))this.names.get(n).add(r);else{var a=new Set;a.add(r),this.names.set(n,a)}},e.insertRules=function(n,r,a){this.registerName(n,r),this.getTag().insertRules(zn(n),a)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(zn(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),a=r.length,o="",c=0;c<a;c++){var f=E4(c);if(f!==void 0){var h=n.names.get(f),u=r.getGroup(c);if(h&&u&&h.size){var m=Ot+".g"+c+'[id="'+f+'"]',v="";h!==void 0&&h.forEach(function(b){b.length>0&&(v+=b+",")}),o+=""+u+m+'{content:"'+v+`"}/*!sc*/
`}}}return o}(this)},t}(),B4=/(a)(d)/gi,Ui=function(t){return String.fromCharCode(t+(t>25?39:97))};function $r(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Ui(e%52)+n;return(Ui(e%52)+n).replace(B4,"$1-$2")}var xt=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Js=function(t){return xt(5381,t)};function $4(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(en(n)&&!pa(n))return!1}return!0}var U4=Js("5.3.6"),j4=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$4(e),this.componentId=n,this.baseHash=xt(U4,n),this.baseStyle=r,Xs.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var a=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))o.push(this.staticRulesId);else{var c=Vt(this.rules,e,n,r).join(""),f=$r(xt(this.baseHash,c)>>>0);if(!n.hasNameForId(a,f)){var h=r(c,"."+f,void 0,a);n.insertRules(a,f,h)}o.push(f),this.staticRulesId=f}else{for(var u=this.rules.length,m=xt(this.baseHash,r.hash),v="",b=0;b<u;b++){var S=this.rules[b];if(typeof S=="string")v+=S;else if(S){var y=Vt(S,e,n,r),E=Array.isArray(y)?y.join(""):y;m=xt(m,E+b),v+=E}}if(v){var k=$r(m>>>0);if(!n.hasNameForId(a,k)){var N=r(v,"."+k,void 0,a);n.insertRules(a,k,N)}o.push(k)}}return o.join(" ")},t}(),W4=/^\s*\/\/.*$/gm,q4=[":","[",".","#"];function G4(t){var e,n,r,a,o=t===void 0?tt:t,c=o.options,f=c===void 0?tt:c,h=o.plugins,u=h===void 0?Yn:h,m=new p4(f),v=[],b=function(E){function k(N){if(N)try{E(N+"}")}catch{}}return function(N,z,P,D,L,re,W,ae,$,F){switch(N){case 1:if($===0&&z.charCodeAt(0)===64)return E(z+";"),"";break;case 2:if(ae===0)return z+"/*|*/";break;case 3:switch(ae){case 102:case 112:return E(P[0]+z),"";default:return z+(F===0?"/*|*/":"")}case-2:z.split("/*|*/}").forEach(k)}}}(function(E){v.push(E)}),S=function(E,k,N){return k===0&&q4.indexOf(N[n.length])!==-1||N.match(a)?E:"."+e};function y(E,k,N,z){z===void 0&&(z="&");var P=E.replace(W4,""),D=k&&N?N+" "+k+" { "+P+" }":P;return e=z,n=k,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),m(N||!k?"":k,D)}return m.use([].concat(u,[function(E,k,N){E===2&&N.length&&N[0].lastIndexOf(n)>0&&(N[0]=N[0].replace(r,S))},b,function(E){if(E===-2){var k=v;return v=[],k}}])),y.hash=u.length?u.reduce(function(E,k){return k.name||dn(15),xt(E,k.name)},5381).toString():"",y}var Zs=Dt.createContext();Zs.Consumer;var Qs=Dt.createContext(),Y4=(Qs.Consumer,new Xs),Ur=G4();function K4(){return Gn.useContext(Zs)||Y4}function X4(){return Gn.useContext(Qs)||Ur}var J4=function(){function t(e,n){var r=this;this.inject=function(a,o){o===void 0&&(o=Ur);var c=r.name+o.hash;a.hasNameForId(r.id,c)||a.insertRules(r.id,c,o(r.rules,c,"@keyframes"))},this.toString=function(){return dn(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Ur),this.name+e.hash},t}(),Z4=/([A-Z])/,Q4=/([A-Z])/g,e0=/^ms-/,t0=function(t){return"-"+t.toLowerCase()};function ji(t){return Z4.test(t)?t.replace(Q4,t0).replace(e0,"-ms-"):t}var Wi=function(t){return t==null||t===!1||t===""};function Vt(t,e,n,r){if(Array.isArray(t)){for(var a,o=[],c=0,f=t.length;c<f;c+=1)(a=Vt(t[c],e,n,r))!==""&&(Array.isArray(a)?o.push.apply(o,a):o.push(a));return o}if(Wi(t))return"";if(pa(t))return"."+t.styledComponentId;if(en(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var h=t(e);return Vt(h,e,n,r)}var u;return t instanceof J4?n?(t.inject(n,r),t.getName(r)):t:Br(t)?function m(v,b){var S,y,E=[];for(var k in v)v.hasOwnProperty(k)&&!Wi(v[k])&&(Array.isArray(v[k])&&v[k].isCss||en(v[k])?E.push(ji(k)+":",v[k],";"):Br(v[k])?E.push.apply(E,m(v[k],k)):E.push(ji(k)+": "+(S=k,(y=v[k])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||S in g4?String(y).trim():y+"px")+";"));return b?[b+" {"].concat(E,["}"]):E}(t):t.toString()}var qi=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function n0(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return en(t)||Br(t)?qi(Vt(Fi(Yn,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:qi(Vt(Fi(t,n)))}var r0=function(t,e,n){return n===void 0&&(n=tt),t.theme!==n.theme&&t.theme||e||n.theme},a0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,i0=/(^-|-$)/g;function xr(t){return t.replace(a0,"-").replace(i0,"")}var s0=function(t){return $r(Js(t)>>>0)};function Mn(t){return typeof t=="string"&&!0}var jr=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},o0=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function c0(t,e,n){var r=t[n];jr(e)&&jr(r)?eo(r,e):t[n]=e}function eo(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var a=0,o=n;a<o.length;a++){var c=o[a];if(jr(c))for(var f in c)o0(f)&&c0(t,c[f],f)}return t}var to=Dt.createContext();to.Consumer;var zr={};function no(t,e,n){var r=pa(t),a=!Mn(t),o=e.attrs,c=o===void 0?Yn:o,f=e.componentId,h=f===void 0?function(z,P){var D=typeof z!="string"?"sc":xr(z);zr[D]=(zr[D]||0)+1;var L=D+"-"+s0("5.3.6"+D+zr[D]);return P?P+"-"+L:L}(e.displayName,e.parentComponentId):f,u=e.displayName,m=u===void 0?function(z){return Mn(z)?"styled."+z:"Styled("+Bi(z)+")"}(t):u,v=e.displayName&&e.componentId?xr(e.displayName)+"-"+e.componentId:e.componentId||h,b=r&&t.attrs?Array.prototype.concat(t.attrs,c).filter(Boolean):c,S=e.shouldForwardProp;r&&t.shouldForwardProp&&(S=e.shouldForwardProp?function(z,P,D){return t.shouldForwardProp(z,P,D)&&e.shouldForwardProp(z,P,D)}:t.shouldForwardProp);var y,E=new j4(n,v,r?t.componentStyle:void 0),k=E.isStatic&&c.length===0,N=function(z,P){return function(D,L,re,W){var ae=D.attrs,$=D.componentStyle,F=D.defaultProps,xe=D.foldedComponentIds,be=D.shouldForwardProp,ke=D.styledComponentId,ye=D.target,he=function(V,p,G){V===void 0&&(V=tt);var w=Ne({},p,{theme:V}),Q={};return G.forEach(function(j){var Y,T,Z,ve=j;for(Y in en(ve)&&(ve=ve(w)),ve)w[Y]=Q[Y]=Y==="className"?(T=Q[Y],Z=ve[Y],T&&Z?T+" "+Z:T||Z):ve[Y]}),[w,Q]}(r0(L,Gn.useContext(to),F)||tt,L,ae),Ve=he[0],ge=he[1],ie=function(V,p,G,w){var Q=K4(),j=X4(),Y=p?V.generateAndInjectStyles(tt,Q,j):V.generateAndInjectStyles(G,Q,j);return Y}($,W,Ve),Se=re,Ce=ge.$as||L.$as||ge.as||L.as||ye,lt=Mn(Ce),_=ge!==L?Ne({},L,{},ge):L,C={};for(var I in _)I[0]!=="$"&&I!=="as"&&(I==="forwardedAs"?C.as=_[I]:(be?be(I,Vi,Ce):!lt||Vi(I))&&(C[I]=_[I]));return L.style&&ge.style!==L.style&&(C.style=Ne({},L.style,{},ge.style)),C.className=Array.prototype.concat(xe,ke,ie!==ke?ie:null,L.className,ge.className).filter(Boolean).join(" "),C.ref=Se,Gn.createElement(Ce,C)}(y,z,P,k)};return N.displayName=m,(y=Dt.forwardRef(N)).attrs=b,y.componentStyle=E,y.displayName=m,y.shouldForwardProp=S,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Yn,y.styledComponentId=v,y.target=r?t.target:t,y.withComponent=function(z){var P=e.componentId,D=function(re,W){if(re==null)return{};var ae,$,F={},xe=Object.keys(re);for($=0;$<xe.length;$++)ae=xe[$],W.indexOf(ae)>=0||(F[ae]=re[ae]);return F}(e,["componentId"]),L=P&&P+"-"+(Mn(z)?z:xr(Bi(z)));return no(z,Ne({},D,{attrs:b,componentId:L}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=r?eo({},t.defaultProps,z):z}}),y.toString=function(){return"."+y.styledComponentId},a&&x4(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Wr=function(t){return function e(n,r,a){if(a===void 0&&(a=tt),!Ws.isValidElementType(r))return dn(1,String(r));var o=function(){return n(r,a,n0.apply(void 0,arguments))};return o.withConfig=function(c){return e(n,r,Ne({},a,{},c))},o.attrs=function(c){return e(n,r,Ne({},a,{attrs:Array.prototype.concat(a.attrs,c).filter(Boolean)}))},o}(no,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Wr[t]=Wr(t)});const W7=Wr;var ro={exports:{}};/*!
* sweetalert2 v11.7.12
* Released under the MIT License.
*/(function(t,e){(function(n,r){t.exports=r()})(Ge,function(){const r={},a=()=>{r.previousActiveElement instanceof HTMLElement?(r.previousActiveElement.focus(),r.previousActiveElement=null):document.body&&document.body.focus()},o=i=>new Promise(s=>{if(!i)return s();const l=window.scrollX,d=window.scrollY;r.restoreFocusTimeout=setTimeout(()=>{a(),s()},100),window.scrollTo(l,d)});var c={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const f="swal2-",u=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((i,s)=>(i[s]=f+s,i),{}),v=["success","warning","info","question","error"].reduce((i,s)=>(i[s]=f+s,i),{}),b="SweetAlert2:",S=i=>i.charAt(0).toUpperCase()+i.slice(1),y=i=>{console.warn(`${b} ${typeof i=="object"?i.join(" "):i}`)},E=i=>{console.error(`${b} ${i}`)},k=[],N=i=>{k.includes(i)||(k.push(i),y(i))},z=(i,s)=>{N(`"${i}" is deprecated and will be removed in the next major release. Please use "${s}" instead.`)},P=i=>typeof i=="function"?i():i,D=i=>i&&typeof i.toPromise=="function",L=i=>D(i)?i.toPromise():Promise.resolve(i),re=i=>i&&Promise.resolve(i)===i,W=()=>document.body.querySelector(`.${u.container}`),ae=i=>{const s=W();return s?s.querySelector(i):null},$=i=>ae(`.${i}`),F=()=>$(u.popup),xe=()=>$(u.icon),be=()=>$(u["icon-content"]),ke=()=>$(u.title),ye=()=>$(u["html-container"]),he=()=>$(u.image),Ve=()=>$(u["progress-steps"]),ge=()=>$(u["validation-message"]),ie=()=>ae(`.${u.actions} .${u.confirm}`),Se=()=>ae(`.${u.actions} .${u.cancel}`),Ce=()=>ae(`.${u.actions} .${u.deny}`),lt=()=>$(u["input-label"]),_=()=>ae(`.${u.loader}`),C=()=>$(u.actions),I=()=>$(u.footer),V=()=>$(u["timer-progress-bar"]),p=()=>$(u.close),G=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,w=()=>{const i=F().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),s=Array.from(i).sort((g,H)=>{const K=parseInt(g.getAttribute("tabindex")),fe=parseInt(H.getAttribute("tabindex"));return K>fe?1:K<fe?-1:0}),l=F().querySelectorAll(G),d=Array.from(l).filter(g=>g.getAttribute("tabindex")!=="-1");return[...new Set(s.concat(d))].filter(g=>me(g))},Q=()=>Z(document.body,u.shown)&&!Z(document.body,u["toast-shown"])&&!Z(document.body,u["no-backdrop"]),j=()=>F()&&Z(F(),u.toast),Y=()=>F().hasAttribute("data-loading"),T=(i,s)=>{if(i.textContent="",s){const d=new DOMParser().parseFromString(s,"text/html");Array.from(d.querySelector("head").childNodes).forEach(g=>{i.appendChild(g)}),Array.from(d.querySelector("body").childNodes).forEach(g=>{g instanceof HTMLVideoElement||g instanceof HTMLAudioElement?i.appendChild(g.cloneNode(!0)):i.appendChild(g)})}},Z=(i,s)=>{if(!s)return!1;const l=s.split(/\s+/);for(let d=0;d<l.length;d++)if(!i.classList.contains(l[d]))return!1;return!0},ve=(i,s)=>{Array.from(i.classList).forEach(l=>{!Object.values(u).includes(l)&&!Object.values(v).includes(l)&&!Object.values(s.showClass).includes(l)&&i.classList.remove(l)})},R=(i,s,l)=>{if(ve(i,s),s.customClass&&s.customClass[l]){if(typeof s.customClass[l]!="string"&&!s.customClass[l].forEach){y(`Invalid type of customClass.${l}! Expected string or iterable object, got "${typeof s.customClass[l]}"`);return}B(i,s.customClass[l])}},le=(i,s)=>{if(!s)return null;switch(s){case"select":case"textarea":case"file":return i.querySelector(`.${u.popup} > .${u[s]}`);case"checkbox":return i.querySelector(`.${u.popup} > .${u.checkbox} input`);case"radio":return i.querySelector(`.${u.popup} > .${u.radio} input:checked`)||i.querySelector(`.${u.popup} > .${u.radio} input:first-child`);case"range":return i.querySelector(`.${u.popup} > .${u.range} input`);default:return i.querySelector(`.${u.popup} > .${u.input}`)}},q=i=>{if(i.focus(),i.type!=="file"){const s=i.value;i.value="",i.value=s}},ue=(i,s,l)=>{!i||!s||(typeof s=="string"&&(s=s.split(/\s+/).filter(Boolean)),s.forEach(d=>{Array.isArray(i)?i.forEach(g=>{l?g.classList.add(d):g.classList.remove(d)}):l?i.classList.add(d):i.classList.remove(d)}))},B=(i,s)=>{ue(i,s,!0)},J=(i,s)=>{ue(i,s,!1)},_e=(i,s)=>{const l=Array.from(i.children);for(let d=0;d<l.length;d++){const g=l[d];if(g instanceof HTMLElement&&Z(g,s))return g}},ze=(i,s,l)=>{l===`${parseInt(l)}`&&(l=parseInt(l)),l||parseInt(l)===0?i.style[s]=typeof l=="number"?`${l}px`:l:i.style.removeProperty(s)},X=function(i){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";i&&(i.style.display=s)},x=i=>{i&&(i.style.display="none")},se=(i,s,l,d)=>{const g=i.querySelector(s);g&&(g.style[l]=d)},We=function(i,s){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";s?X(i,l):x(i)},me=i=>!!(i&&(i.offsetWidth||i.offsetHeight||i.getClientRects().length)),He=()=>!me(ie())&&!me(Ce())&&!me(Se()),Ya=i=>i.scrollHeight>i.clientHeight,Ka=i=>{const s=window.getComputedStyle(i),l=parseFloat(s.getPropertyValue("animation-duration")||"0"),d=parseFloat(s.getPropertyValue("transition-duration")||"0");return l>0||d>0},gr=function(i){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const l=V();me(l)&&(s&&(l.style.transition="none",l.style.width="100%"),setTimeout(()=>{l.style.transition=`width ${i/1e3}s linear`,l.style.width="0%"},10))},G1=()=>{const i=V(),s=parseInt(window.getComputedStyle(i).width);i.style.removeProperty("transition"),i.style.width="100%";const l=parseInt(window.getComputedStyle(i).width),d=s/l*100;i.style.width=`${d}%`},Xa=()=>typeof window>"u"||typeof document>"u",Y1=`
 <div aria-labelledby="${u.title}" aria-describedby="${u["html-container"]}" class="${u.popup}" tabindex="-1">
   <button type="button" class="${u.close}"></button>
   <ul class="${u["progress-steps"]}"></ul>
   <div class="${u.icon}"></div>
   <img class="${u.image}" />
   <h2 class="${u.title}" id="${u.title}"></h2>
   <div class="${u["html-container"]}" id="${u["html-container"]}"></div>
   <input class="${u.input}" />
   <input type="file" class="${u.file}" />
   <div class="${u.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${u.select}"></select>
   <div class="${u.radio}"></div>
   <label for="${u.checkbox}" class="${u.checkbox}">
     <input type="checkbox" />
     <span class="${u.label}"></span>
   </label>
   <textarea class="${u.textarea}"></textarea>
   <div class="${u["validation-message"]}" id="${u["validation-message"]}"></div>
   <div class="${u.actions}">
     <div class="${u.loader}"></div>
     <button type="button" class="${u.confirm}"></button>
     <button type="button" class="${u.deny}"></button>
     <button type="button" class="${u.cancel}"></button>
   </div>
   <div class="${u.footer}"></div>
   <div class="${u["timer-progress-bar-container"]}">
     <div class="${u["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),K1=()=>{const i=W();return i?(i.remove(),J([document.documentElement,document.body],[u["no-backdrop"],u["toast-shown"],u["has-column"]]),!0):!1},ut=()=>{r.currentInstance.resetValidationMessage()},X1=()=>{const i=F(),s=_e(i,u.input),l=_e(i,u.file),d=i.querySelector(`.${u.range} input`),g=i.querySelector(`.${u.range} output`),H=_e(i,u.select),K=i.querySelector(`.${u.checkbox} input`),fe=_e(i,u.textarea);s.oninput=ut,l.onchange=ut,H.onchange=ut,K.onchange=ut,fe.oninput=ut,d.oninput=()=>{ut(),g.value=d.value},d.onchange=()=>{ut(),g.value=d.value}},J1=i=>typeof i=="string"?document.querySelector(i):i,Z1=i=>{const s=F();s.setAttribute("role",i.toast?"alert":"dialog"),s.setAttribute("aria-live",i.toast?"polite":"assertive"),i.toast||s.setAttribute("aria-modal","true")},Q1=i=>{window.getComputedStyle(i).direction==="rtl"&&B(W(),u.rtl)},ec=i=>{const s=K1();if(Xa()){E("SweetAlert2 requires document to initialize");return}const l=document.createElement("div");l.className=u.container,s&&B(l,u["no-transition"]),T(l,Y1);const d=J1(i.target);d.appendChild(l),Z1(i),Q1(d),X1()},vr=(i,s)=>{i instanceof HTMLElement?s.appendChild(i):typeof i=="object"?tc(i,s):i&&T(s,i)},tc=(i,s)=>{i.jquery?nc(s,i):T(s,i.toString())},nc=(i,s)=>{if(i.textContent="",0 in s)for(let l=0;l in s;l++)i.appendChild(s[l].cloneNode(!0));else i.appendChild(s.cloneNode(!0))},Ut=(()=>{if(Xa())return!1;const i=document.createElement("div"),s={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const l in s)if(Object.prototype.hasOwnProperty.call(s,l)&&typeof i.style[l]<"u")return s[l];return!1})(),rc=(i,s)=>{const l=C(),d=_();!s.showConfirmButton&&!s.showDenyButton&&!s.showCancelButton?x(l):X(l),R(l,s,"actions"),ac(l,d,s),T(d,s.loaderHtml),R(d,s,"loader")};function ac(i,s,l){const d=ie(),g=Ce(),H=Se();wr(d,"confirm",l),wr(g,"deny",l),wr(H,"cancel",l),ic(d,g,H,l),l.reverseButtons&&(l.toast?(i.insertBefore(H,d),i.insertBefore(g,d)):(i.insertBefore(H,s),i.insertBefore(g,s),i.insertBefore(d,s)))}function ic(i,s,l,d){if(!d.buttonsStyling){J([i,s,l],u.styled);return}B([i,s,l],u.styled),d.confirmButtonColor&&(i.style.backgroundColor=d.confirmButtonColor,B(i,u["default-outline"])),d.denyButtonColor&&(s.style.backgroundColor=d.denyButtonColor,B(s,u["default-outline"])),d.cancelButtonColor&&(l.style.backgroundColor=d.cancelButtonColor,B(l,u["default-outline"]))}function wr(i,s,l){We(i,l[`show${S(s)}Button`],"inline-block"),T(i,l[`${s}ButtonText`]),i.setAttribute("aria-label",l[`${s}ButtonAriaLabel`]),i.className=u[s],R(i,l,`${s}Button`),B(i,l[`${s}ButtonClass`])}const sc=(i,s)=>{const l=p();l&&(T(l,s.closeButtonHtml||""),R(l,s,"closeButton"),We(l,s.showCloseButton),l.setAttribute("aria-label",s.closeButtonAriaLabel||""))},oc=(i,s)=>{const l=W();l&&(cc(l,s.backdrop),lc(l,s.position),uc(l,s.grow),R(l,s,"container"))};function cc(i,s){typeof s=="string"?i.style.background=s:s||B([document.documentElement,document.body],u["no-backdrop"])}function lc(i,s){s in u?B(i,u[s]):(y('The "position" parameter is not valid, defaulting to "center"'),B(i,u.center))}function uc(i,s){if(s&&typeof s=="string"){const l=`grow-${s}`;l in u&&B(i,u[l])}}const fc=["input","file","range","select","radio","checkbox","textarea"],dc=(i,s)=>{const l=F(),d=c.innerParams.get(i),g=!d||s.input!==d.input;fc.forEach(H=>{const K=_e(l,u[H]);pc(H,s.inputAttributes),K.className=u[H],g&&x(K)}),s.input&&(g&&hc(s),gc(s))},hc=i=>{if(!Ae[i.input]){E(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${i.input}"`);return}const s=Ja(i.input),l=Ae[i.input](s,i);X(s),i.inputAutoFocus&&setTimeout(()=>{q(l)})},mc=i=>{for(let s=0;s<i.attributes.length;s++){const l=i.attributes[s].name;["type","value","style"].includes(l)||i.removeAttribute(l)}},pc=(i,s)=>{const l=le(F(),i);if(l){mc(l);for(const d in s)l.setAttribute(d,s[d])}},gc=i=>{const s=Ja(i.input);typeof i.customClass=="object"&&B(s,i.customClass.input)},br=(i,s)=>{(!i.placeholder||s.inputPlaceholder)&&(i.placeholder=s.inputPlaceholder)},jt=(i,s,l)=>{if(l.inputLabel){i.id=u.input;const d=document.createElement("label"),g=u["input-label"];d.setAttribute("for",i.id),d.className=g,typeof l.customClass=="object"&&B(d,l.customClass.inputLabel),d.innerText=l.inputLabel,s.insertAdjacentElement("beforebegin",d)}},Ja=i=>_e(F(),u[i]||u.input),Sn=(i,s)=>{["string","number"].includes(typeof s)?i.value=`${s}`:re(s)||y(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof s}"`)},Ae={};Ae.text=Ae.email=Ae.password=Ae.number=Ae.tel=Ae.url=(i,s)=>(Sn(i,s.inputValue),jt(i,i,s),br(i,s),i.type=s.input,i),Ae.file=(i,s)=>(jt(i,i,s),br(i,s),i),Ae.range=(i,s)=>{const l=i.querySelector("input"),d=i.querySelector("output");return Sn(l,s.inputValue),l.type=s.input,Sn(d,s.inputValue),jt(l,i,s),i},Ae.select=(i,s)=>{if(i.textContent="",s.inputPlaceholder){const l=document.createElement("option");T(l,s.inputPlaceholder),l.value="",l.disabled=!0,l.selected=!0,i.appendChild(l)}return jt(i,i,s),i},Ae.radio=i=>(i.textContent="",i),Ae.checkbox=(i,s)=>{const l=le(F(),"checkbox");l.value="1",l.id=u.checkbox,l.checked=!!s.inputValue;const d=i.querySelector("span");return T(d,s.inputPlaceholder),l},Ae.textarea=(i,s)=>{Sn(i,s.inputValue),br(i,s),jt(i,i,s);const l=d=>parseInt(window.getComputedStyle(d).marginLeft)+parseInt(window.getComputedStyle(d).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const d=parseInt(window.getComputedStyle(F()).width),g=()=>{const H=i.offsetWidth+l(i);H>d?F().style.width=`${H}px`:F().style.width=null};new MutationObserver(g).observe(i,{attributes:!0,attributeFilter:["style"]})}}),i};const vc=(i,s)=>{const l=ye();l&&(R(l,s,"htmlContainer"),s.html?(vr(s.html,l),X(l,"block")):s.text?(l.textContent=s.text,X(l,"block")):x(l),dc(i,s))},wc=(i,s)=>{const l=I();l&&(We(l,s.footer),s.footer&&vr(s.footer,l),R(l,s,"footer"))},bc=(i,s)=>{const l=c.innerParams.get(i),d=xe();if(l&&s.icon===l.icon){Qa(d,s),Za(d,s);return}if(!s.icon&&!s.iconHtml){x(d);return}if(s.icon&&Object.keys(v).indexOf(s.icon)===-1){E(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${s.icon}"`),x(d);return}X(d),Qa(d,s),Za(d,s),B(d,s.showClass.icon)},Za=(i,s)=>{for(const l in v)s.icon!==l&&J(i,v[l]);B(i,v[s.icon]),Ac(i,s),yc(),R(i,s,"icon")},yc=()=>{const i=F(),s=window.getComputedStyle(i).getPropertyValue("background-color"),l=i.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let d=0;d<l.length;d++)l[d].style.backgroundColor=s},Cc=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,kc=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Qa=(i,s)=>{let l=i.innerHTML,d;s.iconHtml?d=ei(s.iconHtml):s.icon==="success"?(d=Cc,l=l.replace(/ style=".*?"/g,"")):s.icon==="error"?d=kc:d=ei({question:"?",warning:"!",info:"i"}[s.icon]),l.trim()!==d.trim()&&T(i,d)},Ac=(i,s)=>{if(s.iconColor){i.style.color=s.iconColor,i.style.borderColor=s.iconColor;for(const l of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])se(i,l,"backgroundColor",s.iconColor);se(i,".swal2-success-ring","borderColor",s.iconColor)}},ei=i=>`<div class="${u["icon-content"]}">${i}</div>`,Sc=(i,s)=>{const l=he();if(l){if(!s.imageUrl){x(l);return}X(l,""),l.setAttribute("src",s.imageUrl),l.setAttribute("alt",s.imageAlt||""),ze(l,"width",s.imageWidth),ze(l,"height",s.imageHeight),l.className=u.image,R(l,s,"image")}},_c=(i,s)=>{const l=W(),d=F();if(!(!l||!d)){if(s.toast){ze(l,"width",s.width),d.style.width="100%";const g=_();g&&d.insertBefore(g,xe())}else ze(d,"width",s.width);ze(d,"padding",s.padding),s.color&&(d.style.color=s.color),s.background&&(d.style.background=s.background),x(ge()),Ic(d,s)}},Ic=(i,s)=>{const l=s.showClass||{};i.className=`${u.popup} ${me(i)?l.popup:""}`,s.toast?(B([document.documentElement,document.body],u["toast-shown"]),B(i,u.toast)):B(i,u.modal),R(i,s,"popup"),typeof s.customClass=="string"&&B(i,s.customClass),s.icon&&B(i,u[`icon-${s.icon}`])},xc=(i,s)=>{const l=Ve();if(!l)return;const{progressSteps:d,currentProgressStep:g}=s;if(!d||d.length===0||g===void 0){x(l);return}X(l),l.textContent="",g>=d.length&&y("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),d.forEach((H,K)=>{const fe=zc(H);if(l.appendChild(fe),K===g&&B(fe,u["active-progress-step"]),K!==d.length-1){const pe=Mc(s);l.appendChild(pe)}})},zc=i=>{const s=document.createElement("li");return B(s,u["progress-step"]),T(s,i),s},Mc=i=>{const s=document.createElement("li");return B(s,u["progress-step-line"]),i.progressStepsDistance&&ze(s,"width",i.progressStepsDistance),s},Ec=(i,s)=>{const l=ke();l&&(We(l,s.title||s.titleText,"block"),s.title&&vr(s.title,l),s.titleText&&(l.innerText=s.titleText),R(l,s,"title"))},ti=(i,s)=>{_c(i,s),oc(i,s),xc(i,s),bc(i,s),Sc(i,s),Ec(i,s),sc(i,s),vc(i,s),rc(i,s),wc(i,s);const l=F();typeof s.didRender=="function"&&l&&s.didRender(l)},Tc=()=>me(F()),ni=()=>ie()&&ie().click(),Hc=()=>Ce()&&Ce().click(),Lc=()=>Se()&&Se().click(),kt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ri=i=>{i.keydownTarget&&i.keydownHandlerAdded&&(i.keydownTarget.removeEventListener("keydown",i.keydownHandler,{capture:i.keydownListenerCapture}),i.keydownHandlerAdded=!1)},Pc=(i,s,l,d)=>{ri(s),l.toast||(s.keydownHandler=g=>Vc(i,g,d),s.keydownTarget=l.keydownListenerCapture?window:F(),s.keydownListenerCapture=l.keydownListenerCapture,s.keydownTarget.addEventListener("keydown",s.keydownHandler,{capture:s.keydownListenerCapture}),s.keydownHandlerAdded=!0)},yr=(i,s)=>{const l=w();if(l.length){i=i+s,i===l.length?i=0:i===-1&&(i=l.length-1),l[i].focus();return}F().focus()},ai=["ArrowRight","ArrowDown"],Oc=["ArrowLeft","ArrowUp"],Vc=(i,s,l)=>{const d=c.innerParams.get(i);d&&(s.isComposing||s.keyCode===229||(d.stopKeydownPropagation&&s.stopPropagation(),s.key==="Enter"?Nc(i,s,d):s.key==="Tab"?Rc(s):[...ai,...Oc].includes(s.key)?Dc(s.key):s.key==="Escape"&&Fc(s,d,l)))},Nc=(i,s,l)=>{if(P(l.allowEnterKey)&&s.target&&i.getInput()&&s.target instanceof HTMLElement&&s.target.outerHTML===i.getInput().outerHTML){if(["textarea","file"].includes(l.input))return;ni(),s.preventDefault()}},Rc=i=>{const s=i.target,l=w();let d=-1;for(let g=0;g<l.length;g++)if(s===l[g]){d=g;break}i.shiftKey?yr(d,-1):yr(d,1),i.stopPropagation(),i.preventDefault()},Dc=i=>{const s=ie(),l=Ce(),d=Se(),g=[s,l,d];if(document.activeElement instanceof HTMLElement&&!g.includes(document.activeElement))return;const H=ai.includes(i)?"nextElementSibling":"previousElementSibling";let K=document.activeElement;for(let fe=0;fe<C().children.length;fe++){if(K=K[H],!K)return;if(K instanceof HTMLButtonElement&&me(K))break}K instanceof HTMLButtonElement&&K.focus()},Fc=(i,s,l)=>{P(s.allowEscapeKey)&&(i.preventDefault(),l(kt.esc))};var Wt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Bc=()=>{Array.from(document.body.children).forEach(s=>{s===W()||s.contains(W())||(s.hasAttribute("aria-hidden")&&s.setAttribute("data-previous-aria-hidden",s.getAttribute("aria-hidden")||""),s.setAttribute("aria-hidden","true"))})},ii=()=>{Array.from(document.body.children).forEach(s=>{s.hasAttribute("data-previous-aria-hidden")?(s.setAttribute("aria-hidden",s.getAttribute("data-previous-aria-hidden")||""),s.removeAttribute("data-previous-aria-hidden")):s.removeAttribute("aria-hidden")})},$c=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Z(document.body,u.iosfix)){const s=document.body.scrollTop;document.body.style.top=`${s*-1}px`,B(document.body,u.iosfix),jc(),Uc()}},Uc=()=>{const i=navigator.userAgent,s=!!i.match(/iPad/i)||!!i.match(/iPhone/i),l=!!i.match(/WebKit/i);s&&l&&!i.match(/CriOS/i)&&F().scrollHeight>window.innerHeight-44&&(W().style.paddingBottom="44px")},jc=()=>{const i=W();let s;i.ontouchstart=l=>{s=Wc(l)},i.ontouchmove=l=>{s&&(l.preventDefault(),l.stopPropagation())}},Wc=i=>{const s=i.target,l=W();return qc(i)||Gc(i)?!1:s===l||!Ya(l)&&s instanceof HTMLElement&&s.tagName!=="INPUT"&&s.tagName!=="TEXTAREA"&&!(Ya(ye())&&ye().contains(s))},qc=i=>i.touches&&i.touches.length&&i.touches[0].touchType==="stylus",Gc=i=>i.touches&&i.touches.length>1,Yc=()=>{if(Z(document.body,u.iosfix)){const i=parseInt(document.body.style.top,10);J(document.body,u.iosfix),document.body.style.top="",document.body.scrollTop=i*-1}},Kc=()=>{const i=document.createElement("div");i.className=u["scrollbar-measure"],document.body.appendChild(i);const s=i.getBoundingClientRect().width-i.clientWidth;return document.body.removeChild(i),s};let At=null;const Xc=()=>{At===null&&document.body.scrollHeight>window.innerHeight&&(At=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${At+Kc()}px`)},Jc=()=>{At!==null&&(document.body.style.paddingRight=`${At}px`,At=null)};function si(i,s,l,d){j()?ci(i,d):(o(l).then(()=>ci(i,d)),ri(r)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(s.setAttribute("style","display:none !important"),s.removeAttribute("class"),s.innerHTML=""):s.remove(),Q()&&(Jc(),Yc(),ii()),Zc()}function Zc(){J([document.documentElement,document.body],[u.shown,u["height-auto"],u["no-backdrop"],u["toast-shown"]])}function qe(i){i=el(i);const s=Wt.swalPromiseResolve.get(this),l=Qc(this);this.isAwaitingPromise?i.isDismissed||(qt(this),s(i)):l&&s(i)}const Qc=i=>{const s=F();if(!s)return!1;const l=c.innerParams.get(i);if(!l||Z(s,l.hideClass.popup))return!1;J(s,l.showClass.popup),B(s,l.hideClass.popup);const d=W();return J(d,l.showClass.backdrop),B(d,l.hideClass.backdrop),tl(i,s,l),!0};function oi(i){const s=Wt.swalPromiseReject.get(this);qt(this),s&&s(i)}const qt=i=>{i.isAwaitingPromise&&(delete i.isAwaitingPromise,c.innerParams.get(i)||i._destroy())},el=i=>typeof i>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},i),tl=(i,s,l)=>{const d=W(),g=Ut&&Ka(s);typeof l.willClose=="function"&&l.willClose(s),g?nl(i,s,d,l.returnFocus,l.didClose):si(i,d,l.returnFocus,l.didClose)},nl=(i,s,l,d,g)=>{r.swalCloseEventFinishedCallback=si.bind(null,i,l,d,g),s.addEventListener(Ut,function(H){H.target===s&&(r.swalCloseEventFinishedCallback(),delete r.swalCloseEventFinishedCallback)})},ci=(i,s)=>{setTimeout(()=>{typeof s=="function"&&s.bind(i.params)(),i._destroy&&i._destroy()})},St=i=>{let s=F();s||new xn,s=F();const l=_();j()?x(xe()):rl(s,i),X(l),s.setAttribute("data-loading","true"),s.setAttribute("aria-busy","true"),s.focus()},rl=(i,s)=>{const l=C(),d=_();!s&&me(ie())&&(s=ie()),X(l),s&&(x(s),d.setAttribute("data-button-to-replace",s.className)),d.parentNode.insertBefore(d,s),B([i,l],u.loading)},al=(i,s)=>{s.input==="select"||s.input==="radio"?ll(i,s):["text","email","number","tel","textarea"].includes(s.input)&&(D(s.inputValue)||re(s.inputValue))&&(St(ie()),ul(i,s))},il=(i,s)=>{const l=i.getInput();if(!l)return null;switch(s.input){case"checkbox":return sl(l);case"radio":return ol(l);case"file":return cl(l);default:return s.inputAutoTrim?l.value.trim():l.value}},sl=i=>i.checked?1:0,ol=i=>i.checked?i.value:null,cl=i=>i.files.length?i.getAttribute("multiple")!==null?i.files:i.files[0]:null,ll=(i,s)=>{const l=F(),d=g=>{fl[s.input](l,Cr(g),s)};D(s.inputOptions)||re(s.inputOptions)?(St(ie()),L(s.inputOptions).then(g=>{i.hideLoading(),d(g)})):typeof s.inputOptions=="object"?d(s.inputOptions):E(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof s.inputOptions}`)},ul=(i,s)=>{const l=i.getInput();x(l),L(s.inputValue).then(d=>{l.value=s.input==="number"?`${parseFloat(d)||0}`:`${d}`,X(l),l.focus(),i.hideLoading()}).catch(d=>{E(`Error in inputValue promise: ${d}`),l.value="",X(l),l.focus(),i.hideLoading()})},fl={select:(i,s,l)=>{const d=_e(i,u.select),g=(H,K,fe)=>{const pe=document.createElement("option");pe.value=fe,T(pe,K),pe.selected=li(fe,l.inputValue),H.appendChild(pe)};s.forEach(H=>{const K=H[0],fe=H[1];if(Array.isArray(fe)){const pe=document.createElement("optgroup");pe.label=K,pe.disabled=!1,d.appendChild(pe),fe.forEach(It=>g(pe,It[1],It[0]))}else g(d,fe,K)}),d.focus()},radio:(i,s,l)=>{const d=_e(i,u.radio);s.forEach(H=>{const K=H[0],fe=H[1],pe=document.createElement("input"),It=document.createElement("label");pe.type="radio",pe.name=u.radio,pe.value=K,li(K,l.inputValue)&&(pe.checked=!0);const Ir=document.createElement("span");T(Ir,fe),Ir.className=u.label,It.appendChild(pe),It.appendChild(Ir),d.appendChild(It)});const g=d.querySelectorAll("input");g.length&&g[0].focus()}},Cr=i=>{const s=[];return typeof Map<"u"&&i instanceof Map?i.forEach((l,d)=>{let g=l;typeof g=="object"&&(g=Cr(g)),s.push([d,g])}):Object.keys(i).forEach(l=>{let d=i[l];typeof d=="object"&&(d=Cr(d)),s.push([l,d])}),s},li=(i,s)=>s&&s.toString()===i.toString(),dl=i=>{const s=c.innerParams.get(i);i.disableButtons(),s.input?ui(i,"confirm"):Ar(i,!0)},hl=i=>{const s=c.innerParams.get(i);i.disableButtons(),s.returnInputValueOnDeny?ui(i,"deny"):kr(i,!1)},ml=(i,s)=>{i.disableButtons(),s(kt.cancel)},ui=(i,s)=>{const l=c.innerParams.get(i);if(!l.input){E(`The "input" parameter is needed to be set when using returnInputValueOn${S(s)}`);return}const d=il(i,l);l.inputValidator?pl(i,d,s):i.getInput().checkValidity()?s==="deny"?kr(i,d):Ar(i,d):(i.enableButtons(),i.showValidationMessage(l.validationMessage))},pl=(i,s,l)=>{const d=c.innerParams.get(i);i.disableInput(),Promise.resolve().then(()=>L(d.inputValidator(s,d.validationMessage))).then(H=>{i.enableButtons(),i.enableInput(),H?i.showValidationMessage(H):l==="deny"?kr(i,s):Ar(i,s)})},kr=(i,s)=>{const l=c.innerParams.get(i||void 0);l.showLoaderOnDeny&&St(Ce()),l.preDeny?(i.isAwaitingPromise=!0,Promise.resolve().then(()=>L(l.preDeny(s,l.validationMessage))).then(g=>{g===!1?(i.hideLoading(),qt(i)):i.close({isDenied:!0,value:typeof g>"u"?s:g})}).catch(g=>di(i||void 0,g))):i.close({isDenied:!0,value:s})},fi=(i,s)=>{i.close({isConfirmed:!0,value:s})},di=(i,s)=>{i.rejectPromise(s)},Ar=(i,s)=>{const l=c.innerParams.get(i||void 0);l.showLoaderOnConfirm&&St(),l.preConfirm?(i.resetValidationMessage(),i.isAwaitingPromise=!0,Promise.resolve().then(()=>L(l.preConfirm(s,l.validationMessage))).then(g=>{me(ge())||g===!1?(i.hideLoading(),qt(i)):fi(i,typeof g>"u"?s:g)}).catch(g=>di(i||void 0,g))):fi(i,s)};function _n(){const i=c.innerParams.get(this);if(!i)return;const s=c.domCache.get(this);x(s.loader),j()?i.icon&&X(xe()):gl(s),J([s.popup,s.actions],u.loading),s.popup.removeAttribute("aria-busy"),s.popup.removeAttribute("data-loading"),s.confirmButton.disabled=!1,s.denyButton.disabled=!1,s.cancelButton.disabled=!1}const gl=i=>{const s=i.popup.getElementsByClassName(i.loader.getAttribute("data-button-to-replace"));s.length?X(s[0],"inline-block"):He()&&x(i.actions)};function hi(){const i=c.innerParams.get(this),s=c.domCache.get(this);return s?le(s.popup,i.input):null}function mi(i,s,l){const d=c.domCache.get(i);s.forEach(g=>{d[g].disabled=l})}function pi(i,s){if(i)if(i.type==="radio"){const d=i.parentNode.parentNode.querySelectorAll("input");for(let g=0;g<d.length;g++)d[g].disabled=s}else i.disabled=s}function gi(){mi(this,["confirmButton","denyButton","cancelButton"],!1)}function vi(){mi(this,["confirmButton","denyButton","cancelButton"],!0)}function wi(){pi(this.getInput(),!1)}function bi(){pi(this.getInput(),!0)}function yi(i){const s=c.domCache.get(this),l=c.innerParams.get(this);T(s.validationMessage,i),s.validationMessage.className=u["validation-message"],l.customClass&&l.customClass.validationMessage&&B(s.validationMessage,l.customClass.validationMessage),X(s.validationMessage);const d=this.getInput();d&&(d.setAttribute("aria-invalid",!0),d.setAttribute("aria-describedby",u["validation-message"]),q(d),B(d,u.inputerror))}function Ci(){const i=c.domCache.get(this);i.validationMessage&&x(i.validationMessage);const s=this.getInput();s&&(s.removeAttribute("aria-invalid"),s.removeAttribute("aria-describedby"),J(s,u.inputerror))}const _t={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},vl=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],wl={},bl=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ki=i=>Object.prototype.hasOwnProperty.call(_t,i),Ai=i=>vl.indexOf(i)!==-1,Si=i=>wl[i],yl=i=>{ki(i)||y(`Unknown parameter "${i}"`)},Cl=i=>{bl.includes(i)&&y(`The parameter "${i}" is incompatible with toasts`)},kl=i=>{const s=Si(i);s&&z(i,s)},Al=i=>{i.backdrop===!1&&i.allowOutsideClick&&y('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const s in i)yl(s),i.toast&&Cl(s),kl(s)};function _i(i){const s=F(),l=c.innerParams.get(this);if(!s||Z(s,l.hideClass.popup)){y("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const d=Sl(i),g=Object.assign({},l,d);ti(this,g),c.innerParams.set(this,g),Object.defineProperties(this,{params:{value:Object.assign({},this.params,i),writable:!1,enumerable:!0}})}const Sl=i=>{const s={};return Object.keys(i).forEach(l=>{Ai(l)?s[l]=i[l]:y(`Invalid parameter to update: ${l}`)}),s};function Ii(){const i=c.domCache.get(this),s=c.innerParams.get(this);if(!s){xi(this);return}i.popup&&r.swalCloseEventFinishedCallback&&(r.swalCloseEventFinishedCallback(),delete r.swalCloseEventFinishedCallback),typeof s.didDestroy=="function"&&s.didDestroy(),_l(this)}const _l=i=>{xi(i),delete i.params,delete r.keydownHandler,delete r.keydownTarget,delete r.currentInstance},xi=i=>{i.isAwaitingPromise?(Sr(c,i),i.isAwaitingPromise=!0):(Sr(Wt,i),Sr(c,i),delete i.isAwaitingPromise,delete i.disableButtons,delete i.enableButtons,delete i.getInput,delete i.disableInput,delete i.enableInput,delete i.hideLoading,delete i.disableLoading,delete i.showValidationMessage,delete i.resetValidationMessage,delete i.close,delete i.closePopup,delete i.closeModal,delete i.closeToast,delete i.rejectPromise,delete i.update,delete i._destroy)},Sr=(i,s)=>{for(const l in i)i[l].delete(s)};var Il=Object.freeze({__proto__:null,_destroy:Ii,close:qe,closeModal:qe,closePopup:qe,closeToast:qe,disableButtons:vi,disableInput:bi,disableLoading:_n,enableButtons:gi,enableInput:wi,getInput:hi,handleAwaitingPromise:qt,hideLoading:_n,rejectPromise:oi,resetValidationMessage:Ci,showValidationMessage:yi,update:_i});const xl=(i,s,l)=>{c.innerParams.get(i).toast?zl(i,s,l):(El(s),Tl(s),Hl(i,s,l))},zl=(i,s,l)=>{s.popup.onclick=()=>{const d=c.innerParams.get(i);d&&(Ml(d)||d.timer||d.input)||l(kt.close)}},Ml=i=>i.showConfirmButton||i.showDenyButton||i.showCancelButton||i.showCloseButton;let In=!1;const El=i=>{i.popup.onmousedown=()=>{i.container.onmouseup=function(s){i.container.onmouseup=void 0,s.target===i.container&&(In=!0)}}},Tl=i=>{i.container.onmousedown=()=>{i.popup.onmouseup=function(s){i.popup.onmouseup=void 0,(s.target===i.popup||i.popup.contains(s.target))&&(In=!0)}}},Hl=(i,s,l)=>{s.container.onclick=d=>{const g=c.innerParams.get(i);if(In){In=!1;return}d.target===s.container&&P(g.allowOutsideClick)&&l(kt.backdrop)}},Ll=i=>typeof i=="object"&&i.jquery,zi=i=>i instanceof Element||Ll(i),Pl=i=>{const s={};return typeof i[0]=="object"&&!zi(i[0])?Object.assign(s,i[0]):["title","html","icon"].forEach((l,d)=>{const g=i[d];typeof g=="string"||zi(g)?s[l]=g:g!==void 0&&E(`Unexpected type of ${l}! Expected "string" or "Element", got ${typeof g}`)}),s};function Ol(){const i=this;for(var s=arguments.length,l=new Array(s),d=0;d<s;d++)l[d]=arguments[d];return new i(...l)}function Vl(i){class s extends this{_main(d,g){return super._main(d,Object.assign({},i,g))}}return s}const Nl=()=>r.timeout&&r.timeout.getTimerLeft(),Mi=()=>{if(r.timeout)return G1(),r.timeout.stop()},Ei=()=>{if(r.timeout){const i=r.timeout.start();return gr(i),i}},Rl=()=>{const i=r.timeout;return i&&(i.running?Mi():Ei())},Dl=i=>{if(r.timeout){const s=r.timeout.increase(i);return gr(s,!0),s}},Fl=()=>!!(r.timeout&&r.timeout.isRunning());let Ti=!1;const _r={};function Bl(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";_r[i]=this,Ti||(document.body.addEventListener("click",$l),Ti=!0)}const $l=i=>{for(let s=i.target;s&&s!==document;s=s.parentNode)for(const l in _r){const d=s.getAttribute(l);if(d){_r[l].fire({template:d});return}}};var Ul=Object.freeze({__proto__:null,argsToParams:Pl,bindClickHandler:Bl,clickCancel:Lc,clickConfirm:ni,clickDeny:Hc,enableLoading:St,fire:Ol,getActions:C,getCancelButton:Se,getCloseButton:p,getConfirmButton:ie,getContainer:W,getDenyButton:Ce,getFocusableElements:w,getFooter:I,getHtmlContainer:ye,getIcon:xe,getIconContent:be,getImage:he,getInputLabel:lt,getLoader:_,getPopup:F,getProgressSteps:Ve,getTimerLeft:Nl,getTimerProgressBar:V,getTitle:ke,getValidationMessage:ge,increaseTimer:Dl,isDeprecatedParameter:Si,isLoading:Y,isTimerRunning:Fl,isUpdatableParameter:Ai,isValidParameter:ki,isVisible:Tc,mixin:Vl,resumeTimer:Ei,showLoading:St,stopTimer:Mi,toggleTimer:Rl});class jl{constructor(s,l){this.callback=s,this.remaining=l,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(s){const l=this.running;return l&&this.stop(),this.remaining+=s,l&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Hi=["swal-title","swal-html","swal-footer"],Wl=i=>{const s=typeof i.template=="string"?document.querySelector(i.template):i.template;if(!s)return{};const l=s.content;return Ql(l),Object.assign(ql(l),Gl(l),Yl(l),Kl(l),Xl(l),Jl(l),Zl(l,Hi))},ql=i=>{const s={};return Array.from(i.querySelectorAll("swal-param")).forEach(d=>{ft(d,["name","value"]);const g=d.getAttribute("name"),H=d.getAttribute("value");typeof _t[g]=="boolean"?s[g]=H!=="false":typeof _t[g]=="object"?s[g]=JSON.parse(H):s[g]=H}),s},Gl=i=>{const s={};return Array.from(i.querySelectorAll("swal-function-param")).forEach(d=>{const g=d.getAttribute("name"),H=d.getAttribute("value");s[g]=new Function(`return ${H}`)()}),s},Yl=i=>{const s={};return Array.from(i.querySelectorAll("swal-button")).forEach(d=>{ft(d,["type","color","aria-label"]);const g=d.getAttribute("type");s[`${g}ButtonText`]=d.innerHTML,s[`show${S(g)}Button`]=!0,d.hasAttribute("color")&&(s[`${g}ButtonColor`]=d.getAttribute("color")),d.hasAttribute("aria-label")&&(s[`${g}ButtonAriaLabel`]=d.getAttribute("aria-label"))}),s},Kl=i=>{const s={},l=i.querySelector("swal-image");return l&&(ft(l,["src","width","height","alt"]),l.hasAttribute("src")&&(s.imageUrl=l.getAttribute("src")),l.hasAttribute("width")&&(s.imageWidth=l.getAttribute("width")),l.hasAttribute("height")&&(s.imageHeight=l.getAttribute("height")),l.hasAttribute("alt")&&(s.imageAlt=l.getAttribute("alt"))),s},Xl=i=>{const s={},l=i.querySelector("swal-icon");return l&&(ft(l,["type","color"]),l.hasAttribute("type")&&(s.icon=l.getAttribute("type")),l.hasAttribute("color")&&(s.iconColor=l.getAttribute("color")),s.iconHtml=l.innerHTML),s},Jl=i=>{const s={},l=i.querySelector("swal-input");l&&(ft(l,["type","label","placeholder","value"]),s.input=l.getAttribute("type")||"text",l.hasAttribute("label")&&(s.inputLabel=l.getAttribute("label")),l.hasAttribute("placeholder")&&(s.inputPlaceholder=l.getAttribute("placeholder")),l.hasAttribute("value")&&(s.inputValue=l.getAttribute("value")));const d=Array.from(i.querySelectorAll("swal-input-option"));return d.length&&(s.inputOptions={},d.forEach(g=>{ft(g,["value"]);const H=g.getAttribute("value"),K=g.innerHTML;s.inputOptions[H]=K})),s},Zl=(i,s)=>{const l={};for(const d in s){const g=s[d],H=i.querySelector(g);H&&(ft(H,[]),l[g.replace(/^swal-/,"")]=H.innerHTML.trim())}return l},Ql=i=>{const s=Hi.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(i.children).forEach(l=>{const d=l.tagName.toLowerCase();s.includes(d)||y(`Unrecognized element <${d}>`)})},ft=(i,s)=>{Array.from(i.attributes).forEach(l=>{s.indexOf(l.name)===-1&&y([`Unrecognized attribute "${l.name}" on <${i.tagName.toLowerCase()}>.`,`${s.length?`Allowed attributes are: ${s.join(", ")}`:"To set the value, use HTML within the element."}`])})},Li=10,e4=i=>{const s=W(),l=F();typeof i.willOpen=="function"&&i.willOpen(l);const g=window.getComputedStyle(document.body).overflowY;r4(s,l,i),setTimeout(()=>{t4(s,l)},Li),Q()&&(n4(s,i.scrollbarPadding,g),Bc()),!j()&&!r.previousActiveElement&&(r.previousActiveElement=document.activeElement),typeof i.didOpen=="function"&&setTimeout(()=>i.didOpen(l)),J(s,u["no-transition"])},Pi=i=>{const s=F();if(i.target!==s)return;const l=W();s.removeEventListener(Ut,Pi),l.style.overflowY="auto"},t4=(i,s)=>{Ut&&Ka(s)?(i.style.overflowY="hidden",s.addEventListener(Ut,Pi)):i.style.overflowY="auto"},n4=(i,s,l)=>{$c(),s&&l!=="hidden"&&Xc(),setTimeout(()=>{i.scrollTop=0})},r4=(i,s,l)=>{B(i,l.showClass.backdrop),s.style.setProperty("opacity","0","important"),X(s,"grid"),setTimeout(()=>{B(s,l.showClass.popup),s.style.removeProperty("opacity")},Li),B([document.documentElement,document.body],u.shown),l.heightAuto&&l.backdrop&&!l.toast&&B([document.documentElement,document.body],u["height-auto"])};var Oi={email:(i,s)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(i)?Promise.resolve():Promise.resolve(s||"Invalid email address"),url:(i,s)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(i)?Promise.resolve():Promise.resolve(s||"Invalid URL")};function a4(i){i.inputValidator||Object.keys(Oi).forEach(s=>{i.input===s&&(i.inputValidator=Oi[s])})}function i4(i){(!i.target||typeof i.target=="string"&&!document.querySelector(i.target)||typeof i.target!="string"&&!i.target.appendChild)&&(y('Target parameter is not valid, defaulting to "body"'),i.target="body")}function s4(i){a4(i),i.showLoaderOnConfirm&&!i.preConfirm&&y(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),i4(i),typeof i.title=="string"&&(i.title=i.title.split(`
`).join("<br />")),ec(i)}let Ee;class ce{constructor(){if(typeof window>"u")return;Ee=this;for(var s=arguments.length,l=new Array(s),d=0;d<s;d++)l[d]=arguments[d];const g=Object.freeze(this.constructor.argsToParams(l));this.params=g,this.isAwaitingPromise=!1;const H=Ee._main(Ee.params);c.promise.set(this,H)}_main(s){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Al(Object.assign({},l,s)),r.currentInstance&&(r.currentInstance._destroy(),Q()&&ii()),r.currentInstance=Ee;const d=c4(s,l);s4(d),Object.freeze(d),r.timeout&&(r.timeout.stop(),delete r.timeout),clearTimeout(r.restoreFocusTimeout);const g=l4(Ee);return ti(Ee,d),c.innerParams.set(Ee,d),o4(Ee,g,d)}then(s){return c.promise.get(this).then(s)}finally(s){return c.promise.get(this).finally(s)}}const o4=(i,s,l)=>new Promise((d,g)=>{const H=K=>{i.close({isDismissed:!0,dismiss:K})};Wt.swalPromiseResolve.set(i,d),Wt.swalPromiseReject.set(i,g),s.confirmButton.onclick=()=>{dl(i)},s.denyButton.onclick=()=>{hl(i)},s.cancelButton.onclick=()=>{ml(i,H)},s.closeButton.onclick=()=>{H(kt.close)},xl(i,s,H),Pc(i,r,l,H),al(i,l),e4(l),u4(r,l,H),f4(s,l),setTimeout(()=>{s.container.scrollTop=0})}),c4=(i,s)=>{const l=Wl(i),d=Object.assign({},_t,s,l,i);return d.showClass=Object.assign({},_t.showClass,d.showClass),d.hideClass=Object.assign({},_t.hideClass,d.hideClass),d},l4=i=>{const s={popup:F(),container:W(),actions:C(),confirmButton:ie(),denyButton:Ce(),cancelButton:Se(),loader:_(),closeButton:p(),validationMessage:ge(),progressSteps:Ve()};return c.domCache.set(i,s),s},u4=(i,s,l)=>{const d=V();x(d),s.timer&&(i.timeout=new jl(()=>{l("timer"),delete i.timeout},s.timer),s.timerProgressBar&&(X(d),R(d,s,"timerProgressBar"),setTimeout(()=>{i.timeout&&i.timeout.running&&gr(s.timer)})))},f4=(i,s)=>{if(!s.toast){if(!P(s.allowEnterKey)){h4();return}d4(i,s)||yr(-1,1)}},d4=(i,s)=>s.focusDeny&&me(i.denyButton)?(i.denyButton.focus(),!0):s.focusCancel&&me(i.cancelButton)?(i.cancelButton.focus(),!0):s.focusConfirm&&me(i.confirmButton)?(i.confirmButton.focus(),!0):!1,h4=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const i=new Date,s=localStorage.getItem("swal-initiation");s?(i.getTime()-Date.parse(s))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const l=document.createElement("audio");l.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",l.loop=!0,document.body.appendChild(l),setTimeout(()=>{l.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${i}`)}ce.prototype.disableButtons=vi,ce.prototype.enableButtons=gi,ce.prototype.getInput=hi,ce.prototype.disableInput=bi,ce.prototype.enableInput=wi,ce.prototype.hideLoading=_n,ce.prototype.disableLoading=_n,ce.prototype.showValidationMessage=yi,ce.prototype.resetValidationMessage=Ci,ce.prototype.close=qe,ce.prototype.closePopup=qe,ce.prototype.closeModal=qe,ce.prototype.closeToast=qe,ce.prototype.rejectPromise=oi,ce.prototype.update=_i,ce.prototype._destroy=Ii,Object.assign(ce,Ul),Object.keys(Il).forEach(i=>{ce[i]=function(){return Ee&&Ee[i]?Ee[i](...arguments):null}}),ce.DismissReason=kt,ce.version="11.7.12";const xn=ce;return xn.default=xn,xn}),typeof Ge<"u"&&Ge.Sweetalert2&&(Ge.swal=Ge.sweetAlert=Ge.Swal=Ge.SweetAlert=Ge.Sweetalert2),typeof document<"u"&&function(n,r){var a=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(a),a.styleSheet)a.styleSheet.disabled||(a.styleSheet.cssText=r);else try{a.innerHTML=r}catch{a.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(ro);var l0=ro.exports;const q7=qs(l0);function Gi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gi(Object(n),!0).forEach(function(r){de(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Xn(t){"@babel/helpers - typeof";return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xn(t)}function u0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Yi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f0(t,e,n){return e&&Yi(t.prototype,e),n&&Yi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function de(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function va(t,e){return h0(t)||p0(t,e)||ao(t,e)||v0()}function hn(t){return d0(t)||m0(t)||ao(t)||g0()}function d0(t){if(Array.isArray(t))return qr(t)}function h0(t){if(Array.isArray(t))return t}function m0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function p0(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,o=!1,c,f;try{for(n=n.call(t);!(a=(c=n.next()).done)&&(r.push(c.value),!(e&&r.length===e));a=!0);}catch(h){o=!0,f=h}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw f}}return r}}function ao(t,e){if(t){if(typeof t=="string")return qr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qr(t,e)}}function qr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ki=function(){},wa={},io={},so=null,oo={mark:Ki,measure:Ki};try{typeof window<"u"&&(wa=window),typeof document<"u"&&(io=document),typeof MutationObserver<"u"&&(so=MutationObserver),typeof performance<"u"&&(oo=performance)}catch{}var w0=wa.navigator||{},Xi=w0.userAgent,Ji=Xi===void 0?"":Xi,at=wa,ne=io,Zi=so,En=oo;at.document;var je=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",co=~Ji.indexOf("MSIE")||~Ji.indexOf("Trident/"),Tn,Hn,Ln,Pn,On,Fe="___FONT_AWESOME___",Gr=16,lo="fa",uo="svg-inline--fa",vt="data-fa-i2svg",Yr="data-fa-pseudo-element",b0="data-fa-pseudo-element-pending",ba="data-prefix",ya="data-icon",Qi="fontawesome-i2svg",y0="async",C0=["HTML","HEAD","STYLE","SCRIPT"],fo=function(){try{return!0}catch{return!1}}(),te="classic",oe="sharp",Ca=[te,oe];function mn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[te]}})}var tn=mn((Tn={},de(Tn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(Tn,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Tn)),nn=mn((Hn={},de(Hn,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Hn,oe,{solid:"fass",regular:"fasr"}),Hn)),rn=mn((Ln={},de(Ln,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(Ln,oe,{fass:"fa-solid",fasr:"fa-regular"}),Ln)),k0=mn((Pn={},de(Pn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(Pn,oe,{"fa-solid":"fass","fa-regular":"fasr"}),Pn)),A0=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,ho="fa-layers-text",S0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_0=mn((On={},de(On,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(On,oe,{900:"fass",400:"fasr"}),On)),mo=[1,2,3,4,5,6,7,8,9,10],I0=mo.concat([11,12,13,14,15,16,17,18,19,20]),x0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},an=new Set;Object.keys(nn[te]).map(an.add.bind(an));Object.keys(nn[oe]).map(an.add.bind(an));var z0=[].concat(Ca,hn(an),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ht.GROUP,ht.SWAP_OPACITY,ht.PRIMARY,ht.SECONDARY]).concat(mo.map(function(t){return"".concat(t,"x")})).concat(I0.map(function(t){return"w-".concat(t)})),Jt=at.FontAwesomeConfig||{};function M0(t){var e=ne.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function E0(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ne&&typeof ne.querySelector=="function"){var T0=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];T0.forEach(function(t){var e=va(t,2),n=e[0],r=e[1],a=E0(M0(n));a!=null&&(Jt[r]=a)})}var po={styleDefault:"solid",familyDefault:"classic",cssPrefix:lo,replacementClass:uo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Jt.familyPrefix&&(Jt.cssPrefix=Jt.familyPrefix);var Nt=A(A({},po),Jt);Nt.autoReplaceSvg||(Nt.observeMutations=!1);var M={};Object.keys(po).forEach(function(t){Object.defineProperty(M,t,{enumerable:!0,set:function(n){Nt[t]=n,Zt.forEach(function(r){return r(M)})},get:function(){return Nt[t]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(e){Nt.cssPrefix=e,Zt.forEach(function(n){return n(M)})},get:function(){return Nt.cssPrefix}});at.FontAwesomeConfig=M;var Zt=[];function H0(t){return Zt.push(t),function(){Zt.splice(Zt.indexOf(t),1)}}var Ye=Gr,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function L0(t){if(!(!t||!je)){var e=ne.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var o=n[a],c=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(r=o)}return ne.head.insertBefore(e,r),t}}var P0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sn(){for(var t=12,e="";t-- >0;)e+=P0[Math.random()*62|0];return e}function Ft(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ka(t){return t.classList?Ft(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function go(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function O0(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(go(t[n]),'" ')},"").trim()}function sr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Aa(t){return t.size!==Le.size||t.x!==Le.x||t.y!==Le.y||t.rotate!==Le.rotate||t.flipX||t.flipY}function V0(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),f="rotate(".concat(e.rotate," 0 0)"),h={transform:"".concat(o," ").concat(c," ").concat(f)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:h,path:u}}function N0(t){var e=t.transform,n=t.width,r=n===void 0?Gr:n,a=t.height,o=a===void 0?Gr:a,c=t.startCentered,f=c===void 0?!1:c,h="";return f&&co?h+="translate(".concat(e.x/Ye-r/2,"em, ").concat(e.y/Ye-o/2,"em) "):f?h+="translate(calc(-50% + ".concat(e.x/Ye,"em), calc(-50% + ").concat(e.y/Ye,"em)) "):h+="translate(".concat(e.x/Ye,"em, ").concat(e.y/Ye,"em) "),h+="scale(".concat(e.size/Ye*(e.flipX?-1:1),", ").concat(e.size/Ye*(e.flipY?-1:1),") "),h+="rotate(".concat(e.rotate,"deg) "),h}var R0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function vo(){var t=lo,e=uo,n=M.cssPrefix,r=M.replacementClass,a=R0;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),c=new RegExp("\\--".concat(t,"\\-"),"g"),f=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(n,"-")).replace(c,"--".concat(n,"-")).replace(f,".".concat(r))}return a}var es=!1;function Mr(){M.autoAddCss&&!es&&(L0(vo()),es=!0)}var D0={mixout:function(){return{dom:{css:vo,insertCss:Mr}}},hooks:function(){return{beforeDOMElementCreation:function(){Mr()},beforeI2svg:function(){Mr()}}}},Be=at||{};Be[Fe]||(Be[Fe]={});Be[Fe].styles||(Be[Fe].styles={});Be[Fe].hooks||(Be[Fe].hooks={});Be[Fe].shims||(Be[Fe].shims=[]);var Te=Be[Fe],wo=[],F0=function t(){ne.removeEventListener("DOMContentLoaded",t),Jn=1,wo.map(function(e){return e()})},Jn=!1;je&&(Jn=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),Jn||ne.addEventListener("DOMContentLoaded",F0));function B0(t){je&&(Jn?setTimeout(t,0):wo.push(t))}function pn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,o=a===void 0?[]:a;return typeof t=="string"?go(t):"<".concat(e," ").concat(O0(r),">").concat(o.map(pn).join(""),"</").concat(e,">")}function ts(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var $0=function(e,n){return function(r,a,o,c){return e.call(n,r,a,o,c)}},Er=function(e,n,r,a){var o=Object.keys(e),c=o.length,f=a!==void 0?$0(n,a):n,h,u,m;for(r===void 0?(h=1,m=e[o[0]]):(h=0,m=r);h<c;h++)u=o[h],m=f(m,e[u],u,e);return m};function U0(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((a&1023)<<10)+(o&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Kr(t){var e=U0(t);return e.length===1?e[0].toString(16):null}function j0(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ns(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Xr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,o=ns(e);typeof Te.hooks.addPack=="function"&&!a?Te.hooks.addPack(t,ns(e)):Te.styles[t]=A(A({},Te.styles[t]||{}),o),t==="fas"&&Xr("fa",e)}var Vn,Nn,Rn,zt=Te.styles,W0=Te.shims,q0=(Vn={},de(Vn,te,Object.values(rn[te])),de(Vn,oe,Object.values(rn[oe])),Vn),Sa=null,bo={},yo={},Co={},ko={},Ao={},G0=(Nn={},de(Nn,te,Object.keys(tn[te])),de(Nn,oe,Object.keys(tn[oe])),Nn);function Y0(t){return~z0.indexOf(t)}function K0(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Y0(a)?a:null}var So=function(){var e=function(o){return Er(zt,function(c,f,h){return c[h]=Er(f,o,{}),c},{})};bo=e(function(a,o,c){if(o[3]&&(a[o[3]]=c),o[2]){var f=o[2].filter(function(h){return typeof h=="number"});f.forEach(function(h){a[h.toString(16)]=c})}return a}),yo=e(function(a,o,c){if(a[c]=c,o[2]){var f=o[2].filter(function(h){return typeof h=="string"});f.forEach(function(h){a[h]=c})}return a}),Ao=e(function(a,o,c){var f=o[2];return a[c]=c,f.forEach(function(h){a[h]=c}),a});var n="far"in zt||M.autoFetchSvg,r=Er(W0,function(a,o){var c=o[0],f=o[1],h=o[2];return f==="far"&&!n&&(f="fas"),typeof c=="string"&&(a.names[c]={prefix:f,iconName:h}),typeof c=="number"&&(a.unicodes[c.toString(16)]={prefix:f,iconName:h}),a},{names:{},unicodes:{}});Co=r.names,ko=r.unicodes,Sa=or(M.styleDefault,{family:M.familyDefault})};H0(function(t){Sa=or(t.styleDefault,{family:M.familyDefault})});So();function _a(t,e){return(bo[t]||{})[e]}function X0(t,e){return(yo[t]||{})[e]}function mt(t,e){return(Ao[t]||{})[e]}function _o(t){return Co[t]||{prefix:null,iconName:null}}function J0(t){var e=ko[t],n=_a("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return Sa}var Ia=function(){return{prefix:null,iconName:null,rest:[]}};function or(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?te:n,a=tn[r][t],o=nn[r][t]||nn[r][a],c=t in Te.styles?t:null;return o||c||null}var rs=(Rn={},de(Rn,te,Object.keys(rn[te])),de(Rn,oe,Object.keys(rn[oe])),Rn);function cr(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,o=(e={},de(e,te,"".concat(M.cssPrefix,"-").concat(te)),de(e,oe,"".concat(M.cssPrefix,"-").concat(oe)),e),c=null,f=te;(t.includes(o[te])||t.some(function(u){return rs[te].includes(u)}))&&(f=te),(t.includes(o[oe])||t.some(function(u){return rs[oe].includes(u)}))&&(f=oe);var h=t.reduce(function(u,m){var v=K0(M.cssPrefix,m);if(zt[m]?(m=q0[f].includes(m)?k0[f][m]:m,c=m,u.prefix=m):G0[f].indexOf(m)>-1?(c=m,u.prefix=or(m,{family:f})):v?u.iconName=v:m!==M.replacementClass&&m!==o[te]&&m!==o[oe]&&u.rest.push(m),!a&&u.prefix&&u.iconName){var b=c==="fa"?_o(u.iconName):{},S=mt(u.prefix,u.iconName);b.prefix&&(c=null),u.iconName=b.iconName||S||u.iconName,u.prefix=b.prefix||u.prefix,u.prefix==="far"&&!zt.far&&zt.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},Ia());return(t.includes("fa-brands")||t.includes("fab"))&&(h.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(h.prefix="fad"),!h.prefix&&f===oe&&(zt.fass||M.autoFetchSvg)&&(h.prefix="fass",h.iconName=mt(h.prefix,h.iconName)||h.iconName),(h.prefix==="fa"||c==="fa")&&(h.prefix=it()||"fas"),h}var Z0=function(){function t(){u0(this,t),this.definitions={}}return f0(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];var c=a.reduce(this._pullDefinitions,{});Object.keys(c).forEach(function(f){n.definitions[f]=A(A({},n.definitions[f]||{}),c[f]),Xr(f,c[f]);var h=rn[te][f];h&&Xr(h,c[f]),So()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(o){var c=a[o],f=c.prefix,h=c.iconName,u=c.icon,m=u[2];n[f]||(n[f]={}),m.length>0&&m.forEach(function(v){typeof v=="string"&&(n[f][v]=u)}),n[f][h]=u}),n}}]),t}(),as=[],Mt={},Tt={},Q0=Object.keys(Tt);function e6(t,e){var n=e.mixoutsTo;return as=t,Mt={},Object.keys(Tt).forEach(function(r){Q0.indexOf(r)===-1&&delete Tt[r]}),as.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(c){typeof a[c]=="function"&&(n[c]=a[c]),Xn(a[c])==="object"&&Object.keys(a[c]).forEach(function(f){n[c]||(n[c]={}),n[c][f]=a[c][f]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(c){Mt[c]||(Mt[c]=[]),Mt[c].push(o[c])})}r.provides&&r.provides(Tt)}),n}function Jr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var o=Mt[t]||[];return o.forEach(function(c){e=c.apply(null,[e].concat(r))}),e}function wt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=Mt[t]||[];a.forEach(function(o){o.apply(null,n)})}function $e(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Tt[t]?Tt[t].apply(null,e):void 0}function Zr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||it();if(e)return e=mt(n,e)||e,ts(Io.definitions,n,e)||ts(Te.styles,n,e)}var Io=new Z0,t6=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,wt("noAuto")},n6={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return je?(wt("beforeI2svg",e),$e("pseudoElements2svg",e),$e("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,B0(function(){a6({autoReplaceSvgRoot:n}),wt("watch",e)})}},r6={icon:function(e){if(e===null)return null;if(Xn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:mt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=or(e[0]);return{prefix:r,iconName:mt(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(M.cssPrefix,"-"))>-1||e.match(A0))){var a=cr(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||it(),iconName:mt(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var o=it();return{prefix:o,iconName:mt(o,e)||e}}}},Ie={noAuto:t6,config:M,dom:n6,parse:r6,library:Io,findIconDefinition:Zr,toHtml:pn},a6=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Te.styles).length>0||M.autoFetchSvg)&&je&&M.autoReplaceSvg&&Ie.dom.i2svg({node:r})};function lr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return pn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(je){var r=ne.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function i6(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,o=t.styles,c=t.transform;if(Aa(c)&&n.found&&!r.found){var f=n.width,h=n.height,u={x:f/h/2,y:.5};a.style=sr(A(A({},o),{},{"transform-origin":"".concat(u.x+c.x/16,"em ").concat(u.y+c.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function s6(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,o=t.symbol,c=o===!0?"".concat(e,"-").concat(M.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:c}),children:r}]}]}function xa(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,o=t.iconName,c=t.transform,f=t.symbol,h=t.title,u=t.maskId,m=t.titleId,v=t.extra,b=t.watchable,S=b===void 0?!1:b,y=r.found?r:n,E=y.width,k=y.height,N=a==="fak",z=[M.replacementClass,o?"".concat(M.cssPrefix,"-").concat(o):""].filter(function($){return v.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(v.classes).join(" "),P={children:[],attributes:A(A({},v.attributes),{},{"data-prefix":a,"data-icon":o,class:z,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})},D=N&&!~v.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};S&&(P.attributes[vt]=""),h&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(m||sn())},children:[h]}),delete P.attributes.title);var L=A(A({},P),{},{prefix:a,iconName:o,main:n,mask:r,maskId:u,transform:c,symbol:f,styles:A(A({},D),v.styles)}),re=r.found&&n.found?$e("generateAbstractMask",L)||{children:[],attributes:{}}:$e("generateAbstractIcon",L)||{children:[],attributes:{}},W=re.children,ae=re.attributes;return L.children=W,L.attributes=ae,f?s6(L):i6(L)}function is(t){var e=t.content,n=t.width,r=t.height,a=t.transform,o=t.title,c=t.extra,f=t.watchable,h=f===void 0?!1:f,u=A(A(A({},c.attributes),o?{title:o}:{}),{},{class:c.classes.join(" ")});h&&(u[vt]="");var m=A({},c.styles);Aa(a)&&(m.transform=N0({transform:a,startCentered:!0,width:n,height:r}),m["-webkit-transform"]=m.transform);var v=sr(m);v.length>0&&(u.style=v);var b=[];return b.push({tag:"span",attributes:u,children:[e]}),o&&b.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),b}function o6(t){var e=t.content,n=t.title,r=t.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=sr(r.styles);o.length>0&&(a.style=o);var c=[];return c.push({tag:"span",attributes:a,children:[e]}),n&&c.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),c}var Tr=Te.styles;function Qr(t){var e=t[0],n=t[1],r=t.slice(4),a=va(r,1),o=a[0],c=null;return Array.isArray(o)?c={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(ht.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(ht.PRIMARY),fill:"currentColor",d:o[1]}}]}:c={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:c}}var c6={found:!1,width:512,height:512};function l6(t,e){!fo&&!M.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ea(t,e){var n=e;return e==="fa"&&M.styleDefault!==null&&(e=it()),new Promise(function(r,a){if($e("missingIconAbstract"),n==="fa"){var o=_o(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Tr[e]&&Tr[e][t]){var c=Tr[e][t];return r(Qr(c))}l6(t,e),r(A(A({},c6),{},{icon:M.showMissingIcons&&t?$e("missingIconAbstract")||{}:{}}))})}var ss=function(){},ta=M.measurePerformance&&En&&En.mark&&En.measure?En:{mark:ss,measure:ss},Gt='FA "6.3.0"',u6=function(e){return ta.mark("".concat(Gt," ").concat(e," begins")),function(){return xo(e)}},xo=function(e){ta.mark("".concat(Gt," ").concat(e," ends")),ta.measure("".concat(Gt," ").concat(e),"".concat(Gt," ").concat(e," begins"),"".concat(Gt," ").concat(e," ends"))},za={begin:u6,end:xo},Bn=function(){};function os(t){var e=t.getAttribute?t.getAttribute(vt):null;return typeof e=="string"}function f6(t){var e=t.getAttribute?t.getAttribute(ba):null,n=t.getAttribute?t.getAttribute(ya):null;return e&&n}function d6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(M.replacementClass)}function h6(){if(M.autoReplaceSvg===!0)return $n.replace;var t=$n[M.autoReplaceSvg];return t||$n.replace}function m6(t){return ne.createElementNS("http://www.w3.org/2000/svg",t)}function p6(t){return ne.createElement(t)}function zo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?m6:p6:n;if(typeof t=="string")return ne.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(c){a.setAttribute(c,t.attributes[c])});var o=t.children||[];return o.forEach(function(c){a.appendChild(zo(c,{ceFn:r}))}),a}function g6(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var $n={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(zo(a),n)}),n.getAttribute(vt)===null&&M.keepOriginalSource){var r=ne.createComment(g6(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ka(n).indexOf(M.replacementClass))return $n.replace(e);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(f,h){return h===M.replacementClass||h.match(a)?f.toSvg.push(h):f.toNode.push(h),f},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var c=r.map(function(f){return pn(f)}).join(`
`);n.setAttribute(vt,""),n.innerHTML=c}};function cs(t){t()}function Mo(t,e){var n=typeof e=="function"?e:Bn;if(t.length===0)n();else{var r=cs;M.mutateApproach===y0&&(r=at.requestAnimationFrame||cs),r(function(){var a=h6(),o=za.begin("mutate");t.map(a),o(),n()})}}var Ma=!1;function Eo(){Ma=!0}function na(){Ma=!1}var Zn=null;function ls(t){if(Zi&&M.observeMutations){var e=t.treeCallback,n=e===void 0?Bn:e,r=t.nodeCallback,a=r===void 0?Bn:r,o=t.pseudoElementsCallback,c=o===void 0?Bn:o,f=t.observeMutationsRoot,h=f===void 0?ne:f;Zn=new Zi(function(u){if(!Ma){var m=it();Ft(u).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!os(v.addedNodes[0])&&(M.searchPseudoElements&&c(v.target),n(v.target)),v.type==="attributes"&&v.target.parentNode&&M.searchPseudoElements&&c(v.target.parentNode),v.type==="attributes"&&os(v.target)&&~x0.indexOf(v.attributeName))if(v.attributeName==="class"&&f6(v.target)){var b=cr(ka(v.target)),S=b.prefix,y=b.iconName;v.target.setAttribute(ba,S||m),y&&v.target.setAttribute(ya,y)}else d6(v.target)&&a(v.target)})}}),je&&Zn.observe(h,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function v6(){Zn&&Zn.disconnect()}function w6(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var o=a.split(":"),c=o[0],f=o.slice(1);return c&&f.length>0&&(r[c]=f.join(":").trim()),r},{})),n}function b6(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=cr(ka(t));return a.prefix||(a.prefix=it()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=X0(a.prefix,t.innerText)||_a(a.prefix,Kr(t.innerText))),!a.iconName&&M.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function y6(t){var e=Ft(t.attributes).reduce(function(a,o){return a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return M.autoA11y&&(n?e["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||sn()):(e["aria-hidden"]="true",e.focusable="false")),e}function C6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function us(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=b6(t),r=n.iconName,a=n.prefix,o=n.rest,c=y6(t),f=Jr("parseNodeAttributes",{},t),h=e.styleParser?w6(t):[];return A({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:h,attributes:c}},f)}var k6=Te.styles;function To(t){var e=M.autoReplaceSvg==="nest"?us(t,{styleParser:!1}):us(t);return~e.extra.classes.indexOf(ho)?$e("generateLayersText",t,e):$e("generateSvgReplacementMutation",t,e)}var st=new Set;Ca.map(function(t){st.add("fa-".concat(t))});Object.keys(tn[te]).map(st.add.bind(st));Object.keys(tn[oe]).map(st.add.bind(st));st=hn(st);function fs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!je)return Promise.resolve();var n=ne.documentElement.classList,r=function(v){return n.add("".concat(Qi,"-").concat(v))},a=function(v){return n.remove("".concat(Qi,"-").concat(v))},o=M.autoFetchSvg?st:Ca.map(function(m){return"fa-".concat(m)}).concat(Object.keys(k6));o.includes("fa")||o.push("fa");var c=[".".concat(ho,":not([").concat(vt,"])")].concat(o.map(function(m){return".".concat(m,":not([").concat(vt,"])")})).join(", ");if(c.length===0)return Promise.resolve();var f=[];try{f=Ft(t.querySelectorAll(c))}catch{}if(f.length>0)r("pending"),a("complete");else return Promise.resolve();var h=za.begin("onTree"),u=f.reduce(function(m,v){try{var b=To(v);b&&m.push(b)}catch(S){fo||S.name==="MissingIcon"&&console.error(S)}return m},[]);return new Promise(function(m,v){Promise.all(u).then(function(b){Mo(b,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),h(),m()})}).catch(function(b){h(),v(b)})})}function A6(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;To(t).then(function(n){n&&Mo([n],e)})}function S6(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Zr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Zr(a||{})),t(r,A(A({},n),{},{mask:a}))}}var _6=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,o=n.symbol,c=o===void 0?!1:o,f=n.mask,h=f===void 0?null:f,u=n.maskId,m=u===void 0?null:u,v=n.title,b=v===void 0?null:v,S=n.titleId,y=S===void 0?null:S,E=n.classes,k=E===void 0?[]:E,N=n.attributes,z=N===void 0?{}:N,P=n.styles,D=P===void 0?{}:P;if(e){var L=e.prefix,re=e.iconName,W=e.icon;return lr(A({type:"icon"},e),function(){return wt("beforeDOMElementCreation",{iconDefinition:e,params:n}),M.autoA11y&&(b?z["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(y||sn()):(z["aria-hidden"]="true",z.focusable="false")),xa({icons:{main:Qr(W),mask:h?Qr(h.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:re,transform:A(A({},Le),a),symbol:c,title:b,maskId:m,titleId:y,extra:{attributes:z,styles:D,classes:k}})})}},I6={mixout:function(){return{icon:S6(_6)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=fs,n.nodeCallback=A6,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,o=n.callback,c=o===void 0?function(){}:o;return fs(a,c)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,o=r.title,c=r.titleId,f=r.prefix,h=r.transform,u=r.symbol,m=r.mask,v=r.maskId,b=r.extra;return new Promise(function(S,y){Promise.all([ea(a,f),m.iconName?ea(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var k=va(E,2),N=k[0],z=k[1];S([n,xa({icons:{main:N,mask:z},prefix:f,iconName:a,transform:h,symbol:u,maskId:v,title:o,titleId:c,extra:b,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,o=n.main,c=n.transform,f=n.styles,h=sr(f);h.length>0&&(a.style=h);var u;return Aa(c)&&(u=$e("generateAbstractTransformGrouping",{main:o,transform:c,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:a}}}},x6={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,o=a===void 0?[]:a;return lr({type:"layer"},function(){wt("beforeDOMElementCreation",{assembler:n,params:r});var c=[];return n(function(f){Array.isArray(f)?f.map(function(h){c=c.concat(h.abstract)}):c=c.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(hn(o)).join(" ")},children:c}]})}}}},z6={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,o=a===void 0?null:a,c=r.classes,f=c===void 0?[]:c,h=r.attributes,u=h===void 0?{}:h,m=r.styles,v=m===void 0?{}:m;return lr({type:"counter",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:r}),o6({content:n.toString(),title:o,extra:{attributes:u,styles:v,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(hn(f))}})})}}}},M6={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,o=a===void 0?Le:a,c=r.title,f=c===void 0?null:c,h=r.classes,u=h===void 0?[]:h,m=r.attributes,v=m===void 0?{}:m,b=r.styles,S=b===void 0?{}:b;return lr({type:"text",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:r}),is({content:n,transform:A(A({},Le),o),title:f,extra:{attributes:v,styles:S,classes:["".concat(M.cssPrefix,"-layers-text")].concat(hn(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,o=r.transform,c=r.extra,f=null,h=null;if(co){var u=parseInt(getComputedStyle(n).fontSize,10),m=n.getBoundingClientRect();f=m.width/u,h=m.height/u}return M.autoA11y&&!a&&(c.attributes["aria-hidden"]="true"),Promise.resolve([n,is({content:n.innerHTML,width:f,height:h,transform:o,title:a,extra:c,watchable:!0})])}}},E6=new RegExp('"',"ug"),ds=[1105920,1112319];function T6(t){var e=t.replace(E6,""),n=j0(e,0),r=n>=ds[0]&&n<=ds[1],a=e.length===2?e[0]===e[1]:!1;return{value:Kr(a?e[0]:e),isSecondary:r||a}}function hs(t,e){var n="".concat(b0).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var o=Ft(t.children),c=o.filter(function(W){return W.getAttribute(Yr)===e})[0],f=at.getComputedStyle(t,e),h=f.getPropertyValue("font-family").match(S0),u=f.getPropertyValue("font-weight"),m=f.getPropertyValue("content");if(c&&!h)return t.removeChild(c),r();if(h&&m!=="none"&&m!==""){var v=f.getPropertyValue("content"),b=~["Sharp"].indexOf(h[2])?oe:te,S=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(h[2])?nn[b][h[2].toLowerCase()]:_0[b][u],y=T6(v),E=y.value,k=y.isSecondary,N=h[0].startsWith("FontAwesome"),z=_a(S,E),P=z;if(N){var D=J0(E);D.iconName&&D.prefix&&(z=D.iconName,S=D.prefix)}if(z&&!k&&(!c||c.getAttribute(ba)!==S||c.getAttribute(ya)!==P)){t.setAttribute(n,P),c&&t.removeChild(c);var L=C6(),re=L.extra;re.attributes[Yr]=e,ea(z,S).then(function(W){var ae=xa(A(A({},L),{},{icons:{main:W,mask:Ia()},prefix:S,iconName:P,extra:re,watchable:!0})),$=ne.createElement("svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=ae.map(function(F){return pn(F)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function H6(t){return Promise.all([hs(t,"::before"),hs(t,"::after")])}function L6(t){return t.parentNode!==document.head&&!~C0.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ms(t){if(je)return new Promise(function(e,n){var r=Ft(t.querySelectorAll("*")).filter(L6).map(H6),a=za.begin("searchPseudoElements");Eo(),Promise.all(r).then(function(){a(),na(),e()}).catch(function(){a(),na(),n()})})}var P6={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ms,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;M.searchPseudoElements&&ms(a)}}},ps=!1,O6={mixout:function(){return{dom:{unwatch:function(){Eo(),ps=!0}}}},hooks:function(){return{bootstrap:function(){ls(Jr("mutationObserverCallbacks",{}))},noAuto:function(){v6()},watch:function(n){var r=n.observeMutationsRoot;ps?na():ls(Jr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},gs=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var o=a.toLowerCase().split("-"),c=o[0],f=o.slice(1).join("-");if(c&&f==="h")return r.flipX=!0,r;if(c&&f==="v")return r.flipY=!0,r;if(f=parseFloat(f),isNaN(f))return r;switch(c){case"grow":r.size=r.size+f;break;case"shrink":r.size=r.size-f;break;case"left":r.x=r.x-f;break;case"right":r.x=r.x+f;break;case"up":r.y=r.y-f;break;case"down":r.y=r.y+f;break;case"rotate":r.rotate=r.rotate+f;break}return r},n)},V6={mixout:function(){return{parse:{transform:function(n){return gs(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=gs(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,o=n.containerWidth,c=n.iconWidth,f={transform:"translate(".concat(o/2," 256)")},h="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),m="rotate(".concat(a.rotate," 0 0)"),v={transform:"".concat(h," ").concat(u," ").concat(m)},b={transform:"translate(".concat(c/2*-1," -256)")},S={outer:f,inner:v,path:b};return{tag:"g",attributes:A({},S.outer),children:[{tag:"g",attributes:A({},S.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),S.path)}]}]}}}},Hr={x:0,y:0,width:"100%",height:"100%"};function vs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function N6(t){return t.tag==="g"?t.children:[t]}var R6={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),o=a?cr(a.split(" ").map(function(c){return c.trim()})):Ia();return o.prefix||(o.prefix=it()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,o=n.main,c=n.mask,f=n.maskId,h=n.transform,u=o.width,m=o.icon,v=c.width,b=c.icon,S=V0({transform:h,containerWidth:v,iconWidth:u}),y={tag:"rect",attributes:A(A({},Hr),{},{fill:"white"})},E=m.children?{children:m.children.map(vs)}:{},k={tag:"g",attributes:A({},S.inner),children:[vs(A({tag:m.tag,attributes:A(A({},m.attributes),S.path)},E))]},N={tag:"g",attributes:A({},S.outer),children:[k]},z="mask-".concat(f||sn()),P="clip-".concat(f||sn()),D={tag:"mask",attributes:A(A({},Hr),{},{id:z,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,N]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:N6(b)},D]};return r.push(L,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(z,")")},Hr)}),{children:r,attributes:a}}}},D6={provides:function(e){var n=!1;at.matchMedia&&(n=at.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var c=A(A({},o),{},{attributeName:"opacity"}),f={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||f.children.push({tag:"animate",attributes:A(A({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},c),{},{values:"1;0;1;1;0;1;"})}),r.push(f),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},c),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},c),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},F6={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),o=a===null?!1:a===""?!0:a;return n.symbol=o,n}}}},B6=[D0,I6,x6,z6,M6,P6,O6,V6,R6,D6,F6];e6(B6,{mixoutsTo:Ie});Ie.noAuto;Ie.config;var G7=Ie.library;Ie.dom;var ra=Ie.parse;Ie.findIconDefinition;Ie.toHtml;var $6=Ie.icon;Ie.layer;Ie.text;Ie.counter;var Ho={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},U6=Ho,Lo={prefix:"far",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"]},j6=Lo,Ea={prefix:"far",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"]},W6=Ea,q6=Ea,Po={prefix:"far",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"]},G6=Po,Y6={prefix:"far",iconName:"hand-point-right",icon:[512,512,[],"f0a4","M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"]},Oo={prefix:"far",iconName:"face-smile-beam",icon:[512,512,[128522,"smile-beam"],"f5b8","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zm40-89.3l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"]},K6=Oo,Vo={prefix:"far",iconName:"face-grin-stars",icon:[512,512,[129321,"grin-stars"],"f587","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM183.2 132.6c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L176 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L242.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm160 0c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L336 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L402.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm6.3 175.8c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5c10.4-16.1-6.8-32.5-25.5-28.1z"]},X6=Vo,No={prefix:"far",iconName:"address-book",icon:[512,512,[62138,"contact-book"],"f2b9","M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"]},J6=No,Z6={prefix:"far",iconName:"comments",icon:[640,512,[128490,61670],"f086","M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"]},Ro={prefix:"far",iconName:"paste",icon:[512,512,["file-clipboard"],"f0ea","M80 96v16c0 17.7 14.3 32 32 32h60.8c16.6-28.7 47.6-48 83.2-48h62c-7.1-27.6-32.2-48-62-48H215.4C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48H64C28.7 48 0 76.7 0 112V384c0 35.3 28.7 64 64 64h96V400H64c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H80zm64-40a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM256 464c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H384v48c0 17.7 14.3 32 32 32h48V448c0 8.8-7.2 16-16 16H256zm192 48c35.3 0 64-28.7 64-64V227.9c0-12.7-5.1-24.9-14.1-33.9l-51.9-51.9c-9-9-21.2-14.1-33.9-14.1H256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H448z"]},Q6=Ro,Do={prefix:"far",iconName:"face-grin-tongue-squint",icon:[512,512,[128541,"grin-tongue-squint"],"f58a","M464 256c0-114.9-93.1-208-208-208S48 141.1 48 256c0 81.7 47.1 152.4 115.7 186.4c-2.4-8.4-3.7-17.3-3.7-26.4V392.7c-24-17.5-43.1-41.4-54.8-69.2c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7c-11.8 28-31.1 52-55.4 69.6V416c0 9.2-1.3 18-3.7 26.4C416.9 408.4 464 337.7 464 256zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm116-98.9c0-9 9.6-14.7 17.5-10.5l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm262.5-10.5c7.9-4.2 17.5 1.5 17.5 10.5c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9zM320 416V378.6c0-14.7-11.9-26.6-26.6-26.6h-2c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9h-2c-14.7 0-26.6 11.9-26.6 26.6V416c0 35.3 28.7 64 64 64s64-28.7 64-64z"]},e3=Do,Fo={prefix:"far",iconName:"face-flushed",icon:[512,512,[128563,"flushed"],"f579","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM160.4 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm216-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 336c-13.3 0-24 10.7-24 24s10.7 24 24 24H320c13.3 0 24-10.7 24-24s-10.7-24-24-24H192zM160 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm144-80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z"]},t3=Fo,Bo={prefix:"far",iconName:"square-caret-right",icon:[448,512,["caret-square-right"],"f152","M400 96c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320zM384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z"]},n3=Bo,$o={prefix:"far",iconName:"square-minus",icon:[448,512,[61767,"minus-square"],"f146","M312 232C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H312zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"]},r3=$o,a3={prefix:"far",iconName:"compass",icon:[512,512,[129517],"f14e","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Uo={prefix:"far",iconName:"square-caret-down",icon:[448,512,["caret-square-down"],"f150","M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"]},i3=Uo,jo={prefix:"far",iconName:"face-kiss-beam",icon:[512,512,[128537,"kiss-beam"],"f597","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm304.7 41.7c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4c-2.7 1.5-5.7 3-8.7 4.3c3.1 1.3 6 2.7 8.7 4.3c6.6 3.7 12.5 8.2 16.7 13.4c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4C274.7 427.1 257.4 432 240 432c-3.6 0-6.8-2.5-7.7-6s.6-7.2 3.8-9l0 0 0 0 0 0 0 0 .2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1 0 0 0 0 0 0c-2.5-1.4-4.1-4.1-4.1-7s1.6-5.6 4.1-7l0 0 0 0 0 0 0 0 0 0 .2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1 0 0 0 0 0 0c-3.2-1.8-4.7-5.5-3.8-9s4.1-6 7.7-6c17.4 0 34.7 4.9 47.9 12.3c6.6 3.7 12.5 8.2 16.7 13.4zm-87.1-68.9l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"]},s3=jo,o3={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M281.2 248.9C295.6 228.3 304 203.2 304 176c0-70.7-57.3-128-128-128S48 105.3 48 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H93c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C11.6 247.9 0 213.3 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H210.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM176 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H256v16c0 44.2-35.8 80-80 80z"]},c3={prefix:"far",iconName:"flag",icon:[448,512,[127988,61725],"f024","M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z"]},Wo={prefix:"far",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"]},l3=Wo,qo={prefix:"far",iconName:"circle-dot",icon:[512,512,[128280,"dot-circle"],"f192","M160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256C352 309 309 352 256 352C202.1 352 160 309 160 256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]},u3=qo,Go={prefix:"far",iconName:"face-dizzy",icon:[512,512,["dizzy"],"f567","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM103 135c9.4-9.4 24.6-9.4 33.9 0l23 23 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-23-23c-9.4-9.4-9.4-24.6 0-33.9zm192 0c9.4-9.4 24.6-9.4 33.9 0l23 23 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-23-23c-9.4-9.4-9.4-24.6 0-33.9z"]},f3=Go,Ta={prefix:"far",iconName:"futbol",icon:[512,512,[9917,"futbol-ball","soccer-ball"],"f1e3","M177.1 228.6L207.9 320h96.5l29.62-91.38L256 172.1L177.1 228.6zM255.1 0C114.6 0 .0001 114.6 .0001 256S114.6 512 256 512s255.1-114.6 255.1-255.1S397.4 0 255.1 0zM435.2 361.1l-103.9-1.578l-30.67 99.52C286.2 462.2 271.3 464 256 464s-30.19-1.773-44.56-4.93L180.8 359.6L76.83 361.1c-14.93-25.35-24.79-54.01-27.8-84.72L134.3 216.4L100.7 118.1c19.85-22.34 44.32-40.45 72.04-52.62L256 128l83.29-62.47c27.72 12.17 52.19 30.27 72.04 52.62L377.7 216.4l85.23 59.97C459.1 307.1 450.1 335.8 435.2 361.1z"]},d3=Ta,h3=Ta,Yo={prefix:"far",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"]},m3=Yo,Ko={prefix:"far",iconName:"hourglass-half",icon:[384,512,["hourglass-2"],"f252","M0 24C0 10.7 10.7 0 24 0H360c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V67c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V445c0-40.3 16-79 44.5-107.5L158.1 256 76.5 174.5C48 146 32 107.3 32 67V48H24C10.7 48 0 37.3 0 24zM110.5 371.5c-3.9 3.9-7.5 8.1-10.7 12.5H284.2c-3.2-4.4-6.8-8.6-10.7-12.5L192 289.9l-81.5 81.5zM284.2 128C297 110.4 304 89 304 67V48H80V67c0 22.1 7 43.4 19.8 61H284.2z"]},p3=Ko,g3={prefix:"far",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"]},Xo={prefix:"far",iconName:"hand",icon:[512,512,[129306,9995,"hand-paper"],"f256","M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z"]},v3=Xo,w3={prefix:"far",iconName:"hand-spock",icon:[512,512,[128406],"f259","M189.7 25.3l6.2 23.2-6.2-23.2zm48.9 28.4l23.2-6.2v0l-23.2 6.2zM161.3 74.3l-23.2 6.2v0l23.2-6.2zm46.5 175.3l-22.1 9.3c4.9 11.6 17.9 17.5 29.9 13.4s18.7-16.7 15.4-28.9l-23.2 6.2zm-51-121.1l-22.1 9.3 22.1-9.3zm-52.4-21.3l9.3 22.1-9.3-22.1zM83.1 159.5L61 168.8h0l22.1-9.3zm5.4 144.9l14.7-18.9L88.6 304.4zm-56.1 7l18.9 14.7h0L32.4 311.4zm7 56.1L24.7 386.5h0l14.7-18.9zm92 71.6l-14.7 18.9 14.7-18.9zm300.1-48.5l23.3 5.8-23.3-5.8zm55.2-220.9l23.3 5.8v0l-23.3-5.8zm-29.1-48.5l5.8-23.3-5.8 23.3zm-48.5 29.1l23.3 5.8v0l-23.3-5.8zM383 255l-23.3-5.8 0 0L383 255zm-2.6-.5l23.6 4.2 0 0-23.6-4.2zM407.4 103l23.6 4.2v0L407.4 103zM375 56.6l-4.2 23.6L375 56.6zM328.6 89L305 84.8v0L328.6 89zM299.5 252.6l-23.6-4.2 0 0 23.6 4.2zm-8 .3l23.2-6.2 0 0-23.2 6.2zM304 488l.5-24-.5 24zm-157-138L161.8 331l-14.7 18.9zM195.9 48.5c8.5-2.3 17.3 2.8 19.6 11.4l46.4-12.3c-9.1-34.2-44.1-54.5-78.3-45.4l12.3 46.4zM184.5 68.1c-2.3-8.5 2.8-17.3 11.4-19.6L183.6 2.1c-34.2 9.1-54.5 44.1-45.4 78.3l46.4-12.3zM231 243.4L184.5 68.1 138.1 80.4l46.5 175.3L231 243.4zM134.7 137.8l51 121.1L230 240.2 179 119.2l-44.2 18.6zm-21-8.5c8.1-3.4 17.5 .4 21 8.5L179 119.2C165.3 86.6 127.7 71.3 95.2 85l18.6 44.2zm-8.5 21c-3.4-8.1 .4-17.5 8.5-21L95.2 85C62.6 98.7 47.3 136.3 61 168.8l44.2-18.6zm76.2 181l-76.2-181L61 168.8l76.2 181 44.2-18.6zM73.8 323.4l58.5 45.5L161.8 331l-58.5-45.5L73.8 323.4zm-22.5 2.8c5.4-7 15.5-8.2 22.5-2.8l29.5-37.9c-27.9-21.7-68.1-16.7-89.8 11.2l37.9 29.5zm2.8 22.5c-7-5.4-8.2-15.5-2.8-22.5L13.5 296.7c-21.7 27.9-16.7 68.1 11.2 89.8l29.5-37.9zm92 71.6l-92-71.6L24.7 386.5l92 71.6 29.5-37.9zM273.9 464c-46.3 0-91.2-15.4-127.7-43.8l-29.5 37.9C161.6 493 216.9 512 273.9 512V464zm30.1 0H273.9v48H304V464zm2.8 0c-.8 0-1.5 0-2.3 0l-1 48c1.1 0 2.2 0 3.3 0V464zm101.5-79.2C396.7 431.3 354.8 464 306.8 464v48c70 0 131.1-47.7 148-115.6l-46.6-11.6zm55.2-220.9L408.3 384.8l46.6 11.6 55.2-220.9-46.6-11.6zm-11.6-19.4c8.6 2.1 13.8 10.8 11.6 19.4l46.6 11.6c8.6-34.3-12.3-69-46.6-77.6l-11.6 46.6zm-19.4 11.6c2.1-8.6 10.8-13.8 19.4-11.6l11.6-46.6c-34.3-8.6-69 12.3-77.6 46.6l46.6 11.6zM406.3 260.8l26.2-104.7-46.6-11.6L359.7 249.2l46.6 11.6zM381.7 280c11.6 0 21.7-7.9 24.6-19.2l-46.6-11.6c2.5-10.1 11.6-17.2 22-17.2v48zm-24.9-29.7c-2.8 15.5 9.2 29.7 24.9 29.7V232c14.1 0 24.8 12.8 22.3 26.7l-47.3-8.4zM383.8 98.8L356.8 250.3l47.3 8.4L431 107.2l-47.3-8.4zm-13-18.6c8.7 1.5 14.5 9.9 13 18.6l47.3 8.4c6.2-34.8-17-68-51.8-74.2l-8.4 47.3zm-18.6 13c1.5-8.7 9.9-14.5 18.6-13L379.2 33c-34.8-6.2-68 17-74.2 51.8l47.3 8.4zM323.2 256.8L352.2 93.2 305 84.8 275.9 248.4l47.3 8.4zM295.5 280c13.6 0 25.3-9.8 27.7-23.2l-47.3-8.4c1.7-9.5 9.9-16.4 19.6-16.4v48zm-27.2-20.9c3.3 12.3 14.4 20.9 27.2 20.9V232c9 0 16.9 6.1 19.2 14.8l-46.4 12.3zM215.5 59.9l52.8 199.2 46.4-12.3L261.9 47.6 215.5 59.9zM328 488c0 13.4-11.1 24.3-24.5 24l1-48c-13.5-.3-24.5 10.5-24.5 24h48zm-24 24c13.3 0 24-10.8 24-24H280c0-13.2 10.7-24 24-24v48zM137.2 349.8c-6.4-15.2 11.6-29 24.6-18.8l-29.5 37.9c26 20.2 61.9-7.3 49.1-37.7l-44.2 18.6z"]},Jo={prefix:"far",iconName:"face-kiss",icon:[512,512,[128535,"kiss"],"f596","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm304.7 25.7c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4c-2.7 1.5-5.7 3-8.7 4.3c3.1 1.3 6 2.7 8.7 4.3c6.6 3.7 12.5 8.2 16.7 13.4c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4C274.7 411.1 257.4 416 240 416c-3.6 0-6.8-2.5-7.7-6s.6-7.2 3.8-9l0 0 0 0 0 0 0 0 .2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1l-.8-.5-.1-.1-.2-.1 0 0 0 0 0 0c-2.5-1.4-4.1-4.1-4.1-7s1.6-5.6 4.1-7l0 0 0 0 0 0 0 0 0 0 .2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1 0 0 0 0 0 0c-3.2-1.8-4.7-5.5-3.8-9s4.1-6 7.7-6c17.4 0 34.7 4.9 47.9 12.3c6.6 3.7 12.5 8.2 16.7 13.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},b3=Jo,Zo={prefix:"far",iconName:"face-grin-tongue",icon:[512,512,[128539,"grin-tongue"],"f589","M464 256c0-114.9-93.1-208-208-208S48 141.1 48 256c0 81.7 47.1 152.4 115.7 186.4c-2.4-8.4-3.7-17.3-3.7-26.4V363.6c-8.9-8-16.7-17.1-23.1-27.1c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5c18.7-4.4 35.9 12 25.5 28.1c-6.4 9.9-14.2 19-23 27V416c0 9.2-1.3 18-3.7 26.4C416.9 408.4 464 337.7 464 256zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 416V378.6c0-14.7-11.9-26.6-26.6-26.6h-2c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9h-2c-14.7 0-26.6 11.9-26.6 26.6V416c0 35.3 28.7 64 64 64s64-28.7 64-64z"]},y3=Zo,C3={prefix:"far",iconName:"chess-bishop",icon:[320,512,[9821],"f43a","M104 0C90.7 0 80 10.7 80 24c0 11.2 7.6 20.6 18 23.2c-7.8 8-16.1 17-24.4 27C38.2 116.7 0 178.8 0 250.9c0 44.8 24.6 72.2 48 87.8V352H96V325c0-9-5-17.2-13-21.3c-18-9.3-35-24.7-35-52.7c0-55.5 29.8-106.8 62.4-145.9c16-19.2 32.1-34.8 44.2-45.5c1.9-1.7 3.7-3.2 5.3-4.6c1.7 1.4 3.4 3 5.3 4.6c12.1 10.7 28.2 26.3 44.2 45.5c5.3 6.3 10.5 13 15.5 20L159 191c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57.8-57.8c12.8 25.9 21.2 54.3 21.2 83.8c0 28-17 43.4-35 52.7c-8 4.1-13 12.3-13 21.3v27h48V338.7c23.4-15.6 48-42.9 48-87.8c0-72.1-38.2-134.2-73.6-176.7c-8.3-9.9-16.6-19-24.4-27c10.3-2.7 18-12.1 18-23.2c0-13.3-10.7-24-24-24H160 104zM52.7 464l16.6-32H250.8l16.6 32H52.7zm207.9-80H59.5c-12 0-22.9 6.7-28.4 17.3L4.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C0 493.8 18.2 512 40.8 512H279.2c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2c-5.5-10.6-16.5-17.3-28.4-17.3z"]},Qo={prefix:"far",iconName:"face-grin-wink",icon:[512,512,["grin-wink"],"f58c","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"]},k3=Qo,e2={prefix:"far",iconName:"face-grin-wide",icon:[512,512,[128515,"grin-alt"],"f581","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM224 192c0 35.3-14.3 64-32 64s-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64zm96 64c-17.7 0-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64z"]},A3=e2,t2={prefix:"far",iconName:"face-frown-open",icon:[512,512,[128550,"frown-open"],"f57a","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM182.4 382.5c-12.4 5.2-26.5-4.1-21.1-16.4c16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4c-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},S3=t2,_3={prefix:"far",iconName:"hand-point-up",icon:[384,512,[9757],"f0a6","M64 64V241.6c5.2-1 10.5-1.6 16-1.6H96V208 64c0-8.8-7.2-16-16-16s-16 7.2-16 16zM80 288c-17.7 0-32 14.3-32 32c0 0 0 0 0 0v24c0 66.3 53.7 120 120 120h48c52.5 0 97.1-33.7 113.4-80.7c-3.1 .5-6.2 .7-9.4 .7c-20 0-37.9-9.2-49.7-23.6c-9 4.9-19.4 7.6-30.3 7.6c-15.1 0-29-5.3-40-14c-11 8.8-24.9 14-40 14H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h40c8.8 0 16-7.2 16-16s-7.2-16-16-16H120 80zM0 320s0 0 0 0c0-18 6-34.6 16-48V64C16 28.7 44.7 0 80 0s64 28.7 64 64v82c5.1-1.3 10.5-2 16-2c25.3 0 47.2 14.7 57.6 36c7-2.6 14.5-4 22.4-4c20 0 37.9 9.2 49.7 23.6c9-4.9 19.4-7.6 30.3-7.6c35.3 0 64 28.7 64 64v64 24c0 92.8-75.2 168-168 168H168C75.2 512 0 436.8 0 344V320zm336-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v48 16c0 8.8 7.2 16 16 16s16-7.2 16-16V256zM160 240c5.5 0 10.9 .7 16 2v-2V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h16zm64 24v40c0 8.8 7.2 16 16 16s16-7.2 16-16V256 240c0-8.8-7.2-16-16-16s-16 7.2-16 16v24z"]},I3={prefix:"far",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"]},x3={prefix:"far",iconName:"hand-point-down",icon:[384,512,[],"f0a7","M64 448l0-177.6c5.2 1 10.5 1.6 16 1.6l16 0 0 32 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16zM80 224c-17.7 0-32-14.3-32-32c0 0 0 0 0 0l0-24c0-66.3 53.7-120 120-120l48 0c52.5 0 97.1 33.7 113.4 80.7c-3.1-.5-6.2-.7-9.4-.7c-20 0-37.9 9.2-49.7 23.6c-9-4.9-19.4-7.6-30.3-7.6c-15.1 0-29 5.3-40 14c-11-8.8-24.9-14-40-14l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0-40 0zM0 192s0 0 0 0c0 18 6 34.6 16 48l0 208c0 35.3 28.7 64 64 64s64-28.7 64-64l0-82c5.1 1.3 10.5 2 16 2c25.3 0 47.2-14.7 57.6-36c7 2.6 14.5 4 22.4 4c20 0 37.9-9.2 49.7-23.6c9 4.9 19.4 7.6 30.3 7.6c35.3 0 64-28.7 64-64l0-64 0-24C384 75.2 308.8 0 216 0L168 0C75.2 0 0 75.2 0 168l0 24zm336 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64zM160 272c5.5 0 10.9-.7 16-2l0 2 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32 16 0zm64-24l0-40c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-24z"]},n2={prefix:"far",iconName:"folder",icon:[512,512,[128193,128447,61716,"folder-blank"],"f07b","M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"]},z3=n2,M3={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]},r2={prefix:"far",iconName:"square-caret-left",icon:[448,512,["caret-square-left"],"f191","M48 416c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320zm16 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm64-224c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z"]},E3=r2,T3={prefix:"far",iconName:"star",icon:[576,512,[11088,61446],"f005","M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"]},H3={prefix:"far",iconName:"chess-knight",icon:[448,512,[9822],"f441","M210.6 48H101.3l17.1 12.8c6 4.5 9.6 11.6 9.6 19.2s-3.6 14.7-9.6 19.2l-6.5 4.9c-10 7.5-16 19.3-16 31.9l-.3 91c0 10.2 4.9 19.9 13.2 25.8l1.9 1.3c9.9 7.1 23.3 7 33.2-.1l49.9-36.3c10.7-7.8 25.7-5.4 33.5 5.3s5.4 25.7-5.3 33.5l-49.9 36.3-53.8 39.1c-7.3 5.3-13 12.2-16.9 20.1H50.8c5.3-22.1 17.8-41.9 35.9-56.3c-1.3-.8-2.6-1.7-3.8-2.6L81 291.8c-21-15-33.4-39.2-33.3-65l.3-91c.1-19.8 6.7-38.7 18.6-53.9l-.4-.3C54.7 73 48 59.6 48 45.3C48 20.3 68.3 0 93.3 0H210.6C315.2 0 400 84.8 400 189.4c0 11.1-1 22.2-2.9 33.2L374.1 352H325.3l24.5-137.8c1.5-8.2 2.2-16.5 2.2-24.8C352 111.3 288.7 48 210.6 48zM69.2 432L52.7 464H363.3l-16.6-32H69.2zm315.7-30.7l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8H40.8C18.2 512 0 493.8 0 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C36.5 390.7 47.5 384 59.5 384h297c12 0 22.9 6.7 28.4 17.3zM156 128a20 20 0 1 1 0 40 20 20 0 1 1 0-40z"]},a2={prefix:"far",iconName:"face-laugh-squint",icon:[512,512,["laugh-squint"],"f59b","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zm2.8-183.3l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 141.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"]},L3=a2,i2={prefix:"far",iconName:"face-laugh",icon:[512,512,["laugh"],"f599","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},P3=i2,O3={prefix:"far",iconName:"folder-open",icon:[576,512,[128194,128449,61717],"f07c","M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"]},V3={prefix:"far",iconName:"clipboard",icon:[384,512,[128203],"f328","M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},N3={prefix:"far",iconName:"chess-queen",icon:[512,512,[9819],"f445","M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-95.2-8c-18.1 0-31.3 12.8-35.6 26.9c-8 26.2-32.4 45.2-61.2 45.2c-10 0-19.4-2.3-27.7-6.3c-7.6-3.7-16.7-3.3-24 1.2C.7 162.1-3.1 177.1 3.7 188.9L97.6 352H153l-83-144.1c40.5-2.2 75.3-25.9 93.1-59.8c22 26.8 55.4 43.9 92.8 43.9s70.8-17.1 92.8-43.9c17.8 34 52.6 57.7 93.1 59.8L359 352h55.4l93.9-163.1c6.8-11.7 3-26.7-8.6-33.8c-7.3-4.5-16.4-4.9-24-1.2c-8.4 4-17.7 6.3-27.7 6.3c-28.8 0-53.2-19-61.2-45.2C382.5 100.8 369.3 88 351.2 88c-14.5 0-26.3 8.5-32.4 19.3c-12.4 22-35.9 36.7-62.8 36.7s-50.4-14.8-62.8-36.7C187.1 96.5 175.4 88 160.8 88zM133.2 432H378.8l16.6 32H116.7l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3h-265c-12 0-22.9 6.7-28.4 17.3L68.6 452.5c-3 5.8-4.6 12.2-4.6 18.7c0 22.5 18.2 40.8 40.8 40.8H407.2c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2z"]},s2={prefix:"far",iconName:"hand-back-fist",icon:[384,512,["hand-rock"],"f255","M112 64c0-8.8 7.2-16 16-16s16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16V264c0 31.3-20 58-48 67.9c-9.6 3.4-16 12.5-16 22.6V488c0 13.3 10.7 24 24 24s24-10.7 24-24V370.2c38-20.1 64-60.1 64-106.2V160c0-35.3-28.7-64-64-64c-2.8 0-5.6 .2-8.3 .5C300.8 77.1 279.9 64 256 64c-2.8 0-5.6 .2-8.3 .5C236.8 45.1 215.9 32 192 32c-2.8 0-5.6 .2-8.3 .5C172.8 13.1 151.9 0 128 0C92.7 0 64 28.7 64 64v64.3c-11.7 7.4-22.5 16.4-32 26.9l17.8 16.1L32 155.2l-9.4 10.5C8 181.8 0 202.8 0 224.6v12.8C0 287 24.2 333.4 64.8 361.9l13.8-19.7L64.8 361.9l8.9 6.2c6.9 4.8 14.4 8.6 22.3 11.3V488c0 13.3 10.7 24 24 24s24-10.7 24-24V359.9c0-12.6-9.8-23.1-22.4-23.9c-7.3-.5-14.3-2.9-20.3-7.1L88.2 347.5l13.1-18.7-8.9-6.2C64.6 303.1 48 271.3 48 237.4V224.6c0-9.9 3.7-19.4 10.3-26.8l9.4-10.5c3.8-4.2 7.9-8.1 12.3-11.6V208c0 8.8 7.2 16 16 16s16-7.2 16-16V142.3 128 64z"]},R3=s2,o2={prefix:"far",iconName:"square-caret-up",icon:[448,512,["caret-square-up"],"f151","M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 64c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"]},D3=o2,c2={prefix:"far",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M24 32c13.3 0 24 10.7 24 24V408c0 13.3 10.7 24 24 24H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-39.8 0-72-32.2-72-72V56C0 42.7 10.7 32 24 32zM128 136c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24zm24 72H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},F3=c2,B3={prefix:"far",iconName:"window-restore",icon:[512,512,[],"f2d2","M432 48H208c-17.7 0-32 14.3-32 32V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V336h16c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zM48 448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V256H48V448zM64 128H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z"]},l2={prefix:"far",iconName:"square-plus",icon:[448,512,[61846,"plus-square"],"f0fe","M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"]},$3=l2,U3={prefix:"far",iconName:"image",icon:[512,512,[],"f03e","M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},j3={prefix:"far",iconName:"folder-closed",icon:[512,512,[],"e185","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H289.9L247 53.1C233.5 39.6 215.2 32 196.1 32H64zM48 96c0-8.8 7.2-16 16-16H196.1c6.4 0 12.5 2.5 17 7l45.3 45.3c7.5 7.5 17.7 11.7 28.3 11.7H448c8.8 0 16 7.2 16 16v32H48V96zm0 144H464V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V240z"]},W3={prefix:"far",iconName:"lemon",icon:[448,512,[127819],"f094","M368 80c-3.2 0-6.2 .4-8.9 1.3C340 86.8 313 91.9 284.8 84.6C227.4 69.7 160.2 92 110.1 142.1S37.7 259.4 52.6 316.8c7.3 28.2 2.2 55.2-3.3 74.3c-.8 2.8-1.3 5.8-1.3 8.9c0 17.7 14.3 32 32 32c3.2 0 6.2-.4 8.9-1.3c19.1-5.5 46.1-10.7 74.3-3.3c57.4 14.9 124.6-7.4 174.7-57.5s72.4-117.3 57.5-174.7c-7.3-28.2-2.2-55.2 3.3-74.3c.8-2.8 1.3-5.8 1.3-8.9c0-17.7-14.3-32-32-32zm0-48c44.2 0 80 35.8 80 80c0 7.7-1.1 15.2-3.1 22.3c-4.6 15.8-7.1 32.9-3 48.9c20.1 77.6-10.9 161.5-70 220.7s-143.1 90.2-220.7 70c-16-4.1-33-1.6-48.9 3c-7.1 2-14.6 3.1-22.3 3.1c-44.2 0-80-35.8-80-80c0-7.7 1.1-15.2 3.1-22.3c4.6-15.8 7.1-32.9 3-48.9C-14 251.3 17 167.3 76.2 108.2S219.3 18 296.8 38.1c16 4.1 33 1.6 48.9-3c7.1-2 14.6-3.1 22.3-3.1zM246.7 167c-52 15.2-96.5 59.7-111.7 111.7c-3.7 12.7-17.1 20-29.8 16.3s-20-17.1-16.3-29.8c19.8-67.7 76.6-124.5 144.3-144.3c12.7-3.7 26.1 3.6 29.8 16.3s-3.6 26.1-16.3 29.8z"]},q3={prefix:"far",iconName:"handshake",icon:[640,512,[],"f2b5","M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},G3={prefix:"far",iconName:"gem",icon:[512,512,[128142],"f3a5","M168.5 72L256 165l87.5-93h-175zM383.9 99.1L311.5 176h129L383.9 99.1zm50 124.9H256 78.1L256 420.3 433.9 224zM71.5 176h129L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.6 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z"]},u2={prefix:"far",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"]},Y3=u2,f2={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]},K3=f2,d2={prefix:"far",iconName:"circle-stop",icon:[512,512,[62094,"stop-circle"],"f28d","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm192-96H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"]},X3=d2,J3={prefix:"far",iconName:"id-badge",icon:[384,512,[],"f2c1","M256 48V64c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H256zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 320h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]},h2={prefix:"far",iconName:"face-laugh-beam",icon:[512,512,[128513,"laugh-beam"],"f59a","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zm86.9-85.1l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"]},Z3=h2,Q3={prefix:"far",iconName:"registered",icon:[512,512,[174],"f25d","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152V264v96c0 13.3 10.7 24 24 24s24-10.7 24-24V288h60.9l37.2 81.9c5.5 12.1 19.7 17.4 31.8 11.9s17.4-19.7 11.9-31.8L315.7 275c21.8-14.3 36.3-39 36.3-67c0-44.2-35.8-80-80-80H184c-13.3 0-24 10.7-24 24zm48 88V176h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H208z"]},Ha={prefix:"far",iconName:"address-card",icon:[576,512,[62140,"contact-card","vcard"],"f2bb","M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"]},eu=Ha,tu=Ha,m2={prefix:"far",iconName:"face-tired",icon:[512,512,[128555,"tired"],"f5c8","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.5 64.3C196.1 302.1 223.8 288 256 288s59.9 14.1 79.5 32.3C354.5 338.1 368 362 368 384c0 5.4-2.7 10.4-7.2 13.4s-10.2 3.4-15.2 1.3l-17.2-7.5c-22.8-10-47.5-15.1-72.4-15.1s-49.6 5.2-72.4 15.1l-17.2 7.5c-4.9 2.2-10.7 1.7-15.2-1.3s-7.2-8-7.2-13.4c0-22 13.5-45.9 32.5-63.7zm-43-173.6l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 157.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"]},nu=m2,La={prefix:"far",iconName:"font-awesome",icon:[448,512,[62501,62694,"font-awesome-flag","font-awesome-logo-full"],"f2b4","M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56V456c0 13.3 10.7 24 24 24s24-10.7 24-24V124.2l12.5-2.4c16.7-3.2 31.5-8.5 44.2-13.1l0 0 0 0c3.7-1.3 7.1-2.6 10.4-3.7c15.2-5.2 30.4-9.1 51.2-9.1c25.6 0 43 6 63.5 13.3l.5 .2c20.9 7.4 44.8 15.9 79.1 15.9c32.3 0 53.7-6.8 90.5-19.6V342.9l-9.5 3.3c-41.5 14.4-55.2 19.2-81 19.2c-25.7 0-43.1-6-63.6-13.3l-.6-.2c-20.8-7.4-44.8-15.8-79-15.8c-16.8 0-31 2-43.9 5c-12.9 3-20.9 16-17.9 28.9s16 20.9 28.9 17.9c9.6-2.2 20.1-3.7 32.9-3.7c25.6 0 43 6 63.5 13.3l.5 .2c20.9 7.4 44.8 15.9 79.1 15.9c34.4 0 56.4-7.7 97.8-22.2c7.5-2.6 15.5-5.4 24.4-8.5l16.2-5.5V360 72 38.4L416.2 49.3c-9.7 3.3-18.2 6.3-25.7 8.9c-41.5 14.4-55.2 19.2-81 19.2c-25.7 0-43.1-6-63.6-13.3l-.6-.2c-20.8-7.4-44.8-15.8-79-15.8c-27.8 0-48.5 5.5-66.6 11.6c-4.9 1.7-9.3 3.3-13.6 4.8c-11.9 4.3-22 7.9-34.7 10.3L48 75.4V56z"]},ru=La,au=La,p2={prefix:"far",iconName:"face-smile-wink",icon:[512,512,[128521,"smile-wink"],"f4da","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"]},iu=p2,su={prefix:"far",iconName:"file-word",icon:[384,512,[],"f1c2","M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm55 241.1c-3.8-12.7-17.2-19.9-29.9-16.1s-19.9 17.2-16.1 29.9l48 160c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l25-83.4 25 83.4c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-25 83.4-25-83.4c-3-10.2-12.4-17.1-23-17.1s-19.9 7-23 17.1l-25 83.4-25-83.4z"]},ou={prefix:"far",iconName:"file-powerpoint",icon:[384,512,[],"f1c4","M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm72 208c-13.3 0-24 10.7-24 24V336v56c0 13.3 10.7 24 24 24s24-10.7 24-24V360h44c42 0 76-34 76-76s-34-76-76-76H136zm68 104H160V256h44c15.5 0 28 12.5 28 28s-12.5 28-28 28z"]},cu={prefix:"far",iconName:"envelope-open",icon:[512,512,[62135],"f2b6","M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5v13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1V200.5c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2V456c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V276.2zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5V456c0 30.9 25.1 56 56 56H456c30.9 0 56-25.1 56-56V200.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"]},g2={prefix:"far",iconName:"file-zipper",icon:[384,512,["file-archive"],"f1c6","M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16h48v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm48 112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-8.8 0-16 7.2-16 16zm-6.3 71.8L82.1 335.9c-1.4 5.4-2.1 10.9-2.1 16.4c0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.2-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8H136.6c-14.5 0-27.2 9.7-30.9 23.8zM128 336h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},lu=g2,uu={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"]},fu={prefix:"far",iconName:"snowflake",icon:[448,512,[10052,10054],"f2dc","M223 0c13.3 0 24 10.7 24 24V70.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-57 57v76.5l66.2-38.2 20.9-77.8c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4L372 142.2l37.1-21.4c11.5-6.6 26.2-2.7 32.8 8.8s2.7 26.2-8.8 32.8L396 183.8l31.5 8.4c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-77.8-20.9L271 256l66.2 38.2 77.8-20.9c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4L396 328.2l37.1 21.4c11.5 6.6 15.4 21.3 8.8 32.8s-21.3 15.4-32.8 8.8L372 369.8l8.4 31.5c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-20.9-77.8L247 297.6v76.5l57 57c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V441.9l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V297.6l-66.2 38.2-20.9 77.8c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4L74 369.8 36.9 391.2c-11.5 6.6-26.2 2.7-32.8-8.8s-2.7-26.2 8.8-32.8L50 328.2l-31.5-8.4c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l77.8 20.9L175 256l-66.2-38.2L30.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4L50 183.8 12.9 162.4c-11.5-6.6-15.4-21.3-8.8-32.8s21.3-15.4 32.8-8.8L74 142.2l-8.4-31.5c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l20.9 77.8L199 214.4V137.9L142 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V24c0-13.3 10.7-24 24-24z"]},du={prefix:"far",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 432c13.3 0 24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24zM176 136c0-13.3 10.7-24 24-24H408c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm24 136h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm144 0h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 352h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm144 0h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},v2={prefix:"far",iconName:"face-kiss-wink-heart",icon:[512,512,[128536,"kiss-wink-heart"],"f598","M338.9 446.8c-25.4 11-53.4 17.2-82.9 17.2C141.1 464 48 370.9 48 256S141.1 48 256 48s208 93.1 208 208c0 22.4-3.5 43.9-10.1 64.1c3.1 4.5 5.7 9.4 7.8 14.6c12.7-1.6 25.1 .4 36.2 5c9.1-26.2 14-54.4 14-83.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c35.4 0 69.1-7.2 99.7-20.2c-4.8-5.5-8.5-12.2-10.4-19.7l-6.5-25.3zM296 316c0-6.9-3.1-13.2-7.3-18.3c-4.3-5.2-10.1-9.7-16.7-13.4C258.7 276.9 241.4 272 224 272c-3.6 0-6.8 2.5-7.7 6s.6 7.2 3.8 9l0 0 0 0 0 0 .2 .1c.2 .1 .5 .3 .9 .5c.8 .5 2 1.2 3.4 2.1c2.8 1.9 6.5 4.5 10.2 7.6c3.7 3.1 7.2 6.6 9.6 10.1c2.5 3.5 3.5 6.4 3.5 8.6s-1 5-3.5 8.6c-2.5 3.5-5.9 6.9-9.6 10.1c-3.7 3.1-7.4 5.7-10.2 7.6c-1.4 .9-2.6 1.6-3.4 2.1c-.4 .2-.7 .4-.9 .5l-.2 .1 0 0 0 0 0 0 0 0 0 0c-2.5 1.4-4.1 4.1-4.1 7s1.6 5.6 4.1 7l0 0 0 0 0 0 .2 .1c.2 .1 .5 .3 .9 .5c.8 .5 2 1.2 3.4 2.1c2.8 1.9 6.5 4.5 10.2 7.6c3.7 3.1 7.2 6.6 9.6 10.1c2.5 3.5 3.5 6.4 3.5 8.6s-1 5-3.5 8.6c-2.5 3.5-5.9 6.9-9.6 10.1c-3.7 3.1-7.4 5.7-10.2 7.6c-1.4 .9-2.6 1.6-3.4 2.1c-.4 .2-.7 .4-.9 .5l-.2 .1 0 0 0 0 0 0 0 0c-3.2 1.8-4.7 5.5-3.8 9s4.1 6 7.7 6c17.4 0 34.7-4.9 47.9-12.3c6.6-3.7 12.5-8.2 16.7-13.4c4.3-5.1 7.3-11.4 7.3-18.3s-3.1-13.2-7.3-18.3c-4.3-5.2-10.1-9.7-16.7-13.4c-2.7-1.5-5.7-3-8.7-4.3c3.1-1.3 6-2.7 8.7-4.3c6.6-3.7 12.5-8.2 16.7-13.4c4.3-5.1 7.3-11.4 7.3-18.3zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm159.3-20c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C375.7 186.8 355 180 335.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zM434 352.3c-6-23.2-28.8-37-51.1-30.8s-35.4 30.1-29.5 53.4l22.9 89.3c2.2 8.7 11.2 13.9 19.8 11.4l84.9-23.8c22.2-6.2 35.4-30.1 29.5-53.4s-28.8-37-51.1-30.8l-20.2 5.6-5.4-21z"]},hu=v2,w2={prefix:"far",iconName:"star-half-stroke",icon:[576,512,["star-half-alt"],"f5c0","M378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8zM287.1 384.7C291.9 384.7 295.7 385.6 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.1 79.09L287.1 384.7z"]},mu=w2,pu={prefix:"far",iconName:"file-excel",icon:[384,512,[],"f1c3","M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z"]},b2={prefix:"far",iconName:"face-grin-beam",icon:[512,512,[128516,"grin-beam"],"f582","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM217.6 228.8l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"]},gu=b2,vu={prefix:"far",iconName:"object-ungroup",icon:[640,512,[],"f248","M48.2 66.8c-.1-.8-.2-1.7-.2-2.5c0-.1 0-.1 0-.2c0-8.8 7.2-16 16-16c.9 0 1.9 .1 2.8 .2C74.3 49.5 80 56.1 80 64c0 8.8-7.2 16-16 16c-7.9 0-14.5-5.7-15.8-13.2zM0 64c0 26.9 16.5 49.9 40 59.3V228.7C16.5 238.1 0 261.1 0 288c0 35.3 28.7 64 64 64c26.9 0 49.9-16.5 59.3-40H324.7c9.5 23.5 32.5 40 59.3 40c35.3 0 64-28.7 64-64c0-26.9-16.5-49.9-40-59.3V123.3c23.5-9.5 40-32.5 40-59.3c0-35.3-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40H123.3C113.9 16.5 90.9 0 64 0C28.7 0 0 28.7 0 64zm368 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM324.7 88c6.5 16 19.3 28.9 35.3 35.3V228.7c-16 6.5-28.9 19.3-35.3 35.3H123.3c-6.5-16-19.3-28.9-35.3-35.3V123.3c16-6.5 28.9-19.3 35.3-35.3H324.7zM384 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM80 288c0 7.9-5.7 14.5-13.2 15.8c-.8 .1-1.7 .2-2.5 .2l-.2 0c-8.8 0-16-7.2-16-16c0-.9 .1-1.9 .2-2.8C49.5 277.7 56.1 272 64 272c8.8 0 16 7.2 16 16zm391.3-40h45.4c6.5 16 19.3 28.9 35.3 35.3V388.7c-16 6.5-28.9 19.3-35.3 35.3H315.3c-6.5-16-19.3-28.9-35.3-35.3V352H232v36.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64c26.9 0 49.9-16.5 59.3-40H516.7c9.5 23.5 32.5 40 59.3 40c35.3 0 64-28.7 64-64c0-26.9-16.5-49.9-40-59.3V283.3c23.5-9.5 40-32.5 40-59.3c0-35.3-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40H448v16.4c9.8 8.8 17.8 19.5 23.3 31.6zm88.9-26.7a16 16 0 1 1 31.5 5.5 16 16 0 1 1 -31.5-5.5zM271.8 450.7a16 16 0 1 1 -31.5-5.5 16 16 0 1 1 31.5 5.5zm301.5 13c-7.5-1.3-13.2-7.9-13.2-15.8c0-8.8 7.2-16 16-16c7.9 0 14.5 5.7 15.8 13.2l0 .1c.1 .9 .2 1.8 .2 2.7c0 8.8-7.2 16-16 16c-.9 0-1.9-.1-2.8-.2z"]},y2={prefix:"far",iconName:"circle-right",icon:[512,512,[61838,"arrow-alt-circle-right"],"f35a","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"]},wu=y2,C2={prefix:"far",iconName:"face-rolling-eyes",icon:[512,512,[128580,"meh-rolling-eyes"],"f5a5","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 376c0 13.3 10.7 24 24 24H320c13.3 0 24-10.7 24-24s-10.7-24-24-24H192c-13.3 0-24 10.7-24 24zm-8-104c-26.5 0-48-21.5-48-48c0-14.3 6.3-27.2 16.2-36c-.2 1.3-.2 2.6-.2 4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.4-.1-2.7-.2-4c10 8.8 16.2 21.7 16.2 36c0 26.5-21.5 48-48 48zm0 32a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm192-32c-26.5 0-48-21.5-48-48c0-14.3 6.3-27.2 16.2-36c-.2 1.3-.2 2.6-.2 4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.4-.1-2.7-.2-4c10 8.8 16.2 21.7 16.2 36c0 26.5-21.5 48-48 48zm0 32a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},bu=C2,yu={prefix:"far",iconName:"object-group",icon:[512,512,[],"f247","M16 115.8C6.2 107 0 94.2 0 80C0 53.5 21.5 32 48 32c14.2 0 27 6.2 35.8 16H428.2c8.8-9.8 21.6-16 35.8-16c26.5 0 48 21.5 48 48c0 14.2-6.2 27-16 35.8V396.2c9.8 8.8 16 21.6 16 35.8c0 26.5-21.5 48-48 48c-14.2 0-27-6.2-35.8-16H83.8C75 473.8 62.2 480 48 480c-26.5 0-48-21.5-48-48c0-14.2 6.2-27 16-35.8V115.8zM93.3 96c-4.8 13.6-15.6 24.4-29.3 29.3V386.7c13.6 4.8 24.4 15.6 29.3 29.3H418.7c4.8-13.6 15.6-24.4 29.3-29.3V125.3c-13.6-4.8-24.4-15.6-29.3-29.3H93.3zM96 160c0-17.7 14.3-32 32-32H256c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160zM224 320h32c35.3 0 64-28.7 64-64V224h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32V320z"]},Cu={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]},k2={prefix:"far",iconName:"face-surprise",icon:[512,512,[128558,"surprise"],"f5c2","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM256 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},ku=k2,A2={prefix:"far",iconName:"circle-pause",icon:[512,512,[62092,"pause-circle"],"f28b","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24z"]},Au=A2,Su={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]},S2={prefix:"far",iconName:"circle-up",icon:[512,512,[61467,"arrow-alt-circle-up"],"f35b","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.1 217.4c-4.5 4.2-7.1 10.1-7.1 16.3c0 12.3 10 22.3 22.3 22.3H208v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256h57.7c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.1-16.3L269.8 117.5c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5L135.1 217.4z"]},_u=S2,Iu={prefix:"far",iconName:"file-audio",icon:[384,512,[],"f1c7","M64 464H320c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM192 272V400c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5L129.4 376H112c-8.8 0-16-7.2-16-16V312c0-8.8 7.2-16 16-16h17.4l35.3-35.3c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8zm85.8-4c11.6 20 18.2 43.3 18.2 68s-6.6 48-18.2 68c-6.6 11.5-21.3 15.4-32.8 8.8s-15.4-21.3-8.8-32.8c7.5-12.9 11.8-27.9 11.8-44s-4.3-31.1-11.8-44c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8z"]},xu={prefix:"far",iconName:"file-image",icon:[384,512,[128443],"f1c5","M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2h48 32 40 72c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z"]},_2={prefix:"far",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},zu=_2,I2={prefix:"far",iconName:"face-meh-blank",icon:[512,512,[128566,"meh-blank"],"f5a4","M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Mu=I2,Eu={prefix:"far",iconName:"eye",icon:[576,512,[128065],"f06e","M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"]},x2={prefix:"far",iconName:"face-sad-cry",icon:[512,512,[128557,"sad-cry"],"f5b3","M400 406.1V288c0-13.3-10.7-24-24-24s-24 10.7-24 24V440.6c-28.7 15-61.4 23.4-96 23.4s-67.3-8.5-96-23.4V288c0-13.3-10.7-24-24-24s-24 10.7-24 24V406.1C72.6 368.2 48 315 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 59-24.6 112.2-64 150.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.6 220c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C199.7 186.8 179 180 159.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zm166.6 9.7c5.5-5.8 14.8-9.7 25.4-9.7s19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C391.7 186.8 371 180 351.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9zM208 320v32c0 26.5 21.5 48 48 48s48-21.5 48-48V320c0-26.5-21.5-48-48-48s-48 21.5-48 48z"]},Tu=x2,Hu={prefix:"far",iconName:"file-code",icon:[384,512,[],"f1c9","M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z"]},Lu={prefix:"far",iconName:"window-maximize",icon:[512,512,[128470],"f2d0","M.3 89.5C.1 91.6 0 93.8 0 96V224 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V224 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224H464l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z"]},z2={prefix:"far",iconName:"face-frown",icon:[512,512,[9785,"frown"],"f119","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Pu=z2,M2={prefix:"far",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]},Ou=M2,E2={prefix:"far",iconName:"comment-dots",icon:[512,512,[128172,62075,"commenting"],"f4ad","M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},Vu=E2,T2={prefix:"far",iconName:"face-grin-squint",icon:[512,512,[128518,"grin-squint"],"f585","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zm-216-161.7l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 157.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"]},Nu=T2,Ru={prefix:"far",iconName:"hand-pointer",icon:[448,512,[],"f25a","M160 64c0-8.8 7.2-16 16-16s16 7.2 16 16V200c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c8.8 0 16 7.2 16 16v8c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16v96 8c0 39.8-32.2 72-72 72H272 212.3h-.9c-37.4 0-72.4-18.7-93.2-49.9L50.7 312.9c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4L116 353.2c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23V320 64zM176 0c-35.3 0-64 28.7-64 64V261.7C91.2 238 55.5 232.8 28.5 250.7C-.9 270.4-8.9 310.1 10.8 339.5L78.3 440.8c29.7 44.5 79.6 71.2 133.1 71.2h.9H272h56c66.3 0 120-53.7 120-120v-8V288c0-35.3-28.7-64-64-64c-2.8 0-5.6 .2-8.3 .5c-11-19.4-31.8-32.5-55.7-32.5c-5.4 0-10.5 .7-15.5 1.9c-10.8-20.2-32-33.9-56.5-33.9c-2.7 0-5.4 .2-8 .5V64c0-35.3-28.7-64-64-64zm48 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z"]},Du={prefix:"far",iconName:"hand-scissors",icon:[512,512,[],"f257","M.2 276.3c-1.2-35.3 26.4-65 61.7-66.2l3.3-.1L57 208.1C22.5 200.5 .7 166.3 8.3 131.8S50.2 75.5 84.7 83.2l173 38.3c2.3-2.9 4.6-5.7 7.1-8.5l18.4-20.3C299.9 74.5 323.5 64 348.3 64l10.2 0c54.1 0 104.1 28.7 131.3 75.4l1.5 2.6c13.6 23.2 20.7 49.7 20.7 76.6L512 344c0 66.3-53.7 120-120 120l-8 0-96 0c-35.3 0-64-28.7-64-64c0-2.8 .2-5.6 .5-8.3c-19.4-11-32.5-31.8-32.5-55.7c0-.8 0-1.6 0-2.4L66.4 338c-35.3 1.2-65-26.4-66.2-61.7zm63.4-18.2c-8.8 .3-15.7 7.7-15.4 16.5s7.7 15.7 16.5 15.4l161.5-5.6c9.8-.3 18.7 5.3 22.7 14.2s2.2 19.3-4.5 26.4c-2.8 2.9-4.4 6.7-4.4 11c0 8.8 7.2 16 16 16c9.1 0 17.4 5.1 21.5 13.3s3.2 17.9-2.3 25.1c-2 2.7-3.2 6-3.2 9.6c0 8.8 7.2 16 16 16l96 0 8 0c39.8 0 72-32.2 72-72l0-125.4c0-18.4-4.9-36.5-14.2-52.4l-1.5-2.6c-18.6-32-52.8-51.6-89.8-51.6l-10.2 0c-11.3 0-22 4.8-29.6 13.1l-17.5-15.9 17.5 15.9-18.4 20.3c-.6 .6-1.1 1.3-1.7 1.9l57 13.2c8.6 2 14 10.6 12 19.2s-10.6 14-19.2 12l-85.6-19.7L74.3 130c-8.6-1.9-17.2 3.5-19.1 12.2s3.5 17.2 12.2 19.1l187.5 41.6c10.2 2.3 17.8 10.9 18.7 21.4l.1 1c.6 6.6-1.5 13.1-5.8 18.1s-10.6 7.9-17.2 8.2L63.6 258.1z"]},H2={prefix:"far",iconName:"face-grin-tears",icon:[640,512,[128514,"grin-tears"],"f588","M516.1 325.5c1 3 2.1 6 3.3 8.9c3.3 8.1 8.4 18.5 16.5 26.6c3.9 3.9 8.2 7.4 12.7 10.3C506.4 454.8 419.9 512 320 512s-186.4-57.2-228.6-140.6c4.5-2.9 8.7-6.3 12.7-10.3c8.1-8.1 13.2-18.6 16.5-26.6c1.2-2.9 2.3-5.9 3.3-8.9C152.5 406.2 229.5 464 320 464s167.5-57.8 196.1-138.5zM320 48c-101.4 0-185.8 72.5-204.3 168.5c-6.7-3.1-14.3-4.3-22.3-3.1c-6.8 .9-16.2 2.4-26.6 4.4C85.3 94.5 191.6 0 320 0S554.7 94.5 573.2 217.7c-10.3-2-19.8-3.5-26.6-4.4c-8-1.2-15.7 .1-22.3 3.1C505.8 120.5 421.4 48 320 48zM78.5 341.1C60 356.7 32 355.5 14.3 337.7c-18.7-18.7-19.1-48.8-.7-67.2c8.6-8.6 30.1-15.1 50.5-19.6c13-2.8 25.5-4.8 33.9-6c5.4-.8 9.9 3.7 9 9c-3.1 21.5-11.4 70.2-25.5 84.4c-.9 1-1.9 1.8-2.9 2.7zm483 0c-.8-.6-1.5-1.3-2.3-2c-.2-.2-.5-.4-.7-.7c-14.1-14.1-22.5-62.9-25.5-84.4c-.8-5.4 3.7-9.9 9-9c1 .1 2.2 .3 3.3 .5c8.2 1.2 19.2 3 30.6 5.5c20.4 4.4 41.9 10.9 50.5 19.6c18.4 18.4 18 48.5-.7 67.2c-17.7 17.7-45.7 19-64.2 3.4zM439 336.5C414.4 374.6 370.3 400 319.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5c18.7-4.4 35.9 12 25.5 28.1zM281.6 228.8l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0zm160 0l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0z"]},Fu=H2,L2={prefix:"far",iconName:"calendar-xmark",icon:[448,512,["calendar-times"],"f273","M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zm-95 89l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Bu=L2,$u={prefix:"far",iconName:"file-video",icon:[384,512,[],"f1c8","M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM80 288c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v16l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3V387.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1L240 368v16c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32V288z"]},Uu={prefix:"far",iconName:"file-pdf",icon:[448,512,[],"f1c1","M64 464H96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288H336V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zm96-112h24c30.9 0 56 25.1 56 56s-25.1 56-56 56h-8v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v48h8zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H272c-8.8 0-16-7.2-16-16V368zm32 112h8c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16h-8v96zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H400v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368c0-8.8 7.2-16 16-16z"]},ju={prefix:"far",iconName:"comment",icon:[512,512,[128489,61669],"f075","M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"]},Wu={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},P2={prefix:"far",iconName:"hourglass",icon:[384,512,[9203,62032,"hourglass-empty"],"f254","M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48h8V67c0 40.3 16 79 44.5 107.5L158.1 256 76.5 337.5C48 366 32 404.7 32 445v19H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V445c0-40.3-16-79-44.5-107.5L225.9 256l81.5-81.5C336 146 352 107.3 352 67V48h8c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM192 289.9l81.5 81.5C293 391 304 417.4 304 445v19H80V445c0-27.6 11-54 30.5-73.5L192 289.9zm0-67.9l-81.5-81.5C91 121 80 94.6 80 67V48H304V67c0 27.6-11 54-30.5 73.5L192 222.1z"]},qu=P2,Gu={prefix:"far",iconName:"calendar-check",icon:[448,512,[],"f274","M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},O2={prefix:"far",iconName:"hard-drive",icon:[512,512,[128436,"hdd"],"f0a0","M64 80c-8.8 0-16 7.2-16 16V258c5.1-1.3 10.5-2 16-2H448c5.5 0 10.9 .7 16 2V96c0-8.8-7.2-16-16-16H64zM48 320v96c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V320c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM0 320V96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V320v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320zm280 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Yu=O2,V2={prefix:"far",iconName:"face-grin-squint-tears",icon:[512,512,[129315,"grin-squint-tears"],"f586","M426.8 14.2C446-5 477.5-4.6 497.1 14.9s20 51 .7 70.3c-14.8 14.8-65.7 23.6-88.3 26.7c-5.6 .9-10.3-3.9-9.5-9.5C403.3 79.9 412 29 426.8 14.2zM75 75C158.2-8.3 284.5-22.2 382.2 33.2c-1.5 4.8-2.9 9.6-4.1 14.3c-3.1 12.2-5.5 24.6-7.3 35c-80.8-53.6-190.7-44.8-261.9 26.4C37.7 180.1 28.9 290 82.5 370.8c-10.5 1.8-22.9 4.2-35 7.3c-4.7 1.2-9.5 2.5-14.3 4.1C-22.2 284.5-8.2 158.2 75 75zm389.6 58.9c4.7-1.2 9.5-2.5 14.3-4.1C534.2 227.5 520.2 353.8 437 437c-83.2 83.2-209.5 97.2-307.2 41.8c1.5-4.8 2.8-9.6 4-14.3c3.1-12.2 5.5-24.6 7.3-35c80.8 53.6 190.7 44.8 261.9-26.4c71.2-71.2 80-181.1 26.4-261.9c10.5-1.8 22.9-4.2 35-7.3zm-105.4 93c10.1-16.3 33.9-16.9 37.9 1.9c9.5 44.4-3.7 93.5-39.3 129.1s-84.8 48.8-129.1 39.3c-18.7-4-18.2-27.8-1.9-37.9c25.2-15.7 50.2-35.4 73.6-58.8s43.1-48.4 58.8-73.6zM92 265.3l97.4-29.7c11.6-3.5 22.5 7.3 19 19l-29.7 97.4c-2.6 8.6-13.4 11.3-19.8 4.9c-2-2-3.2-4.6-3.4-7.3l-5.1-56.1-56.1-5.1c-2.8-.3-5.4-1.5-7.3-3.4c-6.3-6.3-3.6-17.2 4.9-19.8zm193-178.2c2 2 3.2 4.6 3.4 7.3l5.1 56.1 56.1 5.1c2.8 .3 5.4 1.5 7.3 3.4c6.3 6.3 3.6 17.2-4.9 19.8l-97.4 29.7c-11.6 3.5-22.5-7.3-19-19L265.3 92c2.6-8.6 13.4-11.3 19.8-4.9zM14.9 497.1c-19.6-19.6-20-51-.7-70.3C29 412 79.8 403.2 102.4 400.1c5.6-.9 10.3 3.9 9.5 9.5c-3.2 22.5-11.9 73.5-26.7 88.3C66 517 34.5 516.6 14.9 497.1z"]},Ku=V2,N2={prefix:"far",iconName:"rectangle-list",icon:[576,512,["list-alt"],"f022","M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Xu=N2,Ju={prefix:"far",iconName:"calendar-plus",icon:[448,512,[],"f271","M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V256c0-13.3-10.7-24-24-24z"]},R2={prefix:"far",iconName:"circle-left",icon:[512,512,[61840,"arrow-alt-circle-left"],"f359","M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H256V150.3c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"]},Zu=R2,D2={prefix:"far",iconName:"money-bill-1",icon:[576,512,["money-bill-alt"],"f3d1","M112 112c0 35.3-28.7 64-64 64V336c35.3 0 64 28.7 64 64H464c0-35.3 28.7-64 64-64V176c-35.3 0-64-28.7-64-64H112zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm80-48c0 8.8 7.2 16 16 16v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h24 24c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8V208c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16z"]},Qu=D2,F2={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},ef=F2,tf={prefix:"far",iconName:"keyboard",icon:[576,512,[9e3],"f11c","M64 112c-8.8 0-16 7.2-16 16V384c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 320H400c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16z"]},nf={prefix:"far",iconName:"closed-captioning",icon:[576,512,[],"f20a","M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z"]},rf={prefix:"far",iconName:"images",icon:[576,512,[],"f302","M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},B2={prefix:"far",iconName:"face-grin",icon:[512,512,[128512,"grin"],"f580","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},af=B2,$2={prefix:"far",iconName:"face-meh",icon:[512,512,[128528,"meh"],"f11a","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM184 328c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z"]},sf=$2,U2={prefix:"far",iconName:"id-card",icon:[576,512,[62147,"drivers-license"],"f2c2","M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"]},of=U2,cf={prefix:"far",iconName:"sun",icon:[512,512,[9728],"f185","M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]},j2={prefix:"far",iconName:"face-laugh-wink",icon:[512,512,["laugh-wink"],"f59c","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"]},lf=j2,W2={prefix:"far",iconName:"circle-down",icon:[512,512,[61466,"arrow-alt-circle-down"],"f358","M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z"]},uf=W2,ff={prefix:"far",iconName:"thumbs-down",icon:[512,512,[128078,61576],"f165","M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16H286.5c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8H384c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H32z"]},df={prefix:"far",iconName:"chess-pawn",icon:[320,512,[9823],"f443","M232 152A72 72 0 1 0 88 152a72 72 0 1 0 144 0zm24 120H243.4l10.7 80H205.7L195 272H160 125l-10.7 80H65.9l10.7-80H64c-13.3 0-24-10.7-24-24s10.7-24 24-24c-15.1-20.1-24-45-24-72C40 85.7 93.7 32 160 32s120 53.7 120 120c0 27-8.9 51.9-24 72c13.3 0 24 10.7 24 24s-10.7 24-24 24zM52.7 464H267.3l-16.6-32H69.2L52.7 464zm207.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8H40.8C18.2 512 0 493.8 0 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C36.5 390.7 47.5 384 59.5 384h201z"]},q2={prefix:"far",iconName:"credit-card",icon:[576,512,[128179,62083,"credit-card-alt"],"f09d","M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"]},hf=q2,mf={prefix:"far",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"]},pf={prefix:"far",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"]},Pa={prefix:"far",iconName:"hospital",icon:[640,512,[127973,62589,"hospital-alt","hospital-wide"],"f0f8","M232 0c-39.8 0-72 32.2-72 72v8H72C32.2 80 0 112.2 0 152V440c0 39.8 32.2 72 72 72h.2 .2 .2 .2 .2H73h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2H75h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2H77h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2H79h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2H82h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2H85h.2 .2 .2 .2H86h.2 .2 .2 .2H87h.2 .2 .2 .2H88h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2H98h.2 .2 .2 .2H99h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2v0H456h8v0H568c39.8 0 72-32.2 72-72V152c0-39.8-32.2-72-72-72H480V72c0-39.8-32.2-72-72-72H232zM480 128h88c13.3 0 24 10.7 24 24v40H536c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v48H536c-13.3 0-24 10.7-24 24s10.7 24 24 24h56V440c0 13.3-10.7 24-24 24H480V336 128zM72 128h88V464h-.1-.2-.2-.2H159h-.2-.2-.2H158h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H154h-.2-.2-.2H153h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H150h-.2-.2-.2H149h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H146h-.2-.2-.2H145h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H142h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H139h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H136h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H133h-.2-.2-.2-.2-.2-.2-.2-.2H131h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H128h-.2-.2-.2-.2-.2-.2-.2-.2H126h-.2-.2-.2-.2-.2-.2-.2-.2H124h-.2-.2-.2-.2-.2-.2-.2-.2H122h-.2-.2-.2-.2-.2-.2-.2-.2H120h-.2-.2-.2-.2-.2-.2-.2-.2H118h-.2-.2-.2-.2-.2-.2-.2-.2H116h-.2-.2-.2-.2-.2-.2-.2-.2H114h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H111h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H108h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H105h-.2-.2-.2-.2H104h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H100h-.2-.2-.2-.2H99h-.2-.2-.2-.2H98h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H88h-.2-.2-.2-.2H87h-.2-.2-.2-.2H86h-.2-.2-.2-.2H85h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H82h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H79h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H77h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H75h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H73h-.2-.2-.2-.2-.2H72c-13.2 0-24-10.7-24-24V336h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H48V240h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H48V152c0-13.3 10.7-24 24-24zM208 72c0-13.3 10.7-24 24-24H408c13.3 0 24 10.7 24 24V336 464H368V400c0-26.5-21.5-48-48-48s-48 21.5-48 48v64H208V72zm88 24v24H272c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V168h24c8.8 0 16-7.2 16-16V136c0-8.8-7.2-16-16-16H344V96c0-8.8-7.2-16-16-16H312c-8.8 0-16 7.2-16 16z"]},gf=Pa,vf=Pa,wf={prefix:"far",iconName:"chess-rook",icon:[384,512,[9820],"f447","M48 80V192c0 2.5 1.2 4.9 3.2 6.4l51.2 38.4c6.8 5.1 10.4 13.4 9.5 21.9L101.5 352H53.2l9.4-85L22.4 236.8C8.3 226.2 0 209.6 0 192V72C0 49.9 17.9 32 40 32H344c22.1 0 40 17.9 40 40V192c0 17.6-8.3 34.2-22.4 44.8L321.4 267l9.4 85H282.5l-10.4-93.3c-.9-8.4 2.7-16.8 9.5-21.9l51.2-38.4c2-1.5 3.2-3.9 3.2-6.4V80H272v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V80H160v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V80H48zm4.7 384H331.3l-16.6-32H69.2L52.7 464zm271.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8H40.8C18.2 512 0 493.8 0 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C36.5 390.7 47.5 384 59.5 384h265zM176 288c-8.8 0-16-7.2-16-16V224c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 8.8-7.2 16-16 16H176z"]},bf={prefix:"far",iconName:"star-half",icon:[576,512,[61731],"f089","M293.3 .6123C304.2 3.118 311.9 12.82 311.9 24V408.7C311.9 417.5 307.1 425.7 299.2 429.8L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.1 115.1 483.9L142.2 328.4L31.11 218.3C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C271.2 3.46 282.4-1.893 293.3 .6127L293.3 .6123zM263.9 128.4L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L263.9 394.3L263.9 128.4z"]},yf={prefix:"far",iconName:"chess-king",icon:[448,512,[9818],"f43f","M248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V56H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v40H59.6C26.7 144 0 170.7 0 203.6c0 8.2 1.7 16.3 4.9 23.8L59.1 352h52.3L49 208.2c-.6-1.5-1-3-1-4.6c0-6.4 5.2-11.6 11.6-11.6H224 388.4c6.4 0 11.6 5.2 11.6 11.6c0 1.6-.3 3.2-1 4.6L336.5 352h52.3l54.2-124.6c3.3-7.5 4.9-15.6 4.9-23.8c0-32.9-26.7-59.6-59.6-59.6H248V104h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V24zM101.2 432H346.8l16.6 32H84.7l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3H91.5c-12 0-22.9 6.7-28.4 17.3L36.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C32 493.8 50.2 512 72.8 512H375.2c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2z"]},G2={prefix:"far",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"]},Cf=G2,kf={prefix:"far",iconName:"copy",icon:[512,512,[],"f0c5","M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H304v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16h64V160H64z"]},Y2={prefix:"far",iconName:"share-from-square",icon:[576,512,[61509,"share-square"],"f14d","M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"]},Af=Y2,Sf={prefix:"far",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"]},_f={prefix:"far",iconName:"map",icon:[576,512,[128506,62072],"f279","M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.2-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z"]},If={prefix:"far",iconName:"bell-slash",icon:[640,512,[128277,61943],"f1f6","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L542.6 400c2.7-7.8 1.3-16.5-3.9-23l-14.9-18.6C495.5 322.9 480 278.8 480 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V49.9c-43.9 7-81.5 32.7-104.4 68.7L38.8 5.1zM221.7 148.4C239.6 117.1 273.3 96 312 96h8 8c57.4 0 104 46.6 104 104v33.4c0 32.7 6.4 64.8 18.7 94.5L221.7 148.4zm-61.7 85c0 45.4-15.5 89.5-43.8 124.9L101.3 377c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6H406.2l-60.9-48H168.3c21.2-32.8 34.4-70.3 38.4-109.1L160 222.1v11.4zM384 448H320 256c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"]},xf={prefix:"far",iconName:"hand-lizard",icon:[512,512,[],"f258","M72 112c-13.3 0-24 10.7-24 24s10.7 24 24 24H240c35.3 0 64 28.7 64 64s-28.7 64-64 64H136c-13.3 0-24 10.7-24 24s10.7 24 24 24H288c4.5 0 8.9 1.3 12.7 3.6l64 40c7 4.4 11.3 12.1 11.3 20.4v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V413.3L281.1 384H136c-39.8 0-72-32.2-72-72s32.2-72 72-72H240c8.8 0 16-7.2 16-16s-7.2-16-16-16H72c-39.8 0-72-32.2-72-72S32.2 64 72 64H281.6c46.7 0 90.9 21.5 119.7 58.3l78.4 100.1c20.9 26.7 32.3 59.7 32.3 93.7V424c0 13.3-10.7 24-24 24s-24-10.7-24-24V316.1c0-23.2-7.8-45.8-22.1-64.1L363.5 151.9c-19.7-25.2-49.9-39.9-81.9-39.9H72z"]},K2={prefix:"far",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},zf=K2,Mf={prefix:"far",iconName:"hand-peace",icon:[448,512,[9996],"f25b","M218.8 1.4c-35.2-3.7-66.6 21.8-70.3 57L142 119 124.7 69.6C113 36.3 76.4 18.8 43.1 30.5S-7.8 78.8 3.9 112.1L56.7 262.2C41.5 276.7 32 297.3 32 320v0 24c0 92.8 75.2 168 168 168h48c92.8 0 168-75.2 168-168V272 256 224c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4c-10.4-21.3-32.3-36-57.6-36c-.7 0-1.5 0-2.2 0l5.9-56.3c3.7-35.2-21.8-66.6-57-70.3zm-.2 155.4C211.9 166.9 208 179 208 192v48c0 .7 0 1.4 0 2c-5.1-1.3-10.5-2-16-2h-7.4l-5.4-15.3 17-161.3c.9-8.8 8.8-15.2 17.6-14.2s15.2 8.8 14.2 17.6l-9.5 90.1zM79.4 85.6L133.7 240H112c-4 0-8 .3-11.9 .9L49.2 96.2c-2.9-8.3 1.5-17.5 9.8-20.4s17.5 1.5 20.4 9.8zM256 192c0-8.8 7.2-16 16-16s16 7.2 16 16v32 16c0 8.8-7.2 16-16 16s-16-7.2-16-16V192zm38.4 108c10.4 21.3 32.3 36 57.6 36c5.5 0 10.9-.7 16-2v10c0 66.3-53.7 120-120 120H200c-66.3 0-120-53.7-120-120l0-24 0 0c0-17.7 14.3-32 32-32h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c35.3 0 64-28.7 64-64c0-.7 0-1.4 0-2c5.1 1.3 10.5 2 16 2c7.9 0 15.4-1.4 22.4-4zM368 272c0 8.8-7.2 16-16 16s-16-7.2-16-16V240 224c0-8.8 7.2-16 16-16s16 7.2 16 16v32 16z"]},X2={prefix:"far",iconName:"face-grin-hearts",icon:[512,512,[128525,"grin-hearts"],"f584","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM215.3 137.1c17.8 4.8 28.4 23.1 23.6 40.8l-17.4 65c-2.3 8.5-11.1 13.6-19.6 11.3l-65.1-17.4c-17.8-4.8-28.4-23.1-23.6-40.8s23.1-28.4 40.8-23.6l16.1 4.3 4.3-16.1c4.8-17.8 23.1-28.4 40.8-23.6zm122.3 23.6l4.3 16.1 16.1-4.3c17.8-4.8 36.1 5.8 40.8 23.6s-5.8 36.1-23.6 40.8l-65.1 17.4c-8.5 2.3-17.3-2.8-19.6-11.3l-17.4-65c-4.8-17.8 5.8-36.1 23.6-40.8s36.1 5.8 40.9 23.6z"]},Ef=X2,Tf={prefix:"far",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z"]},J2={prefix:"far",iconName:"face-grin-beam-sweat",icon:[512,512,[128517,"grin-beam-sweat"],"f583","M476.8 126.3C497.1 120.8 512 102.7 512 81c0-20-28.6-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0c-9.5 12.6-27.1 37.2-36 57.5c-.3 .7-.6 1.4-.9 2.1C417.8 69.7 416 76 416 81c0 26 21.5 47 48 47c4.4 0 8.7-.6 12.8-1.7zM395.4 41.2C355.3 15.2 307.4 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256c0-35.8-7.3-69.9-20.6-100.8c-8.6 3.1-17.8 4.8-27.4 4.8c-8.9 0-17.6-1.5-25.7-4.2C454.7 185.5 464 219.7 464 256c0 114.9-93.1 208-208 208S48 370.9 48 256S141.1 48 256 48c48.7 0 93.4 16.7 128.9 44.7c-.6-3.8-.9-7.7-.9-11.7c0-11.4 3.8-22.4 7.1-30.5c1.3-3.1 2.7-6.2 4.3-9.3zM375 336.5c10.4-16.1-6.8-32.5-25.5-28.1c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5zM217.6 228.8l0 0 0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C126.7 188.4 120 206.1 120 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8l0 0 0 0 0 0 .2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2 0 0zm160 0l0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C286.7 188.4 280 206.1 280 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8l0 0 0 0 0 0 .2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2 0 0 0 0z"]},Hf=J2,Lf={prefix:"far",iconName:"moon",icon:[384,512,[127769,9214],"f186","M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"]},Pf={prefix:"far",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"]},Z2={prefix:"far",iconName:"face-grin-tongue-wink",icon:[512,512,[128540,"grin-tongue-wink"],"f58b","M348.3 442.4c2.4-8.4 3.7-17.3 3.7-26.4V363.5c8.8-8 16.6-17.1 23-27c10.4-16.1-6.8-32.5-25.5-28.1c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c6.5 10 14.3 19.1 23.1 27.1V416c0 9.2 1.3 18 3.7 26.4C95.1 408.4 48 337.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 81.7-47.1 152.4-115.7 186.4zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.6 220c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C199.7 186.8 179 180 159.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zm176.7 12a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-.4-72a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM320 416c0 35.3-28.7 64-64 64s-64-28.7-64-64V378.6c0-14.7 11.9-26.6 26.6-26.6h2c11.3 0 21.1 7.9 23.6 18.9c2.8 12.6 20.8 12.6 23.6 0c2.5-11.1 12.3-18.9 23.6-18.9h2c14.7 0 26.6 11.9 26.6 26.6V416z"]},Of=Z2,Vf={prefix:"far",iconName:"clone",icon:[512,512,[],"f24d","M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"]},Q2={prefix:"far",iconName:"face-angry",icon:[512,512,[128544,"angry"],"f556","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm72.4-118.5c9.7-9 10.2-24.2 1.2-33.9C315.3 344.3 290.6 328 256 328s-59.3 16.3-73.5 31.6c-9 9.7-8.5 24.9 1.2 33.9s24.9 8.5 33.9-1.2c7.4-7.9 20-16.4 38.5-16.4s31.1 8.5 38.5 16.4c9 9.7 24.2 10.2 33.9 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"]},Nf=Q2,ur={prefix:"far",iconName:"rectangle-xmark",icon:[512,512,[62164,"rectangle-times","times-rectangle","window-close"],"f410","M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H448C456.8 432 464 424.8 464 416V96C464 87.16 456.8 80 448 80H64C55.16 80 48 87.16 48 96z"]},Rf=ur,Df=ur,Ff=ur,Bf={prefix:"far",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"]},$f={prefix:"far",iconName:"life-ring",icon:[512,512,[],"f1cd","M385.1 419.1C349.7 447.2 304.8 464 256 464s-93.7-16.8-129.1-44.9l80.4-80.4c14.3 8.4 31 13.3 48.8 13.3s34.5-4.8 48.8-13.3l80.4 80.4zm68.1 .2C489.9 374.9 512 318.1 512 256s-22.1-118.9-58.8-163.3L465 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L419.3 58.8C374.9 22.1 318.1 0 256 0S137.1 22.1 92.7 58.8L81 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L58.8 92.7C22.1 137.1 0 193.9 0 256s22.1 118.9 58.8 163.3L47 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l11.8-11.8C137.1 489.9 193.9 512 256 512s118.9-22.1 163.3-58.8L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-11.8-11.8zm-34.1-34.1l-80.4-80.4c8.4-14.3 13.3-31 13.3-48.8s-4.8-34.5-13.3-48.8l80.4-80.4C447.2 162.3 464 207.2 464 256s-16.8 93.7-44.9 129.1zM385.1 92.9l-80.4 80.4c-14.3-8.4-31-13.3-48.8-13.3s-34.5 4.8-48.8 13.3L126.9 92.9C162.3 64.8 207.2 48 256 48s93.7 16.8 129.1 44.9zM173.3 304.8L92.9 385.1C64.8 349.7 48 304.8 48 256s16.8-93.7 44.9-129.1l80.4 80.4c-8.4 14.3-13.3 31-13.3 48.8s4.8 34.5 13.3 48.8zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]},e1={prefix:"far",iconName:"face-grimace",icon:[512,512,[128556,"grimace"],"f57f","M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM168 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h8V320h-8zm40 48h32V320H208v48zm96 0V320H272v48h32zm32 0h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v48zM168 288H344c30.9 0 56 25.1 56 56s-25.1 56-56 56H168c-30.9 0-56-25.1-56-56s25.1-56 56-56zm-23.6-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Uf=e1,jf={prefix:"far",iconName:"calendar-minus",icon:[448,512,[],"f272","M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM296 352H152c-13.3 0-24-10.7-24-24s10.7-24 24-24H296c13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},Oa={prefix:"far",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]},Wf=Oa,qf=Oa,Gf={prefix:"far",iconName:"thumbs-up",icon:[512,512,[128077,61575],"f164","M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"]},Yf={prefix:"far",iconName:"window-minimize",icon:[512,512,[128469],"f2d1","M24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z"]},Kf={prefix:"far",iconName:"square-full",icon:[512,512,[128997,128998,128999,129e3,129001,129002,129003,11035,11036],"f45c","M512 0V512H0V0H512zM464 48H48V464H464V48z"]},t1={prefix:"far",iconName:"note-sticky",icon:[448,512,[62026,"sticky-note"],"f249","M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H288V352c0-17.7 14.3-32 32-32h80V96c0-8.8-7.2-16-16-16H64zM288 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V320v5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7H288z"]},Xf=t1,n1={prefix:"far",iconName:"face-sad-tear",icon:[512,512,[128546,"sad-tear"],"f5b4","M175.9 448c-35-.1-65.5-22.6-76-54.6C67.6 356.8 48 308.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208s-93.1 208-208 208c-28.4 0-55.5-5.7-80.1-16zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0C156.6 308.6 128 349 128 369zm128-65c-13.3 0-24 10.7-24 24s10.7 24 24 24c30.7 0 58.7 11.5 80 30.6c9.9 8.8 25 8 33.9-1.9s8-25-1.9-33.9C338.3 320.2 299 304 256 304zm47.6-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},Jf=n1,Zf={prefix:"far",iconName:"hand-point-left",icon:[512,512,[],"f0a5","M64 128l177.6 0c-1 5.2-1.6 10.5-1.6 16l0 16-32 0L64 160c-8.8 0-16-7.2-16-16s7.2-16 16-16zm224 16c0-17.7 14.3-32 32-32c0 0 0 0 0 0l24 0c66.3 0 120 53.7 120 120l0 48c0 52.5-33.7 97.1-80.7 113.4c.5-3.1 .7-6.2 .7-9.4c0-20-9.2-37.9-23.6-49.7c4.9-9 7.6-19.4 7.6-30.3c0-15.1-5.3-29-14-40c8.8-11 14-24.9 14-40l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-40 0-40zm32-80s0 0 0 0c-18 0-34.6 6-48 16L64 80C28.7 80 0 108.7 0 144s28.7 64 64 64l82 0c-1.3 5.1-2 10.5-2 16c0 25.3 14.7 47.2 36 57.6c-2.6 7-4 14.5-4 22.4c0 20 9.2 37.9 23.6 49.7c-4.9 9-7.6 19.4-7.6 30.3c0 35.3 28.7 64 64 64l64 0 24 0c92.8 0 168-75.2 168-168l0-48c0-92.8-75.2-168-168-168l-24 0zM256 400c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0zM240 224c0 5.5 .7 10.9 2 16l-2 0-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0 16zm24 64l40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l24 0z"]},Y7={faTrashCan:Ho,faTrashAlt:U6,faMessage:Lo,faCommentAlt:j6,faFileLines:Ea,faFileAlt:W6,faFileText:q6,faCalendarDays:Po,faCalendarAlt:G6,faHandPointRight:Y6,faFaceSmileBeam:Oo,faSmileBeam:K6,faFaceGrinStars:Vo,faGrinStars:X6,faAddressBook:No,faContactBook:J6,faComments:Z6,faPaste:Ro,faFileClipboard:Q6,faFaceGrinTongueSquint:Do,faGrinTongueSquint:e3,faFaceFlushed:Fo,faFlushed:t3,faSquareCaretRight:Bo,faCaretSquareRight:n3,faSquareMinus:$o,faMinusSquare:r3,faCompass:a3,faSquareCaretDown:Uo,faCaretSquareDown:i3,faFaceKissBeam:jo,faKissBeam:s3,faLightbulb:o3,faFlag:c3,faSquareCheck:Wo,faCheckSquare:l3,faCircleDot:qo,faDotCircle:u3,faFaceDizzy:Go,faDizzy:f3,faFutbol:Ta,faFutbolBall:d3,faSoccerBall:h3,faPenToSquare:Yo,faEdit:m3,faHourglassHalf:Ko,faHourglass2:p3,faEyeSlash:g3,faHand:Xo,faHandPaper:v3,faHandSpock:w3,faFaceKiss:Jo,faKiss:b3,faFaceGrinTongue:Zo,faGrinTongue:y3,faChessBishop:C3,faFaceGrinWink:Qo,faGrinWink:k3,faFaceGrinWide:e2,faGrinAlt:A3,faFaceFrownOpen:t2,faFrownOpen:S3,faHandPointUp:_3,faBookmark:I3,faHandPointDown:x3,faFolder:n2,faFolderBlank:z3,faUser:M3,faSquareCaretLeft:r2,faCaretSquareLeft:E3,faStar:T3,faChessKnight:H3,faFaceLaughSquint:a2,faLaughSquint:L3,faFaceLaugh:i2,faLaugh:P3,faFolderOpen:O3,faClipboard:V3,faChessQueen:N3,faHandBackFist:s2,faHandRock:R3,faSquareCaretUp:o2,faCaretSquareUp:D3,faChartBar:c2,faBarChart:F3,faWindowRestore:B3,faSquarePlus:l2,faPlusSquare:$3,faImage:U3,faFolderClosed:j3,faLemon:W3,faHandshake:q3,faGem:G3,faCirclePlay:u2,faPlayCircle:Y3,faCircleCheck:f2,faCheckCircle:K3,faCircleStop:d2,faStopCircle:X3,faIdBadge:J3,faFaceLaughBeam:h2,faLaughBeam:Z3,faRegistered:Q3,faAddressCard:Ha,faContactCard:eu,faVcard:tu,faFaceTired:m2,faTired:nu,faFontAwesome:La,faFontAwesomeFlag:ru,faFontAwesomeLogoFull:au,faFaceSmileWink:p2,faSmileWink:iu,faFileWord:su,faFilePowerpoint:ou,faEnvelopeOpen:cu,faFileZipper:g2,faFileArchive:lu,faSquare:uu,faSnowflake:fu,faNewspaper:du,faFaceKissWinkHeart:v2,faKissWinkHeart:hu,faStarHalfStroke:w2,faStarHalfAlt:mu,faFileExcel:pu,faFaceGrinBeam:b2,faGrinBeam:gu,faObjectUngroup:vu,faCircleRight:y2,faArrowAltCircleRight:wu,faFaceRollingEyes:C2,faMehRollingEyes:bu,faObjectGroup:yu,faHeart:Cu,faFaceSurprise:k2,faSurprise:ku,faCirclePause:A2,faPauseCircle:Au,faCircle:Su,faCircleUp:S2,faArrowAltCircleUp:_u,faFileAudio:Iu,faFileImage:xu,faCircleQuestion:_2,faQuestionCircle:zu,faFaceMehBlank:I2,faMehBlank:Mu,faEye:Eu,faFaceSadCry:x2,faSadCry:Tu,faFileCode:Hu,faWindowMaximize:Lu,faFaceFrown:z2,faFrown:Pu,faFloppyDisk:M2,faSave:Ou,faCommentDots:E2,faCommenting:Vu,faFaceGrinSquint:T2,faGrinSquint:Nu,faHandPointer:Ru,faHandScissors:Du,faFaceGrinTears:H2,faGrinTears:Fu,faCalendarXmark:L2,faCalendarTimes:Bu,faFileVideo:$u,faFilePdf:Uu,faComment:ju,faEnvelope:Wu,faHourglass:P2,faHourglassEmpty:qu,faCalendarCheck:Gu,faHardDrive:O2,faHdd:Yu,faFaceGrinSquintTears:V2,faGrinSquintTears:Ku,faRectangleList:N2,faListAlt:Xu,faCalendarPlus:Ju,faCircleLeft:R2,faArrowAltCircleLeft:Zu,faMoneyBill1:D2,faMoneyBillAlt:Qu,faClock:F2,faClockFour:ef,faKeyboard:tf,faClosedCaptioning:nf,faImages:rf,faFaceGrin:B2,faGrin:af,faFaceMeh:$2,faMeh:sf,faIdCard:U2,faDriversLicense:of,faSun:cf,faFaceLaughWink:j2,faLaughWink:lf,faCircleDown:W2,faArrowAltCircleDown:uf,faThumbsDown:ff,faChessPawn:df,faCreditCard:q2,faCreditCardAlt:hf,faBell:mf,faFile:pf,faHospital:Pa,faHospitalAlt:gf,faHospitalWide:vf,faChessRook:wf,faStarHalf:bf,faChessKing:yf,faCircleUser:G2,faUserCircle:Cf,faCopy:kf,faShareFromSquare:Y2,faShareSquare:Af,faCopyright:Sf,faMap:_f,faBellSlash:If,faHandLizard:xf,faFaceSmile:K2,faSmile:zf,faHandPeace:Mf,faFaceGrinHearts:X2,faGrinHearts:Ef,faBuilding:Tf,faFaceGrinBeamSweat:J2,faGrinBeamSweat:Hf,faMoon:Lf,faCalendar:Pf,faFaceGrinTongueWink:Z2,faGrinTongueWink:Of,faClone:Vf,faFaceAngry:Q2,faAngry:Nf,faRectangleXmark:ur,faRectangleTimes:Rf,faTimesRectangle:Df,faWindowClose:Ff,faPaperPlane:Bf,faLifeRing:$f,faFaceGrimace:e1,faGrimace:Uf,faCalendarMinus:jf,faCircleXmark:Oa,faTimesCircle:Wf,faXmarkCircle:qf,faThumbsUp:Gf,faWindowMinimize:Yf,faSquareFull:Kf,faNoteSticky:t1,faStickyNote:Xf,faFaceSadTear:n1,faSadTear:Jf,faHandPointLeft:Zf};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let a=t.charCodeAt(r);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Qf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const a=t[n++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=t[n++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=t[n++],c=t[n++],f=t[n++],h=((a&7)<<18|(o&63)<<12|(c&63)<<6|f&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],c=t[n++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|c&63)}}return e.join("")},a1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<t.length;a+=3){const o=t[a],c=a+1<t.length,f=c?t[a+1]:0,h=a+2<t.length,u=h?t[a+2]:0,m=o>>2,v=(o&3)<<4|f>>4;let b=(f&15)<<2|u>>6,S=u&63;h||(S=64,c||(b=64)),r.push(n[m],n[v],n[b],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<t.length;){const o=n[t.charAt(a++)],f=a<t.length?n[t.charAt(a)]:0;++a;const u=a<t.length?n[t.charAt(a)]:64;++a;const v=a<t.length?n[t.charAt(a)]:64;if(++a,o==null||f==null||u==null||v==null)throw new e8;const b=o<<2|f>>4;if(r.push(b),u!==64){const S=f<<4&240|u>>2;if(r.push(S),v!==64){const y=u<<6&192|v;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class e8 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const t8=function(t){const e=r1(t);return a1.encodeByteArray(e,!0)},i1=function(t){return t8(t).replace(/\./g,"")},s1=function(t){try{return a1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n8(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r8=()=>n8().__FIREBASE_DEFAULTS__,a8=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},i8=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&s1(t[1]);return e&&JSON.parse(e)},Va=()=>{try{return r8()||a8()||i8()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},s8=t=>{var e,n;return(n=(e=Va())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},o8=()=>{var t;return(t=Va())===null||t===void 0?void 0:t.config},o1=t=>{var e;return(e=Va())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c8{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function l8(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function u8(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f8(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d8(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function h8(){try{return typeof indexedDB=="object"}catch{return!1}}function m8(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p8="FirebaseError";class ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=p8,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},a=`${this.service}/${e}`,o=this.errors[e],c=o?g8(o,r):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new ot(a,f,r)}}function g8(t,e){return t.replace(v8,(n,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const v8=/\{\$([^}]+)}/g;function w8(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const a of n){if(!r.includes(a))return!1;const o=t[a],c=e[a];if(ws(o)&&ws(c)){if(!Qn(o,c))return!1}else if(o!==c)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function ws(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function Kt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function b8(t,e){const n=new y8(t,e);return n.subscribe.bind(n)}class y8{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let a;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");C8(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:r},a.next===void 0&&(a.next=Lr),a.error===void 0&&(a.error=Lr),a.complete===void 0&&(a.complete=Lr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C8(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class Rt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k8{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new c8;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(S8(e))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dt){return this.instances.has(e)}getOptions(e=dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(o);r===f&&c.resolve(a)}return a}onInit(e,n){var r;const a=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(a,o);const c=this.instances.get(a);return c&&e(c,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const a of r)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:A8(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dt){return this.component?this.component.multipleInstances?e:dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function A8(t){return t===dt?void 0:t}function S8(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _8{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new k8(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const I8={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},x8=ee.INFO,z8={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},M8=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),a=z8[e];if(a)console[a](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class c1{constructor(e){this.name=e,this._logLevel=x8,this._logHandler=M8,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I8[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const E8=(t,e)=>e.some(n=>t instanceof n);let bs,ys;function T8(){return bs||(bs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H8(){return ys||(ys=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l1=new WeakMap,aa=new WeakMap,u1=new WeakMap,Pr=new WeakMap,Na=new WeakMap;function L8(t){const e=new Promise((n,r)=>{const a=()=>{t.removeEventListener("success",o),t.removeEventListener("error",c)},o=()=>{n(nt(t.result)),a()},c=()=>{r(t.error),a()};t.addEventListener("success",o),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&l1.set(n,t)}).catch(()=>{}),Na.set(e,t),e}function P8(t){if(aa.has(t))return;const e=new Promise((n,r)=>{const a=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",c),t.removeEventListener("abort",c)},o=()=>{n(),a()},c=()=>{r(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",o),t.addEventListener("error",c),t.addEventListener("abort",c)});aa.set(t,e)}let ia={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return aa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||u1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O8(t){ia=t(ia)}function V8(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Or(this),e,...n);return u1.set(r,e.sort?e.sort():[e]),nt(r)}:H8().includes(t)?function(...e){return t.apply(Or(this),e),nt(l1.get(this))}:function(...e){return nt(t.apply(Or(this),e))}}function N8(t){return typeof t=="function"?V8(t):(t instanceof IDBTransaction&&P8(t),E8(t,T8())?new Proxy(t,ia):t)}function nt(t){if(t instanceof IDBRequest)return L8(t);if(Pr.has(t))return Pr.get(t);const e=N8(t);return e!==t&&(Pr.set(t,e),Na.set(e,t)),e}const Or=t=>Na.get(t);function R8(t,e,{blocked:n,upgrade:r,blocking:a,terminated:o}={}){const c=indexedDB.open(t,e),f=nt(c);return r&&c.addEventListener("upgradeneeded",h=>{r(nt(c.result),h.oldVersion,h.newVersion,nt(c.transaction))}),n&&c.addEventListener("blocked",()=>n()),f.then(h=>{o&&h.addEventListener("close",()=>o()),a&&h.addEventListener("versionchange",()=>a())}).catch(()=>{}),f}const D8=["get","getKey","getAll","getAllKeys","count"],F8=["put","add","delete","clear"],Vr=new Map;function Cs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vr.get(e))return Vr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,a=F8.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||D8.includes(n)))return;const o=async function(c,...f){const h=this.transaction(c,a?"readwrite":"readonly");let u=h.store;return r&&(u=u.index(f.shift())),(await Promise.all([u[n](...f),a&&h.done]))[0]};return Vr.set(e,o),o}O8(t=>({...t,get:(e,n,r)=>Cs(e,n)||t.get(e,n,r),has:(e,n)=>!!Cs(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B8{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($8(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $8(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sa="@firebase/app",ks="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new c1("@firebase/app"),U8="@firebase/app-compat",j8="@firebase/analytics-compat",W8="@firebase/analytics",q8="@firebase/app-check-compat",G8="@firebase/app-check",Y8="@firebase/auth",K8="@firebase/auth-compat",X8="@firebase/database",J8="@firebase/database-compat",Z8="@firebase/functions",Q8="@firebase/functions-compat",ed="@firebase/installations",td="@firebase/installations-compat",nd="@firebase/messaging",rd="@firebase/messaging-compat",ad="@firebase/performance",id="@firebase/performance-compat",sd="@firebase/remote-config",od="@firebase/remote-config-compat",cd="@firebase/storage",ld="@firebase/storage-compat",ud="@firebase/firestore",fd="@firebase/firestore-compat",dd="firebase",hd="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="[DEFAULT]",md={[sa]:"fire-core",[U8]:"fire-core-compat",[W8]:"fire-analytics",[j8]:"fire-analytics-compat",[G8]:"fire-app-check",[q8]:"fire-app-check-compat",[Y8]:"fire-auth",[K8]:"fire-auth-compat",[X8]:"fire-rtdb",[J8]:"fire-rtdb-compat",[Z8]:"fire-fn",[Q8]:"fire-fn-compat",[ed]:"fire-iid",[td]:"fire-iid-compat",[nd]:"fire-fcm",[rd]:"fire-fcm-compat",[ad]:"fire-perf",[id]:"fire-perf-compat",[sd]:"fire-rc",[od]:"fire-rc-compat",[cd]:"fire-gcs",[ld]:"fire-gcs-compat",[ud]:"fire-fst",[fd]:"fire-fst-compat","fire-js":"fire-js",[dd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Map,ca=new Map;function pd(t,e){try{t.container.addComponent(e)}catch(n){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function on(t){const e=t.name;if(ca.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;ca.set(e,t);for(const n of er.values())pd(n,t);return!0}function f1(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rt=new gn("app","Firebase",gd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=hd;function wd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw rt.create("bad-app-name",{appName:String(a)});if(n||(n=o8()),!n)throw rt.create("no-options");const o=er.get(a);if(o){if(Qn(n,o.options)&&Qn(r,o.config))return o;throw rt.create("duplicate-app",{appName:a})}const c=new _8(a);for(const h of ca.values())c.addComponent(h);const f=new vd(n,r,c);return er.set(a,f),f}function bd(t=oa){const e=er.get(t);if(!e&&t===oa)return wd();if(!e)throw rt.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let a=(r=md[t])!==null&&r!==void 0?r:t;n&&(a+=`-${n}`);const o=a.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const f=[`Unable to register library "${a}" with version "${e}":`];o&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(f.join(" "));return}on(new Rt(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="firebase-heartbeat-database",Cd=1,cn="firebase-heartbeat-store";let Nr=null;function d1(){return Nr||(Nr=R8(yd,Cd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cn)}}}).catch(t=>{throw rt.create("idb-open",{originalErrorMessage:t.message})})),Nr}async function kd(t){try{return(await d1()).transaction(cn).objectStore(cn).get(h1(t))}catch(e){if(e instanceof ot)bt.warn(e.message);else{const n=rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(n.message)}}}async function As(t,e){try{const r=(await d1()).transaction(cn,"readwrite");return await r.objectStore(cn).put(e,h1(t)),r.done}catch(n){if(n instanceof ot)bt.warn(n.message);else{const r=rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bt.warn(r.message)}}}function h1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=1024,Sd=30*24*60*60*1e3;class _d{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ss();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=Sd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ss(),{heartbeatsToSend:n,unsentEntries:r}=Id(this._heartbeatsCache.heartbeats),a=i1(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Ss(){return new Date().toISOString().substring(0,10)}function Id(t,e=Ad){const n=[];let r=t.slice();for(const a of t){const o=n.find(c=>c.agent===a.agent);if(o){if(o.dates.push(a.date),_s(n)>e){o.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),_s(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return h8()?m8().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return As(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return As(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function _s(t){return i1(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){on(new Rt("platform-logger",e=>new B8(e),"PRIVATE")),on(new Rt("heartbeat",e=>new _d(e),"PRIVATE")),Ht(sa,ks,t),Ht(sa,ks,"esm2017"),Ht("fire-js","")}zd("");var Md="firebase",Ed="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(Md,Ed,"app");function Ra(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]]);return n}function m1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Td=m1,p1=new gn("auth","Firebase",m1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new c1("@firebase/auth");function Un(t,...e){Is.logLevel<=ee.ERROR&&Is.error(`Auth (${fr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,...e){throw Da(t,...e)}function Pe(t,...e){return Da(t,...e)}function g1(t,e,n){const r=Object.assign(Object.assign({},Td()),{[e]:n});return new gn("auth","Firebase",r).create(e,{appName:t.name})}function Hd(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Me(t,"argument-error"),g1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Da(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return p1.create(t,...e)}function O(t,e,...n){if(!t)throw Da(e,...n)}function Re(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Un(e),new Error(e)}function Ue(t,e){t||Re(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Map;function De(t){Ue(t instanceof Function,"Expected a class definition");let e=xs.get(t);return e?(Ue(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xs.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t,e){const n=f1(t,"auth");if(n.isInitialized()){const a=n.getImmediate(),o=n.getOptions();if(Qn(o,e??{}))return a;Me(a,"already-initialized")}return n.initialize({options:e})}function Pd(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(De);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Od(){return zs()==="http:"||zs()==="https:"}function zs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Od()||u8()||"connection"in navigator)?navigator.onLine:!0}function Nd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ue(n>e,"Short delay should be less than long delay!"),this.isMobile=l8()||f8()}get(){return Vd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t,e){Ue(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Re("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Re("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Re("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=new wn(3e4,6e4);function bn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yn(t,e,n,r,a={}){return w1(t,a,async()=>{let o={},c={};r&&(e==="GET"?c=r:o={body:JSON.stringify(r)});const f=vn(Object.assign({key:t.config.apiKey},c)).slice(1),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode),v1.fetch()(b1(t,t.config.apiHost,n,f),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function w1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rd),e);try{const a=new Fd(t),o=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const c=await o.json();if("needConfirmation"in c)throw Dn(t,"account-exists-with-different-credential",c);if(o.ok&&!("errorMessage"in c))return c;{const f=o.ok?c.errorMessage:c.error.message,[h,u]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dn(t,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw Dn(t,"email-already-in-use",c);if(h==="USER_DISABLED")throw Dn(t,"user-disabled",c);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw g1(t,m,u);Me(t,m)}}catch(a){if(a instanceof ot)throw a;Me(t,"internal-error",{message:String(a)})}}async function Cn(t,e,n,r,a={}){const o=await yn(t,e,n,r,a);return"mfaPendingCredential"in o&&Me(t,"multi-factor-auth-required",{_serverResponse:o}),o}function b1(t,e,n,r){const a=`${e}${n}?${r}`;return t.config.emulator?Fa(t.config,a):`${t.config.apiScheme}://${a}`}class Fd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pe(this.auth,"network-request-failed")),Dd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const a=Pe(t,e,r);return a.customData._tokenResponse=n,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(t,e){return yn(t,"POST","/v1/accounts:delete",e)}async function $d(t,e){return yn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ud(t,e=!1){const n=ct(t),r=await n.getIdToken(e),a=Ba(r);O(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,c=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:Qt(Rr(a.auth_time)),issuedAtTime:Qt(Rr(a.iat)),expirationTime:Qt(Rr(a.exp)),signInProvider:c||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Rr(t){return Number(t)*1e3}function Ba(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Un("JWT malformed, contained fewer than 3 sections"),null;try{const a=s1(n);return a?JSON.parse(a):(Un("Failed to decode base64 JWT payload"),null)}catch(a){return Un("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function jd(t){const e=Ba(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ot&&Wd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qt(this.lastLoginAt),this.creationTime=Qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t){var e;const n=t.auth,r=await t.getIdToken(),a=await ln(t,$d(n,{idToken:r}));O(a==null?void 0:a.users.length,n,"internal-error");const o=a.users[0];t._notifyReloadListener(o);const c=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Kd(o.providerUserInfo):[],f=Yd(t.providerData,c),h=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(f!=null&&f.length),m=h?u:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new y1(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(t,v)}async function Gd(t){const e=ct(t);await tr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yd(t,e){return[...t.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function Kd(t){return t.map(e=>{var{providerId:n}=e,r=Ra(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xd(t,e){const n=await w1(t,{},async()=>{const r=vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=t.config,c=b1(t,a,"/v1/token",`key=${o}`),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",v1.fetch()(c,{method:"POST",headers:f,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:a,expiresIn:o}=await Xd(e,n);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:a,expirationTime:o}=n,c=new un;return r&&(O(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),a&&(O(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),o&&(O(typeof o=="number","internal-error",{appName:e}),c.expirationTime=o),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new un,this.toJSON())}_performRefresh(){return Re("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gt{constructor(e){var{uid:n,auth:r,stsTokenManager:a}=e,o=Ra(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new y1(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ln(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ud(this,e)}reload(){return Gd(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ln(this,Bd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,a,o,c,f,h,u,m;const v=(r=n.displayName)!==null&&r!==void 0?r:void 0,b=(a=n.email)!==null&&a!==void 0?a:void 0,S=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(c=n.photoURL)!==null&&c!==void 0?c:void 0,E=(f=n.tenantId)!==null&&f!==void 0?f:void 0,k=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,z=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:P,emailVerified:D,isAnonymous:L,providerData:re,stsTokenManager:W}=n;O(P&&W,e,"internal-error");const ae=un.fromJSON(this.name,W);O(typeof P=="string",e,"internal-error"),Ke(v,e.name),Ke(b,e.name),O(typeof D=="boolean",e,"internal-error"),O(typeof L=="boolean",e,"internal-error"),Ke(S,e.name),Ke(y,e.name),Ke(E,e.name),Ke(k,e.name),Ke(N,e.name),Ke(z,e.name);const $=new gt({uid:P,auth:e,email:b,emailVerified:D,displayName:v,isAnonymous:L,photoURL:y,phoneNumber:S,tenantId:E,stsTokenManager:ae,createdAt:N,lastLoginAt:z});return re&&Array.isArray(re)&&($.providerData=re.map(F=>Object.assign({},F))),k&&($._redirectEventId=k),$}static async _fromIdTokenResponse(e,n,r=!1){const a=new un;a.updateFromServerResponse(n);const o=new gt({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await tr(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}C1.type="NONE";const Ms=C1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e,n){return`firebase:${t}:${e}:${n}`}class Lt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=jn(this.userKey,a.apiKey,o),this.fullPersistenceKey=jn("persistence",a.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lt(De(Ms),e,r);const a=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=a[0]||De(Ms);const c=jn(r,e.config.apiKey,e.name);let f=null;for(const u of n)try{const m=await u._get(c);if(m){const v=gt._fromJSON(e,m);u!==o&&(f=v),o=u;break}}catch{}const h=a.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Lt(o,e,r):(o=h[0],f&&await o._set(c,f.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(c)}catch{}})),new Lt(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I1(e))return"Blackberry";if(x1(e))return"Webos";if($a(e))return"Safari";if((e.includes("chrome/")||A1(e))&&!e.includes("edge/"))return"Chrome";if(_1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function k1(t=we()){return/firefox\//i.test(t)}function $a(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A1(t=we()){return/crios\//i.test(t)}function S1(t=we()){return/iemobile/i.test(t)}function _1(t=we()){return/android/i.test(t)}function I1(t=we()){return/blackberry/i.test(t)}function x1(t=we()){return/webos/i.test(t)}function dr(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jd(t=we()){var e;return dr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zd(){return d8()&&document.documentMode===10}function z1(t=we()){return dr(t)||_1(t)||x1(t)||I1(t)||/windows phone/i.test(t)||S1(t)}function Qd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t,e=[]){let n;switch(t){case"Browser":n=Es(we());break;case"Worker":n=`${Es(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((c,f)=>{try{const h=e(o);c(h)}catch(h){f(h)}});r.onAbort=n,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ts(this),this.idTokenSubscription=new Ts(this),this.beforeStateQueue=new e5(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=De(n)),this._initializationPromise=this.queue(async()=>{var r,a;if(!this._deleted&&(this.persistenceManager=await Lt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let a=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=a==null?void 0:a._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===f)&&(h!=null&&h.user)&&(a=h.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ct(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(De(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&De(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Lt.create(this,[De(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,a){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),c=this._isInitialized?Promise.resolve():this._initializationPromise;return O(c,this,"internal-error"),c.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,a):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=M1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Bt(t){return ct(t)}class Ts{constructor(e){this.auth=e,this.observer=null,this.addObserver=b8(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function n5(t,e,n){const r=Bt(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(n!=null&&n.disableWarnings),o=E1(e),{host:c,port:f}=r5(e),h=f===null?"":`:${f}`;r.config.emulator={url:`${o}//${c}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:c,port:f,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||a5()}function E1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function r5(t){const e=E1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:Hs(r.substr(o.length+1))}}else{const[o,c]=r.split(":");return{host:o,port:Hs(c)}}}function Hs(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function a5(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Re("not implemented")}_getIdTokenResponse(e){return Re("not implemented")}_linkToIdToken(e,n){return Re("not implemented")}_getReauthenticationResolver(e){return Re("not implemented")}}async function i5(t,e){return yn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s5(t,e){return Cn(t,"POST","/v1/accounts:signInWithPassword",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o5(t,e){return Cn(t,"POST","/v1/accounts:signInWithEmailLink",bn(t,e))}async function c5(t,e){return Cn(t,"POST","/v1/accounts:signInWithEmailLink",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Ua{constructor(e,n,r,a=null){super("password",r),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new fn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return s5(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return o5(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return i5(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return c5(e,{idToken:n,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e){return Cn(t,"POST","/v1/accounts:signInWithIdp",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l5="http://localhost";class yt extends Ua{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=n,o=Ra(n,["providerId","signInMethod"]);if(!r||!a)return null;const c=new yt(r,a);return c.idToken=o.idToken||void 0,c.accessToken=o.accessToken||void 0,c.secret=o.secret,c.nonce=o.nonce,c.pendingToken=o.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return Pt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pt(e,n)}buildRequest(){const e={requestUri:l5,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u5(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f5(t){const e=Yt(Kt(t)).link,n=e?Yt(Kt(e)).deep_link_id:null,r=Yt(Kt(t)).deep_link_id;return(r?Yt(Kt(r)).link:null)||r||n||e||t}class ja{constructor(e){var n,r,a,o,c,f;const h=Yt(Kt(e)),u=(n=h.apiKey)!==null&&n!==void 0?n:null,m=(r=h.oobCode)!==null&&r!==void 0?r:null,v=u5((a=h.mode)!==null&&a!==void 0?a:null);O(u&&m&&v,"argument-error"),this.apiKey=u,this.operation=v,this.code=m,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(c=h.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=h.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=f5(e);try{return new ja(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.providerId=$t.PROVIDER_ID}static credential(e,n){return fn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ja.parseLink(n);return O(r,"argument-error"),fn._fromEmailAndCode(e,r.code,r.tenantId)}}$t.PROVIDER_ID="password";$t.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$t.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Wa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends kn{constructor(){super("facebook.com")}static credential(e){return yt._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends kn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yt._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Je.credential(n,r)}catch{return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com";Je.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends kn{constructor(){super("github.com")}static credential(e){return yt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com";Ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends kn{constructor(){super("twitter.com")}static credential(e,n){return yt._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qe.credential(n,r)}catch{return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com";Qe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d5(t,e){return Cn(t,"POST","/v1/accounts:signUp",bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,a=!1){const o=await gt._fromIdTokenResponse(e,r,a),c=Ls(r);return new Ct({user:o,providerId:c,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const a=Ls(r);return new Ct({user:e,providerId:a,_tokenResponse:r,operationType:n})}}function Ls(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends ot{constructor(e,n,r,a){var o;super(n.code,n.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,nr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,a){return new nr(e,n,r,a)}}function T1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?nr._fromErrorAndOperation(t,o,e,r):o})}async function h5(t,e,n=!1){const r=await ln(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ct._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m5(t,e,n=!1){const{auth:r}=t,a="reauthenticate";try{const o=await ln(t,T1(r,a,e,t),n);O(o.idToken,r,"internal-error");const c=Ba(o.idToken);O(c,r,"internal-error");const{sub:f}=c;return O(t.uid===f,r,"user-mismatch"),Ct._forOperation(t,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(t,e,n=!1){const r="signIn",a=await T1(t,r,e),o=await Ct._fromIdTokenResponse(t,r,a);return n||await t._updateCurrentUser(o.user),o}async function p5(t,e){return H1(Bt(t),e)}async function K7(t,e,n){const r=Bt(t),a=await d5(r,{returnSecureToken:!0,email:e,password:n}),o=await Ct._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function X7(t,e,n){return p5(ct(t),$t.credential(e,n))}function g5(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function v5(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function J7(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}const rr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rr,"1"),this.storage.removeItem(rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w5(){const t=we();return $a(t)||dr(t)}const b5=1e3,y5=10;class P1 extends L1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=w5()&&Qd(),this.fallbackToPolling=z1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),a=this.localCache[n];r!==a&&e(n,a,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,f,h)=>{this.notifyListeners(c,h)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(r);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const a=()=>{const c=this.storage.getItem(r);!n&&this.localCache[r]===c||this.notifyListeners(r,c)},o=this.storage.getItem(r);Zd()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,y5):a()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},b5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P1.type="LOCAL";const C5=P1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1 extends L1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O1.type="SESSION";const V1=O1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k5(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const r=new hr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:a,data:o}=n.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const f=Array.from(c).map(async u=>u(n.origin,o)),h=await k5(f);n.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,c;return new Promise((f,h)=>{const u=qa("",20);a.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);c={messageChannel:a,onMessage(v){const b=v;if(b.data.eventId===u)switch(b.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),f(b.data.response);break;default:clearTimeout(m),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return window}function S5(t){Oe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(){return typeof Oe().WorkerGlobalScope<"u"&&typeof Oe().importScripts=="function"}async function _5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function I5(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x5(){return N1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1="firebaseLocalStorageDb",z5=1,ar="firebaseLocalStorage",D1="fbase_key";class An{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mr(t,e){return t.transaction([ar],e?"readwrite":"readonly").objectStore(ar)}function M5(){const t=indexedDB.deleteDatabase(R1);return new An(t).toPromise()}function ua(){const t=indexedDB.open(R1,z5);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ar,{keyPath:D1})}catch(a){n(a)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ar)?e(r):(r.close(),await M5(),e(await ua()))})})}async function Ps(t,e,n){const r=mr(t,!0).put({[D1]:e,value:n});return new An(r).toPromise()}async function E5(t,e){const n=mr(t,!1).get(e),r=await new An(n).toPromise();return r===void 0?null:r.value}function Os(t,e){const n=mr(t,!0).delete(e);return new An(n).toPromise()}const T5=800,H5=3;class F1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ua(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>H5)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return N1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hr._getInstance(x5()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _5(),!this.activeServiceWorker)return;this.sender=new A5(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||I5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ua();return await Ps(e,rr,"1"),await Os(e,rr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ps(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>E5(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Os(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=mr(a,!1).getAll();return new An(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),T5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F1.type="LOCAL";const L5=F1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P5(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function O5(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=a=>{const o=Pe("internal-error");o.customData=a,n(o)},r.type="text/javascript",r.charset="UTF-8",P5().appendChild(r)})}function V5(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new wn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t,e){return e?De(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Ua{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function N5(t){return H1(t.auth,new Ga(t),t.bypassAuthState)}function R5(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),m5(n,new Ga(t),t.bypassAuthState)}async function D5(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),h5(n,new Ga(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,a,o=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:a,tenantId:o,error:c,type:f}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return N5;case"linkViaPopup":case"linkViaRedirect":return D5;case"reauthViaPopup":case"reauthViaRedirect":return R5;default:Me(this.auth,"internal-error")}}resolve(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F5=new wn(2e3,1e4);async function Z7(t,e,n){const r=Bt(t);Hd(t,e,Wa);const a=B1(r,n);return new pt(r,"signInViaPopup",e,a).executeNotNull()}class pt extends $1{constructor(e,n,r,a,o){super(e,n,a,o),this.provider=r,this.authWindow=null,this.pollId=null,pt.currentPopupAction&&pt.currentPopupAction.cancel(),pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Ue(this.filter.length===1,"Popup operations only handle one event");const e=qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,F5.get())};e()}}pt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B5="pendingRedirect",Wn=new Map;class $5 extends $1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wn.get(this.auth._key());if(!e){try{const r=await U5(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wn.set(this.auth._key(),e)}return this.bypassAuthState||Wn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U5(t,e){const n=q5(e),r=W5(t);if(!await r._isAvailable())return!1;const a=await r._get(n)==="true";return await r._remove(n),a}function j5(t,e){Wn.set(t._key(),e)}function W5(t){return De(t._redirectPersistence)}function q5(t){return jn(B5,t.config.apiKey,t.name)}async function G5(t,e,n=!1){const r=Bt(t),a=B1(r,e),c=await new $5(r,a,n).execute();return c&&!n&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y5=10*60*1e3;class K5{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!X5(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!U1(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pe(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Y5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vs(e))}saveEventToCache(e){this.cachedEventUids.add(Vs(e)),this.lastProcessedEventTime=Date.now()}}function Vs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function X5(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J5(t,e={}){return yn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q5=/^https?/;async function e7(t){if(t.config.emulator)return;const{authorizedDomains:e}=await J5(t);for(const n of e)try{if(t7(n))return}catch{}Me(t,"unauthorized-domain")}function t7(t){const e=la(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===r}if(!Q5.test(n))return!1;if(Z5.test(t))return r===t;const a=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n7=new wn(3e4,6e4);function Ns(){const t=Oe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function r7(t){return new Promise((e,n)=>{var r,a,o;function c(){Ns(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ns(),n(Pe(t,"network-request-failed"))},timeout:n7.get()})}if(!((a=(r=Oe().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=Oe().gapi)===null||o===void 0)&&o.load)c();else{const f=V5("iframefcb");return Oe()[f]=()=>{gapi.load?c():n(Pe(t,"network-request-failed"))},O5(`https://apis.google.com/js/api.js?onload=${f}`).catch(h=>n(h))}}).catch(e=>{throw qn=null,e})}let qn=null;function a7(t){return qn=qn||r7(t),qn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i7=new wn(5e3,15e3),s7="__/auth/iframe",o7="emulator/auth/iframe",c7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},l7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function u7(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fa(e,o7):`https://${t.config.authDomain}/${s7}`,r={apiKey:e.apiKey,appName:t.name,v:fr},a=l7.get(t.config.apiHost);a&&(r.eid=a);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${vn(r).slice(1)}`}async function f7(t){const e=await a7(t),n=Oe().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:u7(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c7,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const c=Pe(t,"network-request-failed"),f=Oe().setTimeout(()=>{o(c)},i7.get());function h(){Oe().clearTimeout(f),a(r)}r.ping(h).then(h,()=>{o(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},h7=500,m7=600,p7="_blank",g7="http://localhost";class Rs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v7(t,e,n,r=h7,a=m7){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const h=Object.assign(Object.assign({},d7),{width:r.toString(),height:a.toString(),top:o,left:c}),u=we().toLowerCase();n&&(f=A1(u)?p7:n),k1(u)&&(e=e||g7,h.scrollbars="yes");const m=Object.entries(h).reduce((b,[S,y])=>`${b}${S}=${y},`,"");if(Jd(u)&&f!=="_self")return w7(e||"",f),new Rs(null);const v=window.open(e||"",f,m);O(v,t,"popup-blocked");try{v.focus()}catch{}return new Rs(v)}function w7(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b7="__/auth/handler",y7="emulator/auth/handler";function Ds(t,e,n,r,a,o){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fr,eventId:a};if(e instanceof Wa){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",w8(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries(o||{}))c[h]=u}if(e instanceof kn){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(c.scopes=h.join(","))}t.tenantId&&(c.tid=t.tenantId);const f=c;for(const h of Object.keys(f))f[h]===void 0&&delete f[h];return`${C7(t)}?${vn(f).slice(1)}`}function C7({config:t}){return t.emulator?Fa(t,y7):`https://${t.authDomain}/${b7}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="webStorageSupport";class k7{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=V1,this._completeRedirectFn=G5,this._overrideRedirectResult=j5}async _openPopup(e,n,r,a){var o;Ue((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const c=Ds(e,n,r,la(),a);return v7(e,c,qa())}async _openRedirect(e,n,r,a){return await this._originValidation(e),S5(Ds(e,n,r,la(),a)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:o}=this.eventManagers[n];return a?Promise.resolve(a):(Ue(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await f7(e),r=new K5(e);return n.register("authEvent",a=>(O(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dr,{type:Dr},a=>{var o;const c=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[Dr];c!==void 0&&n(!!c),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=e7(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return z1()||$a()||dr()}}const A7=k7;var Fs="@firebase/auth",Bs="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S7{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _7(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function I7(t){on(new Rt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),{apiKey:o,authDomain:c}=r.options;return((f,h)=>{O(o&&!o.includes(":"),"invalid-api-key",{appName:f.name}),O(!(c!=null&&c.includes(":")),"argument-error",{appName:f.name});const u={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:M1(t)},m=new t5(f,h,u);return Pd(m,n),m})(r,a)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),on(new Rt("auth-internal",e=>{const n=Bt(e.getProvider("auth").getImmediate());return(r=>new S7(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Fs,Bs,_7(t)),Ht(Fs,Bs,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x7=5*60,z7=o1("authIdTokenMaxAge")||x7;let $s=null;const M7=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>z7)return;const a=n==null?void 0:n.token;$s!==a&&($s=a,await fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Q7(t=bd()){const e=f1(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ld(t,{popupRedirectResolver:A7,persistence:[L5,C5,V1]}),r=o1("authTokenSyncURL");if(r){const o=M7(r);v5(n,o,()=>o(n.currentUser)),g5(n,c=>o(c))}const a=s8("auth");return a&&n5(n,`http://${a}`),n}I7("Browser");function Us(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Us(Object(n),!0).forEach(function(r){Et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Us(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ir(t){"@babel/helpers - typeof";return ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ir(t)}function Et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E7(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,o;for(o=0;o<r.length;o++)a=r[o],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function T7(t,e){if(t==null)return{};var n=E7(t,e),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function fa(t){return H7(t)||L7(t)||P7(t)||O7()}function H7(t){if(Array.isArray(t))return da(t)}function L7(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function P7(t,e){if(t){if(typeof t=="string")return da(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return da(t,e)}}function da(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function O7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V7(t){var e,n=t.beat,r=t.fade,a=t.beatFade,o=t.bounce,c=t.shake,f=t.flash,h=t.spin,u=t.spinPulse,m=t.spinReverse,v=t.pulse,b=t.fixedWidth,S=t.inverse,y=t.border,E=t.listItem,k=t.flip,N=t.size,z=t.rotation,P=t.pull,D=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":c,"fa-flash":f,"fa-spin":h,"fa-spin-reverse":m,"fa-spin-pulse":u,"fa-pulse":v,"fa-fw":b,"fa-inverse":S,"fa-border":y,"fa-li":E,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Et(e,"fa-".concat(N),typeof N<"u"&&N!==null),Et(e,"fa-rotate-".concat(z),typeof z<"u"&&z!==null&&z!==0),Et(e,"fa-pull-".concat(P),typeof P<"u"&&P!==null),Et(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(D).map(function(L){return D[L]?L:null}).filter(function(L){return L})}function N7(t){return t=t-0,t===t}function j1(t){return N7(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var R7=["style"];function D7(t){return t.charAt(0).toUpperCase()+t.slice(1)}function F7(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=j1(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?e[D7(a)]=o:e[a]=o,e},{})}function W1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(h){return W1(t,h)}),a=Object.keys(e.attributes||{}).reduce(function(h,u){var m=e.attributes[u];switch(u){case"class":h.attrs.className=m,delete e.attributes.class;break;case"style":h.attrs.style=F7(m);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?h.attrs[u.toLowerCase()]=m:h.attrs[j1(u)]=m}return h},{attrs:{}}),o=n.style,c=o===void 0?{}:o,f=T7(n,R7);return a.attrs.style=et(et({},a.attrs.style),c),t.apply(void 0,[e.tag,et(et({},a.attrs),f)].concat(fa(r)))}var q1=!1;try{q1=!0}catch{}function B7(){if(!q1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function js(t){if(t&&ir(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ra.icon)return ra.icon(t);if(t===null)return null;if(t&&ir(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Fr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Et({},t,e):{}}var pr=Dt.forwardRef(function(t,e){var n=t.icon,r=t.mask,a=t.symbol,o=t.className,c=t.title,f=t.titleId,h=t.maskId,u=js(n),m=Fr("classes",[].concat(fa(V7(t)),fa(o.split(" ")))),v=Fr("transform",typeof t.transform=="string"?ra.transform(t.transform):t.transform),b=Fr("mask",js(r)),S=$6(u,et(et(et(et({},m),v),b),{},{symbol:a,title:c,titleId:f,maskId:h}));if(!S)return B7("Could not find icon",u),null;var y=S.abstract,E={ref:e};return Object.keys(t).forEach(function(k){pr.defaultProps.hasOwnProperty(k)||(E[k]=t[k])}),$7(y[0],E)});pr.displayName="FontAwesomeIcon";pr.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};pr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var $7=W1.bind(null,Dt.createElement);export{pr as F,Je as G,q7 as S,Y7 as a,X7 as b,K7 as c,Z7 as d,Q7 as g,wd as i,G7 as l,J7 as o,W7 as s};
