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