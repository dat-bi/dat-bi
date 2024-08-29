load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        var doc = response.html()
        let data = [];
        doc.select(".inner-entry-content p img").forEach(e => {
            let img = e.attr("data-src");
            if (!img.includes("https:") && img != ""){
                img  = "https://hacamchicac.com" +img
            }
            if(img != "")
                data.push(img);
            
        });
        return Response.success(data);
    }
    return null;
}