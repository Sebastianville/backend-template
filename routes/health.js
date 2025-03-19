import { Router } from "express";

//*this method is the same as the one Colton showed us
export const healthRouter = new Router();

//! This is where step 5 starts. The main app (in this case index.js) does not anyting about this file yet. We have to do a couple of steps
healthRouter.get('/', (req, res) => {
    res.status(200).json({
        "Status": "Ok"
    })
})