const { json } = require('express');
const express = require('express');
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const app = express();
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDYvLgXm9Civu6h\nK0SZYZFzVQ631X6v/EWiExswHC+HGNdir2SJYvYjc8PqG7USb1m4nVylJBNqhpxC\nrM0w1Qfsx440sHFY9MVcvcMLGOjhq/k/c1FgFYEIAv+GUSb8lHu0R7MUpnQO/zqE\nvWxz6KDYAd365/PAApe3z4K93Gbu+/6xkLniUA6Mkf0I/zwJ/757O1PFVF4H7jfk\ncE7zhk1fLHdh040z3fFdMkygvl04MgyfMaNkruJsoBkuJNdxAAH6iJoAlZatbcoA\n4jV1WfDRA/7bQsEL58TMv3rsqQ3CaR2Dy7ZpqjDSmDtfZM39WQ84ukoPy/MpjdaV\ntrNWdcctAgMBAAECggEADyee/bOc8oxENkvGt6zdVUGozkzk11xd6BfK6mHGJv2j\nLdjSwFKFoHP7SnbWgev8S47hSADORMAV1AmuLVBwBevsMx31RwGSfUodhbyfqAv0\n2S1wjrXiOFOxV0x8W+PsBG6RBIwhCF1rU5XFLBOjj4cN5PnsDsx/nFArtafgIKyo\nIEB8c5fZDZcLS5aYq2uAGB/shZjS1dTaMKpxevR7KX1ZHVdfCLFZrFG88/Pvhnvy\nlGyk6xm3LSklZEcm1X+5dKuz8t45x+hEdwUjAQftngtP8IuuBZiCdA+rnsgR8Tli\n4aezJgeK2M4g+CrumN7g6LYJ8jxu3A/rMu3AaDa3BwKBgQD64S0/SRRA9UoIcyxa\nakNZYuEjZ5ov/QcbWZUdoYscAzVUlGN9Ergp6V2K8mwvkCROAmELv4VoZCmnwuDw\nd2NDNVFXExvayAT6iCXB27FeyMLTXZzgLGhC8WJFNkhB8+4oCBjlv+CiPZVfNl+h\ndsQSTfbRna4FGNEXxev5VUzA9wKBgQDdKSa+G0w/QEtXdVgwJBHlIUolx1H30TZF\nREqpmkW1tFCY8h0cY2GzlUVkfOo3IUgXePcQYg+fsVoBRl07CwLI3ByNKvkKkvp0\n9Go3peWJ2X/vTfX06b9bnRFrUTl0chb0h/vz9Ph2WGY6XAe6mcXanHG0JlfbNhhg\ndvhD9t/T+wKBgQCzs100qoTuboSD/vNzJBBv02rOcGQ6IXTYu1cbLV42R3oIxm1o\n5mKx6q2NXE3v18CZfAzFXH8TokNQHj//HpUkS+mihFZ8ZK9kQOdCr7mh2g3rVm+L\nB2P7J2mrh9FEJJSfagVjdAhUTeZTl9/yCN8y+VNlHBvNHNSQwb1gECB1SwKBgCfX\nJ/GLPVsPnALvUqmpdcfPDWps06lO+PXVbZXMAs7O4s4Kn4/jn1AYjd2iWxb/WdtQ\noUFESQg9jLc6E8V1IFVKwaH0odRz0caL2S6ZJhaFJfTYGHy8Nwqr6t1oTm9ZtiTq\n8kpqUPAQ0KmmtoW4+dl94UXQunb08cM+605jBMNNAoGBALbtrgK3YdZi3XMjegMi\neQtnpbLnnlR8oN/NB4a7tWX/Rx2ievG3uAzNqLiwjKIVsZfZMfsM6hzQeFVON8Kk\ncSOO24qxMxW6ENUYF4/h8GZZcBvTPlRAmcQcuRE6dinjaqGftAcrtJd3JImd+bYF\nPS71VAhsP5D98zdzU0jmASGg\n-----END PRIVATE KEY-----\n";
const GOOGLE_CLIENT_EMAIL = "calendar-key@node-g-calendar.iam.gserviceaccount.com";
const GOOGLE_PROJECT_NUMBER = "1083600382803";
const GOOGLE_CALENDAR_ID = "c_c28382e66a9189d61e76ffe755d6aadd9fff08b2f045a39117a9e53d968c4451@group.calendar.google.com";


const jwtClient = new google.auth.JWT(
	GOOGLE_CLIENT_EMAIL,
	null,
	GOOGLE_PRIVATE_KEY,
	SCOPES
);

const calendar = google.calendar({
	version: 'v3',
	project: GOOGLE_PROJECT_NUMBER,
	auth: jwtClient
});

app.get('/', (req, res) => {

	calendar.events.list({
		calendarId: GOOGLE_CALENDAR_ID,
		singleEvents: true,
		orderBy: 'startTime',
	}, (error, result) => {
		if (error) {
			res.send(JSON.stringify({ error: error }));
		} else {
			if (result.data.items.length) {
				res.send(JSON.stringify({ events: result.data.items }));
				console.log(result.data)
	} else {
				res.send(JSON.stringify({ message: 'No  events found.' }));
			}
		}
	}); 
});

app.listen(8088, () => console.log(`App listening on port 8088!`));
