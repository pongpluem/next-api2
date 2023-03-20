export default function handler(req, res) {
    // get 
    const body = req.body;


    // insert DB
    
    console.log(body);
    console.log(body.id);


    console.log("POST");
    //console.log(title);

    const id =""
    const title = ""


    res.status(200).json({ id : '1', title: '2' });
  }
  