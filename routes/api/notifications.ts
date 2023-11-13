//this is a route that will be used to send notifications to the user
//this where users go to see their notifications
//it calls the notification api on the backend to the notifications.
import { Router } from "express";

const router = Router();

router.get('/user/notifications', async (req, res) => {
    const userId = req.user.id; // Assuming user id is available in the request

    try {
        const response = await fetch(`http://tryunblocked.com/notifications/status?userId=${userId}`);
        const notifications = await response.json();

        res.json(notifications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching notifications' });
    }
});

export default router;