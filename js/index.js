/**
 * Created by Administrator on 2016/6/30.
 */
$(function(){
    $('.ac-gn-item-xiala').on('click',function(){
        $('.small-list').css({
            overflow: 'hidden',
            display:'block',
            // transition: 'all 250ms linear .5s',
            //transform:'scaleY()',
            height:$(window).height(),
        });
        $('.page_below').css('display','none');
        $('.small-list-sousuo').css({
            //display:'none'
            transition: 'all 150ms linear',
            transform:'translateX(30px)'
        })
    })
    $('.small-list-return').on('click',function(){
        $('.small-list').css({
            display:'none',
            height:'0px',
        });
        $('.page_below').css('display','block');
        $('.small-list-sousuo').css({
            transition: 'all 250ms linear .5s',
            transform:'translateX(-30px)'
        })
    })
})