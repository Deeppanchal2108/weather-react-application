<h1>Weather App</h1>

<p>
  This is a simple weather application built using <strong>React</strong>. The app fetches real-time weather information and background images for any city using the <strong>Weather API</strong> and <strong>Unsplash API</strong> respectively. The <strong>Context API</strong> is used to manage the global state, while <strong>Axios</strong> is used for making API requests.
</p>

<h2>Features</h2>
<ul>
  <li><strong>Real-time Weather Data</strong>: Get the current weather of any city by entering its name.</li>
  <li><strong>Dynamic Background</strong>: The background image updates based on the location, using the Unsplash API.</li>
  <li><strong>Global State Management</strong>: The Context API is used to efficiently manage the state across components.</li>
  <li><strong>Axios for API calls</strong>: Axios handles requests to the weather and image APIs, ensuring smooth and fast data fetching.</li>
</ul>

<h2>Tech Stack</h2>
<ul>
  <li><strong>React</strong>: Front-end framework for building the UI.</li>
  <li><strong>Context API</strong>: For global state management across components.</li>
  <li><strong>Axios</strong>: To handle API requests for weather data and background images.</li>
  <li><strong>Unsplash API</strong>: For fetching background images related to the searched location.</li>
  <li><strong>Weather API</strong>: To fetch real-time weather data for any city.</li>
</ul>

<h2>Setup</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/yourusername/weather-react-application.git</code></pre>
  </li>
  <li>Install the dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Create a <code>.env</code> file in the root of the project and add your API keys:
    <pre><code>REACT_APP_WEATHER_API_KEY=your_weather_api_key
REACT_APP_UNSPLASH_API_KEY=your_unsplash_api_key</code></pre>
  </li>
  <li>Start the development server:
    <pre><code>npm start</code></pre>
  </li>
</ol>

<h2>How it Works</h2>
<ol>
  <li><strong>City Input</strong>: Enter the name of any city in the input field.</li>
  <li><strong>API Requests</strong>: When the search button is clicked, Axios makes two API calls:
    <ul>
      <li>One to the Weather API to fetch real-time weather data.</li>
      <li>Another to the Unsplash API to fetch a relevant background image for the city.</li>
    </ul>
  </li>
  <li><strong>Context API</strong>: The fetched data is passed down through the components using the Context API, allowing for smooth and efficient state management across the app.</li>
  <li><strong>Display</strong>: The weather details and background image are dynamically rendered based on the fetched data.</li>
</ol>

<h2>Dependencies</h2>
<ul>
  <li><strong>React</strong>: ^17.x</li>
  <li><strong>Axios</strong>: ^0.x</li>
  <li><strong>Unsplash API</strong></li>
  <li><strong>Weather API</strong></li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>
