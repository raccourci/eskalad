"function" == typeof Event ? event = new Event("ga_ready") : (event = document.createEvent("Event"), event.initEvent("ga_ready", !0, !0)), console.log("[ESKALAD] ga_ready");
