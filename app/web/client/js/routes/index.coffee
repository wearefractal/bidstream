define ["app/lock"], (lock) ->
  (_, index) ->
    lock.ready ->
      index '#main', root: lock.root
      
      $('#placebtn').click (e) ->
        e.preventDefault()
        name = $('#bidder').val()
        num = parseFloat $('#bid').val()
        return unless name? and num?
        return unless name.length > 0
        lock.atomic(->
          @unshift 'auction.bids', 
            name: name
            bid: num
          @done()
        ).run()

      # rickshaw graph

      # add some data every so often
      #addAnnotation = (force) ->
      #  annotator.add seriesData[2][seriesData[2].length - 1].x, messages.shift()  if messages.length > 0 and (force or Math.random() >= 0.95)
      #seriesData = [[], [], [], [], [], [], [], [], []]
      #random = new Rickshaw.Fixtures.RandomData(150)
      #i = 0
      #while i < 150
      #  random.addData seriesData
      #  i++
      #console.log seriesData
      
      palette = new Rickshaw.Color.Palette(scheme: "classic9")
      bids =  [
        x: 12121212,
        y: 23
      ,
        x: 12121223,
        y: 40
      ,
        x: 12121243,
        y: 50
      ,
        x: 12121263,
        y: 60

      ]

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

      lock.subscribe 'auction.highBid', ->
        console.log lock.root
        seriesData[0].push
          x: 22332323
          y: 23322
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