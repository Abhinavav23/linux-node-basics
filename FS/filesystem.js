const fs = require('fs');

fs.mkdir('./FS/NewDir', (err) => {
    if(err){
        console.log(`Error ocuured: ${err.code} and error is ${err.message}`);
        return 
    }
    // further processes
    console.log('dir created successfully');
})