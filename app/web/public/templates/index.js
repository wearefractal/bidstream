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
        filename: "/home/x51/apps/bidstream/app/web/client/templates/index.jade"
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
          buf.push('<div class="container">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 3,
            filename: __jade[0].filename
          });
          buf.push("<!-- header-->");
          __jade.shift();
          __jade.unshift({
            lineno: 3,
            filename: __jade[0].filename
          });
          buf.push('<div style="color:#666;opacity:0.4" class="row">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 4,
            filename: __jade[0].filename
          });
          buf.push('<div class="span12">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 5,
            filename: __jade[0].filename
          });
          buf.push('<i class="icon-play">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</i>");
          __jade.shift();
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
          buf.push("<b>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 7,
            filename: __jade[0].filename
          });
          buf.push("bidstream");
          __jade.shift();
          __jade.shift();
          buf.push("</b>");
          __jade.shift();
          __jade.unshift({
            lineno: 9,
            filename: __jade[0].filename
          });
          buf.push('<input placeholder="search" style="margin: 0px 0px 3px 20px;"/>');
          __jade.shift();
          __jade.unshift({
            lineno: 9,
            filename: __jade[0].filename
          });
          buf.push('<div class="pull-right">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 9,
            filename: __jade[0].filename
          });
          buf.push("logged in");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 11,
            filename: __jade[0].filename
          });
          buf.push('<hr style="margin: 5px -10px 20px 0px;opacity: 0.6;"/>');
          __jade.shift();
          __jade.unshift({
            lineno: 12,
            filename: __jade[0].filename
          });
          buf.push("<!-- item-->");
          __jade.shift();
          __jade.unshift({
            lineno: 12,
            filename: __jade[0].filename
          });
          buf.push('<div class="row">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 13,
            filename: __jade[0].filename
          });
          buf.push('<div class="span12">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 14,
            filename: __jade[0].filename
          });
          buf.push('<h3 style="padding-bottom: 3px; color:#666;" data-text="root.auction.title">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</h3>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 15,
            filename: __jade[0].filename
          });
          buf.push('<div style="padding-top: 15px;" class="row">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 16,
            filename: __jade[0].filename
          });
          buf.push('<div class="span4">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 17,
            filename: __jade[0].filename
          });
          buf.push('<div class="product">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 19,
            filename: __jade[0].filename
          });
          buf.push("<center>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 19,
            filename: __jade[0].filename
          });
          buf.push('<img height="50%" width="85%" style="padding:10px;" data-src="root.auction.image_url"/>');
          __jade.shift();
          __jade.shift();
          buf.push("</center>");
          __jade.shift();
          __jade.unshift({
            lineno: 20,
            filename: __jade[0].filename
          });
          buf.push('<div id="productFooter">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 20,
            filename: __jade[0].filename
          });
          buf.push("         ");
          __jade.shift();
          __jade.unshift({
            lineno: 21,
            filename: __jade[0].filename
          });
          buf.push('<i class="icon-user">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</i>");
          __jade.shift();
          __jade.unshift({
            lineno: 22,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.unshift({
            lineno: 23,
            filename: __jade[0].filename
          });
          buf.push('<a data-text="root.auction.seller.name">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</a>");
          __jade.shift();
          __jade.unshift({
            lineno: 24,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          buf.push("\n");
          __jade.unshift({
            lineno: 25,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.unshift({
            lineno: 26,
            filename: __jade[0].filename
          });
          buf.push('<i class="icon-star">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</i>");
          __jade.shift();
          __jade.unshift({
            lineno: 27,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.unshift({
            lineno: 28,
            filename: __jade[0].filename
          });
          buf.push('<b data-text="root.auction.seller.rating">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</b>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 29,
            filename: __jade[0].filename
          });
          buf.push('<div id="productInfo" class="menu">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 30,
            filename: __jade[0].filename
          });
          buf.push("product info");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 45,
            filename: __jade[0].filename
          });
          buf.push("<!--");
          __jade.unshift({
            lineno: 32,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 32,
            filename: __jade[0].filename
          });
          buf.push('<ul class="menu">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 34,
            filename: __jade[0].filename
          });
          buf.push("<li>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 34,
            filename: __jade[0].filename
          });
          buf.push('<i class="icon-time">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</i>");
          __jade.shift();
          __jade.unshift({
            lineno: 35,
            filename: __jade[0].filename
          });
          buf.push("bids                  ");
          __jade.shift();
          __jade.shift();
          buf.push("</li>");
          __jade.shift();
          __jade.unshift({
            lineno: 37,
            filename: __jade[0].filename
          });
          buf.push("<li>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 37,
            filename: __jade[0].filename
          });
          buf.push('<i class="icon-info-sign">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</i>");
          __jade.shift();
          __jade.unshift({
            lineno: 38,
            filename: __jade[0].filename
          });
          buf.push("product info                    ");
          __jade.shift();
          __jade.shift();
          buf.push("</li>");
          __jade.shift();
          __jade.unshift({
            lineno: 40,
            filename: __jade[0].filename
          });
          buf.push("<li>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 40,
            filename: __jade[0].filename
          });
          buf.push('<i class="icon-question-sign">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</i>");
          __jade.shift();
          __jade.unshift({
            lineno: 41,
            filename: __jade[0].filename
          });
          buf.push("questions");
          __jade.shift();
          __jade.shift();
          buf.push("</li>");
          __jade.shift();
          __jade.unshift({
            lineno: 42,
            filename: __jade[0].filename
          });
          buf.push("<li>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 42,
            filename: __jade[0].filename
          });
          buf.push(" ");
          __jade.shift();
          __jade.unshift({
            lineno: 43,
            filename: __jade[0].filename
          });
          buf.push('<i class="icon-comments">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</i>");
          __jade.shift();
          __jade.unshift({
            lineno: 44,
            filename: __jade[0].filename
          });
          buf.push("live chat");
          __jade.shift();
          __jade.shift();
          buf.push("</li>");
          __jade.shift();
          __jade.shift();
          buf.push("</ul>");
          __jade.shift();
          __jade.shift();
          buf.push("-->");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 45,
            filename: __jade[0].filename
          });
          buf.push('<div class="span2">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 46,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 47,
            filename: __jade[0].filename
          });
          buf.push('<div id="auctionData" class="span6">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 48,
            filename: __jade[0].filename
          });
          buf.push('<div id="auctionHeader">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 49,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          buf.push("\n");
          __jade.unshift({
            lineno: 50,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.unshift({
            lineno: 51,
            filename: __jade[0].filename
          });
          buf.push('<i class="icon-eye-open">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</i>");
          __jade.shift();
          __jade.unshift({
            lineno: 52,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.unshift({
            lineno: 53,
            filename: __jade[0].filename
          });
          buf.push('<b data-text="root.auction.watchedBy">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</b>");
          __jade.shift();
          __jade.unshift({
            lineno: 54,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.unshift({
            lineno: 55,
            filename: __jade[0].filename
          });
          buf.push('<div id="timeLeft">');
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
          __jade.unshift({
            lineno: 56,
            filename: __jade[0].filename
          });
          buf.push('<div id="graph">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 57,
            filename: __jade[0].filename
          });
          buf.push("graph");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 58,
            filename: __jade[0].filename
          });
          buf.push('<div id="chat">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 59,
            filename: __jade[0].filename
          });
          buf.push("chat");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 1,
            filename: "/home/x51/apps/bidstream/app/web/client/templates/graph.jade"
          });
          __jade.unshift({
            lineno: 1,
            filename: __jade[0].filename
          });
          buf.push("<h1>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 1,
            filename: __jade[0].filename
          });
          buf.push("graph");
          __jade.shift();
          __jade.shift();
          buf.push("</h1>");
          __jade.shift();
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 67,
            filename: __jade[0].filename
          });
          buf.push("<!--");
          __jade.unshift({
            lineno: 62,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 63,
            filename: __jade[0].filename
          });
          buf.push("<li>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 64,
            filename: __jade[0].filename
          });
          buf.push('<ul data-each-bid="root.auction.bids">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 64,
            filename: __jade[0].filename
          });
          buf.push('<span data-text="birowspan=2,d.name">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</span>");
          __jade.shift();
          __jade.shift();
          buf.push("</ul>");
          __jade.shift();
          __jade.shift();
          buf.push("</li>");
          __jade.shift();
          __jade.unshift({
            lineno: 65,
            filename: __jade[0].filename
          });
          buf.push("<b>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 65,
            filename: __jade[0].filename
          });
          buf.push("deets");
          __jade.shift();
          __jade.unshift({
            lineno: 66,
            filename: __jade[0].filename
          });
          buf.push('<span data-text="bid.bid">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.shift();
          buf.push("</span>");
          __jade.shift();
          __jade.shift();
          buf.push("</b>");
          __jade.shift();
          __jade.shift();
          buf.push("-->");
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