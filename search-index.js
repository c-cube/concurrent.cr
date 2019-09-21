crystal_doc_search_index_callback({"repository_name":"github.com/didactic-drunk/concurrent.cr","body":"# concurrent.cr\n[![Build Status](https://travis-ci.org/didactic-drunk/concurrent.cr.svg?branch=master)](https://travis-ci.org/didactic-drunk/concurrent.cr)\n[![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://didactic-drunk.github.io/concurrent.cr/)\n\n<strike>Modern</strike> <strike>Adequate</strike> <strike>Any</strike> \n**New opportunities for** concurrency tools in Crystal.  \nLarge <strike>empty lots</strike> spacious directories available to build your dream <strike>home</strike> algorithm!  \nSpace is filling up at (24k code bytes / 2 months) 0.004 bytes per second.  Register your PR today!  \n<strike>©️ Real estate marketing association</strike>\n\nInspired by Erlang, Clojure, Scala, Haskell, F#, C#, Java, and classic concurrency patterns which inspired \n[Ruby](https://github.com/ruby-concurrency/concurrent-ruby), \nwhich inspired [this library](https://github.com/didactic-drunk/concurrent.cr).\n\nAvailable classes:\n* [Concurrent::CountDownLatch](https://didactic-drunk.github.io/concurrent.cr/Concurrent/CountDownLatch.html)\n* [Concurrent::Semaphore](https://didactic-drunk.github.io/concurrent.cr/Concurrent/Semaphore.html)\n\nMore algorithms are coming.  Contributions welcome.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     concurrent:\n       github: didactic-drunk/concurrent.cr\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n### CountDownLatch\n```crystal\nrequire \"concurrent/count_down_latch\"\n\nfiber_count = 10\nlatch = Concurrent::CountDownLatch.new\n10.times do\n  spawn do\n    # Do work\n    latch.count_down\n  end\nend\n\nlatch.wait_count = fiber_count\nlatch.wait\n```\n\n### Semaphore\n\n```crystal\nrequire \"concurrent/semaphore\"\n\nsem = Concurrent::Semaphore.new n\n\n# spawn a lot of fibers\n2000.times do\n  spawn do\n    sem.acquire do\n      ...\n    end\n  end\nend\n```\n\n## Development\n\nTODO: Write development instructions here\n\n## Contributing\n\n1. Fork it (<https://github.com/didactic-drunk/concurrent.cr/fork>)\n2. **Install a formatting check git hook (ln -sf ../../scripts/git/pre-commit .git/hooks)**\n3. Create your feature branch (`git checkout -b my-new-feature`)\n4. Commit your changes (`git commit -am 'Add some feature'`)\n5. Push to the branch (`git push origin my-new-feature`)\n6. Create a new Pull Request\n\n## Contributors\n\n- [Click](https://github.com/didactic-drunk/concurrent.cr/graphs/contributors) or Run `git shortlog --summary --numbered --email`\n","program":{"html_id":"github.com/didactic-drunk/concurrent.cr/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/didactic-drunk/concurrent.cr","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent","path":"Concurrent.html","kind":"module","full_name":"Concurrent","name":"Concurrent","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"concurrent_docs.cr","line_number":1,"url":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent_docs.cr"}],"repository_name":"github.com/didactic-drunk/concurrent.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent/CountDownLatch","path":"Concurrent/CountDownLatch.html","kind":"class","full_name":"Concurrent::CountDownLatch","name":"CountDownLatch","abstract":false,"superclass":{"html_id":"github.com/didactic-drunk/concurrent.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/didactic-drunk/concurrent.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/didactic-drunk/concurrent.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"concurrent/count_down_latch.cr","line_number":10,"url":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/count_down_latch.cr"}],"repository_name":"github.com/didactic-drunk/concurrent.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent","kind":"module","full_name":"Concurrent","name":"Concurrent"},"doc":"Allows **one** fiber to wait until a series of operations performed in other fibers complete.\n\nThis class has additional capabilities not found in java or other implementations:\n- `wait_count` may be set at initialization or if not provided to initialize() any time after (only once between resets).\n- Reset is allowed after the latch is released.  The object may be reused but is not a cyclic barrier.\n\nA single atomic counter is used.\nThis implementation is 30-40% faster than using a Mutex or Channel::Buffered on Crystal 0.29.0-dev and likely to be faster still when\nchannels are thread safe.","summary":"<p>Allows <strong>one</strong> fiber to wait until a series of operations performed in other fibers complete.</p>","class_methods":[],"constructors":[{"id":"new(saved_wait_count=0)-class-method","html_id":"new(saved_wait_count=0)-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[{"name":"saved_wait_count","doc":null,"default_value":"0","external_name":"saved_wait_count","restriction":""}],"args_string":"(saved_wait_count = <span class=\"n\">0</span>)","source_link":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/count_down_latch.cr#L24","def":{"name":"new","args":[{"name":"saved_wait_count","doc":null,"default_value":"0","external_name":"saved_wait_count","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(saved_wait_count)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"count-instance-method","html_id":"count-instance-method","name":"count","doc":"Current count","summary":"<p>Current count</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/count_down_latch.cr#L30","def":{"name":"count","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@count.get"}},{"id":"count_down:Nil-instance-method","html_id":"count_down:Nil-instance-method","name":"count_down","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Nil","source_link":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/count_down_latch.cr#L43","def":{"name":"count_down","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Nil","visibility":"Public","body":"prev = @count.sub(1)\nif (prev == 0) && (@saved_wait_count == 0)\n  raise(Error::Internal.new(\"counted past 0 saved_wait_count=#{@saved_wait_count}\"))\nend\nif prev == 1\n  release\nend\n"}},{"id":"reset-instance-method","html_id":"reset-instance-method","name":"reset","doc":"Only call reset after latch is released or after initialize.\nUndefined behavior if called between use of count_down and release.","summary":"<p>Only call reset after latch is released or after initialize.</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/count_down_latch.cr#L72","def":{"name":"reset","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if @count.get != 0\n  raise(Error::Internal.new(\"unknown state\"))\nend\n@queue = Channel(Nil).new(1)\n@wait_count = @saved_wait_count\n@count.set(@wait_count)\nself\n"}},{"id":"wait-instance-method","html_id":"wait-instance-method","name":"wait","doc":"Wait until count_down has been called wait_count times.\nTODO: timeout","summary":"<p>Wait until count_down has been called wait_count times.</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/count_down_latch.cr#L36","def":{"name":"wait","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"begin\n  @queue.receive\n  self\nrescue Channel::ClosedError\n  self\nend"}},{"id":"wait_count:Int32-instance-method","html_id":"wait_count:Int32-instance-method","name":"wait_count","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Int32","source_link":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/count_down_latch.cr#L20","def":{"name":"wait_count","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@wait_count"}},{"id":"wait_count=(wait_count:Int32):Int32-instance-method","html_id":"wait_count=(wait_count:Int32):Int32-instance-method","name":"wait_count=","doc":"Must be set exactly once and only if not supplied to #initialize","summary":"<p>Must be set exactly once and only if not supplied to #initialize</p>","abstract":false,"args":[{"name":"wait_count","doc":null,"default_value":"","external_name":"wait_count","restriction":"Int32"}],"args_string":"(wait_count : Int32) : Int32","source_link":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/count_down_latch.cr#L51","def":{"name":"wait_count=","args":[{"name":"wait_count","doc":null,"default_value":"","external_name":"wait_count","restriction":"Int32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Int32","visibility":"Public","body":"if wait_count <= 0\n  raise(ArgumentError.new(\"wait_count <= 0\"))\nend\nif @wait_count != 0\n  raise(ArgumentError.new(\"wait_count already set\"))\nend\n@wait_count = wait_count\nprev = @count.add(wait_count)\ndiff = wait_count + prev\nif diff == 0\n  release\nelse\n  if diff < 0\n    raise(Error::Internal.new(\"counted past 0 cnt=#{@count.get} wait_count=#{wait_count}\"))\n  end\nend\nwait_count\n"}}],"macros":[],"types":[{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent/CountDownLatch/Error","path":"Concurrent/CountDownLatch/Error.html","kind":"class","full_name":"Concurrent::CountDownLatch::Error","name":"Error","abstract":false,"superclass":{"html_id":"github.com/didactic-drunk/concurrent.cr/Exception","kind":"class","full_name":"Exception","name":"Exception"},"ancestors":[{"html_id":"github.com/didactic-drunk/concurrent.cr/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"github.com/didactic-drunk/concurrent.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/didactic-drunk/concurrent.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"concurrent/count_down_latch.cr","line_number":11,"url":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/count_down_latch.cr"}],"repository_name":"github.com/didactic-drunk/concurrent.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent/CountDownLatch/Error/Internal","kind":"class","full_name":"Concurrent::CountDownLatch::Error::Internal","name":"Internal"}],"including_types":[],"namespace":{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent/CountDownLatch","kind":"class","full_name":"Concurrent::CountDownLatch","name":"CountDownLatch"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent/CountDownLatch/Error/Internal","path":"Concurrent/CountDownLatch/Error/Internal.html","kind":"class","full_name":"Concurrent::CountDownLatch::Error::Internal","name":"Internal","abstract":false,"superclass":{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent/CountDownLatch/Error","kind":"class","full_name":"Concurrent::CountDownLatch::Error","name":"Error"},"ancestors":[{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent/CountDownLatch/Error","kind":"class","full_name":"Concurrent::CountDownLatch::Error","name":"Error"},{"html_id":"github.com/didactic-drunk/concurrent.cr/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"github.com/didactic-drunk/concurrent.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/didactic-drunk/concurrent.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"concurrent/count_down_latch.cr","line_number":12,"url":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/count_down_latch.cr"}],"repository_name":"github.com/didactic-drunk/concurrent.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent/CountDownLatch/Error","kind":"class","full_name":"Concurrent::CountDownLatch::Error","name":"Error"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]}]}]},{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent/Semaphore","path":"Concurrent/Semaphore.html","kind":"class","full_name":"Concurrent::Semaphore","name":"Semaphore","abstract":false,"superclass":{"html_id":"github.com/didactic-drunk/concurrent.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/didactic-drunk/concurrent.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/didactic-drunk/concurrent.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"concurrent/semaphore.cr","line_number":2,"url":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/semaphore.cr"}],"repository_name":"github.com/didactic-drunk/concurrent.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/didactic-drunk/concurrent.cr/Concurrent","kind":"module","full_name":"Concurrent","name":"Concurrent"},"doc":"A semaphore allows execution of at most `n` tasks simultaneously.","summary":"<p>A semaphore allows execution of at most <code>n</code> tasks simultaneously.</p>","class_methods":[],"constructors":[{"id":"new(n:Int32)-class-method","html_id":"new(n:Int32)-class-method","name":"new","doc":"Create a semaphore for `n` concurrent accesses.\nWill raise if `n <= 0`.","summary":"<p>Create a semaphore for <code>n</code> concurrent accesses.</p>","abstract":false,"args":[{"name":"n","doc":null,"default_value":"","external_name":"n","restriction":"Int32"}],"args_string":"(n : Int32)","source_link":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/semaphore.cr#L5","def":{"name":"new","args":[{"name":"n","doc":null,"default_value":"","external_name":"n","restriction":"Int32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(n)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"acquire(&block)-instance-method","html_id":"acquire(&amp;block)-instance-method","name":"acquire","doc":"Acquire an item from the semaphore, calling the block, and then safely\nreleasing the semaphore.","summary":"<p>Acquire an item from the semaphore, calling the block, and then safely releasing the semaphore.</p>","abstract":false,"args":[],"args_string":"(&block)","source_link":"https://github.com/didactic-drunk/concurrent.cr/blob/64a4b7cf81e9a288731a6360f9f8f3d2ecd39fcf/src/concurrent/semaphore.cr#L13","def":{"name":"acquire","args":[],"double_splat":null,"splat_index":null,"yields":0,"block_arg":null,"return_type":"","visibility":"Public","body":"@wait.receive\nbegin\n  yield\nensure\n  @wait.send(nil)\nend\n"}}],"macros":[],"types":[]}]}]}})