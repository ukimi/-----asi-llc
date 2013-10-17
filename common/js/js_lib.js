// JavaScript Document


/*

01.PageTop (cssの設定により編集必要)
02.RollOver 
03.Current 
04.popup window
05.flash からのPOPUP


*/




/*  01.PageTop
---------------------------------------------------------------------------------- */

var ScrollWin = {
	w3c : document.getElementById,
	iex : document.all,
	scrollLoop : false, 
	scrollInterval : null, // setInterval id
	currentBlock : null,   // object reference
	getWindowHeight : function(){
		if(this.iex) return (document.documentElement.clientHeight) ? document.documentElement.clientHeight : document.body.clientHeight;
		else return window.innerHeight;
	},
	getScrollLeft : function(){
		if(this.iex) return (document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : document.body.scrollLeft;
		else return window.pageXOffset;
	},
	getScrollTop : function(){
		if(this.iex) return (document.documentElement.scrollTop) ? document.documentElement.scrollTop : document.body.scrollTop;
		else return window.pageYOffset;
	},
	getElementYpos : function(el){
		var y = 0;
		while(el.offsetParent){
			y += el.offsetTop
			el = el.offsetParent;
		}
		return y;
	},
	scroll : function(num){
		if(!this.w3c){
			location.href = "#"+this.anchorName+num;
			return;
		}
		if(this.scrollLoop){
			clearInterval(this.scrollInterval);
			this.scrollLoop = false;
			this.scrollInterval = null;
		}
		if(this.currentBlock != null) this.currentBlock.className = this.offClassName;
		this.currentBlock = document.getElementById(this.blockName+num);
		this.currentBlock.className = this.onClassName;
		var doc = document.getElementById(this.containerName);
		var documentHeight = this.getElementYpos(doc) + doc.offsetHeight;
		var windowHeight = this.getWindowHeight();
		var ypos = this.getElementYpos(this.currentBlock);
		if(ypos > documentHeight - windowHeight) ypos = documentHeight - windowHeight;
		this.scrollTo(0,ypos);
	},
	scrollTo : function(x,y){
		if(this.scrollLoop){
			var left = this.getScrollLeft();
			var top = this.getScrollTop();
			if(Math.abs(left-x) <= 1 && Math.abs(top-y) <= 1){
				window.scrollTo(x,y);
				clearInterval(this.scrollInterval);
				this.scrollLoop = false;
				this.scrollInterval = null;
			}else{
				window.scrollTo(left+(x-left)/2, top+(y-top)/2);
			}
		}else{
			this.scrollInterval = setInterval("ScrollWin.scrollTo("+x+","+y+")",25);
			this.scrollLoop = true;
		}
	}
};


//  ↓↓Edit these variables
ScrollWin.containerName = "wrap"; // wrapperのDIVのIDを入れる。
ScrollWin.anchorName    = "top";    // 　<a name="top0"> のID
ScrollWin.blockName     = "block";     // <div id="block0"></div> の空のDIVを ページを戻したい位置にいれる。
//　↑↑ Edit these variables								　　　
// 通常は <body>の直下に置く。

ScrollWin.onClassName   = "active";    // 
ScrollWin.offClassName  = "visited";   // 








/*  02.RollOver 
---------------------------------------------------------------------------------- 

	Standards Compliant Rollover Script
	Author : Daniel Nolan
	http://www.bleedingego.co.uk/webdev.php
*/


function initRollovers() {
	if (!document.getElementById) return
	
	var aPreLoad = new Array();
	var sTempSrc;
	var aImages = document.getElementsByTagName('img');

	for (var i = 0; i < aImages.length; i++) {		
		if (aImages[i].className == 'imgover') {
			var src = aImages[i].getAttribute('src');
			var ftype = src.substring(src.lastIndexOf('.'), src.length);
			var hsrc = src.replace(ftype, '_o'+ftype);

			aImages[i].setAttribute('hsrc', hsrc);
			
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			
			aImages[i].onmouseover = function() {
				sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}	
			
			aImages[i].onmouseout = function() {
				if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_o'+ftype, ftype);
				this.setAttribute('src', sTempSrc);
			}
		}
	}
}

//window.onload = initRollovers;





/*  03.Current
 
 　imgの設置は　current_ js　ファイルで設定
 ---------------------------------------------------------------------------------- */

/*ChangeImageNum*/
	function imgChangeNum(nam,num) {
		if(document.images && (checkObj != 1)) {
			document[nam].src = arrowSecond[num].src;
		}
	}

	/*ChangeImage*/
	imgId = "";
	stayId = "";	
	function imgChange(imgName,imgState) {
		if(document.images) {
			stringId0 = imgName.substring(0,4);
			stringId = imgName
			if(((stringId0 == "navi") || (stringId0 == "navs")) && (stringId == imgId)){
				document[imgName].src = eval(imgName + "stay" + ".src");
			} else {
				document[imgName].src = eval(imgName + imgState + ".src");
			}
		}
	}

	function stayMenu(stayId){
		imgChange(stayId,"stay");
		imgId = stayId;
	}
	




/*  03-01	グローバルナビゲーション　カレント表示
 	カレント表示にしたいページで　body onload="curentImg_01()" と記述
   
------------------------------------------------------------ */
function curentImg_home(){
	GNAVI_homeoff.src = GNAVI_homestay.src
	stayMenu('GNAVI_home');
 	}

function curentImg_01(){
	GNAVI_01off.src = GNAVI_01stay.src
	stayMenu('GNAVI_01');
 	}

function curentImg_02(){
	GNAVI_02off.src = GNAVI_02stay.src
	stayMenu('GNAVI_02');
 	}

function curentImg_03(){
	GNAVI_03off.src = GNAVI_03stay.src
	stayMenu('GNAVI_03');
 	}

function curentImg_04(){
	GNAVI_04off.src = GNAVI_04stay.src
	stayMenu('GNAVI_04');
 	}

function curentImg_05(){
	GNAVI_05off.src = GNAVI_05stay.src
	stayMenu('GNAVI_05');
 	}

function curentImg_06(){
	GNAVI_06off.src = GNAVI_06stay.src
	stayMenu('GNAVI_06');
 	}

function curentImg_07(){
	GNAVI_07off.src = GNAVI_07stay.src
	stayMenu('GNAVI_07');
 	}


/*  03-02	ローカルナビゲーション　カレント表示
 	カレント表示にしたいページで　body onload="curentImg_01_l()" と記述
   
------------------------------------------------------------ */
function curentImg_home_l(){
	LNAVI_homeoff.src = LNAVI_homestay.src
	stayMenu('LNAVI_home');
 	}

function curentImg_01_l(){
	LNAVI_01off.src = LNAVI_01stay.src
	stayMenu('LNAVI_01');
 	}


function curentImg_02_l(){
	LNAVI_02off.src = LNAVI_02stay.src
	stayMenu('LNAVI_02');
 	}

function curentImg_03_l(){
	LNAVI_03off.src = LNAVI_03stay.src
	stayMenu('LNAVI_03');
 	}

function curentImg_04_l(){
	LNAVI_04off.src = LNAVI_04stay.src
	stayMenu('LNAVI_04');
 	}

function curentImg_05_l(){
	LNAVI_05off.src = LNAVI_05stay.src
	stayMenu('LNAVI_05');
 	}

function curentImg_06_l(){
	LNAVI_06off.src = LNAVI_06stay.src
	stayMenu('LNAVI_06');
 	}

function curentImg_07_l(){
	LNAVI_07off.src = LNAVI_07stay.src
	stayMenu('LNAVI_07');
 	}

function curentImg_08_l(){
	LNAVI_08off.src = LNAVI_08stay.src
	stayMenu('LNAVI_08');
 	}

function curentImg_09_l(){
	LNAVI_09off.src = LNAVI_09stay.src
	stayMenu('LNAVI_09');
 	}



/*  03-02	ローカルナビゲーション　カレント表示
 	カレント表示にしたいページで と記述
   
------------------------------------------------------------ */
function curentImg_01_ls(){
	LNAVI_S01off.src = LNAVI_S01stay.src
	stayMenu('LNAVI_S01');
 	}

function curentImg_02_ls(){
	LNAVI_S02off.src = LNAVI_S02stay.src
	stayMenu('LNAVI_S02');
 	}

function curentImg_03_ls(){
	LNAVI_S03off.src = LNAVI_S03stay.src
	stayMenu('LNAVI_S03');
 	}




/*  04. popup window 

	位置指定_有り スクロール有り時のos,ブラウザ別windowサイズ補正　位置中央
 ---------------------------------------------------------------------------------- */

function openwin4(file,name,h,w) {//位置指定_センター


	sw=screen.availWidth/2-w/2;
	sh=screen.availHeight/2-h/2;




newWin4= window.open(file,name,"height="+h+",width="+w+",top="+sh+",screenY="+sh+",left="+sw+",screenX="+sw+",toolbar=1,location=0,directories=0,status=1,menubar=1,scrollbars=1,resizable=1");
document.MM_returnValue = false;
newWin4.focus()

}



/*  04. popup window 

	位置指定_有り スクロール有り時のos,ブラウザ別windowサイズ補正　位置中央
 ---------------------------------------------------------------------------------- */

function openwin5(file,name,h,w) {//位置指定_センター

 	h=550;
	w=600;
	sw=screen.availWidth/2-w/2;
	sh=screen.availHeight/2-h/2;




newWin5= window.open(file,name,"height="+h+",width="+w+",top="+sh+",screenY="+sh+",left="+sw+",screenX="+sw+",toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1");
document.MM_returnValue = false;
newWin5.focus()

}


/*
	位置指定_有り スクロール有り時のos,ブラウザ別windowサイズ補正　位置中央
 ---------------------------------------------------------------------------------- 
function openwin4(file,name,h,w) {//位置指定_センター
	
	sw=screen.availWidth/2-w/2;
	sh=screen.availHeight/2-h/2
 	//h=screen.height



newWin4= window.open(file,name,"height="+h+",width="+w+",top="+sh+",screenY="+sh+",left="+sw+",screenX="+sw+",toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1");
document.MM_returnValue = false;
newWin4.focus()
}

*/




<!-- flash からのPOPUP用のスクリプト：壁紙設定のヘルプを表示する -->

/*yustylenote*/
function openWin() {
    window.open("/site/help.html#wall","help","width=600,height=500,toolbar=yes,status=yes,menubar=no,scrollbars=yes,resizable=yes");
}


/*toppage*/
function openWin_top() {
    window.open("/site/help.html","help","width=600,height=500,toolbar=yes,status=yes,menubar=no,scrollbars=yes,resizable=yes");
}











/*dreamweaverのJS*/

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}






