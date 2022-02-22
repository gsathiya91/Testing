
let time=1000;

setTimeout(()=>{
    document.body.append(10)
    setTimeout(()=>{
        document.body.append(9)
        setTimeout(()=>{
            document.body.append(8)
            setTimeout(()=>{
                document.body.append(7)
                setTimeout(()=>{
                    document.body.append(6)
                    setTimeout(()=>{
                        document.body.append(5)
                        setTimeout(()=>{
                            document.body.append(4)
                            setTimeout(()=>{
                                document.body.append(3)
                                setTimeout(()=>{
                                    document.body.append(2)
                                    setTimeout(()=>{
                                        document.body.append(1)
                                        setTimeout(()=>{
                                            document.body.append("Happy Independence Day")
                                        }, time)
                                    }, time)
                                }, time)
                            }, time)
                        }, time)
                    }, time)
                }, time)
            }, time)
        }, time)
    }, time)
}, time)



