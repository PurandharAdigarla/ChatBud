import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// connections
const PORT = process.env.PORT || 9876;
connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log("Server Open & Connected To Database 🤟");
    });
}).catch((err) => console.log(err));
//# sourceMappingURL=index.js.map