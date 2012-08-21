define ["app/lock"], (lock) ->
  (_, index) ->
    lock.ready ->
      index '#main', root: lock.root
      
      $('#bidButton').click (e) ->
        e.preventDefault()
        #name = $('#bidder').val()
        #num = parseFloat $('#bid').val()
        #return unless name? and num?
        #return unless name.length > 0
        lock.atomic(->
          currentBid = lock.root['auction.bids'][0]
          @unshift 'auction.bids', 
            bid: currentBid.bid + 1
            bidder: 'contra'
            time: new Date().getTime()
          @done()
        ).run()

      ## Rickshaw
 
      palette = new Rickshaw.Color.Palette(scheme: "classic9")

      bids = []
      for bid in lock.root['auction.bids']
        bids.push
          x: bid.time
          y: bid.bid

      graph = new Rickshaw.Graph(
        element: document.getElementById("chart")
        width: 750
        height: 300
        renderer: "area"
        stroke: true
        series: [
          color: palette.color()
          data: bids
          name: "ricky"
        ]
      )
      graph.render()
      hoverDetail = new Rickshaw.Graph.HoverDetail(graph: graph)
      annotator = new Rickshaw.Graph.Annotate(
        graph: graph
        element: document.getElementById("timeline")
      )
      ticksTreatment = "glow"
      xAxis = new Rickshaw.Graph.Axis.Time(
        graph: graph
        ticksTreatment: ticksTreatment
      )
      xAxis.render()
      yAxis = new Rickshaw.Graph.Axis.Y(
        graph: graph
        tickFormat: Rickshaw.Fixtures.Number.formatKMBT
        ticksTreatment: ticksTreatment
      )
      yAxis.render()

      lock.subscribe ->
        #console.log lock.root
        currentBid = lock.root['auction.bids'][0]        
        console.log currentBid
        bids.push
          x: currentBid.time
          y: currentBid.bid
        graph.update()


      ###
      setInterval (->
        seriesData[0].push
          x: 22332323
          y: 23322
        graph.update()
      ), 1000
      ###

      addAnnotation true
      setTimeout (->
        setInterval addAnnotation, 6000
      ), 6000