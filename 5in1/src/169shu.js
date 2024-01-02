var host69 = 'https://www.69xinshu.com';
function getChap69shu(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');

        var htm = $.Q(doc, 'div.txtnav', { remove: ['h1', 'div'] }).html();

        htm = cleanHtml(htm)
            .replace(/^ *第\d+章.*?<br>/, '') // Ex: '  第11745章 大结局，终<br>'
            .replace('(本章完)', '')
            ;
        // log(htm);
        return htm.replace(/<br\s*\/?>|\n/g, "<br><br>");
    }
    return null;
}
function getToc69shu1(url) {
    url = url.replace(/.+\.69shuba\.com\/book\/(.*?)\.htm/, 'https://www.69shuba.com/book/$1').append('/');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        var data = [];
        var elems = doc.select('div.catalog > ul > li > a:not(#bookcase)');
        elems.forEach(function (e) {
            data.push({
                name: formatName(e.text()),
                url: e.attr('href'),
                host: host69
            })
        });
        return data;
    }
}
function formatName(name) {
    var re = /^(\d+)\.第(\d+)章/;
    return name.replace(re, '第$2章');
}
function getToc69shu(id) {
    let response = fetch(host69 + '/' + id + '/');
    if (response.ok) {
        let doc = response.html('gbk');
        var data = [];
        var elems = doc.select('div.catalog > ul > li > a:not(#bookcase)');
        elems.forEach(function (e) {
            data.push({
                name: formatName(e.text()),
                url: e.attr('href'),
                host: host69
            })
        });
        return data;
    }
}
function getDetail69shu(url) {
    let response = fetch(url);
    let doc = response.html('gbk');
    let data = {
        name: $.Q(doc, 'div.booknav2 > h1 > a').text(),
        cover: $.Q(doc, 'div.bookimg2 > img').attr('src'),
        author: $.Q(doc, 'div.booknav2 > p:nth-child(2) > a').text().trim(),
        description: $.Q(doc, 'div.navtxt > p').html(),
        detail: $.QA(doc, 'div.booknav2 p', { m: x => x.text(), j: '<br>' }),
        host: host69
    }
    return data;
}