<p>
<strong>SOLUTION</strong>
</p>
<p>
<strong>	</strong>
</p>
<p>Included in this project is the input data: data.json and program: script.js
</p>
<p>This program was written in javascript and built with node.js.</p>
<p>To run the program please use node script.js in the project folder in terminal</p>

<p>The program will return output.json in the project folder which contains the compatibility results for each applicant. The results will also be displayed in the terminal window when running script.js</p>

<p>The program starts off by reading data.json which is the given input. It then calculates the average score of each attribute for team members by iterating through the team array. The program then calculates the compatibility of each applicant and then writing their name and score to a JSON object which is then added to an array of scored applicants and then converted to a JSON file called output.json. After the program has calculated and wrote to output.json it reads and prints the contents of output.json back to the user in javascript JSON format.
</p>

<p>
</p>

<p></p>

<p>
Looking at the given sample output we see the compatibility score being a decimal number in the tenths position. This made me think that it is interpreted as a percentage. Compatibility with the applicants with the team can be scored like a rubric for grading an assignment: out of 100. This must be modified to out of 1, as the client is requesting the grading to be from 0 to 1.
</p>
<p>
If the applicant has a score of 100, it means that they are very compatible with the team and a score of 0 would mean they are not compatible at all. The applicant would be more compatible the more similar they are to the team’s average stat. I interpreted every stat from the sample input from 1-10. To be more compatible, the difference between applicant’s stat must be smaller. The way I would be grading the compatibility score of each stat would be as follows.
</p>

<table>
  <tr>
   <td>
   </td>
   <td>Very Compatible
<p>
0-2
   </td>
   <td>Compatible
<p>
2-4
   </td>
   <td>Less Compatible
<p>
4-6
   </td>
   <td>Not Compatible
<p>
6-8
   </td>
   <td>Incredibly Incompatible
<p>
8-10
   </td>
   <td>Score Unavailable
   </td>
  </tr>
  <tr>
   <td>intelligence
   </td>
   <td>.25
   </td>
   <td>.20
   </td>
   <td>.15
   </td>
   <td>.10
   </td>
   <td>.5
   </td>
   <td>0
   </td>
  </tr>
  <tr>
   <td>strength
   </td>
   <td>.25
   </td>
   <td>.20
   </td>
   <td>.15
   </td>
   <td>.10
   </td>
   <td>.5
   </td>
   <td>0
   </td>
  </tr>
  <tr>
   <td>endurance
   </td>
   <td>.25
   </td>
   <td>.20
   </td>
   <td>.15
   </td>
   <td>.10
   </td>
   <td>.5
   </td>
   <td>0
   </td>
  </tr>
  <tr>
   <td>spicyFoodTolerance
   </td>
   <td>.25
   </td>
   <td>.20
   </td>
   <td>.15
   </td>
   <td>.10
   </td>
   <td>.5
   </td>
   <td>0
   </td>
  </tr>
</table>


<p>
To calculate the overall score of compatibility we add your individual score of intelligence, strength, endurance, and spicy food tolerance together and then grade it from 0-100.
</p>
<ul>

<li>.8 - 1 means the applicant is <strong>very compatible</strong>.

<li>.6 - .79 means the applicant is <strong>compatible</strong>.

<li>.4 -.59 means the applicant is less compatible<strong> less compatible</strong>.

<li>.2 - .39 means the applicant is <strong>not compatible</strong>.

<li>.01 - .19 means the applicant is incredibly incompatible<strong> incredibly incompatible</strong>.

<li>If you have 0 your score is <strong>unavailable or 0</strong>.
</li>
</ul>
<p>
For example
</p>
<ul>

<li>The average intelligence of the team is (1+9+3) / 3 = 4.33

<li>The applicant John has an intelligence of 4  
<ul>

<li>Since John has an intelligence 4 and 4 is .33 points less than the average, John would be very compatible as the difference between his score and the team average is less than 2.

<li>This would award John .25 compatibility points.
</li>
</ul>
</li>
</ul>

<p>
Conclusion:
</p>
<ul>

<li>This program takes a JSON input of team members and applicants


<li>The average score for each stat is calculated from the team and then compared with each applicant.

<li>A list of the applicants and their compatibility score is returned via a JSON file.
</li>
</ul>
