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
        filename: "/home/contra/Projects/bidstream/app/web/client/templates/productInfo.jade"
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
          buf.push('<div id="productInfo">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 2,
            filename: __jade[0].filename
          });
          buf.push('<table cellpadding="0" cellspacing="0" border="0" class="table table-bordered">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 4,
            filename: __jade[0].filename
          });
          buf.push("<thead>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 5,
            filename: __jade[0].filename
          });
          buf.push("<tr>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 5,
            filename: __jade[0].filename
          });
          buf.push("<th>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 5,
            filename: __jade[0].filename
          });
          buf.push("Product Info");
          __jade.shift();
          __jade.shift();
          buf.push("</th>");
          __jade.shift();
          __jade.shift();
          buf.push("</tr>");
          __jade.shift();
          __jade.shift();
          buf.push("</thead>");
          __jade.shift();
          __jade.unshift({
            lineno: 7,
            filename: __jade[0].filename
          });
          buf.push("<tbody>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 8,
            filename: __jade[0].filename
          });
          buf.push("<tr>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 8,
            filename: __jade[0].filename
          });
          buf.push("<td>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 8,
            filename: __jade[0].filename
          });
          buf.push("shit yo");
          __jade.shift();
          __jade.shift();
          buf.push("</td>");
          __jade.shift();
          __jade.shift();
          buf.push("</tr>");
          __jade.shift();
          __jade.shift();
          buf.push("</tbody>");
          __jade.shift();
          __jade.shift();
          buf.push("</table>");
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