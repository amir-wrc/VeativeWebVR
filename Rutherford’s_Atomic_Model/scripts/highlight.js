var highlight_reduce=!0,highlight_max=23,highlight_min=15;function highlight_setReduce(t){highlight_reduce=t}function highlight_getReduce(){return highlight_reduce}AFRAME.registerComponent("highlight",{tick:function(){let t=this.el.getAttribute("scale").x;this.el.getAttribute("material","opacity");if(t>=highlight_max&&highlight_setReduce(!0),t<=highlight_min&&highlight_setReduce(!1),highlight_getReduce()){let e=t-.1;this.el.setAttribute("scale",{x:e,y:e,z:.5})}else{let e=t+.1;this.el.setAttribute("scale",{x:e,y:e,z:.5})}}});
