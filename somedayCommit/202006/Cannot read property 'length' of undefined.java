Cannot read property 'length' of undefined error

serviceimpl 에서 DB 를 거쳐서 나온 데이터 type 과 받는 type 달라서 생긴 문제
-----------------------------------------수정전---------------------------------
List<PaymentInfo> list = paymentDAO.WSP_ADMIN_CASH_INFO_SELECT(form);

       // 결과값 세팅
       result = new DefaultDataSetFactory();
       resultMap = result.setParameter(form);
-----------------------------------------수정후---------------------------------
List<PaymentInfo> list = paymentDAO.WSP_ADMIN_CASH_INFO_SELECT(form);

      // 결과값 세팅
      result = new DefaultDataSetFactory();
      resultMap = result.setParameter(list, form);
