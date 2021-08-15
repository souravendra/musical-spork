const fs = require('fs')

    const data =  [
        {
            "id": 1, "name": "ABCD"
        },
        {
            "id": 1, "name": "randomtext123"
        }
    ]


for(i=0 ; i<data.length ; i++) {
    data[i].id = i+1
    
}

let dataOut = JSON.stringify(data)

fs.writeFile('Output.txt', dataOut, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;
})
