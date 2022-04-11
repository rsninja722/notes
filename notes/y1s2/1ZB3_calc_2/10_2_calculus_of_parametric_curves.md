# 10.2 calculus of parametric curves

# parametric curves

how to describe curves that have multiple y values for the same x value?

introduce a parameter t:

- $$x = f(t)$$
- $$y = f(t)$$

write each point on the curve $$(x,y)$$ as $$(f(t),g(t))$$, think of doing this as measuring the position of an object at some point in time

we call curves expressed this way **parametric curves**, to describe them, we use **parametric equations**

## example

$$x = \cos{t}, y = \sin{t}, 0\leq t \leq 2\pi$$

make a table of values 

t|x|y|(x,y)
---|---|---|---
$$0$$|$$\cos{0} = 1$$|$$\sin{0}=0$$|(1,0)
$$\frac{\pi}{2}$$|$$\cos{\frac{\pi}{2}} = 0$$|$$\sin{\frac{\pi}{2}}=1$$|(0,1)
$$\pi$$|$$\cos{\pi} = -1$$|$$\sin{\pi}=0$$|(-1,0)
$$3\frac{\pi}{2}$$|$$\cos{3\frac{\pi}{2}} = 0$$|$$\sin{3\frac{\pi}{2}}=-1$$|(0,-1)
$$2\pi$$|$$\cos{2\pi} = 1$$|$$\sin{2\pi}=0$$|(1,0)

![parametric curve](./media/10_2_parametric_1.png)

note: parametric curves have a direction

## eliminate parameter

sometimes we can eliminate the parameter $$t$$ to find a cartesian equation $$y = f(x)$$ or implicit equation

### example

$$x=3t+2,y=2t+3$$

t|x|y|(x,y)
---|---|---|---
0|3(0)+2 = 2|2(0)+3 = 3| (2,3)
1|3(1)+2 = 5|2(1)+3 = 5| (5,5)
2|3(2)+2 = 8|2(2)+3 = 7| (8,7)
3|3(3)+2 = 11|2(3)+3 = 9| (11,9)

![parametric curve](./media/10_2_parametric_2.png)

eliminate the parameter

$$x=3t+2$$
$$t=\frac{1}{3}(x-2)$$

y:

$$y=2t+3 = 2(\frac{1}{3}(x-2)) + 3$$

$$y= \frac{2}{3} x + \frac{5}{3}$$ cartesian equation, equation of line


## we don't always need to use t as the parameter

example:

$$x=2(\theta - \sin{\theta})$$
$$y=2(1- \cos{\theta})$$

t|x|y|(x,y)
---|---|---|---
$$0$$|$$\cos{0} = 1$$|$$\sin{0}=0$$|$$(1,0)$$
$$\frac{\pi}{2}$$|$$2(\frac{\pi}{2} - \sin{\frac{\pi}{2}})=\pi-2$$|$$2(1 - \sin{\frac{\pi}{2}}=2)$$|$$(\pi-2,2)$$
$$\pi$$|$$2(\pi - \sin{\pi}) = \pi$$|$$2(1 - \sin{\pi}) = \pi$$|$$(\pi,\pi)$$
$$3\frac{\pi}{2}$$|$$3\frac{\pi}{2} = 3\pi + 2$$|$$3\frac{\pi}{2}+ 2$$|$$(3\pi + 2,3)$$
$$2\pi$$|$$2(2\pi - \sin{2\pi})=4\pi$$|$$2(1 - \sin{0})=0$$|$$(4\pi,0)$$

this shape is called a **cycloid**, imagine tracking a point on the edge of a rolling circle, that will result in a cycloid curve

![parametric curve](./media/10_2_parametric_3.png)

# calculus with parametric equations

when we worked with functions, we asked about slopes and areas. we want to ask the same about parametric curves

## slopes/tangents

$$x=f(t),y=g(t)$$ parametric equations for x and y(x)

the slope we're looking for $$\frac{dy}{dx}$$ how do we find it?

chain rule