export default function handler(req, res) {
   
    const {
      //query: { id },
      query,
      method,
    } = req;
  
    console.log(query)
    
  
    switch (method) {
      case "GET":
        console.log("GET");
        const { query, limit } = req.query;
        console.log("query = "+query);
        console.log("limit = "+limit);
        
        //res.status(200).json({ id, title: `Post #${id}` });
        res.status(200).json({ id: "" });
        break;
      case "PUT":
        console.log("PUT");
        res.status(200).json({ id, title: title || `Post #${id}` });
        break;
      case "POST":
        const body = req.body;
        console.log(body);
        console.log(body.id);
    
        console.log("POST");
        //console.log(title);
        const id =""
        const title = ""
        res.status(200).json({ id, title });
        break;
      default:
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }