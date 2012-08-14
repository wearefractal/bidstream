
define(["app/lock"], function(lock) {
  rivets.configure({
    adapter: {
      subscribe: function(o, kp, cb) {
        return lock.on('sync', function(r) {
          return cb(r[kp.replace(/,/g, '.')]);
        });
      },
      read: function(o, kp) {
        return o[kp.replace(/,/g, '.')];
      },
      publish: function(o, kp, val) {
        return lock.atomic(function() {
          this.set(kp.replace(/,/g, '.'), val);
          return this.done();
        }).run();
      }
    }
  });
  return rivets.configure({
    formatters: {
      currency: function(value) {
        return v;
      },
      seconds: function(value) {
        return v + " seconds";
      },
      orBlank: function(val) {
        return v || "";
      },
      orZero: function(val) {
        return v || 0;
      }
    }
  });
});
