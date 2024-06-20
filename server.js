import  express from 'express';

const app = express();

app.get('/',(req,res) =>{

res.send('Server is ready]!');
});

//get  a list of 5 jokes

app.get('/api/jokes',(req,res)=>{

    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'this is a joke',
        },
        {
            id:2,
            title:'Another joke',
            content:'this is a joke2',
        },
        {
            id:3,
            title:'good joke',
            content:'this is a joke',
        },
        {
            id:4,
            title:'bad joke',
            content:'this is a joke',
        },
        {
            id:5,
            title:'nice joke',
            content:'this is a joke',
        },
    ];
    res.send(jokes);
});


const port = process.env.PORT || 4000;

app.listen(port,() =>{
    console.log('Serve at http://localhost:${port}');
});
