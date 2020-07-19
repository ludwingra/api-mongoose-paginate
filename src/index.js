const express = require('express');
const app = express();

app.use(express.json());

// Import routes
const routes = require('./routes');

require('./database');

// Set of port
app.set('port', 3000);

/**
 * Routes
 * 
 * Productos
 */
app.use(routes.productRoutes);

app.get('/', (req, res, next) => {
  res.send('Hello word');
})

// Ejecución
app.listen(app.get('port'), () => {
  console.log(`Listenning on port ${app.get('port')}`);
});