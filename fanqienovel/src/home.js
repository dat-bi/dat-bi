function execute() {
    return Response.success([
        { title: "都市榜", input: "1", script: "rank.js" },
        { title: "玄幻榜", input: "7", script: "rank.js" },
        { title: "小众榜", input: "-1", script: "rank.js" },
        { title: "现言榜", input: "3", script: "rank.js" },
        { title: "古言榜", input: "5", script: "rank.js" },
  {"title":"都市脑洞", input: "https://api5-normal-lf.fqnovel.com/reading/bookapi/bookmall/cell/change/v1/?algo_type=116&category_id=262&category_ids=0%2C1%2C7%2C37%2C19%2C36%2C27%2C124%2C57%2C20%2C10%2C12%2C25%2C100%2C71%2C26&category_names=%E5%85%A8%E9%83%A8%2C%E9%83%BD%E5%B8%82%2C%E7%8E%84%E5%B9%BB%2C%E7%A9%BF%E8%B6%8A%2C%E7%B3%BB%E7%BB%9F%2C%E9%87%8D%E7%94%9F%2C%E6%88%98%E7%A5%9E%2C%E9%83%BD%E5%B8%82%E4%BF%AE%E7%9C%9F%2C%E6%B8%B8%E6%88%8F%E5%8A%A8%E6%BC%AB%2C%E7%A5%9E%E8%B1%AA%2C%E6%82%AC%E7%96%91%2C%E5%8E%86%E5%8F%B2%2C%E8%B5%98%E5%A9%BF%2C%E7%81%B5%E5%BC%82%2C%E8%AF%B8%E5%A4%A9%E4%B8%87%E7%95%8C%2C%E7%A5%9E%E5%8C%BB&cell_gender=1&cell_id=7012498137822527496&genre_type=0&list_type=daily&main_algo_name=%E6%8E%A8%E8%8D%90%E6%A6%9C%2C%E5%AE%8C%E6%9C%AC%E6%A6%9C%2C%E7%95%AA%E8%8C%84%E6%A6%9C%2C%E9%98%85%E8%AF%BB%E6%A6%9C%2C%E9%AB%98%E5%88%86%E6%A6%9C%2C%E8%BF%BD%E6%9B%B4%E6%A6%9C%2C%E7%83%AD%E8%AF%84%E6%A6%9C%2C%E9%BB%91%E9%A9%AC%E6%A6%9C%2C%E7%83%AD%E6%90%9C%E6%A6%9C&main_algo_type=101%2C100%2C104%2C111%2C115%2C109%2C110%2C102%2C103&multiple_type_main=104&multiple_type_sub=104&sub_algo_name=%E6%8E%A8%E8%8D%90%E6%A6%9C%2C%E9%98%85%E8%AF%BB%E6%A6%9C%2C%E7%95%AA%E8%8C%84%E6%A6%9C%2C%E6%96%B0%E4%B9%A6%E6%A6%9C%2C%E5%AE%8C%E6%9C%AC%E6%A6%9C%2C%E9%AB%98%E5%88%86%E6%A6%9C&sub_algo_type=135%2C111%2C104%2C108%2C116%2C115&change_type=1&offset=", script: "gen.js" },
  {"title":"推荐榜", input: "https://api5-normal-lf.fqnovel.com/reading/bookapi/bookmall/cell/change/v1/?algo_type=101&category_id=0&category_ids=0%2C1%2C7%2C37%2C19%2C36%2C27%2C124%2C57%2C20%2C10%2C12%2C25%2C100%2C71%2C26&category_names=%E5%85%A8%E9%83%A8%2C%E9%83%BD%E5%B8%82%2C%E7%8E%84%E5%B9%BB%2C%E7%A9%BF%E8%B6%8A%2C%E7%B3%BB%E7%BB%9F%2C%E9%87%8D%E7%94%9F%2C%E6%88%98%E7%A5%9E%2C%E9%83%BD%E5%B8%82%E4%BF%AE%E7%9C%9F%2C%E6%B8%B8%E6%88%8F%E5%8A%A8%E6%BC%AB%2C%E7%A5%9E%E8%B1%AA%2C%E6%82%AC%E7%96%91%2C%E5%8E%86%E5%8F%B2%2C%E8%B5%98%E5%A9%BF%2C%E7%81%B5%E5%BC%82%2C%E8%AF%B8%E5%A4%A9%E4%B8%87%E7%95%8C%2C%E7%A5%9E%E5%8C%BB&cell_gender=1&cell_id=7012498137822527496&genre_type=0&list_type=daily&main_algo_name=%E6%8E%A8%E8%8D%90%E6%A6%9C%2C%E5%AE%8C%E6%9C%AC%E6%A6%9C%2C%E7%95%AA%E8%8C%84%E6%A6%9C%2C%E9%98%85%E8%AF%BB%E6%A6%9C%2C%E9%AB%98%E5%88%86%E6%A6%9C%2C%E8%BF%BD%E6%9B%B4%E6%A6%9C%2C%E7%83%AD%E8%AF%84%E6%A6%9C%2C%E9%BB%91%E9%A9%AC%E6%A6%9C%2C%E7%83%AD%E6%90%9C%E6%A6%9C&main_algo_type=101%2C100%2C104%2C111%2C115%2C109%2C110%2C102%2C103&multiple_type_main=104&multiple_type_sub=104&sub_algo_name=%E6%8E%A8%E8%8D%90%E6%A6%9C%2C%E9%98%85%E8%AF%BB%E6%A6%9C%2C%E7%95%AA%E8%8C%84%E6%A6%9C%2C%E6%96%B0%E4%B9%A6%E6%A6%9C%2C%E5%AE%8C%E6%9C%AC%E6%A6%9C%2C%E9%AB%98%E5%88%86%E6%A6%9C&sub_algo_type=135%2C111%2C104%2C108%2C116%2C115&change_type=1&offset=", script: "gen.js" }

    ]);
}