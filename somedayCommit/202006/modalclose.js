/*
와 한참 찾아따
중복된 아이디 체크 마무리하고 확인버튼시 창닫기 하고싶은데
구글링 실력 부족으로 찾은건
*/

window.close()


< button id = "btn_close"
type = "button" > 창닫기 < /button>

  <
  script >

  $(function() {

    $("#btn_close").on('click', function() {

      self.close();

    });

  });

<
/script>
/*
기타등등 modal 창 닫기로 찾았음 진작 찾았을건데 질문이 얼마나 중요한지 다시한번 
느낀다 ㅜㅜ
*/

$('#searchIdCheck').click(function(e) {

                  bp.ctrls.setNameValue("txtIdCPDet", id);
                  $('#modal_idCheck').modal("hide");

              });
