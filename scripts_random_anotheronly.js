const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
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

  get_kadai_anotheronly(Number(document.getElementById("select_lowlv").value),Number(document.getElementById("select_uplv").value),normalpackage_flag,subpackage_flag,document.getElementById("no_default").checked,document.getElementById("no_bit").checked,Number(document.getElementById("select_songcount").value));
}

function get_kadai_anotheronly(lowlv,uplv,normalpackage_flag,subpackage_flag,no_default,no_bit,select_songcount){
let request = new XMLHttpRequest();
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
    var html="";
    for(i=0;i<arrayData.length;i++){
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
  }
}
  if(search_array.length<=select_songcount){
    return search_array;
  }else{
    var output_kadai = new Array();
    for(i=0;i<select_songcount;i++){
      for(;;){
        rand = getRandomIntInclusive(0,search_count-1);
        if(search_array[rand][6]==0){
          search_array[rand][6]=1;
          output_kadai[i]=search_array[rand];
          break;
        }
        continue;
      }
    }
    html = html+'<thead><tr><th>曲名</th><th>難易度</th><th>アーティスト</th><th>解禁条件</th></tr></thead><tbody>';
    for (i=0;i<output_kadai.length;i++) {
        html = html+'<tr><td class="sorting_1">'+output_kadai[i][0]+'</td>';
        html = html+'<td>'+output_kadai[i][4]+'</td>';
        html = html+'<td>'+output_kadai[i][1]+'</td>';
        html = html+'<td>'+output_kadai[i][3]+'</td>';
        html=html+'</tr>';
    }
    html=html+'</tbody>';
    document.getElementById("kadai_html").innerHTML = "";
    document.getElementById("kadai_table").innerHTML = html;
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function all_generate(){  
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
  get_all_anotheronly(Number(document.getElementById("select_lowlv").value),Number(document.getElementById("select_uplv").value),normalpackage_flag,subpackage_flag,document.getElementById("no_default").checked,document.getElementById("no_bit").checked);
}

function get_all_anotheronly(lowlv,uplv,normalpackage_flag,subpackage_flag,no_default,no_bit){

let request = new XMLHttpRequest();
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
    var html="";
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
    html = html+'<thead><tr><th>曲名</th><th>難易度</th><th>アーティスト</th><th>解禁条件</th></tr></thead><tbody>';
    for (i=0;i<search_array.length;i++) {
        html = html+'<tr><td class="sorting_1">'+search_array[i][0]+'</td>';
        html = html+'<td>'+search_array[i][4]+'</td>';
        html = html+'<td>'+search_array[i][1]+'</td>';
        html = html+'<td>'+search_array[i][3]+'</td>';
        html=html+'</tr>';
    }
    html=html+'</tbody>';
    document.getElementById("kadai_html").innerHTML = "";
    document.getElementById("kadai_table").innerHTML = html;

    }
  }
}
