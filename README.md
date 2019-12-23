**Main files in the Assignment -**



`Transactions.js` - It constructs a table containing all the
transactions of the user with all the API parameters as its
attributes.

these all the transactions are fetched from the given Web 
API ( there was some problem in fetching the transactions
from the given Web API, so I downloaded the data and uploaded
it on https://deepak2607.github.io/Esri_jsondata.json to
fetch the transactions ).

There is a **Search Box** in its navigation bar which is used
to find **All the Transactions containing the searched
keyword in their `Transaction Details` parameter**.

<br>

`Totals.js` - It constructs a table containing the **Total No.
of Transactions** & **Total Amount Transferred** (for each Date).

**Pagination** is also used in the above both tables, each page
contains 9 records max.

<br>

`Charts.js` - It has links to the 4 charts

 - Column Chart of 'Total No. of Transactions vs Date'.

 - Column Chart of 'Total Amount Transferred vs Date'.

 - Pie Chart of 'Total No. of Transactions vs Date'.

 - Pie Chart of 'Total Amount Transferred vs Date'.

<br>

**How to use the files -**

 - Run `npm install` in the extracted folder.

 - Run `npm start` to view the project.

 - Screenshots are present in the uploaded folder.