const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
    year: { type: Number },
    amount: { type: Number },
    colorcode: { type: String }
})

const Chart = mongoose.model("Chart", chartSchema);

module.exports = Chart;