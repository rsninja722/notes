

## antialiasing


### supersampling (SSAA)

- render at a higher resolution
- using multiples samples from the large render, determine the color for the pixels on the screen size render

- sampling - how to determine the color of the smaller pixel
    - box filter - average
    - gaussian filter - weighted average

### multisampling (MSAA)

- for each pixel, compute how many sub samples are contained within the geometry and adjust the color for the pixel depending on how many sub samples are included