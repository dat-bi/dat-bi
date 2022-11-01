function execute(url) {
    if (url.slice(-1) !== "/")
        url = url + "/";
    let browser = Engine.newBrowser();
    browser.launchAsync(url);
    browser.waitUrl(".*?index.php.*?sajax=readchapter.*?", 10000);

    var retry = 0;
    var content = '';
    while (retry < 5) {
        sleep(2000);
        let doc = browser.html();
        var text = doc.select("#content-container > .contentbox").text();
        if (text.indexOf('Đang tải nội dung chương') === -1) {
            doc.select("i[hd]").remove();
            content = doc.select("#content-container > .contentbox").html();
            break;
        }
        retry++;
    }

    browser.close()

    let charMap = {
        'Ҋ': 'U',
        'ҋ': 'p',
        'Ҍ': 'N',
        'ҍ': 'e',
        'Ҏ': 'd',
        'ҏ': 'u',
        'Ґ': 'P',
        'ґ': 'z',
        'Ғ': 'j',
        'ғ': 'C',
        'Ҕ': 'H',
        'ҕ': 'g',
        'Җ': 'D',
        'җ': 'y',
        'Ҙ': 'n',
        'ҙ': 'm',
        'Қ': 'M',
        'қ': 'c',
        'Ҝ': 'O',
        'ҝ': 'W',
        'Ҟ': 'T',
        'ҟ': 'w',
        'Ҡ': 'B',
        'ҡ': 'A',
        'Ң': 'G',
        'ң': 'Z',
        'Ҥ': 'Q',
        'ҥ': 'v',
        'Ҧ': 'q',
        'ҧ': 'V',
        'Ҩ': 'o',
        'ҩ': 'f',
        'Ҫ': 'F',
        'ҫ': 'Y',
        'Ҭ': 'J',
        'ҭ': 'l',
        'Ү': 'k',
        'ү': 'X',
        'Ұ': 's',
        'ұ': 'L',
        'Ҳ': 'x',
        'ҳ': 'h',
        'Ҵ': 'E',
        'ҵ': 'K',
        'Ҷ': 'a',
        'ҷ': 'R',
        'Ҹ': 'S',
        'ҹ': 'b'
    }
    var newContent = '';
    for (let i = 0; i < content.length; i++) {
        let newChar = charMap[content[i]];
        if (newChar) {
            newContent += newChar;
        } else {
            newContent += content[i];
        }
    }
    var newContent = newContent.replace(/id\=\".*?\"/g,'')
        .replace(/p\=\".*?\"/g,'')
        .replace(/onclick\=\"pr\(this\)\;\"/g,'')
        .replace(/isname\=\"true\"/g,'')
        .replace(/namelen\=\".*?\"/g,'')
        .replace(/asynctask\=\".*?\"/g,'')
        .replace(/v\=\".*?\"/g,'')
        .replace(/h\=\"(.*?)\"/g,'')
        .replace(/<span (.*?)>(.*?)<\/span>/g,'')
        .replace(/\s/g,'')
        .replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "")
        .replace(/<it\=\"/g,'')
        .replace(/\">(.*?)<\/i>/g,'')
        .replace(/<footer><\/footer>/g,'');
    // newContent = newContent.replace(/\<i t\=\"[A-Za-z](.*?)[A-Za-z]\<\/i>/g, "")
    //     .replace(/<p>/g, "")
    //     .replace(/\s/g,"")
    //     .replace(/<span.*?>(.*?)<\/span>(<br>)?/g, "")
    //     .replace(/<iid=\"exran(.*?)\">(.*?)<\/i>/g, "$2")
    //     .replace(/<ih=\"(.*?)\"t=\"/g, "")
    //     .replace(/\"v=\"(.*?)\"p=\"(.*?)\"id=\"(.*?)\">(.*?)<\/i>/g, "")
    //     .replace(/&lt;p&gt;/g, "")
    //     .replace(/<span.*?>(.*?)<\/span>(<br>)?/g, "")
    //     .replace(/<a href=.*?<\/a>/g, "")
    //     .replace(/<br>/g, "\n")
    //     .replace(/\n+/g, "<br>")
    //     .replace(/\u201c/g, "")
    //     .replace(/\u201d/g, "")
    //     .replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "");
    return Response.success(newContent);
}