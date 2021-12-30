//show date
let today = new Date();
let todayHtml = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate()
document.getElementById('todaysdate').innerHTML = todayHtml;


///FINDER
let researchResult = document.getElementById("result");
var resultList = [];

/* Run code on submit button push */
let locationForm = document.getElementById("finder");
locationForm.addEventListener("submit", function(event) {
	let season = locationForm.elements.namedItem("season").value;
	let syllables = locationForm.elements.namedItem("syllables").value;

    //場合分け
    switch(season){
        case "春":
            $.getJSON('https://raw.githubusercontent.com/ei-blue/kigo_finder/main/spring.json', function(data){
                for (const element in data) {
                    if (data[element].syllables=== Number(syllables)){
                        resultList.push(`${data[element].word}(${data[element].yomi})`);
                    };
                    researchResult.innerHTML=`${resultList.length}件の該当がありました。`+"<br>"+resultList
                }
            });
            break;
        case "夏":
            $.getJSON('https://raw.githubusercontent.com/ei-blue/kigo_finder/main/summer.json', function(data){
                for (const element in data) {
                    if (data[element].syllables=== Number(syllables)){
                        resultList.push(`${data[element].word}(${data[element].yomi})`);
                    };
                    researchResult.innerHTML=`${resultList.length}件の該当がありました。`+"<br>"+resultList
                }
            });
            break;
        case "秋":
            $.getJSON('https://raw.githubusercontent.com/ei-blue/kigo_finder/main/fall.json', function(data){
                for (const element in data) {
                    if (data[element].syllables=== Number(syllables)){
                        resultList.push(`${data[element].word}(${data[element].yomi})`);
                    };
                    researchResult.innerHTML=`${resultList.length}件の該当がありました。`+"<br>"+resultList
                }
            });
            break;
        case "冬":
            $.getJSON('https://raw.githubusercontent.com/ei-blue/kigo_finder/main/winter.json', function(data){
                for (const element in data) {
                    if (data[element].syllables=== Number(syllables)){
                        resultList.push(`${data[element].word}(${data[element].yomi})`);
                    };
                    researchResult.innerHTML=`${resultList.length}件の該当がありました。`+"<br>"+resultList
                }
            });
            break;
        case "新年":
            $.getJSON('https://raw.githubusercontent.com/ei-blue/kigo_finder/main/new_year.json', function(data){
                for (const element in data) {
                    if (data[element].syllables=== Number(syllables)){
                        resultList.push(`${data[element].word}(${data[element].yomi})`);
                    };
                    researchResult.innerHTML=`${resultList.length}件の該当がありました。`+"<br>"+resultList
                }
            });
            break;
    }
    console.log(resultList.length);
	/* This stops the usual function of "submit" which is to send data
	to another server */
	event.preventDefault();
})


///////

