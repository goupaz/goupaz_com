import { NextApiRequest, NextApiResponse } from 'next';

type Event = {
  id: string;
  title: string;
  date: string;
};

type EventCreateData = {
  title: string;
  date: string;
};

let events: Event[] = [
  { id: '1', title: 'Event 1', date: '2023-07-03' },
  { id: '2', title: 'Event 2', date: '2023-07-10' },
];

// Search events by title
const searchEvents = (query: string): Event[] => {
  query = query.toLowerCase();
  return events.filter((event) => event.title.toLowerCase().includes(query));
};

// List all events
const listEvents = (): Event[] => {
  return events;
};

// Create a new event
const createEvent = (data: EventCreateData): Event => {
  const id = Math.random().toString();
  const newEvent: Event = {
    id,
    title: data.title,
    date: data.date,
  };
  events.push(newEvent);
  return newEvent;
};

// Delete an event
const deleteEvent = (eventId: string): void => {
  events = events.filter((event) => event.id !== eventId);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (req.query.q) {
      const query: string = req.query.q as string;
      const searchResults = searchEvents(query);
      const html = renderEventList(searchResults);
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
    } else {
      const events = listEvents();
      const html = renderEventList(events);
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
    }
  } else if (req.method === 'POST') {
    const eventData: EventCreateData = req.body;
    const newEvent = createEvent(eventData);
    const html = renderEvent(newEvent);
    res.setHeader('Content-Type', 'text/html');
    res.status(201).send(html);
  } else if (req.method === 'DELETE') {
    const eventId: string = req.query.id as string;
    deleteEvent(eventId);
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<p>Event deleted successfully</p>');
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.status(405).send('<p>Method not allowed</p>');
  }
}

function renderEventList(events: Event[]): string {
  const eventItems = events.map((event) => {
    return
     `
      <li>
        <h3>${event.title}</h3>
        <p>Date: ${event.date}</p>
        <form method="POST" action="/api/events/${event.id}?_method=DELETE">
          <button type="submit">Delete</button>
        </form>
      </li>
    `;
  });

  return `
    <html>
      <head>
        <title>Events</title>
      </head>
      <body>
        <h1>Events</h1>
        <ul>
          ${eventItems.join('')}
        </ul>
        <form method="POST" action="/api/events">
          <input type="text" name="title" placeholder="Event title" required />
          <input type="date" name="date" required />
          <button type="submit">Create Event</button>
        </form>
      </body>
    </html>
  `;
}

function renderEvent(event: Event): string {
  return `
    <html>
      <head>
        <title>Event Created</title>
      </head>
      <body>
        <h1>Event Created</h1>
        <p>Title: ${event.title}</p>
        <p>Date: ${event.date}</p>
      </body>
    </html>
  `;
}
