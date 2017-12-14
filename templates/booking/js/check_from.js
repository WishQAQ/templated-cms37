//收藏本站
function favPage(){
    var pageName=window.location.href;
    var nameArr =pageName.split("?");
    pageName=nameArr[0] + "?" + nameArr[1];
    if (window.sidebar) {
        window.sidebar.addPanel(document.title,pageName,""); 
    }
    else if (document.all) {
        window.external.AddFavorite(pageName,document.title);
    } else {
        return true;
    }
} 

function trim(s){
    return s.replace(/(^\s*)|(\s*$)/g, "");
}

//校验用户名：只能输入6-12个以字母开头、可带数字、“_”的字串
function isRegisterUserName(s){    
    var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){5,11}$/;    
    if (!patrn.exec(s)) return false; 
    return true;
}

//校验密码：只能输入6-16个字母、数字、下划线
function isPasswd(s){
    var patrn=/^([a-zA-Z0-9]|[_]){6,16}$/;    
    if (!patrn.exec(s)) return false;  
    return true;  
}

//校验普通电话、只能输入8到20位数字
function isTel(s){    
    var patrn=/^[0-9]{8,20}$/;
    if (!patrn.exec(s)) return false;
    return true;
}

function isEmail(s){  
    var patrn=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!patrn.exec(s)) return false;
    return true;
}

//身份证
function isKey(s){  
    var patrn=/^[1-9]\d{16}[\d|x|X]$/;
    if (!patrn.exec(s)) return false;
    return true;
}

function datacheck(){
    if (document.booking_room.bookingpeoplesurname.value==""){
	alert("请填写姓名！");
	document.booking_room.bookingpeoplesurname.focus();
	return false;
	}
	
	if (document.booking_room.bookingpeoplephone.value==""){
	alert("请填写联系手机！");
	document.booking_room.bookingpeoplephone.focus();
	return false;
	}
	
	 
}