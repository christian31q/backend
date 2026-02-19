// Test script to read response from the API
const API_BASE_URL = 'https://api-qig9.onrender.com';


// Test the /test.php endpoint
async function testTestEndpoint() {
    try {
        console.log('Testing /test.php endpoint...');
        const response = await fetch(`${API_BASE_URL}/test.php`);
        const data = await response.text();
        console.log('Status:', response.status);
        console.log('Response:', data);
        console.log('---\n');
    } catch (error) {
        console.error('Error testing /test.php endpoint:', error.message);
    }
}

// Test the /registro.php endpoint with POST data
async function testRegistroEndpoint() {
    try {
        console.log('Testing /registro.php endpoint with POST data...');
        const testData = {
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Test message from Node.js'
        };

        const response = await fetch(`${API_BASE_URL}/registro.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        });

        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Response:', JSON.stringify(data, null, 2));
        console.log('---\n');
    } catch (error) {
        console.error('Error testing /registro.php endpoint:', error.message);
    }
}

// Run all tests
async function runAllTests() {
    console.log('=== API Testing Started ===\n');
    await testTestEndpoint();
    await testRegistroEndpoint();
    console.log('=== API Testing Completed ===');
}

// Execute tests
runAllTests();
