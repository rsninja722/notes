# Meta
##### 2020.08.22

## I made a blog today

I tried to keep the size down, but the code highlighting library turned out to be 8x the size of the markdown parsing library.

This is going to be a template post I guess?

here are some things I can copy paste because I forget markdown on a weekly basis

### <a href="#sectionLink">link to a section</a>

## katex Wow

$$
\relax{x} = \int_{-\infty}^\infty
    \hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
$$

can I do inline latex? $$x=\frac{-b\pm\sqrt{b^2-4ac}+\sqrt{\frac{\pi}{3^{(25)}\alpha}\kappa}}{2a}$$ we'll see

## things to grab $$x=\frac{-b\pm\sqrt{b^2-4ac}+\sqrt{\frac{\pi}{3^{(25)}\alpha}\kappa}}{2a}$$ we'll see

$$\int_x^n\int_0^{\infty}si\pi^{\pi^{ie^{\pi}}}$$

Wow images
![Image](https://i.ibb.co/VwjgRSf/13.jpg)

And links
[Link](https://rsninja.dev)

And code
```js
var post = window.location.search;
    if (post !== "") {
        post = post.substring(6, post.length);
        fetch(`posts/${post}.md`).then(Response => Response.text().then(text => {
            document.body.innerHTML += marked(text);
            [].forEach.call(document.getElementsByTagName("code"),e=>hljs.highlightBlock(e));
            document.body.removeChild(document.getElementById("links"));
        }));
    }
```

### ooooh elm
```elm
-- Your shapes go here!
myShapes model = [  
    -- sky
    sky model,
    -- water
    water model
  ] ++ 
  -- waves
  generateWaves model ++
  -- clouds
  generateCloulds -91 45 20 model ++
  generateCloulds -61 61 20 model ++
  generateCloulds -30 50 20 model ++
  generateCloulds -30 50 20 model ++
  generateCloulds 0 40 10 model ++
  generateCloulds 30 55 15 model ++
  generateCloulds 60 35 20 model ++
  -- super tree grove
  superTrees model ++
  -- marina bay sands hotel
  hotelLeg -40 30 model ++
  hotelLeg -20 30 model ++
  hotelLeg 0 30 model ++
  [
    -- hotel top
    hotelTop,
    -- land
    land
    -- the shoppes
  ] ++
  shoppes ++
  -- museum
  musume ++
  -- viewing platform
  platform ++
  -- lamps
  lamps model ++
  -- crowd
  people 5 10 1 model
  
modulus : Float -> Float -> Float
modulus a b = a - (b * (a / b))

random1to9 seed = toFloat (floor ((sin seed) * 9))

sky model =
    rect 1000 200
      |> filled (radialGradient [
          stop (rgb 228 151 103) (20 - model.time*2),
          stop (rgb 186 128 93) (40 - model.time*2),
          stop (rgb 170 125 103) (60 - model.time*2),
          stop (rgb 112 90 120) (80 - model.time*2),
          stop (rgb 52 46 82) (120 - model.time*2)
        ])
      |> move (50,0)
      
water model =
   rect 1000 100
      |> filled (rotateGradient 1.570796 (gradient [
          stop (rgb 40 47 97) (20+ model.time*2),
          stop (rgb 65 98 133) (40+ model.time*2)
        ]))
      |> move (0,-51)
      
generateCloulds x y density model =
  if density == 0 then
    []
  else
    [
      oval (5 + abs(random1to9 x)) (5 + abs(random1to9 y))
        |> filled (rgb 151 148 168)
        |> makeTransparent 0.6
        |> move ((repeatDistance (0.5+(abs (random1to9 x/4))) 100 x model.time),y+ sin (random1to9 x + model.time/10)*5)
    ] ++ generateCloulds (x+(random1to9 x)+2) (y+(random1to9 y)) (density-1) model
hotelLeg x y model =
  [
    polygon [(0,0),(0,-30),(-15,-30),(-12,-15),(-15,0)]
      |> filled (rgb 53 85 136)
      |> move (x,y) 
  ] ++ windows x (y-1) 15 model
  
windows x y repeat model = 
  if repeat == 0 then
    []
  else
    [
      line (x,y) (x-11,y)
        |> outlined (dotted 1.5) (if (random1to9 (model.time/10+x+y)) < 6 then (rgb 71 105 158) else (rgb 209 196 75))
    ] ++ windows x (y-2) (repeat-1) model
    
hotelTop = 
  polygon [(-70,30),(5,30),(5,35),(-60,35),(-63,33),(-69,31)]
      |> filled (rgb 114 133 163)
 
land = 
  rect 200 3
    |> filled (rgb 125 126 128)
    |> move (0,-1)

shoppes = [
    polygon [(30,0),(30,5),(17,8),(13,8),(0,5),(0,0)]
      |> filled (rgb 64 113 153)
      |> move (-60,-2),
    line (0,0) (30,0)
      |> outlined (dotted 1.5) (rgb 209 196 75)
      |> move (-60,-1),
    polygon [(45,0),(45,5),(24,8),(20,8),(0,5),(0,0)]
      |> filled (rgb 64 113 153)
      |> move (-20,-2),
    line (0,0) (45,0)
      |> outlined (dotted 1.5) (rgb 209 196 75)
      |> move (-20,-1),
    polygon [(30,0),(30,5),(17,8),(13,8),(0,5),(0,0)]
      |> filled (rgb 64 113 153)
      |> move (-35,-2),
    line (0,0) (30,0)
      |> outlined (dotted 1.5) (rgb 209 196 75)
      |> move (-35,0)
    ]
    
musume =  [
    line (-85,3) (-85,-2)
      |> outlined (solid 1.5) (rgb 52 56 59),
    line (-75,3) (-75,-2)
      |> outlined (solid 1.5) (rgb 52 56 59),
    polygon [(0,0),(3,0.5),(6,2.5),(8,6),(8,8),(5,8),(4.5,6),(2,6),(1,9),(-2,9),(-2.5,7),(-4,11),(-7,11),(-8,12),(-10,12),(-9.5,7),(-7,3),(-3,0.5)]
      |> filled (rgb 149 178 201)
      |> move (-80,-2)
    ]
    
platform = [
  polygon [(16,-9),(48,53),(25,54),(-7,0)]
      |> filled (rgb 76 77 79)
      |> move (-60,-70)
      |> scale 2,
    polygon [(16,-9),(48,53),(25,54),(-7,0)]
      |> outlined (solid 0.5) (rgb 116 117 120)
      |> move (-61,-69)
      |> scale 2
    ]
people x y s model =
  if y == 0 then
    []
  else
    [
      circle 2
        |> filled (rgb (15+abs (random1to9 (x+y+s))*2) (15+abs (random1to9 (x+y+s))*2) (15+abs (random1to9 (x+y+s))*2))
        |> move (x*5+y-75+cos (model.time+random1to9 x+y),y*3-60-x+sin (model.time+random1to9 x+y) + sin (model.time*15+random1to9 x+y)/2)
        |> scale s,
      roundedRect 3 10 1
        |> filled (rgb (15+abs (random1to9 (x+y+s))*2) (15+abs (random1to9 (x+y+s))*2) (15+abs (random1to9 (x+y+s))*2))
        |> move (x*5+y-75+cos (model.time+random1to9 x+y),y*3-63-x+sin (model.time+random1to9 x+y) + sin (model.time*15+random1to9 x+y)/2)
        |> scale s
    ] ++ people (if x-1 == 0 then 5 else x-1) (if x-1 == 0 then y-1 else y) (s + 0.01) model
  
wave x y s model =
  curve (x,y) [Pull (x,y+(sin model.time)*5) (x+40,y), Pull (x+80,y-(sin model.time)*5) (x+120,y) ]
    |> outlined (solid 2.5) (rgba 90 103 173 0.5)
    |> scale s
  
generateWaves model = [
    wave -50 -50 1 model,
    wave 0 -50 1.2 model,
    wave -100 -40 0.9 model,
    wave -50 -30 0.7 model,
    wave 10 -20 0.6 model
  ]
  
lampBloom size model = radialGradient [stop (rgb 209 196 75) (size/2), stop (rgba 255 255 255 0) (size-1- (sin model.time))]

lamp x y size model = [
    rect (size/3) (size*5)
      |> filled (rgb 69 69 69)
      |> move (x,y-size*2.5),
    rect size (size+2)
      |> filled (rgb 69 69 69)
      |> move (x,y),
    rect size size
      |> filled (rgb 209 196 75)
      |> move (x,y),
    circle (size*2)
      |> filled (lampBloom size model)
      |> move (x,y)
  ]
  
lamps model = 
  lamp -30 -5 6 model ++
  lamp -70 -7 5.5 model
  

superTreeLight x y s model = 
  circle 6
    |> filled (radialGradient [stop (rgb 90 190 230) 0, stop (rgba 255 255 255 0) (1- (sin (model.time*(y/10)+x))/2)])
    |> move (x,y)
    |> scale s

superTree x y s model = [
   polygon [(9,14),(6,13),(3,10),(4,0),(0,0),(1,10),(-2,13),(-5,14)]
      |> filled (rgb 8 33 7)
      |> move (x,y)
      |> scale s,
   superTreeLight x (y+12) s model,
   superTreeLight (x+3) (y+12) s model,
   superTreeLight (x+6) (y+14) s model,
   superTreeLight (x-3) (y+14) s model
  ]
  
superTrees model = 
  superTree 30 0 1.5 model ++
  superTree 40 -2 1 model ++
  superTree 55 -1 1 model ++
  superTree 60 -2 1 model ++
  superTree 35  0 1 model ++
  superTree 68 -1 1 model 
```
# <a name="sectionLink">wow section</a>

`<div style="width: 100%; height: 50px; background-color: #313131;">`

you can use html by the way mr. rsninja
<iframe src="https://rsninja.dev/blog" style="width: 800px;height:600px;"></iframe>