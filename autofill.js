function fillValuesInTextBoxes()
{
    var classCodeText = '91582';
    var premiumBaseText = "Total Cost";

    document.getElementById("class-code").value = classCodeText;
    document.getElementById("premium-base").value = classCodeText;

    //dropdown forms:
    document.getElementById("coverage_form").selectedIndex = 1;
    document.getElementById("type").selectedIndex = 1;
    document.getElementById("type_of_risk").selectedIndex = 1;
    document.getElementById("each_occourence_limit").selectedIndex = 1;
    document.getElementById("general_aggregate_limit").selectedIndex = 1;
}

console.log("hello i am autofill.js");
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      // var firstHref = $("a[href^='http']").eq(0).attr("href");

      // console.log(firstHref);
      console.log("Catphister chrome extension clicked!")
      fillValuesInTextBoxes();
    }
  }
);
