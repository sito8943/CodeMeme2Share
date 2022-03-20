npm# CodeMeme2Share@1.10.5

Do you want to make your cool code shorts public?
Just use:

```
yarn add codememe2share
```

or

```
npm install codememe2share
```

## Example:

Flexible container with gradient background and apple dots

```
  // components
  import MemeShare, { Container, AppleDots } from "codememe2share";

  <MemeShare>
    <Container>
      <AppleDots />
        Put your code here
    </Container>
  </MemeShare>
```

<i>Note: If you don't set the background it will take random gradient background</i>

How to add a simple <strong>Container</strong> component?

```
  // components
  import Container from "codememe2share/components/Container";

  <Container>
    Hola Mundo
  </Container>
```

## Typography

### Font

<i>font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif</i>

### Font-Size

<i>Based on [MUI Typography](https://mui.com/components/typography)</i>

<h1>h1. Heading 6rem</h1>
<h2>h2. Heading 3.75rem</h2>
<h3>h3. Heading 3rem</h3>
<h4h4. Heading 2.125rem</h4>
<h5>h5. Heading 1.5rem</h5>
<h6>h6. Heading 1.25rem</h6>
<p>body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. 1rem</p>
<button>BUTTON TEXT 0.875rem</button>

## Colors

### Gradient

<i>Based on [Gradient Backgrounds - Rainbow The Best Gradient Sites All In One Place](https://cssgradient.io/gradient-backgrounds/)</i>

### Apple dots

```
.red svg {
  color: #ff5d56;
}
```

```
.yellow svg {
  color: #f7c127;
}
```

```
.green svg {
  color: #2bcb45;
}
```

## Complete example

```
import React from "react";

// components
import MemeShare, { Container, AppleDots, Title, Rotate } from "codememe2share";

// images
import react from "./assets/images/logo512.png";

const Template = () => {
  return (
    <MemeShare background="random">
      <Container>
        <AppleDots />
        <Title style={{ margin: 10 }} variant="h4">
          Code Meme to Share
        </Title>
        <Rotate className="flex justify-content-center align-items-center">
          <img src={react} style={{ width: 150 }} alt="react-logo" />
        </Rotate>
      </Container>
    </MemeShare>
  );
};

export default Template;
```

## Preview

![preview](https://user-images.githubusercontent.com/40501794/158683035-f8ef383f-36f4-432d-be92-5488954d45f0.jpg)

### Additional Features

- Container <i>Flexible container component</i>
  - Rotate <i>Container with rotation animation</i>
- Title <i>Based on [MUI Typography](https://mui.com/components/typography) title component</i>
- Paragraph <i>Based on [MUI Typography](https://mui.com/components/typography)</i> body component
  - CodeArea <strong>Beta</strong> <i>Colorized code for everyone</i>
- Button <i>Flexible button component</i>
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Gradients <i>Prefab gradients from [Gradient Backgrounds - Rainbow The Best Gradient Sites All In One Place](https://cssgradient.io/gradient-backgrounds/)</i>
