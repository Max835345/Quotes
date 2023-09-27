
function generate(){
    var quotes = {
        "― Albert Einstein":'"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
        "― C.S.Lewis":"“I was not born to be free---I was born to adore and obey.”",
        "― Jules Renard, The Journal of Jules Renard":"“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”",
        "― Malcolm X":"“You can’t separate peace from freedom because no one can be at peace unless he has his freedom.” ",
        "― John F. Kennedy":"“The best road to progress is freedom’s road.”"
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}