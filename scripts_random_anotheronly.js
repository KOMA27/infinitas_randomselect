function bt_allselect_normal(){
  for(i=1;i<28;i++){
    var tmpid = "v" + i;
    document.getElementById(tmpid).checked=true;
  }
}

function bt_noselect_normal(){
  for(i=1;i<28;i++){
    var tmpid = "v" + i;
    document.getElementById(tmpid).checked=false;
  }
}

function bt_allselect_sub(){
  document.getElementById("st1").checked=true;
  document.getElementById("st2").checked=true;
  document.getElementById("st3").checked=true;
  document.getElementById("pm1").checked=true;
  document.getElementById("pm2").checked=true;
  document.getElementById("bpl1").checked=true;
  document.getElementById("bpl2").checked=true;
  document.getElementById("jb1").checked=true;
  document.getElementById("sdvx1").checked=true;
  document.getElementById("sdvx2").checked=true;
  document.getElementById("th1").checked=true;
  document.getElementById("um1").checked=true;
}

function bt_noselect_sub(){
  document.getElementById("st1").checked=false;
  document.getElementById("st2").checked=false;
  document.getElementById("st3").checked=false;
  document.getElementById("pm1").checked=false;
  document.getElementById("pm2").checked=false;
  document.getElementById("bpl1").checked=false;
  document.getElementById("bpl2").checked=false;
  document.getElementById("jb1").checked=false;
  document.getElementById("sdvx1").checked=false;
  document.getElementById("sdvx2").checked=false;
  document.getElementById("th1").checked=false;
  document.getElementById("um1").checked=false;
}



function kadai_generate(){
  var tableOptions = {
    paging: false,
    searching : false,
    destroy: true,
  }

  var html='';
  
  document.getElementById("kadai_html").innerHTML = "読込中...";
  document.getElementById("kadai_table").innerHTML = "";
  var normalpackage_flag =[];
  for(i=1;i<28;i++){
    var tmpid = "v" + i;
    normalpackage_flag.push(document.getElementById(tmpid).checked);
  }
  var subpackage_flag = [];
  subpackage_flag.push(document.getElementById("st1").checked);
  subpackage_flag.push(document.getElementById("st2").checked);
  subpackage_flag.push(document.getElementById("st3").checked);
  subpackage_flag.push(document.getElementById("pm1").checked);
  subpackage_flag.push(document.getElementById("pm2").checked);
  subpackage_flag.push(document.getElementById("bpl1").checked);
  subpackage_flag.push(document.getElementById("bpl2").checked);
  subpackage_flag.push(document.getElementById("jb1").checked);
  subpackage_flag.push(document.getElementById("sdvx1").checked);
  subpackage_flag.push(document.getElementById("sdvx2").checked);
  subpackage_flag.push(document.getElementById("th1").checked);
  subpackage_flag.push(document.getElementById("um1").checked);
  /*
  google.script.run.withSuccessHandler(result).withFailureHandler(failed_result).get_kadai_anotheronly(Number(document.getElementById("select_lowlv").value),Number(document.getElementById("select_uplv").value),normalpackage_flag,subpackage_flag,document.getElementById("no_default").checked,document.getElementById("no_bit").checked,Number(document.getElementById("select_songcount").value));
  function result(data){//バージョン,曲名,ランプ,cpi
    if(data.length < document.getElementById("select_songcount").value){
      document.getElementById("kadai_html").innerHTML = '条件に一致する曲が'+document.getElementById("select_songcount").value+'曲未満です。';
    }else{
      document.getElementById("kadai_html").innerHTML = "";
    }
    html = html+'<thead><tr><th>曲名</th><th>難易度</th><th>アーティスト</th><th>解禁条件</th></tr></thead><tbody>';
    for (i=0;i<data.length;i++) {
      html = html+'<tr><td class="sorting_1">'+data[i][0]+'</td>';
      html = html+'<td>'+data[i][4]+'</td>';
      html = html+'<td>'+data[i][1]+'</td>';
      html = html+'<td>'+data[i][3]+'</td>';
      html=html+'</tr>';
    }
    html=html+'</tbody>';
    document.getElementById("kadai_table").innerHTML = html;
    jQuery(function($){ 
    $("#kadai_table").DataTable(tableOptions); 
    }); 
  }
  function failed_result(){
    document.getElementById("kadai_html").innerHTML = "生成失敗";
  }
  */
}

