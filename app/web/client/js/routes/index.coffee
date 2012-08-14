define ["app/lock"], (lock) ->
  (_, index) ->
    lock.ready ->
      index '#main', lock
      $('#placebtn').click (e) ->
        e.preventDefault()
        name = $('#bidder').val()
        num = parseFloat $('#bid').val()
        return unless name? and num?
        return unless name.length > 0
        console.log name, num
        lock.atomic(->
          newbids = @get 'auction.bids'
          newbids.shift 
            name: name
            bid: num
          @set 'auction.bids', newbids
          @done()
        ).run()