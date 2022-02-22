
// QUESTION NO:1

    class movie{
    constructor(title,studio,rating="PG-13"){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
    getPG(){
    return this.title;
    }
    getstudio(){
    return this.studio;
    }
    getrating(){
    return this.rating;
    }
    }
    let s1=new movie("casino Royale","Eon productions");
    console.log(s1.getPG());
    console.log(s1.getstudio());
    console.log(s1.getrating());


// QUESTION NO:2

    class circle{
        constructor(radius,color, area, circumference, string){
        this.radius=radius;
        this.color=color;
        this.area=area;
        this.circumference=circumference;
        this.string=string;
        }
        getradius(){
        return this.radius;
        }
        getcolor(){
        return this.color;
        }
        getarea(){
        return this.area;
        }
        getcircumference(){
        return this.circumference;
        }
        getstring(){
        return this.string;
        }
        }
        let round=new circle("pi r**2","red","A=pi r**2","=pi r**2","circle")
        console.log(round.getradius());
        console.log(round.getcolor());
        console.log(round.getarea());
        console.log(round.getcircumference());
        console.log(round.getstring());

        // QUESTION NO:3 Write a “person” class to hold all the details.
        class person{
            constructor(name,age,address,email){
                this.name=name;
                this.age=age;
                this.address=address;
                this.email=email;
            }
            getname(){
                return this.name;
            }
            getage(){
                return this.age;
            }
            getaddress(){
                return this.address;
            }
            getemail(){
                return this.email;
            }
        }
        let details=new person("John","35","San Fransisco","john@gmail.com")
        console.log(details.getname());
        console.log(details.getage());
        console.log(details.getaddress());
        console.log(details.getemail());


    //  QUESTION NO:4 write a class to calculate uber price   
        class fare{
            constructor(pool,suv,premium,uberxl){
                this.pool=pool;
                this.suv=suv;
                this.premium=premium;
                this.uberxl=uberxl;
            }
            getpoolfare(){
                return this.pool;
            }
            getsuvfare(){
                return this.suv;
            }
            getpremiumfare(){
                return this.premium;
            }
            getuberxlfare(){
                return this.uberxl;
            }
        }
        let faredetails=new fare("Rs.10/km","Rs.20/km","Rs.25/km","Rs.28/km")
        console.log(faredetails.getpoolfare());
        console.log(faredetails.getsuvfare());
        console.log(faredetails.getpremiumfare());
        console.log(faredetails.getuberxlfare());
