var r=perlinNoise3d=function(){for(var r=Math.floor(720),n=new Array(r),t=new Array(r),i=Math.PI/180,e=0;e<r;e++)n[e]=Math.sin(e*i*.5),t[e]=Math.cos(e*i*.5);var o=r;o>>=1;var l=function(){this.perlin_octaves=4,this.perlin_amp_falloff=.5,this.perlin=null};return l.prototype={noiseSeed:function(r){var n=function(){var r,n,t=4294967296;return{setSeed:function(i){n=r=(null==i?Math.random()*t:i)>>>0},getSeed:function(){return r},rand:function(){return(n=(1664525*n+1013904223)%t)/t}}}();n.setSeed(r),this.perlin=new Array(4096);for(var t=0;t<4096;t++)this.perlin[t]=n.rand();return this},get:function(n,i,e){if(i=i||0,e=e||0,null==this.perlin){this.perlin=new Array(4096);for(var l=0;l<4096;l++)this.perlin[l]=Math.random()}n<0&&(n=-n),i<0&&(i=-i),e<0&&(e=-e);for(var a,h,s,f,p,u=Math.floor(n),c=Math.floor(i),v=Math.floor(e),d=n-u,M=i-c,_=e-v,m=0,y=.5,w=function(n){return.5*(1-t[Math.floor(n*o)%r])},A=0;A<this.perlin_octaves;A++){var S=u+(c<<4)+(v<<8);a=w(d),h=w(M),s=this.perlin[4095&S],s+=a*(this.perlin[S+1&4095]-s),f=this.perlin[S+16&4095],s+=h*((f+=a*(this.perlin[S+16+1&4095]-f))-s),f=this.perlin[4095&(S+=256)],f+=a*(this.perlin[S+1&4095]-f),p=this.perlin[S+16&4095],f+=h*((p+=a*(this.perlin[S+16+1&4095]-p))-f),m+=(s+=w(_)*(f-s))*y,y*=this.perlin_amp_falloff,u<<=1,c<<=1,v<<=1,(d*=2)>=1&&(u++,d--),(M*=2)>=1&&(c++,M--),(_*=2)>=1&&(v++,_--)}return m}},l}();module.exports=r;