(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(67)},37:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),i=a.n(l),s=a(7),c=(a(37),a(1)),o=a(2),u=a(4),m=a(3),p=a(5),h=a(15),d=a(6),g=a.n(d),v=g.a.create({baseURL:"https://frutfrut.herokuapp.com/api",withCredentials:!0}),E=function(e,t,a,n){return v.post("/signup",{username:e,password:t,email:a,imgPath:n}).then(function(e){return e.data})},f=function(e,t){return v.post("/login",{username:e,password:t}).then(function(e){return e.data})},b=function(){return v.get("/logout").then(function(e){return e.data})},y=function(){return v.get("/loggedin").then(function(e){return e.data})},j=function(){return v.get("/users").then(function(e){return e.data})},C=function(e){return v.post("/upload",e).then(function(e){return e.data})},O=function(e){return v.get("/issues?type=".concat(e)).then(function(e){return e.data})},k=function(){return v.get("/github").then(function(e){return e.data})},w=function(e){return g.a.get("https://api.github.com/search/issues?q=is:pr%20label:".concat(e,"%20org:facebook%20repo:react/scrape-it")).then(function(e){return e.data})},S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loggedIn:a.props.loggedIn},a.handleLogout=function(){b().then(function(){a.setState({loggedIn:null}),a.props.setUser(null)})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.loggedIn!==e.loggedIn&&this.setState({loggedIn:this.props.loggedIn})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"nav-style"},this.state.loggedIn?r.a.createElement("ul",null,r.a.createElement("li",null,"Welcome ",this.state.loggedIn.username," !"),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/profile",style:{textDecoration:"none"}},"Profile")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/projects",style:{textDecoration:"none"}},"Projects")),r.a.createElement("li",{onClick:this.handleLogout},r.a.createElement(s.b,{to:"/"},"Log out"))):r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/signup",style:{textDecoration:"none"}},"Sign up")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/login",style:{textDecoration:"none"}},"Log in"))))}}]),t}(r.a.Component),I=a(9),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",displayForm:!1},a.handleSubmit=function(e){e.preventDefault();var t=a.props.project._id;g.a.put("https://frutfrut.herokuapp.com"+"/api/projects/".concat(t),{title:a.state.title,description:a.state.description},{withCredentials:!0}).then(function(){a.props.getDetails(),a.setState({title:"",description:"",displayForm:!1}),a.props.clicked()})},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(I.a)({},t,n))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"title:"),r.a.createElement("input",{className:"form-control",value:this.state.title,onChange:this.handleChange,name:"title",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"description:"),r.a.createElement("input",{className:"form-control",value:this.state.description,onChange:this.handleChange,type:"text",name:"description"})),r.a.createElement("button",{className:"btn btn-primary"},"Update Project")))}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",type:"",status:"",priority:"",severity:"",displayForm:!1},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(I.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.props.project._id;g.a.post("https://frutfrut.herokuapp.com/api/issues",{title:a.state.title,description:a.state.description,type:a.state.type,status:a.state.status,priority:a.state.priority,severity:a.state.severity,project:t},{withCredentials:!0}).then(function(){a.props.getProject(),a.setState({title:"",description:"",type:"",status:"",priority:"",severity:"",displayForm:!1})})},a.toggleForm=function(){a.setState({displayForm:!a.state.displayForm})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("button",{className:"btn btn-primary",onClick:this.toggleForm},"Add Issue"),this.state.displayForm&&r.a.createElement("div",null,r.a.createElement("h3",null,"Add Issue"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"title:"),r.a.createElement("input",{value:this.state.title,onChange:this.handleChange,name:"title",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"description:"),r.a.createElement("input",{value:this.state.description,onChange:this.handleChange,type:"text",name:"description"})),r.a.createElement("div",null,r.a.createElement("label",null,"type"),r.a.createElement("select",{name:"type",onChange:this.handleChange},r.a.createElement("option",{value:"bug/issue"},"bug/issue"),r.a.createElement("option",{value:"enhancement"},"enhancement"),r.a.createElement("option",{value:"feature"},"feature"),r.a.createElement("option",{value:"documentation"},"documentation"))),r.a.createElement("div",null,r.a.createElement("label",null,"status"),r.a.createElement("select",{name:"status",onChange:this.handleChange},r.a.createElement("option",{value:"open"},"open"),r.a.createElement("option",{value:"assigned"},"assigned"),r.a.createElement("option",{value:"duplicated"},"duplicated"),r.a.createElement("option",{value:"closed"},"closed"),r.a.createElement("option",{value:"pending review'"},"pending review'"))),r.a.createElement("div",null,r.a.createElement("label",null,"priority"),r.a.createElement("select",{name:"priority",onChange:this.handleChange},r.a.createElement("option",{value:"immediate"},"immediate"),r.a.createElement("option",{value:"high"},"high"),r.a.createElement("option",{value:"medium"},"medium"),r.a.createElement("option",{value:"low"},"low"))),r.a.createElement("div",null,r.a.createElement("label",null,"severity"),r.a.createElement("select",{name:"severity",onChange:this.handleChange},r.a.createElement("option",{value:"critical"},"critical"),r.a.createElement("option",{value:"major"},"major"),r.a.createElement("option",{value:"minor"},"minor"),r.a.createElement("option",{value:"low-impact"},"low-impact"))),r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Create Issue"}))))}}]),t}(r.a.Component),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",subject:"",message:"",display:!1},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(I.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault();var t={email:a.props.user.email,subject:a.state.subject,message:a.state.message};g.a.post("https://frutfrut.herokuapp.com/api/send-email",t,{withCredentials:!0}).then(function(){console.log("done")})},a.handleClick=function(){a.setState({display:!a.state.display})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.user&&r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-danger mx-2 my-2",onClick:this.handleClick},this.props.user.username)),this.props.user&&this.state.display&&r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"email"),r.a.createElement("input",{type:"text",name:"email",onChange:function(t){return e.handleChange(t)},value:this.props.user.email})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"subject"),r.a.createElement("input",{type:"text",name:"subject",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"message"),r.a.createElement("textarea",{name:"message",id:"",cols:"30",rows:"10",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("button",null,"submit")))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},a.inviteUsers=function(){j().then(function(e){a.setState({users:e})})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.inviteUsers()}},{key:"render",value:function(){var e=this.state.users;return r.a.createElement("div",{className:"invite-btn"},e.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(D,{user:e}))}),r.a.createElement("div",null))}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={project:{},editBlock:!1,inviteBlock:!1},a.getProject=function(){var e=a.props.match.params.id;g.a.get("https://frutfrut.herokuapp.com"+"/api/projects/".concat(e),{withCredentials:!0}).then(function(e){a.setState({project:e.data})})},a.deleteProject=function(){var e=a.props.match.params.id;g.a.delete("https://frutfrut.herokuapp.com"+"/api/projects/".concat(e)).then(function(e){a.props.history.push("/projects")})},a.handleClick=function(){var e=a.props.match.params.id;g.a.get("http://localhost:5000/api/projects/".concat(e),{withCredentials:!0}).then(function(e){a.setState({project:e.data})})},a.showEditBlock=function(){a.setState({editBlock:!a.state.editBlock})},a.showInviteBlock=function(){a.setState({inviteBlock:!a.state.inviteBlock})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getProject()}},{key:"render",value:function(){var e=this.state.project,t=r.a.createElement(r.a.Fragment,null);return this.props.user&&this.props.user._id===e.user&&(t=r.a.createElement("div",{className:"edit-block"},this.state.editBlock&&r.a.createElement(x,{project:e,getDetails:this.getProject,clicked:this.showEditBlock}),r.a.createElement("button",{style:{marginTop:"10px"},className:"btn btn-danger",onClick:this.showEditBlock},"Edit Project"),r.a.createElement("button",{style:{marginTop:"10px"},className:"btn btn-danger",onClick:this.deleteProject},"Delete project"),r.a.createElement("button",{style:{marginTop:"10px"},className:"btn btn-primary",onClick:this.showInviteBlock},"Invite"),this.state.inviteBlock&&r.a.createElement(F,{project:e}))),r.a.createElement("div",null,r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.description),e.issues&&e.issues.length>0&&r.a.createElement("h3",null,"issues"),e.issues&&e.issues.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(s.b,{to:"/issues/".concat(e._id)},e.title," ",e.description))}),r.a.createElement("div",null," ",t," "),r.a.createElement(N,{project:e,getProject:this.getProject}),r.a.createElement("br",null),r.a.createElement(s.b,{to:"/projects"},"Back"))}}]),t}(r.a.Component),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:""},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(I.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault(),g.a.post("https://frutfrut.herokuapp.com/api/projects",{title:a.state.title,description:a.state.description},{withCredentials:!0}).then(function(){a.props.getData(),a.setState({title:"",description:""})})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"title:"),r.a.createElement("input",{className:"form-control",value:this.state.title,onChange:this.handleChange,name:"title",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"description:"),r.a.createElement("input",{className:"form-control",value:this.state.description,onChange:this.handleChange,type:"text",name:"description"})),r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Create Project"})))}}]),t}(r.a.Component),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[]},a.getData=function(){g.a.get("https://frutfrut.herokuapp.com/api/projects",{withCredentials:!0}).then(function(e){a.setState({projects:e.data})})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.a.createElement("div",null,"\u201a",this.state.projects.map(function(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start"},key:e._id},r.a.createElement(s.b,{to:"/projects/".concat(e._id)},r.a.createElement("h3",null,e.title)))})),r.a.createElement("div",null,r.a.createElement(P,{getData:this.getData})))}}]),t}(r.a.Component),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",type:"",status:"",priority:"",severity:"",displayForm:!1},a.handleSubmit=function(e){e.preventDefault();var t=a.props.id;g.a.put("https://frutfrut.herokuapp.com"+"/api/issues/".concat(t),{title:a.state.title,description:a.state.description,type:a.state.type,status:a.state.status,priority:a.state.priority,severity:a.state.severity},{withCredentials:!0}).then(function(){a.props.issueDetails(),a.props.clicked()})},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(I.a)({},t,n))},a.toggleForm=function(){a.setState({displayForm:!a.state.displayForm})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"title:"),r.a.createElement("input",{className:"form-control",value:this.state.title,onChange:this.handleChange,name:"title",type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"description:"),r.a.createElement("input",{className:"form-control",value:this.state.description,onChange:this.handleChange,type:"text",name:"description"})),r.a.createElement("div",null,r.a.createElement("label",null,"type"),r.a.createElement("select",{name:"type",onChange:this.handleChange},r.a.createElement("option",{value:"bug/issue"},"bug/issue"),r.a.createElement("option",{value:"enhancement"},"enhancement"),r.a.createElement("option",{value:"feature"},"feature"),r.a.createElement("option",{value:"documentation"},"documentation"))),r.a.createElement("div",null,r.a.createElement("label",null,"status"),r.a.createElement("select",{name:"status",onChange:this.handleChange},r.a.createElement("option",{value:"open"},"open"),r.a.createElement("option",{value:"assigned"},"assigned"),r.a.createElement("option",{value:"duplicated"},"duplicated"),r.a.createElement("option",{value:"closed"},"closed"),r.a.createElement("option",{value:"pending review'"},"pending review'"))),r.a.createElement("div",null,r.a.createElement("label",null,"priority"),r.a.createElement("select",{name:"priority",onChange:this.handleChange},r.a.createElement("option",{value:"immediate"},"immediate"),r.a.createElement("option",{value:"high"},"high"),r.a.createElement("option",{value:"medium"},"medium"),r.a.createElement("option",{value:"low"},"low"))),r.a.createElement("div",null,r.a.createElement("label",null,"severity"),r.a.createElement("select",{name:"severity",onChange:this.handleChange},r.a.createElement("option",{value:"critical"},"critical"),r.a.createElement("option",{value:"major"},"major"),r.a.createElement("option",{value:"minor"},"minor"),r.a.createElement("option",{value:"low-impact"},"low-impact"))),r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Update issue"})))}}]),t}(r.a.Component),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={content:"",displayForm:!1,issueId:a.props.issueId},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(I.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),g.a.post("https://frutfrut.herokuapp.com/api/comments",{content:a.state.content,issueId:a.state.issueId},{withCredentials:!0}).then(function(){a.setState({content:"",displayForm:!1}),a.props.clicked()})},a.toggleForm=function(){a.setState({displayForm:!a.state.displayForm})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){e.issueId!==this.props.issueId&&this.setState({issueId:this.props.issueId})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("button",{className:"btn",onClick:this.toggleForm},"Add Comment"),this.state.displayForm&&r.a.createElement("div",null,r.a.createElement("h3",null,"Add Comment"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"content:"),r.a.createElement("input",{className:"form-control",value:this.state.content,onChange:this.handleChange,name:"content",type:"text"})),r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Create Comment"}))))}}]),t}(r.a.Component),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",comments:"",type:"",status:"",priority:"",severity:"",user:"",_id:"",matchedIssues:[],editBlock:!1,githubdata:[]},a.getIssue=function(){var e=a.props.match.params.issueId;g.a.get("https://frutfrut.herokuapp.com"+"/api/issues/".concat(e),{withCredentials:!0}).then(function(e){O(e.data.type).then(function(t){a.setState({matchedIssues:t}),w(e.data.type).then(function(e){a.setState({githubdata:e})})}),a.setState({title:e.data.title,description:e.data.description,comments:e.data.comments,type:e.data.type,status:e.data.status,priority:e.data.priority,severity:e.data.severity,user:e.data.user,_id:e.data._id})})},a.showEditBlock=function(){a.setState({editBlock:!a.state.editBlock})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;this.props.match.params.issueId!==this.state._id&&this.getIssue();var t=this.state,a=t._id,n=t.title,l=t.description,i=t.type,c=t.status,o=t.priority,u=t.severity,m=t.comments,p=t.user,h=t.matchedIssues,d=(t.githubdata,r.a.createElement(r.a.Fragment,null));return this.props.user&&this.props.user._id===p&&(d=r.a.createElement("div",null,r.a.createElement(_,{id:a,issueDetails:this.getIssue,clicked:this.showEditBlock}))),r.a.createElement("div",null,r.a.createElement("h1",null,"Title: ",n),r.a.createElement("h2",null,"description: ",l),r.a.createElement("div",{style:{left:"100px",position:"absolute"}},"Issues with same type:",h.filter(function(t){return t._id!==e.state._id}).map(function(e){return r.a.createElement("p",null,r.a.createElement(s.b,{key:e._id,to:"/issues/".concat(e._id)},e.title," "))})),r.a.createElement("p",null,"type: ",i," "),r.a.createElement("p",null,"status: ",c," "),r.a.createElement("p",null,"priority: ",o," "),r.a.createElement("p",null,"severity: ",u," "),r.a.createElement("p",null,this.state.githubdata&&this.state.githubdata.items&&this.state.githubdata.items.map(function(e){return r.a.createElement("a",{href:"".concat(e.url)},e.title)})," "),r.a.createElement("div",null,r.a.createElement(A,{issueId:this.state._id,clicked:this.getIssue}),m&&m.map(function(e){return r.a.createElement("div",{key:e._id},e.content)})),r.a.createElement("div",null,this.state.editBlock&&r.a.createElement("div",null," ",d," "),r.a.createElement("button",{style:{marginTop:"10px"},className:"btn btn-danger",onClick:this.showEditBlock},"Edit Issue")))}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",email:"",imgPath:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(I.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,l=t.email,i=t.imgPath;E(n,r,l,i).then(function(e){a.props.setUser(e),a.setState({username:"",password:"",email:"",imgPath:""}),a.props.history.push("/profile")})},a.handleUpload=function(e){var t=e.target.files[0],n=new FormData;n.append("imgPath",t),C(n).then(function(e){a.setState({imgPath:e.imgPath})})},a.githubLogin=function(){k().then(function(e){return console.log("success")}).catch(function(e){return console.log("error")})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"username: "),r.a.createElement("input",{value:this.state.username,onChange:this.handleChange,type:"text",name:"username"})),r.a.createElement("div",null,r.a.createElement("label",null,"password: "),r.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",name:"password"})),r.a.createElement("div",null,r.a.createElement("label",null,"email: "),r.a.createElement("input",{value:this.state.email,onChange:this.handleChange,type:"text",name:"email"})),r.a.createElement("div",null,r.a.createElement("label",null,"Photo"),r.a.createElement("input",{type:"file",name:"imgPath",onChange:this.handleUpload})),r.a.createElement("input",{type:"submit",value:"signup"})),r.a.createElement("a",{href:"http://localhost:5000/api/github"},"Github login "))}}]),t}(r.a.Component),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(I.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;f(n,r).then(function(e){a.props.setUser(e),a.setState({username:"",password:""})})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"username"),r.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange,value:this.state.username})),r.a.createElement("div",null,r.a.createElement("label",null,"password"),r.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange,value:this.state.password})),r.a.createElement("input",{type:"submit",value:"login"})))}}]),t}(r.a.Component),W=a(31),J=function(e){var t=e.component,a=e.user,n=Object(W.a)(e,["component","user"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object.assign({},e,{user:a})):r.a.createElement(h.a,{to:{pathname:"/",state:{from:e.location}}})}}))},q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"landing-page"},"Manage your Software Issues Better")}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.get("/userprojects").then(function(e){return e.data}).then(function(t){e.setState({projects:t})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.user&&r.a.createElement("div",null,r.a.createElement("img",{className:"profile-img",src:this.props.user.imgPath,alt:"profileImg"}),r.a.createElement("h1",null,this.props.user.username),this.state.projects&&this.state.projects.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(s.b,{to:"/projects/".concat(e._id)},e.title))})))}}]),t}(n.Component),R=(a(65),a(66),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loggedIn:null},a.setUser=function(e){a.setState({loggedIn:e})},a.getUser=function(){y().then(function(e){a.setState({loggedIn:e})})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(S,{setUser:this.setUser,loggedIn:this.state.loggedIn}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",render:function(){return r.a.createElement(q,{setUser:e.setUser})}}),r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(M,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(T,{setUser:e.setUser})}}),r.a.createElement(h.b,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(G,Object.assign({},t,{user:e.state.loggedIn}))}}),r.a.createElement(h.b,{exact:!0,path:"/projects/:id",render:function(t){return r.a.createElement(B,Object.assign({},t,{user:e.state.loggedIn}))}}),r.a.createElement(J,{user:this.state.loggedIn,component:U,exact:!0,path:"/projects"}),r.a.createElement(h.b,{path:"/issues/:issueId",render:function(t){return r.a.createElement(L,Object.assign({},t,{user:e.state.loggedIn}))}})))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(s.a,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.9221c335.chunk.js.map