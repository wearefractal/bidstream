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
        buf.push('<div id="auction"><h1 data-text="root.auction.title"></h1><img data-src="root.auction.image_url"/><ul><li data-each-bid="root.auction.bids"><span data-text="bid.name"></span><span> - </span><span data-text="bid.bid"></span></li></ul></div><div id="placebid"><form class="well"><h2>Place bid</h2><input id="bidder" type="text" placeholder="Name" class="span3"/><input id="bid" type="text" placeholder="Bid"/><button id="placebtn" class="btn">Place bid</button></form></div>');
      }
      return buf.join("");
    }(o))[0], o);
  };
});