/*ランダムバナー*/



//CGIの層用　RandomImageLinkCGI()
//------------------------------------------------------------------------------------
   // 画像・URLリストを配列で作る
   var imglistCGI = [
      [ "../../common/img/body/bnr_rec_01.jpg", "採用情報", "../../recruit/index.html" ] ,
      [ "../../common/img/body/bnr_rec_02.jpg", "採用情報", "../../recruit/index.html" ] ,
      [ "../../common/img/body/bnr_rec_03.jpg", "採用情報", "../../recruit/index.html" ]  //注
   ];

   // ランダムに1つ選んで表示する関数
   function RandomImageLinkCGI() {
      // どれか１つ選ぶ
      var selectnum = Math.floor(Math.random() * imglistCGI.length);
      // 画像とリンクを生成
      var output = 
         '<a href="' + imglistCGI[selectnum][2] + '" class="mouseOver">' +
         '<img src="' + imglistCGI[selectnum][0] + '"' +
         ' alt="' + imglistCGI[selectnum][1] + '" ></a>';
      // 生成したHTMLを出力
      document.write(output);
   }



//次階層用　RandomImageLink()
//------------------------------------------------------------------------------------
   // 画像・URLリストを配列で作る
   var imglist = [
      [ "../common/img/body/bnr_rec_01.jpg", "採用情報", "../recruit/index.html" ] ,
      [ "../common/img/body/bnr_rec_02.jpg", "採用情報", "../recruit/index.html" ] ,
      [ "../common/img/body/bnr_rec_03.jpg", "採用情報", "../recruit/index.html" ]  //注
   ];

   // ランダムに1つ選んで表示する関数
   function RandomImageLink() {
      // どれか１つ選ぶ
      var selectnum = Math.floor(Math.random() * imglist.length);
      // 画像とリンクを生成
      var output = 
         '<a href="' + imglist[selectnum][2] + '" class="mouseOver">' +
         '<img src="' + imglist[selectnum][0] + '"' +
         ' alt="' + imglist[selectnum][1] + '" ></a>';
      // 生成したHTMLを出力
      document.write(output);
   }



//トップページ用　RandomImageLinkTOP()
//------------------------------------------------------------------------------------
   // 画像・URLリストを配列で作る
   var imglistTOP = [
      [ "common/img/body/bnr_rec_01_l.jpg", "採用情報", "recruit/index.html" ] ,
      [ "common/img/body/bnr_rec_02_l.jpg", "採用情報", "recruit/index.html" ] ,
      [ "common/img/body/bnr_rec_03_l.jpg", "採用情報", "recruit/index.html" ]  //注
   ];

   // ランダムに1つ選んで表示する関数
   function RandomImageLinkTOP() {
      // どれか１つ選ぶ
      var selectnum = Math.floor(Math.random() * imglistTOP.length);
      // 画像とリンクを生成
      var output = 
         '<a href="' + imglistTOP[selectnum][2] + '" class="mouseOver">' +
         '<img src="' + imglistTOP[selectnum][0] + '"' +
         ' alt="' + imglistTOP[selectnum][1] + '"></a>';
      // 生成したHTMLを出力
      document.write(output);
   }