function all_generate(){
  var html='';
  
  document.getElementById("kadai_html").innerHTML = "読込中...";
  document.getElementById("kadai_table").innerHTML = "";
  var normalpackage_flag =[];
  for(i=1;i<28;i++){
    var tmpid = "v" + i;
    normalpackage_flag.push(document.getElementById(tmpid).checked);
  }
  var subpackage_flag = [];
  subpackage_flag.push(document.getElementById("st1").checked);
  subpackage_flag.push(document.getElementById("st2").checked);
  subpackage_flag.push(document.getElementById("st3").checked);
  subpackage_flag.push(document.getElementById("pm1").checked);
  subpackage_flag.push(document.getElementById("pm2").checked);
  subpackage_flag.push(document.getElementById("bpl1").checked);
  subpackage_flag.push(document.getElementById("bpl2").checked);
  subpackage_flag.push(document.getElementById("jb1").checked);
  subpackage_flag.push(document.getElementById("sdvx1").checked);
  subpackage_flag.push(document.getElementById("sdvx2").checked);
  subpackage_flag.push(document.getElementById("th1").checked);
  subpackage_flag.push(document.getElementById("um1").checked);
  //subpackage_flag.push(false);
  
  /*google.script.run.withSuccessHandler(result).withFailureHandler(failed_result).get_all_anotheronly(Number(document.getElementById("select_lowlv").value),Number(document.getElementById("select_uplv").value),normalpackage_flag,subpackage_flag,document.getElementById("no_default").checked,document.getElementById("no_bit").checked);
  function result(data){//バージョン,曲名,ランプ,cpi
    document.getElementById("kadai_html").innerHTML = "";
    html = html+'<thead><tr><th>曲名</th><th>難易度</th><th>アーティスト</th><th>解禁条件</th></tr></thead><tbody>';
    for (i=0;i<data.length;i++) {
      html = html+'<tr><td class="sorting_1">'+data[i][0]+'</td>';
      html = html+'<td>'+data[i][4]+'</td>';
      html = html+'<td>'+data[i][1]+'</td>';
      html = html+'<td>'+data[i][3]+'</td>';
      html=html+'</tr>';
    }
    html=html+'</tbody>';
    document.getElementById("kadai_table").innerHTML = html;
  }
  function failed_result(){
    document.getElementById("kadai_html").innerHTML = "生成失敗";
  }
  */

    var data = new Array();
    data = get_all_anotheronly(Number(document.getElementById("select_lowlv").value),Number(document.getElementById("select_uplv").value),normalpackage_flag,subpackage_flag,document.getElementById("no_default").checked,document.getElementById("no_bit").checked);
  
    console.log(get_all_anotheronly(Number(document.getElementById("select_lowlv").value),Number(document.getElementById("select_uplv").value),normalpackage_flag,subpackage_flag,document.getElementById("no_default").checked,document.getElementById("no_bit").checked)); 
    console.log(data); 
  /*
  html = html+'<thead><tr><th>曲名</th><th>難易度</th><th>アーティスト</th><th>解禁条件</th></tr></thead><tbody>';
    for (i=0;i<data.length;i++) {
        html = html+'<tr><td class="sorting_1">'+data[i][0]+'</td>';
        html = html+'<td>'+data[i][4]+'</td>';
        html = html+'<td>'+data[i][1]+'</td>';
        html = html+'<td>'+data[i][3]+'</td>';
        html=html+'</tr>';
      }
      html=html+'</tbody>';
      document.getElementById("kadai_html").innerHTML = "";
      document.getElementById("kadai_table").innerHTML = html;
  */
  
}

