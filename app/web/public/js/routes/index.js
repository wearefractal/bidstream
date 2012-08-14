
define(["app/lock"], function(lock) {
  return function(_, index) {
    return lock.ready(function() {
      index('#main', lock);
      return $('#placebtn').click(function(e) {
        var name, num;
        e.preventDefault();
        name = $('#bidder').val();
        num = parseFloat($('#bid').val());
        if (!((name != null) && (num != null))) {
          return;
        }
        if (!(name.length > 0)) {
          return;
        }
        console.log(name, num);
        return lock.atomic(function() {
          var newbids;
          newbids = this.get('auction.bids');
          newbids.shift({
            name: name,
            bid: num
          });
          this.set('auction.bids', newbids);
          return this.done();
        }).run();
      });
    });
  };
});
