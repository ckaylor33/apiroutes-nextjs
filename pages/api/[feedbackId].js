import { extractFeedback, buildFeedbackPath } from './feedback'

// how to set up dynamic api routes - server-side code for dynamic data and coded in the url path
function handler(req, res) {
  // if(req.method === 'DELETE') {
  // could also do checks depending on what functionality you want to do - delete items from your data for example
  // }
  const feedbackId = req.query.feedbackId
  const filePath = buildFeedbackPath()
  const feedbackData = extractFeedback(filePath)
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  )
  res.status(200).json({ feedback: selectedFeedback })
}

export default handler
