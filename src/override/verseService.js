// declare variables
var verseTextElem = document.getElementById('votd-text');
var verseRefElem = document.getElementById('votd-ref');
var verseRefUrlElem = document.getElementById('votd-ref-link');
var dayOfYear = moment().dayOfYear();
var devToken = 'edH9JzxsqEv_Pt83GjywUJPYdvw';
var randomDay = Math.floor(Math.random() * 365) + 1;
var versionId = 1; // this is the id for the KJV

function getVerse() {
  // var Url = `https://developers.youversionapi.com/1.0/verse_of_the_day/${dayOfYear}?version=ASV`;
  var Url = `https://developers.youversionapi.com/1.0/verse_of_the_day/${randomDay}?version_id=${versionId}`;
  var otherParam = {
    headers: {
      "Accept": "application/json",
      "Accept-Language": "en",
      "X-YouVersion-Developer-Token": `${devToken}`
    }
  }

  // fetch the verse data from YouVersion
  fetch(Url, otherParam)
  .then(data => {return data.json()})
  .then(res => setVerse(res))
  .catch(error => console.log(`An error occured: ${error}`));
}

function setVerse(verseData) {
  // set verse text
  verseTextElem.innerText = verseData.verse.text;

  // set verse reference
  verseRefElem.innerText = verseData.verse.human_reference;

  // set verse reference link
  verseRefUrlElem.href = verseData.verse.url;
}
