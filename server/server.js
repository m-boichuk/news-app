const unirest = require('unirest');
const cheerio = require('cheerio');

function vysokaVezha () {
    unirest.get('https://wz.lviv.ua/article/431962-berezen-zavershuvatymetsia-burkhlyvo').end(function(response){

        const body = response.body
        const $ = cheerio.load(body);
        const title = $('title').text().trim();
        const image = $('.tm-figure img').attr('src');
        const description = $('.uk-margin-medium-top').text().trim();
        const views = $('.uk-margin-remove').text().trim();
        
        const post = {
            title: title,
            image: image,
            text: description,
            views: views
        
        }
        console.log(post);
        }) 
}

function zahid () {
    unirest.get('https://zaxid.net/vikritiy_na_habari_kiyivskiy_prokuror_mazurik_prodovzhuye_pratsyuvati_na_posadi_n1516140').end(function(response){

        const body = response.body
        const $ = cheerio.load(body);
        const title = $('#newsName').text().trim();
        const image = $('.bg img').attr('src');
        const description = $('#newsSummary').text().trim();
        const views = $('.info_wrap .views_count').text();
        
        const post = {
            title: title,
            image: image,
            text: description,
            views: views
        
        }
        console.log(post);
        }) 
}


console.log(zahid());


