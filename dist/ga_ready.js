(function () {
    var evt = new Event("ga_ready");
    document.dispatchEvent(evt);
    console.log("[ESKALAD] ga_ready");
})();
