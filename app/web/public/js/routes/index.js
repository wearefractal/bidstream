
define(["app/lock"], function(lock) {
  return function(_, index) {
    return lock.ready(function() {
      index('#main', {
        root: lock.root
      });
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
        return lock.atomic(function() {
          this.unshift('auction.bids', {
            name: name,
            bid: num
          });
          return this.done();
        }).run();
      });
    });
  };
});