function get_all_anotheronly(lowlv,uplv,normalpackage_flag,subpackage_flag,no_default,no_bit){
  /*
  lowlv = 10;
  uplv = 12;
  normalpackage_flag = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//27個
  subpackage_flag = [0,0,0,0,0,0,0,0,0,0,0,0];//st1,st2,st3,pm1,pm2,bpl1,bpl2,jb1,sdvx1,sdvx2,th1,th2
  no_default = 0;
  no_bit = 0;*/
let request = new XMLHttpRequest();

  // JSONファイルが置いてあるパスを記述
request.open('GET', 'ALL_2.json');
request.send();

  // JSON読み込み時の処理
request.onreadystatechange = () => {
    // 全てのデータを受信・正常に処理された場合
  if (request.readyState == 4 && request.status == 200) {
        // JSONデータを変換
    let arrayData = JSON.parse(request.responseText);
    var search_array = new Array();
    var search_count = 0;
     for(i=1;i<arrayData.length;i++){
        if(arrayData[i][4]=="DEFAULT"){//DEFAULTを除かない場合
          if(no_default == 0){
            if(arrayData[i][5]>=lowlv && arrayData[i][5]<=uplv){
                    search_array[search_count] = new Array();
                    search_array[search_count][0] = arrayData[i][0];
                    search_array[search_count][1] = arrayData[i][1];
                    search_array[search_count][2] = arrayData[i][2];
                    search_array[search_count][3] = arrayData[i][3];
                    search_array[search_count][4] = "ANOTHER " + arrayData[i][5];
                    search_array[search_count][5] = "デフォルト解禁";
                    search_array[search_count][6] = 0;
                    search_count++; 
            }
          }
        }else if(arrayData[i][4]=="BIT"){//BIT解禁を除かない場合
          if(no_bit==0){
            if(arrayData[i][5]>=lowlv && arrayData[i][5]<=uplv){
              search_array[search_count] = new Array();
              search_array[search_count][0] = arrayData[i][0];
              search_array[search_count][1] = arrayData[i][1];
              search_array[search_count][2] = arrayData[i][2];
              search_array[search_count][3] = arrayData[i][3];
              search_array[search_count][4] = "ANOTHER " + arrayData[i][5];
              search_array[search_count][5] = "BIT解禁";
              search_array[search_count][6] = 0;
              search_count++; 
            }
          }
        }else if(arrayData[i][4].charAt(0)=="v"){
          var package_version = arrayData[i][4].replace(/[^0-9]/g, '') - 1;
          if(normalpackage_flag[package_version]==1){
            if(arrayData[i][5]>=lowlv && arrayData[i][5]<=uplv){
                search_array[search_count] = new Array();
              search_array[search_count][0] = arrayData[i][0];
              search_array[search_count][1] = arrayData[i][1];
              search_array[search_count][2] = arrayData[i][2];
              search_array[search_count][3] = arrayData[i][3];
              search_array[search_count][4] = "ANOTHER " + arrayData[i][5];
              search_array[search_count][5] = arrayData[i][5];
              search_array[search_count][6] = 0;
              search_count++; 
            }
          }
        }else{
          if(arrayData[i][4]=="st_1")var subpackage_number = 0;
          else if(arrayData[i][4]=="st_2")var subpackage_number = 1;
          else if(arrayData[i][4]=="st_3")var subpackage_number = 2;
          else if(arrayData[i][4]=="pm_1")var subpackage_number = 3;
          else if(arrayData[i][4]=="pm_2")var subpackage_number = 4;
          else if(arrayData[i][4]=="bpl_1")var subpackage_number = 5;
          else if(arrayData[i][4]=="bpl_2")var subpackage_number = 6;
          else if(arrayData[i][4]=="jb_1")var subpackage_number = 7;
          else if(arrayData[i][4]=="sdvx_1")var subpackage_number = 8;
          else if(arrayData[i][4]=="sdvx_2")var subpackage_number = 9;
          else if(arrayData[i][4]=="th_1")var subpackage_number = 10;
          else if(arrayData[i][4]=="um_1")var subpackage_number = 11;
    
          if(subpackage_flag[subpackage_number]==1){
            if(arrayData[i][5]>=lowlv && arrayData[i][5]<=uplv){
              search_array[search_count] = new Array();
              search_array[search_count][0] = arrayData[i][0];
              search_array[search_count][1] = arrayData[i][1];
              search_array[search_count][2] = arrayData[i][2];
              search_array[search_count][3] = arrayData[i][3];
              search_array[search_count][4] = "ANOTHER " + arrayData[i][5];
              search_array[search_count][5] = arrayData[i][5];
              search_array[search_count][6] = 0;
              search_count++; 
            }
          }
        }
      }
      console.log(search_array);
      return search_array;
    }
  }
}
