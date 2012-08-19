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
        filename: "/home/contra/Projects/bidstream/app/web/client/templates/index.jade"
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
            lineno: 1,
            filename: "/home/contra/Projects/bidstream/app/web/client/templates/header.jade"
          });
          __jade.unshift({
            lineno: 1,
            filename: __jade[0].filename
          });
          buf.push('<div style="color:#666;opacity:0.4" class="row">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 2,
            filename: __jade[0].filename
          });
          buf.push('<div class="span12">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 3,
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
            lineno: 4,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.unshift({
            lineno: 5,
            filename: __jade[0].filename
          });
          buf.push("<b>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 5,
            filename: __jade[0].filename
          });
          buf.push("bidstream");
          __jade.shift();
          __jade.shift();
          buf.push("</b>");
          __jade.shift();
          __jade.unshift({
            lineno: 7,
            filename: __jade[0].filename
          });
          buf.push('<input placeholder="search" style="margin: 0px 0px 3px 20px;"/>');
          __jade.shift();
          __jade.unshift({
            lineno: 7,
            filename: __jade[0].filename
          });
          buf.push('<div class="pull-right">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 7,
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
            lineno: 8,
            filename: __jade[0].filename
          });
          buf.push('<hr style="margin: 5px -10px 20px 0px;opacity: 0.6;"/>');
          __jade.shift();
          __jade.shift();
          __jade.unshift({
            lineno: 3,
            filename: __jade[0].filename
          });
          buf.push('<div class="row-fluid">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 4,
            filename: __jade[0].filename
          });
          buf.push('<div class="span4">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 1,
            filename: "/home/contra/Projects/bidstream/app/web/client/templates/product.jade"
          });
          __jade.unshift({
            lineno: 1,
            filename: __jade[0].filename
          });
          buf.push('<table cellpadding="0" cellspacing="0" border="0" class="table table-bordered">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 3,
            filename: __jade[0].filename
          });
          buf.push("<thead>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 4,
            filename: __jade[0].filename
          });
          buf.push("<tr>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 4,
            filename: __jade[0].filename
          });
          buf.push('<th data-text="root.auction.title">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
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
            lineno: 6,
            filename: __jade[0].filename
          });
          buf.push("<tbody>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 7,
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
          buf.push('<div id="productCarousel" class="carousel">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 9,
            filename: __jade[0].filename
          });
          buf.push('<div data-each-image="root.auction.images" class="carousel-inner">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 10,
            filename: __jade[0].filename
          });
          buf.push('<div class="item active">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 12,
            filename: __jade[0].filename
          });
          buf.push('<img data-src="image.src"/>');
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 12,
            filename: __jade[0].filename
          });
          buf.push('<a href="#productCarousel" data-slide="prev" class="carousel-control left">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 12,
            filename: __jade[0].filename
          });
          buf.push("‹");
          __jade.shift();
          __jade.shift();
          buf.push("</a>");
          __jade.shift();
          __jade.unshift({
            lineno: 13,
            filename: __jade[0].filename
          });
          buf.push('<a href="#productCarousel" data-slide="next" class="carousel-control right">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 13,
            filename: __jade[0].filename
          });
          buf.push("›");
          __jade.shift();
          __jade.shift();
          buf.push("</a>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 14,
            filename: __jade[0].filename
          });
          buf.push('<div id="productFooter">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 14,
            filename: __jade[0].filename
          });
          buf.push("         ");
          __jade.shift();
          __jade.unshift({
            lineno: 15,
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
            lineno: 16,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.unshift({
            lineno: 17,
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
            lineno: 18,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          buf.push("\n");
          __jade.unshift({
            lineno: 19,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.unshift({
            lineno: 20,
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
            lineno: 21,
            filename: __jade[0].filename
          });
          buf.push("&nbsp;");
          __jade.shift();
          __jade.unshift({
            lineno: 22,
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
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 6,
            filename: __jade[0].filename
          });
          buf.push('<div class="span8">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 1,
            filename: "/home/contra/Projects/bidstream/app/web/client/templates/auctionData.jade"
          });
          __jade.unshift({
            lineno: 1,
            filename: __jade[0].filename
          });
          buf.push('<div id="auctionData">');
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
            lineno: 6,
            filename: __jade[0].filename
          });
          buf.push("<th>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 6,
            filename: __jade[0].filename
          });
          buf.push("Bid History");
          __jade.shift();
          __jade.unshift({
            lineno: 7,
            filename: __jade[0].filename
          });
          buf.push('<div class="pull-right">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 8,
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
            lineno: 9,
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
          __jade.shift();
          buf.push("</div>");
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
            lineno: 11,
            filename: __jade[0].filename
          });
          buf.push("<tbody>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 12,
            filename: __jade[0].filename
          });
          buf.push("<tr>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 13,
            filename: __jade[0].filename
          });
          buf.push("<td>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 1,
            filename: "/home/contra/Projects/bidstream/app/web/client/templates/graph.jade"
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
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.shift();
          buf.push("</div>");
          __jade.shift();
          __jade.unshift({
            lineno: 8,
            filename: __jade[0].filename
          });
          buf.push('<div class="row-fluid">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 9,
            filename: __jade[0].filename
          });
          buf.push('<div class="span4">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 1,
            filename: "/home/contra/Projects/bidstream/app/web/client/templates/productInfo.jade"
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