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
      var buf = [];
      with (locals || {}) {
        var interp;
        buf.push('<div class="container"><!-- header--><div style="color:#666;opacity:0.4" class="row"><div class="span12"><i class="icon-play"></i>&nbsp;<b>bidstream</b><input placeholder="search" style="margin: 0px 0px 3px 20px;"/><div class="pull-right">logged in</div></div></div><hr style="margin: 5px -10px 20px 0px;opacity: 0.6;"/><!-- item--><div class="row"><div class="span12"><h3 style="padding-bottom: 3px; color:#666;" data-text="root.auction.title"></h3></div></div><div style="padding-top: 15px;" class="row"><div class="span4"><div class="product"><center><img height="50%" width="85%" style="padding:10px;" data-src="root.auction.image_url"/></center><div id="productFooter">         <i class="icon-user"></i>&nbsp;<a data-text="root.auction.seller.name"></a>&nbsp;\n&nbsp;<i class="icon-star"></i>&nbsp;<b data-text="root.auction.seller.rating"></b></div></div><div id="productInfo" class="menu">product info</div><!--<ul class="menu"><li><i class="icon-time"></i>bids                  </li><li><i class="icon-info-sign"></i>product info                    </li><li><i class="icon-question-sign"></i>questions</li><li> <i class="icon-comments"></i>live chat</li></ul>--></div><div class="span2">&nbsp;</div><div id="auctionData" class="span6"><div id="auctionHeader">&nbsp;\n&nbsp;<i class="icon-eye-open"></i>&nbsp;<b data-text="root.auction.watchedBy"></b>&nbsp;<div id="timeLeft"></div></div><div id="graph">graph</div><div id="chat">chat</div></div></div><!--<li><ul data-each-bid="root.auction.bids"><span data-text="birowspan=2,d.name"></span></ul></li><b>deets<span data-text="bid.bid"></span></b>--></div>');
      }
      return buf.join("");
    }(o))[0], o);
  };
});