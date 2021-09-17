$('.radio input').on('click',() => {
    radiobtn1 = document.getElementById("radio1");
    radiobtn2 = document.getElementById("radio2");
    radiobtn3 = document.getElementById("radio3");

    target1 = document.getElementById("meil");
    target2 = document.getElementById("call");

        
        
        //radio1がチェックされたら電話の入力欄をdisabledにする
        if (this.radiobtn1.checked == true) {
            $('input[name="entry.2127099012"]').removeAttr('required');
            $('input[name="entry.2127099012"]').attr('disabled',true);
            $('input[name="entry.2127099012"]').removeAttr('placeholder');
            $('input[name="entry.1410163481"]').removeAttr('disabled');
            $('input[name="entry.2127099012"]').val("");
        
        }
        //radio2がチェックされたら電話入力欄をのdisabledを外しrequired属性をつける
        else if (radiobtn2.checked == true) {
            $('input[name="entry.2127099012"]').attr('required',true);
            $('input[name="entry.2127099012"]').removeAttr('disabled');
            
            
        }
        //電話入力欄とメール入力欄にrequired属性をつける
        else if (radiobtn3.checked == true) {
            $('input[name="entry.2127099012"]').removeAttr('disabled');
            $('input[name="entry.1410163481"]').removeAttr('disabled');
            $('input[name="entry.1410163481"]').attr('required');
            $('input[name="entry.2127099012"]').attr('required',true);
            
    }
  
})