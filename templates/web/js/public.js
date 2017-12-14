function room_show(){

    new Marquee(

    {

        MSClassID : "room-show",

        ContentID : "room-main",

        TabID	  : "room-num",

        Direction : 2,

        Step	  : 0.3,

        Width	  : 734,

        Height	  : 385,

        Timer	  : 20,

        DelayTime : 4000,

        WaitTime  : 4000,

        ScrollStep: 1,

        SwitchType: 2,

        AutoStart : 1

    });

}









$(function(){

	$('.top-bar-li1').hover(

		function(){

			$(this).children('ul').show();

		},

		function(){

			$(this).children('ul').hide();

		}

	);

});





$(function(){

	btn_zixun();

});



function scrollAd(name){

	var heights=$(name).height()+400;

	var offset = 117 + $(window).scrollTop();

	$(name).animate({top:offset},{duration:117,queue:false});

}



function btn_zixun(){

	var name = '.fudong'; //滚动的ID

	scrollAd(name);

	$(window).scroll(function(){ scrollAd(name); }); 

}





$(function(){

	$(".interactive-top-right a").click(function(){

		$("#alert,#fabiao").show();

	});

	

	$(".close a").click(function(){

		$("#alert,#fabiao").hide();

	});

	

	$(".dengl").click(function(){

		$("#yezhu,#yezhu-box").show();

	});

	

	$(".yezhuanniu  a").click(function(){

		$("#yezhu,#yezhu-box").hide();

	});

	$("#yezhu").height(document.body.offsetHeight);

});





$(function(){

	var wrapper=document.getElementById('main-wrapper');

	var main=document.getElementById('main-box');

	$(".shousuo a").toggle(

		function(){

			$(".shousuo").removeClass("shousuo2");
			
			$('.main-wrapper').addClass("shou1");

			wrapper.style.height='42px';

			main.style.margin='412px 0 0 0';

		},

		function(){

			$(".shousuo").addClass("shousuo2");

			wrapper.style.height='';
			
			$('.main-wrapper').removeClass("shou1");

			main.style.margin='300px 0 0 0';

	})  

    

});

//2013-01-29修改
function content_slide(parent,child,btn_left,btn_right,w,h){
	//alert($('#'+child).attr('id'));
	/*********DIV + CSS左右交替滚动、缓动、默认静止、跳过等待时间改变方向及样式切换实例(将第WaitTime设置成60000，则第DelayTime会起作用)***************/
	var MarqueeDiv4Control = new Marquee(
	{
		MSClass : [parent,child],
		Direction : 4,
		Step : 0.1,
		Width : w,
		Height : h,
		Timer : 20,
		DelayTime : 1000000,
		WaitTime : 1000000,
		ScrollStep: 0,
		SwitchType: 0,
		AutoStart : true
	});
	document.getElementById(btn_right).onclick = function(){MarqueeDiv4Control.Run("Left")}; //跳过等待时间向左滚动 可以用MarqueeDiv4Control.Run(2)代替
	document.getElementById(btn_left).onclick = function(){MarqueeDiv4Control.Run("Right")};//跳过等待时间向右滚动
	document.getElementById(btn_left).className = "over"; //将按钮置为不可点击(样式)
	MarqueeDiv4Control.OnBound = function()
	{
	if(MarqueeDiv4Control.Bound == 2)
	{
		document.getElementById(btn_right).className = "over";
	}
	else
	{
		document.getElementById(btn_left).className = "over";
	}
	}; //滚动至边界做相应处理，切换按钮状态(样式)
	MarqueeDiv4Control.UnBound = function()
	{
	//$("RightButton4").disabled = $("LeftButton4").disabled = false;
	document.getElementById(btn_left).className = "";
	document.getElementById(btn_right).className="";
	}; //非边界状态处理
	$('#'+child).width(($('#'+child+' > *').length)*($('#'+child+' > *').width()));
	setInterval(function(){ $('#next').trigger('click'); }, 5000);
} 

//QQ显示营业时间
function QQ(){
	$('#QQ').hover(function(){
		var aa = $('.work_time');
		if(aa.is(':visible')){
			aa.hide();
		}
		else{
			aa.show();
		}
	})
}

//模拟下拉框
function formSelect(){
	$('.select li a').live('click',function(){
		var $this = $(this);
		var $k = $this.html();
		var $v = $this.attr('data-value');
		$this.parent().parent().siblings('p').children('a').html($k);
		$this.parent().parent().siblings('input').val($v);
		$this.addClass('selected').parent().siblings('li').children('a').removeClass('selected');
		$this.parent().parent().parent().removeClass('select-current');
		$this.parent().parent('ul').hide();
	});
	$('.select p a').live('click',function(){
		$('.select').removeClass('select-current');
		$('.select ul').hide();
		$(this).parent().parent().addClass('select-current');
		$(this).parent().siblings('ul').show();
	});
	
	$('.select').each(function(){
		var $this = $(this);
		var $val = $this.children('input').val();
		var $a = $this.find('[data-value="'+$val+'"]')
		$this.find('.selected').removeClass('selected');
		$a.addClass('selected');
		//alert($v);
		$this.children('p').children('a').html($a.html());
		$this.find('ul').width($this.width()-2);
	});
	
	//$('.select').click(function(event){ event.stopPropagation(); });
	$('body').click(function(){ $('.select ul').hide(); });
}

/*2013-5-15*/
$(function(){
	var widonw = 0;
	var topw = 1440;
	var disX = 0;
	var topLayout = function(){
			widonw = $(window).width();
			if(widonw < topw){
				disX = 20;
			}else{
				disX = (widonw-topw)/2+20;
			}
			$('.top .logo1').css({left:disX});
			$('.top .top-bar1').css({right:disX});
		};
	topLayout();
	$(window).resize(function(){ topLayout(); });
});