# NickStyle DOCUMENTATION

- NickStyle is a library from which you take and apply animations to your page. 

### How it works

### 1. Import nickStyle.css and nickStyle.js to your webpage before importing your local css and js files. Do not alter these two library documents.

#### 2. To apply an animation to an element, simply add    -->    class="nickStyle    -animation-class-"
- animation-class     refers to these classes:

	-  scale
	- scale-shadow
	-  item
	-  line-draw
	-  tilt


	--- Examlpe: You want to add the 'tilt' animation to a div. Here is the way to do so:
	--- 	<div class="nickStyle tilt">

			</div>

##### Do not forget to add nickStyle to the element class, otherwise tne animation will not work.


#### 3. Your animation is now active.


---

## Description of each animation:

### 1. scale -
- on hover, the element will increase in scale 1.1 times its current size. When the cursor is moved, it will animate down to its original scale.


### 2. scale-shadow
- on hover, the element which has this class will increase in scale very slightly, and a box-shadow shall be applied to highlight this element. When the cursor is moved away, the element will slowly animate back to its original position.
- the box shadow color is not set to anything. You can change the color in your own css file. 
Example changing it to red:

		section #main div .nickStyle.scale-shadow:hover {
			box-shadow: 1px 1px 10px 1px red;
		}



### 3. item
- Adding this animation class to an element will reduce its opacity to 0% by default. When the element scrolls into the viewport 60% away from the top, it will animate the opaciti to 100% and animate the element up slightly.


### 4. line-draw 
- On hover, two perpendicular lines will be drawn from two points of the element: the top left point and the bottom right point. This will give the element a border around it. When the element is no longer hovered, the lines will pull away to the same starting points the same way they were animated.

- The color is set to blue by default. To change, target element and change 

	.nickStyle.line-draw:before, .nickStyle.line-draw:after{
		border-color: -insert-color-here-
	}



### 5. tilt
- An element with this class shall, upon scrolling in the viewport 60% from the top, rotate left and right which can be used to attract attention to something. It will rotate once on scroll. Upon hover, the element will rotate left and right aswell.



TIP: Make sure your personal css and js files are under the library ones so that you can change any colors if necessary.