import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get('/user/storage', async (context) => {
    const userId = context.state.user.id; // Assuming user id is available in the context state

    try {
        const response = await fetch(`http://tryunblocked.com/storage/download?userId=${userId}`);
        const data = await response.json();

        context.response.body = data;
    } catch (error) {
        console.error(error);
        context.response.status = 500;
        context.response.body = { message: 'Error fetching user data' };
    }
});

export default router;