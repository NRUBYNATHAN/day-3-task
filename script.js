
//JSON iterate for loop concept;

var a =[
    {
        "name":"ruby",
        "age":"23"
    },
    {
        "name":"santhanam",
        "age":"21"
    },{
        "name":"john",
        "age":"23"
    }
];
for(var i = 0;i<a.length;i++){
    console.log(a[i].name)
};

//JSON iterate for in concept;

var a =[
    {
        "state":"tamilnadu",
        "language":"tamil"
    },
    {
        "state":"kerala",
        "language":"malayalam"
    }
]
for(var index in a ){
    console.log(index)
}

//JSON iterate for of concept;

var a =[
    {
        "state":"tamilnadu",
        "language":"tamil"
    },
    {
        "state":"kerala",
        "language":"malayalam"
    }
]
for(var ruby of a ){
    console.log(ruby.state)
}

//JSON iterate for each concept;
var datesBooking = [
    {"date": "04\/24\/2018",
    "month":"6"

},
      {"date": "04\/25\/2018",
    "month":"7"}
    ];
    
    datesBooking.forEach(function(ruby) {
      console.log(ruby);
    });


// MY RESUME;
var resume=
    {
        "name":"RUBYNATHAN N ",
        "age":"20",
        "sex":"male",
        "nationality":"indian",
        "email":"rubynathan999@gmail.com",
        "phone":"6558455444",
        "languages known":"tamil,english",
        "skill":"web development",
        "hobby":"reading books",
        "work experiance":"0years",
        "gratuate":"bsc.chemistry"

    }
    console.log(resume)






