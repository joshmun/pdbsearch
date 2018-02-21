# UCSD RCSB Protein Data Bank - Search Engine Prototype

A front end solution for PDB's search engine functionality, re-imagined with React.js.

## Context

Project goal is to demonstrate a proof of concept by taking current solution and exploring a solution written with React.

Current solution:
http://www.rcsb.org/pdb/results/results.do?tabtoshow=Current&qrid=69C99F51

New prototype is built using a component-based architecture. Components are re-used throughout the search engine rendering. UX and Webpage load times are optimized through Express server-side rendering of JSON data (stand in for API call or querying MongoDB). Once loaded server-side, JSON data is cached in memory, then React client side makes an ajax request to Express API to pull the first 25 results and fulfill minimum user expectation. Once initial page renders, client-side requests the entire JSON payload from server-side, and caches data in browser memory for immediate use for end user. 

## Technologies Used
* React
* Javascript
* Node.js
* Express
* HTML5/CSS3
* Bootstrap
* MongoDB
