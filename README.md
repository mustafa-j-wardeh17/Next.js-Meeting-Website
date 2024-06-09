<h1 align="center">PS Meeting App</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.3-blue.svg" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue.svg" alt="TypeScript">
  <img src="https://img.shields.io/badge/React-18.0-blue.svg" alt="React">
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.1-blue.svg" alt="TailwindCSS">
</p>

<h2>Overview</h2>

<p><strong>PS Meeting App</strong> is a Next.js-based web application for managing and conducting virtual meetings. It features user authentication, a dashboard for managing upcoming and past meetings, personal meeting rooms, and recording functionalities.</p>

<h2>Features</h2>

<ul>
  <li><strong>Secure User Authentication</strong>: Utilize Clerk for user registration and login, ensuring secure access to the app.</li>
  <li><strong>Centralized Meeting Dashboard</strong>: View and manage all your meetings from a single dashboard. It includes sections for:
    <ul>
      <li>Upcoming Meetings: Schedule and view upcoming meetings.</li>
      <li>Previous Meetings: Access details of past meetings.</li>
      <li>Personal Room: Host private meetings in a dedicated personal room.</li>
      <li>Recordings: View and manage meeting recordings.</li>
    </ul>
  </li>
  <li><strong>Modern UI Components</strong>: Enhanced user experience with ShadCN UI components for alert dialogs, dialogs, dropdown menus, and toasts.</li>
  <li><strong>Responsive Layout</strong>: Features a sidebar and top navbar for easy navigation across the app.</li>
  <li><strong>Stream Integration</strong>: Seamless video conferencing capabilities using Stream SDKs.</li>
</ul>

<h2>Technology Stack</h2>

<p>PS Meeting App is built using a modern stack of web technologies:</p>

<ul>
  <li><strong>Next.js</strong>: Framework for React applications, enabling server-side rendering and static site generation.</li>
  <li><strong>React</strong>: JavaScript library for building user interfaces.</li>
  <li><strong>TypeScript</strong>: Strongly typed programming language that builds on JavaScript.</li>
  <li><strong>TailwindCSS</strong>: Utility-first CSS framework for styling.</li>
  <li><strong>ShadCN UI</strong>: Collection of UI components for React applications, used for dialogs, alerts, dropdowns, and toasts.</li>
  <li><strong>Stream SDK</strong>: Provides video conferencing and real-time communication capabilities.</li>
</ul>

<h2>Screenshots</h2>

<p>Here are some screenshots of the PS Meeting App in action:</p>

<p align="center">
  <img src="https://example.com/screenshot-dashboard.png" alt="Dashboard Screenshot" width="600">
  <img src="https://example.com/screenshot-authentication.png" alt="Authentication Screenshot" width="600">
</p>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>

<ul>
  <li><strong>Node.js</strong> (>= 18)</li>
  <li><strong>npm</strong> (>= 8)</li>
</ul>

<h3>Installation</h3>

<ol>
  <li><strong>Clone the repository:</strong>
    <pre><code>git clone https://github.com/your-username/ps-meeting-app.git
cd ps-meeting-app</code></pre>
  </li>
  <li><strong>Install dependencies:</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li><strong>Configure environment variables:</strong>
    <p>Create a <code>.env.local</code> file in the root directory and add necessary environment variables. Refer to the <code>.env.example</code> file for required variables.</p>
  </li>
</ol>

<h3>Running the App</h3>

<ul>
  <li><strong>Development Mode:</strong>
    <pre><code>npm run dev</code></pre>
    <p>Access the app at <code>http://localhost:3000</code>.</p>
  </li>
  <li><strong>Production Mode:</strong>
    <pre><code>npm run build
npm start</code></pre>
  </li>
</ul>

<h2>Usage</h2>

<ul>
  <li><strong>Authentication:</strong>
    <ul>
      <li>Visit <code>/auth/sign-up</code> to create a new account.</li>
      <li>Visit <code>/auth/sign-in</code> to log in.</li>
    </ul>
  </li>
  <li><strong>Dashboard:</strong>
    <ul>
      <li>Home: <code>/</code></li>
      <li>Upcoming Meetings: <code>/dashboard/upcoming</code></li>
      <li>Previous Meetings: <code>/dashboard/previous</code></li>
      <li>Recordings: <code>/dashboard/recordings</code></li>
      <li>Personal Room: <code>/dashboard/personal-room</code></li>
    </ul>
  </li>
</ul>

<h2>Scripts</h2>

<ul>
  <li><code>npm run dev</code>: Start the development server.</li>
  <li><code>npm run build</code>: Build the application for production.</li>
  <li><code>npm start</code>: Start the production server.</li>
  <li><code>npm run lint</code>: Run ESLint to lint the codebase.</li>
</ul>

<h2>Upcoming Features</h2>

<p>We are continually working to improve the PS Meeting App. Here are some features that are in the pipeline:</p>

<ul>
  <li><strong>Enhanced Meeting Scheduling</strong>: Advanced scheduling options with calendar integration.</li>
  <li><strong>Improved Analytics</strong>: Detailed analytics for meeting performance and user engagement.</li>
  <li><strong>Customizable Meeting Rooms</strong>: Personalize your meeting room settings and layouts.</li>
</ul>

<h2>Getting Involved</h2>

<p>If you want to contribute to the PS Meeting App or report issues, please visit our <a href="https://github.com/your-username/ps-meeting-app/issues">GitHub Issues</a> page. We welcome contributions and feedback to make this app better for everyone!</p>

<p align="center">
  <strong>Happy Meeting!</strong>
</p>
