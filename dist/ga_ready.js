(function () {
    var evt = new Event("ga_ready");
    window.ga_ready = true;
    document.dispatchEvent(evt);
    console.log("[ESKALAD] ga_ready");
})();
