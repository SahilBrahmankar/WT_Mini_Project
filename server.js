const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express App
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',   // or your MySQL server IP address
    user: 'root',        // your MySQL username
    password: 'root', // your MySQL password
    database: 'mf_advisory_db'  // the database you created earlier
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('MySQL connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL');
});

// Route to handle callback form submission
app.post('/api/callback', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    const query = `INSERT INTO callbacks (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)`;
    
    db.execute(query, [name, email, phone, subject, message], (err, results) => {
        if (err) {
            console.error('Error inserting callback data:', err);
            return res.status(500).json({ error: 'Failed to submit callback request' });
        }
        res.json({ msg: 'Callback request submitted successfully!' });
    });
});

// Route to handle financial plan form submission
app.post('/api/create-financial-plan', (req, res) => {
    const {
        age, maritalStatus, dependents, numDependents, income, expenses, assets, netWorth, shortTermGoals,
        longTermGoals, horizon, riskTolerance, potentialLoss, preferences, lumpsum, sip
    } = req.body;

    console.log("Received form data:", req.body);  // Log incoming data

    const query = `INSERT INTO financial_plans (age, marital_status, dependents, num_dependents, income, expenses, assets, net_worth, short_term_goals, long_term_goals, horizon, risk_tolerance, potential_loss, preferences, lumpsum, sip) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.execute(query, [
        age, maritalStatus, dependents, numDependents, income, expenses, assets, netWorth, shortTermGoals,
        longTermGoals, horizon, riskTolerance, potentialLoss, preferences, lumpsum, sip
    ], (err, results) => {
        if (err) {
            console.error('Error inserting financial plan data:', err);
            return res.status(500).json({ error: 'Failed to create financial plan' });
        }
        console.log('Data inserted successfully:', results);
        res.json({ msg: 'Financial plan created successfully!' });
    });
});


// Start the server
app.listen(5001, () => {
    console.log('Server is running on port 5001');
});
