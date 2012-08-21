
define(["app/lock"], function(lock) {
  return function(_, index) {
    return lock.ready(function() {
      var annotator, bids, graph, hoverDetail, palette, ticksTreatment, xAxis, yAxis;
      index('#main', {
        root: lock.root
      });
      $('#placebtn').click(function(e) {
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
      palette = new Rickshaw.Color.Palette({
        scheme: "classic9"
      });
      bids = [
        {
          x: 12121212,
          y: 23
        }, {
          x: 12121223,
          y: 40
        }, {
          x: 12121243,
          y: 50
        }, {
          x: 12121263,
          y: 60
        }
      ];
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
      lock.subscribe('auction.highBid', function() {
        console.log(lock.root);
        seriesData[0].push({
          x: 22332323,
          y: 23322
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
