///////////     By: Pankaj Verma
///////          Last Updated: 16/07/19 03:20
//-----------------------------------------------
AFRAME.registerComponent("player_movement",{init:function(){movement_camera=document.querySelector("#camera"),(movement_player=document.querySelector("#player")).addEventListener("collide",function(e){console.log("Player has collided with body #",e.detail.body.el.getAttribute("id")),e.detail.target.el,e.detail.body.el,e.detail.contact,e.detail.contact.ni})},tick:function(){movement_enabled&&(movement_isUpPressed&&movement_moveForward(),movement_isDownPressed&&movement_moveBackword())}});var movement_player=null,movement_camera=null,movement_enabled=!0,movement_isUpPressed=!1,movement_isDownPressed=!1,movement_isLeftPressed=!1,movement_isRightPressed=!1;function movement_moveForward(){var e=GetWorldRotation(camera),t=1*Math.cos(e.y*Math.PI/180),o=1*Math.sin(e.y*Math.PI/180),n=movement_player.getAttribute("position");n.x-=o/10,n.z-=t/10,movement_player.setAttribute("position",n);let r=document.querySelector("#st"),m=GetWorldPosition(r),i=GetWorldPosition(movement_player);var s=m.distanceTo(i);console.log(s)}function movement_moveBackword(){let e=movement_player.object3D.position;e.z=e.z+.03,movement_player.setAttribute("position",e)}function movement_rotateLeft(){let e=movement_player.getAttribute("rotation");e.y=e.y+20,movement_player.setAttribute("rotation",e)}function movement_rotateRight(){let e=movement_player.getAttribute("rotation");e.y=e.y-20,movement_player.setAttribute("rotation",e)}window.addEventListener("keydown",function(e){"ArrowUp"==e.code&&(movement_isUpPressed=!0),"ArrowDown"==e.code&&(movement_isDownPressed=!0),"ArrowLeft"==e.code&&(movement_isLeftPressed=!0),"ArrowRight"==e.code&&(movement_isRightPressed=!0)}),window.addEventListener("keyup",function(e){"ArrowUp"==e.code&&(movement_isUpPressed=!1),"ArrowDown"==e.code&&(movement_isDownPressed=!1),"ArrowLeft"==e.code&&(movement_isLeftPressed=!1),"ArrowRight"==e.code&&(movement_isRightPressed=!1),"ArrowLeft"==e.code&&movement_rotateLeft(),"ArrowRight"==e.code&&movement_rotateRight()});
