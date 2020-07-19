// Credits: Akshay Saini
// Use case => when there is a function that can be used by many objects.

const getFullName = function() {
    console.log(this.firstName + " " + this.lastName);
};

const name1 = {
    firstName: "Gagandeep",
    lastName: "Singh Ahuja",
}

const name2 = {
    firstName: "Rahul",
    lastName: "Dravid",
}

getFullName.call(name1);
getFullName.call(name2);

// Only Difference between call and apply is how we pass parameters. In call we pass it directly and in apply we pass it using an arraylist

const getAboutInfo = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " is from " + hometown + " in " + state);
};

getAboutInfo.call(name1, "Bareilly", "Uttar Pradesh");
getAboutInfo.call(name2, "Bengaluru", "Karnataka");

getAboutInfo.apply(name1, [ "Bareilly", "Uttar Pradesh" ]);
getAboutInfo.apply(name2, [ "Bengaluru", "Karnataka" ]);

// Bind is used when we do not just want to invoke it, but create a copy of it with a particular object and use that copy for further invocation

const RahulInfo = getAboutInfo.bind(name2, "Bengaluru", "Karnataka");
RahulInfo();
