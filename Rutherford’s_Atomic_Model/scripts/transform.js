///////////     By: Pankaj Verma
///////         Last Updated: 15/07/19 03:20
//-----------------------------------------------
function GetWorldPosition(t){let o=t.getAttribute("position");return void 0!==t.object3D.parent.el&&(o=SumVector(o,GetWorldPosition(t.object3D.parent.el))),o}function GetWorldRotation(t){let o=t.getAttribute("rotation");return void 0!==t.object3D.parent.el&&(o=SumVector(o,GetWorldRotation(t.object3D.parent.el))),o}function GetLocalPosition(t,o){new THREE.Vector3;return SubVector(GetWorldPosition(t),GetWorldPosition(o))}function GetLocalRotation(t,o){new THREE.Vector3;return SubVector(GetWorldRotation(t),GetWorldRotation(o))}function SumVector(t,o){var e=new THREE.Vector3;return e.x=t.x+o.x,e.y=t.y+o.y,e.z=t.z+o.z,e}function SubVector(t,o){var e=new THREE.Vector3;return e.x=t.x-o.x,e.y=t.y-o.y,e.z=t.z-o.z,e}
