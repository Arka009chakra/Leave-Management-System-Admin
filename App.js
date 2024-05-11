const express = require("express");
const cors = require("cors");
const app = express();
const m = require("./mongodb");
const m1 = require("./Mongodb1");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/add',async(req,res)=>{
    const {cemail,leave} = req.body;
    await m.create({
        cemail,
        leave
    })
})
app.post('/get', async (req, res) => {
const x = await m1.find();
res.send(x);
});
app.post('/update/:cemail', async (req, res) => {
    try {
        const cemail = req.params.cemail;
        const x1 = await m.findOne({ cemail: cemail });
        
        if (x1) {
            const x2 = x1.leave;
            const y1 = await m1.findOne({ cemail: cemail });
            const y2 = y1.leave;
            const y3 = x2 - y2;
            
            // Update the leave value of x1 based on y3
            await m.updateOne({ cemail: cemail }, { $set: { leave: y3 } });
            
            // Delete the data from the database
            await m1.deleteOne({ cemail: cemail });
            
            res.status(200).json({ message: "Leave value updated and data deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});



app.listen(3200);