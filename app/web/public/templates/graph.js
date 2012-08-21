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
            lineno: 3,
            filename: __jade[0].filename
          });
          buf.push('<span style="font-size:22px;">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 3,
            filename: __jade[0].filename
          });
          buf.push("$");
          __jade.shift();
          __jade.unshift({
            lineno: 4,
            filename: __jade[0].filename
          });
          buf.push('<b data-text="root.auction.highBid">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</b>");
          __jade.shift();
          __jade.shift();
          buf.push("</span>");
          __jade.shift();
          __jade.unshift({
            lineno: 5,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          buf.push("\n");
          __jade.unshift({
            lineno: 6,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.unshift({
            lineno: 7,
            filename: __jade[0].filename
          });
          buf.push('<button id="bidButton" class="btn btn-success">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 7,
            filename: __jade[0].filename
          });
          buf.push("+ BID! ");
          __jade.shift();
          __jade.shift();
          buf.push("</button>");
          __jade.shift();
          __jade.unshift({
            lineno: 9,
            filename: __jade[0].filename
          });
          buf.push("<br/>");
          __jade.shift();
          __jade.unshift({
            lineno: 10,
            filename: __jade[0].filename
          });
          buf.push("<br/>");
          __jade.shift();
          __jade.unshift({
            lineno: 10,
            filename: __jade[0].filename
          });
          buf.push('<div id="chart_container">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 11,
            filename: __jade[0].filename
          });
          buf.push('<div id="chart">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 12,
            filename: __jade[0].filename
          });
          buf.push('<div id="timeline">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 13,
            filename: __jade[0].filename
          });
          buf.push('<div id="slider">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
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