# concurrent.cr
[![Build Status](https://travis-ci.org/didactic-drunk/concurrent.cr.svg?branch=master)](https://travis-ci.org/didactic-drunk/concurrent.cr)
[![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://didactic-drunk.github.io/concurrent.cr/)

<strike>Modern</strike> <strike>Adequate</strike> <strike>Any</strike> 
**New opportunities for** concurrency tools in Crystal.  
Large <strike>empty lots</strike> spacious directories available to build your dream <strike>home</strike> algorithm!  
Space is filling up at (24k code bytes / 2 months) 0.004 bytes per second.  Register your PR today!  
<strike>©️ Real estate marketing association</strike>

Inspired by Erlang, Clojure, Scala, Haskell, F#, C#, Java, and classic concurrency patterns which inspired 
[Ruby](https://github.com/ruby-concurrency/concurrent-ruby), 
which inspired [this library](https://github.com/didactic-drunk/concurrent.cr).

Available classes:
* [Concurrent::CountDownLatch](https://didactic-drunk.github.io/concurrent.cr/Concurrent/CountDownLatch.html)
* [Concurrent::Semaphore](https://didactic-drunk.github.io/concurrent.cr/Concurrent/Semaphore.html)

More algorithms are coming.  Contributions welcome.

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     concurrent:
       github: didactic-drunk/concurrent.cr
   ```

2. Run `shards install`

## Usage

### CountDownLatch
```crystal
require "concurrent/count_down_latch"

fiber_count = 10
latch = Concurrent::CountDownLatch.new
10.times do
  spawn do
    # Do work
    latch.count_down
  end
end

latch.wait_count = fiber_count
latch.wait
```

### Semaphore

```crystal
require "concurrent/semaphore"

sem = Concurrent::Semaphore.new n

# spawn a lot of fibers
2000.times do
  spawn do
    sem.acquire do
      ...
    end
  end
end
```

## Development

TODO: Write development instructions here

## Contributing

1. Fork it (<https://github.com/didactic-drunk/concurrent.cr/fork>)
2. **Install a formatting check git hook (ln -sf ../../scripts/git/pre-commit .git/hooks)**
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create a new Pull Request

## Contributors

- [Click](https://github.com/didactic-drunk/concurrent.cr/graphs/contributors) or Run `git shortlog --summary --numbered --email`
