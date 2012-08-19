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
        buf.push('<div class="container-fluid"><!-- header--><div style="color:#666;opacity:0.4" class="row-fluid"><div class="span12"><i class="icon-play"></i>&nbsp;<b>bidstream</b><input placeholder="search" style="margin: 0px 0px 3px 20px;"/><div class="pull-right">logged in</div></div></div><hr style="margin: 5px -10px 20px 0px;opacity: 0.6;"/><!-- item--><div class="row-fluid"><div class="span12"><h3 style="padding-bottom: 3px; color:#666;" data-text="root.auction.title"></h3><span style="color:#666; padding: 0px;">sold by \n&nbsp;<i class="icon-user"></i>&nbsp;<a>Contra</a>&nbsp;\n&nbsp;<i class="icon-star"></i>471\n&nbsp;\n&nbsp;<i class="icon-eye-open"></i>27</span></div></div><div style="padding-top: 15px;" class="row-fluid"><div class="span4"><div style="width:320px;" class="product"><center><img height="50%" width="85%" style="padding:10px;" data-src="root.auction.image_url"/></center></div><div><div id="b1" style="width:100%;border-bottom:1px solid #fff;font-size:18px;padding-bottom: 10px; padding-top: 10px;margin-bottom:10px;background-color:#fff"> <i class="icon-time"></i><span style="padding:10px 10px 10px 10px;">history                    </span></div><div id="b1" style="width:100%;border-bottom:1px solid #fff;font-size:18px;padding-bottom: 10px; margin-bottom:10px;"> <i class="icon-info-sign"></i><span style="padding:10px 10px 10px 10px;">product info                    </span></div><div id="b1" style="width:100%;border-bottom:1px solid #fff;font-size:18px;padding-bottom: 10px; margin-bottom:10px;"> <i class="icon-question-sign"></i><span style="opacity:1.0;padding:10px 10px 10px 10px;">questions</span></div><div id="b1" style="width:100%;border-bottom:1px solid #fff;font-size:18px;padding-bottom: 10px; margin-bottom:10px;"> <i class="icon-comments"></i><span style="opacity:1.0;padding:10px 10px 10px 10px;">live chat</span></div></div></div><div class="span6">graph etc</div></div><!--<li><ul data-each-bid="root.auction.bids"><span data-text="birowspan=2,d.name"></span></ul></li><b>deets<span data-text="bid.bid"></span></b>--></div>');
      }
      return buf.join("");
    }(o))[0], o);
  };
});