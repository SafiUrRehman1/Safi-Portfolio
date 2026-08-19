/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const In="srgb",Ao="srgb-linear",wo="linear",mt="srgb";const Qc="300 es";function Ad(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ro(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wd(){const r=Ro("canvas");return r.style.display="block",r}const jc={};function eu(...r){const e="THREE."+r.shift();console.log(e,...r)}function Of(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ke(...r){r=Of(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ct(...r){r=Of(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ms(...r){const e=r.join(" ");e in jc||(jc[e]=!0,ke(...r))}function Rd(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Cd={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tu=1234567;const oa=Math.PI/180,Ma=180/Math.PI;function Bs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function dc(r,e){return(r%e+e)%e}function Pd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Dd(r,e,t){return r!==e?(t-r)/(e-r):0}function la(r,e,t){return(1-t)*r+t*e}function Ld(r,e,t,n){return la(r,e,1-Math.exp(-t*n))}function Fd(r,e=1){return e-Math.abs(dc(r,e*2)-e)}function Id(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ud(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Nd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Od(r,e){return r+Math.random()*(e-r)}function Bd(r){return r*(.5-Math.random())}function Gd(r){r!==void 0&&(tu=r);let e=tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kd(r){return r*oa}function zd(r){return r*Ma}function Vd(r){return(r&r-1)===0&&r!==0}function Hd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Wd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xd(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),h=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*d,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*d,o*c);break;case"ZXZ":r.set(l*d,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*h,o*c);break;case"YXY":r.set(l*h,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*h,o*u,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ms(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const on={DEG2RAD:oa,RAD2DEG:Ma,generateUUID:Bs,clamp:st,euclideanModulo:dc,mapLinear:Pd,inverseLerp:Dd,lerp:la,damp:Ld,pingpong:Fd,smoothstep:Id,smootherstep:Ud,randInt:Nd,randFloat:Od,randFloatSpread:Bd,seededRandom:Gd,degToRad:kd,radToDeg:zd,isPowerOfTwo:Vd,ceilPowerOfTwo:Hd,floorPowerOfTwo:Wd,setQuaternionFromProperEuler:Xd,normalize:En,denormalize:ms},qc=class qc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qc.prototype.isVector2=!0;let je=qc;class Gs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=s[a+0],h=s[a+1],_=s[a+2],g=s[a+3];if(d!==g||l!==f||c!==h||u!==_){let m=l*f+c*h+u*_+d*g;m<0&&(f=-f,h=-h,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){const T=Math.acos(m),w=Math.sin(T);p=Math.sin(p*T)/w,o=Math.sin(o*T)/w,l=l*p+f*o,c=c*p+h*o,u=u*p+_*o,d=d*p+g*o}else{l=l*p+f*o,c=c*p+h*o,u=u*p+_*o,d=d*p+g*o;const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],f=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-o*h,e[t+2]=c*_+u*h+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),f=l(n/2),h=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yc=class Yc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yc.prototype.isVector3=!0;let G=Yc;const $o=new G,nu=new Gs,Kc=class Kc{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],_=n[8],g=i[0],m=i[3],p=i[6],T=i[1],w=i[4],S=i[7],E=i[2],A=i[5],b=i[8];return s[0]=a*g+o*T+l*E,s[3]=a*m+o*w+l*A,s[6]=a*p+o*S+l*b,s[1]=c*g+u*T+d*E,s[4]=c*m+u*w+d*A,s[7]=c*p+u*S+d*b,s[2]=f*g+h*T+_*E,s[5]=f*m+h*w+_*A,s[8]=f*p+h*S+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,_=t*d+n*f+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=h*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kc.prototype.isMatrix3=!0;let qe=Kc;const Zo=new qe,iu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qd(){const r={enabled:!0,workingColorSpace:Ao,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?wo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ao]:{primaries:e,whitePoint:n,transfer:wo,toXYZ:iu,fromXYZ:ru,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:iu,fromXYZ:ru,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),r}const ot=qd();function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ys(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qr;class Yd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=Ro("canvas")),Qr.width=e.width,Qr.height=e.height;const i=Qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ro("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Xi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kd=0;class pc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Jo(i[a].image)):s.push(Jo(i[a]))}else s=Jo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Jo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let $d=0;const Qo=new G;class vn extends Yr{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=vn.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Bs(),this.name="",this.source=new pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qo).x}get height(){return this.source.getSize(Qo).y}get depth(){return this.source.getSize(Qo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=300;vn.DEFAULT_ANISOTROPY=1;const $c=class $c{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(h+1)/2,E=(p+1)/2,A=(u+f)/4,b=(d+g)/4,x=(_+m)/4;return w>S&&w>E?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=A/n,s=b/n):S>E?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=x/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=b/s,i=x/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(d-g)/T,this.z=(f-u)/T,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$c.prototype.isVector4=!0;let Ft=$c;class Zd extends Yr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new vn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new pc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Zd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bf extends vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jd extends vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zo=class zo{constructor(e,t,n,i,s,a,o,l,c,u,d,f,h,_,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,f,h,_,g,m)}set(e,t,n,i,s,a,o,l,c,u,d,f,h,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zo().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),a=1/jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,g=c*d;t[0]=f+g*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,g=c*d;t[0]=f-g*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qd,e,jd)}lookAt(e,t,n){const i=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ji.crossVectors(n,Vn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ji.crossVectors(n,Vn)),ji.normalize(),Ia.crossVectors(Vn,ji),i[0]=ji.x,i[4]=Ia.x,i[8]=Vn.x,i[1]=ji.y,i[5]=Ia.y,i[9]=Vn.y,i[2]=ji.z,i[6]=Ia.z,i[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],_=n[2],g=n[6],m=n[10],p=n[14],T=n[3],w=n[7],S=n[11],E=n[15],A=i[0],b=i[4],x=i[8],M=i[12],R=i[1],L=i[5],P=i[9],V=i[13],W=i[2],U=i[6],X=i[10],I=i[14],K=i[3],ee=i[7],D=i[11],le=i[15];return s[0]=a*A+o*R+l*W+c*K,s[4]=a*b+o*L+l*U+c*ee,s[8]=a*x+o*P+l*X+c*D,s[12]=a*M+o*V+l*I+c*le,s[1]=u*A+d*R+f*W+h*K,s[5]=u*b+d*L+f*U+h*ee,s[9]=u*x+d*P+f*X+h*D,s[13]=u*M+d*V+f*I+h*le,s[2]=_*A+g*R+m*W+p*K,s[6]=_*b+g*L+m*U+p*ee,s[10]=_*x+g*P+m*X+p*D,s[14]=_*M+g*V+m*I+p*le,s[3]=T*A+w*R+S*W+E*K,s[7]=T*b+w*L+S*U+E*ee,s[11]=T*x+w*P+S*X+E*D,s[15]=T*M+w*V+S*I+E*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],g=e[7],m=e[11],p=e[15],T=l*h-c*f,w=o*h-c*d,S=o*f-l*d,E=a*h-c*u,A=a*f-l*u,b=a*d-o*u;return t*(g*T-m*w+p*S)-n*(_*T-m*E+p*A)+i*(_*w-g*E+p*b)-s*(_*S-g*A+m*b)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],g=e[13],m=e[14],p=e[15],T=t*o-n*a,w=t*l-i*a,S=t*c-s*a,E=n*l-i*o,A=n*c-s*o,b=i*c-s*l,x=u*g-d*_,M=u*m-f*_,R=u*p-h*_,L=d*m-f*g,P=d*p-h*g,V=f*p-h*m,W=T*V-w*P+S*L+E*R-A*M+b*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/W;return e[0]=(o*V-l*P+c*L)*U,e[1]=(i*P-n*V-s*L)*U,e[2]=(g*b-m*A+p*E)*U,e[3]=(f*A-d*b-h*E)*U,e[4]=(l*R-a*V-c*M)*U,e[5]=(t*V-i*R+s*M)*U,e[6]=(m*S-_*b-p*w)*U,e[7]=(u*b-f*S+h*w)*U,e[8]=(a*P-o*R+c*x)*U,e[9]=(n*R-t*P-s*x)*U,e[10]=(_*A-g*S+p*T)*U,e[11]=(d*S-u*A-h*T)*U,e[12]=(o*M-a*L-l*x)*U,e[13]=(t*L-n*M+i*x)*U,e[14]=(g*w-_*E-m*T)*U,e[15]=(u*E-d*w+f*T)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,_=s*d,g=a*u,m=a*d,p=o*d,T=l*c,w=l*u,S=l*d,E=n.x,A=n.y,b=n.z;return i[0]=(1-(g+p))*E,i[1]=(h+S)*E,i[2]=(_-w)*E,i[3]=0,i[4]=(h-S)*A,i[5]=(1-(f+p))*A,i[6]=(m+T)*A,i[7]=0,i[8]=(_+w)*b,i[9]=(m-T)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=jr.set(i[0],i[1],i[2]).length();const o=jr.set(i[4],i[5],i[6]).length(),l=jr.set(i[8],i[9],i[10]).length();s<0&&(a=-a),di.copy(this);const c=1/a,u=1/o,d=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,t.setFromRotationMatrix(di),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===2e3)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===2001)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),h=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===2e3)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===2001)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};zo.prototype.isMatrix4=!0;let Pt=zo;const jr=new G,di=new Pt,Qd=new G(0,0,0),jd=new G(1,1,1),ji=new G,Ia=new G,Vn=new G,su=new Pt,au=new Gs;class _r{constructor(e=0,t=0,n=0,i=_r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return au.setFromEuler(this),this.setFromQuaternion(au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_r.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ep=0;const ou=new G,es=new Gs,Ni=new Pt,Ua=new G,Vs=new G,tp=new G,np=new Gs,lu=new G(1,0,0),cu=new G(0,1,0),uu=new G(0,0,1),fu={type:"added"},ip={type:"removed"},ts={type:"childadded",child:null},jo={type:"childremoved",child:null};class cn extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new G,t=new _r,n=new Gs,i=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new qe}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(uu,e)}translateOnAxis(e,t){return ou.copy(e).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Vs,Ua,this.up):Ni.lookAt(Ua,Vs,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Ni),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fu),ts.child=e,this.dispatchEvent(ts),ts.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip),jo.child=e,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fu),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}cn.DEFAULT_UP=new G(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vi extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rp={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Na={h:0,s:0,l:0};function tl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=dc(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=tl(a,s,e+1/3),this.g=tl(a,s,e),this.b=tl(a,s,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=In){function n(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const n=Gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return ot.workingToColorSpace(pn.copy(this),e),Math.round(st(pn.r*255,0,255))*65536+Math.round(st(pn.g*255,0,255))*256+Math.round(st(pn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(pn.copy(this),t);const n=pn.r,i=pn.g,s=pn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=In){ot.workingToColorSpace(pn.copy(this),e);const t=pn.r,n=pn.g,i=pn.b;return e!==In?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(Na);const n=la(er.h,Na.h,t),i=la(er.s,Na.s,t),s=la(er.l,Na.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new $e;$e.NAMES=Gf;class sp extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pi=new G,Oi=new G,nl=new G,Bi=new G,ns=new G,is=new G,hu=new G,il=new G,rl=new G,sl=new G,al=new Ft,ol=new Ft,ll=new Ft;class xi{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pi.subVectors(e,t),i.cross(pi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pi.subVectors(i,t),Oi.subVectors(n,t),nl.subVectors(e,t);const a=pi.dot(pi),o=pi.dot(Oi),l=pi.dot(nl),c=Oi.dot(Oi),u=Oi.dot(nl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return al.setScalar(0),ol.setScalar(0),ll.setScalar(0),al.fromBufferAttribute(e,t),ol.fromBufferAttribute(e,n),ll.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(al,s.x),a.addScaledVector(ol,s.y),a.addScaledVector(ll,s.z),a}static isFrontFacing(e,t,n,i){return pi.subVectors(n,t),Oi.subVectors(e,t),pi.cross(Oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),pi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ns.subVectors(i,n),is.subVectors(s,n),il.subVectors(e,n);const l=ns.dot(il),c=is.dot(il);if(l<=0&&c<=0)return t.copy(n);rl.subVectors(e,i);const u=ns.dot(rl),d=is.dot(rl);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ns,a);sl.subVectors(e,s);const h=ns.dot(sl),_=is.dot(sl);if(_>=0&&h<=_)return t.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(is,o);const m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return hu.subVectors(s,i),o=(d-u)/(d-u+(h-_)),t.copy(i).addScaledVector(hu,o);const p=1/(m+g+f);return a=g*p,o=f*p,t.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ks{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(s,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oa.copy(n.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Ba.subVectors(this.max,Hs),rs.subVectors(e.a,Hs),ss.subVectors(e.b,Hs),as.subVectors(e.c,Hs),tr.subVectors(ss,rs),nr.subVectors(as,ss),yr.subVectors(rs,as);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-yr.z,yr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,yr.z,0,-yr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-yr.y,yr.x,0];return!cl(t,rs,ss,as,Ba)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,rs,ss,as,Ba))?!1:(Ga.crossVectors(tr,nr),t=[Ga.x,Ga.y,Ga.z],cl(t,rs,ss,as,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gi=[new G,new G,new G,new G,new G,new G,new G,new G],mi=new G,Oa=new ks,rs=new G,ss=new G,as=new G,tr=new G,nr=new G,yr=new G,Hs=new G,Ba=new G,Ga=new G,Tr=new G;function cl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Tr.fromArray(r,s);const o=i.x*Math.abs(Tr.x)+i.y*Math.abs(Tr.y)+i.z*Math.abs(Tr.z),l=e.dot(Tr),c=t.dot(Tr),u=n.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qt=new G,ka=new je;let ap=0;class Li extends Yr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ms(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class kf extends Li{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zf extends Li{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dn extends Li{constructor(e,t,n){super(new Float32Array(e),t,n)}}const op=new ks,Ws=new G,ul=new G;class _c{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):op.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ws,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(ul)),this.expandByPoint(Ws.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lp=0;const ri=new Pt,fl=new cn,os=new G,Hn=new ks,Xs=new ks,nn=new G;class Si extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?zf:kf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _c);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Hn.min,Xs.min),Hn.expandByPoint(nn),nn.addVectors(Hn.max,Xs.max),Hn.expandByPoint(nn)):(Hn.expandByPoint(Xs.min),Hn.expandByPoint(Xs.max))}Hn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nn.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),nn.add(os)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Li(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new G,l[x]=new G;const c=new G,u=new G,d=new G,f=new je,h=new je,_=new je,g=new G,m=new G;function p(x,M,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,R),f.fromBufferAttribute(s,x),h.fromBufferAttribute(s,M),_.fromBufferAttribute(s,R),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const L=1/(h.x*_.y-_.x*h.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(L),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(L),o[x].add(g),o[M].add(g),o[R].add(g),l[x].add(m),l[M].add(m),l[R].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let x=0,M=T.length;x<M;++x){const R=T[x],L=R.start,P=R.count;for(let V=L,W=L+P;V<W;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const w=new G,S=new G,E=new G,A=new G;function b(x){E.fromBufferAttribute(i,x),A.copy(E);const M=o[x];w.copy(M),w.sub(E.multiplyScalar(E.dot(M))).normalize(),S.crossVectors(A,M);const L=S.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,L)}for(let x=0,M=T.length;x<M;++x){const R=T[x],L=R.start,P=R.count;for(let V=L,W=L+P;V<W;V+=3)b(e.getX(V+0)),b(e.getX(V+1)),b(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new Li(f,u,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Si,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cp=0;class La extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new G,hl=new G,za=new G,ir=new G,dl=new G,Va=new G,pl=new G;class Vf{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hl.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(hl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=ir.dot(this.direction),l=-ir.dot(za),c=ir.lengthSq(),u=Math.abs(1-a*a);let d,f,h,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const g=1/u;d*=g,f*=g,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(hl).addScaledVector(za,f),h}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const n=ki.dot(this.direction),i=ki.dot(ki)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,n,i,s){dl.subVectors(t,e),Va.subVectors(n,e),pl.crossVectors(dl,Va);let a=this.direction.dot(pl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ir.subVectors(this.origin,e);const l=o*this.direction.dot(Va.crossVectors(ir,Va));if(l<0)return null;const c=o*this.direction.dot(dl.cross(ir));if(c<0||l+c>a)return null;const u=-o*ir.dot(pl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hf extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const du=new Pt,Er=new Vf,Ha=new _c,pu=new G,Wa=new G,Xa=new G,qa=new G,ml=new G,Ya=new G,mu=new G,Ka=new G;class xt extends cn{constructor(e=new Si,t=new Hf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ml.fromBufferAttribute(d,e),a?Ya.addScaledVector(ml,u):Ya.addScaledVector(ml.sub(t),u))}t.add(Ya)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Ha.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ha,pu)===null||Er.origin.distanceToSquared(pu)>(e.far-e.near)**2))&&(du.copy(s).invert(),Er.copy(e.ray).applyMatrix4(du),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],T=Math.max(m.start,h.start),w=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=T,E=w;S<E;S+=3){const A=o.getX(S),b=o.getX(S+1),x=o.getX(S+2);i=$a(this,p,e,n,c,u,d,A,b,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const T=o.getX(m),w=o.getX(m+1),S=o.getX(m+2);i=$a(this,a,e,n,c,u,d,T,w,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],T=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=T,E=w;S<E;S+=3){const A=S,b=S+1,x=S+2;i=$a(this,p,e,n,c,u,d,A,b,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const T=m,w=m+1,S=m+2;i=$a(this,a,e,n,c,u,d,T,w,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function up(r,e,t,n,i,s,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===0,o),l===null)return null;Ka.copy(o),Ka.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ka);return c<t.near||c>t.far?null:{distance:c,point:Ka.clone(),object:r}}function $a(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Wa),r.getVertexPosition(l,Xa),r.getVertexPosition(c,qa);const u=up(r,e,t,n,Wa,Xa,qa,mu);if(u){const d=new G;xi.getBarycoord(mu,Wa,Xa,qa,d),i&&(u.uv=xi.getInterpolatedAttribute(i,o,l,c,d,new je)),s&&(u.uv1=xi.getInterpolatedAttribute(s,o,l,c,d,new je)),a&&(u.normal=xi.getInterpolatedAttribute(a,o,l,c,d,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};xi.getNormal(Wa,Xa,qa,f.normal),u.face=f,u.barycoord=d}return u}class fp extends vn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,u=1003,d,f){super(null,a,o,l,c,u,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _l=new G,hp=new G,dp=new qe;class Rr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_l.subVectors(n,t).cross(hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(_l),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dp.getNormalMatrix(e),i=this.coplanarPoint(_l).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new _c,pp=new je(.5,.5),Za=new G;class gc{constructor(e=new Rr,t=new Rr,n=new Rr,i=new Rr,s=new Rr,a=new Rr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],_=s[8],g=s[9],m=s[10],p=s[11],T=s[12],w=s[13],S=s[14],E=s[15];if(i[0].setComponents(c-a,h-u,p-_,E-T).normalize(),i[1].setComponents(c+a,h+u,p+_,E+T).normalize(),i[2].setComponents(c+o,h+d,p+g,E+w).normalize(),i[3].setComponents(c-o,h-d,p-g,E-w).normalize(),n)i[4].setComponents(l,f,m,S).normalize(),i[5].setComponents(c-l,h-f,p-m,E-S).normalize();else if(i[4].setComponents(c-l,h-f,p-m,E-S).normalize(),t===2e3)i[5].setComponents(c+l,h+f,p+m,E+S).normalize();else if(t===2001)i[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const t=pp.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Za.x=i.normal.x>0?e.max.x:e.min.x,Za.y=i.normal.y>0?e.max.y:e.min.y,Za.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wf extends vn{constructor(e=[],t=301,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mp extends vn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ps extends vn{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,u=1026,d=1){if(u!==1026&&u!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _p extends Ps{constructor(e,t=1014,n=301,i,s,a=1003,o=1003,l,c=1026){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xf extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fi extends Si{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(u,3)),this.setAttribute("uv",new Dn(d,2));function _(g,m,p,T,w,S,E,A,b,x,M){const R=S/b,L=E/x,P=S/2,V=E/2,W=A/2,U=b+1,X=x+1;let I=0,K=0;const ee=new G;for(let D=0;D<X;D++){const le=D*L-V;for(let ge=0;ge<U;ge++){const Ye=ge*R-P;ee[g]=Ye*T,ee[m]=le*w,ee[p]=W,c.push(ee.x,ee.y,ee.z),ee[g]=0,ee[m]=0,ee[p]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(ge/b),d.push(1-D/x),I+=1}}for(let D=0;D<x;D++)for(let le=0;le<b;le++){const ge=f+le+U*D,Ye=f+le+U*(D+1),He=f+(le+1)+U*(D+1),Oe=f+(le+1)+U*D;l.push(ge,Ye,Oe),l.push(Ye,He,Oe),K+=6}o.addGroup(h,K,M),h+=K,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nr extends Si{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],f=[],h=[];let _=0;const g=[],m=n/2;let p=0;T(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Dn(d,3)),this.setAttribute("normal",new Dn(f,3)),this.setAttribute("uv",new Dn(h,2));function T(){const S=new G,E=new G;let A=0;const b=(t-e)/n;for(let x=0;x<=s;x++){const M=[],R=x/s,L=R*(t-e)+e;for(let P=0;P<=i;P++){const V=P/i,W=V*l+o,U=Math.sin(W),X=Math.cos(W);E.x=L*U,E.y=-R*n+m,E.z=L*X,d.push(E.x,E.y,E.z),S.set(U,b,X).normalize(),f.push(S.x,S.y,S.z),h.push(V,1-R),M.push(_++)}g.push(M)}for(let x=0;x<i;x++)for(let M=0;M<s;M++){const R=g[M][x],L=g[M+1][x],P=g[M+1][x+1],V=g[M][x+1];(e>0||M!==0)&&(u.push(R,L,V),A+=3),(t>0||M!==s-1)&&(u.push(L,P,V),A+=3)}c.addGroup(p,A,0),p+=A}function w(S){const E=_,A=new je,b=new G;let x=0;const M=S===!0?e:t,R=S===!0?1:-1;for(let P=1;P<=i;P++)d.push(0,m*R,0),f.push(0,R,0),h.push(.5,.5),_++;const L=_;for(let P=0;P<=i;P++){const W=P/i*l+o,U=Math.cos(W),X=Math.sin(W);b.x=M*X,b.y=m*R,b.z=M*U,d.push(b.x,b.y,b.z),f.push(0,R,0),A.x=U*.5+.5,A.y=X*.5*R+.5,h.push(A.x,A.y),_++}for(let P=0;P<i;P++){const V=E+P,W=L+P;S===!0?u.push(W,W+1,V):u.push(W+1,W,V),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yi extends Si{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,h=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const T=p*f-a;for(let w=0;w<c;w++){const S=w*d-s;_.push(S,-T,0),g.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const w=T+c*p,S=T+c*(p+1),E=T+1+c*(p+1),A=T+1+c*p;h.push(w,S,A),h.push(S,E,A)}this.setIndex(h),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Co extends Si{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new G,f=new G,h=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const T=[],w=p/n,S=a+w*o,E=e*Math.cos(S),A=Math.sqrt(e*e-E*E);let b=0;p===0&&a===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let x=0;x<=t;x++){const M=x/t,R=i+M*s;d.x=-A*Math.cos(R),d.y=E,d.z=A*Math.sin(R),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),m.push(M+b,1-w),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const w=u[p][T+1],S=u[p][T],E=u[p+1][T],A=u[p+1][T+1];(p!==0||a>0)&&h.push(w,S,A),(p!==n-1||l<Math.PI)&&h.push(S,E,A)}this.setIndex(h),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ds(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(_u(i))i.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(_u(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function An(r){const e={};for(let t=0;t<r.length;t++){const n=Ds(r[t]);for(const i in n)e[i]=n[i]}return e}function _u(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function gp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function qf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const xp={clone:Ds,merge:An};var vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(i.value);break;case"v2":this.uniforms[n].value=new je().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Mp extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ln extends La{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yp extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tp extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xc extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ep extends xc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const gl=new Pt,gu=new G,xu=new G;class Yf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gc,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xu),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ja=new G,Qa=new Gs,Ti=new G;class Kf extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ja,Qa,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Qa,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ja,Qa,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Qa,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new G,vu=new je,Su=new je;class Yn extends Kf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,vu,Su),t.subVectors(Su,vu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bp extends Yf{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ap extends xc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class vc extends Kf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wp extends Yf{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xl extends xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new wp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const ls=-90,cs=1;class Rp extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yn(ls,cs,e,t);i.layers=this.layers,this.add(i);const s=new Yn(ls,cs,e,t);s.layers=this.layers,this.add(s);const a=new Yn(ls,cs,e,t);a.layers=this.layers,this.add(a);const o=new Yn(ls,cs,e,t);o.layers=this.layers,this.add(o);const l=new Yn(ls,cs,e,t);l.layers=this.layers,this.add(l);const c=new Yn(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Cp extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Mu=new Pt;class Pp{constructor(e,t,n=0,i=1/0){this.ray=new Vf(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mu),this}intersectObject(e,t=!0,n=[]){return kl(e,this,n,t),n.sort(yu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)kl(e[i],this,n,t);return n.sort(yu),n}}function yu(r,e){return r.distance-e.distance}function kl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)kl(s[a],e,t,!0)}}const Zc=class Zc{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Zc.prototype.isMatrix2=!0;let Tu=Zc;function Eu(r,e,t,n){const i=Dp(n);switch(t){case 1021:return r*e;case 1028:return r*e/i.components*i.byteLength;case 1029:return r*e/i.components*i.byteLength;case 1030:return r*e*2/i.components*i.byteLength;case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case 1023:return r*e*4/i.components*i.byteLength;case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dp(r){switch(r){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $f(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Lp(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],g=d[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const g=d[h];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,n_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,c_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,__=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,x_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,z_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Fp,alphahash_pars_fragment:Ip,alphamap_fragment:Up,alphamap_pars_fragment:Np,alphatest_fragment:Op,alphatest_pars_fragment:Bp,aomap_fragment:Gp,aomap_pars_fragment:kp,batching_pars_vertex:zp,batching_vertex:Vp,begin_vertex:Hp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Jp,color_fragment:Qp,color_pars_fragment:jp,color_pars_vertex:em,color_vertex:tm,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:rm,displacementmap_pars_vertex:sm,displacementmap_vertex:am,emissivemap_fragment:om,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:um,envmap_fragment:fm,envmap_common_pars_fragment:hm,envmap_pars_fragment:dm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:bm,envmap_vertex:mm,fog_vertex:_m,fog_pars_vertex:gm,fog_fragment:xm,fog_pars_fragment:vm,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:Mm,lights_lambert_fragment:ym,lights_lambert_pars_fragment:Tm,lights_pars_begin:Em,lights_toon_fragment:Am,lights_toon_pars_fragment:wm,lights_phong_fragment:Rm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Lm,lights_fragment_maps:Fm,lights_fragment_end:Im,lightprobes_pars_fragment:Um,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Om,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:Gm,map_fragment:km,map_pars_fragment:zm,map_particle_fragment:Vm,map_particle_pars_fragment:Hm,metalnessmap_fragment:Wm,metalnessmap_pars_fragment:Xm,morphinstance_vertex:qm,morphcolor_vertex:Ym,morphnormal_vertex:Km,morphtarget_pars_vertex:$m,morphtarget_vertex:Zm,normal_fragment_begin:Jm,normal_fragment_maps:Qm,normal_pars_fragment:jm,normal_pars_vertex:e_,normal_vertex:t_,normalmap_pars_fragment:n_,clearcoat_normal_fragment_begin:i_,clearcoat_normal_fragment_maps:r_,clearcoat_pars_fragment:s_,iridescence_pars_fragment:a_,opaque_fragment:o_,packing:l_,premultiplied_alpha_fragment:c_,project_vertex:u_,dithering_fragment:f_,dithering_pars_fragment:h_,roughnessmap_fragment:d_,roughnessmap_pars_fragment:p_,shadowmap_pars_fragment:m_,shadowmap_pars_vertex:__,shadowmap_vertex:g_,shadowmask_pars_fragment:x_,skinbase_vertex:v_,skinning_pars_vertex:S_,skinning_vertex:M_,skinnormal_vertex:y_,specularmap_fragment:T_,specularmap_pars_fragment:E_,tonemapping_fragment:b_,tonemapping_pars_fragment:A_,transmission_fragment:w_,transmission_pars_fragment:R_,uv_pars_fragment:C_,uv_pars_vertex:P_,uv_vertex:D_,worldpos_vertex:L_,background_vert:F_,background_frag:I_,backgroundCube_vert:U_,backgroundCube_frag:N_,cube_vert:O_,cube_frag:B_,depth_vert:G_,depth_frag:k_,distance_vert:z_,distance_frag:V_,equirect_vert:H_,equirect_frag:W_,linedashed_vert:X_,linedashed_frag:q_,meshbasic_vert:Y_,meshbasic_frag:K_,meshlambert_vert:$_,meshlambert_frag:Z_,meshmatcap_vert:J_,meshmatcap_frag:Q_,meshnormal_vert:j_,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:rg,meshtoon_vert:sg,meshtoon_frag:ag,points_vert:og,points_frag:lg,shadow_vert:cg,shadow_frag:ug,sprite_vert:fg,sprite_frag:hg},Se={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},wi={basic:{uniforms:An([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:An([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:An([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:An([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:An([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:An([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:An([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:An([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:An([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:An([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:An([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:An([Se.common,Se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:An([Se.lights,Se.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};wi.physical={uniforms:An([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ja={r:0,b:0,g:0},dg=new Pt,Zf=new qe;Zf.set(-1,0,0,0,1,0,0,0,1);function pg(r,e,t,n,i,s){const a=new $e(0);let o=i===!0?0:1,l,c,u=null,d=0,f=null;function h(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){const S=T.backgroundBlurriness>0;w=e.get(w,S)}return w}function _(T){let w=!1;const S=h(T);S===null?m(a,o):S&&S.isColor&&(m(S,1),w=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(T,w){const S=h(w);S&&(S.isCubeTexture||S.mapping===306)?(c===void 0&&(c=new xt(new fi(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Ds(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zf),c.material.toneMapped=ot.getTransfer(S.colorSpace)!==mt,(u!==S||d!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new xt(new Yi(2,2),new Ii({name:"BackgroundMaterial",uniforms:Ds(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ot.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,w){T.getRGB(ja,qf(r)),t.buffers.color.setClear(ja.r,ja.g,ja.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:_,addToRenderList:g,dispose:p}}function mg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(L,P,V,W,U){let X=!1;const I=d(L,W,V,P);s!==I&&(s=I,c(s.object)),X=h(L,W,V,U),X&&_(L,W,V,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(L,P,V,W),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function d(L,P,V,W){const U=W.wireframe===!0;let X=n[P.id];X===void 0&&(X={},n[P.id]=X);const I=L.isInstancedMesh===!0?L.id:0;let K=X[I];K===void 0&&(K={},X[I]=K);let ee=K[V.id];ee===void 0&&(ee={},K[V.id]=ee);let D=ee[U];return D===void 0&&(D=f(l()),ee[U]=D),D}function f(L){const P=[],V=[],W=[];for(let U=0;U<t;U++)P[U]=0,V[U]=0,W[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:W,object:L,attributes:{},index:null}}function h(L,P,V,W){const U=s.attributes,X=P.attributes;let I=0;const K=V.getAttributes();for(const ee in K)if(K[ee].location>=0){const le=U[ee];let ge=X[ee];if(ge===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(ge=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(ge=L.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;I++}return s.attributesNum!==I||s.index!==W}function _(L,P,V,W){const U={},X=P.attributes;let I=0;const K=V.getAttributes();for(const ee in K)if(K[ee].location>=0){let le=X[ee];le===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(le=L.instanceColor));const ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),U[ee]=ge,I++}s.attributes=U,s.attributesNum=I,s.index=W}function g(){const L=s.newAttributes;for(let P=0,V=L.length;P<V;P++)L[P]=0}function m(L){p(L,0)}function p(L,P){const V=s.newAttributes,W=s.enabledAttributes,U=s.attributeDivisors;V[L]=1,W[L]===0&&(r.enableVertexAttribArray(L),W[L]=1),U[L]!==P&&(r.vertexAttribDivisor(L,P),U[L]=P)}function T(){const L=s.newAttributes,P=s.enabledAttributes;for(let V=0,W=P.length;V<W;V++)P[V]!==L[V]&&(r.disableVertexAttribArray(V),P[V]=0)}function w(L,P,V,W,U,X,I){I===!0?r.vertexAttribIPointer(L,P,V,U,X):r.vertexAttribPointer(L,P,V,W,U,X)}function S(L,P,V,W){g();const U=W.attributes,X=V.getAttributes(),I=P.defaultAttributeValues;for(const K in X){const ee=X[K];if(ee.location>=0){let D=U[K];if(D===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(D=L.instanceColor)),D!==void 0){const le=D.normalized,ge=D.itemSize,Ye=e.get(D);if(Ye===void 0)continue;const He=Ye.buffer,Oe=Ye.type,Z=Ye.bytesPerElement,ae=Oe===r.INT||Oe===r.UNSIGNED_INT||D.gpuType===1013;if(D.isInterleavedBufferAttribute){const ie=D.data,we=ie.stride,Ne=D.offset;if(ie.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ee.locationSize;Ee++)p(ee.location+Ee,ie.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ee=0;Ee<ee.locationSize;Ee++)m(ee.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,He);for(let Ee=0;Ee<ee.locationSize;Ee++)w(ee.location+Ee,ge/ee.locationSize,Oe,le,we*Z,(Ne+ge/ee.locationSize*Ee)*Z,ae)}else{if(D.isInstancedBufferAttribute){for(let ie=0;ie<ee.locationSize;ie++)p(ee.location+ie,D.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ie=0;ie<ee.locationSize;ie++)m(ee.location+ie);r.bindBuffer(r.ARRAY_BUFFER,He);for(let ie=0;ie<ee.locationSize;ie++)w(ee.location+ie,ge/ee.locationSize,Oe,le,ge*Z,ge/ee.locationSize*ie*Z,ae)}}else if(I!==void 0){const le=I[K];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(ee.location,le);break;case 3:r.vertexAttrib3fv(ee.location,le);break;case 4:r.vertexAttrib4fv(ee.location,le);break;default:r.vertexAttrib1fv(ee.location,le)}}}}T()}function E(){M();for(const L in n){const P=n[L];for(const V in P){const W=P[V];for(const U in W){const X=W[U];for(const I in X)u(X[I].object),delete X[I];delete W[U]}}delete n[L]}}function A(L){if(n[L.id]===void 0)return;const P=n[L.id];for(const V in P){const W=P[V];for(const U in W){const X=W[U];for(const I in X)u(X[I].object),delete X[I];delete W[U]}}delete n[L.id]}function b(L){for(const P in n){const V=n[P];for(const W in V){const U=V[W];if(U[L.id]===void 0)continue;const X=U[L.id];for(const I in X)u(X[I].object),delete X[I];delete U[L.id]}}}function x(L){for(const P in n){const V=n[P],W=L.isInstancedMesh===!0?L.id:0,U=V[W];if(U!==void 0){for(const X in U){const I=U[X];for(const K in I)u(I[K].object),delete I[K];delete U[X]}delete V[W],Object.keys(V).length===0&&delete n[P]}}}function M(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:M,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function _g(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function gg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==1023&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const x=b===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==1009&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==1015&&!x)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:S,maxSamples:E,samples:A}}function xg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Rr,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,w=T*4;let S=p.clippingState||null;l.value=S,S=u(_,f,w,h);for(let E=0;E!==w;++E)S[E]=t[E];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=h+g*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=h;w!==g;++w,S+=4)a.copy(d[w]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}const or=4,bu=[.125,.215,.35,.446,.526,.582],Lr=20,vg=256,qs=new vc,Au=new $e;let vl=null,Sl=0,Ml=0,yl=!1;const Sg=new G;class wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Sg}=s;vl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,Sl,Ml),this._renderer.xr.enabled=yl,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Ao,depthBuffer:!1},i=Ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mg(s)),this._blurMaterial=Tg(s,e,t),this._ggxMaterial=yg(s,e,t)}return i}_compileMaterial(e){const t=new xt(new Si,e);this._renderer.compile(t,qs)}_sceneToCubeUV(e,t,n,i,s){const l=new Yn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Au),d.toneMapping=0,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new fi,new Hf({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(Au),p=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const E=this._cubeSize;us(i,S*E,w>2?E:0,E,E),d.setRenderTarget(i),p&&d.render(g,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-or?n-_+or:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,us(s,m,p,3*g,2*g),i.setRenderTarget(s),i.render(o,qs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,us(e,m,p,3*g,2*g),i.setRenderTarget(e),i.render(o,qs)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const f=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Lr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Lr;m>Lr&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const p=[];let T=0;for(let b=0;b<Lr;++b){const x=b/g,M=Math.exp(-x*x/2);p.push(M),b===0?T+=M:b<m&&(T+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:w}=this;f.dTheta.value=_,f.mipInt.value=w-n;const S=this._sizeLods[i],E=3*S*(i>w-or?i-w+or:0),A=4*(this._cubeSize-S);us(t,E,A,3*S,2*S),l.setRenderTarget(t),l.render(d,qs)}}function Mg(r){const e=[],t=[],n=[];let i=r;const s=r-or+1+bu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-or?l=bu[a-r+or-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,g=3,m=2,p=1,T=new Float32Array(g*_*h),w=new Float32Array(m*_*h),S=new Float32Array(p*_*h);for(let A=0;A<h;A++){const b=A%3*2/3-1,x=A>2?0:-1,M=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];T.set(M,g*_*A),w.set(f,m*_*A);const R=[A,A,A,A,A,A];S.set(R,p*_*A)}const E=new Si;E.setAttribute("position",new Li(T,g)),E.setAttribute("uv",new Li(w,m)),E.setAttribute("faceIndex",new Li(S,p)),n.push(new xt(E,null)),i>or&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ru(r,e,t){const n=new Di(r,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function yg(r,e,t){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tg(r,e,t){const n=new Float32Array(Lr),i=new G(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cu(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Pu(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jf extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fi(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new xt(i,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Rp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Eg(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===303||h===304)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const g=new Jf(_.height);return g.fromEquirectangularTexture(r,f),e.set(f,g),f.addEventListener("dispose",c),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const h=f.mapping,_=h===303||h===304,g=h===301||h===302;if(_||g){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new wu(r)),m=_?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const T=f.image;return _&&T&&T.height>0||g&&T&&l(T)?(n===null&&(n=new wu(r)),m=_?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,h){return h===303?f.mapping=301:h===304&&(f.mapping=302),f}function l(f){let h=0;const _=6;for(let g=0;g<_;g++)f[g]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function bg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ms("WebGLRenderer: "+n+" extension not supported."),i}}}function Ag(r,e,t,n){const i={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],r.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let g=0;if(_===void 0)return;if(h!==null){const T=h.array;g=h.version;for(let w=0,S=T.length;w<S;w+=3){const E=T[w+0],A=T[w+1],b=T[w+2];f.push(E,A,A,b,b,E)}}else{const T=_.array;g=_.version;for(let w=0,S=T.length/3-1;w<S;w+=3){const E=w+0,A=w+1,b=w+2;f.push(E,A,A,b,b,E)}}const m=new(_.count>=65535?zf:kf)(f,1);m.version=g;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function wg(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,h){h!==0&&(r.drawElementsInstanced(n,f,s,d*a,h),t.update(f,n,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,h);let g=0;for(let m=0;m<h;m++)g+=f[m];t.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Rg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cg(r,e,t){const n=new WeakMap,i=new Ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let R=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var h=R;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let E=o.attributes.position.count*S,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*A*4*d),x=new Bf(b,E,A,d);x.type=1015,x.needsUpdate=!0;const M=S*4;for(let L=0;L<d;L++){const P=p[L],V=T[L],W=w[L],U=E*A*4*L;for(let X=0;X<P.count;X++){const I=X*M;_===!0&&(i.fromBufferAttribute(P,X),b[U+I+0]=i.x,b[U+I+1]=i.y,b[U+I+2]=i.z,b[U+I+3]=0),g===!0&&(i.fromBufferAttribute(V,X),b[U+I+4]=i.x,b[U+I+5]=i.y,b[U+I+6]=i.z,b[U+I+7]=0),m===!0&&(i.fromBufferAttribute(W,X),b[U+I+8]=i.x,b[U+I+9]=i.y,b[U+I+10]=i.z,b[U+I+11]=W.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new je(E,A)},n.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Pg(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Dg={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Lg(r,e,t,n,i,s){const a=new Di(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new Ps(e,t):void 0}),o=new Di(e,t,{type:1016,depthBuffer:!1,stencilBuffer:!1}),l=new Si;l.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const c=new Mp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new xt(l,c),d=new vc(-1,1,1,-1,0,1);let f=null,h=null,_=!1,g,m=null,p=[],T=!1;this.setSize=function(w,S){a.setSize(w,S),o.setSize(w,S);for(let E=0;E<p.length;E++){const A=p[E];A.setSize&&A.setSize(w,S)}},this.setEffects=function(w){p=w,T=p.length>0&&p[0].isRenderPass===!0;const S=a.width,E=a.height;for(let A=0;A<p.length;A++){const b=p[A];b.setSize&&b.setSize(S,E)}},this.begin=function(w,S){if(_||w.toneMapping===0&&p.length===0)return!1;if(m=S,S!==null){const E=S.width,A=S.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return T===!1&&w.setRenderTarget(a),g=w.toneMapping,w.toneMapping=0,!0},this.hasRenderPass=function(){return T},this.end=function(w,S){w.toneMapping=g,_=!0;let E=a,A=o;for(let b=0;b<p.length;b++){const x=p[b];if(x.enabled!==!1&&(x.render(w,A,E,S),x.needsSwap!==!1)){const M=E;E=A,A=M}}if(f!==w.outputColorSpace||h!==w.toneMapping){f=w.outputColorSpace,h=w.toneMapping,c.defines={},ot.getTransfer(f)===mt&&(c.defines.SRGB_TRANSFER="");const b=Dg[h];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,w.setRenderTarget(m),w.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Qf=new vn,zl=new Ps(1,1),jf=new Bf,eh=new Jd,th=new Wf,Du=[],Lu=[],Fu=new Float32Array(16),Iu=new Float32Array(9),Uu=new Float32Array(4);function zs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Du[i];if(s===void 0&&(s=new Float32Array(i),Du[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ho(r,e){let t=Lu[e];t===void 0&&(t=new Int32Array(e),Lu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Fg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ig(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),jt(t,e)}}function Ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),jt(t,e)}}function Ng(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),jt(t,e)}}function Og(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Qt(t,n))return;Uu.set(n),r.uniformMatrix2fv(this.addr,!1,Uu),jt(t,n)}}function Bg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Qt(t,n))return;Iu.set(n),r.uniformMatrix3fv(this.addr,!1,Iu),jt(t,n)}}function Gg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Qt(t,n))return;Fu.set(n),r.uniformMatrix4fv(this.addr,!1,Fu),jt(t,n)}}function kg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),jt(t,e)}}function Vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),jt(t,e)}}function Hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),jt(t,e)}}function Wg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),jt(t,e)}}function qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),jt(t,e)}}function Yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),jt(t,e)}}function Kg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(zl.compareFunction=t.isReversedDepthBuffer()?518:515,s=zl):s=Qf,t.setTexture2D(e||s,i)}function $g(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||eh,i)}function Zg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||th,i)}function Jg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jf,i)}function Qg(r){switch(r){case 5126:return Fg;case 35664:return Ig;case 35665:return Ug;case 35666:return Ng;case 35674:return Og;case 35675:return Bg;case 35676:return Gg;case 5124:case 35670:return kg;case 35667:case 35671:return zg;case 35668:case 35672:return Vg;case 35669:case 35673:return Hg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function jg(r,e){r.uniform1fv(this.addr,e)}function e0(r,e){const t=zs(e,this.size,2);r.uniform2fv(this.addr,t)}function t0(r,e){const t=zs(e,this.size,3);r.uniform3fv(this.addr,t)}function n0(r,e){const t=zs(e,this.size,4);r.uniform4fv(this.addr,t)}function i0(r,e){const t=zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function r0(r,e){const t=zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function s0(r,e){const t=zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function a0(r,e){r.uniform1iv(this.addr,e)}function o0(r,e){r.uniform2iv(this.addr,e)}function l0(r,e){r.uniform3iv(this.addr,e)}function c0(r,e){r.uniform4iv(this.addr,e)}function u0(r,e){r.uniform1uiv(this.addr,e)}function f0(r,e){r.uniform2uiv(this.addr,e)}function h0(r,e){r.uniform3uiv(this.addr,e)}function d0(r,e){r.uniform4uiv(this.addr,e)}function p0(r,e,t){const n=this.cache,i=e.length,s=Ho(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=zl:a=Qf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function m0(r,e,t){const n=this.cache,i=e.length,s=Ho(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||eh,s[a])}function _0(r,e,t){const n=this.cache,i=e.length,s=Ho(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||th,s[a])}function g0(r,e,t){const n=this.cache,i=e.length,s=Ho(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||jf,s[a])}function x0(r){switch(r){case 5126:return jg;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return r0;case 35676:return s0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return u0;case 36294:return f0;case 36295:return h0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return g0}}class v0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qg(t.type)}}class S0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x0(t.type)}}class M0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function Nu(r,e){r.seq.push(e),r.map[e.id]=e}function y0(r,e,t){const n=r.name,i=n.length;for(Tl.lastIndex=0;;){const s=Tl.exec(n),a=Tl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Nu(t,c===void 0?new v0(o,r,e):new S0(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new M0(o),Nu(t,d)),t=d}}}class _o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);y0(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ou(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const T0=37297;let E0=0;function b0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Bu=new qe;function A0(r){ot._getMatrix(Bu,ot.workingColorSpace,r);const e=`mat3( ${Bu.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(r)){case wo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Gu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+b0(r.getShaderSource(e),o)}else return s}function w0(r,e){const t=A0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const R0={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function C0(r,e){const t=R0[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eo=new G;function P0(){ot.getLuminanceCoefficients(eo);const r=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function L0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function js(r){return r!==""}function ku(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(r){return r.replace(I0,N0)}const U0=new Map;function N0(r,e){let t=Ze[e];if(t===void 0){const n=U0.get(e);if(n!==void 0)t=Ze[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vl(t)}const O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(r){return r.replace(O0,B0)}function B0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Hu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const G0={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function k0(r){return G0[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const z0={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function V0(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":z0[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const H0={302:"ENVMAP_MODE_REFRACTION"};function W0(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":H0[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const X0={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function q0(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":X0[r.combine]||"ENVMAP_BLENDING_NONE"}function Y0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=k0(t),c=V0(t),u=W0(t),d=q0(t),f=Y0(t),h=D0(t),_=L0(s),g=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ze.tonemapping_pars_fragment:"",t.toneMapping!==0?C0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,w0("linearToOutputTexel",t.outputColorSpace),P0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),a=Vl(a),a=ku(a,t),a=zu(a,t),o=Vl(o),o=ku(o,t),o=zu(o,t),a=Vu(a),o=Vu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=T+m+a,S=T+p+o,E=Ou(i,i.VERTEX_SHADER,w),A=Ou(i,i.FRAGMENT_SHADER,S);i.attachShader(g,E),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(L){if(r.debug.checkShaderErrors){const P=i.getProgramInfoLog(g)||"",V=i.getShaderInfoLog(E)||"",W=i.getShaderInfoLog(A)||"",U=P.trim(),X=V.trim(),I=W.trim();let K=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,E,A);else{const D=Gu(i,E,"vertex"),le=Gu(i,A,"fragment");ct("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+D+`
`+le)}else U!==""?ke("WebGLProgram: Program Info Log:",U):(X===""||I==="")&&(ee=!1);ee&&(L.diagnostics={runnable:K,programLog:U,vertexShader:{log:X,prefix:m},fragmentShader:{log:I,prefix:p}})}i.deleteShader(E),i.deleteShader(A),x=new _o(i,g),M=F0(i,g)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(g,T0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}let $0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new J0(e),t.set(e,n)),n}}class J0{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}}function Q0(r){return r===1030||r===37490||r===36285}function j0(r,e,t,n,i,s){const a=new mc,o=new Z0,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,M,R,L,P,V){const W=L.fog,U=P.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||X,I),ee=K&&K.mapping===306?K.image.height:null,D=h[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const le=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ge=le!==void 0?le.length:0;let Ye=0;U.morphAttributes.position!==void 0&&(Ye=1),U.morphAttributes.normal!==void 0&&(Ye=2),U.morphAttributes.color!==void 0&&(Ye=3);let He,Oe,Z,ae;if(D){const ne=wi[D];He=ne.vertexShader,Oe=ne.fragmentShader}else{He=x.vertexShader,Oe=x.fragmentShader;const ne=o.getVertexShaderStage(x),Ie=o.getFragmentShaderStage(x);o.update(x,ne,Ie),Z=ne.id,ae=Ie.id}const ie=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Ne=P.isInstancedMesh===!0,Ee=P.isBatchedMesh===!0,rt=!!x.map,ye=!!x.matcap,Be=!!K,Ve=!!x.aoMap,ze=!!x.lightMap,q=!!x.bumpMap&&x.wireframe===!1,ut=!!x.normalMap,_t=!!x.displacementMap,Et=!!x.emissiveMap,We=!!x.metalnessMap,ht=!!x.roughnessMap,N=x.anisotropy>0,Ut=x.clearcoat>0,Ge=x.dispersion>0,C=x.iridescence>0,v=x.sheen>0,B=x.transmission>0,z=N&&!!x.anisotropyMap,$=Ut&&!!x.clearcoatMap,ue=Ut&&!!x.clearcoatNormalMap,oe=Ut&&!!x.clearcoatRoughnessMap,J=C&&!!x.iridescenceMap,Q=C&&!!x.iridescenceThicknessMap,de=v&&!!x.sheenColorMap,Ae=v&&!!x.sheenRoughnessMap,pe=!!x.specularMap,he=!!x.specularColorMap,ce=!!x.specularIntensityMap,Pe=B&&!!x.transmissionMap,Fe=B&&!!x.thicknessMap,F=!!x.gradientMap,fe=!!x.alphaMap,j=x.alphaTest>0,me=!!x.alphaHash,_e=!!x.extensions;let te=0;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(te=r.toneMapping);const re={shaderID:D,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:Oe,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&P._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&P.instanceColor!==null,instancingMorph:Ne&&P.morphTexture!==null,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:rt,matcap:ye,envMap:Be,envMapMode:Be&&K.mapping,envMapCubeUVHeight:ee,aoMap:Ve,lightMap:ze,bumpMap:q,normalMap:ut,displacementMap:_t,emissiveMap:Et,normalMapObjectSpace:ut&&x.normalMapType===1,normalMapTangentSpace:ut&&x.normalMapType===0,packedNormalMap:ut&&x.normalMapType===0&&Q0(x.normalMap.format),metalnessMap:We,roughnessMap:ht,anisotropy:N,anisotropyMap:z,clearcoat:Ut,clearcoatMap:$,clearcoatNormalMap:ue,clearcoatRoughnessMap:oe,dispersion:Ge,iridescence:C,iridescenceMap:J,iridescenceThicknessMap:Q,sheen:v,sheenColorMap:de,sheenRoughnessMap:Ae,specularMap:pe,specularColorMap:he,specularIntensityMap:ce,transmission:B,transmissionMap:Pe,thicknessMap:Fe,gradientMap:F,opaque:x.transparent===!1&&x.blending===1&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:j,alphaHash:me,combine:x.combine,mapUv:rt&&_(x.map.channel),aoMapUv:Ve&&_(x.aoMap.channel),lightMapUv:ze&&_(x.lightMap.channel),bumpMapUv:q&&_(x.bumpMap.channel),normalMapUv:ut&&_(x.normalMap.channel),displacementMapUv:_t&&_(x.displacementMap.channel),emissiveMapUv:Et&&_(x.emissiveMap.channel),metalnessMapUv:We&&_(x.metalnessMap.channel),roughnessMapUv:ht&&_(x.roughnessMap.channel),anisotropyMapUv:z&&_(x.anisotropyMap.channel),clearcoatMapUv:$&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(x.sheenRoughnessMap.channel),specularMapUv:pe&&_(x.specularMap.channel),specularColorMapUv:he&&_(x.specularColorMap.channel),specularIntensityMapUv:ce&&_(x.specularIntensityMap.channel),transmissionMapUv:Pe&&_(x.transmissionMap.channel),thicknessMapUv:Fe&&_(x.thicknessMap.channel),alphaMapUv:fe&&_(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ut||N),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(rt||fe),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&ut===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:te,decodeVideoTexture:rt&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:Et&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(M,x),T(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function T(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const M=h[x.type];let R;if(M){const L=wi[M];R=xp.clone(L.uniforms)}else R=x.uniforms;return R}function S(x,M){let R=u.get(M);return R!==void 0?++R.usedTimes:(R=new K0(r,M,x,i),c.push(R),u.set(M,R)),R}function E(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function b(){o.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:S,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:b}}function ex(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function tx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Wu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,_,g,m,p){let T=r[e];return T===void 0?(T={id:f.id,object:f,geometry:h,material:_,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},r[e]=T):(T.id=f.id,T.object=f,T.geometry=h,T.material=_,T.materialVariant=a(f),T.groupOrder=g,T.renderOrder=f.renderOrder,T.z=m,T.group=p),e++,T}function l(f,h,_,g,m,p){const T=o(f,h,_,g,m,p);_.transmission>0?n.push(T):_.transparent===!0?i.push(T):t.push(T)}function c(f,h,_,g,m,p){const T=o(f,h,_,g,m,p);_.transmission>0?n.unshift(T):_.transparent===!0?i.unshift(T):t.unshift(T)}function u(f,h,_){t.length>1&&t.sort(f||tx),n.length>1&&n.sort(h||Wu),i.length>1&&i.sort(h||Wu),_&&(t.reverse(),n.reverse(),i.reverse())}function d(){for(let f=e,h=r.length;f<h;f++){const _=r[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function nx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Xu,r.set(n,[a])):i>=s.length?(a=new Xu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ix(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new $e};break;case"SpotLight":t={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function rx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let sx=0;function ax(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ox(r){const e=new ix,t=rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const i=new G,s=new Pt,a=new Pt;function o(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,_=0,g=0,m=0,p=0,T=0,w=0,S=0,E=0,A=0,b=0;c.sort(ax);for(let M=0,R=c.length;M<R;M++){const L=c[M],P=L.color,V=L.intensity,W=L.distance;let U=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===1030?U=L.shadow.map.texture:U=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=P.r*V,d+=P.g*V,f+=P.b*V;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],V);b++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const I=L.shadow,K=t.get(L);K.shadowIntensity=I.intensity,K.shadowBias=I.bias,K.shadowNormalBias=I.normalBias,K.shadowRadius=I.radius,K.shadowMapSize=I.mapSize,n.directionalShadow[h]=K,n.directionalShadowMap[h]=U,n.directionalShadowMatrix[h]=L.shadow.matrix,T++}n.directional[h]=X,h++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(P).multiplyScalar(V),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[g]=X;const I=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,I.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[g]=I.matrix,L.castShadow){const K=t.get(L);K.shadowIntensity=I.intensity,K.shadowBias=I.bias,K.shadowNormalBias=I.normalBias,K.shadowRadius=I.radius,K.shadowMapSize=I.mapSize,n.spotShadow[g]=K,n.spotShadowMap[g]=U,S++}g++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(P).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const I=L.shadow,K=t.get(L);K.shadowIntensity=I.intensity,K.shadowBias=I.bias,K.shadowNormalBias=I.normalBias,K.shadowRadius=I.radius,K.shadowMapSize=I.mapSize,K.shadowCameraNear=I.camera.near,K.shadowCameraFar=I.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=U,n.pointShadowMatrix[_]=L.shadow.matrix,w++}n.point[_]=X,_++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(V),X.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[p]=X,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const x=n.hash;(x.directionalLength!==h||x.pointLength!==_||x.spotLength!==g||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==T||x.numPointShadows!==w||x.numSpotShadows!==S||x.numSpotMaps!==E||x.numLightProbes!==b)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,x.directionalLength=h,x.pointLength=_,x.spotLength=g,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=T,x.numPointShadows=w,x.numSpotShadows=S,x.numSpotMaps=E,x.numLightProbes=b,n.version=sx++)}function l(c,u){let d=0,f=0,h=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const w=c[p];if(w.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(w.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(w.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function qu(r){const e=new ox(r),t=[],n=[],i=[];function s(f){d.camera=f,t.length=0,n.length=0,i.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){i.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function lx(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new qu(r),e.set(i,[o])):s>=a.length?(o=new qu(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fx=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],hx=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Yu=new Pt,Ys=new G,El=new G;function dx(r,e,t){let n=new gc;const i=new je,s=new je,a=new Ft,o=new yp,l=new Tp,c={},u=t.maxTextureSize,d={0:1,1:0,2:2},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:cx,fragmentShader:ux}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Si;_.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new xt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(A,b,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===2&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const M=r.getRenderTarget(),R=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),P=r.state;P.setBlending(0),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const V=p!==this.type;V&&b.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(U=>U.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,U=A.length;W<U;W++){const X=A[W],I=X.shadow;if(I===void 0){ke("WebGLShadowMap:",X,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const K=I.getFrameExtents();i.multiply(K),s.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,I.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,I.mapSize.y=s.y));const ee=r.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ee,I.map===null||V===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===3){if(X.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Di(i.x,i.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),I.map.texture.name=X.name+".shadowMap",I.map.depthTexture=new Ps(i.x,i.y,1015),I.map.depthTexture.name=X.name+".shadowMapDepth",I.map.depthTexture.format=1026,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=1003,I.map.depthTexture.magFilter=1003}else X.isPointLight?(I.map=new Jf(i.x),I.map.depthTexture=new _p(i.x,1014)):(I.map=new Di(i.x,i.y),I.map.depthTexture=new Ps(i.x,i.y,1014)),I.map.depthTexture.name=X.name+".shadowMap",I.map.depthTexture.format=1026,this.type===1?(I.map.depthTexture.compareFunction=ee?518:515,I.map.depthTexture.minFilter=1006,I.map.depthTexture.magFilter=1006):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=1003,I.map.depthTexture.magFilter=1003);I.camera.updateProjectionMatrix()}const D=I.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<D;le++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,le),r.clear();else{le===0&&(r.setRenderTarget(I.map),r.clear());const ge=I.getViewport(le);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),P.viewport(a)}if(X.isPointLight){const ge=I.camera,Ye=I.matrix,He=X.distance||ge.far;He!==ge.far&&(ge.far=He,ge.updateProjectionMatrix()),Ys.setFromMatrixPosition(X.matrixWorld),ge.position.copy(Ys),El.copy(ge.position),El.add(fx[le]),ge.up.copy(hx[le]),ge.lookAt(El),ge.updateMatrixWorld(),Ye.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Yu.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Yu,ge.coordinateSystem,ge.reversedDepth)}else I.updateMatrices(X);n=I.getFrustum(),S(b,x,I.camera,X,this.type)}I.isPointLightShadow!==!0&&this.type===3&&T(I,x),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,R,L)};function T(A,b){const x=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Di(i.x,i.y,{format:1030,type:1016})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,x,f,g,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,x,h,g,null)}function w(A,b,x,M){let R=null;const L=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const P=R.uuid,V=b.uuid;let W=c[P];W===void 0&&(W={},c[P]=W);let U=W[V];U===void 0&&(U=R.clone(),W[V]=U,b.addEventListener("dispose",E)),R=U}if(R.visible=b.visible,R.wireframe=b.wireframe,M===3?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:d[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const P=r.properties.get(R);P.light=x}return R}function S(A,b,x,M,R){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const V=e.update(A),W=A.material;if(Array.isArray(W)){const U=V.groups;for(let X=0,I=U.length;X<I;X++){const K=U[X],ee=W[K.materialIndex];if(ee&&ee.visible){const D=w(A,ee,M,R);A.onBeforeShadow(r,A,b,x,V,D,K),r.renderBufferDirect(x,null,V,D,A,K),A.onAfterShadow(r,A,b,x,V,D,K)}}}else if(W.visible){const U=w(A,W,M,R);A.onBeforeShadow(r,A,b,x,V,U,null),r.renderBufferDirect(x,null,V,U,A,null),A.onAfterShadow(r,A,b,x,V,U,null)}}const P=A.children;for(let V=0,W=P.length;V<W;V++)S(P[V],b,x,M,R)}function E(A){A.target.removeEventListener("dispose",E);for(const x in c){const M=c[x],R=A.target.uuid;R in M&&(M[R].dispose(),delete M[R])}}}function px(r,e){function t(){let F=!1;const fe=new Ft;let j=null;const me=new Ft(0,0,0,0);return{setMask:function(_e){j!==_e&&!F&&(r.colorMask(_e,_e,_e,_e),j=_e)},setLocked:function(_e){F=_e},setClear:function(_e,te,re,ne,Ie){Ie===!0&&(_e*=ne,te*=ne,re*=ne),fe.set(_e,te,re,ne),me.equals(fe)===!1&&(r.clearColor(_e,te,re,ne),me.copy(fe))},reset:function(){F=!1,j=null,me.set(-1,0,0,0)}}}function n(){let F=!1,fe=!1,j=null,me=null,_e=null;return{setReversed:function(te){if(fe!==te){const re=e.get("EXT_clip_control");te?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),fe=te;const ne=_e;_e=null,this.setClear(ne)}},getReversed:function(){return fe},setTest:function(te){te?ie(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(te){j!==te&&!F&&(r.depthMask(te),j=te)},setFunc:function(te){if(fe&&(te=Cd[te]),me!==te){switch(te){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=te}},setLocked:function(te){F=te},setClear:function(te){_e!==te&&(_e=te,fe&&(te=1-te),r.clearDepth(te))},reset:function(){F=!1,j=null,me=null,_e=null,fe=!1}}}function i(){let F=!1,fe=null,j=null,me=null,_e=null,te=null,re=null,ne=null,Ie=null;return{setTest:function(se){F||(se?ie(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(se){fe!==se&&!F&&(r.stencilMask(se),fe=se)},setFunc:function(se,Ue,Re){(j!==se||me!==Ue||_e!==Re)&&(r.stencilFunc(se,Ue,Re),j=se,me=Ue,_e=Re)},setOp:function(se,Ue,Re){(te!==se||re!==Ue||ne!==Re)&&(r.stencilOp(se,Ue,Re),te=se,re=Ue,ne=Re)},setLocked:function(se){F=se},setClear:function(se){Ie!==se&&(r.clearStencil(se),Ie=se)},reset:function(){F=!1,fe=null,j=null,me=null,_e=null,te=null,re=null,ne=null,Ie=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f={},h=new WeakMap,_=[],g=null,m=!1,p=null,T=null,w=null,S=null,E=null,A=null,b=null,x=new $e(0,0,0),M=0,R=!1,L=null,P=null,V=null,W=null,U=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,K=0;const ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ee)[1]),I=K>=1):ee.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),I=K>=2);let D=null,le={};const ge=r.getParameter(r.SCISSOR_BOX),Ye=r.getParameter(r.VIEWPORT),He=new Ft().fromArray(ge),Oe=new Ft().fromArray(Ye);function Z(F,fe,j,me){const _e=new Uint8Array(4),te=r.createTexture();r.bindTexture(F,te),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<j;re++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(fe,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,_e):r.texImage2D(fe+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_e);return te}const ae={};ae[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(r.DEPTH_TEST),a.setFunc(3),q(!1),ut(1),ie(r.CULL_FACE),Ve(0);function ie(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function we(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function Ne(F,fe){return f[F]!==fe?(r.bindFramebuffer(F,fe),f[F]=fe,F===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=fe),F===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ee(F,fe){let j=_,me=!1;if(F){j=h.get(fe),j===void 0&&(j=[],h.set(fe,j));const _e=F.textures;if(j.length!==_e.length||j[0]!==r.COLOR_ATTACHMENT0){for(let te=0,re=_e.length;te<re;te++)j[te]=r.COLOR_ATTACHMENT0+te;j.length=_e.length,me=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,me=!0);me&&r.drawBuffers(j)}function rt(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const ye={100:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};ye[103]=r.MIN,ye[104]=r.MAX;const Be={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function Ve(F,fe,j,me,_e,te,re,ne,Ie,se){if(F===0){m===!0&&(we(r.BLEND),m=!1);return}if(m===!1&&(ie(r.BLEND),m=!0),F!==5){if(F!==p||se!==R){if((T!==100||E!==100)&&(r.blendEquation(r.FUNC_ADD),T=100,E=100),se)switch(F){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ct("WebGLState: Invalid blending: ",F);break}else switch(F){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case 3:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",F);break}w=null,S=null,A=null,b=null,x.set(0,0,0),M=0,p=F,R=se}return}_e=_e||fe,te=te||j,re=re||me,(fe!==T||_e!==E)&&(r.blendEquationSeparate(ye[fe],ye[_e]),T=fe,E=_e),(j!==w||me!==S||te!==A||re!==b)&&(r.blendFuncSeparate(Be[j],Be[me],Be[te],Be[re]),w=j,S=me,A=te,b=re),(ne.equals(x)===!1||Ie!==M)&&(r.blendColor(ne.r,ne.g,ne.b,Ie),x.copy(ne),M=Ie),p=F,R=!1}function ze(F,fe){F.side===2?we(r.CULL_FACE):ie(r.CULL_FACE);let j=F.side===1;fe&&(j=!j),q(j),F.blending===1&&F.transparent===!1?Ve(0):Ve(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const me=F.stencilWrite;o.setTest(me),me&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Et(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function q(F){L!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),L=F)}function ut(F){F!==0?(ie(r.CULL_FACE),F!==P&&(F===1?r.cullFace(r.BACK):F===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),P=F}function _t(F){F!==V&&(I&&r.lineWidth(F),V=F)}function Et(F,fe,j){F?(ie(r.POLYGON_OFFSET_FILL),(W!==fe||U!==j)&&(W=fe,U=j,a.getReversed()&&(fe=-fe),r.polygonOffset(fe,j))):we(r.POLYGON_OFFSET_FILL)}function We(F){F?ie(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function ht(F){F===void 0&&(F=r.TEXTURE0+X-1),D!==F&&(r.activeTexture(F),D=F)}function N(F,fe,j){j===void 0&&(D===null?j=r.TEXTURE0+X-1:j=D);let me=le[j];me===void 0&&(me={type:void 0,texture:void 0},le[j]=me),(me.type!==F||me.texture!==fe)&&(D!==j&&(r.activeTexture(j),D=j),r.bindTexture(F,fe||ae[F]),me.type=F,me.texture=fe)}function Ut(){const F=le[D];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ge(){try{r.compressedTexImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function v(){try{r.texSubImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function B(){try{r.texSubImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function z(){try{r.compressedTexSubImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function ue(){try{r.texStorage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function oe(){try{r.texStorage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function J(){try{r.texImage2D(...arguments)}catch(F){ct("WebGLState:",F)}}function Q(){try{r.texImage3D(...arguments)}catch(F){ct("WebGLState:",F)}}function de(F){return d[F]!==void 0?d[F]:r.getParameter(F)}function Ae(F,fe){d[F]!==fe&&(r.pixelStorei(F,fe),d[F]=fe)}function pe(F){He.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function he(F){Oe.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Oe.copy(F))}function ce(F,fe){let j=c.get(fe);j===void 0&&(j=new WeakMap,c.set(fe,j));let me=j.get(F);me===void 0&&(me=r.getUniformBlockIndex(fe,F.name),j.set(F,me))}function Pe(F,fe){const me=c.get(fe).get(F);l.get(fe)!==me&&(r.uniformBlockBinding(fe,me,F.__bindingPointIndex),l.set(fe,me))}function Fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},D=null,le={},f={},h=new WeakMap,_=[],g=null,m=!1,p=null,T=null,w=null,S=null,E=null,A=null,b=null,x=new $e(0,0,0),M=0,R=!1,L=null,P=null,V=null,W=null,U=null,He.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:we,bindFramebuffer:Ne,drawBuffers:Ee,useProgram:rt,setBlending:Ve,setMaterial:ze,setFlipSided:q,setCullFace:ut,setLineWidth:_t,setPolygonOffset:Et,setScissorTest:We,activeTexture:ht,bindTexture:N,unbindTexture:Ut,compressedTexImage2D:Ge,compressedTexImage3D:C,texImage2D:J,texImage3D:Q,pixelStorei:Ae,getParameter:de,updateUBOMapping:ce,uniformBlockBinding:Pe,texStorage2D:ue,texStorage3D:oe,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:z,compressedTexSubImage3D:$,scissor:pe,viewport:he,reset:Fe}}function mx(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return _?new OffscreenCanvas(C,v):Ro("canvas")}function m(C,v,B){let z=1;const $=Ge(C);if(($.width>B||$.height>B)&&(z=B/Math.max($.width,$.height)),z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ue=Math.floor(z*$.width),oe=Math.floor(z*$.height);f===void 0&&(f=g(ue,oe));const J=v?g(ue,oe):f;return J.width=ue,J.height=oe,J.getContext("2d").drawImage(C,0,0,ue,oe),ke("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ue+"x"+oe+")."),J}else return"data"in C&&ke("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function T(C){r.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,v,B,z,$,ue=!1){if(C!==null){if(r[C]!==void 0)return r[C];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;z&&(oe=e.get("EXT_texture_norm16"),oe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===r.RED&&(B===r.FLOAT&&(J=r.R32F),B===r.HALF_FLOAT&&(J=r.R16F),B===r.UNSIGNED_BYTE&&(J=r.R8),B===r.UNSIGNED_SHORT&&oe&&(J=oe.R16_EXT),B===r.SHORT&&oe&&(J=oe.R16_SNORM_EXT)),v===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(J=r.R8UI),B===r.UNSIGNED_SHORT&&(J=r.R16UI),B===r.UNSIGNED_INT&&(J=r.R32UI),B===r.BYTE&&(J=r.R8I),B===r.SHORT&&(J=r.R16I),B===r.INT&&(J=r.R32I)),v===r.RG&&(B===r.FLOAT&&(J=r.RG32F),B===r.HALF_FLOAT&&(J=r.RG16F),B===r.UNSIGNED_BYTE&&(J=r.RG8),B===r.UNSIGNED_SHORT&&oe&&(J=oe.RG16_EXT),B===r.SHORT&&oe&&(J=oe.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(J=r.RG8UI),B===r.UNSIGNED_SHORT&&(J=r.RG16UI),B===r.UNSIGNED_INT&&(J=r.RG32UI),B===r.BYTE&&(J=r.RG8I),B===r.SHORT&&(J=r.RG16I),B===r.INT&&(J=r.RG32I)),v===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(J=r.RGB8UI),B===r.UNSIGNED_SHORT&&(J=r.RGB16UI),B===r.UNSIGNED_INT&&(J=r.RGB32UI),B===r.BYTE&&(J=r.RGB8I),B===r.SHORT&&(J=r.RGB16I),B===r.INT&&(J=r.RGB32I)),v===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),B===r.UNSIGNED_INT&&(J=r.RGBA32UI),B===r.BYTE&&(J=r.RGBA8I),B===r.SHORT&&(J=r.RGBA16I),B===r.INT&&(J=r.RGBA32I)),v===r.RGB&&(B===r.UNSIGNED_SHORT&&oe&&(J=oe.RGB16_EXT),B===r.SHORT&&oe&&(J=oe.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),v===r.RGBA){const Q=ue?wo:ot.getTransfer($);B===r.FLOAT&&(J=r.RGBA32F),B===r.HALF_FLOAT&&(J=r.RGBA16F),B===r.UNSIGNED_BYTE&&(J=Q===mt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&oe&&(J=oe.RGBA16_EXT),B===r.SHORT&&oe&&(J=oe.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(C,v){let B;return C?v===null||v===1014||v===1020?B=r.DEPTH24_STENCIL8:v===1015?B=r.DEPTH32F_STENCIL8:v===1012&&(B=r.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===1014||v===1020?B=r.DEPTH_COMPONENT24:v===1015?B=r.DEPTH_COMPONENT32F:v===1012&&(B=r.DEPTH_COMPONENT16),B}function A(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function b(C){const v=C.target;v.removeEventListener("dispose",b),M(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(C){const v=C.target;v.removeEventListener("dispose",x),L(v)}function M(C){const v=n.get(C);if(v.__webglInit===void 0)return;const B=C.source,z=h.get(B);if(z){const $=z[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(C),Object.keys(z).length===0&&h.delete(B)}n.remove(C)}function R(C){const v=n.get(C);r.deleteTexture(v.__webglTexture);const B=C.source,z=h.get(B);delete z[v.__cacheKey],a.memory.textures--}function L(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let $=0;$<v.__webglFramebuffer[z].length;$++)r.deleteFramebuffer(v.__webglFramebuffer[z][$]);else r.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)r.deleteFramebuffer(v.__webglFramebuffer[z]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=C.textures;for(let z=0,$=B.length;z<$;z++){const ue=n.get(B[z]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(B[z])}n.remove(C)}let P=0;function V(){P=0}function W(){return P}function U(C){P=C}function X(){const C=P;return C>=i.maxTextures&&ke("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function I(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function K(C,v){const B=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const z=C.image;if(z===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{we(B,C,v);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+v)}function ee(C,v){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){we(B,C,v);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+v)}function D(C,v){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){we(B,C,v);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+v)}function le(C,v){const B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Ne(B,C,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+v)}const ge={1e3:r.REPEAT,1001:r.CLAMP_TO_EDGE,1002:r.MIRRORED_REPEAT},Ye={1003:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,1005:r.NEAREST_MIPMAP_LINEAR,1006:r.LINEAR,1007:r.LINEAR_MIPMAP_NEAREST,1008:r.LINEAR_MIPMAP_LINEAR},He={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function Oe(C,v){if(v.type===1015&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===1006||v.magFilter===1007||v.magFilter===1005||v.magFilter===1008||v.minFilter===1006||v.minFilter===1007||v.minFilter===1005||v.minFilter===1008)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ge[v.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ge[v.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ge[v.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Ye[v.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Ye[v.minFilter]),v.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,He[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===1003||v.minFilter!==1005&&v.minFilter!==1008||v.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Z(C,v){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",b));const z=v.source;let $=h.get(z);$===void 0&&($={},h.set(z,$));const ue=I(v);if(ue!==C.__cacheKey){$[ue]===void 0&&($[ue]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[ue].usedTimes++;const oe=$[C.__cacheKey];oe!==void 0&&($[C.__cacheKey].usedTimes--,oe.usedTimes===0&&R(v)),C.__cacheKey=ue,C.__webglTexture=$[ue].texture}return B}function ae(C,v,B){return Math.floor(Math.floor(C/B)/v)}function ie(C,v,B,z){const ue=C.updateRanges;if(ue.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,B,z,v.data);else{ue.sort((Ae,pe)=>Ae.start-pe.start);let oe=0;for(let Ae=1;Ae<ue.length;Ae++){const pe=ue[oe],he=ue[Ae],ce=pe.start+pe.count,Pe=ae(he.start,v.width,4),Fe=ae(pe.start,v.width,4);he.start<=ce+1&&Pe===Fe&&ae(he.start+he.count-1,v.width,4)===Pe?pe.count=Math.max(pe.count,he.start+he.count-pe.start):(++oe,ue[oe]=he)}ue.length=oe+1;const J=t.getParameter(r.UNPACK_ROW_LENGTH),Q=t.getParameter(r.UNPACK_SKIP_PIXELS),de=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ae=0,pe=ue.length;Ae<pe;Ae++){const he=ue[Ae],ce=Math.floor(he.start/4),Pe=Math.ceil(he.count/4),Fe=ce%v.width,F=Math.floor(ce/v.width),fe=Pe,j=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,Fe,F,fe,j,B,z,v.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,J),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function we(C,v,B){let z=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=r.TEXTURE_3D);const $=Z(C,v),ue=v.source;t.bindTexture(z,C.__webglTexture,r.TEXTURE0+B);const oe=n.get(ue);if(ue.version!==oe.__version||$===!0){if(t.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const j=ot.getPrimaries(ot.workingColorSpace),me=v.colorSpace===""?null:ot.getPrimaries(v.colorSpace),_e=v.colorSpace===""||j===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,i.maxTextureSize);Q=Ut(v,Q);const de=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type);let pe=S(v.internalFormat,de,Ae,v.normalized,v.colorSpace,v.isVideoTexture);Oe(z,v);let he;const ce=v.mipmaps,Pe=v.isVideoTexture!==!0,Fe=oe.__version===void 0||$===!0,F=ue.dataReady,fe=A(v,Q);if(v.isDepthTexture)pe=E(v.format===1027,v.type),Fe&&(Pe?t.texStorage2D(r.TEXTURE_2D,1,pe,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,pe,Q.width,Q.height,0,de,Ae,null));else if(v.isDataTexture)if(ce.length>0){Pe&&Fe&&t.texStorage2D(r.TEXTURE_2D,fe,pe,ce[0].width,ce[0].height);for(let j=0,me=ce.length;j<me;j++)he=ce[j],Pe?F&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,he.width,he.height,de,Ae,he.data):t.texImage2D(r.TEXTURE_2D,j,pe,he.width,he.height,0,de,Ae,he.data);v.generateMipmaps=!1}else Pe?(Fe&&t.texStorage2D(r.TEXTURE_2D,fe,pe,Q.width,Q.height),F&&ie(v,Q,de,Ae)):t.texImage2D(r.TEXTURE_2D,0,pe,Q.width,Q.height,0,de,Ae,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,pe,ce[0].width,ce[0].height,Q.depth);for(let j=0,me=ce.length;j<me;j++)if(he=ce[j],v.format!==1023)if(de!==null)if(Pe){if(F)if(v.layerUpdates.size>0){const _e=Eu(he.width,he.height,v.format,v.type);for(const te of v.layerUpdates){const re=he.data.subarray(te*_e/he.data.BYTES_PER_ELEMENT,(te+1)*_e/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,te,he.width,he.height,1,de,re)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,Q.depth,de,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,pe,he.width,he.height,Q.depth,0,he.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,Q.depth,de,Ae,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,pe,he.width,he.height,Q.depth,0,de,Ae,he.data)}else{Pe&&Fe&&t.texStorage2D(r.TEXTURE_2D,fe,pe,ce[0].width,ce[0].height);for(let j=0,me=ce.length;j<me;j++)he=ce[j],v.format!==1023?de!==null?Pe?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,he.width,he.height,de,he.data):t.compressedTexImage2D(r.TEXTURE_2D,j,pe,he.width,he.height,0,he.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?F&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,he.width,he.height,de,Ae,he.data):t.texImage2D(r.TEXTURE_2D,j,pe,he.width,he.height,0,de,Ae,he.data)}else if(v.isDataArrayTexture)if(Pe){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,pe,Q.width,Q.height,Q.depth),F)if(v.layerUpdates.size>0){const j=Eu(Q.width,Q.height,v.format,v.type);for(const me of v.layerUpdates){const _e=Q.data.subarray(me*j/Q.data.BYTES_PER_ELEMENT,(me+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Q.width,Q.height,1,de,Ae,_e)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Ae,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,pe,Q.width,Q.height,Q.depth,0,de,Ae,Q.data);else if(v.isData3DTexture)Pe?(Fe&&t.texStorage3D(r.TEXTURE_3D,fe,pe,Q.width,Q.height,Q.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Ae,Q.data)):t.texImage3D(r.TEXTURE_3D,0,pe,Q.width,Q.height,Q.depth,0,de,Ae,Q.data);else if(v.isFramebufferTexture){if(Fe)if(Pe)t.texStorage2D(r.TEXTURE_2D,fe,pe,Q.width,Q.height);else{let j=Q.width,me=Q.height;for(let _e=0;_e<fe;_e++)t.texImage2D(r.TEXTURE_2D,_e,pe,j,me,0,de,Ae,null),j>>=1,me>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){const j=r.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),d.add(v),j.onpaint=me=>{const _e=me.changedElements;for(const te of d)_e.includes(te.image)&&(te.needsUpdate=!0)},j.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Q);else{const _e=r.RGBA,te=r.RGBA,re=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,_e,te,re,Q)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ce.length>0){if(Pe&&Fe){const j=Ge(ce[0]);t.texStorage2D(r.TEXTURE_2D,fe,pe,j.width,j.height)}for(let j=0,me=ce.length;j<me;j++)he=ce[j],Pe?F&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,de,Ae,he):t.texImage2D(r.TEXTURE_2D,j,pe,de,Ae,he);v.generateMipmaps=!1}else if(Pe){if(Fe){const j=Ge(Q);t.texStorage2D(r.TEXTURE_2D,fe,pe,j.width,j.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Ae,Q)}else t.texImage2D(r.TEXTURE_2D,0,pe,de,Ae,Q);p(v)&&T(z),oe.__version=ue.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ne(C,v,B){if(v.image.length!==6)return;const z=Z(C,v),$=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+B);const ue=n.get($);if($.version!==ue.__version||z===!0){t.activeTexture(r.TEXTURE0+B);const oe=ot.getPrimaries(ot.workingColorSpace),J=v.colorSpace===""?null:ot.getPrimaries(v.colorSpace),Q=v.colorSpace===""||oe===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const de=v.isCompressedTexture||v.image[0].isCompressedTexture,Ae=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!de&&!Ae?pe[te]=m(v.image[te],!0,i.maxCubemapSize):pe[te]=Ae?v.image[te].image:v.image[te],pe[te]=Ut(v,pe[te]);const he=pe[0],ce=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type),Fe=S(v.internalFormat,ce,Pe,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,fe=ue.__version===void 0||z===!0,j=$.dataReady;let me=A(v,he);Oe(r.TEXTURE_CUBE_MAP,v);let _e;if(de){F&&fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Fe,he.width,he.height);for(let te=0;te<6;te++){_e=pe[te].mipmaps;for(let re=0;re<_e.length;re++){const ne=_e[re];v.format!==1023?ce!==null?F?j&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,ne.width,ne.height,ce,ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,Fe,ne.width,ne.height,0,ne.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,0,0,ne.width,ne.height,ce,Pe,ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re,Fe,ne.width,ne.height,0,ce,Pe,ne.data)}}}else{if(_e=v.mipmaps,F&&fe){_e.length>0&&me++;const te=Ge(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Fe,te.width,te.height)}for(let te=0;te<6;te++)if(Ae){F?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,ce,Pe,pe[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Fe,pe[te].width,pe[te].height,0,ce,Pe,pe[te].data);for(let re=0;re<_e.length;re++){const Ie=_e[re].image[te].image;F?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,Ie.width,Ie.height,ce,Pe,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,Fe,Ie.width,Ie.height,0,ce,Pe,Ie.data)}}else{F?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce,Pe,pe[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Fe,ce,Pe,pe[te]);for(let re=0;re<_e.length;re++){const ne=_e[re];F?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,0,0,ce,Pe,ne.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,re+1,Fe,ce,Pe,ne.image[te])}}}p(v)&&T(r.TEXTURE_CUBE_MAP),ue.__version=$.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ee(C,v,B,z,$,ue){const oe=s.convert(B.format,B.colorSpace),J=s.convert(B.type),Q=S(B.internalFormat,oe,J,B.normalized,B.colorSpace),de=n.get(v),Ae=n.get(B);if(Ae.__renderTarget=v,!de.__hasExternalTextures){const pe=Math.max(1,v.width>>ue),he=Math.max(1,v.height>>ue);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,ue,Q,pe,he,v.depth,0,oe,J,null):t.texImage2D($,ue,Q,pe,he,0,oe,J,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),ht(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,z,$,Ae.__webglTexture,0,We(v)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,z,$,Ae.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(C,v,B){if(r.bindRenderbuffer(r.RENDERBUFFER,C),v.depthBuffer){const z=v.depthTexture,$=z&&z.isDepthTexture?z.type:null,ue=E(v.stencilBuffer,$),oe=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ht(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,We(v),ue,v.width,v.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,We(v),ue,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ue,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,C)}else{const z=v.textures;for(let $=0;$<z.length;$++){const ue=z[$],oe=s.convert(ue.format,ue.colorSpace),J=s.convert(ue.type),Q=S(ue.internalFormat,oe,J,ue.normalized,ue.colorSpace);ht(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,We(v),Q,v.width,v.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,We(v),Q,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Q,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(C,v,B){const z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",b)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,v.depthTexture);const de=s.convert(v.depthTexture.format),Ae=s.convert(v.depthTexture.type);let pe;v.depthTexture.format===1026?pe=r.DEPTH_COMPONENT24:v.depthTexture.format===1027&&(pe=r.DEPTH24_STENCIL8);for(let he=0;he<6;he++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,pe,v.width,v.height,0,de,Ae,null)}}else K(v.depthTexture,0);const ue=$.__webglTexture,oe=We(v),J=z?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,Q=v.depthTexture.format===1027?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===1026)ht(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,ue,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,ue,0);else if(v.depthTexture.format===1027)ht(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,ue,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(C){const v=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const z=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",$)};z.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=z}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let z=0;z<6;z++)ye(v.__webglFramebuffer[z],C,z);else{const z=C.texture.mipmaps;z&&z.length>0?ye(v.__webglFramebuffer[0],C,0):ye(v.__webglFramebuffer,C,0)}else if(B){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=r.createRenderbuffer(),rt(v.__webglDepthbuffer[z],C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=v.__webglDepthbuffer[z];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ue)}}else{const z=C.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),rt(v.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ue)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(C,v,B){const z=n.get(C);v!==void 0&&Ee(z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Be(C)}function ze(C){const v=C.texture,B=n.get(C),z=n.get(v);C.addEventListener("dispose",x);const $=C.textures,ue=C.isWebGLCubeRenderTarget===!0,oe=$.length>1;if(oe||(z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture()),z.__version=v.version,a.memory.textures++),ue){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let Q=0;Q<v.mipmaps.length;Q++)B.__webglFramebuffer[J][Q]=r.createFramebuffer()}else B.__webglFramebuffer[J]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[J]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(oe)for(let J=0,Q=$.length;J<Q;J++){const de=n.get($[J]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&ht(C)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const Q=$[J];B.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[J]);const de=s.convert(Q.format,Q.colorSpace),Ae=s.convert(Q.type),pe=S(Q.internalFormat,de,Ae,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),he=We(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,he,pe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,B.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ee(B.__webglFramebuffer[J][Q],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else Ee(B.__webglFramebuffer[J],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(v)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let J=0,Q=$.length;J<Q;J++){const de=$[J],Ae=n.get(de);let pe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ae.__webglTexture),Oe(pe,de),Ee(B.__webglFramebuffer,C,de,r.COLOR_ATTACHMENT0+J,pe,0),p(de)&&T(pe)}t.unbindTexture()}else{let J=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(J,z.__webglTexture),Oe(J,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ee(B.__webglFramebuffer[Q],C,v,r.COLOR_ATTACHMENT0,J,Q);else Ee(B.__webglFramebuffer,C,v,r.COLOR_ATTACHMENT0,J,0);p(v)&&T(J),t.unbindTexture()}C.depthBuffer&&Be(C)}function q(C){const v=C.textures;for(let B=0,z=v.length;B<z;B++){const $=v[B];if(p($)){const ue=w(C),oe=n.get($).__webglTexture;t.bindTexture(ue,oe),T(ue),t.unbindTexture()}}}const ut=[],_t=[];function Et(C){if(C.samples>0){if(ht(C)===!1){const v=C.textures,B=C.width,z=C.height;let $=r.COLOR_BUFFER_BIT;const ue=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=n.get(C),J=v.length>1;if(J)for(let de=0;de<v.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Q=C.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let de=0;de<v.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[de]);const Ae=n.get(v[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,B,z,0,0,B,z,$,r.NEAREST),l===!0&&(ut.length=0,_t.length=0,ut.push(r.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ut.push(ue),_t.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let de=0;de<v.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,oe.__webglColorRenderbuffer[de]);const Ae=n.get(v[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,Ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function We(C){return Math.min(i.maxSamples,C.samples)}function ht(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(C){const v=a.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function Ut(C,v){const B=C.colorSpace,z=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Ao&&B!==""&&(ot.getTransfer(B)===mt?(z!==1023||$!==1009)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",B)),v}function Ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.getTextureUnits=W,this.setTextureUnits=U,this.setTexture2D=K,this.setTexture2DArray=ee,this.setTexture3D=D,this.setTextureCube=le,this.rebindTextures=Ve,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _x(r,e){function t(n,i=""){let s;const a=ot.getTransfer(i);if(n===1009)return r.UNSIGNED_BYTE;if(n===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===1012)return r.UNSIGNED_SHORT;if(n===1013)return r.INT;if(n===1014)return r.UNSIGNED_INT;if(n===1015)return r.FLOAT;if(n===1016)return r.HALF_FLOAT;if(n===1021)return r.ALPHA;if(n===1022)return r.RGB;if(n===1023)return r.RGBA;if(n===1026)return r.DEPTH_COMPONENT;if(n===1027)return r.DEPTH_STENCIL;if(n===1028)return r.RED;if(n===1029)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===1031)return r.RG_INTEGER;if(n===1033)return r.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ii({vertexShader:gx,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sx extends Yr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const g=typeof XRWebGLBinding<"u",m=new vx,p={},T=t.getContextAttributes();let w=null,S=null;const E=[],A=[],b=new je;let x=null;const M=new Yn;M.viewport=new Ft;const R=new Yn;R.viewport=new Ft;const L=[M,R],P=new Cp;let V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=E[Z];return ae===void 0&&(ae=new el,E[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=E[Z];return ae===void 0&&(ae=new el,E[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=E[Z];return ae===void 0&&(ae=new el,E[Z]=ae),ae.getHandSpace()};function U(Z){const ae=A.indexOf(Z.inputSource);if(ae===-1)return;const ie=E[ae];ie!==void 0&&(ie.update(Z.inputSource,Z.frame,c||a),ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",I);for(let Z=0;Z<E.length;Z++){const ae=A[Z];ae!==null&&(A[Z]=null,E[Z].disconnect(ae))}V=null,W=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(w),h=null,f=null,d=null,i=null,S=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",X),i.addEventListener("inputsourceschange",I),T.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,we=null,Ne=null;T.depth&&(Ne=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=T.stencil?1027:1026,we=T.stencil?1020:1014);const Ee={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ee),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Di(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new Ps(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Di(h.framebufferWidth,h.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(Z){for(let ae=0;ae<Z.removed.length;ae++){const ie=Z.removed[ae],we=A.indexOf(ie);we>=0&&(A[we]=null,E[we].disconnect(ie))}for(let ae=0;ae<Z.added.length;ae++){const ie=Z.added[ae];let we=A.indexOf(ie);if(we===-1){for(let Ee=0;Ee<E.length;Ee++)if(Ee>=A.length){A.push(ie),we=Ee;break}else if(A[Ee]===null){A[Ee]=ie,we=Ee;break}if(we===-1)break}const Ne=E[we];Ne&&Ne.connect(ie)}}const K=new G,ee=new G;function D(Z,ae,ie){K.setFromMatrixPosition(ae.matrixWorld),ee.setFromMatrixPosition(ie.matrixWorld);const we=K.distanceTo(ee),Ne=ae.projectionMatrix.elements,Ee=ie.projectionMatrix.elements,rt=Ne[14]/(Ne[10]-1),ye=Ne[14]/(Ne[10]+1),Be=(Ne[9]+1)/Ne[5],Ve=(Ne[9]-1)/Ne[5],ze=(Ne[8]-1)/Ne[0],q=(Ee[8]+1)/Ee[0],ut=rt*ze,_t=rt*q,Et=we/(-ze+q),We=Et*-ze;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(We),Z.translateZ(Et),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ne[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const ht=rt+Et,N=ye+Et,Ut=ut-We,Ge=_t+(we-We),C=Be*ye/N*ht,v=Ve*ye/N*ht;Z.projectionMatrix.makePerspective(Ut,Ge,C,v,ht,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ae=Z.near,ie=Z.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),P.near=R.near=M.near=ae,P.far=R.far=M.far=ie,(V!==P.near||W!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),V=P.near,W=P.far),P.layers.mask=Z.layers.mask|6,M.layers.mask=P.layers.mask&-5,R.layers.mask=P.layers.mask&-3;const we=Z.parent,Ne=P.cameras;le(P,we);for(let Ee=0;Ee<Ne.length;Ee++)le(Ne[Ee],we);Ne.length===2?D(P,M,R):P.projectionMatrix.copy(M.projectionMatrix),ge(Z,P,we)};function ge(Z,ae,ie){ie===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ma*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(Z){return p[Z]};let Ye=null;function He(Z,ae){if(u=ae.getViewerPose(c||a),_=ae,u!==null){const ie=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let we=!1;ie.length!==P.cameras.length&&(P.cameras.length=0,we=!0);for(let ye=0;ye<ie.length;ye++){const Be=ie[ye];let Ve=null;if(h!==null)Ve=h.getViewport(Be);else{const q=d.getViewSubImage(f,Be);Ve=q.viewport,ye===0&&(e.setRenderTargetTextures(S,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(S))}let ze=L[ye];ze===void 0&&(ze=new Yn,ze.layers.enable(ye),ze.viewport=new Ft,L[ye]=ze),ze.matrix.fromArray(Be.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Be.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),ye===0&&(P.matrix.copy(ze.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),we===!0&&P.cameras.push(ze)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const ye=d.getDepthInformation(ie[0]);ye&&ye.isValid&&ye.texture&&m.init(ye,i.renderState)}if(Ne&&Ne.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let ye=0;ye<ie.length;ye++){const Be=ie[ye].camera;if(Be){let Ve=p[Be];Ve||(Ve=new Xf,p[Be]=Ve);const ze=d.getCameraImage(Be);Ve.sourceTexture=ze}}}}for(let ie=0;ie<E.length;ie++){const we=A[ie],Ne=E[ie];we!==null&&Ne!==void 0&&Ne.update(we,ae,c||a)}Ye&&Ye(Z,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const Oe=new $f;Oe.setAnimationLoop(He),this.setAnimationLoop=function(Z){Ye=Z},this.dispose=function(){}}}const Mx=new Pt,nh=new qe;nh.set(-1,0,0,0,1,0,0,0,1);function yx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,w,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),w=T.envMap,S=T.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(nh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tx(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const A=E.program;n.uniformBlockBinding(S,A)}function c(S,E){let A=i[S.id];A===void 0&&(m(S),A=u(S),i[S.id]=A,S.addEventListener("dispose",T));const b=E.program;n.updateUBOMapping(S,b);const x=e.render.frame;s[S.id]!==x&&(f(S),s[S.id]=x)}function u(S){const E=d();S.__bindingPointIndex=E;const A=r.createBuffer(),b=S.__size,x=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,b,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,A),A}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const E=i[S.id],A=S.uniforms,b=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let x=0,M=A.length;x<M;x++){const R=A[x];if(Array.isArray(R))for(let L=0,P=R.length;L<P;L++)h(R[L],x,L,b);else h(R,x,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(S,E,A,b){if(g(S,E,A,b)===!0){const x=S.__offset,M=S.value;if(Array.isArray(M)){let R=0;for(let L=0;L<M.length;L++){const P=M[L],V=p(P);_(P,S.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(M,S.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,S.__data)}}function _(S,E,A){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,A)}function g(S,E,A,b){const x=S.value,M=E+"_"+A;if(b[M]===void 0)return typeof x=="number"||typeof x=="boolean"?b[M]=x:ArrayBuffer.isView(x)?b[M]=x.slice():b[M]=x.clone(),!0;{const R=b[M];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return b[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(S){const E=S.uniforms;let A=0;const b=16;for(let M=0,R=E.length;M<R;M++){const L=Array.isArray(E[M])?E[M]:[E[M]];for(let P=0,V=L.length;P<V;P++){const W=L[P],U=Array.isArray(W.value)?W.value:[W.value];for(let X=0,I=U.length;X<I;X++){const K=U[X],ee=p(K),D=A%b,le=D%ee.boundary,ge=D+le;A+=le,ge!==0&&b-ge<ee.storage&&(A+=b-ge),W.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=ee.storage}}}const x=A%b;return x>0&&(A+=b-x),S.__size=A,S.__cache={},this}function p(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",S),E}function T(S){const E=S.target;E.removeEventListener("dispose",T);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function w(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:w}}const Ex=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function bx(){return Ei===null&&(Ei=new fp(Ex,16,16,1030,1016),Ei.name="DFG_LUT",Ei.minFilter=1006,Ei.magFilter=1006,Ei.wrapS=1001,Ei.wrapT=1001,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class Ax{constructor(e={}){const{canvas:t=wd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=1009}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=h,m=new Set([1033,1031,1029]),p=new Set([1009,1014,1012,1020,1017,1018]),T=new Uint32Array(4),w=new Int32Array(4),S=new G;let E=null,A=null;const b=[],x=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,P=null,V=null,W=null,U=null;this._outputColorSpace=In;let X=0,I=0,K=null,ee=-1,D=null;const le=new Ft,ge=new Ft;let Ye=null;const He=new $e(0);let Oe=0,Z=t.width,ae=t.height,ie=1,we=null,Ne=null;const Ee=new Ft(0,0,Z,ae),rt=new Ft(0,0,Z,ae);let ye=!1;const Be=new gc;let Ve=!1,ze=!1;const q=new Pt,ut=new G,_t=new Ft,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ht(){return K===null?ie:1}let N=n;function Ut(y,O){return t.getContext(y,O)}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r185"),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),N===null){const O="webgl2";if(N=Ut(O,y),N===null)throw Ut(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw ct("WebGLRenderer: "+y.message),y}let Ge,C,v,B,z,$,ue,oe,J,Q,de,Ae,pe,he,ce,Pe,Fe,F,fe,j,me,_e,te;function re(){Ge=new bg(N),Ge.init(),me=new _x(N,Ge),C=new gg(N,Ge,e,me),v=new px(N,Ge),C.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),V=N.createFramebuffer(),W=N.createFramebuffer(),U=N.createFramebuffer(),B=new Rg(N),z=new ex,$=new mx(N,Ge,v,z,C,me,B),ue=new Eg(R),oe=new Lp(N),_e=new mg(N,oe),J=new Ag(N,oe,B,_e),Q=new Pg(N,J,oe,_e,B),F=new Cg(N,C,$),ce=new xg(z),de=new j0(R,ue,Ge,C,_e,ce),Ae=new yx(R,z),pe=new nx,he=new lx(Ge),Fe=new pg(R,ue,v,Q,_,l),Pe=new dx(R,Q,C),te=new Tx(N,B,C,v),fe=new _g(N,Ge,B),j=new wg(N,Ge,B),B.programs=de.programs,R.capabilities=C,R.extensions=Ge,R.properties=z,R.renderLists=pe,R.shadowMap=Pe,R.state=v,R.info=B}re(),g!==1009&&(M=new Lg(g,t.width,t.height,o,i,s));const ne=new Sx(R,N);this.xr=ne,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Ge.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ge.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(Z,ae,!1))},this.getSize=function(y){return y.set(Z,ae)},this.setSize=function(y,O,Y=!0){if(ne.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,ae=O,t.width=Math.floor(y*ie),t.height=Math.floor(O*ie),Y===!0&&(t.style.width=y+"px",t.style.height=O+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Z*ie,ae*ie).floor()},this.setDrawingBufferSize=function(y,O,Y){Z=y,ae=O,ie=Y,t.width=Math.floor(y*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(g===1009){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(le)},this.getViewport=function(y){return y.copy(Ee)},this.setViewport=function(y,O,Y,k){y.isVector4?Ee.set(y.x,y.y,y.z,y.w):Ee.set(y,O,Y,k),v.viewport(le.copy(Ee).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy(rt)},this.setScissor=function(y,O,Y,k){y.isVector4?rt.set(y.x,y.y,y.z,y.w):rt.set(y,O,Y,k),v.scissor(ge.copy(rt).multiplyScalar(ie).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(y){v.setScissorTest(ye=y)},this.setOpaqueSort=function(y){we=y},this.setTransparentSort=function(y){Ne=y},this.getClearColor=function(y){return y.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,Y=!0){let k=0;if(y){let H=!1;if(K!==null){const xe=K.texture.format;H=m.has(xe)}if(H){const xe=K.texture.type,ve=p.has(xe),Me=Fe.getClearColor(),Ce=Fe.getClearAlpha(),De=Me.r,Ke=Me.g,Je=Me.b;ve?(T[0]=De,T[1]=Ke,T[2]=Je,T[3]=Ce,N.clearBufferuiv(N.COLOR,0,T)):(w[0]=De,w[1]=Ke,w[2]=Je,w[3]=Ce,N.clearBufferiv(N.COLOR,0,w))}else k|=N.COLOR_BUFFER_BIT}O&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),P=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Fe.dispose(),pe.dispose(),he.dispose(),z.dispose(),ue.dispose(),Q.dispose(),_e.dispose(),te.dispose(),de.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Rt),ne.removeEventListener("sessionend",vt),at.stop()};function Ie(y){y.preventDefault(),eu("WebGLRenderer: Context Lost."),L=!0}function se(){eu("WebGLRenderer: Context Restored."),L=!1;const y=B.autoReset,O=Pe.enabled,Y=Pe.autoUpdate,k=Pe.needsUpdate,H=Pe.type;re(),B.autoReset=y,Pe.enabled=O,Pe.autoUpdate=Y,Pe.needsUpdate=k,Pe.type=H}function Ue(y){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Re(y){const O=y.target;O.removeEventListener("dispose",Re),Xe(O)}function Xe(y){Wt(y),z.remove(y)}function Wt(y){const O=z.get(y).programs;O!==void 0&&(O.forEach(function(Y){de.releaseProgram(Y)}),y.isShaderMaterial&&de.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,Y,k,H,xe){O===null&&(O=Et);const ve=H.isMesh&&H.matrixWorld.determinantAffine()<0,Me=tn(y,O,Y,k,H);v.setMaterial(k,ve);let Ce=Y.index,De=1;if(k.wireframe===!0){if(Ce=J.getWireframeAttribute(Y),Ce===void 0)return;De=2}const Ke=Y.drawRange,Je=Y.attributes.position;let Le=Ke.start*De,gt=(Ke.start+Ke.count)*De;xe!==null&&(Le=Math.max(Le,xe.start*De),gt=Math.min(gt,(xe.start+xe.count)*De)),Ce!==null?(Le=Math.max(Le,0),gt=Math.min(gt,Ce.count)):Je!=null&&(Le=Math.max(Le,0),gt=Math.min(gt,Je.count));const kt=gt-Le;if(kt<0||kt===1/0)return;_e.setup(H,k,Me,Y,Ce);let Ot,St=fe;if(Ce!==null&&(Ot=oe.get(Ce),St=j,St.setIndex(Ot)),H.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*ht()),St.setMode(N.LINES)):St.setMode(N.TRIANGLES);else if(H.isLine){let hn=k.linewidth;hn===void 0&&(hn=1),v.setLineWidth(hn*ht()),H.isLineSegments?St.setMode(N.LINES):H.isLineLoop?St.setMode(N.LINE_LOOP):St.setMode(N.LINE_STRIP)}else H.isPoints?St.setMode(N.POINTS):H.isSprite&&St.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))St.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const hn=H._multiDrawStarts,Te=H._multiDrawCounts,zn=H._multiDrawCount,ft=Ce?oe.get(Ce).bytesPerElement:1,ii=z.get(k).currentProgram.getUniforms();for(let yi=0;yi<zn;yi++)ii.setValue(N,"_gl_DrawID",yi),St.render(hn[yi]/ft,Te[yi])}else if(H.isInstancedMesh)St.renderInstances(Le,kt,H.count);else if(Y.isInstancedBufferGeometry){const hn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Te=Math.min(Y.instanceCount,hn);St.renderInstances(Le,kt,Te)}else St.render(Le,kt)};function et(y,O,Y){y.transparent===!0&&y.side===2&&y.forceSinglePass===!1?(y.side=1,y.needsUpdate=!0,Nt(y,O,Y),y.side=0,y.needsUpdate=!0,Nt(y,O,Y),y.side=2):Nt(y,O,Y)}this.compile=function(y,O,Y=null){Y===null&&(Y=y),A=he.get(Y),A.init(O),x.push(A),Y.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),y!==Y&&y.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),A.setupLights();const k=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xe=H.material;if(xe)if(Array.isArray(xe))for(let ve=0;ve<xe.length;ve++){const Me=xe[ve];et(Me,Y,H),k.add(Me)}else et(xe,Y,H),k.add(xe)}),A=x.pop(),k},this.compileAsync=function(y,O,Y=null){const k=this.compile(y,O,Y);return new Promise(H=>{function xe(){if(k.forEach(function(ve){z.get(ve).currentProgram.isReady()&&k.delete(ve)}),k.size===0){H(y);return}setTimeout(xe,10)}Ge.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let wt=null;function en(y){wt&&wt(y)}function Rt(){at.stop()}function vt(){at.start()}const at=new $f;at.setAnimationLoop(en),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(y){wt=y,ne.setAnimationLoop(y),y===null?at.stop():at.start()},ne.addEventListener("sessionstart",Rt),ne.addEventListener("sessionend",vt),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P!==null&&P.renderStart(y,O);const Y=ne.enabled===!0&&ne.isPresenting===!0,k=M!==null&&(K===null||Y)&&M.begin(R,K);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(O),O=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,O,K),A=he.get(y,x.length),A.init(O),A.state.textureUnits=$.getTextureUnits(),x.push(A),q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Be.setFromProjectionMatrix(q,2e3,O.reversedDepth),ze=this.localClippingEnabled,Ve=ce.init(this.clippingPlanes,ze),E=pe.get(y,b.length),E.init(),b.push(E),ne.enabled===!0&&ne.isPresenting===!0){const ve=R.xr.getDepthSensingMesh();ve!==null&&Mn(ve,O,-1/0,R.sortObjects)}Mn(y,O,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(we,Ne,O.reversedDepth),We=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,We&&Fe.addToRenderList(E,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&ce.beginShadows();const H=A.state.shadowsArray;if(Pe.render(H,y,O),Ve===!0&&ce.endShadows(),(k&&M.hasRenderPass())===!1){const ve=E.opaque,Me=E.transmissive;if(A.setupLights(),O.isArrayCamera){const Ce=O.cameras;if(Me.length>0)for(let De=0,Ke=Ce.length;De<Ke;De++){const Je=Ce[De];fn(ve,Me,y,Je)}We&&Fe.render(y);for(let De=0,Ke=Ce.length;De<Ke;De++){const Je=Ce[De];bt(E,y,Je,Je.viewport)}}else Me.length>0&&fn(ve,Me,y,O),We&&Fe.render(y),bt(E,y,O)}K!==null&&I===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),k&&M.end(R),y.isScene===!0&&y.onAfterRender(R,y,O),_e.resetDefaultState(),ee=-1,D=null,x.pop(),x.length>0?(A=x[x.length-1],$.setTextureUnits(A.state.textureUnits),Ve===!0&&ce.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?E=b[b.length-1]:E=null,P!==null&&P.renderEnd()};function Mn(y,O,Y,k){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLightProbeGrid)A.pushLightProbeGrid(y);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Be.intersectsSprite(y)){k&&_t.setFromMatrixPosition(y.matrixWorld).applyMatrix4(q);const ve=Q.update(y),Me=y.material;Me.visible&&E.push(y,ve,Me,Y,_t.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Be.intersectsObject(y))){const ve=Q.update(y),Me=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),_t.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),_t.copy(ve.boundingSphere.center)),_t.applyMatrix4(y.matrixWorld).applyMatrix4(q)),Array.isArray(Me)){const Ce=ve.groups;for(let De=0,Ke=Ce.length;De<Ke;De++){const Je=Ce[De],Le=Me[Je.materialIndex];Le&&Le.visible&&E.push(y,ve,Le,Y,_t.z,Je)}}else Me.visible&&E.push(y,ve,Me,Y,_t.z,null)}}const xe=y.children;for(let ve=0,Me=xe.length;ve<Me;ve++)Mn(xe[ve],O,Y,k)}function bt(y,O,Y,k){const{opaque:H,transmissive:xe,transparent:ve}=y;A.setupLightsView(Y),Ve===!0&&ce.setGlobalState(R.clippingPlanes,Y),k&&v.viewport(le.copy(k)),H.length>0&&yn(H,O,Y),xe.length>0&&yn(xe,O,Y),ve.length>0&&yn(ve,O,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function fn(y,O,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){const Le=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new Di(1,1,{generateMipmaps:!0,type:Le?1016:1009,minFilter:1008,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const xe=A.state.transmissionRenderTarget[k.id],ve=k.viewport||le;xe.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);const Me=R.getRenderTarget(),Ce=R.getActiveCubeFace(),De=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(He),Oe=R.getClearAlpha(),Oe<1&&R.setClearColor(16777215,.5),R.clear(),We&&Fe.render(Y);const Ke=R.toneMapping;R.toneMapping=0;const Je=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),Ve===!0&&ce.setGlobalState(R.clippingPlanes,k),yn(y,Y,k),$.updateMultisampleRenderTarget(xe),$.updateRenderTargetMipmap(xe),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let gt=0,kt=O.length;gt<kt;gt++){const Ot=O[gt],{object:St,geometry:hn,material:Te,group:zn}=Ot;if(Te.side===2&&St.layers.test(k.layers)){const ft=Te.side;Te.side=1,Te.needsUpdate=!0,Xt(St,Y,k,hn,Te,zn),Te.side=ft,Te.needsUpdate=!0,Le=!0}}Le===!0&&($.updateMultisampleRenderTarget(xe),$.updateRenderTargetMipmap(xe))}R.setRenderTarget(Me,Ce,De),R.setClearColor(He,Oe),Je!==void 0&&(k.viewport=Je),R.toneMapping=Ke}function yn(y,O,Y){const k=O.isScene===!0?O.overrideMaterial:null;for(let H=0,xe=y.length;H<xe;H++){const ve=y[H],{object:Me,geometry:Ce,group:De}=ve;let Ke=ve.material;Ke.allowOverride===!0&&k!==null&&(Ke=k),Me.layers.test(Y.layers)&&Xt(Me,O,Y,Ce,Ke,De)}}function Xt(y,O,Y,k,H,xe){y.onBeforeRender(R,O,Y,k,H,xe),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(R,O,Y,k,y,xe),H.transparent===!0&&H.side===2&&H.forceSinglePass===!1?(H.side=1,H.needsUpdate=!0,R.renderBufferDirect(Y,O,k,H,y,xe),H.side=0,H.needsUpdate=!0,R.renderBufferDirect(Y,O,k,H,y,xe),H.side=2):R.renderBufferDirect(Y,O,k,H,y,xe),y.onAfterRender(R,O,Y,k,H,xe)}function Nt(y,O,Y){O.isScene!==!0&&(O=Et);const k=z.get(y),H=A.state.lights,xe=A.state.shadowsArray,ve=H.state.version,Me=de.getParameters(y,H.state,xe,O,Y,A.state.lightProbeGridArray),Ce=de.getProgramCacheKey(Me);let De=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;const Ke=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=ue.get(y.envMap||k.environment,Ke),k.envMapRotation=k.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",Re),De=new Map,k.programs=De);let Je=De.get(Ce);if(Je!==void 0){if(k.currentProgram===Je&&k.lightsStateVersion===ve)return Mi(y,Me),Je}else Me.uniforms=de.getUniforms(y),P!==null&&y.isNodeMaterial&&P.build(y,Y,Me),y.onBeforeCompile(Me,R),Je=de.acquireProgram(Me,Ce),De.set(Ce,Je),k.uniforms=Me.uniforms;const Le=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=ce.uniform),Mi(y,Me),k.needsLights=ni(y),k.lightsStateVersion=ve,k.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=A.state.lightProbeGridArray.length>0,k.currentProgram=Je,k.uniformsList=null,Je}function $t(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=_o.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Mi(y,O){const Y=z.get(y);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function $r(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let Y=0,k=y.length;Y<k;Y++){const H=y[Y];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function tn(y,O,Y,k,H){O.isScene!==!0&&(O=Et),$.resetTextureUnits();const xe=O.fog,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,Me=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ot.workingColorSpace,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,De=ue.get(k.envMap||ve,Ce),Ke=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Je=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Le=!!Y.morphAttributes.position,gt=!!Y.morphAttributes.normal,kt=!!Y.morphAttributes.color;let Ot=0;k.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ot=R.toneMapping);const St=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,hn=St!==void 0?St.length:0,Te=z.get(k),zn=A.state.lights;if(Ve===!0&&(ze===!0||y!==D)){const At=y===D&&k.id===ee;ce.setState(k,y,At)}let ft=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==zn.state.version||Te.outputColorSpace!==Me||H.isBatchedMesh&&Te.batching===!1||!H.isBatchedMesh&&Te.batching===!0||H.isBatchedMesh&&Te.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Te.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Te.instancing===!1||!H.isInstancedMesh&&Te.instancing===!0||H.isSkinnedMesh&&Te.skinning===!1||!H.isSkinnedMesh&&Te.skinning===!0||H.isInstancedMesh&&Te.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Te.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Te.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Te.instancingMorph===!1&&H.morphTexture!==null||Te.envMap!==De||k.fog===!0&&Te.fog!==xe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ce.numPlanes||Te.numIntersection!==ce.numIntersection)||Te.vertexAlphas!==Ke||Te.vertexTangents!==Je||Te.morphTargets!==Le||Te.morphNormals!==gt||Te.morphColors!==kt||Te.toneMapping!==Ot||Te.morphTargetsCount!==hn||!!Te.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Te.__version=k.version);let ii=Te.currentProgram;ft===!0&&(ii=Nt(k,O,H),P&&k.isNodeMaterial&&P.onUpdateProgram(k,ii,Te));let yi=!1,Zi=!1,Zr=!1;const Mt=ii.getUniforms(),zt=Te.uniforms;if(v.useProgram(ii.program)&&(yi=!0,Zi=!0,Zr=!0),k.id!==ee&&(ee=k.id,Zi=!0),Te.needsLights){const At=$r(A.state.lightProbeGridArray,H);Te.lightProbeGrid!==At&&(Te.lightProbeGrid=At,Zi=!0)}if(yi||D!==y){v.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Mt.setValue(N,"projectionMatrix",y.projectionMatrix),Mt.setValue(N,"viewMatrix",y.matrixWorldInverse);const Qi=Mt.map.cameraPosition;Qi!==void 0&&Qi.setValue(N,ut.setFromMatrixPosition(y.matrixWorld)),C.logarithmicDepthBuffer&&Mt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Mt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),D!==y&&(D=y,Zi=!0,Zr=!0)}if(Te.needsLights&&(zn.state.directionalShadowMap.length>0&&Mt.setValue(N,"directionalShadowMap",zn.state.directionalShadowMap,$),zn.state.spotShadowMap.length>0&&Mt.setValue(N,"spotShadowMap",zn.state.spotShadowMap,$),zn.state.pointShadowMap.length>0&&Mt.setValue(N,"pointShadowMap",zn.state.pointShadowMap,$)),H.isSkinnedMesh){Mt.setOptional(N,H,"bindMatrix"),Mt.setOptional(N,H,"bindMatrixInverse");const At=H.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),Mt.setValue(N,"boneTexture",At.boneTexture,$))}H.isBatchedMesh&&(Mt.setOptional(N,H,"batchingTexture"),Mt.setValue(N,"batchingTexture",H._matricesTexture,$),Mt.setOptional(N,H,"batchingIdTexture"),Mt.setValue(N,"batchingIdTexture",H._indirectTexture,$),Mt.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Mt.setValue(N,"batchingColorTexture",H._colorsTexture,$));const Ji=Y.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&F.update(H,Y,ii),(Zi||Te.receiveShadow!==H.receiveShadow)&&(Te.receiveShadow=H.receiveShadow,Mt.setValue(N,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(zt.envMapIntensity.value=O.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=bx()),Zi){if(Mt.setValue(N,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&Gt(zt,Zr),xe&&k.fog===!0&&Ae.refreshFogUniforms(zt,xe),Ae.refreshMaterialUniforms(zt,k,ie,ae,A.state.transmissionRenderTarget[y.id]),Te.needsLights&&Te.lightProbeGrid){const At=Te.lightProbeGrid;zt.probesSH.value=At.texture,zt.probesMin.value.copy(At.boundingBox.min),zt.probesMax.value.copy(At.boundingBox.max),zt.probesResolution.value.copy(At.resolution)}_o.upload(N,$t(Te),zt,$)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(_o.upload(N,$t(Te),zt,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Mt.setValue(N,"center",H.center),Mt.setValue(N,"modelViewMatrix",H.modelViewMatrix),Mt.setValue(N,"normalMatrix",H.normalMatrix),Mt.setValue(N,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const At=k.uniformsGroups;for(let Qi=0,Jr=At.length;Qi<Jr;Qi++){const Jc=At[Qi];te.update(Jc,ii),te.bind(Jc,ii)}}return ii}function Gt(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function ni(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(y,O,Y){const k=z.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),z.get(y.texture).__webglTexture=O,z.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const Y=z.get(y);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,Y=0){K=y,X=O,I=Y;let k=null,H=!1,xe=!1;if(y){const Me=z.get(y);if(Me.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,Me.__webglFramebuffer),le.copy(y.viewport),ge.copy(y.scissor),Ye=y.scissorTest,v.viewport(le),v.scissor(ge),v.setScissorTest(Ye),ee=-1;return}else if(Me.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(Me.__hasExternalTextures)$.rebindTextures(y,z.get(y.texture).__webglTexture,z.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ke=y.depthTexture;if(Me.__boundDepthTexture!==Ke){if(Ke!==null&&z.has(Ke)&&(y.width!==Ke.image.width||y.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}const Ce=y.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);const De=z.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[O])?k=De[O][Y]:k=De[O],H=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?k=z.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?k=De[Y]:k=De,le.copy(y.viewport),ge.copy(y.scissor),Ye=y.scissorTest}else le.copy(Ee).multiplyScalar(ie).floor(),ge.copy(rt).multiplyScalar(ie).floor(),Ye=ye;if(Y!==0&&(k=V),v.bindFramebuffer(N.FRAMEBUFFER,k)&&v.drawBuffers(y,k),v.viewport(le),v.scissor(ge),v.setScissorTest(Ye),H){const Me=z.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,Y)}else if(xe){const Me=O;for(let Ce=0;Ce<y.textures.length;Ce++){const De=z.get(y.textures[Ce]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ce,De.__webglTexture,Y,Me)}}else if(y!==null&&Y!==0){const Me=z.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Me.__webglTexture,Y)}ee=-1},this.readRenderTargetPixels=function(y,O,Y,k,H,xe,ve,Me=0){if(!(y&&y.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce){v.bindFramebuffer(N.FRAMEBUFFER,Ce);try{const De=y.textures[Me],Ke=De.format,Je=De.type;if(y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me),!C.textureFormatReadable(Ke)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Je)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-k&&Y>=0&&Y<=y.height-H&&N.readPixels(O,Y,k,H,me.convert(Ke),me.convert(Je),xe)}finally{const De=K!==null?z.get(K).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(y,O,Y,k,H,xe,ve,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce)if(O>=0&&O<=y.width-k&&Y>=0&&Y<=y.height-H){v.bindFramebuffer(N.FRAMEBUFFER,Ce);const De=y.textures[Me],Ke=De.format,Je=De.type;if(y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me),!C.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Le),N.bufferData(N.PIXEL_PACK_BUFFER,xe.byteLength,N.STREAM_READ),N.readPixels(O,Y,k,H,me.convert(Ke),me.convert(Je),0);const gt=K!==null?z.get(K).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,gt);const kt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Rd(N,kt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Le),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xe),N.deleteBuffer(Le),N.deleteSync(kt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,Y=0){const k=Math.pow(2,-Y),H=Math.floor(y.image.width*k),xe=Math.floor(y.image.height*k),ve=O!==null?O.x:0,Me=O!==null?O.y:0;$.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,ve,Me,H,xe),v.unbindTexture()},this.copyTextureToTexture=function(y,O,Y=null,k=null,H=0,xe=0){let ve,Me,Ce,De,Ke,Je,Le,gt,kt;const Ot=y.isCompressedTexture?y.mipmaps[xe]:y.image;if(Y!==null)ve=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,De=Y.min.x,Ke=Y.min.y,Je=Y.isBox3?Y.min.z:0;else{const zt=Math.pow(2,-H);ve=Math.floor(Ot.width*zt),Me=Math.floor(Ot.height*zt),y.isDataArrayTexture?Ce=Ot.depth:y.isData3DTexture?Ce=Math.floor(Ot.depth*zt):Ce=1,De=0,Ke=0,Je=0}k!==null?(Le=k.x,gt=k.y,kt=k.z):(Le=0,gt=0,kt=0);const St=me.convert(O.format),hn=me.convert(O.type);let Te;O.isData3DTexture?($.setTexture3D(O,0),Te=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?($.setTexture2DArray(O,0),Te=N.TEXTURE_2D_ARRAY):($.setTexture2D(O,0),Te=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const zn=v.getParameter(N.UNPACK_ROW_LENGTH),ft=v.getParameter(N.UNPACK_IMAGE_HEIGHT),ii=v.getParameter(N.UNPACK_SKIP_PIXELS),yi=v.getParameter(N.UNPACK_SKIP_ROWS),Zi=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,Ot.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ot.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,De),v.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Je);const Zr=y.isDataArrayTexture||y.isData3DTexture,Mt=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const zt=z.get(y),Ji=z.get(O),At=z.get(zt.__renderTarget),Qi=z.get(Ji.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,At.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let Jr=0;Jr<Ce;Jr++)Zr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(y).__webglTexture,H,Je+Jr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,z.get(O).__webglTexture,xe,kt+Jr)),N.blitFramebuffer(De,Ke,ve,Me,Le,gt,ve,Me,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||z.has(y)){const zt=z.get(y),Ji=z.get(O);v.bindFramebuffer(N.READ_FRAMEBUFFER,W),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let At=0;At<Ce;At++)Zr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.__webglTexture,H,Je+At):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,zt.__webglTexture,H),Mt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ji.__webglTexture,xe,kt+At):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ji.__webglTexture,xe),H!==0?N.blitFramebuffer(De,Ke,ve,Me,Le,gt,ve,Me,N.COLOR_BUFFER_BIT,N.NEAREST):Mt?N.copyTexSubImage3D(Te,xe,Le,gt,kt+At,De,Ke,ve,Me):N.copyTexSubImage2D(Te,xe,Le,gt,De,Ke,ve,Me);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Mt?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Te,xe,Le,gt,kt,ve,Me,Ce,St,hn,Ot.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,xe,Le,gt,kt,ve,Me,Ce,St,Ot.data):N.texSubImage3D(Te,xe,Le,gt,kt,ve,Me,Ce,St,hn,Ot):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xe,Le,gt,ve,Me,St,hn,Ot.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xe,Le,gt,Ot.width,Ot.height,St,Ot.data):N.texSubImage2D(N.TEXTURE_2D,xe,Le,gt,ve,Me,St,hn,Ot);v.pixelStorei(N.UNPACK_ROW_LENGTH,zn),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft),v.pixelStorei(N.UNPACK_SKIP_PIXELS,ii),v.pixelStorei(N.UNPACK_SKIP_ROWS,yi),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Zi),xe===0&&O.generateMipmaps&&N.generateMipmap(Te),v.unbindTexture()},this.initRenderTarget=function(y){z.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),v.unbindTexture()},this.resetState=function(){X=0,I=0,K=null,v.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const hi={floor:526603,wall:790034,desk:3022869,deskLeg:2300432,monitorBody:2895410,terminalBody:2500652,notebookCover:3944482,phoneBody:2369066,lampMetal:2961203,lampShade:3816512},ar=.75,Fr=.025,Ku={on:{emissiveColor:16758903,emissiveIntensity:1.5,lightIntensity:1.3},off:{emissiveColor:3814188,emissiveIntensity:.12,lightIntensity:0}};function Wo(r,e,t){const n=document.createElement("canvas");n.width=r,n.height=e;const i=n.getContext("2d");t(i,r,e);const s=new mp(n);return s.colorSpace=In,s}function wx(r,e,t){r.fillStyle="#0c1219",r.fillRect(0,0,e,t),r.fillStyle="#141b24",r.fillRect(0,0,e,t*.09);const n=e*.15;r.fillStyle="#0f151d",r.fillRect(0,t*.09,n,t),r.fillStyle="#3d4f61",[.16,.24,.32,.44,.52,.6,.72].forEach(u=>{r.fillRect(n*.18,t*u,n*.64,t*.022)});const s=["#5b9bd5","#6fbf87","#8b93a3","#5b9bd5","#6fbf87"],a=[.5,.32,.62,.4,.7,.28,.5,.6,.34,.58,.44,.66,.3],o=n+e*.045,l=t*.052;let c=t*.17;a.forEach((u,d)=>{const f=d%3*e*.018;r.fillStyle=s[d%s.length],r.fillRect(o+f,c,u*(e-o-e*.06),l*.48),c+=l})}function Rx(r,e,t){r.fillStyle="#0a0c0f",r.fillRect(0,0,e,t),r.font=`${Math.floor(t*.16)}px "Courier New", monospace`,r.fillStyle="#9fb0ae",r.textBaseline="top",r.fillText("GitHub",e*.1,t*.16),r.fillText("Resume",e*.1,t*.42),r.fillStyle="#6c7a78",r.fillText("_",e*.1,t*.68)}function Cx(r,e,t){r.fillStyle="#0b0d10",r.fillRect(0,0,e,t),r.fillStyle="#3a4650",r.beginPath(),r.arc(e/2,t*.28,e*.16,0,Math.PI*2),r.fill(),r.fillStyle="#2a333b",r.fillRect(e*.28,t*.52,e*.44,t*.03),r.fillRect(e*.34,t*.58,e*.32,t*.025)}function Px(r,e,t,n){r.fillStyle=n,r.fillRect(0,0,e,t),r.font=`${Math.floor(t*.09)}px Georgia, serif`,r.fillStyle="rgba(255, 245, 230, 0.16)",r.textAlign="center",r.textBaseline="middle",r.fillText("ABOUT",e/2,t*.86)}function Dx(){const r=new vi,e=new Ln({color:hi.desk,roughness:.55,metalness:.06}),t=new Ln({color:hi.deskLeg,roughness:.5,metalness:.15}),n=new xt(new fi(1.5,Fr,.65),e);n.position.set(0,ar,0),n.castShadow=!1,n.receiveShadow=!0,r.add(n);const i=ar-Fr/2,s=new fi(.03,i,.6);return[-.7,.7].forEach(a=>{const o=new xt(s,t);o.position.set(a,i/2,0),o.castShadow=!0,o.receiveShadow=!0,r.add(o)}),r}function Lx(){const r=new vi,e=new Ln({color:hi.monitorBody,roughness:.35,metalness:.35}),t=Wo(512,288,wx),n=new Ln({color:0,roughness:.22,metalness:.1,map:t,emissive:new $e(16777215),emissiveMap:t,emissiveIntensity:.85}),i=new xt(new Nr(.09,.11,.02,24),e);i.position.set(0,.01,0),i.castShadow=!0,i.receiveShadow=!0,r.add(i);const s=new xt(new fi(.03,.16,.03),e);s.position.set(0,.1,0),s.castShadow=!0,r.add(s);const a=new xt(new fi(.56,.32,.018),e);a.position.set(0,.34,-.005),a.castShadow=!0,a.receiveShadow=!0,r.add(a);const o=new xt(new Yi(.52,.29),n);return o.position.set(0,.34,.0045),o.userData.isScreen=!0,o.userData.baseEmissiveIntensity=.85,r.add(o),r.rotation.x=on.degToRad(-2),r}function Fx(){const r=new Ln({color:hi.terminalBody,roughness:.55,metalness:.2}),e=Wo(128,96,Rx),t=new Ln({color:0,roughness:.3,metalness:.05,map:e,emissive:new $e(16777215),emissiveMap:e,emissiveIntensity:.4}),n=new vi,i=new xt(new fi(.11,.05,.08),r);i.castShadow=!0,i.receiveShadow=!0,n.add(i);const s=new xt(new Yi(.09,.036),t);return s.position.set(0,.01,.0405),s.userData.isScreen=!0,s.userData.baseEmissiveIntensity=.4,n.add(s),n}function Ix(){const r="#"+hi.notebookCover.toString(16).padStart(6,"0"),e=Wo(256,256,(s,a,o)=>Px(s,a,o,r)),t=new Ln({color:16777215,map:e,roughness:.75,metalness:0}),n=new Ln({color:hi.notebookCover,roughness:.8,metalness:0}),i=new xt(new fi(.21,.014,.28),[n,n,t,n,n,n]);return i.castShadow=!0,i.receiveShadow=!0,i}function Ux(){const r=new Ln({color:hi.phoneBody,roughness:.4,metalness:.45}),e=Wo(128,256,Cx),t=new Ln({color:0,roughness:.18,metalness:.2,map:e,emissive:new $e(16777215),emissiveMap:e,emissiveIntensity:.32}),n=new vi,i=new xt(new fi(.07,.008,.145),r);i.castShadow=!0,i.receiveShadow=!0,n.add(i);const s=new xt(new Yi(.06,.13),t);return s.rotation.x=-Math.PI/2,s.position.y=.0041,s.userData.isScreen=!0,s.userData.baseEmissiveIntensity=.32,n.add(s),n}function $u(r,e,t,n){const i=new G().subVectors(e,r),s=i.length(),a=new xt(new Nr(t,t,s,12),n);return a.position.copy(r).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new G(0,1,0),i.normalize()),a.castShadow=!0,a}function Nx(){const r=new Ln({color:hi.lampMetal,roughness:.4,metalness:.55}),e=new Ln({color:hi.lampShade,roughness:.55,metalness:.2,side:2}),t=new Ln({color:16773590,roughness:.4,metalness:0,emissive:new $e(16758903),emissiveIntensity:1.5}),n=new vi,i=new xt(new Nr(.065,.078,.016,24),r);i.position.y=.008,i.castShadow=!0,i.receiveShadow=!0,n.add(i);const s=new G(0,.02,0),a=new G(-.1,.42,.16),o=new G(-.15,.32,.22);n.add($u(s,a,.007,r)),n.add($u(a,o,.006,r));const l=new Co(.009,12,10),c=new xt(l,r);c.position.copy(a),n.add(c);const u=new G(-.12,-1,.12).normalize(),d=new xt(new Nr(.032,.06,.09,24,1,!0),e);d.position.copy(o).addScaledVector(u,.03),d.quaternion.setFromUnitVectors(new G(0,1,0),u),d.castShadow=!0,d.receiveShadow=!0,n.add(d);const f=new xt(new Nr(.014,.014,.014,16),r);f.position.copy(o),f.quaternion.setFromUnitVectors(new G(0,1,0),u),n.add(f);const h=new xt(new Co(.022,16,12),t);h.position.copy(o).addScaledVector(u,.045),n.add(h);const _=new Ap(16758903,1.3,1.2,1.7);return _.position.copy(h.position),n.add(_),{group:n,bulbMaterial:t,bulbLight:_}}function Ox(){const r=new vi,e=new Ln({color:hi.floor,roughness:.9,metalness:0}),t=new xt(new Yi(8,8),e);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,r.add(t);const n=new Ln({color:hi.wall,roughness:.95,metalness:0}),i=new xt(new Yi(6,3),n);return i.position.set(0,1.5,-.95),i.receiveShadow=!0,r.add(i),r}function Bx(r){const e=new Ep(3554374,658189,3.2);r.add(e);const t=new xl(15265269,6.5);t.position.set(1.4,2.4,1.6),t.target.position.set(0,ar+.15,-.1),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.near=.5,t.shadow.camera.far=6,t.shadow.camera.left=-1.5,t.shadow.camera.right=1.5,t.shadow.camera.top=1.5,t.shadow.camera.bottom=-1.5,t.shadow.camera.updateProjectionMatrix(),t.shadow.bias=-.0015,r.add(t),r.add(t.target);const n=new xl(5989490,2.2);n.position.set(-1.8,1.2,-.8),r.add(n);const i=new xl(7042694,3.4);i.position.set(-.6,1.6,-1.6),r.add(i)}function ih(r,e,t){const n=e.getCenter(new G),i=e.getSize(new G),s=on.clamp(on.mapLinear(t,.5,1.05,1,0),0,1),a=on.lerp(.62,1.35,s),o=on.lerp(1,.78,s),l=on.lerp(.76,.7,s),c=new G(0,a,o).normalize(),u=on.degToRad(r.fov),d=2*Math.atan(Math.tan(u/2)*t),f=n.clone().add(c.clone().multiplyScalar(1)),h=new Pt().lookAt(f,n,new G(0,1,0)),_=new G().setFromMatrixColumn(h,0),g=new G().setFromMatrixColumn(h,1),m=new G().setFromMatrixColumn(h,2);let p=0,T=0,w=0;const S=new G;for(let R=0;R<8;R++)S.set(R&1?e.max.x:e.min.x,R&2?e.max.y:e.min.y,R&4?e.max.z:e.min.z).sub(n),p=Math.max(p,Math.abs(S.dot(_))),T=Math.max(T,Math.abs(S.dot(g))),w=Math.max(w,Math.abs(S.dot(m)));const E=T/Math.tan(u/2),A=p/Math.tan(d/2),b=Math.max(E,A)*l+w;r.position.copy(n).add(c.multiplyScalar(b));const x=on.lerp(.35,.12,s),M=n.clone();M.y+=i.y*x+.04,r.lookAt(M),r.updateProjectionMatrix(),r.userData.basePosition=r.position.clone(),r.userData.lookTarget=M.clone(),r.userData.right=_.clone(),r.userData.up=g.clone()}function Gx(r){const e=new sp;e.background=new $e(hi.floor),e.add(Ox());const t=new vi;t.add(Dx());const n=Lx();n.scale.setScalar(1.16),n.position.set(0,ar+Fr/2,-.15),n.userData.interactionId="monitor",n.userData.baseScale=1.16,t.add(n);const i=Fx();i.scale.setScalar(1.12),i.position.set(.17,ar+Fr/2+.025,.14),i.rotation.y=on.degToRad(-6),i.userData.interactionId="terminal",i.userData.baseScale=1.12,t.add(i);const s=Ix();s.scale.setScalar(1.12),s.position.set(-.45,ar+Fr/2+.007,.12),s.rotation.y=on.degToRad(8),s.userData.interactionId="notebook",s.userData.baseScale=1.12,t.add(s);const a=Ux();a.scale.setScalar(1.12),a.position.set(.5,ar+Fr/2+.004,.15),a.rotation.y=on.degToRad(-12),a.userData.interactionId="phone",a.userData.baseScale=1.12,t.add(a);const{group:o,bulbMaterial:l,bulbLight:c}=Nx();o.position.set(.58,ar+Fr/2,-.24),o.userData.interactionId="lamp",o.userData.baseScale=1,t.add(o),e.add(t),Bx(e);const u=new ks().setFromObject(t),d=new Yn(38,r,.1,20);return ih(d,u,r),{scene:e,camera:d,box:u,interactive:{monitor:n,terminal:i,notebook:s,phone:a,lamp:{group:o,bulbMaterial:l,bulbLight:c}}}}let Ks=null;function kx(){const r=window.AudioContext||window.webkitAudioContext;return r?(Ks||(Ks=new r),Ks.state==="suspended"&&Ks.resume(),Ks):null}function rh({frequency:r,endFrequency:e,duration:t,gain:n,type:i,filterFrequency:s}){const a=kx();if(!a)return;const o=a.currentTime,l=a.createOscillator(),c=a.createGain(),u=a.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(r,o),l.frequency.exponentialRampToValueAtTime(e,o+t),u.type="lowpass",u.frequency.setValueAtTime(s,o),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(u),u.connect(c),c.connect(a.destination),l.start(o),l.stop(o+t+.03)}function zx(){rh({frequency:340,endFrequency:230,duration:.18,gain:.14,type:"sine",filterFrequency:1200})}function Vx(r){rh({frequency:r?300:210,endFrequency:r?260:180,duration:.09,gain:.11,type:"triangle",filterFrequency:2200})}const Hx=.05,Wx=.032,Xx=.09,qx=.15,Yx=.08,Kx=550,$x=.6,Zx={monitor:.05,terminal:.025,notebook:.025,phone:.025},Jx={monitor:.35,terminal:.25,phone:.22},Zu=["monitor","notebook","phone","terminal"];function Qx(r){let e=r;for(;e;){if(e.userData&&e.userData.interactionId)return e.userData.interactionId;e=e.parent}return null}function bl(r){const e=[];return r.traverse(t=>{t.userData&&t.userData.isScreen&&e.push(t)}),e}class jx{constructor({canvas:e,camera:t,interactive:n,links:i,reducedMotion:s,requestRender:a}){this.canvas=e,this.camera=t,this.interactive=n,this.links=i||{},this.reducedMotion=s,this.requestRender=a||(()=>{}),this.raycaster=new Pp,this.pointerNdc=new je(0,0),this.pointerActive=!1,this.parallaxTarget=new je(0,0),this.parallaxCurrent=new je(0,0),this._offset=new G,this._camPosition=new G,this.hoverId=null,this.hoverAmounts={monitor:0,terminal:0,notebook:0,phone:0},this._raycastTargets=Zu.map(o=>this.interactive[o]).concat([this.interactive.lamp.group]),this._screenMeshes={monitor:bl(this.interactive.monitor),terminal:bl(this.interactive.terminal),phone:bl(this.interactive.phone)},this.lampOn=!0,this.lampTransition=1,this.transitioning=!1,this._transition=null,this._lookAtScratch=new G,this._objectWorldPos=new G,this._onPointerMove=this._onPointerMove.bind(this),this._onPointerLeave=this._onPointerLeave.bind(this),this._onClick=this._onClick.bind(this),e.addEventListener("pointermove",this._onPointerMove,{passive:!0}),e.addEventListener("pointerleave",this._onPointerLeave,{passive:!0}),e.addEventListener("click",this._onClick)}_updateNdcFromEvent(e){const t=this.canvas.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*2-1,i=-((e.clientY-t.top)/t.height)*2+1;return{x:n,y:i}}_onPointerMove(e){const{x:t,y:n}=this._updateNdcFromEvent(e);this.pointerNdc.set(t,n),this.pointerActive=!0,this.reducedMotion||this.parallaxTarget.set(on.clamp(t,-1,1)*Hx,on.clamp(n,-1,1)*Wx)}_onPointerLeave(){this.pointerActive=!1,this.hoverId=null,this.canvas.style.cursor="",this.parallaxTarget.set(0,0)}_raycastAt(e){this.raycaster.setFromCamera(e,this.camera);const t=this.raycaster.intersectObjects(this._raycastTargets,!0);return t.length?Qx(t[0].object):null}_onClick(e){if(this.transitioning)return;const t=this._updateNdcFromEvent(e),n=this._raycastAt(new je(t.x,t.y));if(!n)return;if(n==="lamp"){this.lampOn=!this.lampOn,Vx(this.lampOn),this.reducedMotion&&(this.lampTransition=this.lampOn?1:0,this._applyLampState(),this.requestRender());return}const i=this._destinationFor(n);i&&this._startPageTransition(n,i)}_startPageTransition(e,t){if(zx(),this.reducedMotion){window.location.href=t;return}this.transitioning=!0,this.hoverId=null,this.canvas.style.cursor="",this.interactive[e].getWorldPosition(this._objectWorldPos);const i=this.camera.userData.lookTarget||this._objectWorldPos;this._transition={startTime:performance.now(),startPos:this.camera.position.clone(),endPos:this.camera.position.clone().lerp(this._objectWorldPos,$x),startLookAt:i.clone(),endLookAt:this._objectWorldPos.clone(),destination:t};const s=document.getElementById("page-transition-container");s&&s.classList.add("is-leaving")}_updateTransition(){const e=this._transition;if(e.navigated)return;const t=Math.min((performance.now()-e.startTime)/Kx,1),n=1-Math.pow(1-t,3);this.camera.position.lerpVectors(e.startPos,e.endPos,n),this._lookAtScratch.lerpVectors(e.startLookAt,e.endLookAt,n),this.camera.lookAt(this._lookAtScratch),t>=1&&(e.navigated=!0,window.location.href=e.destination)}_destinationFor(e){return e==="monitor"?this.links.projects||null:e==="notebook"?this.links.about||null:e==="phone"?this.links.contact||null:e==="terminal"&&(this.links.github||this.links.resume)||null}_applyLampState(){const e=Ku.on,t=Ku.off,n=this.lampTransition,{bulbMaterial:i,bulbLight:s}=this.interactive.lamp;i.emissive.copy(new $e(t.emissiveColor)).lerp(new $e(e.emissiveColor),n),i.emissiveIntensity=on.lerp(t.emissiveIntensity,e.emissiveIntensity,n),s.intensity=on.lerp(t.lightIntensity,e.lightIntensity,n)}primeInitialState(){this._applyLampState()}update(){if(this.transitioning){this._updateTransition();return}this._updateHover(),this._updateParallax(),this._updateLamp()}_updateHover(){const e=this.pointerActive?this._raycastAt(this.pointerNdc):null;e!==this.hoverId&&(this.hoverId=e,this.canvas.style.cursor=e?"pointer":""),Zu.forEach(t=>{const n=t===this.hoverId?1:0;this.hoverAmounts[t]=on.lerp(this.hoverAmounts[t],n,qx);const i=this.interactive[t],s=this.hoverAmounts[t],a=Zx[t]||0;i.scale.setScalar(i.userData.baseScale*(1+s*a));const o=Jx[t];o&&this._screenMeshes[t].forEach(l=>{l.material.emissiveIntensity=l.userData.baseEmissiveIntensity+s*o})})}_updateParallax(){if(this.reducedMotion)return;this.parallaxCurrent.lerp(this.parallaxTarget,Xx);const{basePosition:e,lookTarget:t,right:n,up:i}=this.camera.userData;!e||!t||!n||!i||(this._offset.copy(n).multiplyScalar(this.parallaxCurrent.x).addScaledVector(i,this.parallaxCurrent.y),this._camPosition.copy(e).add(this._offset),this.camera.position.copy(this._camPosition),this.camera.lookAt(t))}_updateLamp(){const e=this.lampOn?1:0;if(Math.abs(this.lampTransition-e)<.001){this.lampTransition=e;return}this.lampTransition=on.lerp(this.lampTransition,e,Yx),this._applyLampState()}dispose(){this.canvas.removeEventListener("pointermove",this._onPointerMove),this.canvas.removeEventListener("pointerleave",this._onPointerLeave),this.canvas.removeEventListener("click",this._onClick)}}function ev(){const r=document.querySelector("[data-workspace-scene]");if(!r)return;const e=r.querySelector("[data-workspace-canvas]"),t=r.querySelector(".hero-scene__fallback");if(!e)return;let n;try{n=new Ax({canvas:e,antialias:!0,alpha:!1})}catch(i){console.warn("Workspace scene: WebGL unavailable, falling back to text.",i);return}try{const i=r.getBoundingClientRect(),s=i.width||window.innerWidth,a=i.height||window.innerHeight,o=Math.min(window.devicePixelRatio||1,2);n.setPixelRatio(o),n.setSize(s,a,!1),n.shadowMap.enabled=!0,n.shadowMap.type=2,n.toneMapping=4,n.toneMappingExposure=1.05,n.outputColorSpace=In;const{scene:l,camera:c,box:u,interactive:d}=Gx(s/a),f=()=>{n.render(l,c)},h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,_=new jx({canvas:e,camera:c,interactive:d,links:window.portfolioWorkspaceLinks||{},reducedMotion:h,requestRender:f});_.primeInitialState(),f();let g=null;if(window.addEventListener("resize",()=>{g||(g=requestAnimationFrame(()=>{g=null;const m=r.getBoundingClientRect(),p=m.width||window.innerWidth,T=m.height||window.innerHeight;c.aspect=p/T,ih(c,u,c.aspect),n.setSize(p,T,!1),f()}))}),!h){let m=!document.hidden;const p=()=>{m&&(_.update(),f(),requestAnimationFrame(p))};document.addEventListener("visibilitychange",()=>{const T=m;m=!document.hidden,m&&!T&&requestAnimationFrame(p)}),requestAnimationFrame(p)}e.hidden=!1,t&&(t.hidden=!0)}catch(i){console.warn("Workspace scene: failed to initialize, falling back to text.",i),n.dispose()}}function zi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function sh(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ya={duration:.5,overwrite:!1,delay:0},Sc,un,Ct,li=1e8,Tt=1/li,Hl=Math.PI*2,tv=Hl/4,nv=0,ah=Math.sqrt,iv=Math.cos,rv=Math.sin,an=function(e){return typeof e=="string"},Bt=function(e){return typeof e=="function"},Ki=function(e){return typeof e=="number"},Mc=function(e){return typeof e>"u"},Ui=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},yc=function(){return typeof window<"u"},to=function(e){return Bt(e)||an(e)},oh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,sv=/random\([^)]+\)/g,av=/,\s*/g,Ju=/(?:-?\.?\d|\.)+/gi,lh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Al=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ch=/[+-]=-?[.\d]+/,ov=/[^,'"\[\]\s]+/gi,lv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,bi,Wl,Tc,ei={},Po={},uh,fh=function(e){return(Po=Ls(e,ei))&&kn},Ec=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ta=function(e,t){return!t&&console.warn(e)},hh=function(e,t){return e&&(ei[e]=t)&&Po&&(Po[e]=t)||ei},Ea=function(){return 0},cv={suppressEvents:!0,isStart:!0,kill:!1},go={suppressEvents:!0,kill:!1},uv={suppressEvents:!0},bc={},dr=[],Xl={},dh,qn={},wl={},Qu=30,xo=[],Ac="",wc=function(e){var t=e[0],n,i;if(Ui(t)||Bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=xo.length;i--&&!xo[i].targetTest(t););n=xo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Uh(e[i],n)))||e.splice(i,1);return e},Or=function(e){return e._gsap||wc(ci(e))[0]._gsap},ph=function(e,t,n){return(n=e[t])&&Bt(n)?e[t]():Mc(n)&&e.getAttribute&&e.getAttribute(t)||n},On=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},Ts=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},fv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Do=function(){var e=dr.length,t=dr.slice(0),n,i;for(Xl={},dr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Rc=function(e){return!!(e._initted||e._startAt||e.add)},mh=function(e,t,n,i){dr.length&&!un&&Do(),e.render(t,n,!!(un&&t<0&&Rc(e))),dr.length&&!un&&Do()},_h=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ov).length<2?t:an(e)?e.trim():e},gh=function(e){return e},ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ls=function(e,t){for(var n in t)e[n]=t[n];return e},ju=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ui(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Lo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ca=function(e){var t=e.parent||Lt,n=e.keyframes?hv(Sn(e.keyframes)):ti;if(Nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},dv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},xh=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Xo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},gr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Br=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},pv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ql=function(e,t,n,i){return e._startAt&&(un?e._startAt.revert(go):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},mv=function r(e){return!e||e._ts&&r(e.parent)},ef=function(e){return e._repeat?Fs(e._tTime,e=e.duration()+e._rDelay)*e:0},Fs=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},Fo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},qo=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},Yo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),qo(e),n._dirty||Br(n,e)),e},vh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Fo(e.rawTime(),t),(!t._dur||Fa(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),Br(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Ri=function(e,t,n,i){return t.parent&&gr(t),t._start=Dt((Ki(n)?n:n||e!==Lt?si(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),xh(e,t,"_first","_last",e._sort?"_start":0),Yl(t)||(e._recent=t),i||vh(e,t),e._ts<0&&Yo(e,e._tTime),e},Sh=function(e,t){return(ei.ScrollTrigger||Ec("scrollTrigger",t))&&ei.ScrollTrigger.create(t,e)},Mh=function(e,t,n,i,s){if(Pc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&dh!==$n.frame)return dr.push(e),e._lazy=[s,i],1},_v=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Yl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},gv=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&_v(e)&&!(!e._initted&&Yl(e))||(e._ts<0||e._dp._ts<0)&&!Yl(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Fa(0,e._tDur,t),u=Fs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Fs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||un||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&Mh(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ql(e,t,n,!0),e._onUpdate&&!n&&Jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&gr(e,1),!n&&!un&&(Jn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Is=function(e,t,n,i){var s=e._repeat,a=Dt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Dt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Yo(e,e._tTime=e._tDur*o),e.parent&&qo(e),n||Br(e.parent,e),e},tf=function(e){return e instanceof Un?Br(e):Is(e,e._dur)},vv={_start:0,endTime:Ea,totalDuration:Ea},si=function r(e,t,n){var i=e.labels,s=e._recent||vv,a=e.duration()>=li?s.endTime(!1):e._dur,o,l,c;return an(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Sn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ua=function(e,t,n){var i=Ki(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;a.immediateRender=Nn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Kt(t[0],a,t[s+1])},Mr=function(e,t){return e||e===0?t(e):t},Fa=function(e,t,n){return n<e?e:n>t?t:n},gn=function(e,t){return!an(e)||!(t=lv.exec(e))?"":t[1]},Sv=function(e,t,n){return Mr(n,function(i){return Fa(e,t,i)})},Kl=[].slice,yh=function(e,t){return e&&Ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ui(e[0]))&&!e.nodeType&&e!==bi},Mv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return an(i)&&!t||yh(i,1)?(s=n).push.apply(s,ci(i)):n.push(i)})||n},ci=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):an(e)&&!n&&(Wl||!Us())?Kl.call((t||Tc).querySelectorAll(e),0):Sn(e)?Mv(e,n):yh(e)?Kl.call(e,0):e?[e]:[]},$l=function(e){return e=ci(e)[0]||Ta("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ci(t,n.querySelectorAll?n:n===e?Ta("Invalid scope")||Tc.createElement("div"):e)}},Th=function(e){return e.sort(function(){return .5-Math.random()})},Eh=function(e){if(Bt(e))return e;var t=Ui(e)?e:{each:e},n=Gr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return an(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(f,h,_){var g=(_||t).length,m=a[g],p,T,w,S,E,A,b,x,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,li])[1],!M){for(b=-li;b<(b=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=a[g]=[],p=l?Math.min(M,g)*u-.5:i%M,T=M===li?0:l?g*d/M-.5:i/M|0,b=0,x=li,A=0;A<g;A++)w=A%M-p,S=T-(A/M|0),m[A]=E=c?Math.abs(c==="y"?S:w):ah(w*w+S*S),E>b&&(b=E),E<x&&(x=E);i==="random"&&Th(m),m.max=b-x,m.min=x,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=gn(t.amount||t.each)||0,n=n&&g<0?Iv(n):n}return g=(m[f]-m.min)/m.max||0,Dt(m.b+(n?n(g):g)*m.v)+m.u}},Zl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ki(n)?0:gn(n))}},bh=function(e,t){var n=Sn(e),i,s;return!n&&Ui(e)&&(i=n=e.radius||li,e.values?(e=ci(e.values),(s=!Ki(e[0]))&&(i*=i)):e=Zl(e.increment)),Mr(t,n?Bt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=li,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:a,s||u===a||Ki(a)?u:u+gn(a)}:Zl(e))},Ah=function(e,t,n,i){return Mr(Sn(e)?!t:n===!0?!!(n=0):!i,function(){return Sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},yv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Tv=function(e,t){return function(n){return e(parseFloat(n))+(t||gn(n))}},Ev=function(e,t,n){return Rh(e,t,0,1,n)},wh=function(e,t,n){return Mr(n,function(i){return e[~~t(i)]})},bv=function r(e,t,n){var i=t-e;return Sn(e)?wh(e,r(0,e.length),t):Mr(n,function(s){return(i+(s-e)%i)%i+e})},Av=function r(e,t,n){var i=t-e,s=i*2;return Sn(e)?wh(e,r(0,e.length-1),t):Mr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ba=function(e){return e.replace(sv,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(av);return Ah(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Rh=function(e,t,n,i,s){var a=t-e,o=i-n;return Mr(s,function(l){return n+((l-e)/a*o||0)})},wv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=an(e),o={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Sn(e)&&!Sn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Ls(Sn(e)?[]:{},e));if(!u){for(l in t)Cc.call(o,e,l,"get",t[l]);s=function(_){return Fc(_,o)||(a?e.p:e)}}}return Mr(n,s)},nf=function(e,t,n){var i=e.labels,s=li,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Jn=function(e,t,n){var i=e.vars,s=i[t],a=Ct,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&dr.length&&Do(),o&&(Ct=o),u=l?s.apply(c,l):s.call(c),Ct=a,u},ea=function(e){return gr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!un),e.progress()<1&&Jn(e,"onInterrupt"),e},vs,Ch=[],Ph=function(e){if(e)if(e=!e.name&&e.default||e,yc()||e.headless){var t=e.name,n=Bt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ea,render:Fc,add:Cc,kill:Wv,modifier:Hv,rawVars:0},a={targetTest:0,get:0,getSetter:Lc,aliases:{},register:0};if(Us(),e!==i){if(qn[t])return;ti(i,ti(Lo(e,s),a)),Ls(i.prototype,Ls(s,Lo(e,a))),qn[i.prop=t]=i,e.targetTest&&(xo.push(i),bc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hh(t,i),e.register&&e.register(kn,i,Bn)}else Ch.push(e)},yt=255,ta={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},Rl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},Dh=function(e,t,n){var i=e?Ki(e)?[e>>16,e>>8&yt,e&yt]:0:ta.black,s,a,o,l,c,u,d,f,h,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ta[e])i=ta[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Ju),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Rl(l+1/3,s,a),i[1]=Rl(l,s,a),i[2]=Rl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(lh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ju)||ta.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/yt,a=i[1]/yt,o=i[2]/yt,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Lh=function(e){var t=[],n=[],i=-1;return e.split(pr).forEach(function(s){var a=s.match(xs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},rf=function(e,t,n){var i="",s=(e+i).match(pr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=Dh(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Lh(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(pr,"1").split(xs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(pr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},pr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ta)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Rv=/hsl[a]?\(/,Fh=function(e){var t=e.join(" "),n;if(pr.lastIndex=0,pr.test(t))return n=Rv.test(t),e[1]=rf(e[1],n),e[0]=rf(e[0],n,Lh(e[1])),!0},Aa,$n=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,f,h,_=function g(m){var p=r()-i,T=m===!0,w,S,E,A;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,w=E-a,(w>0||T)&&(A=++d.frame,f=E-d.time*1e3,d.time=E=E/1e3,a+=w+(w>=s?4:s-w),S=1),T||(l=c(g)),S)for(h=0;h<o.length;h++)o[h](E,f,A,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){uh&&(!Wl&&yc()&&(bi=Wl=window,Tc=bi.document||{},ei.gsap=kn,(bi.gsapVersions||(bi.gsapVersions=[])).push(kn.version),fh(Po||bi.GreenSockGlobals||!bi.gsap&&bi||{}),Ch.forEach(Ph)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Aa=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Aa=0,c=Ea},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,p,T){var w=p?function(S,E,A,b){m(S,E,A,b),d.remove(w)}:m;return d.remove(m),o[T?"unshift":"push"](w),Us(),w},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},d})(),Us=function(){return!Aa&&$n.wake()},lt={},Cv=/^[\d.\-M][\d.\-,\s]/,Pv=/["']/g,Dv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Pv,"").trim():+c,i=l.substr(o+1).trim();return t},Lv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Fv=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Dv(t[1])]:Lv(e).split(",").map(_h)):lt._CE&&Cv.test(e)?lt._CE("",e):n},Iv=function(e){return function(t){return 1-e(1-t)}},Gr=function(e,t){return e&&(Bt(e)?e:lt[e]||Fv(e))||t},Kr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return On(e,function(o){lt[o]=ei[o]=s,lt[a=o.toLowerCase()]=n;for(var l in s)lt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[o+"."+l]=s[l]}),s},Ih=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Cl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Hl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*rv((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Ih(o);return s=Hl/s,l.config=function(c,u){return r(e,c,u)},l},Pl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ih(n);return i.config=function(s){return r(e,s)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Kr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;Kr("Elastic",Cl("in"),Cl("out"),Cl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Kr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Kr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Kr("Circ",function(r){return-(ah(1-r*r)-1)});Kr("Sine",function(r){return r===1?1:-iv(r*tv)+1});Kr("Back",Pl("in"),Pl("out"),Pl());lt.SteppedEase=lt.steps=ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Tt;return function(o){return((i*Fa(0,a,o)|0)+s)*n}}};ya.ease=lt["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ac+=r+","+r+"Params,"});var Uh=function(e,t){this.id=nv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ph,this.set=t?t.getSetter:Lc},wa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Is(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),Aa||$n.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Is(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Us(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Yo(this,n),!s._dp||s.parent||vh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),mh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ef(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ef(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Fs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Fo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(Fa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),qo(this),pv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Us(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ri(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=uv);var i=un;return un=n,Rc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,tf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,tf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(si(this,n),Nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nn(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Bt(n)?n:gh,l=function(){var u=i.then;i.then=null,s&&s(),Bt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ea(this)},r})();ti(wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var Un=(function(r){sh(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Nn(n.sortChildren),Lt&&Ri(n.parent||Lt,zi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Sh(zi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ua(0,arguments,this),this},t.from=function(i,s,a){return ua(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ua(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,si(this,a),1),this},t.call=function(i,s,a){return Ri(this,Kt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Kt(i,a,si(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ca(a).immediateRender=Nn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,ca(o).immediateRender=Nn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Dt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,_,g,m,p,T,w,S,E,A,b;if(this!==Lt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,S=this._start,w=this._ts,p=!w,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=Dt(u%m),u===l?(g=this._repeat,f=c):(E=Dt(u/m),g=~~E,g&&g===E&&(f=c,g--),f>c&&(f=c)),E=Fs(this._tTime,m),!o&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),A&&g&1&&(f=c-f,b=1),g!==E&&!this._lock){var x=A&&E&1,M=x===(A&&g&1);if(g<E&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Dt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Jn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,E=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=xv(this,Dt(o),Dt(f)),T&&(u-=f-(f=T._start))),this._tTime=u,this._time=f,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!E&&(Jn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&T!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!p){T=0,_&&(u+=this._zTime=-Tt);break}}h=_}else{h=this._last;for(var R=i<0?i:f;h;){if(_=h._prev,(h._act||R<=h._end)&&h._ts&&T!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,s,a||un&&Rc(h)),f!==this._time||!this._ts&&!p){T=0,_&&(u+=this._zTime=R?-Tt:Tt);break}}h=_}}if(T&&!s&&(this.pause(),T.render(f>=o?0:-Tt)._zTime=f>=o?1:-1,this._ts))return this._start=S,qo(this),this.render(i,s,a);this._onUpdate&&!s&&Jn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&gr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Jn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Ki(s)||(s=si(this,s,i)),!(i instanceof wa)){if(Sn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(an(i))return this.addLabel(i,s);if(Bt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Ri(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-li);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return an(i)?this.removeLabel(i):Bt(i)?this.killTweensOf(i):(i.parent===this&&Xo(this,i),i===this._recent&&(this._recent=this._last),Br(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=si(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Kt.delayedCall(0,s||Ea,a);return o.data="isPause",this._hasPause=1,Ri(this,o,si(this,i))},t.removePause=function(i){var s=this._first;for(i=si(this,i);s;)s._start===i&&s.data==="isPause"&&gr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)lr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ci(i),l=this._first,c=Ki(s),u;l;)l instanceof Kt?fv(l._targets,o)&&(c?(!lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=si(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=Kt.to(a,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Tt,onStart:function(){if(a.pause(),!h){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Is(_,m,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ti({startAt:{time:si(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),nf(this,si(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),nf(this,si(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Dt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Br(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Br(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=li,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ri(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Dt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Is(a,a===Lt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Lt._ts&&(mh(Lt,Fo(i,Lt)),dh=$n.frame),$n.frame>=Qu){Qu+=jn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&jn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},e})(wa);ti(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var Uv=function(e,t,n,i,s,a,o){var l=new Bn(this._pt,e,t,0,1,zh,null,s),c=0,u=0,d,f,h,_,g,m,p,T;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ba(i)),a&&(T=[n,i],a(T,e,t),n=T[0],i=T[1]),f=n.match(Al)||[];d=Al.exec(i);)_=d[0],g=i.substring(c,d.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Ts(m,_)-m:parseFloat(_)-m,m:h&&h<4?Math.round:0},c=Al.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ch.test(i)||p)&&(l.e=0),this._pt=l,l},Cc=function(e,t,n,i,s,a,o,l,c,u){Bt(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:Bt(d)?c?e[t.indexOf("set")||!Bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Bt(d)?c?kv:Gh:Dc,_;if(an(i)&&(~i.indexOf("random(")&&(i=ba(i)),i.charAt(1)==="="&&(_=Ts(f,i)+(gn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Jl)return!isNaN(f*i)&&i!==""?(_=new Bn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?Vv:kh,0,h),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&Ec(t,i),Uv.call(this,e,t,f,i,h,l||jn.stringFilter,c))},Nv=function(e,t,n,i,s){if(Bt(e)&&(e=fa(e,s,t,n,i)),!Ui(e)||e.style&&e.nodeType||Sn(e)||oh(e))return an(e)?fa(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=fa(e[o],s,t,n,i);return a},Nh=function(e,t,n,i,s,a){var o,l,c,u;if(qn[e]&&(o=new qn[e]).init(s,o.rawVars?t[e]:Nv(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Bn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==vs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},lr,Jl,Pc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,w=e._overwrite==="auto"&&!Sc,S=e.timeline,E=i.easeReverse||d,A,b,x,M,R,L,P,V,W,U,X,I,K;if(S&&(!f||!s)&&(s="none"),e._ease=Gr(s,ya.ease),e._rEase=E&&(Gr(E)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||f&&!i.stagger){if(V=m[0]?Or(m[0]).harness:0,I=V&&i[V.prop],A=Lo(i,bc),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!h?g.render(-1,!0):g.revert(u&&_?go:cv),g._lazy=0),a){if(gr(e._startAt=Kt.set(m,ti({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Nn(l),startAt:null,delay:0,onUpdate:c&&function(){return Jn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un||!o&&!h)&&e._startAt.revert(go),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),x=ti({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Nn(l),immediateRender:o,stagger:0,parent:p},A),I&&(x[V.prop]=I),gr(e._startAt=Kt.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(un?e._startAt.revert(go):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Nn(l)||l&&!_,b=0;b<m.length;b++){if(R=m[b],P=R._gsap||wc(m)[b]._gsap,e._ptLookup[b]=U={},Xl[P.id]&&dr.length&&Do(),X=T===m?b:T.indexOf(R),V&&(W=new V).init(R,I||A,e,X,T)!==!1&&(e._pt=M=new Bn(e._pt,R,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(ee){U[ee]=M}),W.priority&&(L=1)),!V||I)for(x in A)qn[x]&&(W=Nh(x,A,e,X,R,T))?W.priority&&(L=1):U[x]=M=Cc.call(e,R,x,"get",A[x],X,T,0,i.stringFilter);e._op&&e._op[b]&&e.kill(R,e._op[b]),w&&e._pt&&(lr=e,Lt.killTweensOf(R,U,e.globalTime(t)),K=!e.parent,lr=0),e._pt&&l&&(Xl[P.id]=1)}L&&Vh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,f&&t<=0&&S.render(li,!0,!0)},Ov=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Jl=1,e.vars[t]="+=0",Pc(e,o),Jl=0,l?Ta(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Vt(n)+gn(d.e)),d.b&&(d.b=u.s+gn(d.b))},Bv=function(e,t){var n=e[0]?Or(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ls({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Gv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Sn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},fa=function(e,t,n,i,s){return Bt(e)?e.call(t,n,i,s):an(e)&&~e.indexOf("random(")?ba(e):e},Oh=Ac+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Bh={};On(Oh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Bh[r]=1});var Kt=(function(r){sh(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ca(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Lt,T=(Sn(n)||oh(n)?Ki(n[0]):"length"in i)?[n]:ci(n),w,S,E,A,b,x,M,R;if(o._targets=T.length?wc(T):Ta("GSAP target "+n+" not found. https://gsap.com",!jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,_||f||to(c)||to(u)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(w=o.timeline=new Un({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:T}),w.kill(),w.parent=w._dp=zi(o),w._start=0,f||to(c)||to(u)){if(A=T.length,M=f&&Eh(f),Ui(f))for(b in f)~Oh.indexOf(b)&&(R||(R={}),R[b]=f[b]);for(S=0;S<A;S++)E=Lo(i,Bh),E.stagger=0,L&&(E.easeReverse=L),R&&Ls(E,R),x=T[S],E.duration=+fa(c,zi(o),S,x,T),E.delay=(+fa(u,zi(o),S,x,T)||0)-o._delay,!f&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),w.to(x,E,M?M(S,x,T):0),w._ease=lt.none;w.duration()?c=u=0:o.timeline=0}else if(_){ca(ti(w.vars.defaults,{ease:"none"})),w._ease=Gr(_.ease||i.ease||"none");var P=0,V,W,U;if(Sn(_))_.forEach(function(X){return w.to(T,X,">")}),w.duration();else{E={};for(b in _)b==="ease"||b==="easeEach"||Gv(b,_[b],E,_.easeEach);for(b in E)for(V=E[b].sort(function(X,I){return X.t-I.t}),P=0,S=0;S<V.length;S++)W=V[S],U={ease:W.e,duration:(W.t-(S?V[S-1].t:0))/100*c},U[b]=W.v,w.to(T,U,P),P+=U.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return h===!0&&!Sc&&(lr=zi(o),Lt.killTweensOf(T),lr=0),Ri(p,zi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===Dt(p._time)&&Nn(d)&&mv(zi(o))&&p.data!=="nested")&&(o._tTime=-Tt,o.render(Math.max(0,-u)||0)),m&&Sh(zi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Tt&&!u?l:i<Tt?0:i,f,h,_,g,m,p,T,w;if(!c)gv(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,w=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(f=Dt(d%g),d===l?(_=this._repeat,f=c):(m=Dt(d/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),m=Fs(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Dt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Mh(this,u?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var S=f<o;if(S!==this._inv){var E=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(S?-1:1)/E:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=T=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=T=this._ease(f/c);if(this._from&&(this.ratio=T=1-T),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(Jn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(T,h.d),h=h._next;w&&w.render(i<0?i:w._dur*w._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ql(this,i,s,a),Jn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Jn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&ql(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&gr(this,1),!s&&!(u&&!o)&&(d||o||p)&&(Jn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Aa||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Pc(this,c),u=this._ease(c/this._dur),Ov(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Yo(this,0),this.parent||xh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ea(this):this.scrollTrigger&&this.scrollTrigger.kill(!!un),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,lr&&lr.vars.overwrite!==!0)._first||ea(this),this.parent&&a!==this.timeline.totalDuration()&&Is(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ci(i):o,c=this._ptLookup,u=this._pt,d,f,h,_,g,m,p;if((!s||s==="all")&&dv(o,l))return s==="all"&&(this._pt=0),ea(this);for(d=this._op=this._op||[],s!=="all"&&(an(s)&&(g={},On(s,function(T){return g[T]=1}),s=g),s=Bv(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(d[p]=s,_=f,h={}):(h=d[p]=d[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Xo(this,m,"_pt"),delete f[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&ea(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ua(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ua(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Lt.killTweensOf(i,s,a)},e})(wa);ti(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Un,t=Kl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Dc=function(e,t,n){return e[t]=n},Gh=function(e,t,n){return e[t](n)},kv=function(e,t,n,i){return e[t](i.fp,n)},zv=function(e,t,n){return e.setAttribute(t,n)},Lc=function(e,t){return Bt(e[t])?Gh:Mc(e[t])&&e.setAttribute?zv:Dc},kh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Vv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Fc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Hv=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Wv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Xo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Xv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Vh=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Bn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||kh,this.d=l||this,this.set=c||Dc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Xv,this.m=n,this.mt=s,this.tween=i},r})();On(Ac+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return bc[r]=1});ei.TweenMax=ei.TweenLite=Kt;ei.TimelineLite=ei.TimelineMax=Un;Lt=new Un({sortChildren:!1,defaults:ya,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=Fh;var kr=[],vo={},qv=[],sf=0,Yv=0,Dl=function(e){return(vo[e]||qv).map(function(t){return t()})},Ql=function(){var e=Date.now(),t=[];e-sf>2&&(Dl("matchMediaInit"),kr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=bi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Dl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),sf=e,Dl("matchMedia"))},Hh=(function(){function r(t,n){this.selector=n&&$l(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Yv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Bt(n)&&(s=i,i=n,n=Bt);var a=this,o=function(){var c=Ct,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=$l(s)),Ct=a,d=i.apply(a,arguments),Bt(d)&&a._r.push(d),Ct=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Bt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=kr.length;a--;)kr[a].id===this.id&&kr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),Kv=(function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ui(n)||(n={matches:n});var a=new Hh(0,s||this.scope),o=a.conditions={},l,c,u;Ct&&!a.selector&&(a.selector=Ct.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=bi.matchMedia(n[c]),l&&(kr.indexOf(a)<0&&kr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ql):l.addEventListener("change",Ql)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Io={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ph(i)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){an(e)&&(e=ci(e)[0]);var s=Or(e||{}).get,a=n?gh:_h;return n==="native"&&(n=""),e&&(t?a((qn[t]&&qn[t].get||s)(e,t,n,i)):function(o,l,c){return a((qn[o]&&qn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ci(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=qn[t],o=Or(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;vs._pt=0,d.init(e,n?u+n:u,vs,0,[e]),d.render(1,d),vs._pt&&Fc(1,vs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=kn.to(e,ti((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gr(e.ease,ya.ease)),ju(ya,e||{})},config:function(e){return ju(jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!qn[o]&&!ei[o]&&Ta(t+" effect requires "+o+" plugin.")}),wl[t]=function(o,l,c){return n(ci(o),ti(l||{},s),c)},a&&(Un.prototype[t]=function(o,l,c){return this.add(wl[t](o,Ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Gr(t)},parseEase:function(e,t){return arguments.length?Gr(e,t):lt},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Un(e),i,s;for(n.smoothChildTiming=Nn(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,i=Lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Ri(n,i,i._start-i._delay),i=s;return Ri(Lt,n,0),n},context:function(e,t){return e?new Hh(e,t):Ct},matchMedia:function(e){return new Kv(e)},matchMediaRefresh:function(){return kr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ql()},addEventListener:function(e,t){var n=vo[e]||(vo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=vo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:bv,wrapYoyo:Av,distribute:Eh,random:Ah,snap:bh,normalize:Ev,getUnit:gn,clamp:Sv,splitColor:Dh,toArray:ci,selector:$l,mapRange:Rh,pipe:yv,unitize:Tv,interpolate:wv,shuffle:Th},install:fh,effects:wl,ticker:$n,updateRoot:Un.updateRoot,plugins:qn,globalTimeline:Lt,core:{PropTween:Bn,globals:hh,Tween:Kt,Timeline:Un,Animation:wa,getCache:Or,_removeLinkedListItem:Xo,reverting:function(){return un},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return Sc=e}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Io[r]=Kt[r]});$n.add(Un.updateRoot);vs=Io.to({},{duration:0});var $v=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Zv=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=$v(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ll=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(an(s)&&(l={},On(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Zv(o,s)}}}},kn=Io.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ll("roundProps",Zl),Ll("modifiers"),Ll("snap",bh))||Io;Kt.version=Un.version=kn.version="3.15.0";uh=1;yc()&&Us();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var af,cr,Es,Ic,Ir,of,Uc,Jv=function(){return typeof window<"u"},$i={},Cr=180/Math.PI,bs=Math.PI/180,fs=Math.atan2,lf=1e8,Nc=/([A-Z])/g,Qv=/(left|right|width|margin|padding|x)/i,jv=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Wh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},rS=function(e,t,n){return e.style[t]=n},sS=function(e,t,n){return e.style.setProperty(t,n)},aS=function(e,t,n){return e._gsap[t]=n},oS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},lS=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},cS=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},It="transform",Gn=It+"Origin",uS=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in $i&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Vi(i,o)}):this.tfm[e]=a.x?a[e]:Vi(i,e),e===Gn&&(this.tfm.zOrigin=a.zOrigin);else return Ci.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(It)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=It}(s||t)&&this.props.push(e,t,s[e])},qh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},fS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Nc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Uc(),(!s||!s.isStart)&&!n[It]&&(qh(n),i.zOrigin&&n[Gn]&&(n[Gn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Yh=function(e,t){var n={target:e,props:[],revert:fS,save:uS};return e._gsap||kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Kh,ec=function(e,t){var n=cr.createElementNS?cr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cr.createElement(e);return n&&n.style?n:cr.createElement(e)},Qn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Nc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ns(t)||t,1)||""},cf="O,Moz,ms,Ms,Webkit".split(","),Ns=function(e,t,n){var i=t||Ir,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(cf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?cf[a]:"")+e},tc=function(){Jv()&&window.document&&(af=window,cr=af.document,Es=cr.documentElement,Ir=ec("div")||{style:{}},ec("div"),It=Ns(It),Gn=It+"Origin",Ir.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kh=!!Ns("perspective"),Uc=kn.core.reverting,Ic=1)},uf=function(e){var t=e.ownerSVGElement,n=ec("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Es.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Es.removeChild(n),s},ff=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},$h=function(e){var t,n;try{t=e.getBBox()}catch{t=uf(e),n=1}return t&&(t.width||t.height)||n||(t=uf(e)),t&&!t.width&&!t.x&&!t.y?{x:+ff(e,["x","cx","x1"])||0,y:+ff(e,["y","cy","y1"])||0,width:0,height:0}:t},Zh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&$h(e))},xr=function(e,t){if(t){var n=e.style,i;t in $i&&t!==Gn&&(t=It),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Nc,"-$1").toLowerCase())):n.removeAttribute(t)}},ur=function(e,t,n,i,s,a){var o=new Bn(e._pt,t,n,0,1,a?Xh:Wh);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},hf={deg:1,rad:1,turn:1},hS={grid:1,flex:1},vr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ir.style,l=Qv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",_,g,m,p;if(i===a||!s||hf[i]||hf[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Zh(e),(h||a==="%")&&($i[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Vt(h?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(f?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===cr||!g.appendChild)&&(g=cr.body),m=g._gsap,m&&h&&m.width&&l&&m.time===$n.time&&!m.uncache)return Vt(s/m.width*d);if(h&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=d+i,_=e[u],T?e.style[t]=T:xr(e,t)}else(h||a==="%")&&!hS[Qn(g,"display")]&&(o.position=Qn(e,"position")),g===e&&(o.position="static"),g.appendChild(Ir),_=Ir[u],g.removeChild(Ir),o.position="absolute";return l&&h&&(m=Or(g),m.time=$n.time,m.width=g[u]),Vt(f?_*s/d:_&&s?d/_*s:0)},Vi=function(e,t,n,i){var s;return Ic||tc(),t in Ci&&t!=="transform"&&(t=Ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),$i[t]&&t!=="transform"?(s=Ca(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:No(Qn(e,Gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Uo[t]&&Uo[t](e,t,n)||Qn(e,t)||ph(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?vr(e,t,s,n)+n:s},dS=function(e,t,n,i){if(!n||n==="none"){var s=Ns(t,e,1),a=s&&Qn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Qn(e,"borderTopColor"))}var o=new Bn(this._pt,e.style,t,0,1,zh),l=0,c=0,u,d,f,h,_,g,m,p,T,w,S,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Qn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Qn(e,t)||i,g?e.style[t]=g:xr(e,t)),u=[n,i],Fh(u),n=u[0],i=u[1],f=n.match(xs)||[],E=i.match(xs)||[],E.length){for(;d=xs.exec(i);)m=d[0],T=i.substring(l,d.index),_?_=(_+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(h=parseFloat(g)||0,S=g.substr((h+"").length),m.charAt(1)==="="&&(m=Ts(h,m)+S),p=parseFloat(m),w=m.substr((p+"").length),l=xs.lastIndex-w.length,w||(w=w||jn.units[t]||S,l===i.length&&(i+=w,o.e+=w)),S!==w&&(h=vr(e,t,g,w)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:h,c:p-h,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Xh:Wh;return ch.test(i)&&(o.e=0),this._pt=o,o},df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=df[n]||n,t[1]=df[i]||i,t.join(" ")},mS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],$i[o]&&(l=1,o=o==="transformOrigin"?Gn:It),xr(n,o);l&&(xr(n,It),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ca(n,1),a.uncache=1,qh(i)))}},Uo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Bn(e._pt,t,n,0,0,mS);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ra=[1,0,0,1,0,0],Jh={},Qh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pf=function(e){var t=Qn(e,It);return Qh(t)?Ra:t.substr(7).match(lh).map(Vt)},Oc=function(e,t){var n=e._gsap||Or(e),i=e.style,s=pf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ra:s):(s===Ra&&!e.offsetParent&&e!==Es&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Es.appendChild(e)),s=pf(e),l?i.display=l:xr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Es.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nc=function(e,t,n,i,s,a){var o=e._gsap,l=s||Oc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],_=l[1],g=l[2],m=l[3],p=l[4],T=l[5],w=t.split(" "),S=parseFloat(w[0])||0,E=parseFloat(w[1])||0,A,b,x,M;n?l!==Ra&&(b=h*m-_*g)&&(x=S*(m/b)+E*(-g/b)+(g*T-m*p)/b,M=S*(-_/b)+E*(h/b)-(h*T-_*p)/b,S=x,E=M):(A=$h(e),S=A.x+(~w[0].indexOf("%")?S/100*A.width:S),E=A.y+(~(w[1]||w[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(p=S-c,T=E-u,o.xOffset=d+(p*h+T*g)-p,o.yOffset=f+(p*_+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Gn]="0px 0px",a&&(ur(a,o,"xOrigin",c,S),ur(a,o,"yOrigin",u,E),ur(a,o,"xOffset",d,o.xOffset),ur(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+E)},Ca=function(e,t){var n=e._gsap||new Uh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Qn(e,Gn)||"0",u,d,f,h,_,g,m,p,T,w,S,E,A,b,x,M,R,L,P,V,W,U,X,I,K,ee,D,le,ge,Ye,He,Oe;return u=d=f=g=m=p=T=w=S=0,h=_=1,n.svg=!!(e.getCTM&&Zh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),i.scale=i.rotate=i.translate="none"),b=Oc(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",I=""):I=!t&&e.getAttribute("data-svg-origin"),nc(e,I||c,!!I||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,A=n.yOrigin||0,b!==Ra&&(L=b[0],P=b[1],V=b[2],W=b[3],u=U=b[4],d=X=b[5],b.length===6?(h=Math.sqrt(L*L+P*P),_=Math.sqrt(W*W+V*V),g=L||P?fs(P,L)*Cr:0,T=V||W?fs(V,W)*Cr+g:0,T&&(_*=Math.abs(Math.cos(T*bs))),n.svg&&(u-=E-(E*L+A*V),d-=A-(E*P+A*W))):(Oe=b[6],Ye=b[7],D=b[8],le=b[9],ge=b[10],He=b[11],u=b[12],d=b[13],f=b[14],x=fs(Oe,ge),m=x*Cr,x&&(M=Math.cos(-x),R=Math.sin(-x),I=U*M+D*R,K=X*M+le*R,ee=Oe*M+ge*R,D=U*-R+D*M,le=X*-R+le*M,ge=Oe*-R+ge*M,He=Ye*-R+He*M,U=I,X=K,Oe=ee),x=fs(-V,ge),p=x*Cr,x&&(M=Math.cos(-x),R=Math.sin(-x),I=L*M-D*R,K=P*M-le*R,ee=V*M-ge*R,He=W*R+He*M,L=I,P=K,V=ee),x=fs(P,L),g=x*Cr,x&&(M=Math.cos(x),R=Math.sin(x),I=L*M+P*R,K=U*M+X*R,P=P*M-L*R,X=X*M-U*R,L=I,U=K),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),h=Vt(Math.sqrt(L*L+P*P+V*V)),_=Vt(Math.sqrt(X*X+Oe*Oe)),x=fs(U,X),T=Math.abs(x)>2e-4?x*Cr:0,S=He?1/(He<0?-He:He):0),n.svg&&(I=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Qh(Qn(e,It)),I&&e.setAttribute("transform",I))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(h*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Vt(h),n.scaleY=Vt(_),n.rotation=Vt(g)+o,n.rotationX=Vt(m)+o,n.rotationY=Vt(p)+o,n.skewX=T+o,n.skewY=w+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Gn]=No(c)),n.xOffset=n.yOffset=0,n.force3D=jn.force3D,n.renderTransform=n.svg?gS:Kh?jh:_S,n.uncache=0,n},No=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fl=function(e,t,n){var i=gn(t);return Vt(parseFloat(t)+parseFloat(vr(e,"x",n+"px",i)))+i},_S=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jh(e,t)},Ar="0deg",$s="0px",wr=") ",jh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,w=n.zOrigin,S="",E=p==="auto"&&e&&e!==1||p===!0;if(w&&(d!==Ar||u!==Ar)){var A=parseFloat(u)*bs,b=Math.sin(A),x=Math.cos(A),M;A=parseFloat(d)*bs,M=Math.cos(A),a=Fl(T,a,b*M*-w),o=Fl(T,o,-Math.sin(A)*-w),l=Fl(T,l,x*M*-w+w)}m!==$s&&(S+="perspective("+m+wr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(E||a!==$s||o!==$s||l!==$s)&&(S+=l!==$s||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+wr),c!==Ar&&(S+="rotate("+c+wr),u!==Ar&&(S+="rotateY("+u+wr),d!==Ar&&(S+="rotateX("+d+wr),(f!==Ar||h!==Ar)&&(S+="skew("+f+", "+h+wr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+wr),T.style[It]=S||"translate(0, 0)"},gS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,w=parseFloat(a),S=parseFloat(o),E,A,b,x,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=bs,c*=bs,E=Math.cos(l)*d,A=Math.sin(l)*d,b=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=bs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,x*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),E*=M,A*=M)),E=Vt(E),A=Vt(A),b=Vt(b),x=Vt(x)):(E=d,x=f,A=b=0),(w&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(w=vr(h,"x",a,"px"),S=vr(h,"y",o,"px")),(_||g||m||p)&&(w=Vt(w+_-(_*E+g*b)+m),S=Vt(S+g-(_*A+g*x)+p)),(i||s)&&(M=h.getBBox(),w=Vt(w+i/100*M.width),S=Vt(S+s/100*M.height)),M="matrix("+E+","+A+","+b+","+x+","+w+","+S+")",h.setAttribute("transform",M),T&&(h.style[It]=M)},xS=function(e,t,n,i,s){var a=360,o=an(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Cr:1),c=l-i,u=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*lf)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*lf)%a-~~(c/a)*a)),e._pt=f=new Bn(e._pt,t,n,i,c,eS),f.e=u,f.u="deg",e._props.push(n),f},mf=function(e,t){for(var n in t)e[n]=t[n];return e},vS=function(e,t,n){var i=mf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,f,h,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[It]=t,o=Ca(n,1),xr(n,It),n.setAttribute("transform",c)):(c=getComputedStyle(n)[It],a[It]=t,o=Ca(n,1),a[It]=c);for(l in $i)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=gn(c),_=gn(u),d=h!==_?vr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Bn(e._pt,o,l,d,f-d,jl),e._pt.u=_||0,e._props.push(l));mf(o,i)};On("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Uo[e>1?"border"+r:r]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(_){return Vi(o,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(_,g){return h[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,h,d)}});var ed={name:"css",register:tc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,f,h,_,g,m,p,T,w,S,E,A,b,x,M;Ic||tc(),this.styles=this.styles||Yh(e),x=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(qn[g]&&Nh(g,t,n,i,e,s)))){if(h=typeof u,_=Uo[g],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ba(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",pr.lastIndex=0,pr.test(c)||(m=gn(c),p=gn(u),p?m!==p&&(c=vr(e,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),x.push(g,0,o[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],an(c)&&~c.indexOf("random(")&&(c=ba(c)),gn(c+"")||c==="auto"||(c+=jn.units[g]||gn(Vi(e,g))||""),(c+"").charAt(1)==="="&&(c=Vi(e,g))):c=Vi(e,g),f=parseFloat(c),T=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),d=parseFloat(u),g in Ci&&(g==="autoAlpha"&&(f===1&&Vi(e,"visibility")==="hidden"&&d&&(f=0),x.push("visibility",0,o.visibility),ur(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Ci[g],~g.indexOf(",")&&(g=g.split(",")[0]))),w=g in $i,w){if(this.styles.save(g),M=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Qn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=Qn(e,"perspective"),R?e.style.perspective=R:xr(e,"perspective")}d=parseFloat(u)}if(S||(E=e._gsap,E.renderTransform&&!t.parseTransform||Ca(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,S=this._pt=new Bn(this._pt,o,It,0,1,E.renderTransform,E,0,-1),S.dep=1),g==="scale")this._pt=new Bn(this._pt,E,"scaleY",E.scaleY,(T?Ts(E.scaleY,T+d):d)-E.scaleY||0,jl),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){x.push(Gn,0,o[Gn]),u=pS(u),E.svg?nc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&ur(this,E,"zOrigin",E.zOrigin,p),ur(this,o,g,No(c),No(u)));continue}else if(g==="svgOrigin"){nc(e,u,1,A,0,this);continue}else if(g in Jh){xS(this,E,g,f,T?Ts(f,T+u):u);continue}else if(g==="smoothOrigin"){ur(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){vS(this,u,e);continue}}else g in o||(g=Ns(g)||g);if(w||(d||d===0)&&(f||f===0)&&!jv.test(u)&&g in o)m=(c+"").substr((f+"").length),d||(d=0),p=gn(u)||(g in jn.units?jn.units[g]:m),m!==p&&(f=vr(e,g,c,p)),this._pt=new Bn(this._pt,w?E:o,g,f,(T?Ts(f,T+d):d)-f,!w&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?iS:jl),this._pt.u=p||0,w&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=nS):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=tS);else if(g in o)dS.call(this,e,g,c,T?T+u:u);else if(g in e)this.add(e,g,c||e[g],T?T+u:u,i,s);else if(g!=="parseTransform"){Ec(g,u);continue}w||(g in o?x.push(g,0,o[g]):typeof e[g]=="function"?x.push(g,2,e[g]()):x.push(g,1,c||e[g])),a.push(g)}}b&&Vh(this)},render:function(e,t){if(t.tween._time||!Uc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Vi,aliases:Ci,getSetter:function(e,t,n){var i=Ci[t];return i&&i.indexOf(",")<0&&(t=i),t in $i&&t!==Gn&&(e._gsap.x||Vi(e,"x"))?n&&of===n?t==="scale"?oS:aS:(of=n||{})&&(t==="scale"?lS:cS):e.style&&!Mc(e.style[t])?rS:~t.indexOf("-")?sS:Lc(e,t)},core:{_removeProperty:xr,_getMatrix:Oc}};kn.utils.checkPrefix=Ns;kn.core.getStyleSaver=Yh;(function(r,e,t,n){var i=On(r+","+e+","+t,function(s){$i[s]=1});On(e,function(s){jn.units[s]="deg",Jh[s]=1}),Ci[i[13]]=r+","+e,On(n,function(s){var a=s.split(":");Ci[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){jn.units[r]="px"});kn.registerPlugin(ed);var _i=kn.registerPlugin(ed)||kn;_i.core.Tween;function SS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function MS(r,e,t){return e&&SS(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ln,So,Zn,fr,hr,As,td,Pr,ws,nd,Wi,gi,id,rd=function(){return ln||typeof window<"u"&&(ln=window.gsap)&&ln.registerPlugin&&ln},sd=1,Ss=[],nt=[],Fi=[],ha=Date.now,ic=function(e,t){return t},yS=function(){var e=ws.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,Fi),nt=n,Fi=i,ic=function(a,o){return t[a](o)}},mr=function(e,t){return~Fi.indexOf(e)&&Fi[Fi.indexOf(e)+1][t]},da=function(e){return!!~nd.indexOf(e)},bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},no="scrollLeft",io="scrollTop",rc=function(){return Wi&&Wi.isPressed||nt.cache++},Oo=function(e,t){var n=function i(s){if(s||s===0){sd&&(Zn.history.scrollRestoration="manual");var a=Wi&&Wi.isPressed;s=i.v=Math.round(s)||(Wi&&Wi.iOS?1:0),e(s),i.cacheID=nt.cache,a&&ic("ss",s)}else(t||nt.cache!==i.cacheID||ic("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Pn={s:no,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Oo(function(r){return arguments.length?Zn.scrollTo(r,Jt.sc()):Zn.pageXOffset||fr[no]||hr[no]||As[no]||0})},Jt={s:io,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Pn,sc:Oo(function(r){return arguments.length?Zn.scrollTo(Pn.sc(),r):Zn.pageYOffset||fr[io]||hr[io]||As[io]||0})},Fn=function(e,t){return(t&&t._ctx&&t._ctx.selector||ln.utils.toArray)(e)[0]||(typeof e=="string"&&ln.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},TS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Sr=function(e,t){var n=t.s,i=t.sc;da(e)&&(e=fr.scrollingElement||hr);var s=nt.indexOf(e),a=i===Jt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+a]||bn(e,"scroll",rc);var o=nt[s+a],l=o||(nt[s+a]=Oo(mr(e,n),!0)||(da(e)?i:Oo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=ln.getProperty(e,"scrollBehavior")==="smooth"),l},sc=function(e,t,n){var i=e,s=e,a=ha(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=ha();g||m-a>l?(s=i,i=_,o=a,a=m):n?i+=_:i=s+(_-s)/(m-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(_){var g=o,m=s,p=ha();return(_||_===0)&&_!==i&&u(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:d,getVelocity:f}},Zs=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},_f=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ad=function(){ws=ln.core.globals().ScrollTrigger,ws&&ws.core&&yS()},od=function(e){return ln=e||rd(),!So&&ln&&typeof document<"u"&&document.body&&(Zn=window,fr=document,hr=fr.documentElement,As=fr.body,nd=[Zn,fr,hr,As],ln.utils.clamp,id=ln.core.context||function(){},Pr="onpointerenter"in As?"pointer":"mouse",td=Ht.isTouch=Zn.matchMedia&&Zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gi=Ht.eventTypes=("ontouchstart"in hr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in hr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return sd=0},500),So=1),ws||ad(),So};Pn.op=Jt;nt.cache=0;var Ht=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){So||od(ln)||console.warn("Please gsap.registerPlugin(Observer)"),ws||ad();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,T=n.onDrag,w=n.onPress,S=n.onRelease,E=n.onRight,A=n.onLeft,b=n.onUp,x=n.onDown,M=n.onChangeX,R=n.onChangeY,L=n.onChange,P=n.onToggleX,V=n.onToggleY,W=n.onHover,U=n.onHoverEnd,X=n.onMove,I=n.ignoreCheck,K=n.isNormalizer,ee=n.onGestureStart,D=n.onGestureEnd,le=n.onWheel,ge=n.onEnable,Ye=n.onDisable,He=n.onClick,Oe=n.scrollSpeed,Z=n.capture,ae=n.allowClicks,ie=n.lockAxis,we=n.onLockAxis;this.target=o=Fn(o)||hr,this.vars=n,h&&(h=ln.utils.toArray(h)),i=i||1e-9,s=s||0,_=_||1,Oe=Oe||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Zn.getComputedStyle(As).lineHeight)||22);var Ne,Ee,rt,ye,Be,Ve,ze,q=this,ut=0,_t=0,Et=n.passive||!u&&n.passive!==!1,We=Sr(o,Pn),ht=Sr(o,Jt),N=We(),Ut=ht(),Ge=~a.indexOf("touch")&&!~a.indexOf("pointer")&&gi[0]==="pointerdown",C=da(o),v=o.ownerDocument||fr,B=[0,0,0],z=[0,0,0],$=0,ue=function(){return $=ha()},oe=function(ne,Ie){return(q.event=ne)&&h&&TS(ne.target,h)||Ie&&Ge&&ne.pointerType!=="touch"||I&&I(ne,Ie)},J=function(){q._vx.reset(),q._vy.reset(),Ee.pause(),d&&d(q)},Q=function(){var ne=q.deltaX=_f(B),Ie=q.deltaY=_f(z),se=Math.abs(ne)>=i,Ue=Math.abs(Ie)>=i;L&&(se||Ue)&&L(q,ne,Ie,B,z),se&&(E&&q.deltaX>0&&E(q),A&&q.deltaX<0&&A(q),M&&M(q),P&&q.deltaX<0!=ut<0&&P(q),ut=q.deltaX,B[0]=B[1]=B[2]=0),Ue&&(x&&q.deltaY>0&&x(q),b&&q.deltaY<0&&b(q),R&&R(q),V&&q.deltaY<0!=_t<0&&V(q),_t=q.deltaY,z[0]=z[1]=z[2]=0),(ye||rt)&&(X&&X(q),rt&&(m&&rt===1&&m(q),T&&T(q),rt=0),ye=!1),Ve&&!(Ve=!1)&&we&&we(q),Be&&(le(q),Be=!1),Ne=0},de=function(ne,Ie,se){B[se]+=ne,z[se]+=Ie,q._vx.update(ne),q._vy.update(Ie),c?Ne||(Ne=requestAnimationFrame(Q)):Q()},Ae=function(ne,Ie){ie&&!ze&&(q.axis=ze=Math.abs(ne)>Math.abs(Ie)?"x":"y",Ve=!0),ze!=="y"&&(B[2]+=ne,q._vx.update(ne,!0)),ze!=="x"&&(z[2]+=Ie,q._vy.update(Ie,!0)),c?Ne||(Ne=requestAnimationFrame(Q)):Q()},pe=function(ne){if(!oe(ne,1)){ne=Zs(ne,u);var Ie=ne.clientX,se=ne.clientY,Ue=Ie-q.x,Re=se-q.y,Xe=q.isDragging;q.x=Ie,q.y=se,(Xe||(Ue||Re)&&(Math.abs(q.startX-Ie)>=s||Math.abs(q.startY-se)>=s))&&(rt||(rt=Xe?2:1),Xe||(q.isDragging=!0),Ae(Ue,Re))}},he=q.onPress=function(re){oe(re,1)||re&&re.button||(q.axis=ze=null,Ee.pause(),q.isPressed=!0,re=Zs(re),ut=_t=0,q.startX=q.x=re.clientX,q.startY=q.y=re.clientY,q._vx.reset(),q._vy.reset(),bn(K?o:v,gi[1],pe,Et,!0),q.deltaX=q.deltaY=0,w&&w(q))},ce=q.onRelease=function(re){if(!oe(re,1)){Tn(K?o:v,gi[1],pe,!0);var ne=!isNaN(q.y-q.startY),Ie=q.isDragging,se=Ie&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Ue=Zs(re);!se&&ne&&(q._vx.reset(),q._vy.reset(),u&&ae&&ln.delayedCall(.08,function(){if(ha()-$>300&&!re.defaultPrevented){if(re.target.click)re.target.click();else if(v.createEvent){var Re=v.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,Zn,1,Ue.screenX,Ue.screenY,Ue.clientX,Ue.clientY,!1,!1,!1,!1,0,null),re.target.dispatchEvent(Re)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,d&&Ie&&!K&&Ee.restart(!0),rt&&Q(),p&&Ie&&p(q),S&&S(q,se)}},Pe=function(ne){return ne.touches&&ne.touches.length>1&&(q.isGesturing=!0)&&ee(ne,q.isDragging)},Fe=function(){return(q.isGesturing=!1)||D(q)},F=function(ne){if(!oe(ne)){var Ie=We(),se=ht();de((Ie-N)*Oe,(se-Ut)*Oe,1),N=Ie,Ut=se,d&&Ee.restart(!0)}},fe=function(ne){if(!oe(ne)){ne=Zs(ne,u),le&&(Be=!0);var Ie=(ne.deltaMode===1?l:ne.deltaMode===2?Zn.innerHeight:1)*_;de(ne.deltaX*Ie,ne.deltaY*Ie,0),d&&!K&&Ee.restart(!0)}},j=function(ne){if(!oe(ne)){var Ie=ne.clientX,se=ne.clientY,Ue=Ie-q.x,Re=se-q.y;q.x=Ie,q.y=se,ye=!0,d&&Ee.restart(!0),(Ue||Re)&&Ae(Ue,Re)}},me=function(ne){q.event=ne,W(q)},_e=function(ne){q.event=ne,U(q)},te=function(ne){return oe(ne)||Zs(ne,u)&&He(q)};Ee=q._dc=ln.delayedCall(f||.25,J).pause(),q.deltaX=q.deltaY=0,q._vx=sc(0,50,!0),q._vy=sc(0,50,!0),q.scrollX=We,q.scrollY=ht,q.isDragging=q.isGesturing=q.isPressed=!1,id(this),q.enable=function(re){return q.isEnabled||(bn(C?v:o,"scroll",rc),a.indexOf("scroll")>=0&&bn(C?v:o,"scroll",F,Et,Z),a.indexOf("wheel")>=0&&bn(o,"wheel",fe,Et,Z),(a.indexOf("touch")>=0&&td||a.indexOf("pointer")>=0)&&(bn(o,gi[0],he,Et,Z),bn(v,gi[2],ce),bn(v,gi[3],ce),ae&&bn(o,"click",ue,!0,!0),He&&bn(o,"click",te),ee&&bn(v,"gesturestart",Pe),D&&bn(v,"gestureend",Fe),W&&bn(o,Pr+"enter",me),U&&bn(o,Pr+"leave",_e),X&&bn(o,Pr+"move",j)),q.isEnabled=!0,q.isDragging=q.isGesturing=q.isPressed=ye=rt=!1,q._vx.reset(),q._vy.reset(),N=We(),Ut=ht(),re&&re.type&&he(re),ge&&ge(q)),q},q.disable=function(){q.isEnabled&&(Ss.filter(function(re){return re!==q&&da(re.target)}).length||Tn(C?v:o,"scroll",rc),q.isPressed&&(q._vx.reset(),q._vy.reset(),Tn(K?o:v,gi[1],pe,!0)),Tn(C?v:o,"scroll",F,Z),Tn(o,"wheel",fe,Z),Tn(o,gi[0],he,Z),Tn(v,gi[2],ce),Tn(v,gi[3],ce),Tn(o,"click",ue,!0),Tn(o,"click",te),Tn(v,"gesturestart",Pe),Tn(v,"gestureend",Fe),Tn(o,Pr+"enter",me),Tn(o,Pr+"leave",_e),Tn(o,Pr+"move",j),q.isEnabled=q.isPressed=q.isDragging=!1,Ye&&Ye(q))},q.kill=q.revert=function(){q.disable();var re=Ss.indexOf(q);re>=0&&Ss.splice(re,1),Wi===q&&(Wi=0)},Ss.push(q),K&&da(o)&&(Wi=q),q.enable(g)},MS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ht.version="3.15.0";Ht.create=function(r){return new Ht(r)};Ht.register=od;Ht.getAll=function(){return Ss.slice()};Ht.getById=function(r){return Ss.filter(function(e){return e.vars.id===r})[0]};rd()&&ln.registerPlugin(Ht);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var be,_s,tt,pt,Kn,dt,Bc,Bo,Pa,pa,na,ro,mn,Ko,ac,Rn,gf,xf,gs,ld,Il,cd,wn,oc,ud,fd,sr,lc,Gc,Rs,kc,ma,cc,Ul,so=1,_n=Date.now,Nl=_n(),ui=0,ia=0,vf=function(e,t,n){var i=Xn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Sf=function(e,t){return t&&(!Xn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ES=function r(){return ia&&requestAnimationFrame(r)},Mf=function(){return Ko=1},yf=function(){return Ko=0},Ai=function(e){return e},ra=function(e){return Math.round(e*1e5)/1e5||0},hd=function(){return typeof window<"u"},dd=function(){return be||hd()&&(be=window.gsap)&&be.registerPlugin&&be},Wr=function(e){return!!~Bc.indexOf(e)},pd=function(e){return(e==="Height"?kc:tt["inner"+e])||Kn["client"+e]||dt["client"+e]},md=function(e){return mr(e,"getBoundingClientRect")||(Wr(e)?function(){return bo.width=tt.innerWidth,bo.height=kc,bo}:function(){return Hi(e)})},bS=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=mr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?pd(s):e["client"+s])||0}},AS=function(e,t){return!t||~Fi.indexOf(e)?md(e):function(){return bo}},Pi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=mr(e,n))?a()-md(e)()[s]:Wr(e)?(Kn[n]||dt[n])-pd(i):e[n]-e["offset"+i])},ao=function(e,t){for(var n=0;n<gs.length;n+=3)(!t||~t.indexOf(gs[n+1]))&&e(gs[n],gs[n+1],gs[n+2])},Xn=function(e){return typeof e=="string"},xn=function(e){return typeof e=="function"},sa=function(e){return typeof e=="number"},Dr=function(e){return typeof e=="object"},Js=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},hs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ds=Math.abs,_d="left",gd="top",zc="right",Vc="bottom",zr="width",Vr="height",_a="Right",ga="Left",xa="Top",va="Bottom",Yt="padding",ai="margin",Os="Width",Hc="Height",Zt="px",oi=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},wS=function(e){var t=oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Tf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hi=function(e,t){var n=t&&oi(e)[ac]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Go=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},xd=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},RS=function(e){return function(t){return be.utils.snap(xd(e),t)}},Wc=function(e){var t=be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},CS=function(e){return function(t,n){return Wc(xd(e))(t,n.direction)}},oo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},lo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ef={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},co={toggleActions:"play",anticipatePin:0},ko={top:0,left:0,center:.5,bottom:1,right:1},Mo=function(e,t){if(Xn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ko?ko[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},uo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,_=pt.createElement("div"),g=Wr(n)||mr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?dt:n.tagName==="IFRAME"?n.contentDocument.body:n,T=e.indexOf("start")!==-1,w=T?c:u,S="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(S+=(i===Jt?zc:Vc)+":"+(a+parseFloat(f))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=T,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],yo(_,0,i,T),_},yo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Os]=1,s["border"+o+Os]=0,s[n.p]=t+"px",be.set(e,s)},Qe=[],uc={},Da,bf=function(){return _n()-ui>34&&(Da||(Da=requestAnimationFrame(qi)))},ps=function(){(!wn||!wn.isPressed||wn.startX>dt.clientWidth)&&(nt.cache++,wn?Da||(Da=requestAnimationFrame(qi)):qi(),ui||qr("scrollStart"),ui=_n())},Ol=function(){fd=tt.innerWidth,ud=tt.innerHeight},aa=function(e){nt.cache++,(e===!0||!mn&&!cd&&!pt.fullscreenElement&&!pt.webkitFullscreenElement&&(!oc||fd!==tt.innerWidth||Math.abs(tt.innerHeight-ud)>tt.innerHeight*.25))&&Bo.restart(!0)},Xr={},PS=[],vd=function r(){return rn(it,"scrollEnd",r)||Ur(!0)},qr=function(e){return Xr[e]&&Xr[e].map(function(t){return t()})||PS},Wn=[],Sd=function(e){for(var t=0;t<Wn.length;t+=5)(!e||Wn[t+4]&&Wn[t+4].query===e)&&(Wn[t].style.cssText=Wn[t+1],Wn[t].getBBox&&Wn[t].setAttribute("transform",Wn[t+2]||""),Wn[t+3].uncache=1)},Md=function(){return nt.forEach(function(e){return xn(e)&&++e.cacheID&&(e.rec=e())})},Xc=function(e,t){var n;for(Rn=0;Rn<Qe.length;Rn++)n=Qe[Rn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ma=!0,t&&Sd(t),t||qr("revert")},yd=function(e,t){nt.cache++,(t||!Cn)&&nt.forEach(function(n){return xn(n)&&n.cacheID++&&(n.rec=0)}),Xn(e)&&(tt.history.scrollRestoration=Gc=e)},Cn,Hr=0,Af,DS=function(){if(Af!==Hr){var e=Af=Hr;requestAnimationFrame(function(){return e===Hr&&Ur(!0)})}},Td=function(){dt.appendChild(Rs),kc=!wn&&Rs.offsetHeight||tt.innerHeight,dt.removeChild(Rs)},wf=function(e){return Pa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ur=function(e,t){if(Kn=pt.documentElement,dt=pt.body,Bc=[tt,pt,Kn,dt],ui&&!e&&!ma){sn(it,"scrollEnd",vd);return}Td(),Cn=it.isRefreshing=!0,ma||Md();var n=qr("refreshInit");ld&&it.sort(),t||Xc(),nt.forEach(function(i){xn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qe.slice(0).forEach(function(i){return i.refresh()}),ma=!1,Qe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),cc=1,wf(!0),Qe.forEach(function(i){var s=Pi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),wf(!1),cc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){xn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),yd(Gc,1),Bo.pause(),Hr++,Cn=2,qi(2),Qe.forEach(function(i){return xn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Cn=it.isRefreshing=!1,qr("refresh")},fc=0,To=1,Sa,qi=function(e){if(e===2||!Cn&&!ma){it.isUpdating=!0,Sa&&Sa.update(0);var t=Qe.length,n=_n(),i=n-Nl>=50,s=t&&Qe[0].scroll();if(To=fc>s?-1:1,Cn||(fc=s),i&&(ui&&!Ko&&n-ui>200&&(ui=0,qr("scrollEnd")),na=Nl,Nl=n),To<0){for(Rn=t;Rn-- >0;)Qe[Rn]&&Qe[Rn].update(0,i);To=1}else for(Rn=0;Rn<t;Rn++)Qe[Rn]&&Qe[Rn].update(0,i);it.isUpdating=!1}Da=0},hc=[_d,gd,Vc,zc,ai+va,ai+_a,ai+xa,ai+ga,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Eo=hc.concat([zr,Vr,"boxSizing","max"+Os,"max"+Hc,"position",ai,Yt,Yt+xa,Yt+_a,Yt+va,Yt+ga]),LS=function(e,t,n){Cs(n);var i=e._gsap;if(i.spacerIsNative)Cs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Bl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=hc.length,a=t.style,o=e.style,l;s--;)l=hc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Vc]=o[zc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[zr]=Go(e,Pn)+Zt,a[Vr]=Go(e,Jt)+Zt,a[Yt]=o[ai]=o[gd]=o[_d]="0",Cs(i),o[zr]=o["max"+Os]=n[zr],o[Vr]=o["max"+Hc]=n[Vr],o[Yt]=n[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},FS=/([A-Z])/g,Cs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(FS,"-$1").toLowerCase())}},fo=function(e){for(var t=Eo.length,n=e.style,i=[],s=0;s<t;s++)i.push(Eo[s],n[Eo[s]]);return i.t=e,i},IS=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},bo={left:0,top:0},Rf=function(e,t,n,i,s,a,o,l,c,u,d,f,h,_){xn(e)&&(e=e(l)),Xn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Mo("0"+e.substr(3),n):0));var g=h?h.time():0,m,p,T;if(h&&h.seek(0),isNaN(e)||(e=+e),sa(e))h&&(e=be.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&yo(o,n,i,!0);else{xn(t)&&(t=t(l));var w=(e||"0").split(" "),S,E,A,b;T=Fn(t,l)||dt,S=Hi(T)||{},(!S||!S.left&&!S.top)&&oi(T).display==="none"&&(b=T.style.display,T.style.display="block",S=Hi(T),b?T.style.display=b:T.style.removeProperty("display")),E=Mo(w[0],S[i.d]),A=Mo(w[1]||"0",n),e=S[i.p]-c[i.p]-u+E+s-A,o&&yo(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var x=e+n,M=a._isStart;m="scroll"+i.d2,yo(a,x,i,M&&x>20||!M&&(d?Math.max(dt[m],Kn[m]):a.parentNode[m])<=x+1),d&&(c=Hi(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Zt))}return h&&T&&(m=Hi(T),h.seek(f),p=Hi(T),h._caScrollDist=m[i.p]-p[i.p],e=e/h._caScrollDist*f),h&&h.seek(g),h?e:Math.round(e)},US=/(webkit|moz|length|cssText|inset)/i,Cf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===dt){e._stOrig=s.cssText,o=oi(e);for(a in o)!+a&&!US.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},Ed=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},ho=function(e,t,n){var i={};i[t.p]="+="+n,be.set(e,i)},Pf=function(e,t){var n=Sr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,_={};c=c||n();var g=Ed(n,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,a.tween&&qi()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=be.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},sn(e,"wheel",n.wheelHandler),it.isTouch&&sn(e,"touchmove",n.wheelHandler),s},it=(function(){function r(t,n){_s||r.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),lc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ia){this.update=this.refresh=this.kill=Ai;return}n=Tf(Xn(n)||sa(n)||n.nodeType?{trigger:n}:n,co);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,T=s.onSnapComplete,w=s.once,S=s.snap,E=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,x=s.fastScrollEnd,M=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Pn:Jt,L=!d&&d!==0,P=Fn(n.scroller||tt),V=be.core.getCache(P),W=Wr(P),U=("pinType"in n?n.pinType:mr(P,"pinType")||W&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],I=L&&n.toggleActions.split(" "),K="markers"in n?n.markers:co.markers,ee=W?0:parseFloat(oi(P)["border"+R.p2+Os])||0,D=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(D)},ge=bS(P,W,R),Ye=AS(P,W),He=0,Oe=0,Z=0,ae=Sr(P,R),ie,we,Ne,Ee,rt,ye,Be,Ve,ze,q,ut,_t,Et,We,ht,N,Ut,Ge,C,v,B,z,$,ue,oe,J,Q,de,Ae,pe,he,ce,Pe,Fe,F,fe,j,me,_e;if(D._startClamp=D._endClamp=!1,D._dir=R,m*=45,D.scroller=P,D.scroll=b?b.time.bind(b):ae,Ee=ae(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(ld=1,n.refreshPriority===-9999&&(Sa=D)),V.tweenScroll=V.tweenScroll||{top:Pf(P,Jt),left:Pf(P,Pn)},D.tweenTo=ie=V.tweenScroll[R.p],D.scrubDuration=function(se){Pe=sa(se)&&se,Pe?ce?ce.duration(se):ce=be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Pe,paused:!0,onComplete:function(){return p&&p(D)}}):(ce&&ce.progress(1).kill(),ce=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(d),pe=0,l||(l=i.vars.id)),S&&((!Dr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in dt.style&&be.set(W?[dt,Kn]:P,{scrollBehavior:"auto"}),nt.forEach(function(se){return xn(se)&&se.target===(W?pt.scrollingElement||Kn:P)&&(se.smooth=!1)}),Ne=xn(S.snapTo)?S.snapTo:S.snapTo==="labels"?RS(i):S.snapTo==="labelsDirectional"?CS(i):S.directional!==!1?function(se,Ue){return Wc(S.snapTo)(se,_n()-Oe<500?0:Ue.direction)}:be.utils.snap(S.snapTo),Fe=S.duration||{min:.1,max:2},Fe=Dr(Fe)?pa(Fe.min,Fe.max):pa(Fe,Fe),F=be.delayedCall(S.delay||Pe/2||.1,function(){var se=ae(),Ue=_n()-Oe<500,Re=ie.tween;if((Ue||Math.abs(D.getVelocity())<10)&&!Re&&!Ko&&He!==se){var Xe=(se-ye)/We,Wt=i&&!L?i.totalProgress():Xe,et=Ue?0:(Wt-he)/(_n()-na)*1e3||0,wt=be.utils.clamp(-Xe,1-Xe,ds(et/2)*et/.185),en=Xe+(S.inertia===!1?0:wt),Rt,vt,at=S,Mn=at.onStart,bt=at.onInterrupt,fn=at.onComplete;if(Rt=Ne(en,D),sa(Rt)||(Rt=en),vt=Math.max(0,Math.round(ye+Rt*We)),se<=Be&&se>=ye&&vt!==se){if(Re&&!Re._initted&&Re.data<=ds(vt-se))return;S.inertia===!1&&(wt=Rt-Xe),ie(vt,{duration:Fe(ds(Math.max(ds(en-Wt),ds(Rt-Wt))*.185/et/.05||0)),ease:S.ease||"power3",data:ds(vt-se),onInterrupt:function(){return F.restart(!0)&&bt&&hs(D,bt)},onComplete:function(){D.update(),He=ae(),i&&!L&&(ce?ce.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),pe=he=i&&!L?i.totalProgress():D.progress,T&&T(D),fn&&hs(D,fn)}},se,wt*We,vt-se-wt*We),Mn&&hs(D,Mn,ie.tween)}}else D.isActive&&He!==se&&F.restart(!0)}).pause()),l&&(uc[l]=D),f=D.trigger=Fn(f||h!==!0&&h),_e=f&&f._gsap&&f._gsap.stRevert,_e&&(_e=_e(D)),h=h===!0?f:Fn(h),Xn(o)&&(o={targets:f,className:o}),h&&(_===!1||_===ai||(_=!_&&h.parentNode&&h.parentNode.style&&oi(h.parentNode).display==="flex"?!1:Yt),D.pin=h,we=be.core.getCache(h),we.spacer?ht=we.pinState:(A&&(A=Fn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),we.spacerIsNative=!!A,A&&(we.spacerState=fo(A))),we.spacer=Ge=A||pt.createElement("div"),Ge.classList.add("pin-spacer"),l&&Ge.classList.add("pin-spacer-"+l),we.pinState=ht=fo(h)),n.force3D!==!1&&be.set(h,{force3D:!0}),D.spacer=Ge=we.spacer,Ae=oi(h),ue=Ae[_+R.os2],v=be.getProperty(h),B=be.quickSetter(h,R.a,Zt),Bl(h,Ge,Ae),Ut=fo(h)),K){_t=Dr(K)?Tf(K,Ef):Ef,q=uo("scroller-start",l,P,R,_t,0),ut=uo("scroller-end",l,P,R,_t,0,q),C=q["offset"+R.op.d2];var te=Fn(mr(P,"content")||P);Ve=this.markerStart=uo("start",l,te,R,_t,C,0,b),ze=this.markerEnd=uo("end",l,te,R,_t,C,0,b),b&&(me=be.quickSetter([Ve,ze],R.a,Zt)),!U&&!(Fi.length&&mr(P,"fixedMarkers")===!0)&&(wS(W?dt:P),be.set([q,ut],{force3D:!0}),J=be.quickSetter(q,R.a,Zt),de=be.quickSetter(ut,R.a,Zt))}if(b){var re=b.vars.onUpdate,ne=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){D.update(0,0,1),re&&re.apply(b,ne||[])})}if(D.previous=function(){return Qe[Qe.indexOf(D)-1]},D.next=function(){return Qe[Qe.indexOf(D)+1]},D.revert=function(se,Ue){if(!Ue)return D.kill(!0);var Re=se!==!1||!D.enabled,Xe=mn;Re!==D.isReverted&&(Re&&(fe=Math.max(ae(),D.scroll.rec||0),Z=D.progress,j=i&&i.progress()),Ve&&[Ve,ze,q,ut].forEach(function(Wt){return Wt.style.display=Re?"none":"block"}),Re&&(mn=D,D.update(Re)),h&&(!E||!D.isActive)&&(Re?LS(h,Ge,ht):Bl(h,Ge,oi(h),oe)),Re||D.update(Re),mn=Xe,D.isReverted=Re)},D.refresh=function(se,Ue,Re,Xe){if(!((mn||!D.enabled)&&!Ue)){if(h&&se&&ui){sn(r,"scrollEnd",vd);return}!Cn&&le&&le(D),mn=D,ie.tween&&!Re&&(ie.tween.kill(),ie.tween=0),ce&&ce.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ve){return ve.vars.immediateRender&&ve.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Wt=ge(),et=Ye(),wt=b?b.duration():Pi(P,R),en=We<=.01||!We,Rt=0,vt=Xe||0,at=Dr(Re)?Re.end:n.end,Mn=n.endTrigger||f,bt=Dr(Re)?Re.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),fn=D.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,D),yn=f&&Math.max(0,Qe.indexOf(D))||0,Xt=yn,Nt,$t,Mi,$r,tn,Gt,ni,y,O,Y,k,H,xe;for(K&&Dr(Re)&&(H=be.getProperty(q,R.p),xe=be.getProperty(ut,R.p));Xt-- >0;)Gt=Qe[Xt],Gt.end||Gt.refresh(0,1)||(mn=D),ni=Gt.pin,ni&&(ni===f||ni===h||ni===fn)&&!Gt.isReverted&&(Y||(Y=[]),Y.unshift(Gt),Gt.revert(!0,!0)),Gt!==Qe[Xt]&&(yn--,Xt--);for(xn(bt)&&(bt=bt(D)),bt=vf(bt,"start",D),ye=Rf(bt,f,Wt,R,ae(),Ve,q,D,et,ee,U,wt,b,D._startClamp&&"_startClamp")||(h?-.001:0),xn(at)&&(at=at(D)),Xn(at)&&!at.indexOf("+=")&&(~at.indexOf(" ")?at=(Xn(bt)?bt.split(" ")[0]:"")+at:(Rt=Mo(at.substr(2),Wt),at=Xn(bt)?bt:(b?be.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,ye):ye)+Rt,Mn=f)),at=vf(at,"end",D),Be=Math.max(ye,Rf(at||(Mn?"100% 0":wt),Mn,Wt,R,ae()+Rt,ze,ut,D,et,ee,U,wt,b,D._endClamp&&"_endClamp"))||-.001,Rt=0,Xt=yn;Xt--;)Gt=Qe[Xt]||{},ni=Gt.pin,ni&&Gt.start-Gt._pinPush<=ye&&!b&&Gt.end>0&&(Nt=Gt.end-(D._startClamp?Math.max(0,Gt.start):Gt.start),(ni===f&&Gt.start-Gt._pinPush<ye||ni===fn)&&isNaN(bt)&&(Rt+=Nt*(1-Gt.progress)),ni===h&&(vt+=Nt));if(ye+=Rt,Be+=Rt,D._startClamp&&(D._startClamp+=Rt),D._endClamp&&!Cn&&(D._endClamp=Be||-.001,Be=Math.min(Be,Pi(P,R))),We=Be-ye||(ye-=.01)&&.001,en&&(Z=be.utils.clamp(0,1,be.utils.normalize(ye,Be,fe))),D._pinPush=vt,Ve&&Rt&&(Nt={},Nt[R.a]="+="+Rt,fn&&(Nt[R.p]="-="+ae()),be.set([Ve,ze],Nt)),h&&!(cc&&D.end>=Pi(P,R)))Nt=oi(h),$r=R===Jt,Mi=ae(),z=parseFloat(v(R.a))+vt,!wt&&Be>1&&(k=(W?pt.scrollingElement||Kn:P).style,k={style:k,value:k["overflow"+R.a.toUpperCase()]},W&&oi(dt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(k.style["overflow"+R.a.toUpperCase()]="scroll")),Bl(h,Ge,Nt),Ut=fo(h),$t=Hi(h,!0),y=U&&Sr(P,$r?Pn:Jt)(),_?(oe=[_+R.os2,We+vt+Zt],oe.t=Ge,Xt=_===Yt?Go(h,R)+We+vt:0,Xt&&(oe.push(R.d,Xt+Zt),Ge.style.flexBasis!=="auto"&&(Ge.style.flexBasis=Xt+Zt)),Cs(oe),fn&&Qe.forEach(function(ve){ve.pin===fn&&ve.vars.pinSpacing!==!1&&(ve._subPinOffset=!0)}),U&&ae(fe)):(Xt=Go(h,R),Xt&&Ge.style.flexBasis!=="auto"&&(Ge.style.flexBasis=Xt+Zt)),U&&(tn={top:$t.top+($r?Mi-ye:y)+Zt,left:$t.left+($r?y:Mi-ye)+Zt,boxSizing:"border-box",position:"fixed"},tn[zr]=tn["max"+Os]=Math.ceil($t.width)+Zt,tn[Vr]=tn["max"+Hc]=Math.ceil($t.height)+Zt,tn[ai]=tn[ai+xa]=tn[ai+_a]=tn[ai+va]=tn[ai+ga]="0",tn[Yt]=Nt[Yt],tn[Yt+xa]=Nt[Yt+xa],tn[Yt+_a]=Nt[Yt+_a],tn[Yt+va]=Nt[Yt+va],tn[Yt+ga]=Nt[Yt+ga],N=IS(ht,tn,E),Cn&&ae(0)),i?(O=i._initted,Il(1),i.render(i.duration(),!0,!0),$=v(R.a)-z+We+vt,Q=Math.abs(We-$)>1,U&&Q&&N.splice(N.length-2,2),i.render(0,!0,!0),O||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Il(0)):$=We,k&&(k.value?k.style["overflow"+R.a.toUpperCase()]=k.value:k.style.removeProperty("overflow-"+R.a));else if(f&&ae()&&!b)for($t=f.parentNode;$t&&$t!==dt;)$t._pinOffset&&(ye-=$t._pinOffset,Be-=$t._pinOffset),$t=$t.parentNode;Y&&Y.forEach(function(ve){return ve.revert(!1,!0)}),D.start=ye,D.end=Be,Ee=rt=Cn?fe:ae(),!b&&!Cn&&(Ee<fe&&ae(fe),D.scroll.rec=0),D.revert(!1,!0),Oe=_n(),F&&(He=-1,F.restart(!0)),mn=0,i&&L&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(en||Z!==D.progress||b||g||i&&!i._initted)&&(i&&!L&&(i._initted||Z||i.vars.immediateRender!==!1)&&i.totalProgress(b&&ye<-.001&&!Z?be.utils.normalize(ye,Be,0):Z,!0),D.progress=en||(Ee-ye)/We===Z?0:Z),h&&_&&(Ge._pinOffset=Math.round(D.progress*$)),ce&&ce.invalidate(),isNaN(H)||(H-=be.getProperty(q,R.p),xe-=be.getProperty(ut,R.p),ho(q,R,H),ho(Ve,R,H-(Xe||0)),ho(ut,R,xe),ho(ze,R,xe-(Xe||0))),en&&!Cn&&D.update(),u&&!Cn&&!Et&&(Et=!0,u(D),Et=!1)}},D.getVelocity=function(){return(ae()-rt)/(_n()-na)*1e3||0},D.endAnimation=function(){Js(D.callbackAnimation),i&&(ce?ce.progress(1):i.paused()?L||Js(i,D.direction<0,1):Js(i,i.reversed()))},D.labelToScroll=function(se){return i&&i.labels&&(ye||D.refresh()||ye)+i.labels[se]/i.duration()*We||0},D.getTrailing=function(se){var Ue=Qe.indexOf(D),Re=D.direction>0?Qe.slice(0,Ue).reverse():Qe.slice(Ue+1);return(Xn(se)?Re.filter(function(Xe){return Xe.vars.preventOverlaps===se}):Re).filter(function(Xe){return D.direction>0?Xe.end<=ye:Xe.start>=Be})},D.update=function(se,Ue,Re){if(!(b&&!Re&&!se)){var Xe=Cn===!0?fe:D.scroll(),Wt=se?0:(Xe-ye)/We,et=Wt<0?0:Wt>1?1:Wt||0,wt=D.progress,en,Rt,vt,at,Mn,bt,fn,yn;if(Ue&&(rt=Ee,Ee=b?ae():Xe,S&&(he=pe,pe=i&&!L?i.totalProgress():et)),m&&h&&!mn&&!so&&ui&&(!et&&ye<Xe+(Xe-rt)/(_n()-na)*m?et=1e-4:et===1&&Be>Xe+(Xe-rt)/(_n()-na)*m&&(et=.9999)),et!==wt&&D.enabled){if(en=D.isActive=!!et&&et<1,Rt=!!wt&&wt<1,bt=en!==Rt,Mn=bt||!!et!=!!wt,D.direction=et>wt?1:-1,D.progress=et,Mn&&!mn&&(vt=et&&!wt?0:et===1?1:wt===1?2:3,L&&(at=!bt&&I[vt+1]!=="none"&&I[vt+1]||I[vt],yn=i&&(at==="complete"||at==="reset"||at in i))),M&&(bt||yn)&&(yn||d||!i)&&(xn(M)?M(D):D.getTrailing(M).forEach(function(Mi){return Mi.endAnimation()})),L||(ce&&!mn&&!so?(ce._dp._time-ce._start!==ce._time&&ce.render(ce._dp._time-ce._start),ce.resetTo?ce.resetTo("totalProgress",et,i._tTime/i._tDur):(ce.vars.totalProgress=et,ce.invalidate().restart())):i&&i.totalProgress(et,!!(mn&&(Oe||se)))),h){if(se&&_&&(Ge.style[_+R.os2]=ue),!U)B(ra(z+$*et));else if(Mn){if(fn=!se&&et>wt&&Be+1>Xe&&Xe+1>=Pi(P,R),E)if(!se&&(en||fn)){var Xt=Hi(h,!0),Nt=Xe-ye;Cf(h,dt,Xt.top+(R===Jt?Nt:0)+Zt,Xt.left+(R===Jt?0:Nt)+Zt)}else Cf(h,Ge);Cs(en||fn?N:Ut),Q&&et<1&&en||B(z+(et===1&&!fn?$:0))}}S&&!ie.tween&&!mn&&!so&&F.restart(!0),o&&(bt||w&&et&&(et<1||!Ul))&&Pa(o.targets).forEach(function(Mi){return Mi.classList[en||w?"add":"remove"](o.className)}),a&&!L&&!se&&a(D),Mn&&!mn?(L&&(yn&&(at==="complete"?i.pause().totalProgress(1):at==="reset"?i.restart(!0).pause():at==="restart"?i.restart(!0):i[at]()),a&&a(D)),(bt||!Ul)&&(c&&bt&&hs(D,c),X[vt]&&hs(D,X[vt]),w&&(et===1?D.kill(!1,1):X[vt]=0),bt||(vt=et===1?1:3,X[vt]&&hs(D,X[vt]))),x&&!en&&Math.abs(D.getVelocity())>(sa(x)?x:2500)&&(Js(D.callbackAnimation),ce?ce.progress(1):Js(i,at==="reverse"?1:!et,1))):L&&a&&!mn&&a(D)}if(de){var $t=b?Xe/b.duration()*(b._caScrollDist||0):Xe;J($t+(q._isFlipped?1:0)),de($t)}me&&me(-Xe/b.duration()*(b._caScrollDist||0))}},D.enable=function(se,Ue){D.enabled||(D.enabled=!0,sn(P,"resize",aa),W||sn(P,"scroll",ps),le&&sn(r,"refreshInit",le),se!==!1&&(D.progress=Z=0,Ee=rt=He=ae()),Ue!==!1&&D.refresh())},D.getTween=function(se){return se&&ie?ie.tween:ce},D.setPositions=function(se,Ue,Re,Xe){if(b){var Wt=b.scrollTrigger,et=b.duration(),wt=Wt.end-Wt.start;se=Wt.start+wt*se/et,Ue=Wt.start+wt*Ue/et}D.refresh(!1,!1,{start:Sf(se,Re&&!!D._startClamp),end:Sf(Ue,Re&&!!D._endClamp)},Xe),D.update()},D.adjustPinSpacing=function(se){if(oe&&se){var Ue=oe.indexOf(R.d)+1;oe[Ue]=parseFloat(oe[Ue])+se+Zt,oe[1]=parseFloat(oe[1])+se+Zt,Cs(oe)}},D.disable=function(se,Ue){if(se!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Ue||ce&&ce.pause(),fe=0,we&&(we.uncache=1),le&&rn(r,"refreshInit",le),F&&(F.pause(),ie.tween&&ie.tween.kill()&&(ie.tween=0)),!W)){for(var Re=Qe.length;Re--;)if(Qe[Re].scroller===P&&Qe[Re]!==D)return;rn(P,"resize",aa),W||rn(P,"scroll",ps)}},D.kill=function(se,Ue){D.disable(se,Ue),ce&&!Ue&&ce.kill(),l&&delete uc[l];var Re=Qe.indexOf(D);Re>=0&&Qe.splice(Re,1),Re===Rn&&To>0&&Rn--,Re=0,Qe.forEach(function(Xe){return Xe.scroller===D.scroller&&(Re=1)}),Re||Cn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Ue||i.kill()),Ve&&[Ve,ze,q,ut].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),Sa===D&&(Sa=0),h&&(we&&(we.uncache=1),Re=0,Qe.forEach(function(Xe){return Xe.pin===h&&Re++}),Re||(we.spacer=0)),n.onKill&&n.onKill(D)},Qe.push(D),D.enable(!1,!1),_e&&_e(D),i&&i.add&&!We){var Ie=D.update;D.update=function(){D.update=Ie,nt.cache++,ye||Be||D.refresh()},be.delayedCall(.01,D.update),We=.01,ye=Be=0}else D.refresh();h&&DS()},r.register=function(n){return _s||(be=n||dd(),hd()&&window.document&&r.enable(),_s=ia),_s},r.defaults=function(n){if(n)for(var i in n)co[i]=n[i];return co},r.disable=function(n,i){ia=0,Qe.forEach(function(a){return a[i?"kill":"disable"](n)}),rn(tt,"wheel",ps),rn(pt,"scroll",ps),clearInterval(ro),rn(pt,"touchcancel",Ai),rn(dt,"touchstart",Ai),oo(rn,pt,"pointerdown,touchstart,mousedown",Mf),oo(rn,pt,"pointerup,touchend,mouseup",yf),Bo.kill(),ao(rn);for(var s=0;s<nt.length;s+=3)lo(rn,nt[s],nt[s+1]),lo(rn,nt[s],nt[s+2])},r.enable=function(){if(tt=window,pt=document,Kn=pt.documentElement,dt=pt.body,be){if(Pa=be.utils.toArray,pa=be.utils.clamp,lc=be.core.context||Ai,Il=be.core.suppressOverwrites||Ai,Gc=tt.history.scrollRestoration||"auto",fc=tt.pageYOffset||0,be.core.globals("ScrollTrigger",r),dt){ia=1,Rs=document.createElement("div"),Rs.style.height="100vh",Rs.style.position="absolute",Td(),ES(),Ht.register(be),r.isTouch=Ht.isTouch,sr=Ht.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),oc=Ht.isTouch===1,sn(tt,"wheel",ps),Bc=[tt,pt,Kn,dt],be.matchMedia?(r.matchMedia=function(u){var d=be.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},be.addEventListener("matchMediaInit",function(){Md(),Xc()}),be.addEventListener("matchMediaRevert",function(){return Sd()}),be.addEventListener("matchMedia",function(){Ur(0,1),qr("matchMedia")}),be.matchMedia().add("(orientation: portrait)",function(){return Ol(),Ol})):console.warn("Requires GSAP 3.11.0 or later"),Ol(),sn(pt,"scroll",ps);var n=dt.hasAttribute("style"),i=dt.style,s=i.borderTopStyle,a=be.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Hi(dt),Jt.m=Math.round(o.top+Jt.sc())||0,Pn.m=Math.round(o.left+Pn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(dt.setAttribute("style",""),dt.removeAttribute("style")),ro=setInterval(bf,250),be.delayedCall(.5,function(){return so=0}),sn(pt,"touchcancel",Ai),sn(dt,"touchstart",Ai),oo(sn,pt,"pointerdown,touchstart,mousedown",Mf),oo(sn,pt,"pointerup,touchend,mouseup",yf),ac=be.utils.checkPrefix("transform"),Eo.push(ac),_s=_n(),Bo=be.delayedCall(.2,Ur).pause(),gs=[pt,"visibilitychange",function(){var u=tt.innerWidth,d=tt.innerHeight;pt.hidden?(gf=u,xf=d):(gf!==u||xf!==d)&&aa()},pt,"DOMContentLoaded",Ur,tt,"load",Ur,tt,"resize",aa],ao(sn),Qe.forEach(function(u){return u.enable(0,1)}),l=0;l<nt.length;l+=3)lo(rn,nt[l],nt[l+1]),lo(rn,nt[l],nt[l+2])}else if(pt){var c=function u(){r.enable(),pt.removeEventListener("DOMContentLoaded",u)};pt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Ul=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ro)||(ro=i)&&setInterval(bf,i),"ignoreMobileResize"in n&&(oc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ao(rn)||ao(sn,n.autoRefreshEvents||"none"),cd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Fn(n),a=nt.indexOf(s),o=Wr(s);~a&&nt.splice(a,o?6:2),i&&(o?Fi.unshift(tt,i,dt,i,Kn,i):Fi.unshift(s,i))},r.clearMatchMedia=function(n){Qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Xn(n)?Fn(n):n).getBoundingClientRect(),o=a[s?zr:Vr]*i||0;return s?a.right-o>0&&a.left+o<tt.innerWidth:a.bottom-o>0&&a.top+o<tt.innerHeight},r.positionInViewport=function(n,i,s){Xn(n)&&(n=Fn(n));var a=n.getBoundingClientRect(),o=a[s?zr:Vr],l=i==null?o/2:i in ko?ko[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/tt.innerWidth:(a.top+l)/tt.innerHeight},r.killAll=function(n){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Xr.killAll||[];Xr={},i.forEach(function(s){return s()})}},r})();it.version="3.15.0";it.saveStyles=function(r){return r?Pa(r).forEach(function(e){if(e&&e.style){var t=Wn.indexOf(e);t>=0&&Wn.splice(t,5),Wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),lc())}}):Wn};it.revert=function(r,e){return Xc(!r,e)};it.create=function(r,e){return new it(r,e)};it.refresh=function(r){return r?aa(!0):(_s||it.register())&&Ur(!0)};it.update=function(r){return++nt.cache&&qi(r===!0?2:0)};it.clearScrollMemory=yd;it.maxScroll=function(r,e){return Pi(r,e?Pn:Jt)};it.getScrollFunc=function(r,e){return Sr(Fn(r),e?Pn:Jt)};it.getById=function(r){return uc[r]};it.getAll=function(){return Qe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!ui};it.snapDirectional=Wc;it.addEventListener=function(r,e){var t=Xr[r]||(Xr[r]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(r,e){var t=Xr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],f=[],h=be.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(_){d.length||h.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&xn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return xn(s)&&(s=s(),sn(it,"refresh",function(){return s=e.batchMax()})),Pa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(it.create(c))}),t};var Df=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Gl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ht.isTouch?" pinch-zoom":""):"none",e===Kn&&r(dt,t)},po={auto:1,scroll:1},NS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||be.core.getCache(s),o=_n(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==dt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(po[(l=oi(s)).overflowY]||po[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Wr(s)&&(po[(l=oi(s)).overflowY]||po[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},bd=function(e,t,n,i){return Ht.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&NS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&sn(pt,Ht.eventTypes[0],Ff,!1,!0)},onDisable:function(){return rn(pt,Ht.eventTypes[0],Ff,!0)}})},OS=/(input|label|select|textarea)/i,Lf,Ff=function(e){var t=OS.test(e.target.tagName);(t||Lf)&&(e._gsapAllow=!0,Lf=t)},BS=function(e){Dr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Fn(e.target)||Kn,u=be.core.globals().ScrollSmoother,d=u&&u.get(),f=sr&&(e.content&&Fn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Sr(c,Jt),_=Sr(c,Pn),g=1,m=(Ht.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,p=0,T=xn(i)?function(){return i(o)}:function(){return i||2.8},w,S,E=bd(c,e.type,!0,s),A=function(){return S=!1},b=Ai,x=Ai,M=function(){l=Pi(c,Jt),x=pa(sr?1:0,l),n&&(b=pa(0,Pi(c,Pn))),w=Hr},R=function(){f._gsap.y=ra(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},L=function(){if(S){requestAnimationFrame(A);var K=ra(o.deltaY/2),ee=x(h.v-K);if(f&&ee!==h.v+h.offset){h.offset=ee-h.v;var D=ra((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",h.cacheID=nt.cache,qi()}return!0}h.offset&&R(),S=!0},P,V,W,U,X=function(){M(),P.isActive()&&P.vars.scrollY>l&&(h()>l?P.progress(1)&&h(l):P.resetTo("scrollY",l))};return f&&be.set(f,{y:"+=0"}),e.ignoreCheck=function(I){return sr&&I.type==="touchmove"&&L()||g>1.05&&I.type!=="touchstart"||o.isGesturing||I.touches&&I.touches.length>1},e.onPress=function(){S=!1;var I=g;g=ra((tt.visualViewport&&tt.visualViewport.scale||1)/m),P.pause(),I!==g&&Gl(c,g>1.01?!0:n?!1:"x"),V=_(),W=h(),M(),w=Hr},e.onRelease=e.onGestureStart=function(I,K){if(h.offset&&R(),!K)U.restart(!0);else{nt.cache++;var ee=T(),D,le;n&&(D=_(),le=D+ee*.05*-I.velocityX/.227,ee*=Df(_,D,le,Pi(c,Pn)),P.vars.scrollX=b(le)),D=h(),le=D+ee*.05*-I.velocityY/.227,ee*=Df(h,D,le,Pi(c,Jt)),P.vars.scrollY=x(le),P.invalidate().duration(ee).play(.01),(sr&&P.vars.scrollY>=l||D>=l-1)&&be.to({},{onUpdate:X,duration:ee})}a&&a(I)},e.onWheel=function(){P._ts&&P.pause(),_n()-p>1e3&&(w=0,p=_n())},e.onChange=function(I,K,ee,D,le){if(Hr!==w&&M(),K&&n&&_(b(D[2]===K?V+(I.startX-I.x):_()+K-D[1])),ee){h.offset&&R();var ge=le[2]===ee,Ye=ge?W+I.startY-I.y:h()+ee-le[1],He=x(Ye);ge&&Ye!==He&&(W+=He-Ye),h(He)}(ee||K)&&qi()},e.onEnable=function(){Gl(c,n?!1:"x"),it.addEventListener("refresh",X),sn(tt,"resize",X),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),E.enable()},e.onDisable=function(){Gl(c,!0),rn(tt,"resize",X),it.removeEventListener("refresh",X),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ht(e),o.iOS=sr,sr&&!h()&&h(1),sr&&be.ticker.add(Ai),U=o._dc,P=be.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ed(h,h(),function(){return P.pause()})},onUpdate:qi,onComplete:U.vars.onComplete}),o};it.sort=function(r){if(xn(r))return Qe.sort(r);var e=tt.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),Qe.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(r){return new Ht(r)};it.normalizeScroll=function(r){if(typeof r>"u")return wn;if(r===!0&&wn)return wn.enable();if(r===!1){wn&&wn.kill(),wn=r;return}var e=r instanceof Ht?r:BS(r);return wn&&wn.target===e.target&&wn.kill(),Wr(e.target)&&(wn=e),e};it.core={_getVelocityProp:sc,_inputObserver:bd,_scrollers:nt,_proxies:Fi,bridge:{ss:function(){ui||qr("scrollStart"),ui=_n()},ref:function(){return mn}}};dd()&&be.registerPlugin(it);let Qs=null,mo=null;function GS(){const r=window.AudioContext||window.webkitAudioContext;return r?(Qs||(Qs=new r),Qs.state==="suspended"&&Qs.resume(),Qs):null}function kS(r){if(mo&&mo.sampleRate===r.sampleRate)return mo;const t=Math.floor(r.sampleRate*.3),n=r.createBuffer(1,t,r.sampleRate),i=n.getChannelData(0);for(let s=0;s<t;s++)i[s]=Math.random()*2-1;return mo=n,n}function zS(){const r=GS();if(!r)return;const e=r.currentTime,t=.22,n=r.createBufferSource();n.buffer=kS(r);const i=r.createBiquadFilter();i.type="bandpass",i.Q.setValueAtTime(.9,e),i.frequency.setValueAtTime(2400,e),i.frequency.exponentialRampToValueAtTime(500,e+t);const s=r.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.09,e+.02),s.gain.exponentialRampToValueAtTime(1e-4,e+t),n.connect(i),i.connect(s),s.connect(r.destination),n.start(e),n.stop(e+t+.02)}const If=.75;function VS(r){return Math.min(Math.max(r,0),1)}function Uf(r,e,t){return VS((r-e)/(t-e))}class HS{constructor(e,t,n){this.showcase=e,this.viewport=t,this.scenes=n,this.total=n.length,this.currentDominant=0,this.progressEl=null,this.scrollTrigger=null,this.pendingKeyboardFocus=!1,this.handleKeydown=this.handleKeydown.bind(this),this.handleScrollEnd=this.handleScrollEnd.bind(this),this.updateForProgress=this.updateForProgress.bind(this)}init(){this.progressEl=document.createElement("div"),this.progressEl.className="project-showcase__progress",this.progressEl.setAttribute("aria-hidden","true"),this.viewport.appendChild(this.progressEl),_i.registerPlugin(it),this.sceneRefs=this.scenes.map(e=>({scene:e,visual:e.querySelector(".project-scene__visual"),metaItems:e.querySelectorAll(".project-scene__meta > *")})),_i.set(this.scenes,{autoAlpha:0}),_i.set(this.scenes[0],{autoAlpha:1}),this.setDominant(0),this.scrollTrigger=it.create({trigger:this.showcase,pin:this.viewport,start:"top top",end:()=>"+="+window.innerHeight*If*(this.total-1),scrub:.15,snap:{snapTo:1/(this.total-1),duration:{min:.25,max:.6},delay:.15,ease:"power1.inOut"},onUpdate:e=>this.updateForProgress(e.progress*(this.total-1))}),document.addEventListener("keydown",this.handleKeydown),"onscrollend"in window&&window.addEventListener("scrollend",this.handleScrollEnd),this.showcase.classList.add("project-showcase--interactive")}updateForProgress(e){const t=Math.min(Math.floor(e),this.total-1),n=Math.min(t+1,this.total-1),i=n===t?0:e-t;this.sceneRefs.forEach((a,o)=>{const{scene:l,visual:c,metaItems:u}=a;if(o===t){if(_i.set(l,{autoAlpha:1-i}),c&&_i.set(c,{scale:1-i*.05,xPercent:-i*5}),u.length){const d=Uf(i,0,.6);_i.set(u,{autoAlpha:1-d,y:-d*16})}}else if(o===n&&n!==t){if(_i.set(l,{autoAlpha:i}),c&&_i.set(c,{scale:.96+i*.04,xPercent:(1-i)*5}),u.length){const d=Uf(i,.35,1);_i.set(u,{autoAlpha:d,y:(1-d)*16})}}else a.isFar||_i.set(l,{autoAlpha:0});a.isFar=o!==t&&o!==n});const s=i>.5?n:t;s!==this.currentDominant&&(zS(),this.setDominant(s))}setDominant(e){this.currentDominant=e,this.scenes.forEach((t,n)=>{const i=n===e;t.inert=!i,t.setAttribute("data-scene-state",i?"active":"inactive")}),this.updateProgress()}updateProgress(){if(!this.progressEl)return;this.progressEl.innerHTML="";const e=document.createElement("strong");e.textContent=String(this.currentDominant+1).padStart(2,"0"),this.progressEl.appendChild(e),this.progressEl.appendChild(document.createTextNode(" / "+String(this.total).padStart(2,"0")))}handleKeydown(e){if(!this.scrollTrigger||!this.scrollTrigger.isActive||e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault(),this.pendingKeyboardFocus=!0;const t=window.innerHeight*If*(e.key==="ArrowDown"?1:-1);window.scrollBy({top:t,behavior:"smooth"})}handleScrollEnd(){this.pendingKeyboardFocus&&(this.pendingKeyboardFocus=!1,this.scenes[this.currentDominant].focus())}}function WS(){const r=document.querySelector("[data-project-showcase]");if(!r)return;const e=window.matchMedia("(min-width: 900px)").matches,t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!e||t)return;const n=r.querySelector("[data-project-viewport]"),i=Array.from(r.querySelectorAll("[data-project-scene]"));if(!n||i.length<2)return;new HS(r,n,i).init()}const XS=550;function qS(r){return r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.button!==0}function YS(r,{reducedMotion:e=!1}={}){if(e){window.location.href=r;return}const t=document.getElementById("page-transition-container");t&&t.classList.add("is-leaving"),window.setTimeout(()=>{window.location.href=r},XS)}function KS(){const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.addEventListener("click",e=>{if(e.defaultPrevented||qS(e))return;const t=e.target.closest("a[href]");if(!t||t.target==="_blank"||t.hasAttribute("download"))return;let n;try{n=new URL(t.href,window.location.href)}catch{return}n.origin===window.location.origin&&(n.pathname===window.location.pathname&&n.search===window.location.search&&n.hash||n.href!==window.location.href&&(e.preventDefault(),YS(t.href,{reducedMotion:r})))})}function $S(){const r=document.querySelectorAll("[data-reveal]");if(!r.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r.forEach(t=>t.classList.add("is-revealed"));return}const e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.classList.add("is-revealed"),e.unobserve(n.target))})},{threshold:.15,rootMargin:"0px 0px -8% 0px"});r.forEach(t=>e.observe(t))}function ZS(){const r=document.getElementById("nav-toggle"),e=document.querySelector(".nav-toggle-label");if(!r||!e)return;const t=()=>{e.setAttribute("aria-expanded",r.checked?"true":"false")};t(),r.addEventListener("change",t),document.addEventListener("keydown",n=>{n.key==="Escape"&&r.checked&&(r.checked=!1,t())}),document.addEventListener("click",n=>{!n.target.closest(".site-header")&&r.checked&&(r.checked=!1,t())})}function Nf(){ZS();try{ev()}catch(r){console.warn("Workspace scene: failed to initialize, falls back to text.",r)}try{WS()}catch(r){console.warn("Projects showcase: failed to initialize, falls back to static scroll.",r)}try{KS()}catch(r){console.warn("Link transitions: failed to initialize, links navigate normally.",r)}try{$S()}catch(r){console.warn("Scroll reveal: failed to initialize, content stays visible.",r)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Nf):Nf();
