<!DOCTYPE HTML>
<!--
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-156016776-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-156016776-1');
</script>

		<title>Indeed Project</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="shortcut icon" type="image/png" href="images/sql_4_small.png"/>
	</head>
	<body class="is-preload">
		<div id="page-wrapper">

			<!-- Header -->
			<header id="header">
				<h1><a href="index.html">Portfolio Website</a> by George Oddoye</h1>
				<nav id="nav">
					<ul>
						<li><a href="index.html" class="button">Home</a></li>
						<li>
							<a href="#" class="icon solid fa-angle-down">Menu</a>
							<ul>
								<li><a href="aboutme.html">About Me</a></li>
								<li><a href="resume.html">Resume</a></li>
								<li><a href="contact.html">Contact</a></li>
								<li>
									<a href="#">Projects</a>
									<ul>
										<li><a href="indeed_project.html">Indeed Data Professional</a></li>
										<li><a href="web_project.html">Web Data Visualization</a></li>
										<li><a href="etl_project.html">Extract Transform Load</a></li>
										<li><a href="#">Coming Soon..</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<!-- <li><a href="#" class="button">Sign Up</a></li> -->
					</ul>
				</nav>
			</header>

			<!-- Main -->
				<section id="main" class="container">
					<header>
						<h2>Indeed Data Professional</h2>
						<p>Data Professional jobs listed on Indeed.com in 2018</p>
					</header>
					<div class="box">
						<span class="image featured"><img src="images/indeed.jpg" alt="" /></span>
						<h3>Inspiration</h3>
						<hr class="divider">
						<p>Working as a data professional has quickly become one of the most sought after careers of the 21st century. With the continual advancement in technology, the gathering of data has become vital for companies of all sectors to thrive in this modern age. While collecting data is the necessary first step in this process, it is actually the cleaning, storing, and interpretation of this data that makes it become meaningful to businesses. This is where data professionals add their value by using a large myriad of tools to transform said data in such a way that it provides insight that may have been overlooked otherwise. <br><br>
						This project was designed to help a hopeful data professional understand which careers are available to them and what skills are necessary to possess in order to be considered an ideal candidate for those roles.</p>
						<br>
						<div class="row">
							<div class="row-6 row-12-mobilep">
								<h3>Data</h3>
								<hr class="divider">
								<p>A data source was found on Kaggle in the form of an <a a href="https://www.kaggle.com/elroyggj/indeed-dataset-data-scientistanalystengineer"  rel="noopener noreferrer" target="_blank">Indeed Dataset</a>. Indeed is a website that provides a worldwide employment-related search engine for job listings. The creator of this dataset collected all the job listings on Indeed that related to data professionals (data analyst/engineers/scientists) in the United States during the year 2018.</p>
							</div>
							<br>
							<div class="row-6 row-12-mobilep">
								<h3>Extract | Transform | Load</h3>
								<hr class="divider">
								<p>The dataset was quite comprehensive and included 5715 rows X 43 columns stored in a csv file. The extraction of this data was achieved using pandas which is a software library written for the python programming language. 
									<img src="images/pandas_123.png"><br>
								<br>Now that the data had been extracted, the pertinent columns had to be selected. Of the 43 columns 18 were chosen (job title, location, skills, ect) for use. However, before the data could be stored the cleaning process had to take place. One fo the first glaring issues with the data is tht not all the columns were structured, which means that some columns had multiple values in each cell, for instance the "Skill" column above. The problem with unstructured data is it cannot be processed and analyzed using conventional tools and methods. In order to make the "Skills" column a for loop would have to be utilized which included a .split(',') which would separate the values in each cell that are separated by a comma. The values would then have to be stored in individual columns respectively.
								<br><br> Fortunately this dataset had already done something along those lines for the major skills. The next major issue with the data was found in the "Queried_Salary" column. Several mathematical functions (.mean(), .median(), ect) were going to be implemented on the "Queried_Salary" column to yield meaningful summaries. However, those functions require the values to be integers (INT) but these values were in string (STR) form due to the operators (< , > , ect) included alongside the values. In order to fix this the operators needed to be  
								<br><br>
								<img src="images/str.replace.jpg">
								<br>
								<br>dropped using a .str.replace() function and then storing it into a new column named "Salary" which could be set to type INT using a .astype() 
								
								<img src="images/astype.jpg"><br>
								function. Now that the data had been cleaned the analysis could begin.
								</p>
							</div>
							<div class="row-6 row-12-mobilep">
								<br>
								<h3>Data Analysis</h3>
								<hr class="divider">
								<p>During the analysis there were several questions that needed to be addressed. The questions that needed answering included: 
									<ul>
										<li><font size="4" color="dodgerblue">What were the top fifteen states for data professional jobs?</font></li>
										<li><font size="4" color="dodgerblue">What was the average salary per state?</font></li>
										<li><font size="4" color="dodgerblue">Which companies were offering the most jobs in the data professional market</font></li>
										<li><font size="4" color="dodgerblue">What are the top industries/sectors in need of data professionals?</font></li>
										<li><font size="4" color="dodgerblue">What are the top four skills needed to become a data analyst, engineer, or scientist respectively?</font></li>
										<li><font size="4" color="dodgerblue">What are the top four skills to secure an entry, mid, or senior level job?</font></li>
									  </ul> <br>
									  <font size="5" color="dodgerblue">Top Fifteen States for Data Professional Jobs</font> <br>
									  In order to address the first question the indeed dataframe had to be grouped by location using a .groupby() function on the "Locations" from there a .count() function could be called to discover the number of jobs per state.
									  <img src="images/indeed_sta.jpg"><br>
									  <br>
									  Using the grouped dataframe a bar chart was generated utilizing matplotlib's pyplot library.
									  <img src="images/indeed_sta_15.jpg"><br> <br>
									  As expected California had the most jobs for data professionals followed by New York, Virginia, Texas, and Massachusets. Due to the sheer number of jobs found in California using a bar chart to display all fifty states would not have been reasonable. Instead a <a a href="https://en.wikipedia.org/wiki/Choropleth_map"  rel="noopener noreferrer" target="_blank">choropleth</a> map was generated to display the data in a more appealing manner. The map was created using the plotly library which is capable of generating choropleth maps based on information fed into it from the grouped locations dataframe.
									  <br><br>
									  <img src="images/choropleth.jpg"><br>
									  <br><br>
									  <font size="5" color="dodgerblue">Average Salary per State</font> <br>
									  Now that the states with the most jobs had been determined it was necessary to figure out which states offered the highest average salary. Using the cleaned "Salary" column mentioned in the (ETL) section above a grouped dataframe was created based on location once again. This time however a .mean() function followed by a .round() function was applied. This was then stored in a separate dataframe to create the summary table below.
									  <br><br>
									  <img src="images/salary.jpg"><br><br>
									  Once again California took the top spot as the state with the highest average salary followed by New York, and Virginia, but this is were the pattern first seen in most jobs per state ended. The fourth highest average salary was found in Washington then Delaware in fifth place.<br>
									  <br><br>
									  <font size="5" color="dodgerblue">Companies With the Most Job Listings</font> <br>
									  The analysis of the data on a state level was now complete so the focus shifted towards the companies listing these jobs. In order to determine the companies offering the most job listings in 2018 a new series was created based on the indeed dataframe's "Company" column. From here a .value_counts() function was used, which returns the counts of unique values. The resulting object will be in descending order so that the first element is the most frequently-occurring element. This object was then stored in a dataframe named "new_company_count_df". <br>
									  <img src="images/value_counts.jpg"><br><br>
									  This dataframe was used to create a summary table as well as a bar chart displaying the count of the top ten companies offering jobs in 2018.<br>
									  <img src="images/bar_chart.jpg"><br>
									  <a href="https://www.boozallen.com/" rel="noopener noreferrer" target="_blank">Booz Allen Hamilton</a> had nearly twice the job listings as the next company Harnham. All the companies on this list are very large and well known businesses which is why they are able to offer so many job listings at one given time.<br>
									  <br><br>
									  <font size="5" color="dodgerblue">Top Ten Data Analytic Industries</font> <br>
									  The beautiful thing about data analysis is just how many industries can benefit from it. One thing to consider when entering the world of data analytics is which of these sectors appeals most to the individual. In order to provide a bit more awareness the next question intended to shed some light on what an up and coming data professional could choose from. Similar to to procedures done in the last section a a new series was created based on the indeed dataframe's "Industry" column. Once again a .value_counts() function was used. The resulting object was then stored in a dataframe named "company_indus_df". The index was renamed "Industry Name" and then stored into another dataframe which in turn reset the index to make it a column once again. Finally that dataframe was stored into another which renamed the "Company_Industry" to "Available Jobs". Although the last few steps seemed tedious it was necessary for the pie chart and summary table that would eventually be created.<br><br>
									  <img src="images/industry.jpg"><br><br>
									  The pie chart was created using matplotlib's pyplot library. Unlike the bar chart this time a plt.pie() function was called. 
									  <img src="images/pie.jpg"><br>
									  Consulting and Business Services took the number one spot for most popular data professional industry but it has to be mentioned that the number two "Internet and Software" as well as the number 10 "Computer and Electronics" should have been combined into one "Tech" sector which would have made it the overall winner.<br>
									  <br><br>
									  <font size="5" color="dodgerblue">Top Four Skills Needed for Data Analyst, Engineers, and Scientists</font> <br>									  
									  Up until this point the questions addressed in the data analysis have provided summary information on the data professional information. While this is very useful it wont necessarily help someone become a data professional. The next two questions intend to address that by providing information on what skills are most in demand. In order to discover the skills a new dataframe was created named "indeed_salary" which pulled the job type and skills columns from the original indeed dataframe.<br><br>
									  <img src="images/indeed_salary.jpg"><br><br>
									  The skills were Python, SQL, Machine Learning, R, Hadoop, Tableau, SAS, Spark, and Java.<br>
									  <img src="images/skills.jpg"><br>
									  <br>
									   Now that the skills columns had been stored into a dataframe three additional dataframes were made to separate each job type (data analyst, engineer, scientist) from one another. This was done by only selecting a specific role from the "Job_Type" column using a "==" operator which compares the values of both the operands and checks for value equality. If the operand are equivalent then that item will be returned as true and included in the dataframe.
									   <br><br>
                                      <img src="images/data_ana.jpg">
									  <!-- <img src="images/data_eng.jpg"><br><br>
									  <img src="images/data_sci.jpg"><br> -->
									  <br>
									  <br>
									  These dataframes were created with the intention of making a summary table of the top four skills per respective job type. However the data needed to be aggregated to accomplish this. 

									   Thus a dataframe named job_df was created based of the indeed dataframe with the index set to "Job Type". From here a .loc[] method was called which allows a person to select specified index or indexes in the first parameter and specific columns in the second. Now that the specific indices and columns had been select the dataframe was grouped by "Job Type" and then a .sum() function was called. This produced a dataframe which displayed the total number of jobs requiring each of the specific skills in regards to the job type respectively.
									   <br><br>
									   <img src="images/job_groups.jpg"><br><br>
									  <img src="images/job_pie.jpg"><br>
									  <br><br>
									   From this aggregated dataframe the summary tables displaying the top four skills per job type was able to be created.<br>
									  <img src="images/top4_ana.jpg"><br><br>
									  <!-- <img src="images/top4_eng.jpg"><br><br>
									  <img src="images/top4_sci.jpg"><br><br> -->
									   The summary table can be a bit cumbersome to look at so the top four skills were displayed in a much more visually appealing bar chart.<br>
									  <img src="images/top4_bar_jobtype.jpg"><br>
									  <br><br>
									  <font size="5" color="dodgerblue">Top Four Skills Needed for Entry, Mid, and Senior Level Jobs</font> <br>					
									  Lastly it was time to discover the top four skills needed for an entry, mid and senior level job. Using the "Salary" column created during the ETL cleaning process the job levels were defined. Entry level jobs were jobs with salaries up to $99,999. Mid level jobs were jobs with salaries between $100,000 and $139,999. Senior level jobs were jobs with salaries greater than $140,000.
									  Now that the salary ranges for each job level had been established three separate dataframes were created to store each job level respectively.<br>
									  <img src="images/job_level.jpg">
									  <br><br>
									  A table of the sum of skills for each salary was then created.
									  <img src="images/salary_skill.jpg"><br><br>
									  From this a summary table was developed for each salary level.
									  
									  <img src="images/salary_summary.jpg"><br><br>
									  <img src="images/total_joblevel.jpg"><br>
									  <br>
									  From this aggregated dataframe the summary tables displaying the top four skills per job level was able to be created.<br>
									  <img src="images/top4_entry.jpg"><br><br>
									  <!-- <img src="images/top4_mid.jpg"><br><br>
									  <img src="images/top4_senior.jpg"><br><br> -->
									  
									  The top four skills for each specific job level were then displayed in a bar chart.
									  <br>
									  <img src="images/top4_bar_joblevel.jpg"><br><br>
									  <div class="row-6 row-12-mobilep">
										<br>
										<h3>Conclusion</h3>
										<hr class="divider">
										Coming very soon..
									</div>
									</p>
							</div>
						</div>
					</div>
				</section>

			<!-- Footer -->
			<footer id="footer">
				<ul class="icons">
					<li><a href="https://github.com/Goddoye" class="icon brands fa-github" rel="noopener noreferrer" target="_blank"><span class="label">Github</span></a></li>
					<li><a href="https://www.linkedin.com/in/georgeoddoye/" class="icon brands fa-linkedin" rel="noopener noreferrer" target="_blank"><span class="label">LinkedIn</span></a></li>
					<!-- <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li> -->
					<li><a href="mailto:oddoye.george@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
				</ul>
				<ul class="copyright">
					<li>&copy; 2020 George Oddoye.</li><li>All rights reserved</a></li>
				</ul>
			</footer>

		</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
			

	</body>
</html>