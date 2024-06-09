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
  <li><strong>User Authentication</strong>: Secure user login and registration using Clerk.</li>
  <li><strong>Meeting Dashboard</strong>: Centralized view for upcoming, previous, and personal meetings.</li>
  <li><strong>Recordings</strong>: Access to meeting recordings.</li>
  <li><strong>Responsive Layout</strong>: Sidebar navigation and top navbar for easy access to different sections.</li>
  <li><strong>Modern UI</strong>: Utilizes Radix UI components and TailwindCSS for a sleek interface.</li>
</ul>

<h2>Project Structure</h2>

<pre>
<code>
.
├── app/
│   ├── auth/                 # Folder for authentication
│   │   ├── register/         # Registration page
│   │   ├── login/            # Login page
│   ├── dashboard/            # Main layout with sidebar and navbar
│   │   ├── index.tsx         # Home page
│   │   ├── upcoming.tsx      # Upcoming meetings
│   │   ├── previous.tsx      # Previous meetings
│   │   ├── recordings.tsx    # Meeting recordings
│   │   ├── personal-room.tsx # Personal meeting room
│   ├── components/           # Reusable components
├── public/                   # Public assets
├── styles/                   # Styling files
├── package.json
├── README.md
</code>
</pre>

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
      <li>Visit <code>/auth/register</code> to create a new account.</li>
      <li>Visit <code>/auth/login</code> to log in.</li>
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

<h2>Dependencies</h2>

<table>
  <thead>
    <tr>
      <th>Package</th>
      <th>Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://clerk.com">@clerk/nextjs</a></td>
      <td>^5.1.2</td>
    </tr>
    <tr>
      <td><a href="https://www.radix-ui.com/docs/primitives/components/alert-dialog">@radix-ui/react-alert-dialog</a></td>
      <td>^1.0.5</td>
    </tr>
    <tr>
      <td><a href="https://www.radix-ui.com/docs/primitives/components/dialog">@radix-ui/react-dialog</a></td>
      <td>^1.0.5</td>
    </tr>
    <tr>
      <td><a href="https://www.radix-ui.com/docs/primitives/components/dropdown-menu">@radix-ui/react-dropdown-menu</a></td>
      <td>^2.0.6</td>
    </tr>
    <tr>
      <td><a href="https://www.radix-ui.com/docs/primitives/components/slot">@radix-ui/react-slot</a></td>
      <td>^1.0.2</td>
    </tr>
    <tr>
      <td><a href="https://www.radix-ui.com/docs/primitives/components/toast">@radix-ui/react-toast</a></td>
      <td>^1.1.5</td>
    </tr>
    <tr>
      <td><a href="https://getstream.io">@stream-io/node-sdk</a></td>
      <td>^0.2.3</td>
    </tr>
    <tr>
      <td><a href="https://getstream.io">@stream-io/video-react-sdk</a></td>
      <td>^1.0.12</td>
    </tr>
    <tr>
      <td><a href="https://www.npmjs.com/package/@types/react-datepicker">@types/react-datepicker</a></td>
      <td>^6.2.0</td>
    </tr>
    <tr>
      <td><a href="https://www.npmjs.com/package/class-variance-authority">class-variance-authority</a></td>
      <td>^0.7.0</td>
    </tr>
    <tr>
      <td><a href="https://www.npmjs.com/package/clsx">clsx</a></td>
      <td>^2.1.1</td>
    </tr>
    <tr>
      <td><a href="https://www.npmjs.com/package/lucide-react">lucide-react</a></td>
      <td>^0.379.0</td>
    </tr>
    <tr>
      <td><a href="https://nextjs.org">next</a></td>
      <td>14.2.3</td>
    </tr>
    <tr>
      <td><a href="https://reactjs.org">react</a></td>
      <td>^18</td>
    </tr>
    <tr>
      <td><a href="https://www.npmjs.com/package/react-datepicker">react-datepicker</a></td>
      <td>^6.9.0</td>
    </tr>
    <tr>
      <td><a href="https://reactjs.org">react-dom</a></td>
      <td>^18</td>
    </tr>
    <tr>
      <td><a href="https://react-icons.github.io/react-icons">react-icons</a></td>
      <td>^5.2.1</td>
    </tr>
    <tr>
      <td><a href="https://www.npmjs.com/package/tailwind-merge">tailwind-merge</a></td>
      <td>^2.3.0</td>
    </tr>
    <tr>
      <td><a href="https://www.npmjs.com/package/tailwindcss-animate">tailwindcss-animate</a></td>
      <td>^1.0.7</td>
    </tr>
  </tbody>
</table
