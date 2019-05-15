(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/image.f3dc8cba.png"},33:function(e,t,a){e.exports=a(68)},38:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),i=a.n(r),s=a(7),c=(a(38),a(1)),o=a(2),u=a(4),m=a(3),p=a(5),h=a(15),d=a(6),E=a.n(d),v=E.a.create({baseURL:(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_SERVER_URL:"heroku"}).HEROKU_URL||"http://localhost:5000")+"/api",withCredentials:!0}),g=function(e,t,a,n){return v.post("/signup",{username:e,password:t,email:a,imgPath:n}).then(function(e){return e.data})},b=function(e,t){return v.post("/login",{username:e,password:t}).then(function(e){return e.data})},f=function(){return v.get("/logout").then(function(e){return e.data})},y=function(){return v.get("/loggedin").then(function(e){return e.data})},j=function(){return v.get("/users").then(function(e){return e.data})},C=function(e){return v.post("/upload",e).then(function(e){return e.data})},O=function(e){return v.get("/issues?type=".concat(e)).then(function(e){return e.data})},k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={loggedIn:a.props.loggedIn},a.handleLogout=function(){f().then(function(){a.setState({loggedIn:null}),a.props.setUser(null)})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.loggedIn!==e.loggedIn&&this.setState({loggedIn:this.props.loggedIn})}},{key:"render",value:function(){return l.a.createElement("nav",{className:"nav-style"},this.state.loggedIn?l.a.createElement("ul",null,l.a.createElement("li",null,"Welcome ",this.state.loggedIn.username," !"),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/profile",style:{textDecoration:"none"}},"Profile")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/projects",style:{textDecoration:"none"}},"Projects")),l.a.createElement("li",{onClick:this.handleLogout},l.a.createElement(s.b,{to:"/"},"Log out"))):l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/signup",style:{textDecoration:"none"}},"Sign up")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/login",style:{textDecoration:"none"}},"Log in"))))}}]),t}(l.a.Component),w=a(9),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",description:"",displayForm:!1},a.handleSubmit=function(e){e.preventDefault();var t=a.props.project._id;E.a.put((Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_SERVER_URL:"heroku"}).HEROKU_URL||"http://localhost:5000")+"/api/projects/".concat(t),{title:a.state.title,description:a.state.description},{withCredentials:!0}).then(function(){a.props.getDetails(),a.setState({title:"",description:"",displayForm:!1}),a.props.clicked()})},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(w.a)({},t,n))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"title:"),l.a.createElement("input",{className:"form-control",value:this.state.title,onChange:this.handleChange,name:"title",type:"text"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"description:"),l.a.createElement("input",{className:"form-control",value:this.state.description,onChange:this.handleChange,type:"text",name:"description"})),l.a.createElement("button",{className:"btn btn-primary"},"Update Project")))}}]),t}(l.a.Component),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",description:"",type:"",status:"",priority:"",severity:"",displayForm:!1},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(w.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault();var t=a.props.project._id;E.a.post((Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_SERVER_URL:"heroku"}).HEROKU_URL||"http://localhost:5000")+"/api/issues",{title:a.state.title,description:a.state.description,type:a.state.type,status:a.state.status,priority:a.state.priority,severity:a.state.severity,project:t},{withCredentials:!0}).then(function(){a.props.getProject(),a.setState({title:"",description:"",type:"",status:"",priority:"",severity:"",displayForm:!1})})},a.toggleForm=function(){a.setState({displayForm:!a.state.displayForm})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("button",{className:"btn btn-primary",onClick:this.toggleForm},"Add Issue"),this.state.displayForm&&l.a.createElement("div",null,l.a.createElement("h3",null,"Add Issue"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"title:"),l.a.createElement("input",{value:this.state.title,onChange:this.handleChange,name:"title",type:"text"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"description:"),l.a.createElement("input",{value:this.state.description,onChange:this.handleChange,type:"text",name:"description"})),l.a.createElement("div",null,l.a.createElement("label",null,"type"),l.a.createElement("select",{name:"type",onChange:this.handleChange},l.a.createElement("option",{value:"bug/issue"},"bug/issue"),l.a.createElement("option",{value:"enhancement"},"enhancement"),l.a.createElement("option",{value:"feature"},"feature"),l.a.createElement("option",{value:"documentation"},"documentation"))),l.a.createElement("div",null,l.a.createElement("label",null,"status"),l.a.createElement("select",{name:"status",onChange:this.handleChange},l.a.createElement("option",{value:"open"},"open"),l.a.createElement("option",{value:"assigned"},"assigned"),l.a.createElement("option",{value:"duplicated"},"duplicated"),l.a.createElement("option",{value:"closed"},"closed"),l.a.createElement("option",{value:"pending review'"},"pending review'"))),l.a.createElement("div",null,l.a.createElement("label",null,"priority"),l.a.createElement("select",{name:"priority",onChange:this.handleChange},l.a.createElement("option",{value:"immediate"},"immediate"),l.a.createElement("option",{value:"high"},"high"),l.a.createElement("option",{value:"medium"},"medium"),l.a.createElement("option",{value:"low"},"low"))),l.a.createElement("div",null,l.a.createElement("label",null,"severity"),l.a.createElement("select",{name:"severity",onChange:this.handleChange},l.a.createElement("option",{value:"critical"},"critical"),l.a.createElement("option",{value:"major"},"major"),l.a.createElement("option",{value:"minor"},"minor"),l.a.createElement("option",{value:"low-impact"},"low-impact"))),l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Create Issue"}))))}}]),t}(l.a.Component),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",subject:"",message:"",display:!1},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(w.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault();var t={email:a.props.user.email,subject:a.state.subject,message:a.state.message};E.a.post((Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_SERVER_URL:"heroku"}).HEROKU_URL||"http://localhost:5000")+"/api/send-email",t,{withCredentials:!0}).then(function(){console.log("done")})},a.handleClick=function(){a.setState({display:!a.state.display})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.props.user&&l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-danger mx-2 my-2",onClick:this.handleClick},this.props.user.username)),this.props.user&&this.state.display&&l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"email"),l.a.createElement("input",{type:"text",name:"email",onChange:function(t){return e.handleChange(t)},value:this.props.user.email})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"subject"),l.a.createElement("input",{type:"text",name:"subject",onChange:function(t){return e.handleChange(t)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"message"),l.a.createElement("textarea",{name:"message",id:"",cols:"30",rows:"10",onChange:function(t){return e.handleChange(t)}})),l.a.createElement("button",null,"submit")))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={users:[]},a.inviteUsers=function(){j().then(function(e){a.setState({users:e})})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.inviteUsers()}},{key:"render",value:function(){var e=this.state.users;return l.a.createElement("div",{className:"invite-btn"},e.map(function(e){return l.a.createElement("div",{key:e._id},l.a.createElement(U,{user:e}))}),l.a.createElement("div",null))}}]),t}(l.a.Component),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={project:{},editBlock:!1,inviteBlock:!1},a.getProject=function(){var e=a.props.match.params.id;E.a.get("http://localhost:5000/api/projects/".concat(e),{withCredentials:!0}).then(function(e){a.setState({project:e.data})})},a.deleteProject=function(){var e=a.props.match.params.id;E.a.delete("http://localhost:5000/api/projects/".concat(e)).then(function(e){a.props.history.push("/projects")})},a.handleClick=function(){var e=a.props.match.params.id;E.a.get("http://localhost:5000/api/projects/".concat(e),{withCredentials:!0}).then(function(e){a.setState({project:e.data})})},a.showEditBlock=function(){a.setState({editBlock:!a.state.editBlock})},a.showInviteBlock=function(){a.setState({inviteBlock:!a.state.inviteBlock})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getProject()}},{key:"render",value:function(){var e=this.state.project,t=l.a.createElement(l.a.Fragment,null);return this.props.user&&this.props.user._id===e.user&&(t=l.a.createElement("div",{className:"edit-block"},this.state.editBlock&&l.a.createElement(_,{project:e,getDetails:this.getProject,clicked:this.showEditBlock}),l.a.createElement("button",{style:{marginTop:"10px"},className:"btn btn-danger",onClick:this.showEditBlock},"Edit Project"),l.a.createElement("button",{style:{marginTop:"10px"},className:"btn btn-danger",onClick:this.deleteProject},"Delete project"),l.a.createElement("button",{style:{marginTop:"10px"},className:"btn btn-primary",onClick:this.showInviteBlock},"Invite"),this.state.inviteBlock&&l.a.createElement(R,{project:e}))),l.a.createElement("div",null,l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.description),e.issues&&e.issues.length>0&&l.a.createElement("h3",null,"issues"),e.issues&&e.issues.map(function(e){return l.a.createElement("div",{key:e._id},l.a.createElement(s.b,{to:"/issues/".concat(e._id)},e.title," ",e.description))}),l.a.createElement("div",null," ",t," "),l.a.createElement(S,{project:e,getProject:this.getProject}),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/projects"},"Back"))}}]),t}(l.a.Component),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",description:""},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(w.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault(),E.a.post((Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_SERVER_URL:"heroku"}).HEROKU_URL||"http://localhost:5000")+"/api/projects",{title:a.state.title,description:a.state.description},{withCredentials:!0}).then(function(){a.props.getData(),a.setState({title:"",description:""})})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"title:"),l.a.createElement("input",{className:"form-control",value:this.state.title,onChange:this.handleChange,name:"title",type:"text"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"description:"),l.a.createElement("input",{className:"form-control",value:this.state.description,onChange:this.handleChange,type:"text",name:"description"})),l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Create Project"})))}}]),t}(l.a.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={projects:[]},a.getData=function(){E.a.get((Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_SERVER_URL:"heroku"}).HEROKU_URL||"http://localhost:5000")+"/api/projects",{withCredentials:!0}).then(function(e){a.setState({projects:e.data})})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement("div",null,"\u201a",this.state.projects.map(function(e){return l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start"},key:e._id},l.a.createElement(s.b,{to:"/projects/".concat(e._id)},l.a.createElement("h3",null,e.title)))})),l.a.createElement("div",null,l.a.createElement(P,{getData:this.getData})))}}]),t}(l.a.Component),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",description:"",type:"",status:"",priority:"",severity:"",displayForm:!1},a.handleSubmit=function(e){e.preventDefault();var t=a.props.id;E.a.put((Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_SERVER_URL:"heroku"}).HEROKU_URL||"http://localhost:5000")+"/api/issues/".concat(t),{title:a.state.title,description:a.state.description,type:a.state.type,status:a.state.status,priority:a.state.priority,severity:a.state.severity},{withCredentials:!0}).then(function(){a.props.issueDetails(),a.props.clicked()})},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(w.a)({},t,n))},a.toggleForm=function(){a.setState({displayForm:!a.state.displayForm})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"title:"),l.a.createElement("input",{className:"form-control",value:this.state.title,onChange:this.handleChange,name:"title",type:"text"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"description:"),l.a.createElement("input",{className:"form-control",value:this.state.description,onChange:this.handleChange,type:"text",name:"description"})),l.a.createElement("div",null,l.a.createElement("label",null,"type"),l.a.createElement("select",{name:"type",onChange:this.handleChange},l.a.createElement("option",{value:"bug/issue"},"bug/issue"),l.a.createElement("option",{value:"enhancement"},"enhancement"),l.a.createElement("option",{value:"feature"},"feature"),l.a.createElement("option",{value:"documentation"},"documentation"))),l.a.createElement("div",null,l.a.createElement("label",null,"status"),l.a.createElement("select",{name:"status",onChange:this.handleChange},l.a.createElement("option",{value:"open"},"open"),l.a.createElement("option",{value:"assigned"},"assigned"),l.a.createElement("option",{value:"duplicated"},"duplicated"),l.a.createElement("option",{value:"closed"},"closed"),l.a.createElement("option",{value:"pending review'"},"pending review'"))),l.a.createElement("div",null,l.a.createElement("label",null,"priority"),l.a.createElement("select",{name:"priority",onChange:this.handleChange},l.a.createElement("option",{value:"immediate"},"immediate"),l.a.createElement("option",{value:"high"},"high"),l.a.createElement("option",{value:"medium"},"medium"),l.a.createElement("option",{value:"low"},"low"))),l.a.createElement("div",null,l.a.createElement("label",null,"severity"),l.a.createElement("select",{name:"severity",onChange:this.handleChange},l.a.createElement("option",{value:"critical"},"critical"),l.a.createElement("option",{value:"major"},"major"),l.a.createElement("option",{value:"minor"},"minor"),l.a.createElement("option",{value:"low-impact"},"low-impact"))),l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Update issue"})))}}]),t}(l.a.Component),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={content:"",displayForm:!1,issueId:a.props.issueId},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(w.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault(),E.a.post((Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_SERVER_URL:"heroku"}).HEROKU_URL||"http://localhost:5000")+"/api/comments",{content:a.state.content,issueId:a.state.issueId},{withCredentials:!0}).then(function(){a.setState({content:"",displayForm:!1}),a.props.clicked()})},a.toggleForm=function(){a.setState({displayForm:!a.state.displayForm})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){e.issueId!==this.props.issueId&&this.setState({issueId:this.props.issueId})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("button",{className:"btn",onClick:this.toggleForm},"Add Comment"),this.state.displayForm&&l.a.createElement("div",null,l.a.createElement("h3",null,"Add Comment"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"content:"),l.a.createElement("input",{className:"form-control",value:this.state.content,onChange:this.handleChange,name:"content",type:"text"})),l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Create Comment"}))))}}]),t}(l.a.Component),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",description:"",comments:"",type:"",status:"",priority:"",severity:"",user:"",_id:"",matchedIssues:[],editBlock:!1},a.getIssue=function(){var e=a.props.match.params.issueId;E.a.get((Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_SERVER_URL:"heroku"}).HEROKU_URL||"http://localhost:5000")+"/api/issues/".concat(e),{withCredentials:!0}).then(function(e){O(e.data.type).then(function(e){a.setState({matchedIssues:e})}),a.setState({title:e.data.title,description:e.data.description,comments:e.data.comments,type:e.data.type,status:e.data.status,priority:e.data.priority,severity:e.data.severity,user:e.data.user,_id:e.data._id})})},a.showEditBlock=function(){a.setState({editBlock:!a.state.editBlock})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.props.match.params.issueId!==this.state._id&&this.getIssue();var e=this.state,t=e._id,a=e.title,n=e.description,r=e.type,i=e.status,c=e.priority,o=e.severity,u=e.comments,m=e.user,p=e.matchedIssues,h=l.a.createElement(l.a.Fragment,null);return this.props.user&&this.props.user._id===m&&(h=l.a.createElement("div",null,l.a.createElement(L,{id:t,issueDetails:this.getIssue,clicked:this.showEditBlock}))),l.a.createElement("div",null,l.a.createElement("h1",null,"Title: ",a),l.a.createElement("h2",null,"description: ",n),l.a.createElement("div",{style:{left:"100px",position:"absolute"}},p.map(function(e){return l.a.createElement("p",null,l.a.createElement(s.b,{key:e._id,to:"/issues/".concat(e._id)},e.title," "))})),l.a.createElement("p",null,"type: ",r," "),l.a.createElement("p",null,"status: ",i," "),l.a.createElement("p",null,"priority: ",c," "),l.a.createElement("p",null,"severity: ",o," "),l.a.createElement("div",null,l.a.createElement(D,{issueId:this.state._id,clicked:this.getIssue}),u&&u.map(function(e){return l.a.createElement("div",{key:e._id},e.content)})),l.a.createElement("div",null,this.state.editBlock&&l.a.createElement("div",null," ",h," "),l.a.createElement("button",{style:{marginTop:"10px"},className:"btn btn-danger",onClick:this.showEditBlock},"Edit Issue")))}}]),t}(l.a.Component),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",email:"",imgPath:""},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(w.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,l=t.password,r=t.email,i=t.imgPath;g(n,l,r,i).then(function(e){a.props.setUser(e),a.setState({username:"",password:"",email:"",imgPath:""}),a.props.history.push("/profile")})},a.handleUpload=function(e){var t=e.target.files[0],n=new FormData;n.append("imgPath",t),C(n).then(function(e){a.setState({imgPath:e.imgPath})})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"username: "),l.a.createElement("input",{value:this.state.username,onChange:this.handleChange,type:"text",name:"username"})),l.a.createElement("div",null,l.a.createElement("label",null,"password: "),l.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",name:"password"})),l.a.createElement("div",null,l.a.createElement("label",null,"email: "),l.a.createElement("input",{value:this.state.email,onChange:this.handleChange,type:"text",name:"email"})),l.a.createElement("div",null,l.a.createElement("label",null,"Photo"),l.a.createElement("input",{type:"file",name:"imgPath",onChange:this.handleUpload})),l.a.createElement("input",{type:"submit",value:"signup"})))}}]),t}(l.a.Component),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:""},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(w.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,l=t.password;b(n,l).then(function(e){a.props.setUser(e),a.setState({username:"",password:""})})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"username"),l.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange,value:this.state.username})),l.a.createElement("div",null,l.a.createElement("label",null,"password"),l.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange,value:this.state.password})),l.a.createElement("input",{type:"submit",value:"login"})))}}]),t}(l.a.Component),F=a(31),V=function(e){var t=e.component,a=e.user,n=Object(F.a)(e,["component","user"]);return l.a.createElement(h.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(t,Object.assign({},e,{user:a})):l.a.createElement(h.a,{to:{pathname:"/",state:{from:e.location}}})}}))},T=a(32),H=a.n(T),K=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{src:H.a,alt:"landing"}))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={projects:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.get("/userprojects").then(function(e){return e.data}).then(function(t){e.setState({projects:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,this.props.user&&l.a.createElement("div",null,l.a.createElement("img",{src:this.props.user.imgPath,alt:"profileImg"}),l.a.createElement("h1",null,this.props.user.username),this.state.projects&&this.state.projects.map(function(e){return l.a.createElement("div",{key:e._id},l.a.createElement(s.b,{to:"/projects/".concat(e._id)},e.title))})))}}]),t}(n.Component),W=(a(66),a(67),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={loggedIn:null},a.setUser=function(e){a.setState({loggedIn:e})},a.getUser=function(){y().then(function(e){a.setState({loggedIn:e})})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(k,{setUser:this.setUser,loggedIn:this.state.loggedIn}),l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",render:function(){return l.a.createElement(K,{setUser:e.setUser})}}),l.a.createElement(h.b,{exact:!0,path:"/signup",render:function(t){return l.a.createElement(x,Object.assign({},t,{setUser:e.setUser}))}}),l.a.createElement(h.b,{exact:!0,path:"/login",render:function(){return l.a.createElement(B,{setUser:e.setUser})}}),l.a.createElement(h.b,{exact:!0,path:"/profile",render:function(t){return l.a.createElement(M,Object.assign({},t,{user:e.state.loggedIn}))}}),l.a.createElement(h.b,{exact:!0,path:"/projects/:id",render:function(t){return l.a.createElement(I,Object.assign({},t,{user:e.state.loggedIn}))}}),l.a.createElement(V,{user:this.state.loggedIn,component:N,exact:!0,path:"/projects"}),l.a.createElement(h.b,{path:"/issues/:issueId",render:function(t){return l.a.createElement(A,Object.assign({},t,{user:e.state.loggedIn}))}})))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(s.a,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.d08d3c82.chunk.js.map