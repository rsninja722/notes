# 8.2 surface area of revolution

## volumes of a revolution

![volume](./media/volumeOfRotation.png)

total volume = $$\int_{a}^{b} \pi r^2 \enspace dx$$

## surface area of revolution

total surface area = $$\int_{a}^{b} 2\pi f(x) \sqrt{1+(f'(x))^2} \enspace dx$$ <- for y = f(x) rotated around x-axis

## example

find sa by rotating $$y=\sqrt{5-x}, 3\leq x \leq 5$$ around the x-axis

$$SA = \int_{3}^{5} 2\pi y \enspace ds$$

$$y = f(x) = \sqrt{5-x} = (5-x)^\frac{1}{2}$$

$$f'(x) = \frac{1}{2} (5-x)^{-\frac{1}{2}} (-1) = \frac{-1}{2\sqrt{5-x}}$$

$$SA = \int_{3}^{5} 2\pi \sqrt{5-x} \sqrt{1+\frac{1}{4(5-x)}}dx$$

$$\vdots$$

$$= \frac{13\pi}{3}$$

![volume](./media/volumeOfRotation2.png)