var bsmastheadOptions = {
        vastURL: "https://blueserving.com/vast.xml?key=bd3b7234a9bb4c8eb9e165d75ef6c89e&vastv=3.0&t=1511402911104",
        sticky: false,
        css: ''        
      };
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//static.hadarone.com/ajs/outstream/masthead/bsmasthead.js?v=" + new Date().getTime();
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'bsmasthead'));