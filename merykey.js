document.addEventListener('DOMContentLoaded', function() {
    /*init variables*/

    var itog = document.querySelector('#itog'); //base unit
    var base = document.querySelector('#base'); //itog unit
    var itogLabel = document.querySelector('#itogLabel'); //itog label
    var rangeSailerStatus = document.querySelector('#rangeSailerStatus'); //range
    var heartRange = document.querySelector('#heartRange');
    var isIE = false || !!document.documentMode; //is IE?

//konsultant
    var konsultant = document.querySelector('#konsultant'); //консультант блок для показать\скрыть
    var konsultantVal = document.querySelector('#konsultantVal'); //консультант вводимое значение
    var konsultantNum = document.querySelector('#konsultantNum'); //консультант расчетное значение
    //var konsultantDiscount = document.querySelector('#konsultantDiscount'); //консультант select скидка
    var konsultantDiscountRadio = document.querySelectorAll('input[name="radioBtn"]'); // консультант radio скидка
    var selectDiscount1 = document.querySelector('#select-discount1'); // консультант radio скидка 0%
    var selectDiscount2 = document.querySelector('#select-discount2'); // консультант radio скидка 35%
    var selectDiscount3 = document.querySelector('#select-discount3'); // консультант radio скидка 40%
    var selectDiscount4 = document.querySelector('#select-discount4'); // консультант radio скидка 45%
    var konsultantProfit = document.querySelector('#konsultantProfit'); //консультант доход
  //  var radioBtnContainer = document.querySelector('#radioBtnContainer'); // контейнер радиокнопок
//    var radioBtnContainerTooltip = document.querySelector('#radioBtnContainer .radioBtn-container-tooltip'); //подсказка радиокнопок
   // var tooltipMoreEight = document.querySelector('#tooltipMoreEight'); //скидка более 8 б.е.
    //var tooltipSmall = document.querySelector('#tooltipSmall'); // подсказка менее 8 б.е.
    var snoskaNum1 = document.querySelector('#snoskaNum1'); //сноска убираем для консультанта


//from master-konsultant to pre-director
    var bigkonsultant = document.querySelector('#bigkonsultant'); //блок для показать\скрыть
    var bigkonsultantVal = document.querySelector('#bigkonsultantVal'); //вводимое значение
    var bigkonsultantNum = document.querySelector('#bigkonsultantNum'); //расчетное значение
    var bigkonsultantAct = document.querySelector('#bigkonsultantAct'); //количество активных консультантов
    var bigkonsultantDiscount = document.querySelector('#bigkonsultantDiscount'); //скидка
    var bigkonsultantDiscountDop = document.querySelector('#bigkonsultantDiscountDop'); // доп. скидка


//director
    var director = document.querySelector('#director'); //директор блок для показать\скрыть
    var director2 = document.querySelector('#director2'); //директор блок для показать\скрыть2
    var directorVal = document.querySelector('#directorVal'); //директор вводимое значение
    var directorNum = document.querySelector('#directorNum'); //директор расчетное значение
    var directorDiscount = document.querySelector('#directorDiscount'); //директор скидка

    var director2Num1 = document.querySelector('#director2Num1'); //директор расчетное значение 1
    var director2Num2 = document.querySelector('#director2Num2'); //директор расчетное значение 1
    var labelFordirector2Num2 = document.querySelector('#labelFordirector2Num2'); //директор расчетное значение label
    var sailerStatus3Container = document.querySelector('#sailerStatus3Container'); //контейнер директор
    //var labelChange2 = document.querySelector('#labelChange2'); //подпись скидок для директора и выше
    var labelChange1 = document.querySelector('#labelChange1'); //подпись скидок для директора и выше


//bigdirector
     var bigdirector = document.querySelector('#bigdirector'); //супердиректор блок для показать\скрыть
     var tableShort = document.querySelector('#tableShort'); //таблица директоров маленькая
     var tableShortPlus = document.querySelector('#tableShortPlus'); //таблица директоров плюс строка
     var tableShortMinus = document.querySelector('#tableShortMinus'); //таблица директоров минус строка
     var bigdirectorProfit = document.querySelector('#bigdirectorProfit'); //директор 1 линия
     var tableVolumeSm = document.querySelectorAll('.table-volume-sm'); //table объем
     var tableShortDiscount = document.querySelector('#tableShortDiscount'); //скидка
     var sumOfAllDiectors = document.querySelector('#sumOfAllDiectors'); // сумма всех директоров
//     //var bigdirectorVal = document.querySelector('#bigdirectorVal'); //вводимое значение
//     //var bigdirectorDiscount = document.querySelector('#bigdirectorDiscount'); //директор скидка

//biggestdirector
     var biggestdirector = document.querySelector('#biggestdirector'); //супердиректор блок для показать\скрыть
//     var biggestdirector2 = document.querySelector('#biggestdirector2'); //супердиректор2 блок для показать\скрыть
     var biggestdirectorVal2 = document.querySelector('#biggestdirectorVal2'); //супердиректор вводимое значение 2 лини
     var biggestdirectorVal3 = document.querySelector('#biggestdirectorVal3'); //супердиректор вводимое значение 3 линии
     var biggestdirectorNum21 = document.querySelector('#biggestdirectorNum21'); //супердиректор расчетнон значение 2 линии 1
     var biggestdirectorNum22 = document.querySelector('#biggestdirectorNum22'); //супердиректор расчетнон значение 2 линии 2
     var biggestdirectorNum31 = document.querySelector('#biggestdirectorNum31'); //супердиректор расчетнон значение 3 линии 1
     var biggestdirectorNum32 = document.querySelector('#biggestdirectorNum32'); //супердиректор расчетнон значение 3 линии 2
     var biggestdirectorAct = document.querySelector('#biggestdirectorAct'); //супердиректор его подчиненные директоры
     var biggestdirectorActVall = document.querySelector('#biggestdirectorActVall'); //изменение количества дебютировавших директоров
     var biggestdirectorActVallMobile = document.querySelector('#biggestdirectorActVallMobile'); //изменение количества дебютировавших директоров mobile
     var amountDebut = document.querySelector('#amountDebut'); //сердце нижний range
     var bigdirectorProfitBig = document.querySelector('#bigdirectorProfitBig'); //директор 1 линия
//     var stylesBorderDelete = document.querySelector('#stylesBorderDelete'); //убираем границу если не НД
//
//
     var biggestdirector2Num2 = document.querySelector('#biggestdirector2Num2'); //супердиректор расчетное последний блок 2 линия
     var biggestdirector2Num3 = document.querySelector('#biggestdirector2Num3'); //супердиректор расчетное последний блок 3 линия
     var biggestdirector2NumAct = document.querySelector('#biggestdirector2NumAct'); //супердиректор расчетное последний блок консульт
//     //var hideThenKingDirector =  document.querySelector('#hideThenKingDirector'); //супердиректор количество консультов
//     var stylesDouble = document.querySelector('#stylesDouble'); //стили
//     var director2Num2Span = document.querySelector('#director2Num2Span'); //стили span
     var biggestdirectorBounusNd = document.querySelector('#biggestdirectorBounusNd'); //бонус количество конс супер директор
     var biggestdirectorBounusResult = document.querySelector('#biggestdirectorBounusResult'); //бонус супер директор
     var amountDebutBonus = document.querySelector('#amountDebutBonus'); //значения ползунка
     var biggestdirectorActVallBonus = document.querySelector('#biggestdirectorActVallBonus'); //последний ползунок значения

    var sailerStatus = document.querySelectorAll('.sailer-status'); //sailer status

//table big
     var tableFirstLineGroups = document.querySelector('#tableFirstLineGroups'); // таблица 1 линиия
     var tableFirstLineGroupsPlus = document.querySelector('#tableFirstLineGroupsPlus'); // таблица добавить строку
     var tableFirstLineGroupsMinus = document.querySelector('#tableFirstLineGroupsMinus'); // таблица удалить строку
     var tableVolume = document.querySelectorAll('.table-volume'); //table groups
//     var showBiggestdirect = document.querySelectorAll('.show-biggestdirect'); //table for biggest direct
     var twoLine = document.querySelector('#twoLine'); //консультанты 2 линии
//     var thirdLine = document.querySelector('#thirdLine'); //консультанты 3 линии
     var allComissions = document.querySelectorAll('.table-commission'); //комиссия у главного директора
//     var firstLineAmount = document.querySelector('#firstLineAmount'); //количество 1 линия
//     var firstLinePercent = document.querySelector('#firstLinePercent'); // процент 1 линия
//     var firstLineVolume = document.querySelector('#firstLineVolume'); // объем 1 линия
//     var firstLineCommision = document.querySelector('#firstLineCommision'); // комиссия 1 линия
//     var firstTrNotBigDirector = document.querySelector('#firstTrNotBigDirector'); //для не нац директорва 1 линия

//warning-messages
    var warning1 = document.querySelector('#warning1');
    var warning2 = document.querySelector('#warning2');


//mask only numbers and dot and letters for grops names
    var allInputs = document.querySelectorAll('input');

    //what is browser
    function get_name_browser(){
        // получаем данные userAgent
        var ua = navigator.userAgent;
        // с помощью регулярок проверяем наличие текста,
        // соответствующие тому или иному браузеру
        if (ua.search(/Chrome/) > 0) return 'Google Chrome';
        if (ua.search(/Firefox/) > 0) return 'Firefox';
        if (ua.search(/Opera/) > 0) return 'Opera';
        if (ua.search(/Safari/) > 0) return 'Safari';
        if (ua.search(/MSIE/) || ua.search(/Trident/) > 0) return 'Internet Explorer';
        return 'Не определен';
    }


    if(get_name_browser() == 'Firefox'){
        for (var i = 0; i < allInputs.length; i++) {
            allInputs[i].onkeypress = function(e){
                if(this.classList.contains('table-name')){

                    if (!(e.which==95 || e.which==45 || e.which==1105 || e.which==1025 || e.which==32 || (e.which>=1040 && e.which<=1103) || (e.which>=65 && e.which<=90) || (e.which>=65 && e.which<=90) || (e.which>=97 && e.which<=122) || (e.which>47 && e.which<58))) return false;
                } else {
                    if(this.id == 'bigkonsultantAct') {
                        if (!(e.which==8 ||(e.which>47 && e.which<58))) return false;
                    } else {
                        if (!(e.which==8 || e.which==46 ||(e.which>47 && e.which<58))) return false;
                    }
                }
            }

        }
    } else if(get_name_browser() == 'Internet Explorer'){
        for (var i = 0; i < allInputs.length; i++) {
            allInputs[i].onkeypress = function(e){
                if(this.classList.contains('table-name')){
                    if (!(e.keyCode==95 || e.keyCode==45 || e.keyCode==1105 || e.keyCode==1025 || e.keyCode==32 || (e.keyCode>=1040 && e.keyCode<=1103) || (e.keyCode>=65 && e.keyCode<=90) || (e.keyCode>=65 && e.keyCode<=90) || (e.keyCode>=97 && e.keyCode<=122) || (e.keyCode>47 && e.keyCode<58))) return false;
                } else {
                    if(this.id == 'bigkonsultantAct') {
                        if (!(e.keyCode == 8 || (e.keyCode > 47 && e.keyCode < 58))) return false;
                    } else {
                        if (!(e.keyCode == 8 || e.keyCode == 46 || (e.keyCode > 47 && e.keyCode < 58))) return false;
                    }
                }
            }
        }
    } else {
        for (var i = 0; i < allInputs.length; i++) {
            allInputs[i].onkeypress = function(e){
                if(this.classList.contains('table-name')){
                    if (!(e.keyCode==95 || e.keyCode==45 || e.keyCode==1105 || e.keyCode==1025 || e.keyCode==32 || (e.keyCode>=1040 && e.keyCode<=1103) || (e.keyCode>=65 && e.keyCode<=90) || (e.keyCode>=65 && e.keyCode<=90) || (e.keyCode>=97 && e.keyCode<=122) || (e.keyCode>47 && e.keyCode<58))) return false;
                } else {
                    if(this.id == 'bigkonsultantAct') {
                        if (!(e.keyCode == 8 || (e.keyCode > 47 && e.keyCode < 58))) return false;
                    } else {
                        if (!(e.keyCode == 8 || e.keyCode == 46 || (e.keyCode > 47 && e.keyCode < 58))) return false;
                    }
                }
            }

        }
    }

    //number format
    function numberFormat(number, decimals, dec_point, thousands_sep) {
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + Math.round(n * k) / k;
            };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }
    //return number format
    function returnNumFor(string){
        var num = string.replace(/ /g, "");
        return parseFloat(num);
    }



//make constants
    base.value = "3 500";
    var tax = 1.2;
    var disc = 0.6;
    var bonusForNdNev = 210000;
    var bonusForNdDev = 42000;

    //для значка рубль меняем ширину input
    function changeSize(elem){
        return elem.style.width = ((elem.value.length) * 13) + 'px';
    }
    function changeSizeSmall(elem){
        return elem.style.width = ((elem.value.length) * 10) + 'px';
    }
    function init(){
        changeSizeSmall(konsultantNum);
        changeSize(konsultantProfit);
        changeSizeSmall(bigkonsultantNum);
        changeSize(bigkonsultantDiscountDop);
        changeSizeSmall(directorNum);
        changeSize(director2Num1);
        changeSize(director2Num2);
        changeSize(bigdirectorProfit);
        changeSize(bigdirectorProfitBig);
        changeSize(biggestdirector2Num2);
        changeSize(biggestdirector2Num3);
        changeSize(biggestdirector2NumAct);
        changeSize(biggestdirectorBounusResult);
        changeSize(sumOfAllDiectors);
    }
    init();

    /*show/hide blocks*/
    var nowSailerPosition = '1';
    for (var i = 0; i < sailerStatus.length; i++) {
        sailerStatus[i].addEventListener('click', showSallerBlocks);
    }

    function showSallerBlocks(e) {
        nowSailerPosition = this.getAttribute('data-level');
        rangeSailerStatus.value = this.getAttribute('data-level');
        e.preventDefault();
        if (this.value == 'sailer-1') {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "none";
            director.style.display = "none";
            bigdirector.style.display = "none";
            biggestdirector.style.display = "none";
            sailerStatus3Container.style.display = "none";
            snoskaNum1.style.display = "none";
        }
        if (this.value == 'sailer-2') {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "none";
            director2.style.display = "none";
            bigdirector.style.display = "none";
            sailerStatus3Container.style.display = "none";
            biggestdirector.style.display = "none";
            snoskaNum1.style.display = "block";
        }
        if (this.value == 'sailer-3') {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "block";
            director2.style.display = "block";
            bigdirector.style.display = "none";
            biggestdirector.style.display = "none";
            sailerStatus3Container.style.display = "flex";
            snoskaNum1.style.display = "block";
        }
        if (this.value == 'sailer-4') {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "block";
            director2.style.display = "block";
            bigdirector.style.display = "flex";
            biggestdirector.style.display = "none";
            sailerStatus3Container.style.display = "flex";
            snoskaNum1.style.display = "block";
        }
        if (this.value == 'sailer-5') {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "flex";
            director2.style.display = "flex";
            bigdirector.style.display = "none";
            biggestdirector.style.display = "table";
            sailerStatus3Container.style.display = "flex";
            snoskaNum1.style.display = "block";
        }
        var showBiggestdirect = document.querySelectorAll('.show-biggestdirect'); //table for biggest direct
        if(nowSailerPosition < 11){
            for(var y = 0; y < showBiggestdirect.length; y++){
                showBiggestdirect[y].style.display = "none";
            }
            director2Num2.style.display = "inline-block";
            labelFordirector2Num2.style.display = "block";
            director2Num2Span.style.display = "inline-block";
            stylesDouble.classList.add('mary-key-design-double');
        } else if(nowSailerPosition == 11){
            for(var y = 0; y < showBiggestdirect.length; y++){
                showBiggestdirect[y].style.display = "table-cell";
            }
            director2Num2.style.display = "none";
            labelFordirector2Num2.style.display = "none";
            director2Num2Span.style.display = "none";
            stylesDouble.classList.remove('mary-key-design-double');
        }
        warning1ColorOfFHide();
        warning2ColorOfFHide();
        recalculatePersent(nowSailerPosition);
        changeHeart(nowSailerPosition);
        changeItogLabel(nowSailerPosition);
        changeSmallTableStat(nowSailerPosition);
        recalculate(nowSailerPosition);
    };


    //range-change
    rangeSailerStatus.oninput = function (){
        if (+this.value == 1) {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "none";
            director.style.display = "none";
            bigdirector.style.display = "none";
            biggestdirector.style.display = "none";
            sailerStatus3Container.style.display = "none";
            snoskaNum1.style.display = "none";
        }
        if (+this.value > 1 && +this.value <= 5) {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "none";
            director2.style.display = "none";
            bigdirector.style.display = "none";
            sailerStatus3Container.style.display = "none";
            biggestdirector.style.display = "none";
            snoskaNum1.style.display = "block";
        }
        if (+this.value == 6) {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "block";
            director2.style.display = "block";
            bigdirector.style.display = "none";
            biggestdirector.style.display = "none";
            sailerStatus3Container.style.display = "flex";
            snoskaNum1.style.display = "block";
        }
        if (+this.value > 6 && +this.value <= 10) {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "block";
            director2.style.display = "block";
            bigdirector.style.display = "flex";
            biggestdirector.style.display = "none";
            sailerStatus3Container.style.display = "flex";
            snoskaNum1.style.display = "block";
        }
        if (this.value == 11) {
            konsultant.style.display = "flex";
            bigkonsultant.style.display = "flex";
            director.style.display = "flex";
            director2.style.display = "flex";
            bigdirector.style.display = "none";
            biggestdirector.style.display = "table";
            sailerStatus3Container.style.display = "flex";
            snoskaNum1.style.display = "block";
        }
        nowSailerPosition = this.value;
        var showBiggestdirect = document.querySelectorAll('.show-biggestdirect'); //table for biggest direct
        if(nowSailerPosition < 11){
            for(var y = 0; y < showBiggestdirect.length; y++){
                showBiggestdirect[y].style.display = "none";
            }
            director2Num2.style.display = "inline-block";
            labelFordirector2Num2.style.display = "block";
            director2Num2Span.style.display = "inline-block";
            stylesDouble.classList.add('mary-key-design-double');
        } else{
            for(var y = 0; y < showBiggestdirect.length; y++){
                showBiggestdirect[y].style.display = "table-cell";
            }
            director2Num2.style.display = "none";
            labelFordirector2Num2.style.display = "none";
            director2Num2Span.style.display = "none";
            stylesDouble.classList.remove('mary-key-design-double');
        }
        warning1ColorOfFHide();
        warning2ColorOfFHide();
         recalculatePersent(this.value);
         changeHeart(this.value);
         changeItogLabel(nowSailerPosition);
        changeSmallTableStat(nowSailerPosition);
         recalculate(this.value);
    };
    if(isIE){
        //range-change
        rangeSailerStatus.onchange = function (){
            if (+this.value == 1) {
                konsultant.style.display = "flex";
                bigkonsultant.style.display = "none";
                director.style.display = "none";
                bigdirector.style.display = "none";
                biggestdirector.style.display = "none";
                sailerStatus3Container.style.display = "none";
                snoskaNum1.style.display = "none";
            }
            if (+this.value > 1 && +this.value <= 5) {
                konsultant.style.display = "flex";
                bigkonsultant.style.display = "flex";
                director.style.display = "none";
                director2.style.display = "none";
                bigdirector.style.display = "none";
                sailerStatus3Container.style.display = "none";
                biggestdirector.style.display = "none";
                snoskaNum1.style.display = "block";
            }
            if (+this.value == 6) {
                konsultant.style.display = "flex";
                bigkonsultant.style.display = "flex";
                director.style.display = "block";
                director2.style.display = "block";
                bigdirector.style.display = "none";
                biggestdirector.style.display = "none";
                sailerStatus3Container.style.display = "flex";
                snoskaNum1.style.display = "block";
            }
            if (+this.value > 6 && +this.value <= 10) {
                konsultant.style.display = "flex";
                bigkonsultant.style.display = "flex";
                director.style.display = "block";
                director2.style.display = "block";
                bigdirector.style.display = "flex";
                biggestdirector.style.display = "none";
                sailerStatus3Container.style.display = "flex";
                snoskaNum1.style.display = "block";
            }
            if (this.value == 11) {
                konsultant.style.display = "flex";
                bigkonsultant.style.display = "flex";
                director.style.display = "flex";
                director2.style.display = "flex";
                bigdirector.style.display = "none";
                biggestdirector.style.display = "table";
                sailerStatus3Container.style.display = "flex";
                snoskaNum1.style.display = "block";
            }
            nowSailerPosition = this.value;
            var showBiggestdirect = document.querySelectorAll('.show-biggestdirect'); //table for biggest direct
            if(nowSailerPosition < 11){
                for(var y = 0; y < showBiggestdirect.length; y++){
                    showBiggestdirect[y].style.display = "none";
                }
                director2Num2.style.display = "inline-block";
                labelFordirector2Num2.style.display = "block";
                director2Num2Span.style.display = "inline-block";
                stylesDouble.classList.add('mary-key-design-double');
            } else{
                for(var y = 0; y < showBiggestdirect.length; y++){
                    showBiggestdirect[y].style.display = "table-cell";
                }
                director2Num2.style.display = "none";
                labelFordirector2Num2.style.display = "none";
                director2Num2Span.style.display = "none";
                stylesDouble.classList.remove('mary-key-design-double');
            }
            warning1ColorOfFHide();
            warning2ColorOfFHide();
            recalculatePersent(this.value);
            changeHeart(this.value);
            changeItogLabel(nowSailerPosition);
            changeSmallTableStat(nowSailerPosition);
            recalculate(this.value);
        };
    }
//re-calculate summ value than user change sail-level
    function recalculate(sailPosition){
        if(+sailPosition == 1){
            itog.value = numberFormat(Math.round(returnNumFor(konsultantProfit.value)), 0, '.', ' ') + ' ₽';
        } else if(+sailPosition > 1 && +sailPosition <= 5){
            if(+konsultantVal.value == 0){
                bigkonsultantDiscountDop.value = 0;
            }
            itog.value = numberFormat(Math.round(returnNumFor(konsultantProfit.value) + returnNumFor(bigkonsultantDiscountDop.value)), 0, '.', ' ') + ' ₽';
        } else if(+sailPosition == 6){
            if(+konsultantVal.value == 0){
                bigkonsultantDiscountDop.value = 0;
            }
            itog.value = numberFormat(Math.round(returnNumFor(konsultantProfit.value) + returnNumFor(bigkonsultantDiscountDop.value) + returnNumFor(director2Num1.value)
                + returnNumFor(director2Num2.value)), 0, '.', ' ') + ' ₽';
        } else if(+sailPosition > 6 && +sailPosition <= 10){
            if(+konsultantVal.value == 0){
                bigkonsultantDiscountDop.value = 0;
            }
            if(directorVal.value < 100) {
                bigdirectorProfit.value = 0;
            }
             itog.value = numberFormat(Math.round(returnNumFor(konsultantProfit.value) + returnNumFor(bigkonsultantDiscountDop.value) + returnNumFor(director2Num1.value)
                 + returnNumFor(bigdirectorProfit.value) + returnNumFor(director2Num2.value)), 0, '.', ' ') + ' ₽';
        } else if(+sailPosition == 11){
            bigkonsultantDiscountDop.value = numberFormat(Math.round(returnNumFor(bigkonsultantNum.value) * bigkonsultantDiscount.value / 100 / tax * disc), 0, ',', ' ');

            itog.value = numberFormat(Math.round(returnNumFor(konsultantProfit.value) + returnNumFor(bigkonsultantDiscountDop.value) + returnNumFor(director2Num1.value)
                + returnNumFor(bigdirectorProfitBig.value) + returnNumFor(biggestdirector2Num2.value) + returnNumFor(biggestdirector2Num3.value)
                + returnNumFor(director2Num2.value) + returnNumFor(biggestdirector2NumAct.value)
                +returnNumFor(biggestdirectorBounusResult.value) ), 0, '.', ' ') + ' ₽';
        }
        init();
    }

    function recalculatePersent(sailPosition){
        if(sailPosition < 11) {
            if (+directorVal.value <= 99) {
                directorDiscount.value = 5;
                director2Num2.value = 0;
            } else if (+directorVal.value > 99 && +directorVal.value <= 124) {
                directorDiscount.value = 11;
                director2Num2.value = 0;
            } else if (+directorVal.value > 124 && +directorVal.value <= 149) {
                directorDiscount.value = 11;
                director2Num2.value = 16000;
            } else if (+directorVal.value > 149 && +directorVal.value <= 199) {
                directorDiscount.value = 11;
                director2Num2.value = 22000;
            } else if (+directorVal.value > 199 && +directorVal.value <= 299) {
                directorDiscount.value = 12;
                director2Num2.value = 28000;
            } else if (+directorVal.value > 299 && +directorVal.value <= 399) {
                directorDiscount.value = 13;
                director2Num2.value = 38000;
            } else if (+directorVal.value > 399 && +directorVal.value <= 499) {
                directorDiscount.value = 13;
                director2Num2.value = 50000;
            } else if (+directorVal.value > 499 && +directorVal.value <= 699) {
                directorDiscount.value = 13;
                director2Num2.value = 65000;
            } else if (+directorVal.value > 699 && +directorVal.value <= 899) {
                directorDiscount.value = 13;
                director2Num2.value = 85000;
            } else if (+directorVal.value > 899) {
                directorDiscount.value = 13;
                director2Num2.value = 120000;
            }
        } else {
            directorDiscount.value = 13;
            director2Num2.value = 0;
        }

        if(+directorVal.value < 100 && sailPosition < 11){
            if(nowSailerPosition < 11) {
                bigdirectorProfit.value = 0;
            }
        }

        director2Num1.value = numberFormat(Math.round(returnNumFor(directorNum.value) * directorDiscount.value / 100 / tax * disc), 0, ',', ' ');
    }

    /*heart with range*/
    function changeHeart(pos){
        if(pos == 1){
            heartRange.style.left = "37px";
        } else if(pos == 2){
            heartRange.style.left = "122px";
        } else if(pos == 3){
            heartRange.style.left = "208px";
        } else if(pos == 4){
            heartRange.style.left = "296px";
        } else if(pos == 5){
            heartRange.style.left = "382px";
        } else if(pos == 6){
            heartRange.style.left = "469px";
        } else if(pos == 7){
            heartRange.style.left = "557px";
        } else if(pos == 8){
            heartRange.style.left = "642px";
        } else if(pos == 9){
            heartRange.style.left = "730px";
        } else if(pos == 10){
            heartRange.style.left = "816px";
        } else if(pos == 11){
            heartRange.style.left = "902px";
        }
    }

    //function warnings
    function warning1ColorOfFields(){
        var konsultantVal = document.querySelector('#konsultantVal');
        if(nowSailerPosition < 11 && nowSailerPosition > 1 && konsultantVal.value < 1){
            konsultantVal.style.background = "#f00";
            warning1.style.display = "block";
        } else if((nowSailerPosition == 11 || nowSailerPosition == 1) && konsultantVal.value >= 0){
            konsultantVal.style.background = "transparent";
            warning1.style.display = "none";
        } else {
            konsultantVal.style.background = "transparent";
            warning1.style.display = "none";
        }
    }

    function warning1ColorOfFHide(){
        warning1.style.display = "none";
        konsultantVal.style.background = "transparent";
        if(nowSailerPosition < 11 && konsultantVal.value < 1) {
            changeSize(bigkonsultantNum);
        }
    }

    function warning2ColorOfFields(){
        var directorVal = document.querySelector('#directorVal');
        if(nowSailerPosition < 11 && nowSailerPosition >= 7 && directorVal.value < 100){
            directorVal.style.background = "#f00";
            warning2.style.display = "block";
        } else if(nowSailerPosition == 11 && directorVal.value >= 0){
            directorVal.style.background = "transparent";
            warning2.style.display = "none";
        } else {
            directorVal.style.background = "transparent";
            warning2.style.display = "none";
        }
    }

    function warning2ColorOfFHide(){
        warning2.style.display = "none";
        directorVal.style.background = "transparent";
        if(nowSailerPosition < 11 && directorVal.value < 100) {

        }
    }


    konsultantVal.oninput = function () {
        var roubleVal = +this.value * returnNumFor(base.value);
        konsultantNum.value = numberFormat(Math.round(roubleVal), 0, ',', ' ');
        var nowCheckedRadio = document.querySelector('input[name="radioBtn"]:checked');
        if(nowCheckedRadio != null){
            if(+this.value >= 1) {
                if(+this.value < 8 && +nowCheckedRadio.value != 45) {
                    konsultantProfit.value = numberFormat(Math.round(returnNumFor(konsultantNum.value) * +nowCheckedRadio.value / 100), 0, '.', ' ');
                } else if(+this.value >= 8) {
                    konsultantProfit.value = numberFormat(Math.round(returnNumFor(konsultantNum.value) * +nowCheckedRadio.value / 100), 0, '.', ' ');
                } else {
                    konsultantProfit.value = 0;
                }
            } else{
                konsultantProfit.value = 0;
            }
        }

        // if(+this.value < 1){
        //     selectDiscount1.checked="checked";
        //     konsultantProfit.value = numberFormat(Math.round(returnNumFor(konsultantNum.value) * +selectDiscount1.value / 100), 0, '.', ' ');
        //     tooltipMoreEight.style.display = "none";
        // } else if(+this.value >= 1 && +this.value < 3){
        //     selectDiscount2.checked="checked";
        //     konsultantProfit.value = numberFormat(Math.round(returnNumFor(konsultantNum.value) * +selectDiscount2.value / 100), 0, '.', ' ');
        //     tooltipMoreEight.style.display = "none";
        // } else if(+this.value >= 3 && +this.value < 8){
        //     selectDiscount3.checked="checked";
        //     konsultantProfit.value = numberFormat(Math.round(returnNumFor(konsultantNum.value) * +selectDiscount3.value / 100), 0, '.', ' ');
        //     tooltipMoreEight.style.display = "none";
        // } else if(+this.value >= 8){
        //     selectDiscount4.checked="checked";
        //     konsultantProfit.value = numberFormat(Math.round(returnNumFor(konsultantNum.value) * +selectDiscount4.value / 100), 0, '.', ' ');
        //     tooltipMoreEight.style.display = "block";
        // }



        if(+this.value < 1 && nowSailerPosition != 11){
            bigkonsultantDiscountDop.value = 0;

        } else if(+this.value >= 0 && nowSailerPosition == 11) {
            bigkonsultantDiscountDop.value = numberFormat(Math.round(returnNumFor(bigkonsultantNum.value) * bigkonsultantDiscount.value / 100 / tax * disc), 0, '.', ' ');
        } else {
            bigkonsultantDiscountDop.value = numberFormat(Math.round(returnNumFor(bigkonsultantNum.value) * bigkonsultantDiscount.value / 100 / tax * disc), 0, '.', ' ');
        }

        // if(+this.value < 8 && selectDiscount4.checked == "checked"){
        //     tooltipSmall.style.display = "block";
        // } else{
        //     tooltipSmall.style.display = "none";
        // }
        recalculate(nowSailerPosition);
        changeSize(bigkonsultantDiscountDop);
        changeSizeSmall(konsultantNum);
        changeSize(konsultantProfit);
    };



    for(var l = 0; l < konsultantDiscountRadio.length; l++){
        konsultantDiscountRadio[l].addEventListener('change', calcDiscoutRadio);
    }
    function calcDiscoutRadio(){
        var roubleVal = +konsultantVal.value * returnNumFor(base.value);
        konsultantNum.value = numberFormat(Math.round(roubleVal), 0, ',', ' ');
        if(+this.value != 45 && +konsultantVal.value < 8) {
            konsultantProfit.value = numberFormat(Math.round(returnNumFor(konsultantNum.value) * +this.value / 100), 0, ',', ' ');
        } else if(+this.value == 45 && +konsultantVal.value < 8){
            konsultantProfit.value = 0;
        } else{
            konsultantProfit.value = numberFormat(Math.round(returnNumFor(konsultantNum.value) * +this.value / 100), 0, ',', ' ');
        }

        // if(+konsultantVal.value < 8 && +this.value == 45){
        //     tooltipSmall.style.display = "block";
        // } else{
        //     tooltipSmall.style.display = "none";
        // }
        recalculate(nowSailerPosition);
        changeSize(konsultantProfit);
    }



    bigkonsultantVal.oninput = function () {
        var roubleVal = +this.value * returnNumFor(base.value);
        bigkonsultantNum.value = numberFormat(Math.round(roubleVal), 0, ',', ' ');

        if(+konsultantVal.value >= 1 && +this.value >= 1 && +nowSailerPosition != 11) {
            bigkonsultantDiscountDop.value = numberFormat(Math.round(returnNumFor(bigkonsultantNum.value) * bigkonsultantDiscount.value / 100 / tax * disc), 0, ',', ' ');
            recalculate(nowSailerPosition);
        } else if(+this.value >= 1 && +nowSailerPosition == 11){
            bigkonsultantDiscountDop.value = numberFormat(Math.round(returnNumFor(bigkonsultantNum.value) * bigkonsultantDiscount.value / 100 / tax * disc), 0, ',', ' ');
            recalculate(nowSailerPosition);
        } else {
            bigkonsultantDiscountDop.value = 0;
        }

        changeSizeSmall(bigkonsultantNum);
        changeSize(bigkonsultantDiscountDop);
    };

    bigkonsultantVal.onfocus = function (){
        warning1ColorOfFields();
    };

    bigkonsultantVal.onblur = function (){
        warning1ColorOfFHide();
    };


    bigkonsultantAct.oninput = function () {
        if(+this.value == 0){
            bigkonsultantDiscount.value = 0;
        } else if(+this.value > 0 && +this.value <= 2){
            bigkonsultantDiscount.value = 2;
        } else if(+this.value > 2 && +this.value <= 4){
            bigkonsultantDiscount.value = 4;
        } else if(+this.value > 4 && +this.value <= 7){
            bigkonsultantDiscount.value = 8;
        } else if(+this.value > 7){
            bigkonsultantDiscount.value = 12;
        }
        if(+this.value == 0){
            bigkonsultantDiscountDop.value = 0;
        }
        if(+nowSailerPosition <= 5){
            if(+this.value  <= 2){
                nowSailerPosition = 2;
                rangeSailerStatus.value = 2;
                changeHeart(nowSailerPosition);
            } else if(+this.value  > 2 && +this.value  <= 4){
                nowSailerPosition = 3;
                rangeSailerStatus.value = 3;
                changeHeart(nowSailerPosition);
            } else if(+this.value  > 4 && +this.value  <= 7){
                nowSailerPosition = 4;
                rangeSailerStatus.value = 4;
                changeHeart(nowSailerPosition);
            } else if(+this.value  > 7){
                nowSailerPosition = 5;
                rangeSailerStatus.value = 5;
                changeHeart(nowSailerPosition);
            }
        }
        if(+konsultantVal.value >= 1 && nowSailerPosition != 11) {
            bigkonsultantDiscountDop.value = numberFormat(Math.round(returnNumFor(bigkonsultantNum.value) * bigkonsultantDiscount.value / 100 / tax * disc), 0, ',', ' ');
        } else if(+konsultantVal.value >= 0 && nowSailerPosition == 11){
            bigkonsultantDiscountDop.value = numberFormat(Math.round(returnNumFor(bigkonsultantNum.value) * bigkonsultantDiscount.value / 100 / tax * disc), 0, ',', ' ');
        } else {
            bigkonsultantDiscountDop.value = 0;
        }

        recalculate(nowSailerPosition);
        changeSize(bigkonsultantDiscountDop);
    };

    directorVal.oninput = function () {
        var roubleVal = +this.value * returnNumFor(base.value);
        directorNum.value = numberFormat(Math.round(roubleVal), 0, ',', ' ');
        if(nowSailerPosition < 11) {
            if (+this.value < 100) {
                directorDiscount.value = 5;
                director2Num2.value = 0;
            } else if (+this.value >= 100 && +this.value <= 124) {
                directorDiscount.value = 11;
                director2Num2.value = 0;
            } else if (+this.value > 124 && +this.value <= 149) {
                directorDiscount.value = 11;
                director2Num2.value = "16 000";
            } else if (+this.value > 149 && +this.value <= 199) {
                directorDiscount.value = 11;
                director2Num2.value = "22 000";
            } else if (+this.value > 199 && +this.value <= 299) {
                directorDiscount.value = 12;
                director2Num2.value = "28 000";
            } else if (+this.value > 299 && +this.value <= 399) {
                directorDiscount.value = 13;
                director2Num2.value = "38 000";
            } else if (+this.value > 399 && +this.value <= 499) {
                directorDiscount.value = 13;
                director2Num2.value = "50 000";
            } else if (+this.value > 499 && +this.value <= 699) {
                directorDiscount.value = 13;
                director2Num2.value = "65 000";
            } else if (+this.value > 699 && +this.value <= 899) {
                directorDiscount.value = 13;
                director2Num2.value = "85 000";
            } else if (+this.value > 899) {
                directorDiscount.value = 13;
                director2Num2.value = "120 000";
            }
        } else {
            directorDiscount.value = 13;
            director2Num2.value = 0;
        }

        if(+this.value < 100 && nowSailerPosition < 11 && nowSailerPosition >= 7){
            if(nowSailerPosition < 11) {
                bigdirectorProfit.value = 0;
                sumOfAllDiectors.value = 0;
            }
        } else{
            if(nowSailerPosition < 11){
                var tableVolumeSm = document.querySelectorAll('.table-volume-sm');
                var groupItogS = 0;
                for(var o = 0; o < tableVolumeSm.length; o++){
                    groupItogS += +tableVolumeSm[o].value;
                }
              bigdirectorProfit.value = numberFormat(Math.round(groupItogS * returnNumFor(base.value) * +tableShortDiscount.value / 100 / tax * disc), 0, ',', ' ');
                sumOfAllDiectors.value = numberFormat(Math.round(groupItogS * returnNumFor(base.value)), 0, ',', ' ');
            }
        }

        director2Num1.value = numberFormat(Math.round(returnNumFor(directorNum.value) * directorDiscount.value / 100 / tax * disc), 0, ',', ' ');

        recalculate(nowSailerPosition);
        changeSizeSmall(directorNum);
        changeSize(director2Num1);
        changeSize(director2Num2);
        changeSize(sumOfAllDiectors);
        changeSize(bigdirectorProfit);
    };

    // //пересчет итога
    function tableCalculate() {
        var groupItog = 0;
        for(var o = 0; o < tableVolumeSm.length; o++){
            groupItog += +tableVolumeSm[o].value;
        }
        if(+directorVal.value >= 100){
            bigdirectorProfit.value = Math.round(groupItog * returnNumFor(base.value) * bigdirectorDiscount.value / 100 / tax * disc);
        }
    };


    biggestdirectorVal2.oninput = function () {
        var roubleVal = +this.value * returnNumFor(base.value);
        biggestdirectorNum21.value = numberFormat(Math.round(roubleVal), 0, ',', ' ');
        biggestdirector2Num2.value = numberFormat(Math.round(returnNumFor(biggestdirectorNum21.value) / 100 * biggestdirectorNum22.value / tax * disc), 0, ',', ' ');

        recalculate(nowSailerPosition);
        changeSize(biggestdirectorNum21);
        changeSize(biggestdirector2Num2);
    };

    biggestdirectorVal3.oninput = function () {
        var roubleVal = +this.value * returnNumFor(base.value);
        biggestdirectorNum31.value = numberFormat(Math.round(roubleVal), 0, ',', ' ');
        biggestdirector2Num3.value = numberFormat(Math.round(returnNumFor(biggestdirectorNum31.value) / 100 * biggestdirectorNum32.value / tax * disc), 0, ',', ' ');

        recalculate(nowSailerPosition);
        changeSize(biggestdirectorNum31);
        changeSize(biggestdirector2Num3);
    };

    function changeBottomRange(pos){
        if(pos == 0){
            amountDebut.style.left = "5px";
            biggestdirectorActVall.style.left = "3px";
        } else if(pos == 1){
            amountDebut.style.left = "25px";
            biggestdirectorActVall.style.left = "23px";
        } else if(pos == 2){
            amountDebut.style.left = "50px";
            biggestdirectorActVall.style.left = "50px";
        } else if(pos == 3){
            amountDebut.style.left = "75px";
            biggestdirectorActVall.style.left = "74px";
        } else if(pos == 4){
            amountDebut.style.left = "100px";
            biggestdirectorActVall.style.left = "98px";
        } else if(pos == 5){
            amountDebut.style.left = "123px";
            biggestdirectorActVall.style.left = "122px";
        } else if(pos == 6){
            amountDebut.style.left = "147px";
            biggestdirectorActVall.style.left = "146px";
        } else if(pos == 7){
            amountDebut.style.left = "172px";
            biggestdirectorActVall.style.left = "170px";
        } else if(pos == 8){
            amountDebut.style.left = "195px";
            biggestdirectorActVall.style.left = "194px";
        } else if(pos == 9){
            amountDebut.style.left = "217px";
            biggestdirectorActVall.style.left = "216px";
        } else if(pos == 10){
            amountDebut.style.left = "242px";
            biggestdirectorActVall.style.left = "239px";
        } else if(pos == 11){
            amountDebut.style.left = "265px";
            biggestdirectorActVall.style.left = "262px";
        } else if(pos == 12){
            amountDebut.style.left = "290px";
            biggestdirectorActVall.style.left = "287px";
        } else if(pos == 13){
            amountDebut.style.left = "313px";
            biggestdirectorActVall.style.left = "310px";
        } else if(pos == 14){
            amountDebut.style.left = "337px";
            biggestdirectorActVall.style.left = "334px";
        } else if(pos == 15){
            amountDebut.style.left = "362px";
            biggestdirectorActVall.style.left = "359px";
        } else if(pos == 16){
            amountDebut.style.left = "385px";
            biggestdirectorActVall.style.left = "382px";
        } else if(pos == 17){
            amountDebut.style.left = "408px";
            biggestdirectorActVall.style.left = "405px";
        } else if(pos == 18){
            amountDebut.style.left = "433px";
            biggestdirectorActVall.style.left = "430px";
        } else if(pos == 19){
            amountDebut.style.left = "457px";
            biggestdirectorActVall.style.left = "454px";
        } else if(pos == 20){
            amountDebut.style.left = "483px";
            biggestdirectorActVall.style.left = "481px";
        }
    }

    function changeBonusRange(pos){
        if(pos == 0){
            amountDebutBonus.style.left = "5px";
            biggestdirectorActVallBonus.style.left = "3px";
        } else if(pos == 1){
            amountDebutBonus.style.left = "25px";
            biggestdirectorActVallBonus.style.left = "23px";
        } else if(pos == 2){
            amountDebutBonus.style.left = "50px";
            biggestdirectorActVallBonus.style.left = "50px";
        } else if(pos == 3){
            amountDebutBonus.style.left = "75px";
            biggestdirectorActVallBonus.style.left = "74px";
        } else if(pos == 4){
            amountDebutBonus.style.left = "100px";
            biggestdirectorActVallBonus.style.left = "98px";
        } else if(pos == 5){
            amountDebutBonus.style.left = "123px";
            biggestdirectorActVallBonus.style.left = "122px";
        } else if(pos == 6){
            amountDebutBonus.style.left = "147px";
            biggestdirectorActVallBonus.style.left = "146px";
        } else if(pos == 7){
            amountDebutBonus.style.left = "172px";
            biggestdirectorActVallBonus.style.left = "170px";
        } else if(pos == 8){
            amountDebutBonus.style.left = "195px";
            biggestdirectorActVallBonus.style.left = "194px";
        } else if(pos == 9){
            amountDebutBonus.style.left = "217px";
            biggestdirectorActVallBonus.style.left = "216px";
        } else if(pos == 10){
            amountDebutBonus.style.left = "242px";
            biggestdirectorActVallBonus.style.left = "239px";
        } else if(pos == 11){
            amountDebutBonus.style.left = "265px";
            biggestdirectorActVallBonus.style.left = "262px";
        } else if(pos == 12){
            amountDebutBonus.style.left = "290px";
            biggestdirectorActVallBonus.style.left = "287px";
        } else if(pos == 13){
            amountDebutBonus.style.left = "313px";
            biggestdirectorActVallBonus.style.left = "310px";
        } else if(pos == 14){
            amountDebutBonus.style.left = "337px";
            biggestdirectorActVallBonus.style.left = "334px";
        } else if(pos == 15){
            amountDebutBonus.style.left = "362px";
            biggestdirectorActVallBonus.style.left = "359px";
        } else if(pos == 16){
            amountDebutBonus.style.left = "385px";
            biggestdirectorActVallBonus.style.left = "382px";
        } else if(pos == 17){
            amountDebutBonus.style.left = "408px";
            biggestdirectorActVallBonus.style.left = "405px";
        } else if(pos == 18){
            amountDebutBonus.style.left = "433px";
            biggestdirectorActVallBonus.style.left = "430px";
        } else if(pos == 19){
            amountDebutBonus.style.left = "457px";
            biggestdirectorActVallBonus.style.left = "454px";
        } else if(pos == 20){
            amountDebutBonus.style.left = "483px";
            biggestdirectorActVallBonus.style.left = "481px";
        }
    }

    if(isIE){
        biggestdirectorAct.onchange = function () {
            biggestdirector2NumAct.value = numberFormat((+this.value * bonusForNdNev), 0, ',', ' ');
            biggestdirectorActVall.innerHTML = this.value;
            biggestdirectorActVallMobile.innerHTML = this.value;
            changeBottomRange(this.value);
            recalculate(nowSailerPosition);
            changeSize(biggestdirector2NumAct);
        };

        biggestdirectorBounusNd.onchange = function () {
            biggestdirectorBounusResult.value = numberFormat((+this.value * bonusForNdDev), 0, ',', ' ');
            biggestdirectorActVallBonus.innerHTML = this.value;
            changeBonusRange(this.value);
            recalculate(nowSailerPosition);
            changeSize(biggestdirectorBounusResult);
        };
    }


    biggestdirectorAct.oninput = function () {
        biggestdirector2NumAct.value = numberFormat((+this.value * bonusForNdNev), 0, ',', ' ');
        biggestdirectorActVall.innerHTML = this.value;
        biggestdirectorActVallMobile.innerHTML = this.value;
        changeBottomRange(this.value);
        recalculate(nowSailerPosition);
        changeSize(biggestdirector2NumAct);
    };

    biggestdirectorBounusNd.oninput = function () {
        biggestdirectorBounusResult.value = numberFormat((+this.value * bonusForNdDev), 0, ',', ' ');
        biggestdirectorActVallBonus.innerHTML = this.value;
        changeBonusRange(this.value);
        recalculate(nowSailerPosition);
        changeSize(biggestdirectorBounusResult);
    };




    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }

    //таблица для обычных директоров (маленькая)
    //добавить строку в таблицу

    function plusShortTable(){
        var tableShortChangeRowspan = document.querySelector('#tableShortChangeRowspan'); // добавляем значение rowspan
        var thisRowspan = tableShortChangeRowspan.getAttribute('rowspan');
        tableShortChangeRowspan.setAttribute('rowspan', thisRowspan + 1);

        var allTrR = document.querySelectorAll('.table-rows-group-sm');
        var dirCounter = allTrR.length + 1;
        var innerContent = '<td><input type="text" value="Директор '+ dirCounter + ' " class="table-name change-inputs"></td>\n' +
                     '<td><input type="text" value="" class="table-volume-sm change-inputs"></td>\n';
        var lastTrtest1 = document.querySelector('.table-rows-group-sm:last-child');
        var newTr = document.createElement('tr');
                         newTr.className = "table-rows-group-sm";
                         newTr.innerHTML = innerContent;
                         insertAfter(newTr, lastTrtest1);
                         
                         
        var allTr = document.querySelectorAll('.table-rows-group-sm');

        //скидка в зависимости от количества директоров
                    if (allTr.length <= 2) {
                        tableShortDiscount.value = 5;
                    } else if (allTr.length > 2 && allTr.length <= 4) {
                        tableShortDiscount.value = 5.5;
                    } else if (allTr.length > 4 && allTr.length <= 7) {
                        tableShortDiscount.value = 6;
                    } else if (allTr.length >= 8) {
                        tableShortDiscount.value = 6.5;
                    }
        tableVolumeSm = document.querySelectorAll('.table-volume-sm');
        for(var j = 0; j < tableVolumeSm.length; j++){
            tableVolumeSm[j].addEventListener('input', calculatetableShort);
        }
        calculatetableShort();
    }

    tableShortPlus.addEventListener('click', plusShortTable);


    //удалить строку из таблицы

        function minusShortTable(){
        var allTr = document.querySelectorAll('.table-rows-group-sm');
        if(allTr.length >= 2) {
            var deleteElement = document.querySelector('.table-rows-group-sm:last-child');
            deleteElement.parentNode.removeChild(deleteElement);
        }

        //скидка в зависимости от количества директоров
        if (allTr.length - 1 <= 2) {
            tableShortDiscount.value = 5;
        } else if (allTr.length - 1 > 2 && allTr.length - 1 <= 4) {
            tableShortDiscount.value = 5.5;
        } else if (allTr.length - 1 > 4 && allTr.length - 1 <= 7) {
            tableShortDiscount.value = 6;
        } else if (allTr.length - 1 >= 8) {
            tableShortDiscount.value = 6.5;
        }

        tableVolumeSm = document.querySelectorAll('.table-volume');
        for(var j = 0; j < tableVolumeSm.length; j++){
            tableVolumeSm[j].addEventListener('input', calculatetableShort);
        }
        calculatetableShort();
    }

    tableShortMinus.addEventListener('click', minusShortTable);

    //подсчет прибыли
    for(var j = 0; j < tableVolumeSm.length; j++){
        tableVolumeSm[j].addEventListener('input', calculatetableShort);
        tableVolumeSm[j].addEventListener('focus', warning2ColorOfFields);
        tableVolumeSm[j].addEventListener('blur', warning2ColorOfFHide);
    }


    function calculatetableShort(){
        var allVolumeSum = 0;
        var amountOfKons = 0;
        var allVolume = document.querySelectorAll('.table-volume-sm'); //объем всех заказов
        for (var k = 0; k < allVolume.length; k++) {
            allVolumeSum += +allVolume[k].value;
            amountOfKons++;
        }
        if(+directorVal.value >= 100) {
            bigdirectorProfit.value = numberFormat(Math.round(allVolumeSum * returnNumFor(base.value) * +tableShortDiscount.value / 100 / tax * disc), 0, ',', ' ');
            sumOfAllDiectors.value = numberFormat(Math.round(allVolumeSum * returnNumFor(base.value)), 0, ',', ' ');
        } else {
            bigdirectorProfit.value = 0;
            sumOfAllDiectors.value = 0;
        }
        recalculate(nowSailerPosition);
         changeSize(bigdirectorProfit);
        changeSize(sumOfAllDiectors);

        if (amountOfKons <= 2) {
            nowSailerPosition = 7;
            rangeSailerStatus.value = 7;
            changeHeart(nowSailerPosition);
        }
        else if (amountOfKons > 2 && amountOfKons <= 4) {
            nowSailerPosition = 8;
            rangeSailerStatus.value = 8;
            changeHeart(nowSailerPosition);
        }
        else if (amountOfKons > 4 && amountOfKons <= 7) {
            nowSailerPosition = 9;
            rangeSailerStatus.value = 9;
            changeHeart(nowSailerPosition);
        }
        else if (amountOfKons > 7) {
            nowSailerPosition = 10;
            rangeSailerStatus.value = 10;
            changeHeart(nowSailerPosition);
        }

    }
    
    
    
    //таблица для НД большая
    //добавить строку
    tableFirstLineGroupsPlus.onclick = function(){
        var allGropFirstLineTr = document.querySelectorAll('.table-rows-group');

        var dirBigCounter = allGropFirstLineTr.length + 1;

        var innerContent = '<td class="show-biggestdirect notshowfrom768"></td><td><input type="text" value="Директор '+ dirBigCounter +'" class="table-name change-inputs"></td>\n' +
                    '                        <td><input type="text" value="" class="table-volume change-inputs"></td>\n' +
                    '                        <td class="show-biggestdirect"><input type="text" disabled value="5" class="results-inputs table-percent"></td>\n' +
                    '                        <td class="show-biggestdirect"><input type="text" disabled value="0" class="results-inputs table-commission"></td>';
        var newTr = document.createElement('tr');
        newTr.className = "table-rows-group";
        newTr.innerHTML = innerContent;
        twoLine.parentNode.insertBefore(newTr, twoLine);
        tableVolume = document.querySelectorAll('.table-volume');
        for(var f = 0; f < tableVolume.length; f++){
            tableVolume[f].addEventListener('input', calculatetableBig);
        }
    }

    //удалить строку
    tableFirstLineGroupsMinus.onclick = function(){
        var allGropFirstLineTr = document.querySelectorAll('.table-rows-group');
        if(allGropFirstLineTr.length >= 9) {
            var deleteElement = document.querySelector('.table-rows-group:nth-child('+ (allGropFirstLineTr.length+1) +')');
            deleteElement.parentNode.removeChild(deleteElement);
        }

        calculateBigTableAll();
        bigdirectorProfitBig.value = numberFormat(calculateBigTableAll(), 0, ',', ' ');
        recalculate(nowSailerPosition);
    }

    //подсчет большой таблицы
    for(var f = 0; f < tableVolume.length; f++){
        tableVolume[f].addEventListener('input', calculatetableBig);
    }

    function calculatetableBig(){
        var thisPercentVal = this.parentNode.nextElementSibling.children[0];
        var thisCommisVal = this.parentNode.nextElementSibling.nextElementSibling.children[0];
        if(+this.value < 99){
            persThis = 5;
        } else if(+this.value >= 100 && +this.value < 200){
            persThis = 6;
        } else if(+this.value >= 200 && +this.value < 500){
            persThis = 7;
        } else if(+this.value >= 500){
            persThis = 8;
        }
        thisPercentVal.value = persThis;
        thisCommisVal.value = numberFormat(Math.round(+this.value * returnNumFor(base.value) * +thisPercentVal.value / 100 / tax * disc), 0, ',', ' ');

        bigdirectorProfitBig.value = numberFormat(calculateBigTableAll(), 0, ',', ' ');

        recalculate(nowSailerPosition);
        changeSize(bigdirectorProfitBig);
        changeSize(thisCommisVal);
    }

    //считаем всю большую таблицу
    function calculateBigTableAll(){
        var allCommissionsSum = 0;
        var allComissions = document.querySelectorAll('.table-commission');
        for (var k = 0; k < allComissions.length; k++) {
            allCommissionsSum += returnNumFor(allComissions[k].value);
        }
        recalculate(nowSailerPosition);
        return allCommissionsSum;
    }
        
    
    //меняем подпись в зависимости от newSailerPosition
    function changeItogLabel(pos){
        if(+pos == 1){
            itogLabel.innerHTML = 'Сумма дохода от личного бизнеса';
            labelChange1.innerHTML = 'Дополнительная скидка';
        } else if(+pos > 1 && +pos <= 5){
            itogLabel.innerHTML = 'Общая сумма дополнительной скидки и дохода от личного бизнеса';
            labelChange1.innerHTML = 'Дополнительная скидка';
        } else if(+pos > 5 && +pos <= 11){
            itogLabel.innerHTML = 'Общая сумма комиссионного вознаграждения и дохода от личного бизнеса';
            labelChange1.innerHTML = 'Комиссионное вознаграждение';
        }
    }


    //меняем количество строк маленькой таблицы в зависимости от статуса
    function changeSmallTableStat(sPosition){
        var allTrR = document.querySelectorAll('.table-rows-group-sm');
        var tables;
        var toMinus = 'empty';
        var toPlus = 'empty';
        if(sPosition == 7){
            tables = 1;
            if(allTrR.length > tables){
                toMinus = allTrR.length - tables;
            } else if(allTrR.length < tables){
                toPlus = tables - allTrR.length;
            }
        } else if(sPosition == 8){
            tables = 3;
            if(allTrR.length > tables){
                toMinus = allTrR.length - tables;
            } else if(allTrR.length < tables){
                toPlus = tables - allTrR.length;
            }
        } else if(sPosition == 9){
            tables = 5;
            if(allTrR.length > tables){
                toMinus = allTrR.length - tables;
            } else if(allTrR.length < tables){
                toPlus = tables - allTrR.length;
            }
        } else if(sPosition == 10){
            tables = 8;
            if(allTrR.length > tables){
                toMinus = allTrR.length - tables;
            } else if(allTrR.length < tables){
                toPlus = tables - allTrR.length;
            }
        }
        if(toMinus != 'empty'){
            for(var k = 0; k < toMinus; k++){
                minusShortTable();
            }
        }
        if(toPlus != 'empty'){
            for(var s = 0; s < toPlus; s++){
                plusShortTable();
            }
        }

    }



});



