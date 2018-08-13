// 読み込み完了時に実行させる
window.onload = function () {
    // 変数定義
    // 画像のプロパティ
    var imageList = [
        { src: './image/slide_show_normal.png', alt: '1', width: '1300', height: '720'},
        { src: './image/slide_show_red.png', alt: '2', width: '1300', height: '720'},
        { src: './image/slide_show_normal.png', alt: '3', width: '1300', height: '720'},
        { src: './image/slide_show_red.png', alt: '4', width: '1300', height: '720'}
    ];
    var imageLength = imageList.length;

    // 要素取ってくる
    var sliderBox = document.getElementById('slider_box');
    // タイトル取ってくる
    //var h1Title = document.getElementById('h1_title');
    // 現在のインデックス
    var currentIndex = 0;

    // 関数定義
    // 指定の画像に表示を切り替える
    function showImage(index) {
        // 表示させずに、裏で一度隠しておくdisplay:none
        for (var i = 0; i < imageLength; i++) {
            imageList[i].elem.style.display = 'none';
        }
        // 表示する対象の要素を取ってくる
        var targetImage = imageList[index];
        // 表示する対象の要素を出す
        targetImage.elem.style.display = 'inline';
        // イベントの設定
        setTimeout(function slide() {
            // 表示する画像のインデックスを計算する
            currentIndex++;
            // 画像を表示するためのインデックスと画像プロパティのlngthが一緒になったら0に戻す
            if (currentIndex === imageLength) {
                currentIndex = 0;
            }
            // 画像を切替える
            showImage(currentIndex);
            // classListは引数空文字を許可しないのでclassNameで変えてやる
            //targetImage.classList.add('')
            targetImage.className ='';
        }, 3000);
    }
    
    // 初期化処理
    // img要素をDOMに追加
    for (var i = 0; i < imageLength; i++) {
        var item = imageList[i];

        // img要素の作成
        var img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.width = item.width;
        img.height = item.height;

        // 作成したimg要素をDOMにあるdivに追加する
        // <div id="slider_box"><img/></div>
        sliderBox.appendChild(img);
        item.elem = img;
    }
    // 初期化
    showImage(currentIndex);
};
