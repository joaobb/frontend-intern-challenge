const $encurtarBt = document.getElementById("encurtarBt")

$encurtarBt.onclick = () => {
    alert("Encurtando")
}

(async function top5Creator() {
    let hitsCounter = 0;

    let urlJson = await urlsFetcher()

    urlJson.sort((a, b) => b.hits - a.hits);

    for (let index = 0; index < urlJson.length; index++) {
        hitsCounter += urlJson[index].hits;

        if (index < 5) top5liCreator(urlJson[index].shortUrl, urlJson[index].hits)
    }
    document.getElementById("hitsNumber").innerText = hitsCounter;

    console.log(urlJson)
})()

function top5liCreator(shortUrl, numbOfClicks) {
    const li = document.createElement("li")
    li.className = "top5li"

    const siteUrl = document.createElement("a")
    siteUrl.href = shortUrl
    siteUrl.innerText = shortUrl

    const clickCounter = document.createElement("p")
    clickCounter.innerText = numbOfClicks

    li.append(siteUrl, clickCounter)

    document.getElementById("top5List").appendChild(li)
}

async function urlsFetcher() {
    const fetcher = await fetch("../Assets/urls.json")
    const urlJson = await fetcher.json()

    return urlJson;
}