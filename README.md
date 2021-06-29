# Boss Card 

##  Description
It's not every day that you run into British billionaire Sir Richard Branson, but when you do, you probably don't want to greet him with a portfolio consisting of a cover letter, resume, certifications, etc. 
Sometimes you want a dash of professional swagger to entice your new connection instead! 
<br>
Striving to get your name within reach, our virtual business card will equip your connections with a first impression of your design. 


## Wireframes

### Home + Product Info
![Home](/images/homePage.png)


### Product List
![Listed cards](/images/productList.png)

### Create
![Form to post new cards](/images/form.png)

### Edit
![Autofilled form to edit card](/images/edit.png)

### Product Item
![Single card page](/images/productCard.png)

## Component Hierarchy
![Tree-like layout of component hierarchy](/images/component-hierarchy.png)


## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

```json
{
    "records": [
        {
            "id": "recONRzIUTuZ5lXaF",
            "fields": {
                "author": "Liz Yrineo",
                "setup": "Why did the tomato turn red?",
                "punchline": "Because it saw the salad dressing!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "rec3oYZ5Tp0AIDsKe",
            "fields": {
                "author": "Rachel Moskowitz",
                "setup": "What did the green grape say to the red grape?",
                "punchline": "Breathe, idiot, breathe!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "recA34tOaoE1IVeC1",
            "fields": {
                "author": "Gary Grant",
                "setup": "How do you make holy water?",
                "punchline": "You boil the hell out of it!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        }
    ],
    "offset": "recA34tOaoE1IVeC1"
}
```
#### MVP 
- Display at least 3 cards of "examples"hosted by AirTable
- Allow user to submit their own cards, add to display
- Allow user to edit their cards in case of typos
- Include route to display a single card


#### PostMVP  

- Display date on card
- Allow user to edit card styling
- Use local storage to save user favorites
- Allow user to choose favorites and use their templates

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 28| Prompt / Wireframes / Priority Matrix / Timeframes | Complete 
|June 29| Project Approval | Incomplete
|June 29| Core Application Structure (Pseudocode, skeleton) | Incomplete
|June 30 - July 1| CRUD functionality (Initial Clickable Model) | Incomplete
|July 1 - 2| Critical Design  | Incomplete
|July 2| MVP | Incomplete
|July 7| Presentations | Incomplete

## Timeframes

| Task <small>(in sequence)</small> | Description | Estimated Time | Time Invested
| --- | :---: |  :---: | :---:
| WireFrame | Visualization of project | 1.5hrs| 2hrs
| README.md | Verbalization of project | 1.5hrs| 2hrs
| App Skeleton | Via zombie components to test routing  | 3hrs| null
| <small>GET</small> API | Render data from AirTable on main page | 1.5hrs| null
| Form Component | Enable users to submit their information for their own card  | 3hrs| null
| <small>POST</small> API | Setup form component that posts input to AirTable | 1.5hrs| null
| <small>PUT</small> API | Allow users to edit their input | 1.5hrs| null
| <small>DELETE</small> API | Allow users to remove their input | 1.5hrs| null
| Polish Core Design | A good time to take a step back and optimize application visually  | 3hrs| null
| Polish Card Design | Structure card design to resemble wireframe | 3hrs| null
| Core Design II| Core Design Harder  | 3hrs| null
| Card Design | Card Design Strikes Back | 3hrs| null
| <strong>Total</strong> | 2 out 12  complete | 27hrs| 4hrs 

## SWOT Analysis

### Strengths:
- good understanding of react functional components
- decent grip on object traversal
- confident in ability

### Weaknesses:
- awful color palate
- css in terms of data display
- class components

### Opportunities:
- use class components at least once
- enabling user to affect card design will be serious practice
- would love to give 3d/shadow effect to containers
- make application aesthetic enough to give a real business impression

### Threats:
- CSS