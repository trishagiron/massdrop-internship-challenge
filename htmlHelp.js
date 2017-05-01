function viewOutput() {
    if (document.getElementById("outputToggle").value == "View Result") {
        document.getElementById("outputToggle").value = "Hide Result";
        document.getElementById("HTMLoutput").style.visibility = "visible";
    } else {
        document.getElementById("outputToggle").value = "View Result";
        document.getElementById("HTMLoutput").style.visibility = "hidden";
    }
}
