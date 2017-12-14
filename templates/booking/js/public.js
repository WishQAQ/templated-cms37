//模拟下拉框
function formSelect() {
    $('.select li a').live('click', function() {
	var $this = $(this);
	var $k = $this.html();
	var $v = $this.attr('data-value');
	$this.parent().parent().siblings('p').children('a').html($k);
	$this.parent().parent().siblings('input').val($v);
	$this.addClass('selected').parent().siblings('li').children('a').removeClass('selected');
	$this.parent().parent().parent().removeClass('select-current');
	$this.parent().parent('ul').hide();
    });
    $('.select p a').live('click', function() {
	$('.select').removeClass('select-current');
	$('.select ul').hide();
	$(this).parent().parent().addClass('select-current');
	$(this).parent().siblings('ul').show();
    });

    $('.select').each(function() {
	var $this = $(this);
	var $val = $this.children('input').val();
	var $a = $this.find('[data-value="' + $val + '"]')
	$this.find('.selected').removeClass('selected');
	$a.addClass('selected');
	//alert($v);
	$this.children('p').children('a').html($a.html());
	$this.find('ul').width($this.width() - 2);
    });

    //$('.select').click(function(event){ event.stopPropagation(); });
    //$('body').click(function(){ $('.select ul').hide(); });
}

//tab切换
function tab(tabtitle, tabitem, tabon) {
    if (tabon == undefined) {
	tabon = 'on';
    }
    $(tabtitle).click(function() {
	var $this = $(this);
	var $index = $this.index();
	$this.addClass(tabon).siblings().removeClass(tabon);
	;
	$(tabitem).eq($index).show().siblings(tabitem).hide();
    });
}

//客房筛选动画
function roomSelectType() {
    $('.room-select-type-item').hover(
	    function() {
		$(this).children('.item').animate({width: $(this).children('.item').children('div').width() + 1}, {duration: 400, queue: false});
		$(this).addClass('room-select-type-item-opened');
	    },
	    function() {
		$(this).children('.item').animate({width: 0}, {duration: 400, queue: false});
		$(this).removeClass('room-select-type-item-opened');
	    }
    );
}

//客房筛选复选框效果
function roomSelectType2() {
    $('.room-select-type2-con label input').click(function() {
	var $this = $(this);
	if ($this.is(":checked")) {
	    $this.parent().addClass('on');
	} else {
	    $this.parent().removeClass('on');
	}
    });
}

//客房更多价格
function roomPriceMore() {
    $('.room-info .price-mem').hover(
	    function() {
		$(this).addClass('price-mem-opened').siblings('.price-more').show();
	    },
	    function() {
		$(this).removeClass('price-mem-opened').siblings('.price-more').hide();
	    }
    );
}

//客房信息展开
function roomInfoCon(a, b) {
    $('.room-btn').click(function() {
	var $this = $(this);
	//var $roomInfo = $(this).parent().siblings('.room-info').children('.room-info-con').children('.item:gt(1)');
	var $roomInfo = $(this).parent().siblings('.room-info').children('.room-info-description');
	var $roomInfo2 = $(this).parent().siblings('.room-info').children('.room-info-con');
	if ($this.hasClass('room-btn-opened')) {
	    $roomInfo.hide();
	    $roomInfo2.hide();
	    $this.removeClass('room-btn-opened').text(a);
	} else {
	    $roomInfo.show();
	    $roomInfo2.show();
	    $this.addClass('room-btn-opened').text(b);
	}
    });
}

function roomBookingInfo() {
    $('.other-service-title .li1').click(function() {
	var $box = $('.other-service-con');
	var $this = $(this);
	if ($box.is(':visible')) {
	    $box.slideUp();
	    $this.removeClass('opened');
	} else {
	    $box.slideDown();
	    $this.addClass('opened');
	}
    });
}

function roomUpdate() {
    var $box = $('.room-update');
    $('.room-selected-date .btn-edit').click(function() {
	if ($box.is(':visible')) {
	    $box.slideUp(300);
	} else {
	    $box.slideDown(300);
	}
    });
    $('.update-btn').click(function() {
	if ($box.is(':visible')) {
	    $box.slideUp(300);
	    $(this).addClass('update-btn1');
	} else {
	    $box.slideDown(300);
	    $(this).removeClass('update-btn1');
	}
    });
}

function title3Slide() {
    $('.title3 .fr').click(function() {
	var $this = $(this);
	var $box = $this.next();
	if ($box.is(':visible')) {
	    $box.slideUp();
	    $this.addClass('closed');

	} else {
	    $box.slideDown();
	    $this.removeClass('closed');
	}
    });
}

function floats(op) {
    var $win = $(window);
    var $winH = $win.height();
    var scro = function() {
	$(op).animate({top: ($winH - $(op).height()) / 2 + $win.scrollTop()}, {duration: 400, queue: false});
    };
    scro();
    $win.scroll(function() {
	scro();
    });
}

function payshow(id) {
    $(".payshow").hide();
    $("#payshow" + id).show();
}