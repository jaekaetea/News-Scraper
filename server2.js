var cheerio = require("cheerio");
var axios = require("axios");

axios.get("https://www.nytimes.com/").then(function(response) {
    var $ = cheerio.load(response.data);

    var results = [];

    $("article h2").each(function(i, element) {
        var title = $(element).text();
        var link = $(element).parent().parent().attr("href");
        var summary = $(element).parent().siblings().text();
        
        console.log(pic);
        if (title != "" && link != "" && summary != "")
        {
            results.push({
                title: title,
                link: link,
                summary: summary
            });
        };
    });

    console.log(results);
})