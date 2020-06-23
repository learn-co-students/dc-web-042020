## Controlled Forms and Event Callback handlers
- State represent things on your DOM that can change
- Forms are things on the DOM that can change





## Goal: build out a live search feature that is going to filter our list of paintings


### Minimal State
state = {
  currentPainting: obj
}




Derive our list of paintings using paintingsData and using state.searchField


```
App *
 |- Header
 |- Searchbar => should be able to write to state.searchField
 |- DisplayPainting
 |- PaintingsContainer => should know/read the state.searchField
      |- Painting
      |- Painting
         ...
```
searchField: "Gold"



A good practice is to have all forms/inputs control state
 - and in turn, the state should control the form!
 - no more document.querySelector to get values because data is always in the state!




### Mod 3 Thinking:
 - When <some event> happens, I want to manipulate the DOM <how>?

### Mod 4 Thinking:
 - When <some event> happens, I want to manipulate state in order to manipulat the DOM



## On Your Own
- practice working with other input types (textarea, select, checkbox, radio button)
- https://reactjs.org/docs/forms.html

## Upcoming Lab Review - Animal Lab (Combining It All)





















`<div className="right menu">
  <div className="item">
    <input className="ui search" placeholder="Search..." />
  </div>
</div>`
