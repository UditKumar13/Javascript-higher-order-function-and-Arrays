console.log("index.js starts here");
console.log("--------------||||||||||||||||||||--------------");
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  // standard for loop
  /*
  for ( let i=0 ; i<companies.length;i++){
      console.log(i);
      console.log(companies[i]);
  }
  // for each loop

  companies.forEach(function(company){
      console.log(company.name);
  });

  

  // ############  Filter ############# :

 // 1.by simple for loop 
  /*let canDrink = [];
  
  for (let i=0;i<ages.length;i++){
      if (ages[i] >=21) {
          canDrink.push(ages[i]); 
      }
  } 
  
// 2. By using the filter 

const canDrink = ages.filter(function(age){
   if (age >=21){
       return true;
   }
})
  console.log(canDrink);

// works with the arrow function es6 
const manDrink = ages.filter(age=> age>=21);
console.log(manDrink);


//use filter on deciding which companies are retailed one 
//Es5 
const retailCompanies = companies.filter (function(company){
if (company.category === 'Retail'){
    return true;
}
});

console.log("Retailed companies");
console.log(retailCompanies);

//using es6 arrow functions 
const retailCompanies2 = companies.filter((company)=>company.category==='Retail');
console.log("Retailed companies 2 again");
console.log(retailCompanies2);

// filter 80s companies 

const eightyCompanies = companies.filter(function(company){
if (company.start <1990 && company.start>=1980){
    return true;
}
})

console.log("80s companies");

console.log(eightyCompanies);

// Map 
// can create new arrays of whatever u want from a current array

//e.g.1

const companyNames = companies.map(function(company){
    return company.name;
})
console.log("comapny Names");
console.log(companyNames);

//e.g .2 
const testMap = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`

});

console.log("company name and years ")
console.log(testMap)



//e.g 3 using arrow function 
const testMap2 = companies.map(
    company=>`${company.name} [${company.start} - ${company.end}]`
);

console.log("company name and years ");
console.log(testMap2);

// eg.4
const ageMulby2 = ages.map(age=>age*2);
console.log("ages mul by 2");
console.log(ageMulby2);



//e.g 5
// using 2 maps consecutively one after the other 
const twoMap = ages.map(age=>age*2)
.map(age=>Math.sqrt(age));
// it first double all numbers and then it gives their square roots
console.log("calling maps 2 times");
console.log(twoMap);
 


// ######  Sort ######

const sortedCompanies = companies.sort(function(c1,c2){
if (c1.start > c2.start){
    return 1;
}

else{
return -1;
}
});

console.log("sorted companies acc to start data");
console.log(sortedCompanies);
*/
//using es6 
const sortedCompanies2 = companies.sort((a,b)=>(a.start>b.start)? 1:-1);
console.log("sorted companies acc to start data");
console.log(sortedCompanies2);





