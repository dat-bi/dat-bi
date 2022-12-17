load('libs.js');
function execute(url) {
    if(url.includes("qidian")){
        return Response.error("không hỗ trợ đọc chương qidian");
    }
    else if(url.includes("uukanshu")){
        var data1 = getTocUU(url)
    } else if(url.includes("69shu")){
        var data1 = getTo69shu(url)
    } else if(url.includes("yushu")){
        var data1 = getToYushu(url)
    } else if(url.includes("fanqie")){
        var data1 = getToFanqie(url)
    }
    if(data1 !== null){
        data1 = data1.replace(/<br\s*\/?>|\n/g,"<br><br>")
        return Response.success(data1)
    }
}
function getTocUU(url){
    var htm = "";
    if (url.indexOf("sj.uukanshu.com") !== -1) {
        var doc = Http.get(url).html();
        doc.select(".ad_content").remove();
        doc.select("div.box").remove();
        htm = doc.select("#bookContent").html();
    } else {
        var doc = Http.get(url).html("gb2312");
        doc.select(".ad_content").remove();
        htm = doc.select("#contentbox").html();
    }
    htm = htm.replace(/[UＵ][UＵ]\s*看书\s*[wｗ][wｗ][wｗ][\.．][uｕ][uｕ][kｋ][aａ][nｎ][sｓ][hｈ][uｕ][\.．][cｃ][oｏ][mｍ]/gi, "");
    htm = htm.replace(/\&nbsp;/g, "");
    return htm;
}
function getTo69shu(url){
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');

        var htm = $.Q(doc, 'div.txtnav', {remove: ['h1', 'div']}).html();

        htm = cleanHtml(htm)
            .replace(/^ *第\d+章.*?<br>/, '') // Ex: '  第11745章 大结局，终<br>'
            .replace('(本章完)', '')
            ;
        // log(htm);
        return htm;
    }
    return null;
}
function getToYushu(url) {
    const doc = fetch(url).html();
    var content = doc.select("#BookText").html();
    var nextPage = doc.select('.articlebtn a').last();
    while(nextPage.text() === '下一页'){
        var doc2 = fetch('https://www.yushugu.cc/'+nextPage.attr('href')).html();
        content += doc2.select("#BookText").html();
        var nextPage = doc2.select('.articlebtn a').last();
    }
    return content;
}
function getToFanqie(url) {
    let response = fetch(url, {
        headers: {
            'user-agent': UserAgent.android()
        }
    });
    if (response.ok) {
        let res_json = response.json();
        console.log(res_json)
        let dataa = res_json.data.content;  
        var doc = Html.parse(dataa);
        var content = doc.select('article').html();
    return content;
    }
    return null;
}