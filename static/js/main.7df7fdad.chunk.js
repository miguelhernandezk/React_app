(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(39)},,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),l=(n(15),n(3)),u=n(1);function s(){var e=o.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],r=function(e,t){var n=o.a.useState(!0),a=Object(u.a)(n,2),r=a[0],c=a[1],l=o.a.useState(!1),s=Object(u.a)(l,2),i=s[0],m=s[1],d=o.a.useState(!0),f=Object(u.a)(d,2),E=f[0],p=f[1],h=o.a.useState(t),g=Object(u.a)(h,2),T=g[0],D=g[1];return o.a.useEffect(function(){setTimeout(function(){try{var n,a=localStorage.getItem(e);a?n=JSON.parse(a):(localStorage.setItem(e,JSON.stringify(t)),n=t),D(n),p(!1),c(!0)}catch(i){m(!0)}},3e3)},[r]),{item:T,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),D(t)}catch(i){m(!0)}},loading:E,error:i,synchronizeItem:function(){p(!0),c(!1)}}}("TODOS_V1",[]),c=r.item,s=r.saveItem,i=r.synchronizeItem,m=r.loading,d=r.error,f=o.a.useState(""),E=Object(u.a)(f,2),p=E[0],h=E[1],g=o.a.useState(!1),T=Object(u.a)(g,2),D=T[0],v=T[1],b=c.filter(function(e){return!!e.completed}).length,y=c.length,S=[];S=!p.length>=1?c:c.filter(function(e){var t=e.text.toLowerCase(),n=p.toLowerCase();return t.includes(n)});return{loading:m,error:d,totalToDos:y,completedToDos:b,searchValue:p,setSearchValue:h,searchedToDos:S,completeToDo:function(e){var t=c.findIndex(function(t){return t.text===e}),n=Object(l.a)(c);n[t].completed=D,v(!D),s(n)},deleteToDo:function(e){var t=c.findIndex(function(t){return t.text===e}),n=Object(l.a)(c);n.splice(t,1),s(n)},addToDo:function(e){var t=Object(l.a)(c);t.push({completed:!1,text:e}),s(t)},openModal:n,setOpenModal:a,synchronizeToDos:i}}n(17);function i(e){var t=e.totalToDos,n=e.completedToDos,a=e.loading;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:"ToDoCounter headCounter ".concat(!!a&&"ToDoCounter--loading")},"Your tasks"),o.a.createElement("h3",{className:"ToDoCounter subCounter ".concat(!!a&&"ToDoCounter--loading")},n," out of ",t," tasks completed."))}n(19);function m(e){var t=e.searchValue,n=e.setSearchValue,a=e.loading;return o.a.createElement("input",{className:"ToDoSearch",placeholder:"Filter ToDo's",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)},disabled:a})}n(21);function d(e){var t=e.children||e.render;return o.a.createElement("section",{className:"ToDoList-container"},e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalToDos&&e.onEmptyToDos(),!!e.totalToDos&&!e.searchedToDos.length&&e.onEmptySearchResults(e.searchText),!e.loading&&!e.error&&e.searchedToDos.map(t))}var f=n(2);n(23);function E(e){return o.a.createElement("li",{className:"ToDoItem"},o.a.createElement("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete},o.a.createElement(f.b,null)),o.a.createElement("p",{className:"ToDoItem-p ".concat(e.completed&&"ToDoItem-p--complete")},e.text),o.a.createElement("span",{className:"Icon Icon-delete",onClick:e.onDelete},o.a.createElement(f.e,null)))}n(25);function p(e){return o.a.createElement("button",{className:"CreateToDoButton",onClick:function(){e.setOpenModal(function(e){return!e})}},"+")}var h=n(4),g=n.n(h);n(27);function T(e){var t=e.children;return g.a.createPortal(o.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}n(29);function D(e){var t=e.addToDo,n=e.setOpenModal,a=o.a.useState(""),r=Object(u.a)(a,2),c=r[0],l=r[1],s=function(e){e.preventDefault(),console.log(c),t(c),n(!1)};return o.a.createElement("form",{onSubmit:s},o.a.createElement("label",null,"Enter your new task:"),o.a.createElement("textarea",{value:c,onChange:function(e){l(e.target.value),console.log(e.target.value)},placeholder:"Learn Redux on Platzi"}),o.a.createElement("div",{className:"TodoForm-buttonContainer"},o.a.createElement("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){n(!1)}},"Cancel"),o.a.createElement("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",onClick:s},"Add")))}n(31);function v(e){e.error;return o.a.createElement("li",{className:"ToDosError"},o.a.createElement("span",{className:"errorIcon"},o.a.createElement(f.d,null)),o.a.createElement("h2",null,"Sorry! It's not you, it's us"),o.a.createElement("p",null,"Please reload page."))}n(33);function b(e){e.error;return o.a.createElement("div",{className:"LoadingToDo-container"},o.a.createElement("span",{className:"LoadingToDo-completeIcon"}),o.a.createElement("p",{className:"LoadingToDo-text"},"working"),o.a.createElement("span",{className:"LoadingToDo-deleteIcon"}))}n(35);function y(e){e.error;return o.a.createElement("li",{className:"EmptyToDos"},o.a.createElement("span",{className:"emptyIcon"},o.a.createElement(f.c,null)),o.a.createElement("h2",null,"Wow! It seems you're done for today."),o.a.createElement("p",null,"Hit the ",o.a.createElement("span",{className:"miniAddButton"},o.a.createElement(f.a,null))," button to add a new task"))}function S(e){var t=e.children,n=e.loading;return o.a.createElement("header",null,o.a.Children.toArray(t).map(function(e){return o.a.cloneElement(e,{loading:n})}))}n(37);var N,O=(N=function(e){var t=e.show,n=e.toggleShow;return t?o.a.createElement("div",{class:"ChangeAlert-container"},o.a.createElement("div",{className:"ChangeAlert"},o.a.createElement("p",null,"Changes detected"),o.a.createElement("button",{onClick:function(){return n(!1)}},"Reload info"))):null},function(e){var t=o.a.useState(!1),n=Object(u.a)(t,2),a=n[0],r=n[1];return window.addEventListener("storage",function(e){"TODOS_V1"===e.key&&(console.log("Changes detected on TODOS_V1"),r(!0))}),o.a.createElement(N,{show:a,toggleShow:function(){e.synchronize(),r(!1)}})});var C=function(){var e=s(),t=e.error,n=e.loading,a=e.searchedToDos,r=e.completeToDo,c=e.deleteToDo,l=e.openModal,u=e.setOpenModal,f=e.totalToDos,h=e.completedToDos,g=e.searchValue,N=e.setSearchValue,C=e.addToDo,I=e.synchronizeToDos;return o.a.createElement(o.a.Fragment,null,o.a.createElement(S,{loading:n},o.a.createElement(i,{totalToDos:f,completedToDos:h}),o.a.createElement(m,{searchValue:g,setSearchValue:N})),o.a.createElement(d,{error:t,loading:n,searchedToDos:a,searchText:g,totalToDos:f,onError:function(){return o.a.createElement(v,null)},onLoading:function(){return o.a.createElement(b,null)},onEmptyToDos:function(){return o.a.createElement(y,null)},onEmptySearchResults:function(e){return o.a.createElement("p",null,"No hay resultados para ",e)}},function(e){return o.a.createElement(E,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return c(e.text)}})}),!!l&&o.a.createElement(T,null,o.a.createElement(D,{addToDo:C,setOpenModal:u})),o.a.createElement(p,{setOpenModal:u}),o.a.createElement(O,{synchronize:I}))};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(C,null))}],[[7,2,1]]]);
//# sourceMappingURL=main.7df7fdad.chunk.js.map