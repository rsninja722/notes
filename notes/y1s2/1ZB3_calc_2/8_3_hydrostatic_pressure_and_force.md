# 8.3 hydrostatic pressure and force

## equation for hydrostatic force

for force exerted on horizontal plate with area A

$$F = \rho gAd$$

- $$\rho$$ = fluid density ($$1000 \enspace kg/m^3$$ for water)
- $$g$$ = acceleration due to gravity ($$9.8m/s^2$$)
- $$A$$ = area of plate
- $$d$$ = depth below water surface

## equation for pressure

$$P = \frac{F}{A} = \rho gd$$

works when every point on the plate is at the same depth

## total force for a vertical plate

the pressure is different at different depths, so we think of the force in small slices

![dam](./media/8_3_hydrostatic_pressure_and_force_1.png)

step 1: choose a set of axes

step 2: slice up the wall into thin horizontal strips, with the same thickness $$\Delta y$$. what is the force acting on this strip?

force acting on ith strip: $$F_i = \rho g A_i d_i$$

## example

force acting on a wall with water 4m from the top, 20m high with a top width of 50m, and a bottom width of 30m.

- $$p=1000$$
- $$g=9.8$$
- $$A_i =$$ area of ith strip = $$(?)\Delta y$$
- $$d_i =$$ depth of ith strip = $$16-y$$

first, use points on wall to find slope:

$$slope = \frac{y_2-y_2}{x_2-x_1} = \frac{20-0}{25-15} = 2$$

$$y - y_1 = 2(x-x_1)$$

$$y - 0 = 2(x-15)$$

$$y = 2x-30$$ <- equation for line

so when $$y = y_i$$

$$y_i = 2x_i - 30$$

$$x_i = \frac{y_i + 30}{2}$$

width of ith strip: $$2x_i$$

so the area of ith strip:

$$A_i = 2x_i \Delta y$$

$$= 2(\frac{y_i + 30}{2}) \Delta y$$

$$= y_i + 30 \Delta y$$

force for ith strip is :

$$F_i = 9800(y_i +30)\Delta y (16-y_i)$$

total force = $$\lim_{n\to \infin} \sum_{i=1}{n} 9800(y_i +30)(16-y_i)\Delta y $$

total force = $$\int_{0}{16} 9800(y_i +30)(16-y_i)dx$$