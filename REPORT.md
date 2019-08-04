# OAuth Comparative Analysis

## OAuth Provider Name: Amazon

### Research Conducted By: Austin Wood, Adrienne Easton, Liz Kavalski, Lee King

### Overall Score and Comments
#### Score (Out of 10): 7
#### General Comments
It's ALL in the front end! Made it extremely portable to move everything to the server on the back end. Which was awesome when we figured it out but a huge pain until then as tried to make a triangle fit into a circle. 

#### Pros
* After we figured out that we couldn't use two different servers to use Amazon as an authorizing service things went much smoother. 

#### Cons
* All in the front end so all cross origin applications will have trouble later. 

### Ratings and Reviews
#### Documentation
Thoughts go here

#### Systems Requirements
A working web browser. AKA not IE. 

#### Ramp-Up Projections
We think that a team of junior devs could get this up and running in under a day or at most two. We got it firgured out in a few hours by stumbling around in some docs for a while with only one very clairifying question. 

#### Community Support and Adoption levels
Amazon is extermely well known and trusted to a degree that we think the implementation of this would be a good move for any application that would trust OAuth. 


### Links and Resources
* [Front/Back End](https://star-blazing-auth.herokuapp.com/)

### Code Demos
* [live/running application](https://star-blazing-auth.herokuapp.com/)


### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* npm i
* nodemon to start the server
* Click the Amazon button to get Authorization. 
