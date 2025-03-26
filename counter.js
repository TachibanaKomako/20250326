//カウンターの要素
const $counter = document.getElementById('js_counter');
//カウンターの画像の要素
const $counterImage = document.getElementById('counter_image');

//カウンターの値を取得する
function getCounterValue(){
    return parseInt($counter.textContent);
}

//カウンターの値を変更する
function changeCounterValue(value){
    $counter.textContent = value;
    //アホであれば画像を変更する
    if(isDumb(value)){
        $counterImage.src = 'imgs/002.png';
    }else{
        $counterImage.src = 'imgs/001.png';
    }
}
//カウンターの値を増やす
function incrementCounter(){
    const currentValue = getCounterValue();
    changeCounterValue(currentValue + 1);
}

//カウンターの値を減らす
function decrementCounter(){
    const currentValue = getCounterValue();
    changeCounterValue(currentValue - 1);
}

//カウンターの値をリセットする
function resetCounter(){
    changeCounterValue(0);
}

//3の倍数かどうかを確認
//アホかどうかを判定する
function isDumb(number){
    //0かどうかを確認
    if(number === 0){
        return false;
    }
    //3の倍数かどうかを確認
    if(number % 3 === 0){
        return true;
    }
    //3が含まれているかを確認
    let value = number;
    while(value > 0){
        const digit = value % 10;
        if(digit === 3){
            return true;
        }
        value = Math.floor(value / 10);
    }
    return false;
}