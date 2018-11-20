import request from 'superagent'

let url = `https://www.googleapis.com/calendar/v3/calendars/${process.env.CAL_ID}/events?key=${process.env.GOOGLE_API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}