function count(event){
    const tweet=event.target.value;
    updatecount(tweet);
}
function updatecount(tweet){
    console.log("counting",tweet);
    const counter=document.querySelector(".counter");
    counter.innerText=`${tweet.length}/20`;
}