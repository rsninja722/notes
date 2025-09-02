# machine learning

- **machine learning** - the creating of a model with parameters (large amount) and a cost function to evaluate performance
    - useful model - has parameters such that the cost function is low
    - training - changing parameters to minimize cost function

## example: spam filter

- goal - separate legitimate emails from spam/scams
- one approach: certain words and phrases indicate spam, create a vector based on which words indicate spam, filter based on the existence of the words/phrases

- vector $\vec{x}$ indicates the spam words
- $\vec{w} \cdot \vec{x} = b$ defines a hyperplane
- $\vec{w}^{*}$ and $\vec{b}^{*}$ define a model that predicts if a message $\vec{y}$ is spam

$$f(\vec{y}) = \text{sign}(\vec{w}^{*} \cdot \vec{y} - \vec{v}^{*}) = \begin{cases} 1 & \text{spam} \\\\ -1 & \text{no spam} \end{cases}$$

if only 2 words are considered, a **decision bounding** can be drawn as a line on a 2d graph

