define(function() {
  return function anonymous(target, o, op) {
    if (!op) {
      op = "html";
    }
    return rivets.bind($(target)[op](function anonymous(locals, attrs, escape, rethrow, merge) {
      attrs = attrs || jade.attrs;
      escape = escape || jade.escape;
      rethrow = rethrow || jade.rethrow;
      merge = merge || jade.merge;
      var __jade = [ {
        lineno: 1,
        filename: "/home/contra/Projects/bidstream/app/web/client/templates/graph.jade"
      } ];
      try {
        var buf = [];
        with (locals || {}) {
          var interp;
          __jade.unshift({
            lineno: 1,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 1,
            filename: __jade[0].filename
          });
          buf.push('<div id="bidHistory">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 2,
            filename: __jade[0].filename
          });
          buf.push("<h3>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 2,
            filename: __jade[0].filename
          });
          buf.push("graph");
          __jade.shift();
          __jade.shift();
          buf.push("</h3>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.shift();
        }
        return buf.join("");
      } catch (err) {
        rethrow(err, __jade[0].filename, __jade[0].lineno);
      }
    }(o))[0], o);
  };
});