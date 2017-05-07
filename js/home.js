$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
    //freeMode : true,
    autoplay : 3000,
    //direction: 'vertical',//上下页
    loop: true,//无缝
    // 如果需要分页器
    pagination: '.swiper-pagination',
    //用户操作后重启
    autoplayDisableOnInteraction : false,
  });
	//搜索框
	var $searchBar = $('#searchBar'),
            $searchResult = $('#searchResult'),
            $searchText = $('#searchText'),
            $searchInput = $('#searchInput'),
            $searchClear = $('#searchClear'),
            $searchCancel = $('#searchCancel');

        function hideSearchResult(){
            $searchResult.hide();
            $searchInput.val('');
        }
        function cancelSearch(){
            hideSearchResult();
            $searchBar.removeClass('weui-search-bar_focusing');
            $searchText.show();
        }

        $searchText.on('click', function(){
            $searchBar.addClass('weui-search-bar_focusing');
            $searchInput.focus();
        });
        $searchInput
            .on('blur', function () {
                if(!this.value.length) cancelSearch();
            })
            .on('input', function(){
                if(this.value.length) {
                    $searchResult.show();
                } else {
                    $searchResult.hide();
                }
            })
        ;
        $searchClear.on('click', function(){
            hideSearchResult();
            $searchInput.focus();
        });
        $searchCancel.on('click', function(){
            cancelSearch();
            $searchInput.blur();
    	});
        //公告栏
        var fontMove = $('.font-move span');
        var width = fontMove.width() /10;
        fontMove[0].style.animation='animations '+width/2+'s linear 0s infinite forwards;-webkit-animation:animations '+width/2+'s linear 0s infinite forwards;-moz-animation:animations '+width/2+'s linear 0s infinite forwards;';
        document.getElementById("frames").innerHTML = '@-webkit-keyframes animations3{0%{-webkit-transform:translate(24rem);}100%{-webkit-transform:translate(-'+width+'rem);}}@-moz-keyframes animations3{0%{-moz-transform:translate(24rem);}100%{-moz-transform:translate(-'+width+'rem);}}@keyframes animations{0%{transform:translate(24rem);}100%{transform:translate(-'+width+'rem);}}';
});
