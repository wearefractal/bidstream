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
        buf.push('<center><table style="width:980px;" border="0"><tr><td colspan="2" style="color:#666;opacity:0.4"><table cellpadding="0" cellspacing="0" width="100%" border="0"><tr><td><i class="icon-play"></i>&nbsp;<b>bidstream</b><input placeholder="search" style="margin: 0px 0px 3px 20px;"/></td><td><div class="pull-right">logged in</div></td></tr></table><hr style="margin: 5px -10px 20px 0px;"/></td></tr><tr><td colspan="2" style=""><h3 style="padding-bottom: 8px;color:#666;" data-text="root.auction.title"></h3></td></tr><tr><td style="background:#fff;min-width:320px;"><center><img height="50%" width="85%" style="padding:10px;" data-src="root.auction.image_url"/><br/><br/></center></td><td rowspan="2" style="padding-left:20px;width:100%;height:100%;background-color:#ccc;opacity:0.1;"><b>deets</b></td></tr><tr><td><div id="b1" style="width:100%;background-color:#ccc;opacity:0.3;border-bottom:1px solid #fff;"> <h3 style="padding:10px 10px 10px 10px;">someshit                    </h3></div><div id="b1" style="width:100%;background-color:#ccc;opacity:0.1;border-bottom:1px solid #fff;"> <h3 style="opacity:1.0;padding:10px 10px 10px 10px;">someshit             </h3></div><div id="b1" style="width:100%;background-color:#ccc;opacity:0.3;border-bottom:1px solid #fff;"> <h3 style="opacity:1.0;padding:10px 10px 10px 10px;">someshit             </h3></div><div id="b1" style="width:100%;background-color:#ccc;opacity:0.3;border-bottom:1px solid #fff;"> <h3 style="opacity:1.0;padding:10px 10px 10px 10px;">someshit             </h3></div><div id="b1" style="width:100%;background-color:#ccc;opacity:0.3;border-bottom:1px solid #fff;"> <h3 style="opacity:1.0;padding:10px 10px 10px 10px;">someshit             </h3><!--<li><ul data-each-bid="root.auction.bids"><span data-text="birowspan=2,d.name"></span></ul></li><b>deets<span data-text="bid.bid"></span></b>--></div></td></tr></table></center>');
      }
      return buf.join("");
    }(o))[0], o);
  };
});