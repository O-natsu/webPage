$(function () {
    // 1周するまでの時間
    let slideSec = 25000;

    // 複数の.loop-sliderが存在するので、eachで1つ1つ処理していく
    $(".loop-slider").each(function(index, loopSlider) {
        const loopElem = $(loopSlider);
        // 最初の要素の内幅(borderは除き、paddingは含む)
        const loopElemInnnerWidth = loopElem.innerWidth();
        const loopUlist = loopElem.find("ul");
        const loopList = loopUlist.find("li");
        // li要素内の外幅を取得 ≒ 画像サイズ
        const loopListOuterWidth = loopList.outerWidth();
        // <li>の要素分widthを計算するため要素数を取得
        const listCount = loopList.length;
        const loopElemWidth = loopListOuterWidth * listCount; // 2604px 217*12
 
        // li要素分のwidthが外幅より大きい場合にスライドさせる
        // div自体で見せる範囲を決めておくため、widthを狭める
        if (loopElemWidth > loopListOuterWidth) {
            loopUlist.css({
                width: loopElemWidth
            });
            loopElem.css({
                width: loopElemWidth / 4
            });
            slideAnimation();
        }

        // アニメーションを行う
        function slideAnimation() {
            loopElem.animate({
                left: '-' + loopElem.width() + 'px'
            },
                slideSec,
                'linear',
                function () {
                    loopElem.css({ left: '0' });
                    slideAnimation();
                });
        };
    });
});