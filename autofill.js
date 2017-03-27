function fillValuesInTextBoxes()
{
    var classCodeText = '91582';
    var premiumBaseText = "Total Cost";

    document.getElementById("class-code").value = classCodeText;
    document.getElementById("premium-base").value = classCodeText;

    //dropdown forms:
    let elementIds = ["coverage_form", "type", "type_of_risk", "each_occourence_limit", "general_aggregate_limit"];
    for (var i=0; i<elementIds.length; i++) {
      document.getElementById(elementIds[i]).selectedIndex = 1;
    }
}

console.log("hello i am autofill.js");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('request.message');
    if( request.message === "clicked_browser_action" ) {
      // var firstHref = $("a[href^='http']").eq(0).attr("href");

      // console.log(firstHref);
      console.log("Catphister chrome extension clicked!")
      fillValuesInTextBoxes();
      alert('Attempted to fillValueInTextBoxes()');
    }
  }
)
console.log("hello end of autofill.js");
