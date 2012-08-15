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
        buf.push('<div style="width:100%;" class="navbar"><i class="icon-play"></i>&nbsp;<b>bidstream</b><div class="pull-right">logged in</div></div><table width="100%"><tr><td width="45%" class="well"><div id="item"><h3 data-text="root.auction.title"></h3><img data-src="root.auction.image_url"/><!--<li><ul data-each-bid="root.auction.bids"><span data-text="bid.name"></span><span> - </span><span data-text="bid.bid"></span></ul></li>--><div>details</div></div></td><td style="padding-left:10px;">foo</td></tr></table>');
      }
      return buf.join("");
    }(o))[0], o);
  };
});