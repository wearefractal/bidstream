
define(["app/lock"], function(lock) {
  return function(_, index) {
    return lock.ready(function() {
      var annotator, bid, bids, graph, hoverDetail, palette, ticksTreatment, xAxis, yAxis, _i, _len, _ref;
      index('#main', {
        root: lock.root
      });
      $('#bidButton').click(function(e) {
        e.preventDefault();
        return lock.atomic(function() {
          var currentBid;
          currentBid = lock.root['auction.bids'][0];
          this.unshift('auction.bids', {
            bid: currentBid.bid + 1,
            bidder: 'contra',
            time: new Date().getTime()
          });
          this.set('auction.highBid', currentBid.bid + 1);
          return this.done();
        }).run();
      });
      $('#eye').click(function(e) {
        return lock.atomic(function() {
          this.set('auction.watchedBy', lock.root['auction.watchedBy'] + 1);
          return this.done();
        }).run();
      });
      palette = new Rickshaw.Color.Palette({
        scheme: "classic9"
      });
      bids = [];
      _ref = lock.root['auction.bids'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        bid = _ref[_i];
        bids.push({
          x: bid.time,
          y: bid.bid
        });
      }
      graph = new Rickshaw.Graph({
        element: document.getElementById("chart"),
        width: 750,
        height: 300,
        renderer: "area",
        stroke: true,
        series: [
          {
            color: palette.color(),
            data: bids,
            name: "ricky"
          }
        ]
      });
      graph.render();
      hoverDetail = new Rickshaw.Graph.HoverDetail({
        graph: graph
      });
      annotator = new Rickshaw.Graph.Annotate({
        graph: graph,
        element: document.getElementById("timeline")
      });
      ticksTreatment = "glow";
      xAxis = new Rickshaw.Graph.Axis.Time({
        graph: graph,
        ticksTreatment: ticksTreatment
      });
      xAxis.render();
      yAxis = new Rickshaw.Graph.Axis.Y({
        graph: graph,
        tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
        ticksTreatment: ticksTreatment
      });
      yAxis.render();
      lock.subscribe(function() {
        var currentBid;
        currentBid = lock.root['auction.bids'][0];
        console.log(currentBid);
        bids.push({
          x: currentBid.time,
          y: currentBid.bid
        });
        return graph.update();
      });
      /*
            setInterval (->
              seriesData[0].push
                x: 22332323
                y: 23322
              graph.update()
            ), 1000
      */

      addAnnotation(true);
      return setTimeout((function() {
        return setInterval(addAnnotation, 6000);
      }), 6000);
    });
  };
});
