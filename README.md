# MF Advisory - Mutual Fund Investment Platform

## Project Overview
MF Advisory is a responsive web application designed to help users make smart investment decisions through personalized financial planning and expert advice on mutual fund investments. The platform showcases top-performing mutual funds and offers custom financial planning services.

## Features
- **Modern UI**: Clean, responsive design with intuitive navigation
- **Fund Showcase**: Display of top-performing mutual funds with key metrics
- **Interactive Forms**: Callback request and detailed financial planning questionnaire
- **Backend Integration**: Express server with MySQL database storage for user submissions
- **Performance Metrics**: Showcase of investment expertise and historical performance

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Additional Libraries**: CORS for cross-origin requests, body-parser for handling form data

## Project Structure
```
mf-advisory/
├── index.html              # Main frontend webpage
├── style.css               # Styling for the website
├── script.js               # Client-side JavaScript functionality
├── server.js               # Express backend server
├── carousel-2.jpg          # Hero background image
├── README.md               # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js (v14+ recommended)
- MySQL Server

### Database Setup
1. Create a MySQL database named `mf_advisory_db`
2. Create the following tables:

```sql
CREATE TABLE callbacks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE financial_plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    age INT NOT NULL,
    marital_status VARCHAR(50) NOT NULL,
    dependents VARCHAR(3) NOT NULL,
    num_dependents INT,
    income DECIMAL(15,2) NOT NULL,
    expenses DECIMAL(15,2) NOT NULL,
    assets TEXT NOT NULL,
    net_worth DECIMAL(15,2) NOT NULL,
    short_term_goals TEXT NOT NULL,
    long_term_goals TEXT NOT NULL,
    horizon VARCHAR(100) NOT NULL,
    risk_tolerance VARCHAR(100) NOT NULL,
    potential_loss VARCHAR(3) NOT NULL,
    preferences TEXT,
    lumpsum DECIMAL(15,2),
    sip DECIMAL(15,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mf-advisory.git
   cd mf-advisory
   ```

2. Install backend dependencies:
   ```
   npm init -y
   npm install express mysql2 body-parser cors
   ```

3. Configure the database connection in `server.js` if necessary:
   ```javascript
   const db = mysql.createConnection({
       host: 'localhost',   // or your MySQL server IP address
       user: 'root',        // your MySQL username
       password: 'root',    // your MySQL password
       database: 'mf_advisory_db'
   });
   ```

4. Start the server:
   ```
   node server.js
   ```

5. Open `index.html` in a web browser or use a local server like Live Server (VS Code extension).

## Usage
- Navigate to the website through your browser
- Browse top-performing mutual funds
- Use the "Request a Callback" button to get in touch with an advisor
- Complete the "Create a Financial Plan" form for personalized investment advice

## Screenshots

### Homepage
![Homepage](/Live Demo Screenshots/homepage.png)
*Main landing page with hero section*

### Services Section
![Services](/Live Demo Screenshots/services.png)
*Overview of financial services offered*

### Financial Planning Form
![Financial Planning](/Live Demo Screenshots/financial-plan.png)
*Detailed questionnaire for personalized financial planning*

### Callback Form
![Callback](/Live Demo Screenshots/callback.png)
*Quick form to request advisor callback*

> Note: Add actual screenshots to a `/screenshots` directory in your repository and update these image paths accordingly.

## Future Enhancements
- User authentication and account management
- Portfolio tracking and management
- Real-time fund data integration
- Fund comparison tools
- Mobile app development

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any inquiries or support requests, please contact:
- Email: your.email@example.com
- Website: [yourwebsite.com](https://yourwebsite.com)
