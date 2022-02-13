//Display date
let today = new Date();
let todayHtml = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate()
document.getElementById('todaysdate').innerHTML = todayHtml;

///FINDER
let researchResult = document.getElementById("result");

/* Run code on submit button push */
let locationForm = document.getElementById("finder");

locationForm.addEventListener("submit", function(event) {
	let season = locationForm.elements.namedItem("season").value;
	let syllables = locationForm.elements.namedItem("syllables").value;
    let resultList = [];

    //seasons
    switch(season){
        case "spring":
            $.getJSON('https://raw.githubusercontent.com/ei-blue/kigo_finder/main/seasons/spring.json', function(data){
                for (const element in data) {
                    if (data[element].syllables=== Number(syllables)){
                        resultList.push(`${data[element].word}(${data[element].yomi})`);
                    };
                }
                researchResult.innerHTML="<p>"+`${resultList.length}件の該当がありました。`+"</p>"+resultList.join(', ')
            });
            break;
        case "summer":
            $.getJSON('https://raw.githubusercontent.com/ei-blue/kigo_finder/main/seasons/summer.json', function(data){
                for (const element in data) {
                    if (data[element].syllables=== Number(syllables)){
                        resultList.push(`${data[element].word}(${data[element].yomi})`);
                    };
                }
                researchResult.innerHTML="<p>"+`${resultList.length}件の該当がありました。`+"</p>"+resultList.join(', ')
            });
            break;
        case "fall":
            $.getJSON('https://raw.githubusercontent.com/ei-blue/kigo_finder/main/seasons/fall.json', function(data){
                for (const element in data) {
                    if (data[element].syllables=== Number(syllables)){
                        resultList.push(`${data[element].word}(${data[element].yomi})`);
                    };
                }
                researchResult.innerHTML="<p>"+`${resultList.length}件の該当がありました。`+"</p>"+resultList.join(', ')
            });
            break;
        case "winter":
            $.getJSON('https://raw.githubusercontent.com/ei-blue/kigo_finder/main/seasons/winter.json', function(data){
                for (const element in data) {
                    if (data[element].syllables=== Number(syllables)){
                        resultList.push(`${data[element].word}(${data[element].yomi})`);
                    };
                }
                researchResult.innerHTML="<p>"+`${resultList.length}件の該当がありました。`+"</p>"+resultList.join(', ')
            });
            break;
        case "newyear":
            $.getJSON('https://raw.githubusercontent.com/ei-blue/kigo_finder/main/seasons/new_year.json', function(data){
                for (const element in data) {
                    if (data[element].syllables=== Number(syllables)){
                        resultList.push(`${data[element].word}(${data[element].yomi})`);
                    };
                }
                researchResult.innerHTML="<p>"+`${resultList.length}件の該当がありました。`+"</p>"+resultList.join(', ')
            });
            break;
    }
	/* This stops the usual function of "submit" which is to send data
	to another server */
	event.preventDefault();
})

//Run this code when tap reset
locationForm.addEventListener("reset", function(event) {
    resultList = [];
    researchResult.innerHTML=resultList;
})
///////
