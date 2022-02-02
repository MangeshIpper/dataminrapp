# Table of Contents

1. [Objective](#section1)<br>
2. [Importing Packages](#section2)<br>
3. [UI Model and functionality](#section3)<br>
 - 3.1 [Card component](#section301)<br>
  - 3.2 [Table](#section302)<br>
  - 3.3 [Action buttons and methods](#section303)<br>
  - 3.4 [Switch button and create user functions](#section304)<br>
  - 3.5 [User create/edit form](#section305)<br>
  - 3.6 [validation](#section306)<br>


  ## 1. Objective <a id=section1></a>

In this react project I have used typescript to build user management application. It includes CRUD functionality.

## 2. Importing Packages  <a id=section2></a>

To build the UI of this project I have used bootstrap, rsuit react library, and react-icons/fa which is font awsome libraries.
Link1: https://react-bootstrap.netlify.app/getting-started/introduction, 
Link2: https://rsuitejs.com/
Link3: https://react-icons.github.io/react-icons

## 3. UI Model and functionality<a id=section3></a>


### 3.1 Card Component <a id=section301></a>
In the beginning, to get the background color and to display table I have used card component as a base.

### 3.2 Table <a id=section302></a>
I have used table to display all the users and action buttons (Delete, Edit) section to apply action on particular data.

### 3.3 Action buttons and methods<a id=section303></a>

On the edit function passes the particular column object and that is displayed in the form and accordingly update entry.
Similarly, on delete button click function call and get the id of that field and delete particular entry.

### 3.4 Switch button and create user functions <a id=section304></a>

I have used swtich toggle button and beside that create user button. Switch is by deafult active which means we can easily create user but if toggle is deactivate create user button will disappear and you cant create user.

### 3.5 User create/edit form <a id=section305></a>

Initially created basic form which contain inputs, selectbox, number, dropdown fields. with the help of we can create user and also sown in the table. If you click on edit button on particular field, it will pop up same modal and show the details to update. Same form hadle conditionally to create and update form also change button text conditionally like submit and update.

### 3.6 validation<a id=section306></a>

I have applied required field on the name input and same time applyed on the submit button to disable if value is null in the field.

![User Screen](https://user-images.githubusercontent.com/25785047/152194267-18bae5ad-d449-45a6-a5ee-3f6564bc85ed.PNG)


![add user](https://user-images.githubusercontent.com/25785047/152194426-c9d0aea9-cd04-42f1-921c-bb67946758ee.PNG)


![edit user](https://user-images.githubusercontent.com/25785047/152194501-fc64e12b-dff7-4abf-ae89-152eb9a19984.PNG)







# Thank you.

Checkout more details about me on LinkedIn: https://www.linkedin.com/in/mangeshipper/
