(this.webpackJsonpch02=this.webpackJsonpch02||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},18:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=(a(17),a(8)),i=a(2),s=a(3),m=a(5),d=a(4),u=a(1),h=a(6),b=(a(18),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"page-header"},l.a.createElement("h1",null,"Project 01 - ToDo List ",l.a.createElement("small",null,"ReactJS")))}}]),t}(n.Component)),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={strSearch:""},a.handleSearch=a.handleSearch.bind(Object(u.a)(a)),a.handleClear=a.handleClear.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleSearch",value:function(){this.props.onClickGo(this.state.strSearch)}},{key:"handleClear",value:function(){this.setState({strSearch:""}),this.props.onClickGo("")}},{key:"handleChange",value:function(e){this.setState({strSearch:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{value:this.state.strSearch,onChange:this.handleChange,type:"text",className:"form-control",placeholder:"Search for..."}),l.a.createElement("span",{className:"input-group-append"},l.a.createElement("button",{onClick:this.handleSearch,className:"btn btn-info",type:"button"},"Go!"),l.a.createElement("button",{onClick:this.handleClear,className:"btn btn-warning",type:"button"},"Clear!"))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a.handleSort=a.handleSort.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleSort",value:function(e,t){console.log("handleSort: ",e+"-"+t),this.props.onClickSort(e,t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.orderBy+" - "+t.orderDir;return l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"btn btn-default dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort by"),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return e.handleSort("name","asc")},role:"button"},"Name ASC")),l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return e.handleSort("name","desc")},role:"button"},"Name DESC")),l.a.createElement("li",{role:"separator",className:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return e.handleSort("level","asc")},role:"button"},"Level ASC")),l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return e.handleSort("level","desc")},role:"button"},"Level DESC"))),l.a.createElement("span",{className:"badge badge-success badge-medium"}," ",a," "))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.orderBy,a=e.orderDir;return l.a.createElement("div",{className:"col-12 col-lg-6"},l.a.createElement("div",{className:"row"},l.a.createElement(v,{onClickSort:this.props.onClickSort,orderBy:t,orderDir:a}),l.a.createElement(p,{onClickGo:this.props.onClickSearchGo})))}}]),t}(n.Component),k=a(11),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={task_id:"",task_name:"",task_level:0},a.handleCancel=a.handleCancel.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.updateItem(this.props.itemSelected)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.updateItem(e.itemSelected)}},{key:"updateItem",value:function(e){e&&this.setState({task_id:e.id,task_name:e.name,task_level:e.level})}},{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(k.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t={name:this.state.task_name,id:this.state.task_id,level:this.state.task_level};this.props.onClickSubmit(t),e.preventDefault()}},{key:"handleCancel",value:function(){this.props.onClickCancel()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline justify-content-between"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"sr-only",htmlFor:!0},"label"),l.a.createElement("input",{value:this.state.task_name,onChange:this.handleChange,name:"task_name",type:"text",className:"form-control",placeholder:"Task Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"sr-only",htmlFor:!0},"label"),l.a.createElement("select",{value:this.state.task_level,onChange:this.handleChange,name:"task_level",className:"form-control",required:"required"},l.a.createElement("option",{value:0},"Small"),l.a.createElement("option",{value:1},"Medium"),l.a.createElement("option",{value:2},"High"))),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),l.a.createElement("button",{onClick:this.handleCancel,type:"button",className:"btn btn-secondary"},"Cancel"))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a.handleEdit=a.handleEdit.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleEdit",value:function(e){this.props.onClickEdit(e)}},{key:"handleDelete",value:function(e){this.props.onClickDelete(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.item,n=t.index;return l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"}," ",n+1," "),l.a.createElement("td",null,a.name),l.a.createElement("td",{className:"text-center"},this.showElementLevel(a.level)),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.handleEdit(a)},type:"button",className:"btn btn-warning"},"Edit"),l.a.createElement("button",{onClick:function(){return e.handleDelete(a.id)},type:"button",className:"btn btn-danger"},"Delete")))}},{key:"showElementLevel",value:function(e){var t=l.a.createElement("span",{className:"badge badge-secondary"},"Small");return 1===e?t=l.a.createElement("span",{className:"badge badge-info"},"Medium"):2===e&&(t=l.a.createElement("span",{className:"badge badge-danger"},"High")),t}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t,a){return l.a.createElement(f,{key:a,item:t,index:a,onClickEdit:e.props.onClickEdit,onClickDelete:e.props.onClickDelete})}));return l.a.createElement("div",{className:"panel panel-success"},l.a.createElement("div",{className:"panel-heading"},"List Task"),l.a.createElement("table",{className:"table table-hover "},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"10%"},className:"text-center"},"#"),l.a.createElement("th",null,"Task"),l.a.createElement("th",{style:{width:"20%"},className:"text-center"},"Level"),l.a.createElement("th",{style:{width:"160px"}},"Action"))),l.a.createElement("tbody",null,t)))}}]),t}(n.Component),j=a(7),O=a(21),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={items:[],itemSelected:null,isShowForm:!1,strSearch:"",orderBy:"name",orderDir:"asc"},a.handleSort=function(e,t){a.setState({orderBy:e,orderDir:t})},a.handleToggleForm=function(){a.setState({isShowForm:!a.state.isShowForm,itemSelected:null})},a.closeForm=a.closeForm.bind(Object(u.a)(a)),a.handleSearch=a.handleSearch.bind(Object(u.a)(a)),a.handleSort=a.handleSort.bind(Object(u.a)(a)),a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.handleEdit=a.handleEdit.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("task"))||[];this.setState({items:e})}},{key:"handleSubmit",value:function(e){var t=Object(o.a)(this.state.items),a=null;e.id?(t=Object(j.reject)(t,{id:e.id}),a=e.id):a=O(),t.push({id:a,name:e.name,level:+e.level}),this.setState({items:t,isShowForm:!1}),localStorage.setItem("task",JSON.stringify(t))}},{key:"handleEdit",value:function(e){this.setState({itemSelected:e,isShowForm:!0})}},{key:"handleDelete",value:function(e){var t=Object(o.a)(this.state.items);Object(j.remove)(t,(function(t){return t.id===e})),this.setState({items:t}),localStorage.setItem("task",JSON.stringify(t))}},{key:"handleSearch",value:function(e){this.setState({strSearch:e})}},{key:"closeForm",value:function(){this.setState({isShowForm:!1})}},{key:"render",value:function(){var e=Object(o.a)(this.state.items),t=[],a=null,n=l.a.createElement("button",{onClick:this.handleToggleForm,type:"button",className:"btn btn-info btn-block"},"Add Task"),r=this.state,c=r.orderBy,i=r.orderDir,s=r.isShowForm,m=r.strSearch,d=r.itemSelected;return t=Object(j.filter)(e,(function(e){return Object(j.includes)(e.name.toLowerCase(),m.toLowerCase())})),t=Object(j.orderBy)(t,[c],[i]),s&&(a=l.a.createElement(S,{itemSelected:d,onClickSubmit:this.handleSubmit,onClickCancel:this.closeForm}),n=l.a.createElement("button",{onClick:this.handleToggleForm,type:"button",className:"btn btn-success btn-block"},"Edit Task")),l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement("div",{className:"row"},l.a.createElement(E,{orderBy:c,orderDir:i,onClickSort:this.handleSort,onClickSearchGo:this.handleSearch}),l.a.createElement("div",{className:"col-12 col-lg-6"},l.a.createElement("div",{className:"form-group add-task"},n),a)),l.a.createElement(C,{onClickEdit:this.handleEdit,onClickDelete:this.handleDelete,items:t}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("main-content")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.fbb0954a.chunk.js.map