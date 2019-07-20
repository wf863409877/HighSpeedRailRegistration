window.onload=function(){
	//下拉列表状态
	var listflag=false;
	//获取下拉列表按钮
	var list_a=document.getElementsByClassName("list-a")[0];
	//获取ul列表
	var nav_list=document.getElementsByClassName("nav-list")[0];
	list_a.addEventListener("click",function(){
		if(!listflag){
			//开启列表
			nav_list.className="nav-list";
			listflag=true;
		}else{
			if(listflag){
				nav_list.className="nav-list nav-list-int";
				listflag=false;
			}
		}
	})
	//列表end
//开始正则本地验证
// 初始化验证结果对象
var myform={
	username:false,
	password:false,
	passwordagin:false,
	name:false,
	cardNumber:false,
	email:false,
	phoneNumber:false,
	agreement:false
}
// 初始化一个接受结果的对象
var formValue={
	cardNumber:null,
	email:null,
	name:null,
	password:null,
	phoneNumber:null,
	username:null,
	idcardType:null,
	passengerType:null
};
////用户名验证
var username=document.getElementById("username");
var usernameTip=document.getElementById("usernameTip");
username.onblur=function(){
	var regExp=/^[a-zA-Z]\w{5,29}$/;
	if(regExp.test(username.value)){
		myform.username=true;
		usernameTip.innerHTML="用户名输入正确";
		usernameTip.classList.add("input-true");
		usernameTip.classList.remove("input-false");
	}else{
		myform.username=false;
		usernameTip.innerHTML="6-30位字母、数字或_，字母开头";
		usernameTip.classList.add("input-false");
		usernameTip.classList.remove("input-true");
	}
}
////登录密码验证
var password=document.getElementById("password");
var Complexity2=document.getElementById("Complexity2");
var Complexity3=document.getElementById("Complexity3");
var passwordTipTr=document.getElementById("passwordTipTr");
password.onblur=function(){
	var regExp=/^\S{6,20}$/;
	
	if(regExp.test(password.value)){
		myform.password=true;
		passwordTipTr.style.display="none";
	}else{
		myform.password=false;
		passwordTipTr.style.display="table-row";
	}
}
//验证密码强度
password.oninput=function(){
	var regExp1=/^([\d]+)|([a-zA-Z]+)|([!@#$%^&*_-]+)$/;
	var regExp2=/^((?=.{6,20})(?=.*[a-zA-Z])(?=.*[!@#$%^&*_-]).*)|((?=.{6,20})(?=.*[a-zA-Z])(?=.*[\d]).*)|((?=.{6,20})(?=.*[!@#$%^&*_-])(?=.*[\d]).*)$/;
	var regExp3=/^(?=.{6,20})(?=.*[a-zA-Z])(?=.*[!@#$%^&*_-])(?=.*\d).*$/;

	if(regExp1.test(password.value)){
		Complexity2.classList.remove("Complexity-active2");
		Complexity3.classList.remove("Complexity-active3");
	}
	
	if(regExp2.test(password.value)){
		Complexity2.classList.add("Complexity-active2");
		Complexity3.classList.remove("Complexity-active3");
	}

	if(regExp3.test(password.value)){
		Complexity2.classList.add("Complexity-active2");
		Complexity3.classList.add("Complexity-active3");	
	}
				
		
}
////确认密码
var passwordagin=document.getElementById("passwordagin");
var passwordaginTip=document.getElementById("passwordaginTip");
passwordagin.onblur=function(){
	if(myform.password==true){
		if(passwordagin.value==""){
			myform.passwordagin=false;
			passwordaginTip.innerHTML="不能为空值";
			passwordaginTip.classList.add("input-false");
			passwordaginTip.classList.remove("input-true");
		}else{
			if(passwordagin!=password.value){
			myform.passwordagin=false;
			passwordaginTip.innerHTML="两次输入不一致";
			passwordaginTip.classList.add("input-false");
			passwordaginTip.classList.remove("input-true");
			}
		}
			if(passwordagin.value==password.value){
				myform.passwordagin=true;
				passwordaginTip.innerHTML="两次输入一致";
				passwordaginTip.classList.add("input-true");
				passwordaginTip.classList.remove("input-false");

				}
	}
	
}
////姓名验证
var name=document.getElementById("name");
var nameTip=document.getElementById("nameTip");
name.onblur=function(){
	var regExp=/^[\u4e00-\u9fa5a-z]{3,30}$/i;
	if(regExp.test(name.value)){
		myform.name=true;
		nameTip.innerHTML="姓名输入正确";
		nameTip.classList.add("input-true");
		nameTip.classList.remove("input-false");
	}else{
		myform.name=false;
		nameTip.innerHTML="姓名只能包含中文或者英文,且字符在3-30个之间！";
		nameTip.classList.add("input-false");
		nameTip.classList.remove("input-true");
	}
}

////证件号码验证
var cardNumber=document.getElementById("cardNumber");
var cardNumberTip=document.getElementById("cardNumberTip");

cardNumber.onblur=function(){	
	var regExp=/^(\d{18})|(\d{17}[xX])$/;
	if(regExp.test(cardNumber.value)){
		myform.cardNumber=true;
		cardNumberTip.innerHTML="号码输入正确";
		cardNumberTip.classList.add("input-true");
		cardNumberTip.classList.remove("input-false");
	}else{
		myform.cardNumber=false;
		cardNumberTip.innerHTML="请输入18位身份证号码";
		cardNumberTip.classList.add("input-false");
		cardNumberTip.classList.remove("input-true");
	}
}

////邮箱验证
var email=document.getElementById("email");
var emailTip=document.getElementById("emailTip");
email.onblur=function(){	
	var regExp=/^[\w-]+@[\w-]+\.[\w-]+$/;
	if(regExp.test(email.value)){
		myform.email=true;
		emailTip.innerHTML="邮箱格式正确";
		emailTip.classList.add("input-true");
		emailTip.classList.remove("input-false");
	}else{
		myform.email=false;
		emailTip.innerHTML="请输入正确的邮箱";
		emailTip.classList.add("input-false");
		emailTip.classList.remove("input-true");
	}
}
////手机号码验证
var phoneNumber=document.getElementById("phoneNumber");
var phoneNumberTipC=document.getElementById("phoneNumberTipC");
phoneNumber.onblur=function(){	
	var regExp=/^1[3-90]\d{9}$/;
	if(phoneNumber.value==""){
		phoneNumberTipC.innerHTML="请正确填写手机号码，稍后将向该手机号码发送短信验证码";
	}
	if(regExp.test(phoneNumber.value)){
		myform.phoneNumber=true;
		phoneNumberTipC.innerHTML="手机格式正确";
		phoneNumberTipC.classList.add("input-true");
		phoneNumberTipC.classList.remove("input-false");
	}else{
		myform.phoneNumber=false;
		phoneNumberTipC.innerHTML="您输入的手机号码不是有效的格式！";
		phoneNumberTipC.classList.add("input-false");
		phoneNumberTipC.classList.remove("input-true");
	}
}
// 判断协议
var agreement=document.getElementById("agreement");
agreement.onchange=function(){
	if(agreement.checked){
		myform.agreement=true;	
	}else{
		if(!agreement.checked){
			myform.agreement=false;	
		}
	}
}
//判断表单整体是否符合需求
function check(event){
		for(var i=0 in event){
			if(event[i]==false){
				alert("填写有误，请检查表单！");
				return false;
			}
		}
		return true;
	}
//将表单信息写入对象的函数
function getformValue(event){
	event.username=document.getElementById("username").value;
	event.password=document.getElementById("password").value;
	event.name=document.getElementById("name").value;
	event.cardNumber=document.getElementById("cardNumber").value;
	event.email=document.getElementById("email").value;
	event.phoneNumber=document.getElementById("phoneNumber").value;
	event.idcardType=document.getElementById("idcardType").value;
	event.passengerType=document.getElementById("passengerType").value;
}
//下一步
var nextStep=document.getElementById("nextStep");
	nextStep.onclick=function(){
		//如果符合条件：跳转
		if(check(myform)){
			//写入验证后的表单信息
			getformValue(formValue);
			// console.log(formValue);
			//跳转
			window.open("https://www.imooc.com", "_self");
		}
	}
};