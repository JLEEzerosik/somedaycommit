
input text 타입에 대해서 값 변경시 체크 할려고 필요 id 체크 과정중 찾아봄



전역변수 oldVal

$("#text").on("change keyup paste", function() {
    var currentVal = $(this).val();
    if(currentVal == oldVal) {
        return;
    }

    oldVal = currentVal;
    alert("changed!");
});
//이 경우는 개발자 모드로 들어가서 변경시 인식이 안됨

$("#text").on("propertychange change keyup paste input", function() {
    var currentVal = $(this).val();
    if(currentVal == oldVal) {
        return;
    }

    oldVal = currentVal;
    alert("changed!");
});
//이건 다 된다는데 현재 개발중에서는 먹히지가 않음
